import React, { useEffect } from 'react';
import img from '../../assets/images/garden_care.jpg';
import img2 from '../../assets/images/sunflowers.jpg';
import img3 from '../../assets/images/gardening_flowers.jpg';
import Carousel from '../../components/Carousel';
import { Helmet } from 'react-helmet';
import '../../assets/css/services.css';

function LawnGardening() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="service-page">
            <Helmet>
                <title> 
                    Gardening | McNeer Outdoors 
                </title>
                <link rel="canonical" 
                    href="https://www.mcneeroutdoors/com/gardening" />
                <meta name="description" 
                    content="If you're looking to find plants that thrive in the delta and will add a special touch to your property McNeer Outdoors Professional Lawn Care will help you pick out the perfect plants and flowers.  With years of experience and a name trusted in the community McNeer Outdoors can help." 
                    />
            </Helmet>
            <h1 className="service-header">
                Gardening
            </h1>
            <div className="service-carousel-container">
                <Carousel 
                    images={[
                        img,
                        img2,
                        img3,
                    ]} />
            </div>
            <div className="service-section">
                <p className="service-par">
                    With years of experience in the Mississippi Delta,  we can help you find plants, flowers, and trees that will thrive and add a special touch to your property. 
                </p>
            </div>
        </div>
    )
}

export default LawnGardening;