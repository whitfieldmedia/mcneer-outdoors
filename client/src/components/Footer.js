import React from 'react';
import '../assets/scss/footer.scss';

function Footer() {
    return (
        <footer>
            <div className="footer-row">
                <p className="footer-text">
                    phil@mcneeroutdoors.com
                </p>
                <p className="footer-text">
                    (662) 719-5306
                </p>
                <p className="footer-text">
                    611 Gaines Hwy, Cleveland, Ms 38703
                </p>
            </div>
            <p className="footer-credits">
                @2019 Professional Lawn Care. All rights reserved. 
            </p>
        </footer>
    )
}

export default Footer;