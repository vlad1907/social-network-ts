import {connect} from 'react-redux';
import {MyPosts} from './MyPosts';
import {addPostAC, onPostChangeAC, PostType, RootStateType} from '../../../redux/store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    posts: PostType[],
    value: string
}
type MapDispatchToPropsType = {
    onPostChange: (text: string) => void
    onAddPost: (value: string) => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        value: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onAddPost: (value) => {
            dispatch(addPostAC());
        },
        onPostChange: (text) => {
            dispatch(onPostChangeAC(text));
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;