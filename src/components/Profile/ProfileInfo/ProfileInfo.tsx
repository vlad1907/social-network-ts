import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from '../../common/Preloader/Preloader';
import {PhotosType, ProfileType} from '../../../redux/profile-reducer';
import {ProfileStatus} from './ProfileStatus';
import profilePhoto from '../../../assets/images/profile.jpg'
import backgroundPhoto from '../../../assets/images/background.jpg'

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    photos: PhotosType
}

export const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, photos }: ProfileInfoType) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files.length) {
            savePhoto(e.currentTarget.files[0]);
        }
    };

    return (
        <div>
            <div className={s.container}>
                <img className={s.backgroundPhoto}
                     src={backgroundPhoto} alt={'background'}/>
                <div className={s.profilePhotoWrapper}>
                    <img className={s.profilePhoto} src={photos.large ?? profilePhoto} alt={'profile'}/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                </div>
            </div>
            <div className={s.descriptionBlock}>
                <h1 className={s.name}>{profile.fullName}</h1>
                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    );
};

