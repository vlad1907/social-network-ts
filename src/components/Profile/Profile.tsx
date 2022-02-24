import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {PropsType} from "../../App";



export const  Profile = (props:PropsType) => {

    return (
        <div className={s.background}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

