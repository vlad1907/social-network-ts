import {ActionsTypes, PostType, ProfilePageType} from './store';

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default :
            return state;
    }
}
