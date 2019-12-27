import React, { useEffect } from 'react';
import img from '../../assets/images/outdoor_kitchen_mcneer.jpg';
import img2 from '../../assets/images/backyard_kitchen.jpg'
import img3  from '../../assets/images/outdoor_kitchen2.jpg'
import Carousel from '../../components/Carousel';
import { Helmet } from 'react-helmet';
import '../../assets/css/services.css';

function OutdoorKitchen() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="service-page">
            <Helmet>
                <title> 
                    Outdoor Kitchens | McNeer Outdoors 
                </title>
                <link rel="canonical" 
                    href="https://www.mcneeroutdoors/com/outdoor-kitchens" />
                <meta name="description" 
                    content="McNeer Outdoors can install a kitchen in your backyard.  Start grilling burgers by the pool and grab a beer from the fridge and start enjoying more time outside." 
                    />
            </Helmet>
            <h1 className="service-header">
                Outdoor Kitchens
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
            </div>
        </div>
    )
}

export default OutdoorKitchen;