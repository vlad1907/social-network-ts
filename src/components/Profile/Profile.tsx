import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from './MyPosts/MyPostContainer';

// type PropsType = {
//     posts: Array<PostType>
//     newPostText: string
//     dispatch: (action: ActionsTypes) => void
// }

export const Profile = () => {
    return (
        <div className={s.background}>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    );
};


