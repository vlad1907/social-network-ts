import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {
    getUserProfile,
    getUserStatus,
    ProfilePageType,
    ProfileResponseType,
    updateUserStatus
} from '../../redux/profile-reducer';
import {AppRootStateType} from '../../redux/store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';

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
    status: string
    authorizedUserId: number | null
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>


class ProfileContainer extends React.Component<ProfileContainerType, ProfilePageType> {

    componentDidMount() {
        const {authorizedUserId, match, getUserProfile, getUserStatus} = this.props;
        let userId = match.params.userId;
        if (!userId) {
            userId = authorizedUserId
        }
        getUserProfile(userId)
        getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
            />
        );
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id
})

// let withUrlDataContainerComponent = withRouter(ProfileContainer);

// export const withAuthRedirect(connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)