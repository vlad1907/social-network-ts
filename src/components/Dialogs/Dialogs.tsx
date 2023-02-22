import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {AddMessageForm} from './Message/AddMessageForm';
import {DialogPageType} from '../../redux/dialogs-reducer';


type DialogPagePropsType = {
    dialogsPage: DialogPageType
    sendMessage: (newMessage: string) => void
    isAuth: boolean
}

export const Dialogs = (props: DialogPagePropsType) => {
    let dialogElements = props.dialogsPage.dialogs.map((d, index) => <DialogItem id={d.id} name={d.name} key={index}/>);
    let messagesElements = props.dialogsPage.messages.map((message, index) => <Message message={message.message}
                                                                                       key={index} id={message.id}/>);

    let addNewMessage = (newMessage: string) => {
        props.sendMessage(newMessage)
    }


    if (!props.isAuth) return <Redirect to={'/login'}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messageBlock}>
                <div className={s.messages}>
                    <div className={s.item}>{messagesElements}</div>
                </div>
                <AddMessageForm sendMessage={addNewMessage}/>
            </div>
        </div>

    );
};
