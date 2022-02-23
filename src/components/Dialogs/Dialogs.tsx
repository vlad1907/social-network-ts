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

    let dialogsData = [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Leontiev'},
        {id: 3, name: 'Bevkin'}
    ]

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    );
};

export default Dialogs;