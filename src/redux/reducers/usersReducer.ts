import {usersAPI} from "../../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "../store";

type PhotosType = {
  small: string;
  large: string;
};
export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed: boolean;
};
type InitialStateType = typeof initialState;
let initialState = {
  users: [] as Array<UserType>,
  totalUsersCount: 10, //общее кол-во юзеров с сервера
  currentPage: 1, //текущая страница, то есть на этой странице - 15 юзеров
  pageSize: 15, //сколько юзеров на одной странице
  progress: false,
  followingInProgress: [] as Array<number>,
};
const usersReducer = (
    state = initialState,
    action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SET_USERS":
      return {...state, users: action.users};
    case "SET_CURRENT_PAGE":
      return {...state, currentPage: action.page};
    case "SET_TOTAL_USERS_COUNT":
      return {...state, totalUsersCount: action.totalUsersCount};
    case "PROGRESS":
      return {...state, progress: action.progress};
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {...u, followed: true};
          }
          return u;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {...u, followed: false};
          }
          return u;
        }),
      };
    case "TOGGLE_IS_FOLLOWING_PROGRESS":
      return {
        ...state,
        followingInProgress: action.progress
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter((id) => id != action.userId),
      };
    default:
      return state;
  }
};
export default usersReducer;
export const actions = {
  setUsers: (users: Array<UserType>) =>
      ({type: "SET_USERS", users: users} as const),
  setCurrentPage: (page: number) =>
      ({type: "SET_CURRENT_PAGE", page} as const),
  setTotalUsersCount: (totalUsersCount: number) =>
      ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount} as const),
  setProgress: (progress: boolean) => ({type: "PROGRESS", progress} as const),
  followSuccess: (userId: number) => ({type: "FOLLOW", userId} as const),
  unfollowSuccess: (userId: number) => ({type: "UNFOLLOW", userId} as const),
  toogleFollowingProgress: (progress: boolean, userId: number) =>
      ({
        type: "TOGGLE_IS_FOLLOWING_PROGRESS",
        progress,
        userId,
      } as const),
};
type ActionsType = InferActionsTypes<typeof actions>;
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>;

export const getUsers = (page: number, pageSize: number) => {
  return async (dispatch: DispatchType) => {
    dispatch(actions.setProgress(true));
    dispatch(actions.setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
    dispatch(actions.setProgress(false));
  };
};
export const follow = (userId: number) => {
  return (dispatch: DispatchType) => {
    dispatch(actions.toogleFollowingProgress(true, userId));
    usersAPI.follow(userId).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(actions.followSuccess(userId));
      }
      dispatch(actions.toogleFollowingProgress(false, userId));
    });
  };
};
export const unfollow = (userId: number) => {
  return (dispatch: DispatchType) => {
    dispatch(actions.toogleFollowingProgress(true, userId));
    usersAPI.unfollow(userId).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(actions.unfollowSuccess(userId));
      }
      dispatch(actions.toogleFollowingProgress(false, userId));
    });
  };
};
