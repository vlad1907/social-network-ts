import React, {useState} from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PhotosType, ProfileType} from '../../redux/profile-reducer';
import {Preloader} from '../common/Preloader/Preloader';
import ProfileModal from './editProfileModal/ProfileModal';
import {Button} from '../common/Button/Button';
import AboutMe from './AboutMe';
import MyPostContainer from './MyPosts/MyPostContainer';


type ProfilePageType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    photos: PhotosType
}

export const Profile = (props: ProfilePageType) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    const editProfile = () => {
        setEditMode(true);
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                profile={props.profile}
                photos={props.photos}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
            <AboutMe profile={props.profile}/>
            {props.isOwner && <Button title={'edit'} callback={editProfile}/>}
            {editMode && <ProfileModal profile={props.profile} setEditMode={setEditMode}/>}
            <hr/>
            <MyPostContainer/>
        </div>
    );
};


