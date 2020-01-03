import React from 'react';
import logo from '../assets/images/McNeer_Outdoors_Professional_Lawn_Care_logo.png';
import logoWebP from '../assets/images/WebPFiles/McNeer_Outdoors_Professional_Lawn_Care_logo.webp';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css';

function Footer() {
    return (
        <footer>
            <Link className="footer-logo-holder" to="/">
                <picture className="footer-logo-inner">
                    <source type="image/webp" srcSet={logoWebP} />
                    <img className="footer-logo" src={logo} alt="McNeer Outdoors Professional Lawn Care"/>
                </picture>
            </Link>
            <div className="footer-row">
                <p className="footer-text">
                    (662) 719-5306
                </p>
                <p className="footer-text">
                    phil@mcneeroutdoors.com
                </p>
            </div>
            <p className="footer-credits">
                @2019 Professional Lawn Care. All rights reserved. 
            </p>
        </footer>
    )
}

export default Footer;