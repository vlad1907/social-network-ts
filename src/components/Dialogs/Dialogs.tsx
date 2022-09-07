import React from 'react';
import s from './Dialogs.module.css'
import {Message, MessageType} from "./Message/Message";
import {DialogItem} from "./DIalogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {AddMessageForm} from './Message/AddMessageForm';

export type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}
export type DialogType = {
    id: number
    name: string
}

type DialogPagePropsType = {
    dialogsPage: DialogPageType
    newMessage: string
    sendMessage: (newMessage: string) => void
    updateDialogsText: (value: string) => void
    isAuth: boolean
}

export const Dialogs = (props: DialogPagePropsType) => {
    let dialogElements = props.dialogsPage.dialogs.map((d, index) => <DialogItem id={d.id} name={d.name} key={index}/>);
    let messagesElements = props.dialogsPage.messages.map((message, index) => <Message message={message.message}
                                                                                       key={index} id={message.id}/>);

    let addNewMessage  = (newMessage: string) => {
        props.sendMessage(newMessage)
    }


    if (!props.isAuth) return <Redirect to={'/login'}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
              <AddMessageForm sendMessage={addNewMessage}/>
            </div>
        </div>

    );
};
