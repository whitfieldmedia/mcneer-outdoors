import React, { useEffect } from 'react';
import img from '../../assets/images/lawn_care.jpg';
import img2 from '../../assets/images/landscape3.jpg'
import img3 from '../../assets/images/landscape.jpg';
import Carousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
import '../../assets/css/services.css';

function ProfessionalLawnCare() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="service-page">
            <h1 className="service-header">
                Professional Lawn Care
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
                    Your lawn needs ongoing attention to stay healthy.  Let us take care of your lawn and give it the care it needs to maximize its potential.
                </p>    
                <h2 className="service-header2">
                    Services 
                </h2>
                <ul className="service-list-wrapper">
                    <li className="service-list-item">
                        Lawn Mowing
                    </li>
                    <li className="service-list-item">
                        Edging
                    </li>
                    <li className="service-list-item">
                        <Link className="service-list-link" to="/sod-and-hydroseeding">
                            Sod & Hydroseeding
                        </Link>
                    </li>
                    <li className="service-list-item">
                        <Link className="service-list-link" to="/sprinklers">
                            Spinklers
                        </Link>
                    </li>
                    <li className="service-list-item">
                        <Link className="service-list-link" to="/lawn-gardening">
                            Gardening
                        </Link>
                    </li>
                    <li className="service-list-item">
                        <Link className="service-list-link" to="/landscaping">
                            Landscaping
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfessionalLawnCare;