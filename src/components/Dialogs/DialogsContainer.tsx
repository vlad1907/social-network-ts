import {connect} from 'react-redux';
import {DialogPageType, Dialogs} from './Dialogs';
import {compose, Dispatch} from 'redux';
import {sendMessageAC} from '../../redux/dialogs-reducer';
import {AppRootStateType} from '../../redux/store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {ComponentType} from 'react';


type MapStateToPropsType = {
    dialogsPage: DialogPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    sendMessage: (newMessage:string) => void
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

export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)