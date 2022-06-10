import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


function App() {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path="/dialogs/" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
