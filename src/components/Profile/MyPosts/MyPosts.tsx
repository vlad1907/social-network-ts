import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType, ProfilePageType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText:(newText: string) => void
    addPost:(postMessage: string) => void
}

export const MyPosts:React.FC<PropsType> = (props) => {

    let postsElements = props.posts.map( (p,index) =>  <Post id={p.id} message={p.message} likesCount={p.likesCount} key={index}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost =() => {
        let text = newPostElement.current!.value;   //TODO узнать на супорте про !
        props.addPost(text);
    }

    let onPostChange = () => {
        let text = newPostElement.current!.value
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/></div>
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

