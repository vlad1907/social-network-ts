import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from '../../../redux/profile-reducer';
import {AddPostForm} from './AddPostForm';

type MyPostsPropsType = {
    posts: Array<PostType>
    onAddPost: (value: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map((p, index) => <Post id={p.id} message={p.message}
                                                            likesCount={p.likesCount}
                                                            key={index}/>)

    let addPost = (newPost: string) => {
        props.onAddPost(newPost)
    }

    return (
        <div className={s.postsBlock}>
            <h3 style={{color: '#8c91b6'}}>My posts</h3>
            <div className={s.textareaWrapper}>
                <AddPostForm addPost={addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

};

