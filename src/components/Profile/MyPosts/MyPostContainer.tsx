import {connect} from 'react-redux';
import {MyPosts} from './MyPosts';
import {Dispatch} from 'redux';
import {addPostAC,  PostType} from '../../../redux/profile-reducer';
import {AppRootStateType} from '../../../redux/store';

type MapStateToPropsType = {
    posts: PostType[],
}
type MapDispatchToPropsType = {
    onAddPost: (value: string) => void
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onAddPost: (value) => {
            dispatch(addPostAC(value));
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;