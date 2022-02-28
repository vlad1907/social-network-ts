
export type StateType = {
    state:RootStateType
    addPost:(postMessage:string)=>void
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
    addPost:(postMessage:string)=>void
}

export type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type SidebarType = {}

export  type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage:DialogPageType
    sidebar:SidebarType
}

export let state:RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi dude", likesCount: 12},
            {id: 2, message: "Fuck you", likesCount: 11}
        ]
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
    sidebar:{}

}


export let addPost = (postMessage:string) => {
    let newPost:PostType = {
        id:5,
        message:postMessage,
        likesCount:0
    }
    state.profilePage.posts.push(newPost)
}

export default state