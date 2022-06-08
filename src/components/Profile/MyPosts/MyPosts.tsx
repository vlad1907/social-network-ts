import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from '../../../redux/profile-reducer';

type MyPostsPropsType = {
    posts: Array<PostType>
    value: string
    onPostChange: (text: string) => void
    onAddPost: (value: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map((p, index) => <Post id={p.id} message={p.message}
                                                            likesCount={p.likesCount}
                                                            key={index}/>)

    let addPost = () => {
        props.onAddPost(props.value)
    }

    let PostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
    }

    return (<div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={PostChange} value={props.value}/>
                </div>
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

