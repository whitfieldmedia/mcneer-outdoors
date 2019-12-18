import React from 'react';
import img from '../../assets/images/concrete2.jpg';
import img2 from '../../assets/images/concrete_steps.jpg';
import img3 from '../../assets/images/stones.jpg';
import img4 from '../../assets/images/stone_path.jpg';
import img5 from '../../assets/images/concrete3.jpg';
import img6 from '../../assets/images/stone_path2.jpg';
import Carousel from '../../components/Carousel';
import '../../assets/scss/services.scss';

function Concrete() {
    return (
        <div className="service-page">
            <h1 className="service-header">
                    Concrete & Stone 
            </h1>
            <div className="service-carousel-container">
                    <Carousel 
                        images={[
                            img6,
                            img4,
                            img3,
                            img,
                            img5,
                            img2
                        ]} />
                </div>
            <div className="service-section">
                <p className="service-par">
                    While serving our landscaping clients, we have noticed that occasionally they’ll also want to put in a patio or need stonework for their patios, pools, or pathways or maybe even a new concrete driveway.
                </p>
                <p className="service-par">
                    Now there’s no need to call in another contractor to install your concrete. We have added a new specialized concrete crew that will work with you to get the exact look you want.
                </p>
                <div className="service-list-container">
                    <h2 className="service-header2">
                        Services we offer
                    </h2>
                    <ul className="service-list-wrapper">
                        <li className="service-list-item"> 
                            Sidewalks 
                        </li>
                        <li className="service-list-item">
                            Driveways
                        </li>
                        <li className="service-list-item">
                            Repairs
                        </li>
                        <li className="service-list-item">
                            Patching
                        </li>
                        <li className="service-list-item">
                            Curbs and gutters
                        </li>
                        <li className="service-list-item">
                            Stamped Concrete
                        </li>
                        <li className="service-list-item">
                            Scored Concrete
                        </li>
                        <li className="service-list-item">
                            Acid Stained Concrete
                        </li>
                        <li className="service-list-item">
                            Patios
                        </li>
                        <li className="service-list-item">
                            Pathways
                        </li>
                        <li className="service-list-item">
                            Stone Paths
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Concrete;