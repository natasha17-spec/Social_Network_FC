import React from "react";

import {TextField} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import classes from "./index.module.css";

const ChatForm = () => {
    return (
        <div className={classes.form}>
            <TextField id="outlined-basic" label="Enter message" variant="outlined"/>
            <div className={classes.button}>
                <Button variant="contained" endIcon={<SendIcon/>} color={"primary"}>
                    Send
                </Button>
            </div>
        </div>
    );
};

export default ChatForm;
