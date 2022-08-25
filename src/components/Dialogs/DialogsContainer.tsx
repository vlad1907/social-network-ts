import {connect} from 'react-redux';
import {DialogPageType, Dialogs} from './Dialogs';
import {Dispatch} from 'redux';
import {newMessageAC, sendMessageAC} from '../../redux/dialogs-reducer';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


type MapStateToPropsType = {
    newMessage: string
    dialogsPage: DialogPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    updateDialogsText: (value: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessage: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        updateDialogsText: (value) => {
            dispatch(newMessageAC(value));
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        }
    }
}

const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default DialogsContainer;