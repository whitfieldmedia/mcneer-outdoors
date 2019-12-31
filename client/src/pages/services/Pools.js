import React, { useEffect } from 'react';
import img from '../../assets/images/pool2.jpg';
import img2 from '../../assets/images/pool3.jpg';
import img3 from '../../assets/images/pool4.jpg';
import img4 from '../../assets/images/pool5.jpg';
import img5 from '../../assets/images/pool6.jpg';
import img6 from '../../assets/images/pool_waterfalls.jpg';
import img7 from '../../assets/images/pool_and_hotub.jpg';
import img8 from '../../assets/images/pool_fountain.jpg';
import img9 from '../../assets/images/pool_fire.png';
import img10 from '../../assets/images/pool_lighting.png';
import video from '../../assets/video/McNeerOutdoorsPool.mp4';
import Carousel from '../../components/Carousel';
import { Helmet } from 'react-helmet';
import '../../assets/css/services.css';

function Pools() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="service-page">
            <Helmet>
                <title> 
                    Pool & Hot Tub Installation & Repairs | McNeer Outdoors 
                </title>
                <link rel="canonical" 
                    href="https://www.mcneeroutdoors/com/pools" />
                <meta name="description" 
                    content="Mississippi summers are hot!  It's time to escape the heat and start enjoying time outside in the summer with a pool!  McNeer Outdoors installs and repairs in-ground hot tubs and pools.  We design it how you want it and can help you get the pool of your dreams." 
                    />
            </Helmet>
            <div className="pool-video-container">
                <video loop autoPlay preload="true" controls controlsList="nodownload" className="pool-video">
                    <source src={video} type="video/mp4" />
                </video>
                {/* <iframe src={video} 
                    title="McNeer Outdoors Waterfall Pool" 
                    marginHeight="0" 
                    marginWidth="0" 
                    allowFullScreen 
                    allow="autoplay" 
                    name="McNeer Outdoors Waterfall Pool"  
                    className="pool-video" 
                    autoPlay
                    loop
                    frameBorder="0">
                </iframe> */}
            </div>
            <h1 className="service-header">
                Pools
            </h1>
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
            <div className="service-carousel-container">
                <Carousel 
                    images={[
                        img9,
                        img10,
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
        </div>
    )
}

export default Pools;