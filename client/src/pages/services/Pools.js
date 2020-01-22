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
import poly from '../../assets/images/poly_fibro.jpg';
import polyW from '../../assets/images/WebPFiles/poly_fibro.webp';
import aqua from '../../assets/images/aqua_bright.jpg';
import aquaW from '../../assets/images/WebPFiles/aqua_bright.webp';
import movie from '../../assets/videos/video.mp4';
import movieMobile from '../../assets/videos/mobile_pool_video.mp4';
import img11 from '../../assets/images/pool_night_large.png';
import img12 from '../../assets/images/pool_night_mobile.png';
import img13 from '../../assets/images/pool_mobile.png';
import img14 from '../../assets/images/pool_large.png';
import Carousel from '../../components/Carousel';
import { Helmet } from 'react-helmet';
import '../../assets/scss/services.scss';

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
                <video src={movieMobile} className="pool-video-mobile" controls muted autoPlay loop></video>
                <video src={movie} className="pool-video" controls muted autoPlay loop></video>
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
            <div className="pool-finish-container">
                <h2 className="pool-finish-header">
                    Pool Finishes
                </h2>
                <div className="pool-finish-holder">
                    <picture>
                        <source type="image/webp" srcSet={polyW} />
                        <img src={poly} className="pool-finish" alt=""/>
                    </picture>
                    <picture>
                        <source type="image/webp" srcSet={aquaW} />
                        <img src={aqua} className="pool-finish" alt=""/>
                    </picture>
                </div>
            </div>
            <h2 className="pool-finish-header padding25">
                Recent Work
            </h2>
            <div className="service-carousel-container">
                <Carousel 
                    images={[
                        img11,
                        img12,
                        img13,
                        img14,
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