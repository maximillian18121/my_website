import React, { Component } from 'react'
import"./Navbar.css"
import logo from "../pixeden.svg";
import {Link} from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <div>
       <nav className ="navbar">
       <span className="nav-logo">
          <img className ="logo"src = {logo} />
          <h4 className ="name">FANCHAT</h4>
        </span>
        <ul className ="nav-tab">
          <li className= "tab"><a><Link to = "/">HOME</Link></a></li>
          <li className = "tab"><a><Link to = "/">ABOUT </Link></a></li>
          <li className = "tab"><a><Link to = "/">CONTACT </Link></a></li>
        </ul>
        <ul className = "nav-side-tab">
          <li className = "nav-login"><Link to = "/Login">LOGIN</Link></li>
          <li className = "nav-signup"><Link to = "/Signup">Signup</Link></li>
        </ul>
       </nav>
      </div>
        )
    }
}

export default Navbar