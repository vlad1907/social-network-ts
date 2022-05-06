import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {StateType} from "./redux/state";


function App(props: StateType) {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs/*" element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                               messages={props.state.dialogsPage.messages} dispatch={props.dispatch}
                    newMessageBody={props.state.dialogsPage.newMessageBody}/>}/>
                    <Route path="/profile"
                           element={<Profile posts={props.state.profilePage.posts} dispatch={props.dispatch}
                                             newPostText={props.state.profilePage.newPostText}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
