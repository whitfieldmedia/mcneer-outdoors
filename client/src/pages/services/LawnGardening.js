import React, { useEffect } from 'react';
import img from '../../assets/images/garden_care.jpg';
import img2 from '../../assets/images/sunflowers.jpg';
import img3 from '../../assets/images/gardening_flowers.jpg';
import Carousel from '../../components/Carousel';
import '../../assets/css/services.css';

function LawnGardening() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="service-page">
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

                </p>
            </div>
        </div>
    )
}

export default LawnGardening;