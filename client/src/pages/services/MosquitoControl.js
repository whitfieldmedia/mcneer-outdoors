import React, { useEffect } from 'react';
import background from '../../assets/images/mosquito_control_spray.jpg';
import '../../assets/css/services.css';

function MosquitoControl() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="service-page">
            <div className="service-top-section">
                <img src={background} className="service-top-img" alt=""/>
            </div>
            <h1 className="service-header">
                Mosquito Mist Control
            </h1>
            <div className="service-section">
                <p className="service-par">
                    Yards are meant to be enjoyed, but that isn’t always easy during Mississippi Summers. Keep those pesky bugs off your property so you can enjoy spending time outside. Works on all bugs including mosquitos, wasps, gnats, flys, spiders, and many more.  Our outdoor misting system is virtually invisible as it protects your property.  It's proven to work and is safe for pets, shrubs, and foliage around house and property.  
                </p>
                <p className="service-par">
                    Let Professional Lawn Care Services install a mosquito control system at your home, and you’ll never have to worry about pesky bugs and start enjoying time outside.
                </p>
            </div>
        </div>
    )
}

export default MosquitoControl;