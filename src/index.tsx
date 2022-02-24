import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: "Hi dude", likes: 12},
    {id: 2, message: "Fuck you", likes: 11}
]

let dialogs = [
    {id: 1, name: 'Vlad'},
    {id: 2, name: 'Leontiev'},
    {id: 3, name: 'Bevkin'}
]

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Yo"}
]


ReactDOM.render(
  // <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
 // </React.StrictMode>
        ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
