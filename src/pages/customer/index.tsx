import React, {ChangeEvent, useCallback, useEffect} from "react";
import Users from "./users";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import styles from "./index.module.css";
import Preloader from "../../../src/components/preloader/Preloader";
import {actions, follow, getUsers, unfollow,} from "../../redux/reducers/usersReducer";
import {AppStateType} from "../../redux/store";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            "& > *": {
                marginTop: theme.spacing(2),
            },
        },
    })
);

const UsersContainer: React.FC = () => {
    const {
        users,
        pageSize,
        currentPage,
        totalUsersCount,
        progress,
        followingInProgress,
    } = useSelector((state: AppStateType) => state.getUsersReducers);
    const dispatch = useDispatch();
    const pageChangedHandler = (e: ChangeEvent<unknown>, page: number) => {
        dispatch(actions.setCurrentPage(page));
    };
    const pageCountSize = Math.ceil(totalUsersCount / pageSize);

    const classes = useStyles();
    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize));
    }, [pageSize, currentPage]);

    const followUser = useCallback(
        function (userId: number) {
            const action = follow(userId);
            dispatch(action);
        },
        [dispatch]
    );
    const unfollowUser = useCallback(
        function (userId: number) {
            const action = unfollow(userId);
            dispatch(action);
        },
        [dispatch]
    );

    return (
        <div>
            <div className={styles.pagination}>
                <div className={classes.root}>
                    <Pagination
                        boundaryCount={1} //начальное и конечное число страниц
                        count={pageCountSize} //кол-во страниц
                        variant="outlined"
                        color="secondary"
                        onChange={pageChangedHandler}
                        showFirstButton
                        showLastButton
                    />
                </div>
            </div>
            <div className={styles.progress}>{progress ? <Preloader/> : null}</div>
            <Users
                users={users}
                pageSize={pageSize}
                currentPage={currentPage}
                totalUsersCount={totalUsersCount}
                followUser={followUser}
                unfollowUser={unfollowUser}
                followingInProgress={followingInProgress}
            />
        </div>
    );
};
export default UsersContainer;
