import React, { useEffect } from 'react';
import background from '../../assets/images/lawn_care_sprinklers.jpg';
import { Helmet } from 'react-helmet';
import '../../assets/css/services.css';

function Sprinklers() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="service-page">
            <Helmet>
                <title> 
                    Sprinklers | McNeer Outdoors Professional Lawn Care
                </title>
                <link rel="canonical" 
                    href="https://www.mcneeroutdoors/com/sprinklers" />
                <meta name="description" 
                    content="McNeer Outdoors Professional Lawn Care offers a variety of irrigation & sprinkler system services. We utilize computerized system design to make it as efficient as possible,  quality parts from Rain Bird Corporation and free onsite inspections.  We also offer repair and winterizing for your existing sprinkler system." 
                    />
            </Helmet>
            <div className="service-top-section">
                <img src={background} className="service-top-img" alt=""/>
            </div>
            <div className="service-section">
                <h1 className="service-header">
                    Sprinklers
                </h1>
                <p className="service-par">
                    Professional Lawn Care Services offers a variety of irrigation/sprinkler system services, including the following:
                </p>
                <h2 className="service-header2">
                    On-Site Inspections
                </h2>
                <p className="service-par">
                    McNeer will come to your home and inspect the grounds at your convenience.
                </p>
                <h2 className="service-header2">
                    Computerized rendering of system design
                </h2>
                <ul className="service-list-wrapper">
                    <li className="service-list-item-big">
                        Using a computer technology, McNeer will create an irrigation design for your yard and will provide it for inspection and approval before any work commences.
                    </li>
                    <li className="service-list-item-big">
                        An itemized product list, contract and warranty will be provided to the customer.
                    </li>
                    <li className="service-list-item-big">
                        Professional Lawn Care Services will obtain the proper permits for the project.
                    </li>
                    <li className="service-list-item-big">
                        Professional Lawn Care Services utilizes vibratory plows which pull piping underground, resulting in less trenching and damage to yards.
                    </li>
                    <li className="service-list-item-big">
                        All irrigation products are developed by the Rain Bird Corporation, a leading manufacturer and provider of irrigation products and services. Since its beginnings, Rain Bird has offered the industry’s broadest range of irrigation products for farms, golf courses, sports arenas, commercial developments and homes in more than 130 countries around the world.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sprinklers;