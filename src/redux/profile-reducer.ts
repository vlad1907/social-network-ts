import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileResponseType | null
}

export type ProfileResponseType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {small: string, large: string}
}

type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}


type ProfilePageTypeActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof onPostChangeAC> | ReturnType<typeof setUserProfile>

let initialState = {
    posts: [
        {id: 1, message: "Hi dude", likesCount: 12},
        {id: 2, message: "Yooo", likesCount: 11}
    ],
    newPostText: 'some text',
    profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfilePageTypeActionsTypes) => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }

        default :
            return state;
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const setUserProfile = (profile: ProfileResponseType) => {
    return {
        type: 'SET-USER-PROFILE', profile
    } as const
}
export const getUserProfile = (userId: number) =>  {
    return (dispatch: Dispatch) => {
        usersAPI.showProfile(userId).then((data) => {
            dispatch(setUserProfile(data));
        });
    }
}

export const onPostChangeAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}

