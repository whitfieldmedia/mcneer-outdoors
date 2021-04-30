import React, { useState, useEffect } from 'react';
import pool from '../assets/images/pool.png';
import poolWebP from '../assets/images/WebPFiles/pool.webp';
import sprinkler from '../assets/images/spinklers.jpg';
import sprinklerWebP from '../assets/images/WebPFiles/spinklers.webp';
import landscaping from '../assets/images/landscape_design.jpg';
import landscapingWebP from '../assets/images/WebPFiles/landscape_design.webp';
import lighting from '../assets/images/landscape_lighting.jpg';
import lightingWebP from '../assets/images/WebPFiles/landscape_lighting.webp';
import gutter from '../assets/images/gutters4.jpg';
import gutterWebP from '../assets/images/WebPFiles/gutters4.webp';
import mosquitoControl from '../assets/images/mosquito-control.png';
import mosquitoControlWebP from '../assets/images/WebPFiles/mosquito-control.webp';
import outdoorKitchen from '../assets/images/outdoor_kitchen2.jpg';
import outdoorKitchenWebP from '../assets/images/WebPFiles/outdoor_kitchen2.webp';
import pergola from '../assets/images/swing_pergola.jpg';
import pergolaWebP from '../assets/images/WebPFiles/swing_pergola.webp';
import firepit from '../assets/images/firepit.jpg';
import firepitWebP from '../assets/images/WebPFiles/firepit.webp';
import lawnCare from '../assets/images/professional_lawn_care.jpg';
import lawnCareWebP from '../assets/images/WebPFiles/professional_lawn_care.webp';
import Facebook from '../components/Facebook';
import concrete2 from '../assets/images/stone_path2.jpg';
import concrete2WebP from '../assets/images/WebPFiles/stone_path2.webp';
import sod from '../assets/images/sod.jpg';
import sodWebP from '../assets/images/WebPFiles/sod.webp';
import aquaBright from '../assets/images/aqua_bright_logo.png';
import aquaBrightW from '../assets/images/WebPFiles/aqua_bright_logo.webp'
import ecoDustrial from '../assets/images/eco_dustrial_logo.png';
import ecoDustrialW from '../assets/images/WebPFiles/eco_dustrial_logo.webp';
import ecoFinish from '../assets/images/eco_finish_logo.png';
import ecoFinishW from '../assets/images/WebPFiles/eco_finish_logo.webp';
import polyFibro from '../assets/images/poly_fibro_logo.png';
import polyFibroW from '../assets/images/WebPFiles/poly_fibro_logo.webp';
import movie from '../assets/videos/video.mp4';
import movieMobile from '../assets/videos/mobile_pool_video.mp4';
import { Link } from 'react-router-dom';
import '../assets/scss/home.scss';
import hearth from '../assets/images/hearth.png';

function Home() {
    let [ testimonialCount, setTestimonialCount ] = useState(0);
    function handleTestimonialPrev() {
        if(testimonialCount > 0) {
            setTestimonialCount( testimonialCount - 1 )
        } else {
            setTestimonialCount(3)
        }
    }
    function handleTestimonialNext() {
        if(testimonialCount < 3) {
            setTestimonialCount( testimonialCount + 1 )
        } else {
            setTestimonialCount(0)
        }
    }
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="home-page">
            <section className="home-carousel">
                <div className="background-overlay"></div>
                <div className="carousel-slide-container" id="slide2">
                    
					<h1 className="home-header">
	                 
	    McNeer Outdoors 
	    </h1>
                    <p className="home-carousel-text">
                        We specialize in pool & hot tub installation & repair.  We use high quality finishes to provide you with a pool you can enjoy for years to come! 
                    </p>
		<Link to="https://app.gethearth.com/partners/professional-lawn-care-inc?utm_campaign=25401&utm_content=darkblue&utm_medium=contractor-website&utm_source=contractor&utm_term=700x110" target="_blank">" className="home-carousel-row">
                        <picture>
                            <source type="image/png" srcSet={hearth} />
                            <img src={hearth} className="home-pool-logo" alt="hearth"/>
                        </picture>
                    <Link to="/pools" className="home-carousel-row">
                        <picture>
                            <source type="image/webp" srcSet={ecoDustrialW} />
                            <img src={ecoDustrial} className="home-pool-logo" alt="Eco Dustrial"/>
                        </picture>
	    <Link to="/pools" className="home-carousel-row">
                        <picture>
                            <source type="image/webp" srcSet={ecoDustrialW} />
                            <img src={ecoDustrial} className="home-pool-logo" alt="Eco Dustrial"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={ecoFinishW} />
                            <img src={ecoFinish} className="home-pool-logo" alt="Eco Finish"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={aquaBrightW} />
                            <img src={aquaBright} className="home-pool-logo" alt="Aqua Bright Finish"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={polyFibroW} />
                            <img src={polyFibro} className="home-pool-logo" alt="Poly Fibro Finish"/>
                        </picture>
                    </Link>
                    <video src={movie} autoPlay muted loop className="home-background"></video>
                    <video src={movieMobile} autoPlay muted loop className="home-background-mobile" ></video>
                </div>
            </section>
            <section className="home-about-section">
                <div className="home-about-column">
                    <h2 className="home-about-header">
                        About Us
                    </h2>
                    <p className="home-about-text">
                        We started as a routine lawn maintenance provider that quickly evolved into a company that has earned a reputation for excellence in design, architecture, construction, landscape care, and client service.  No matter what you need, McNeer and his team at Professional Lawn Care has the solution for you.
                    </p>
                </div>
                <div className="home-about-column2" id="facebook-column">
                    <Facebook />
                </div>
            </section>
            <section className="home-service-section">
                <div className="home-service-wrapper">
                    <Link to="/pools" className="home-service-container">
                        <h3 className="home-header3"> 
                            Pools & Hot Tubs
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={poolWebP} />
                            <img src={pool} alt="In-Ground Pool and Hot Tub Installation & Repair"/>
                        </picture>
                    </Link>
                    <Link to="/landscaping" className="home-service-container">
                        <h3 className="home-header3">
                            Landscaping
                        </h3>
                        <button className="home-service-button">
                            Learn More
                        </button>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={lawnCareWebP} />
                            <img src={lawnCare} alt="Professional Lawn Care"/>
                        </picture>
                    </Link>
                    <Link to="/mosquito-control" className="home-service-container">
                        <h3 className="home-header3">
                            Mosquito Control
                        </h3>
                        <button className="home-service-button">
                            Learn More
                        </button>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={mosquitoControlWebP} />
                            <img src={mosquitoControl} alt="McNeer Outdoors Mosquito Mist Control"/>
                        </picture>
                    </Link> 
                    <Link to="/outdoor-kitchens" className="home-service-container">
                        <h3 className="home-header3">
                            Outdoor Kitchens
                        </h3>
                        <button className="home-service-button">
                            Learn More
                        </button>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={outdoorKitchenWebP} />
                            <img src={outdoorKitchen} alt="McNeer Outdoors Outdoor Kitchen Installations"/>
                        </picture>
                    </Link> 
                    <Link to="/fire-pits" className="home-service-container">
                        <h3 className="home-header3">
                            Fire Pits
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={firepitWebP} />
                            <img src={firepit} alt="Outdoor Fire Pit & Place Installation"/>
                        </picture>
                    </Link> 
                    <Link to="/sod-and-hydroseeding" className="home-service-container">
                        <h3 className="home-header3">
                            Sod & Hydroseeding
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={sodWebP} />
                            <img src={sod} alt="Sod & Hydroseeding Lawn Care"/>
                        </picture>
                    </Link> 
                    <Link to="/pergola" className="home-service-container">
                        <h3 className="home-header3">
                            Pergola's
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={pergolaWebP} />
                            <img src={pergola} alt="Pergola Installation"/>
                        </picture>
                    </Link> 
                    <Link to="/sprinklers" className="home-service-container">
                        <h3 className="home-header3"> 
                            Sprinklers 
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={sprinklerWebP} />
                            <img src={sprinkler} alt="Lawn Sprinkler & Irrigation Systems Installation and Service"/>
                        </picture>
                    </Link>
                    <Link to="/gardening" className="home-service-container">
                        <h3 className="home-header3"> 
                            Gardening 
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={landscapingWebP} />
                            <img src={landscaping} alt="McNeer Outdoors Landscaping Design and Services"/>
                        </picture>
                    </Link>
                    <Link to="/concrete" className="home-service-container">
                        <h3 className="home-header3"> 
                            Concrete 
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={concrete2WebP} />
                            <img src={concrete2} alt="Stamped, Scored and Acid Stained Concrete and stone installation and repair."/>
                        </picture>
                    </Link>
                    <Link to="/seamless-gutters" className="home-service-container">
                        <h3 className="home-header3"> 
                            Seamless Gutters 
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={gutterWebP} />
                            <img src={gutter} alt="Seamless Gutter Installation & Repair"/>
                        </picture>
                    </Link>
                    <Link to="/landscape-lighting" className="home-service-container">
                        <h3 className="home-header3">
                            Landscape Lighting
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={lightingWebP} />
                            <img src={lighting} alt="Landscape Lighting Installation"/>
                        </picture>
                    </Link>
                </div>
            </section>
            <h2 className="testimonial-header">
                Client Testimonials
            </h2>
            <section className="home-testimonial-section">
                <i onClick={handleTestimonialPrev} id="left-testimonial-arrow" className="fas fa-arrow-circle-left"></i>
                <div className={testimonialCount === 0 ? "home-testimonial-container" : "home-testimonial-container-hidden"}>
                    <p className="home-testimonial-par">
                        "It’s our favorite “room”. The favorite "room" at our house is the backyard. Since Phil installed his mosquito misting system along the perimeter of our yard four years ago, we have been able to enjoy our outdoor time without the hassle of pesky mosquitoes until way past dusk. The system has really proven its worth! It also helps keep buffalo gnats at bay! We highly recommend Phil McNeer’s services."
                    </p>
                    <h3 className="home-testimonial-name">
                        -Jane and Cham Trotter
                    </h3>
                </div>
                <div className={testimonialCount === 1 ? "home-testimonial-container" : "home-testimonial-container-hidden"}>
                    <p className="home-testimonial-par">
                        "Mosquitoes in Mississippi are certainly a nuisance, but they can also carry the West Nile Virus. The MistAway insect control system I purchased from ProfessionalLawn Care makes life around my pool much more enjoyable while also helping to protect my family’s health. And that’s important to me. The technicians were very professional, installation was completed in one day, and the system only has to put out two to three short mists per day to achieve amazing insect control. I highly recommend Phil McNeer and the MistAway insect control system."
                    </p>
                    <h3 className="home-testimonial-name">
                        -Michael Manning, MD, The Vein Institute
                    </h3>
                </div>
                <div className={testimonialCount === 2 ? "home-testimonial-container" : "home-testimonial-container-hidden"}>
                    <p className="home-testimonial-par">
                        "I loved working with Phil, and I’m really pleased with what he did. He’s done our mosquito system, our drainage system, and our sprinkler system. We had a brand new house, and we tried to find someone to do the landscaping. Other services said it would take a couple of months to get to us, but Professional Lawn Care came right away. I felt like it was a bad time to plant, but now everything has been sodded. We’ve lived in the house for six weeks, and it looks like we’ve been here for several months. We are very, very pleased."
                    </p>
                    <h3 className="home-testimonial-name">
                        -Kay Long
                    </h3>
                </div>
                <div className={testimonialCount === 3 ? "home-testimonial-container" : "home-testimonial-container-hidden"}>
                    <p className="home-testimonial-par">
                        "He’s done several of our facilities and jobs around Ruleville, so we knew Phil would be professional and do a great job. He did the original landscaping at the hospital, including an irrigation system. As we have continued to grow, he has continued to add to our landscaping areas. They weed and cut the grass as needed. And each season he replaces the plants that need to be replaced. They do a wonderful job."
                    </p>
                    <h3 className="home-testimonial-name">
                        -Robyn Marlow, North Sunflower Medical Center
                    </h3>
                </div>
                <i onClick={handleTestimonialNext} id="right-testimonial-arrow" className="fas fa-arrow-circle-right"></i>
            </section>
        </div>
    )
}

export default Home;
