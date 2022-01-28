import React from "react";
import MyMessagesForm from "./myMessagesForm";

type PropsType = {
    message: string;
};

const MyMessages: React.FC<PropsType> = ({message}) => {
    return (
        <div>
            <MyMessagesForm message={message}/>
        </div>
    );
};

export default MyMessages;
