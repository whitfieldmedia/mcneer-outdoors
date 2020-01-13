import React from 'react';
import cta from '../assets/images/HFS_Financing_cta.jpg';
import { Helmet } from 'react-helmet';
import '../assets/css/financing.css';

function Financing() {
    return (
        <div className="financing-page">
            <Helmet>
                <title>
                    Financing | McNeer Outdoors Professional Lawn Care
                </title>
                <link rel="canonical" 
                    href="https://www.mcneeroutdoors.com/financing" />
                <meta name="description"
                    content="McNeer Outdoors has the option to financing for your home improvement project.   Need funding for your home improvement project" />
            </Helmet>
            <a className="financing-cta-container" 
                href="https://www.hfsfinancial.net/promo/ProfessionalPoolsMS"
                target="_blank"
                rel="noopener noreferrer">
                <img src={cta} className="financing-cta" alt="HFS Financial Application Link CTA"/>
            </a>
        </div>
    )
}

export default Financing;