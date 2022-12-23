import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import {Preloader} from './components/common/Preloader/Preloader';
import {AppRootStateType} from './redux/store';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import withSuspense from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

const SuspendedProfile = withSuspense(ProfileContainer);
const SuspendedDialogues = withSuspense(DialogsContainer);

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}
type AppType = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path="/dialogs/" render={() => <SuspendedDialogues/>}/>
                        <Route path="/profile/:userId?" render={() => <SuspendedProfile/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose( withRouter, connect(mapStateToProps, {initializeApp}))(App) as React.ComponentClass;
