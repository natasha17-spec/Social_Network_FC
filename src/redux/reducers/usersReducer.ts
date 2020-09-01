import {usersAPI} from "../../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "../store";

type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
type InitialStateType = typeof initialState
let initialState = {
    users: [] as Array<UserType>,
    totalUsersCount: 10,
    currentPage: 1,
    pageSize: 15
}
 const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_USERS':
            return {...state, users: action.users}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.page}
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}

        default:
            return state
    }
}
export default usersReducer
export const actions = {
    setUsers:(users:Array<UserType>)=>({type:"SET_USERS",users: users} as const ),
    setCurrentPage:(page:number)=>({type:"SET_CURRENT_PAGE",page} as const ),
    setTotalUsersCount:(totalUsersCount:number)=>({type:"SET_TOTAL_USERS_COUNT",totalUsersCount} as const )
}
type ActionsType = InferActionsTypes<typeof actions>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>
export const getUsers = (page:number, pageSize:number)=>{
    return async (dispatch:DispatchType)=>{
        dispatch(actions.setCurrentPage(page))
        let data = await usersAPI.getUsers(page,pageSize)
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}