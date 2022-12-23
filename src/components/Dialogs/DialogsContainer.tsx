import React from "react";
import {connect} from 'react-redux';
import {DialogPageType, Dialogs} from './Dialogs';
import {compose, Dispatch} from 'redux';
import {sendMessageAC} from '../../redux/dialogs-reducer';
import {AppRootStateType} from '../../redux/store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


type MapStateToPropsType = {
    dialogsPage: DialogPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    sendMessage: (newMessage: string) => void
}
type DialogsContainerType = MapDispatchToPropsType & MapStateToPropsType

const DialogsContainer = (props: DialogsContainerType) => {
    return <Dialogs  dialogsPage={props.dialogsPage} sendMessage={props.sendMessage} isAuth={props.isAuth}/>
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessage: string) => {
            dispatch(sendMessageAC(newMessage));
        }
    }

}

export default compose<React.ComponentType>(withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(DialogsContainer);