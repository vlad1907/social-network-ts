import React from 'react';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";

export type PropsType = {
    posts:Array<PostsType>
    dialogs: Array<DialogsType>
    messages:Array<MessagesType>
}
export type PostsType = {
    message: string
    likes: number
}

type DialogsType = {
    id:number
    name:string
}
type MessagesType = {
    id:number
    message:string
}


function App(props:PropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path="/profile" element={<Profile posts={props.posts}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
