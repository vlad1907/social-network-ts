import React from "react";
import s from './Post.module.css'
import {PostsType} from "../../../../App";


export const Post: React.FC<PostsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" />
            {props.message}
            <div>Like{props.likes}</div>
        </div>
    );
};

