import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

type HeaderType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img src="https://www.logo.wine/a/logo/Babylon.js/Babylon.js-Logo.wine.svg" alt={"logo"}/>
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div className={s.login}>
                            <div>Welcome, {props.login} </div>
                            <button onClick={props.logout}>Log out</button>
                        </div>
                        : <div className={s.loginButtonWrapper}>
                            <NavLink className={s.loginButton} to={'/Login'}>Login</NavLink>
                        </div>
                }
            </div>
        </header>
    );
};

