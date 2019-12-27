import React, { useEffect } from 'react';
import RequestQuote from '../components/RequestQuote';
import { Helmet } from 'react-helmet';
import '../assets/css/about.css';

function About() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="about-page">
            <Helmet>
                <title> 
                    About McNeer Outdoors Professional Lawn Care
                </title>
                <link rel="canonical" 
                    href="https://www.mcneeroutdoors/com/about-us" />
                <meta name="description" 
                    content="McNeer Outdoors Professional Lawn Care work hard so you can spend time outside and enjoy all that nature has provided.  With years of experience in the Mississippi Delta we can help you with any service you need.  We are truly a full service one stop shop for your outdoor landscaping needs." 
                    />
            </Helmet>
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