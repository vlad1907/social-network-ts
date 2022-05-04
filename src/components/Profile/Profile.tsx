import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostType, ProfilePageType} from "../../redux/state";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText:(newText: string) => void
    addPost:(postMessage: string) => void
}

export const Profile: React.FC<PropsType> = (props) => {

    return (
        <div className={s.background}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}
                     newPostText={props.newPostText}/>
        </div>
    );
};


