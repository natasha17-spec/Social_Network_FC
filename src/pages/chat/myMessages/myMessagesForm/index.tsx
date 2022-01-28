import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ava from "./../../../../assets/images/avatar/1.jpg";
import classes from "./index.module.css";

type PropsType = {
    message: string;
};

const MyMessagesForm: React.FC<PropsType> = ({message}) => {
    return (
        <div className={classes.message}>
            <div className={classes.form}>
                <div>{message}</div>
                <Avatar alt="Remy Sharp" src={ava}/>
            </div>
            <div className={classes.wrap}>
                <div className={classes.dot}/>
            </div>


        </div>
    );
};

export default MyMessagesForm;
