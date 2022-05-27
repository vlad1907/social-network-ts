import {ActionsTypes, PostType, ProfilePageType} from './store';

let initialState = {
    posts: [
        {id: 1, message: "Hi dude", likesCount: 12},
        {id: 2, message: "Yooo", likesCount: 11}
    ],
    newPostText: 'some text'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {

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
            return  {
                ...state,
                newPostText: action.newText
            }
        }
        default :
            return state;
    }
}

