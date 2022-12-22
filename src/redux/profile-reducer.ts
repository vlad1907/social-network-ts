import {profileAPI} from "../api/api";
import {Dispatch} from "redux";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileResponseType | null
    status: string
}

export type ProfileResponseType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: { small: string, large: string }
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


type ProfilePageTypeActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePostAC>

let initialState = {
    posts: [
        {id: 1, message: "Hi dude", likesCount: 12},
        {id: 2, message: "Yooo", likesCount: 11}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfilePageTypeActionsTypes) => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: 4,
                message: action.postMessage,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case 'DELETE-POST': {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET-STATUS': {
            return {...state, status: action.status}
        }
        default :
            return state;
    }
}

export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST', postMessage
    } as const
}
export const deletePostAC = (postId: number) => ({type: 'DELETE-POST', postId} as const)
export const setUserProfile = (profile: ProfileResponseType) => {
    return {
        type: 'SET-USER-PROFILE', profile
    } as const
}
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)


export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.showProfile(userId).then((data) => {
            dispatch(setUserProfile(data));
        });
    }
}

export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data));
    });
}
export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

