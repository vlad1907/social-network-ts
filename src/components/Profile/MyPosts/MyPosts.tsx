import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, addPostAC, onPostChangeAC, PostType} from "../../../redux/store";
import {StoreContext} from '../../../StoreContext';

// type PropsType = {
//     posts: Array<PostType>
//     newPostText: string
//     dispatch: (action: ActionsTypes) => void
// }


export const MyPosts = () => {

    // let postsElements = props.posts.map((p, index) => <Post id={p.id} message={p.message} likesCount={p.likesCount}
    //                                                         key={index}/>)
    //
    // let newPostElement = React.createRef<HTMLTextAreaElement>();
    //
    // let addPost = () => {
    //     props.dispatch(addPostAC());
    // }
    //
    // let onPostChange = () => {
    //     let text = newPostElement.current!.value
    //     props.dispatch(onPostChangeAC(text));
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().profilePage

                    let postsElements = state.posts.map((p, index) => <Post id={p.id} message={p.message}
                                                                            likesCount={p.likesCount}
                                                                            key={index}/>)

                    let newPostElement = React.createRef<HTMLTextAreaElement>();

                    let addPost = () => {
                        store.dispatch(addPostAC());
                    }

                    let onPostChange = () => {
                        let text = newPostElement.current!.value
                        store.dispatch(onPostChangeAC(text));
                    }

                    return (<div className={s.postsBlock}>
                            <h3>My posts</h3>
                            <div>
                                <div><textarea ref={newPostElement} onChange={onPostChange} value={state.newPostText}/>
                                </div>
                                <div>
                                    <button onClick={addPost}>Add post</button>
                                </div>
                            </div>
                            <div className={s.posts}>
                                {postsElements}
                            </div>
                        </div>
                    )
                }}
        </StoreContext.Consumer>
    );
};

