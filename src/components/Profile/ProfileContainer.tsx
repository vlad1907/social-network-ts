import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfilePageType, ProfileResponseType, setUserProfile} from '../../redux/profile-reducer';
import {RootStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

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
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileResponseType) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>


class ProfileContainer extends React.Component<ProfileContainerType, ProfilePageType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)

