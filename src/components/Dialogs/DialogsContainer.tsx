import {connect} from 'react-redux';
import {DialogPageType, Dialogs} from './Dialogs';
import {Dispatch} from 'redux';
import {newMessageAC, sendMessageAC} from '../../redux/dialogs-reducer';
import {RootStateType} from '../../redux/redux-store';


type MapStateToPropsType = {
    newMessage: string
    dialogsPage: DialogPageType
}
type MapDispatchToPropsType = {
    updateDialogsText: (value: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: RootStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessage: state.dialogsPage.newMessageBody
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;