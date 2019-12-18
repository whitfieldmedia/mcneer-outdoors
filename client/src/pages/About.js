import React from 'react';
import RequestQuote from '../components/RequestQuote';
import '../assets/scss/about.scss';

function About() {
    return (
        <div className="about-page">
            <div className="about-top-container"></div>
            <div className="about-row">
                <div className="about-main-column">
                    <h1 className="about-header"> 
                        About Us 
                    </h1>
                    <p className="about-par">
                        Phil McNeer and Professional Lawn Care work hard so you can spend time outside and enjoy all that nature has provided.  McNeer first ventured into the lawn care business in 1994, providing landscaping and irrigation services on a part-time basis. He then got a degree from Mississippi Delta Community College in landscaping and his business evolved into much more.  Now McNeer Outdoors & Professional Lawn Care is a full service one stop shop no matter what you may need.  
                    </p>
                    <p className="about-par">
                        Need to freshen up some concrete work to upgrade  an old patio?  We can do it!  Need a pool?  We can help you design and install your dream pool!  Want your businesses property to look professional?  We can help!  We truly are your One Stop, Yard Shop!  
                    </p>
                </div>
                <div className="about-estimate-column">
                    <RequestQuote />
                </div>
            </div>

        </div>
    )
}

export default About;