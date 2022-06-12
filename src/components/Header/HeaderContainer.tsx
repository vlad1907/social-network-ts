import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {Header} from './Header';

export class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

