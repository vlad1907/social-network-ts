import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfilePageType, ProfileResponseType} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

// type PropsType = {
//     posts: Array<PostType>
//     newPostText: string
//     dispatch: (action: ActionsTypes) => void
// }

type PathParamsType = {
    userId: any
}

type MapStateToPropsType = {
    profile: ProfileResponseType | null
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>


class ProfileContainer extends React.Component<ProfileContainerType, ProfilePageType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent))
