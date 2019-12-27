import React, { useEffect } from 'react';
import background from '../../assets/images/mosquito_control_spray.jpg';
import { Helmet } from 'react-helmet';
import '../../assets/css/services.css';

function MosquitoControl() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="service-page">
            <Helmet>
                <title> 
                    Mosquito Mist Control | McNeer Outdoors 
                </title>
                <link rel="canonical" 
                    href="https://www.mcneeroutdoors/com/mosquito-control" />
                <meta name="description" 
                    content="McNeer Outdoors can help you start enjoying nights in the Delta.  With a virtually invisible Mosquito Mist Control system you can finally keep those pesky bugs including mosquitos, wasps, gnats, flies, and spiders off your property. It's proven to be effective and is safe for you, pets, shrubs, and foliage around your house and property." 
                    />
            </Helmet>
            <div className="service-top-section">
                <img src={background} className="service-top-img" alt=""/>
            </div>
            <h1 className="service-header">
                Mosquito Mist Control
            </h1>
            <div className="service-section">
                <p className="service-par">
                    Yards are meant to be enjoyed, but that isn’t always easy during Mississippi Summers. Keep those pesky bugs off your property so you can enjoy spending time outside. Works on all bugs including mosquitos, wasps, gnats, flies, spiders, and many more.  Our outdoor misting system is virtually invisible as it protects your property.  It's proven to work and is safe for pets, shrubs, and foliage around house and property.  
                </p>
                <p className="service-par">
                    Let Professional Lawn Care Services install a mosquito control system at your home, and you’ll never have to worry about pesky bugs and start enjoying time outside.
                </p>
            </div>
        </div>
    )
}

export default MosquitoControl;