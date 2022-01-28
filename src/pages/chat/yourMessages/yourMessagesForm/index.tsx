import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ava from "./../../../../assets/images/avatar/1.jpg";
import classes from "./index.module.css";

type PropsType = {
    message: string;
};

const YourMessagesForm: React.FC<PropsType> = ({message}) => {
    return (
        <div className={classes.message}>
            <div className={classes.wrap}>
                <div className={classes.dot}/>
            </div>
            <div className={classes.form}>
                <Avatar alt="Remy Sharp" src={ava}/>
                <div>{message}</div>
            </div>

        </div>
    );
};

export default YourMessagesForm;
