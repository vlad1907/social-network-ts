import {connect} from 'react-redux';
import {MyPosts} from './MyPosts';
import {Dispatch} from 'redux';
import {addPostAC,  PostType} from '../../../redux/profile-reducer';
import {AppStateType} from '../../../redux/redux-store';

type MapStateToPropsType = {
    posts: PostType[],
}
type MapDispatchToPropsType = {
    onAddPost: (value: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
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