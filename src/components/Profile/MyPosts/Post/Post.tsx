import React from "react";
import s from './Post.module.css'
import {PostType} from "../../../../redux/store";


export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img alt={'ava'} src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
            {props.message}
            <div>Like{props.likesCount}</div>
        </div>
    );
};

