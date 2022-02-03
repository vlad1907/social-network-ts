import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://www.logo.wine/a/logo/Babylon.js/Babylon.js-Logo.wine.svg"/>
        </header>
    );
};

export default Header;