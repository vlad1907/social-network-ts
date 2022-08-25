import {connect} from 'react-redux';
import {MyPosts} from './MyPosts';
import {Dispatch} from 'redux';
import {addPostAC, onPostChangeAC, PostType} from '../../../redux/profile-reducer';
import {AppStateType} from '../../../redux/redux-store';

type MapStateToPropsType = {
    posts: PostType[],
    value: string
}
type MapDispatchToPropsType = {
    onPostChange: (text: string) => void
    onAddPost: (value: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
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