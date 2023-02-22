import React from 'react';
import s from './../DialogItem/DialogItem.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from '../../../redux/dialogs-reducer';
import avatar from '../../../assets/images/user.png'

export const DialogItem: React.FC<DialogType> = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={`/dialogues/${props.id}`} className={(isActive) => isActive ? s.active : s.inactive}>
                <div className={s.block}>
                    <img src={avatar} className={s.avatar} alt={'avatar'}/>
                    {props.name}
                </div>
            </NavLink>
        </div>
    );
}



