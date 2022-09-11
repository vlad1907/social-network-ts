import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AuthResponseType, getAuthData, logout} from '../../redux/auth-reducer';
import {AppRootStateType} from "../../redux/store";
import {ProfileResponseType} from '../../redux/profile-reducer';

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
    profile: ProfileResponseType | null
}

type MapDispatchToPropsType = {
    getAuthData: () => void
    logout: () => void
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component <HeaderContainerType, AuthResponseType> {
    componentDidMount() {
        this.props.getAuthData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {getAuthData, logout})(HeaderContainer);

