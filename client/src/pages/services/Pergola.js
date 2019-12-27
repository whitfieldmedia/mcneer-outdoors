import React, { useEffect } from 'react';
import img from '../../assets/images/swing_pergola.jpg';
import img2 from '../../assets/images/finished_pergola.jpg';
import img3 from '../../assets/images/pergola&fireplace.jpg';
import Carousel from '../../components/Carousel';
import { Helmet } from 'react-helmet';
import '../../assets/css/services.css';

function Pergola() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="service-page">
            <Helmet>
                <title> 
                    Pergola's | McNeer Outdoors 
                </title>
                <link rel="canonical" 
                    href="https://www.mcneeroutdoors/com/pergola" />
                <meta name="description" 
                    content="McNeer Outdoors installs Pergola's to add a nice touch to your property." 
                    />
            </Helmet>
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