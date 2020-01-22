import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';

import profilePic from "../../images/profilePic.jpg"


class About extends Component {
    

    render() {

        return (
            <section id="about">
                <ul className="social">
            <li><FontAwesomeIcon icon={faLinkedin} size="md" /><a href="https://www.linkedin.com/in/joseph-beech/"> <i className="fab fa-linkedin"></i></a></li>
            <li><FontAwesomeIcon icon={faGithub} size="md"/><a href="https://github.com/Mothergoose31"><i className="fab fa-github"></i></a></li>
            <li><FontAwesomeIcon icon={faFacebook} size="md"/><a href="https://www.facebook.com/joseph.alvarenga"><i className="fab fa-facebook-square"></i></a></li>
            </ul>
                <div className="row">
                
            
                    <div className="three columns">
                        
                        <img className="profile-pic"  src={profilePic} alt="My Profile Picture" />
                    </div>
                    <div className="nine  columns main-col">
                        <h2>About Me</h2> 
                        <p></p>
                        <div className="row">
                            <div className="columns contact-details">
                            <h2>Contact Details</h2>
                        <br />
                                    <span>(206)-455-0824</span><br />
                                <span>JosephAlvarengaBeech@pm.me</span>
                                
                            </div>
                    </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;