import React from "react";
import User from "../user/User";
import {UserType} from '../../../redux/reducers/usersReducer';

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    unfollowUser:(userId:number)=>void
    followUser:(userId:number)=>void
    followingInProgress: Array<number>
}
const Users: React.FC<UsersPropsType> = (props) => {
    return (
        <div>
            {props.users.map(u => <User user={u}
                                        key={u.id}
                                        unfollowUser={props.unfollowUser}
                                        followUser={props.followUser}
                                        followingInProgress={props.followingInProgress}
            />)}
        </div>
    )
};
export default Users;