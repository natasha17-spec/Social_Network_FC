import React from "react";
import styles from "../../whoToFollow/WhoToFollow.module.css"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ava1 from "../../../../assets/1.jpg";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            borderRadius: '50%',
            '& > *': {
                margin: theme.spacing(1),
                border: '2px solid white',
            },
        },
    }),
);
const WhoToFollowUser = () => {
    const classes = useStyles();

    return (
        <div className={styles.whoToFollow}>
            <div className={styles.whoToFollow_ava}>
                <div className={classes.root}>
                    <Avatar alt="Remy Sharp" src={ava1}/>
                </div>
            </div>
            <div className={styles.whoToFollow_addFriend}>
                <div className={styles.name}><a href="#">Masha Klinkovich</a></div>
                <div className={styles.addFriend}><a href="#">add Friend</a></div>
            </div>
        </div>
    )
};
export default WhoToFollowUser;