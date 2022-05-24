import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DIalogItem/DialogItem";
import {DialogType, MessageType, newMessageAC, sendMessageAC} from "../../redux/store";
import {StoreContext} from '../../StoreContext';

// type DialogsType = {
//     messages: Array<MessageType>
//     dialogs: Array<DialogType>
//     newMessageBody: string
//     dispatch: (action: any) => void
//
// }

export const Dialogs = () => {

    /* let dialogElements = props.dialogs.map((d, index) => <DialogItem id={d.id} name={d.name} key={index}/>
     );

     let messagesElements = props.messages.map((message, index) => <Message message={message.message} key={index}/>);
     let newMessageBody = props.newMessageBody;

     let onSendMessageClick = () => {
         props.dispatch(sendMessageAC());
     }

     let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
         let body = e.currentTarget.value;
         props.dispatch(newMessageAC(body));
     }*/

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage
                    let dialogElements = state.dialogs.map((d, index) => <DialogItem id={d.id} name={d.name}
                                                                                     key={index}/>
                    );

                    let messagesElements = state.messages.map((message, index) => <Message message={message.message}
                                                                                           key={index}/>);
                    let newMessageBody = state.newMessageBody;

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageAC());
                    }

                    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                        let body = e.currentTarget.value;
                        store.dispatch(newMessageAC(body));
                    }

                    return <div className={s.dialogs}>
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
                }}
        </StoreContext.Consumer>
    );
};
