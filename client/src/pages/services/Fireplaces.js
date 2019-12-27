import React, { useEffect } from 'react';
import img from '../../assets/images/outdoor_fireplace.jpg';
import img2 from '../../assets/images/firepit.jpg';
import img3 from '../../assets/images/firepit2.jpg';
import Carousel from '../../components/Carousel';
import { Helmet } from 'react-helmet'
import '../../assets/css/services.css';

function Fireplaces() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="service-page">
            <Helmet>
                <title> 
                    Fire Pit Installation & Repair | McNeer Outdoors 
                </title>
                <link rel="canonical" 
                    href="https://www.mcneeroutdoors/com/fire-pits" />
                <meta
                    name="description"
                    content="McNeer Outdoors can help you get your dream backyard with a new outdoor fire pit or fireplace.  We also repair existing fire pits and fireplaces." 
                    />
            </Helmet>
            <h1 className="service-header">
                Fire Pits
            </h1>
            <div className="service-carousel-container">
                <Carousel 
                    images={[
                        img,
                        img2,
                        img3
                    ]} />
            </div>
            <div className="service-section">
                <p className="service-par"></p>
                <p className="service-par"></p>

            </div>
        </div>
    )
}

export default Fireplaces;