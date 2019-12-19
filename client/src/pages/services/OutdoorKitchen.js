import React, { useEffect } from 'react';
import img from '../../assets/images/outdoor_kitchen_mcneer.jpg';
import img2 from '../../assets/images/backyard_kitchen.jpg'
import img3  from '../../assets/images/outdoor_kitchen2.jpg'
import Carousel from '../../components/Carousel';
import '../../assets/css/services.css';

function OutdoorKitchen() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="service-page">
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