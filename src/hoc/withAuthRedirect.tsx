import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from '../redux/store';

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: AppRootStateType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStateToPropsForRedirectType) {
        let {isAuth, ...RestProps} = props;

        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...RestProps as T}/>
    }

    return connect
    (mapStateToPropsForRedirect)
    (RedirectComponent);
}