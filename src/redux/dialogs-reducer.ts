import {MessageType} from '../components/Dialogs/Message/Message';
import {DialogType} from '../components/Dialogs/Dialogs';

type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}

type DialogPageActionsTypes = ReturnType<typeof newMessageAC>
    | ReturnType<typeof sendMessageAC>

let initialState = {
    dialogs: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Leontiev'},
        {id: 3, name: 'Bevkin'}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"}
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state: DialogPageType = initialState, action: DialogPageActionsTypes): DialogPageType => {


    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case 'SEND-MESSAGE': {
            let body = state.newMessageBody;return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages,{id: Math.random(), message: body}]
            };
        }
        default:
            return state;
    }
}

export const newMessageAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: text
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}
