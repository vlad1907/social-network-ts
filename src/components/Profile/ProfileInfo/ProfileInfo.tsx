import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileResponseType} from '../../../redux/profile-reducer';
import {ProfileStatus} from './ProfileStatus';

type ProfileInfoType = {
    profile: ProfileResponseType | null
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileInfo = ({profile, status, updateUserStatus}: ProfileInfoType) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div><img
                src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
                alt={'ava'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt=""/>
                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    );
};

