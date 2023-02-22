import {profileAPI} from "../api/api";
import {AppThunk} from './store';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
    photos: PhotosType
}

export type PhotosType = {
    small: string | null
    large: string | null
}

/*export type ProfileResponseType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}*/

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
}

export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}


let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi dude", likesCount: 12},
        {id: 2, message: "Yooo", likesCount: 11}
    ],
    profile: null,
    status: '',
    photos: {small: null, large: null}
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
        case 'SAVE-PHOTO-SUCCESS':
            return {...state, photos: action.photos}
        default :
            return state;
    }
}

// ACTION TYPE
export type ProfilePageTypeActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof savePhotoSuccess>

// ACTION CREATORS
export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST', postMessage
    } as const
}
export const deletePostAC = (postId: number) => ({type: 'DELETE-POST', postId} as const)
export const setUserProfile = (profile: ProfileType, photos: PhotosType) => ({
    type: 'SET-USER-PROFILE',
    profile,
    photos
} as const)

export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)

export const savePhotoSuccess = (photos: PhotosType) => ({type: 'SAVE-PHOTO-SUCCESS', photos} as const)

// THUNK CREATORS
export const getUserProfile = (userId: number): AppThunk => async dispatch => {
    const res = await profileAPI.showProfile(userId)
    const {
        photos,
        aboutMe,
        contacts,
        lookingForAJob,
        lookingForAJobDescription,
        fullName
    } = res.data
    const profile = {aboutMe, contacts, lookingForAJob, lookingForAJobDescription, fullName}
    dispatch(setUserProfile(profile, photos));
}


export const getUserStatus = (userId: number): AppThunk => async dispatch => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res.data));
}
export const updateUserStatus = (status: string): AppThunk => async dispatch => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (photo: File): AppThunk =>
    async (dispatch, getState) => {
        const state = getState();
        const userId = state.auth.id;
        let response = await profileAPI.savePhotoSuccess(photo);
        if (response.data.resultCode === 0) {
            if (userId)
                dispatch(getUserProfile(userId))
        }
    }

export const saveProfile = (data: ProfileType): AppThunk =>
    async (dispatch, getState) => {
        const state = getState();
        const userId = state.auth.id;
        let response = await profileAPI.saveProfile(data)
        if (response.data.resultCode === 0) {
            if (userId)
                dispatch(getUserProfile(userId))
        }
    }