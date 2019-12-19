import React, { useEffect } from 'react';
import img from '../../assets/images/landscape.jpg';
import img2 from '../../assets/images/landscape4.jpg';
import img3 from '../../assets/images/landscape3.jpg';
import img4 from '../../assets/images/landscaping.png'
import Carousel from '../../components/Carousel';
import sodHydro from '../../assets/images/sod.jpg';
import gardening from '../../assets/images/gardening_flowers.jpg';
import landscapeLighting from '../../assets/images/landscape_lights.jpg';
import lawnCare from '../../assets/images/garden_green_grass.jpg';
import mosquitoControl from '../../assets/images/mosquito-control.png';
import sprinklers from '../../assets/images/lawn_care_sprinklers.jpg';
import { Link } from 'react-router-dom';
import '../../assets/css/services.css';

function Landscaping() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
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
                    We have a wide range of landscaping options to get your property looking great.  No job is too big or small.  McNeer Outdoors can help maintain the curbside appeal and the value of your home.  We offer Landscaping services to both Residential and Commercial properties.   
                </p>
            </div>
            <div className="service-main-section">
                <Link className="service-type-container">
                    <h3 className="service-type-header">
                        Professional Lawn Care
                    </h3>
                    <img src={lawnCare} className="service-type-img" alt="Lawn Care"/>
                </Link>
                <Link to="/sod-and-hydroseeding" className="service-type-container">
                    <h3 className="service-type-header">
                        Sod & Hydroseed
                    </h3>
                    <img src={sodHydro} className="service-type-img" alt="Sod and Hydroseeding"/>
                </Link>
                <Link to="/gardening" className="service-type-container">
                    <h3 className="service-type-header">
                        Gardening
                    </h3>
                    <img src={gardening} className="service-type-img" alt="Gardening"/>
                </Link>
                <Link to="/landscape-lighting" className="service-type-container">
                    <h3 className="service-type-header">
                        Landscape Lighting
                    </h3>
                    <img src={landscapeLighting} className="service-type-img" alt="Landscape Lighting"/>
                </Link>
                <Link to="/mosquito-control" className="service-type-container">
                    <h3 className="service-type-header">
                        Mosquito & Pest Control
                    </h3>
                    <img src={mosquitoControl} className="service-type-img" alt="Mosquito & Pest Control"/>
                </Link>
                <Link to="/sprinklers" className="service-type-container">
                    <h3 className="service-type-header">
                        Sprinklers
                    </h3>
                    <img src={sprinklers} className="service-type-img" alt="Sprinklers"/>
                </Link>
            </div>
        </div>
    )
}

export default Landscaping;