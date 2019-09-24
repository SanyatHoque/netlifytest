import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects?????

firebase.initializeApp({
  apiKey: "AIzaSyCIIEz3pLv_KkmwgIBNIlrcUPATOciu6as",
  authDomain: "im-tutorial-ab4a5.firebaseapp.com",
  databaseURL: "https://im-tutorial-ab4a5.firebaseio.com",
  projectId: "im-tutorial-ab4a5",
  storageBucket: "im-tutorial-ab4a5.appspot.com",
  messagingSenderId: "487750415909",
  appId: "1:487750415909:web:c539d931dbe696cfe4b1cc"
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
