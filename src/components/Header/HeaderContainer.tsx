import React from 'react';
import {Header} from './Header';
import axios, {AxiosResponse} from 'axios';
import {connect} from 'react-redux';
import {AuthResponseType, setUserDataAC} from '../../redux/auth-reducer';
import {AppStateType, RootStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setUserDataAC: (id: number, email: string, login: string) => void
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component <HeaderContainerType, AuthResponseType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then((response: AxiosResponse<AuthResponseType>) => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                this.props.setUserDataAC(id, email, login)
            }
        });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserDataAC})(HeaderContainer);

