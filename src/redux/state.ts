
export type StateType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
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
    updateNewPostText:(newText: string) => void
    addPost:(postMessage: string) => void
    _callSubscriber:() => void
    subscribe:(observer:   () => void) => void
    getState:()=>RootStateType
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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state change')
    },
    addPost(postMessage: string) {
        debugger
        const newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    subscribe(observer:  () => void) {
        this._callSubscriber = observer
    }

}


// window.store = store;


