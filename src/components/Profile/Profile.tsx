import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../redux/state";


export const Profile: React.FC<ProfilePageType> = (props) => {

    return (
        <div className={s.background}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}
                     newPostText={props.newPostText}/>
        </div>
    );
};


