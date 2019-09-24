import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';
import { Link } from 'react-router-dom';
import App from './App';
import logo from './logo.svg';

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
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Link className={SignupComponent} to='/signup'>Welcome to the Chatting App. Sign Up if your not signed in bro!</Link>
      {/* </header> */}
    </div>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
      {/* <Link className={classes.SignupComponent} to='/signup'>Sign Up!</Link> */}
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
