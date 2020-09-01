import React from "react";
import styles from "./WhoToFollow.module.css"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import WhoToFollowUser from "./whoToFollowUser/WhoToFollowUser";

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
const WhoToFollow = () => {
    const classes = useStyles();

    return (
        <div className={styles.whoToFollow_container}>
            <div className={styles.title}>Who To Follow</div>
            <WhoToFollowUser/>
        </div>
    )
};
export default WhoToFollow;