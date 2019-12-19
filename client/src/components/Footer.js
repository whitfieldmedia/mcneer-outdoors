import React from 'react';
import logo from '../assets/images/McNeer_Outdoors_Professional_Lawn_Care_logo.png';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css';

function Footer() {
    return (
        <footer>
            <Link className="footer-logo-holder" to="/">
                <img src={logo} className="footer-logo" alt="McNeer Outdoors Professional Lawn Care"/>
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