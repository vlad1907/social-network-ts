import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

type HeaderType = {
    isAuth: boolean
    login: string | null
}

export const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img src="https://www.logo.wine/a/logo/Babylon.js/Babylon.js-Logo.wine.svg" alt={"logo"}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/Login'}>Login</NavLink>}
            </div>
        </header>
    );
};

