import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostContainer from './MyPosts/MyPostContainer';
import {ProfileResponseType} from '../../redux/profile-reducer';

// type PropsType = {
//     posts: Array<PostType>
//     newPostText: string
//     dispatch: (action: ActionsTypes) => void
// }

type ProfileType = {
    profile: ProfileResponseType | null
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.background}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    );
};


