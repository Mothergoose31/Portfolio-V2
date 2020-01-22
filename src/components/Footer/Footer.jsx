import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
    render() {
        return (
            <section id="footerContainer">
                <div className='footer'>
                    <div className='footer-email-container'>
                        <span>CONTACT</span>
                        <div className='contact-email'>
                            <span>Email:</span> JosephAlvarengaBeech@pm.me
                        </div>
                        <div className="phone">(206)-455-0824</div>
                    </div>
                    <div className='footer-social'>
                    <ul className="social">
                        <li><a href="https://www.linkedin.com/in/joseph-beech/"><FontAwesomeIcon icon={faLinkedin} size="md" /> <i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/Mothergoose31"><FontAwesomeIcon icon={faGithub} size="md"/><i className="fab fa-github"></i></a></li>
                        <li><a href="https://www.facebook.com/joseph.alvarenga"><FontAwesomeIcon icon={faFacebook} size="md"/><i className="fab fa-facebook-square"></i></a></li>
                    </ul>
                    </div>
                </div>
            </section>

        )
    }
}
