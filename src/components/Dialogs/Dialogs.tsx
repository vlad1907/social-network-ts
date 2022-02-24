import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DIalogItem/DialogItem";
import {PropsType} from "../../App";




export const Dialogs = (props:PropsType) => {

    // let dialogs = [
    //     {id: 1, name: 'Vlad'},
    //     {id: 2, name: 'Leontiev'},
    //     {id: 3, name: 'Bevkin'}
    // ]
    //
    // let messages = [
    //     {id: 1, message: "Hi"},
    //     {id: 2, message: "How are you?"},
    //     {id: 3, message: "Yo"}
    // ]

    let dialogElements = props.dialogs.map((d, index) => <DialogItem id={d.id} name={d.name} key={index}/>
    );

    let messagesElements = props.messages.map((message, index) => <Message message={message.message} key={index}/>)
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
