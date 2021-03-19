import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./Signup.css";
import firebase from "../../Services/firebase";
import Loginstrings from '../Login/Loginstrings';


class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:"",
             username:"",
             error:null,
        }
    }
    handleChange = (e) =>{
      this.setState({
        [e.target.name]:e.target.value
      });
    };
   async handleSubmit(e){
      const {email,password,username} = this.state;
      e.preventDefault();
       try{ firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async result =>{
          firebase.firestore().collection('users').add({
            username,
            id : result.user.uid ,
            email,
            password,
            URL:"",
            messages:[{notificationId:"",number:0}]
          }).then((docRef)=>{
            localStorage.setIem(Loginstrings.Id,result.user.uid);
            localStorage.setItem(Loginstrings.Name,username);
            localStorage.setItem(Loginstrings.Email,email);
            localStorage.setItem(Loginstrings.Password,password);
            localStorage.setItem(Loginstrings.PhotoUrl,"");
            localStorage.setItem(Loginstrings.UPLOAD_CHANGHED,"state_changed");
            localStorage.setItem(Loginstrings.Description,"");
            localStorage.setItem(Loginstrings.FirebaseDocumentId,docRef.id);
            this.setState({
              email:"",
              password:"",
              username:"",
              url:"",
            });
            console.log("error"); 
            this.props.history.push("/Chat")
          })
          .catch((error) =>{
            console.error("Error Adding Document",error)
          })
        })
      }
      catch{
        console.log("there is an error");
      }
  }
    render() {
     
        return (
            <div>
              <div id="login-box">
  <div class="left">
    <h1>Sign up</h1>
 
 <form onSubmit = {this.handleSubmit}>

    <input type="text" 
    name="username" 
    placeholder="Username" 
    onChange = {this.handleChange}
    value ={this.state.username}
    />
    <input 
    type="text" 
    name="email" 
    placeholder="E-mail"
    onChange = {this.handleChange}
    value ={this.state.email}
    
    />
    <input 
    type="password" 
    name="password" 
    placeholder="Password"
    onChange = {this.handleChange}
    value ={this.state.password}
   
    />

    <input 
    type="submit" 
    name="signup_submit" 
    value="Sign me up"
    />

</form>
  </div>

  
  <div class="right">
    <span class="loginwith">Sign up with<br />social network</span>
    
    <button class="social-signin google">Sign up with Google+</button>
  </div>
  <div class="or">OR</div>
</div>
            </div>
        )
    }
}
export default Signup;
