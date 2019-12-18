import React from 'react';
import img from '../../assets/images/pool2.jpg';
import img2 from '../../assets/images/pool3.jpg';
import img3 from '../../assets/images/pool4.jpg';
import img4 from '../../assets/images/pool5.jpg';
import img5 from '../../assets/images/pool6.jpg';
import img6 from '../../assets/images/pool_waterfalls.jpg';
import img7 from '../../assets/images/pool_and_hotub.jpg';
import img8 from '../../assets/images/pool_fountain.jpg';
import Carousel from '../../components/Carousel';
import '../../assets/scss/services.scss';

function Pools() {
    return (
        <div className="service-page">
            <h1 className="service-header">
                Pools
            </h1>
            <div className="service-carousel-container">
                <Carousel 
                    images={[
                        img,
                        img2,
                        img3,
                        img4,
                        img5,
                        img6,
                        img7,
                        img8
                    ]} />
            </div>
            <div className="service-section">
                <p className="service-par">
                    Mississippi summers are hot!  It's time to escape the heat and start enjoying time outside summer after summer with a pool!  Pools are a great way to relax, entertain or spend quality time with your family. 
                </p>
                <div className="service-list-container">
                    <h2 className="service-header2">
                        What We Offer
                    </h2>
                    <ul className="service-list-wrapper">
                        <li className="service-list-item">
                            Gunite Pools
                        </li>
                        <li className="service-list-item">
                            Liner Pools
                        </li>
                        <li className="service-list-item">
                            Service/Repairs
                        </li>
                        <li className="service-list-item">
                            Re-Plaster
                        </li>
                        <li className="service-list-item">
                            Deck Repairs
                        </li>
                        <li className="service-list-item">
                            Patio Repairs
                        </li>
                        <li className="service-list-item">
                            Waterfalls
                        </li>
                        <li className="service-list-item">
                            Fountains
                        </li>
                        <li className="service-list-item">
                            Gunite Hot Tubs
                        </li>
                        <li className="service-list-item">
                            Fiberglass Hot Tubs
                        </li>
                        <li className="service-list-item">
                            Pool Lights
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Pools;