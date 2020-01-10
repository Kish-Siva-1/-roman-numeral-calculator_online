import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// import firebase from 'firebase/app';

// const firebaseConfig = {
//     apiKey: "AIzaSyDTz4n7O04wXdES9UoSrNa8AQ29TCe_3bk",
//     authDomain: "roman-num-calc-online.firebaseapp.com",
//     databaseURL: "https://roman-num-calc-online.firebaseio.com",
//     projectId: "roman-num-calc-online",
//     storageBucket: "roman-num-calc-online.appspot.com",
//     messagingSenderId: "1061793863091",
//     appId: "1:1061793863091:web:a9d2cf90a5a689caf6e7c6"
//   };

// firebase.initializeApp(firebaseConfig)

ReactDOM.render(
    <App />,
document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
