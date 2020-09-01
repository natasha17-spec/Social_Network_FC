import React from "react";
import styles from "./User.module.css"
import avaUser from "../../assets/6.jpg"
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, Theme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {UserType} from "../../redux/reducers/usersReducer";
import {NavLink} from "react-router-dom";

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
type UsersPropsType = {
    user: UserType
}
const User:React.FC<UsersPropsType> = (props) => {
    const classes = useStyles();
    return (

        <div className={styles.users_container}>

            <div className={styles.user_container}>
                <div className={styles.ava_user}>
                    <NavLink to={'/profile/' + props.user.id}>
                    <img src={props.user.photos.small != null ? props.user.photos.small : avaUser} className={styles.img_user}/>
                    </NavLink>
                </div>
                <div className={styles.name_user}>
                    <div><a href="#">{props.user.name}</a></div>
                    {props.user.status ? <div className={styles.user_status}>"{props.user.status}" </div> :'' }
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