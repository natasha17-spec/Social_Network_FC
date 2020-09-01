import React from "react";
import styles from "./User.module.css"
import avaUser from "../../assets/6.jpg"
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, Theme} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
        createStyles({
                  button: {
                background: "#27aae1",
                padding: '9px 25px',
                border: 'none',
                fontSize: '12px',
                color: '#fff',
                position: 'relative',
                outline: 'none',
                borderRadius: '20px',
            }
        }),
    )
;
const User = () => {
    const classes = useStyles();
    return (
        <div className={styles.users_container}>

            <div className={styles.user_container}>
                <div className={styles.ava_user}>
                    <img src={avaUser} className={styles.img_user}/>
                </div>
                <div className={styles.name_user}>
                    <a href="#">Masha Klinkovich</a>
                </div>
                <div className={styles.div3}>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Add Friend
                    </Button>
                </div>
            </div>
            <div className={styles.user_container}>
                <div className={styles.ava_user}>
                    <img src={avaUser} className={styles.img_user}/>
                </div>
                <div className={styles.name_user}>
                    <a href="#">Masha Klinkovich</a>
                </div>
                <div className={styles.div3}>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Add Friend
                    </Button>
                </div>
            </div>
        </div>
    )
};
export default User;