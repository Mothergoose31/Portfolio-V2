import React, { Component } from 'react';


import profilePic from "../../images/profilePic.jpg"


class About extends Component {
    

    render() {

        return (
            <section id="about">
                
                <div className="aboutContainer">
                    <img className="profile-pic"  src={profilePic} alt="My Profile Picture" />
                    <div className="aboutParagraph">
                        <h2 className='aboutMe'>About Me</h2> 
                        <p>  I'm fascinated with learning and exploring technological, socioeconomic, geopolitical, and environmental  trends.
                             To explorer and predict possibilities about the future. More precisely how stratification of
                            those trends will affect human well being. As we continue into the future technology will be an
                            ever increasing part of our lives. I love that through programming I can Bring Ideas to life
                            and while at it i enjoy maximizing ease of use and comfort  for the users.</p>
                            
                            <p className='spareTime'>In my spare time  you'll find me  Reading,Drawing, Cycling , Gardening and hanging out with my family</p>
                        
                    </div>
                </div>

            </section>
        );
    }
}

export default About;