import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

export type StateType = {
    state: RootStateType
    dispatch: (action: any) => void
}

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}

export type SidebarType = {}

export  type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof onPostChangeAC>
    | ReturnType<typeof newMessageAC>
    | ReturnType<typeof sendMessageAC>

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi dude", likesCount: 12},
                {id: 2, message: "Yooo", likesCount: 11}
            ],
            newPostText: 'some text'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('state change')
    },

    getState() {
        return this._state;
    },

    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const onPostChangeAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
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


// window.store = store;


