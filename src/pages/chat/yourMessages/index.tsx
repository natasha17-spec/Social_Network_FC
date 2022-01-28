import React from "react";

import YourMessagesForm from './yourMessagesForm';

type PropsType = {
    message: string;
};

const YourMessages: React.FC<PropsType> = ({message}) => {
    return (
        <div>
            <YourMessagesForm message={message}/>
        </div>
    );
};

export default YourMessages;
