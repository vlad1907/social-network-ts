import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';

// type PropsType = {
//     posts: Array<PostType>
//     newPostText: string
//     dispatch: (action: ActionsTypes) => void
// }

class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
};

let mapStateToProps = (state) => ({
    a:13
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

