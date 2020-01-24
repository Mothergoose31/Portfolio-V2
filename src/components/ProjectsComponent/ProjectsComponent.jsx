import React, { Component } from 'react';
import nutrifacts from "../../images/nutri-facts.PNG";
import SafeHouse from "../../images/safeHouse.PNG";
import LordOfTheRingsOthello from "../../images/Othello.PNG"

export default class ProjectsComponent extends Component {
    render() {
        return (
            <section id="portfolio">
                <div  className="columns-portfolio-item">
                    <div className="item-wrap">
                        <a href='https://nutri-facts.herokuapp.com/' title='Nutri-facts' target="_blank">
                            <img alt='Nutri-facts' src={nutrifacts} className='imageContainer'/>
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Nutri-facts</h5>
                                    <p>Health,Nutrition,Dynamic graphs</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="fa fa-link"></i></div>
                        </a>
                    </div>
                    <div className="item-wrap">
                        <a href="https://epic-shaw-f54583.netlify.com/" title='SafeHouse' target="_blank">
                            <img src={SafeHouse} alt="safehouse" className="imageContainer"/>
                            <div className='overlay'>
                                <div className="portfolio-item-meta">
                                    <h5>SafeHouse</h5>
                                    <p>structual safety, Api, front end web app</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="item-wrap">
                        <a href="https://mothergoose31.github.io/OthelloV3/" title='Lord Of The Rings Othello' target="_blank">
                            <img src={LordOfTheRingsOthello} alt="Othelo" className="imageContainer"/>
                            <div className='overlay'>
                                <div className="portfolio-item-meta">
                                <h5>Lord Of the Rings Othello</h5>
                                
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            
        )
    }
}
