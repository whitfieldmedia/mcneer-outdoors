import React from 'react';
import img from '../../assets/images/landscape.jpg';
import img2 from '../../assets/images/landscape4.jpg';
import img3 from '../../assets/images/landscape3.jpg';
import img4 from '../../assets/images/landscaping.png'
import Carousel from '../../components/Carousel';
import '../../assets/scss/services.scss';

function Landscaping() {
    return (
        <div className="service-page">
            <h1 className="service-header">
                Landscaping
            </h1>
            <div className="service-carousel-container">
                <Carousel 
                    images={[
                        img,
                        img2,
                        img3,
                        img4
                    ]} />
            </div>
            <div className="service-section">

                <p className="service-par">

                </p>
                <p className="service-par">

                </p>

            </div>
        </div>
    )
}

export default Landscaping;