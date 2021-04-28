import React from 'react';
import logo from '../assets/images/McNeer_Outdoors_Professional_Lawn_Care_logo.png';
import logoWebP from '../assets/images/WebPFiles/McNeer_Outdoors_Professional_Lawn_Care_logo.webp';
import mosquito_logo from '../assets/images/mosquito_mist_control.svg';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css';

<script src="https://widget.gethearth.com/script.js" id="hearth-script" data-orgid="25401" data-partner="professional-lawn-care-inc"></script> 
<iframe id="hearth-widget_calculator_v1"></iframe>

function Footer() {
    return (
        <footer>
            <Link className="footer-logo-holder" to="/">
                <img src={mosquito_logo} className="footer-logo2" alt="Mosquito Mist Control" />
                <picture className="footer-logo-inner">
                    <source type="image/webp" srcSet={logoWebP} />
                    <img className="footer-logo" src={logo} alt="McNeer Outdoors Professional Lawn Care"/>
                </picture>
            </Link>
            <div className="footer-row">
                <a href="tel:6627452686" className="footer-link">
                    (662) 745-2686
                </a>

                <a href="mailto:phil@mcneeroutdoors.com" className="footer-link">
                    phil@mcneeroutdoors.com
                </a>
            </div>
            <p className="footer-credits">
                @2019 Professional Lawn Care. All rights reserved. 
            </p>
        </footer>
    )
}

export default Footer;