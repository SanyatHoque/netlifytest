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
import { fontSize } from '@material-ui/system';
import teddy from './teddy.jpg'

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
const styles2 = {
  backgroundColor: "orange",
  fontFamily: "Times New Roman",
  fontStyle:"italic",
  fontSize: "40px",
  margin: "0",
  // background: "yellow",
  position: "absolute",
  top: "50%",
  left: "50%",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)" 
}
const styles3 = {
  // backgroundColor: "red",
  fontFamily: "Times New Roman",
  fontStyle:"italic",
  fontSize: "40px",
  margin: "0",
  background: "yellow",
  position: "absolute",
  top: "70%",
  left: "50%",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)" 
}
const styles4 = {
  margin: "0",
  position: "absolute",
  top: "-10%",
  left: "22%",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
  transform: "scale(0.8,0.8)"
}
const routing = (
  <Router>
    <Route path="/" exact strict render={
    ()=>{
     return (
    <div id='routing-container'>
    <img style={styles4} src={teddy} alt="teddy bear"/>
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <ul> */}
          <Link className={SignupComponent} style={styles2} to='/signup'>Welcome to the Chatting App bro! Click here to enter!</Link>
          <Link className={SignupComponent} style={styles3} to='/login'>Or simply login if you are my bro!</Link>
        {/* </ul> */}
      {/* </header> */}
    </div>
    </div>)
      }
    }/> 
      <Route path='/login' exact strict component={LoginComponent}></Route>
      <Route path='/signup' exact strict component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
      {/* <Link className={classes.SignupComponent} to='/signup'>Sign Up!</Link> */}

  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
