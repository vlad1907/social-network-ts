import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AuthResponseType, logout} from '../../redux/auth-reducer';
import {AppRootStateType} from "../../redux/store";
import {ProfileType} from '../../redux/profile-reducer';

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    logout: () => void
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component <HeaderContainerType, AuthResponseType> {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {logout})(HeaderContainer);

