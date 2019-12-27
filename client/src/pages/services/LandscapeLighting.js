import React, { useEffect } from 'react';
import img from '../../assets/images/landscape_lighting_around_pool.jpg';
import img2 from '../../assets/images/landscape_lights.jpg';
import img3 from '../../assets/images/landscape_lighting.jpg'
import img4 from '../../assets/images/lighting.png'
import Carousel from '../../components/Carousel';
import { Helmet } from 'react-helmet';
import '../../assets/css/services.css';

function LandscapeLighting() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="service-page">
            <Helmet>
                <title> 
                    Landscape Lighting | McNeer Outdoors 
                </title>
                <link rel="canonical" 
                    href="https://www.mcneeroutdoors/com/landscape-lighting" />
                <meta name="description" 
                    content="If you are interested in adding a special touch to your property to make it look great,  landscape lighting can really brighten up your yard and when done properly add that special touch you're looking for.  McNeer Outdoors has lots of experience and will give you the look you're looking for." 
                    />
            </Helmet>
            <h1 className="service-header">
                Landscape Lighting
            </h1>
            <div className="service-carousel-container">
                <Carousel 
                    images={[
                        img,
                        img2,
                        img3,
                        img4,
                    ]} />
            </div>
            <div className="service-section">

                <p className="service-par">
                    Landscape lighting can really brighten up your yard. When done properly, lighting can add a special touch that sets your yard apart from others in the neighborhood.
                </p>
                <p className="service-par">
                    Even if your landscaping is not what you want it to be yet, the right lighting can still make it look good. And if it’s just the way you like it? The best way to extend your pleasure into the evening is to add lighting. Because the nights are getting longer, autumn is an ideal time to install lighting in your landscape. Professional Lawn Care Services is leading the pack in innovative and unique landscape lighting in the Delta, offering the following services:
                </p>
                <ul className="service-list-wrapper">
                    <li className="service-list-item-big">
                        On-site inspection. McNeer will come to your home and inspect the grounds at your convenience.
                    </li>
                    <li className="service-list-item-big">
                        Computerized rendering of system design
                    </li>
                    <li className="service-list-item-big">
                        An itemized product list, contract and warranty will be provided to the customer.
                    </li>
                    <li className="service-list-item-big">
                        Professional Lawn Care Services will obtain the proper permits for the project.
                    </li>
                    <li className="service-list-item-big">
                        Using a computer technology, McNeer will create a lighting design for your yard and will provide it for inspection and approval before any work commences.
                    </li>
                    <li className="service-list-item-big">
                        All lighting wiring is installed underground, using energy efficient Kichler lighting. Kichler Outdoor Lighting is designed to bring professional interior design principles to the exterior of your home with the high quality fit and finish that you expect from Kichler. From the front of your home to the backyard deck and garden, our Outdoor Lighting comes in a wide variety of sizes and styles, ensuring there is something for anyone’s home, no matter the decor.
                    </li>
                </ul>
            </div>
        </div>
    )
}   

export default LandscapeLighting;