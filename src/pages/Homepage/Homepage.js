import React, { Component } from 'react'
import "./Homepage.css"
import image from "../../cartoonimage.webp"
import photo from "../../photo.jpeg"
import Navbar from "../../components/Navbar"
 class Homepage extends Component {
    render() {
        return (
        <div>   
            <Navbar/>
            <div className = "main-section">
                <div className = "header">
                <div className="header-section">
                    <div className = "section-heading">
                        <h1 className = "capital-heading">
                             FANCHAT APP
                        </h1>
                        <p className = "para-heading">
                            CONNECTING WORLD,RELEASHING FANDOM... 
                        </p>
                    </div>    
                    <img className = "section-image" src = {image}/>
                </div>
                </div> 
                <div className = "content-wrapper">
                    <div class = "content">
                        <h2 className = "content-head-is-container">
                            FEATURES OF FANCHAT APPLICATIONS
                        </h2>
                        <div className = "Appfeatures">
                            <div className = "content-head">
                            <div className = "1-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4" id = "myFirst" >
                                <h3 className = "content-subhead">
                                    <i className = "fa fa-rocket"></i>
                                     <span> Get Started </span>
                                </h3>
                                <p>
                                    just register yourself with this app .
                                </p>
                            </div>
                            <div className = "1-box pure-u-1 pure-u-md-1-2 pure-u-lg-1 1-4 "id = "my">
                                <h3 className = "content-subhead">
                                    <i className = "fa fa-sign-in"></i>
                                    Firebase Authentication
                                </h3>
                                <p>
                                    Firebase Authentication has been implemented in this app.
                                </p>
                            </div>
                            <div className = "1-box pure-u-1 pure-u-md-1-2 pure-u-lg-1 1-4 "id = "my">
                                <h3 className = "content-subhead">
                                    <i className = "fa fa-th-large"></i>
                                    Media
                                </h3>
                                <p>
                                    YOU can share images 
                                </p>
                            </div>
                            <div className = "1-box pure-u-1 pure-u-md-1-2 pure-u-lg-1 1-4 "id = "my">
                                <h3 className = "content-subhead">
                                    <i className = "fa fa-refresh"></i>
                                    Updates
                                </h3>
                                <p>
                                    We will be working on thi sapp for better experience in future.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
                <div className = "intro-pellet">
                    <img className = "my-photo" src = {photo}>
                    </img>
                    <div className = "intro-info">
                        <p className="intro-sentence"> JAYESH CHAWHAN </p>
                        <p className="intro-sentence"> current studying Btech Metallurgy. </p>
                        <p className="intro-sentence"> MERN stack developer and interested in cp. </p>
                    </div>
                </div>
            </div>
        </div>        

        )
    }
}

export default Homepage;
