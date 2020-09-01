import React from "react";
import User from "../user/User";
import {UserType} from "../../redux/reducers/usersReducer";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number

}
const Users: React.FC<UsersPropsType> = (props) => {

    return (
        <div>
            {props.users.map(u => <User user={u} key={u.id} />)}
        </div>
    )
};
export default Users;