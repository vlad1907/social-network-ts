import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store, RootStateType} from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
