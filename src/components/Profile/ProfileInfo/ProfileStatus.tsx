import {useState} from 'react';

type ProfileStatusType = {
    status: string
}

export const ProfileStatus = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <>
            <div>
                {
                    !editMode && <span onDoubleClick={activateEditMode}>{props.status}</span>
                }
            </div>
            <div>
                {
                    editMode && <input autoFocus value={props.status} onBlur={deactivateEditMode}/>
                }
            </div>
        </>
    );
};
