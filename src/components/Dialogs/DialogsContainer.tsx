import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import {DialogPageType, newMessageAC, RootStateType, sendMessageAC} from '../../redux/store';
import {Dispatch} from 'redux';

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