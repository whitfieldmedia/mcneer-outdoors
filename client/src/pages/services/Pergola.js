import React from 'react';
import img from '../../assets/images/swing_pergola.jpg';
import img2 from '../../assets/images/finished_pergola.jpg';
import img3 from '../../assets/images/pergola&fireplace.jpg';
import Carousel from '../../components/Carousel';
import '../../assets/scss/services.scss';

function Pergola() {
    return (
        <div className="service-page">
            <h1 className="service-header">
                Pergola's
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
                <p className="service-par">

                </p>
            </div>
        </div>
    )
}

export default Pergola;