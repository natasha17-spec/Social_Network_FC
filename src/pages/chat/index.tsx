import React, {useEffect} from "react";

import ChatForm from "./chatForm";

import classes from "./index.module.css";
import MyMessages from "./myMessages";
import YourMessages from "./yourMessages";

const myMessage = 'hello!';
const yourMessage = 'hello!';
const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

const ChatPage = () => {
    useEffect(() => {
        ws.addEventListener('message', (ev => console.log(ev)))
    }, [])
    return (
        <div className={classes.chat}>
            <div className={classes.messages}>
                <div>
                    <YourMessages message={yourMessage}/>
                </div>
                <div>
                    <MyMessages message={myMessage}/>
                </div>
            </div>

            <div className={classes.form}>
                <ChatForm/>
            </div>
        </div>
    );
};

export default ChatPage;
