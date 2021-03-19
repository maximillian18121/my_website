import React, { Component } from 'react';

import "./App.css"

import { Route,BrowserRouter as Router,Switch} from "react-router-dom"
import{
  toast,
  ToastContainer,
} from "react-toastify";

import firebase from "./Services/firebase";

import Chat from "./pages/Chat/Chat";


import Homepage from "./pages/Homepage/Homepage";

import Leaderboard from "./pages/Leaderboard/Leaderboard";

import Login from "./pages/Login/Login";

import Profile from "./pages/Profile/Profile";

import Signup from "./pages/Signup/Signup";




class App extends Component {


  showNotifications = (type,message) => {
    switch(type){
      case 0:
        toast.warning(message)
        break;
        
        case 1:
          toast.success(message)
          break;

          default:
            break;
    }
  }

  constructor(props) {
    super(props)
  
    this.state = {
       authenticated:false,
       loading:true,
    };
  }

  componentDidMount(){

    firebase.auth().onAuthStateChanged( user =>{
      if(user){
        this.setState({
          authenticated:true,
          loading:false,
        })
      }
      else{
        this.setState({
          authenticated:false,
          loading:false,
        })
      }
    })
  }
  

  render() {
    return this.state.loading === true ? (
      <div className="spinner-border text-success">
        <span className="sr-only">
           Loading ho rhi hain yaar .......
        </span>
      </div>
    ) : (
      <Router>
        <ToastContainer
        autoClose = {3000}
        hideProgressBar = {true}
        position = {toast.POSITION.BOTTOM_CENTER}
        />
        <Switch>
          <Route
          exact 
          path = "/"
          render = {props => <Homepage {...props}/>}
          />

          <Route
          exact 
          path = "/Chat"
          render = {props => <Chat showNotifications = {this.showNotifications} {...props}/>}
          />

         <Route
          exact 
          path = "/Profile"
          render = {props => <Profile showNotifications = {this.showNotifications} {...props}/>}
          />

         <Route
          exact 
          path = "/Login"
          render = {props => <Login showNotifications = {this.showNotifications} {...props}/>}
          />

         <Route
          exact 
          path = "/Signup"
          render = {props => <Signup showNotifications = {this.showNotifications} {...props}/>}
          />
        </Switch>
      </Router>
    )
  }
}
export default App;
