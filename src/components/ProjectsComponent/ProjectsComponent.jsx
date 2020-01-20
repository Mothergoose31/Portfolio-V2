import React, { Component } from 'react'

export default class ProjectsComponent extends Component {
    render() {
        return (
            <div>
                <section id="portfolio">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                <div  className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href='https://mighty-atoll-95816.herokuapp.com' title='Nutri-facts'>
                                            <img alt='Nutri-facts' src='./images/nutri-facts.png' />
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
                                        <a href="https://epic-shaw-f54583.netlify.com/" title='SafeHouse'>
                                            <img src="./images/safehouse.png" alt="safehouse"/>
                                            <div className='overlay'>
                                                <div className="portfolio-item-meta">
                                                    <h5>SafeHouse</h5>
                                                    <p>structual safety, Api, front end web app</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
