import {connect} from 'react-redux';
import {MyPosts} from './MyPosts';
import {Dispatch} from 'redux';
import {addPostAC, onPostChangeAC, PostType} from '../../../redux/profile-reducer';
import {RootStateType} from '../../../redux/redux-store';

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