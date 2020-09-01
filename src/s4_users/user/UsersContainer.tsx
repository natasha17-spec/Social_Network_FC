import React, {ChangeEvent, useEffect} from 'react'
import Users from "../users/Users";
import {AppStateType} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {actions, getUsers, UserType} from "../../redux/reducers/usersReducer";
import Pagination from "@material-ui/lab/Pagination";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import styles from "./User.module.css"
const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);
const UsersContainer:React.FC = ()=>{
    const {users, pageSize, currentPage, totalUsersCount} = useSelector((state: AppStateType) => state.getUsersReducers)
    const dispatch = useDispatch()
    const pageChangedHandler = (e: ChangeEvent<unknown>, page: number) => {
        dispatch(actions.setCurrentPage(page))
    }
    const pageCountSize = Math.ceil(totalUsersCount / pageSize)

    const classes = useStyles();
    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
    }, [pageSize, currentPage])
    return(
        <div>
            <div className={styles.pagination}>
                <div className={classes.root}>
                    <Pagination
                        boundaryCount={1}
                        count={pageCountSize}
                        variant="outlined"
                        color="secondary"
                        onChange={pageChangedHandler}
                        showFirstButton
                        showLastButton
                    />
                </div>
            </div>
                <Users users={users}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       totalUsersCount={totalUsersCount}
                />

        </div>
    )
}
export default UsersContainer;