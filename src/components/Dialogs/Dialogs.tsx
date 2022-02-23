import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
}

type MessageType = {
    message: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={`${s.dialog} ${s.active}`}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message: React.FC<MessageType> = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Leontiev'},
        {id: 3, name: 'Bevkin'}
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"}
    ]

    let dialogElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>
    );

    let messagesElements = messages.map(message => <Message message={message.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;