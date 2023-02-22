import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {
    getUserProfile,
    getUserStatus,
    PhotosType,
    ProfilePageType,
    ProfileType,
    savePhoto,
    updateUserStatus,
} from '../../redux/profile-reducer';
import {AppRootStateType} from '../../redux/store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


type PathParamsType = {
    userId: any
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
    status: string
    authorizedUserId: number | null
    photos: PhotosType
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    savePhoto: (photo: File) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>


class ProfileContainer extends React.Component<ProfileContainerType, ProfilePageType> {

    refreshProfile() {
        const {authorizedUserId, match, getUserProfile, getUserStatus} = this.props;
        let userId = match.params.userId;
        if (!userId) {
            userId = authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        if (userId) {
            getUserProfile(userId);
            getUserStatus(userId);
        }
    }

    componentDidMount() {
        this.refreshProfile();
    };

    componentDidUpdate(prevProps: ProfileContainerType) {
        if (this.props.match.params.userId != prevProps.match.params.userId)
            this.refreshProfile();
    };


    render() {
        return (
            <Profile {...this.props}
                     savePhoto={this.props.savePhoto}
                     isOwner={!this.props.match.params.userId}
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
    authorizedUserId: state.auth.id,
    photos: state.profilePage.photos
})



/*export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    withRouter,
)(ProfileContainer)*/

export default compose<React.ComponentType>(withAuthRedirect, withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>
    (mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}))(ProfileContainer);

