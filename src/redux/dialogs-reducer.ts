import {MessageType} from '../components/Dialogs/Message/Message';

export type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type DialogType = {
    id: number
    name: string
}

export type DialogPageActionsTypes = ReturnType<typeof sendMessageAC>

let initialState = {
    dialogs: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Leon'},
        {id: 3, name: 'Chris'}
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
