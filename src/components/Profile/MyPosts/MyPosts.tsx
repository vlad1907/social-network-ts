import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PropsType} from "../../../App";


export const MyPosts = (props:PropsType) => {

    // let posts = [
    //     {id: 1, message: "Hi dude", likes: 12},
    //     {id: 2, message: "Fuck you", likes: 11}
    // ]

    let postsElements = props.posts.map( (p,index) =>  <Post message={p.message} likes={p.likes} key={index}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

