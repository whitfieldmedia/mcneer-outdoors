import React, { useState, useEffect } from 'react';
import pool from '../assets/images/pool.png';
import poolWebP from '../assets/images/WebPFiles/pool.webp';
import poolJp2 from '../assets/images/JP2Files/pool.jp2';
import sprinkler from '../assets/images/spinklers.jpg';
import sprinklerWebP from '../assets/images/WebPFiles/spinklers.webp';
import sprinklerJp2 from '../assets/images/JP2Files/spinklers.jp2';
import landscaping from '../assets/images/landscape_design.jpg';
import landscapingWebP from '../assets/images/WebPFiles/landscape_design.webp';
import landscapingJp2 from '../assets/images/JP2Files/landscape_design.jp2';
import concrete from '../assets/images/concrete.jpg';
import concreteWebP from '../assets/images/WebPFiles/concrete.webp';
import concreteJp2 from '../assets/images/JP2Files/concrete.jp2';
import lighting from '../assets/images/landscape_lighting.jpg';
import lightingWebP from '../assets/images/WebPFiles/landscape_lighting.webp';
import lightingJp2 from '../assets/images/JP2Files/landscape_lighting.jp2';
import gutter from '../assets/images/gutters4.jpg';
import gutterWebP from '../assets/images/WebPFiles/gutters4.webp';
import gutterJp2 from '../assets/images/JP2Files/gutters4.jp2';
import mosquitoControl from '../assets/images/mosquito-control.png';
import mosquitoControlWebP from '../assets/images/WebPFiles/mosquito-control.webp';
import mosquitoControlJp2 from '../assets/images/JP2Files/mosquito-control.jp2';
import outdoorKitchen from '../assets/images/outdoor_kitchen2.jpg';
import outdoorKitchenWebP from '../assets/images/WebPFiles/outdoor_kitchen2.webp';
import outdoorKitchenJp2 from '../assets/images/JP2Files/outdoor_kitchen2.jp2';
import pergola from '../assets/images/swing_pergola.jpg';
import pergolaWebP from '../assets/images/WebPFiles/swing_pergola.webp';
import pergolaJp2 from '../assets/images/JP2Files/swing_pergola.jp2';
import firepit from '../assets/images/firepit.jpg';
import firepitWebP from '../assets/images/WebPFiles/firepit.webp';
import firepitJp2 from '../assets/images/JP2Files/firepit.jp2';
import lawnCare from '../assets/images/professional_lawn_care.jpg';
import lawnCareWebP from '../assets/images/WebPFiles/professional_lawn_care.webp';
import lawnCareJp2 from '../assets/images/JP2Files/professional_lawn_care.jp2';
import Facebook from '../components/Facebook';
import concrete2 from '../assets/images/stone_path2.jpg';
import concrete2WebP from '../assets/images/WebPFiles/stone_path2.webp';
import concrete2Jp2 from '../assets/images/JP2Files/stone_path2.jp2';
import sod from '../assets/images/sod.jpg';
import sodWebP from '../assets/images/WebPFiles/sod.webp';
import sodJp2 from '../assets/images/JP2Files/sod.jp2';
import { Link } from 'react-router-dom';
import '../assets/css/home.css';

function Home() {
    let [ count, setCount ] = useState(0);
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
    function handlePrev() {
        if(count > 0) {
            setCount( count - 1)
        } else {
            setCount(7)
        }
    }
    function handleNext() {
        if(count < 7) {
            setCount( count + 1) 
        } else {
            setCount(0)
        }
    }
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    useEffect(() => {
        var current = count;
        const interval = setInterval(() => {
            if(count === current) {
                handleNext();
            }
        }, 5000);
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <div className="home-page">
            <section className="home-carousel">
                <div className={(count === 0) ? "carousel-slide-container active" : "carousel-slide-container"} id="slide">
                    <h2 className="home-header2">
                        Professional Lawn Care
                    </h2>
                    <p className="home-carousel-text">
                        Your lawn needs ongoing attention to stay healthy.  We mow lawns and give them the care they need to maximize your lawns potential. 
                    </p>
                    <Link to="/professional-lawn-care" className="carousel-learn-more">
                        <button className="carousel-button">
                            Learn More
                        </button>
                    </Link>
                    <picture className="home-carousel-img">
                        <source type="image/webp" srcSet={lawnCareWebP} />
                        <source type="image/jp2" srcSet={lawnCareJp2} />
                        <img src={lawnCare} alt="Professional Lawn Care" />
                    </picture>
                </div>
                <div className={(count === 1) ? "carousel-slide-container active" : "carousel-slide-container"} id="slide1">
                    <h2 className="home-header2">
                        Mosquito Mist Control
                    </h2>
                    <p className="home-carousel-text">
                        Keep those pesky bugs off your property so you can enjoy spending time outside.  Works on all bugs including mosquitos, gnats, flys, wasps, and spiders. 
                    </p>
                    <Link to="/mosquito-control" className="carousel-learn-more">
                        <button className="carousel-button">
                            Learn More
                        </button>
                    </Link>
                    <picture className="home-carousel-img">
                        <source type="image/webp" srcSet={mosquitoControlWebP} />
                        <source type="image/jp2" srcSet={mosquitoControlJp2} />
                        <img src={mosquitoControl} alt="McNeer Outdoors Mosquito Mist Control"/>
                    </picture>
                </div>
                <div className={(count === 2) ? "carousel-slide-container active" : "carousel-slide-container"} id="slide2">
                    <h2 className="home-header2"> 
                        Pools & Hot Tubs
                    </h2>
                    <p className="home-carousel-text">
                        We build new Gunite and Liner Pools, service, re-plaster, paint/re-paint, deck/re-deck Pools & Hot Tubs. 
                    </p>
                    <Link to="/pools" className="carousel-learn-more">
                        <button className="carousel-button">
                            Learn More
                        </button>
                    </Link>
                    <picture className="home-carousel-img">
                        <source type="image/webp" srcSet={poolWebP} />
                        <source type="image/jp2" srcSet={poolJp2} />
                        <img src={pool} alt="McNeer Outdoors Pool Installation & Repair"/>
                    </picture>
                </div>
                <div className={(count === 3) ? "carousel-slide-container active" : "carousel-slide-container"} id="slide3">
                    <h2 className="home-header2"> 
                        Landscaping 
                    </h2>
                    <p className="home-carousel-text">
                        Tropical Plants, Bedding Plants, Trees, Mulch, Straw, Landscape Trimming, Bed Preparation and much more!
                    </p>
                    <Link to="/landscaping" className="carousel-learn-more">
                        <button className="carousel-button">
                            Learn More
                        </button>
                    </Link>
                    <picture className="home-carousel-img">
                        <source type="image/webp" srcSet={landscapingWebP} />
                        <source type="image/jp2" srcSet={landscapingJp2} />
                        <img src={landscaping} alt="McNeer Outdoors Landscaping Design & Services"/>
                    </picture>
                </div>
                <div className={(count === 4) ? "carousel-slide-container active" : "carousel-slide-container"} id="slide4">
                    <h2 className="home-header2"> 
                        Concrete 
                    </h2>
                    <p className="home-carousel-text">
                        Concrete countertops, sidewalks, patio, pool deck, driveway, pave stone (stamped, scored, acid stained).
                    </p>
                    <Link to="/concrete" className="carousel-learn-more">
                        <button className="carousel-button">
                            Learn More
                        </button>
                    </Link>
                    <picture className="home-carousel-img">
                        <source type="image/webp" srcSet={concreteWebP} />
                        <source type="image/jp2" srcSet={concreteJp2} />
                        <img src={concrete} alt="McNeer Outdoors Concrete/Stone Installation & Repair"/>
                    </picture>
                </div>
                <div className={(count === 5) ? "carousel-slide-container active" : "carousel-slide-container"} id="slide5">
                    <h2 className="home-header2">
                        Sprinklers
                    </h2>
                    <p className="home-carousel-text">
                        New installs, Service, or Winterize you system.
                    </p>
                    <Link to="/sprinklers" className="carousel-learn-more">
                        <button className="carousel-button">
                            Learn More
                        </button>
                    </Link>
                    <picture className="home-carousel-img">
                        <source type="image/webp" srcSet={sprinklerWebP} />
                        <source type="image/jp2" srcSet={sprinklerJp2} />
                        <img src={sprinkler} alt="McNeer Outdoor Sprinkler Installation Repair & Service"/>
                    </picture>
                </div>
                <div className={(count === 6) ? "carousel-slide-container active" : "carousel-slide-container"} id="slide6">
                    <h2 className="home-header2">
                        Landscaping Lights
                    </h2>
                    <p className="home-carousel-text">
                        Landscape lighting when done right will brighten up your yard and add a special touch that sets you apart from the neighborhood.
                    </p>
                    <Link to="/landscape-lighting" className="carousel-learn-more">
                        <button className="carousel-button">
                            Learn More
                        </button>
                    </Link>
                    <picture className="home-carousel-img">
                        <source type="image/webp" srcSet={lightingWebP} />
                        <source type="image/jp2" srcSet={lightingJp2} />
                        <img src={lighting} alt="McNeer Outdoor Landscape Lights Installation & Repair"/>
                    </picture>
                </div>
                <div className={(count === 7) ? "carousel-slide-container active" : "carousel-slide-container"} id="slide7">
                    <h2 className="home-header2">
                        Seamless Gutters
                    </h2>
                    <p className="home-carousel-text">
                        Seamless gutters custom made on site available in 18 colors.
                    </p>
                    <Link to="/gutters" className="carousel-learn-more">
                        <button className="carousel-button">
                            Learn More
                        </button>
                    </Link>
                    <picture className="home-carousel-img">
                        <source type="image/webp" srcSet={gutterWebP} />
                        <source type="image/jp2" srcSet={gutterJp2} />
                        <img src={gutter} alt="Seamless Gutter Installation & Repair"/>
                    </picture>
                </div>
                <i onClick={handlePrev} id="left-arrow" className="fas fa-arrow-circle-left"></i>
                <i onClick={handleNext} id="right-arrow" className="fas fa-arrow-circle-right"></i>
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
                    <Link to="/professional-lawn-care" className="home-service-container">
                        <h3 className="home-header3">
                            Professional Lawn Care
                        </h3>
                        <button className="home-service-button">
                            Learn More
                        </button>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={lawnCareWebP} />
                            <source type="image/jp2" srcSet={lawnCareJp2} />
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
                            <source type="image/jp2" srcSet={mosquitoControlJp2} />
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
                            <source type="image/jp2" srcSet={outdoorKitchenJp2} />
                            <img src={outdoorKitchen} alt="McNeer Outdoors Outdoor Kitchen Installations"/>
                        </picture>
                    </Link> 
                    <Link to="/fire-pits" className="home-service-container">
                        <h3 className="home-header3">
                            Fire Pits
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={firepitWebP} />
                            <source type="image/jp2" srcSet={firepitJp2} />
                            <img src={firepit} alt="Outdoor Fire Pit & Place Installation"/>
                        </picture>
                    </Link> 
                    <Link to="/sod-and-hydroseeding" className="home-service-container">
                        <h3 className="home-header3">
                            Sod & Hydroseeding
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={sodWebP} />
                            <source type="image/jp2" srcSet={sodJp2} />
                            <img src={sod} alt="Sod & Hydroseeding Lawn Care"/>
                        </picture>
                    </Link> 
                    <Link to="/pergola" className="home-service-container">
                        <h3 className="home-header3">
                            Pergola's
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={pergolaWebP} />
                            <source type="image/jp2" srcSet={pergolaJp2} />
                            <img src={pergola} alt="Pergola Installation"/>
                        </picture>
                    </Link> 
                    <Link to="/sprinklers" className="home-service-container">
                        <h3 className="home-header3"> 
                            Sprinklers 
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={sprinklerWebP} />
                            <source type="image/jp2" srcSet={sprinklerJp2} />
                            <img src={sprinkler} alt="Lawn Sprinkler & Irrigation Systems Installation and Service"/>
                        </picture>
                    </Link>
                    <Link to="/landscaping" className="home-service-container">
                        <h3 className="home-header3"> 
                            Landscaping 
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={landscapingWebP} />
                            <source type="image/jp2" srcSet={landscapingJp2} />
                            <img src={landscaping} alt="McNeer Outdoors Landscaping Design and Services"/>
                        </picture>
                    </Link>
                    <Link to="/concrete" className="home-service-container">
                        <h3 className="home-header3"> 
                            Concrete 
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={concrete2WebP} />
                            <source type="image/jp2" srcSet={concrete2Jp2} />
                            <img src={concrete2} alt="Stamped, Scored and Acid Stained Concrete and stone installation and repair."/>
                        </picture>
                    </Link>
                    <Link to="/seamless-gutters" className="home-service-container">
                        <h3 className="home-header3"> 
                            Seamless Gutters 
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={gutterWebP} />
                            <source type="image/jp2" srcSet={gutterJp2} />
                            <img src={gutter} alt="Seamless Gutter Installation & Repair"/>
                        </picture>
                    </Link>
                    <Link to="/landscape-lighting" className="home-service-container">
                        <h3 className="home-header3">
                            Landscape Lighting
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={lightingWebP} />
                            <source type="image/jp2" srcSet={lightingJp2} />
                            <img src={lighting} alt="Landscape Lighting Installation"/>
                        </picture>
                    </Link>
                    <Link to="/pools" className="home-service-container">
                        <h3 className="home-header3"> 
                            Pools & Hot Tubs
                        </h3>
                        <picture className="home-image">
                            <source type="image/webp" srcSet={poolWebP} />
                            <source type="image/jp2" srcSet={poolJp2} />
                            <img src={pool} alt="In-Ground Pool and Hot Tub Installation & Repair"/>
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