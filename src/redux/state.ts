export type StateType = {
    state: RootStateType
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
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
    // addPost:(postMessage: string) => void
    // updateNewPostText:(newText: string) => void
}

export type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type SidebarType = {}

export  type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: (postMessage: string) => void
    _callSubscriber: (state:RootStateType) => void
    subscribe: (observer: (state:RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: any) => void
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
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Yo"}
            ],
            dialogs: [
                {id: 1, name: 'Vlad'},
                {id: 2, name: 'Leontiev'},
                {id: 3, name: 'Bevkin'}
            ]
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('state change')
    },

    getState() {
        return this._state;
    },

    /*addPost(postMessage: string) {

        const newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },*/

    /*updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*/

    subscribe(observer: (state:RootStateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }

}


// window.store = store;


