import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";


export const MyPosts:React.FC<ProfilePageType> = (props) => {

    let postsElements = props.posts.map( (p,index) =>  <Post id={p.id} message={p.message} likesCount={p.likesCount} key={index}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost =() => {
        let text = newPostElement.current!.value;   //TODO узнать на супорте про !
        props.addPost(text)
        newPostElement.current!.value = ""
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

