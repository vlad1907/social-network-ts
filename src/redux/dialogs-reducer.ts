import {MessageType} from '../components/Dialogs/Message/Message';
import {DialogType} from '../components/Dialogs/Dialogs';

type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

type DialogPageActionsTypes = ReturnType<typeof sendMessageAC>

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
    ]
}

export const dialogsReducer = (state: DialogPageType = initialState, action: DialogPageActionsTypes): DialogPageType => {


    switch (action.type) {
        case 'SEND-MESSAGE':
            return {...state, messages: [...state.messages, {id: 4, message: action.newMessageBody}]};
        default:
            return state;
    }
}


export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: 'SEND-MESSAGE', newMessageBody
    } as const
}
