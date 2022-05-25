import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DIalogItem/DialogItem";
import {DialogPageType, newMessageAC, sendMessageAC} from "../../redux/store";

type DialogPagePropsType = {
    dialogsPage: DialogPageType
    newMessage: string
    sendMessage: () => void
    updateDialogsText: (value: string) => void
}

export const Dialogs = (props:DialogPagePropsType) => {
     let dialogElements = props.dialogsPage.dialogs.map((d, index) => <DialogItem id={d.id} name={d.name} key={index}/>);
     let messagesElements = props.dialogsPage.messages.map((message, index) => <Message message={message.message} key={index}/>);
     let newMessageBody = props.newMessage;

     let onSendMessageClick = () => {
         props.sendMessage()
     }

     let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
         let body = e.currentTarget.value;
         props.updateDialogsText(body)
     }

    return (
         <div className={s.dialogs}>
                        <div className={s.dialogsItem}>
                            {dialogElements}
                        </div>
                        <div className={s.messages}>
                            <div>{messagesElements}</div>
                            <div>
                                <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                               placeholder={'Enter your message'}></textarea></div>
                                <div>
                                    <button onClick={onSendMessageClick}>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>

    );
};
