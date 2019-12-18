import React, { useState, useEffect } from 'react';
import pool from '../assets/images/pool.png';
import sprinkler from '../assets/images/spinklers.jpg';
import landscaping from '../assets/images/landscape_design.jpg';
import concrete from '../assets/images/concrete.jpg';
import lighting from '../assets/images/landscape_lighting.jpg';
import gutter from '../assets/images/gutters4.jpg';
import mosquitoControl from '../assets/images/mosquito-control.png';
import outdoorKitchen from '../assets/images/outdoor_kitchen2.jpg';
import pergola from '../assets/images/swing_pergola.jpg';
import firepit from '../assets/images/firepit.jpg';
import lawnCare from '../assets/images/professional_lawn_care.jpg';
import Facebook from '../components/Facebook';
import concrete2 from '../assets/images/stone_path2.jpg';
import { Link } from 'react-router-dom';
import '../assets/scss/home.scss';

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
                    <img src={lawnCare} className="home-carousel-img" alt="Professional Lawn Care"/>
                </div>
                <div className={(count === 1) ? "carousel-slide-container active" : "carousel-slide-container"} id="slide1">
                    <h2 className="home-header2">
                        Mosquito Mist Control
                    </h2>
                    <p className="home-carousel-text">
                        Keep those pesky bugs off your property so you can enjoy spending time outside.  Works on all bugs including mosquitos, gnats, flys, wasps, and spiders. 
                    </p>
                    <Link to="/mosquito-mist-control" className="carousel-learn-more">
                        <button className="carousel-button">
                            Learn More
                        </button>
                    </Link>
                    <img src={mosquitoControl} className="home-carousel-img" alt="Mosquito Mist Control"/>
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
                    <img src={pool} className="home-carousel-img" alt="Pool Installation"/>
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
                    <img src={landscaping} className="home-carousel-img" alt="Landscaping services"/>
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
                    <img src={concrete} className="home-carousel-img" alt="Concrete installation and repair"/>
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
                    <img src={sprinkler} className="home-carousel-img" id="img2" alt="Sprinkler installation and repair" />
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
                    <img src={lighting} className="home-carousel-img" id="img" alt="Landscaping lights installation"/>
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
                    <img src={gutter} className="home-carousel-img" id="img" alt="Seamless Gutter installation & repair"/>
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
                        <img src={lawnCare} className="home-image" alt="Professional Lawn Care"/>
                    </Link>
                    <Link to="/mosquito-control" className="home-service-container">
                        <h3 className="home-header3">
                            Mosquito Control
                        </h3>
                        <button className="home-service-button">
                            Learn More
                        </button>
                        <img src={mosquitoControl} className="home-image" alt=""/>
                    </Link> 
                    <Link to="/outdoor-kitchens" className="home-service-container">
                        <h3 className="home-header3">
                            Outdoor Kitchens
                        </h3>
                        <button className="home-service-button">
                            Learn More
                        </button>
                        <img src={outdoorKitchen} className="home-image" alt=""/>
                    </Link> 
                    <Link to="/fire-pits" className="home-service-container">
                        <h3 className="home-header3">
                            Fire Pits
                        </h3>
                        <img src={firepit} className="home-image" alt=""/>
                    </Link> 
                    <Link to="/sod-and-hydroseeding" className="home-service-container">
                        <h3 className="home-header3">
                            Sod & Hydroseeding
                        </h3>
                        <img src={landscaping} className="home-image" alt=""/>
                    </Link> 
                    <Link to="/pergola" className="home-service-container">
                        <h3 className="home-header3">
                            Pergola's
                        </h3>
                        <img src={pergola} className="home-image" alt=""/>
                    </Link> 
                    <Link to="/sprinklers" className="home-service-container">
                        <h3 className="home-header3"> 
                            Sprinklers 
                        </h3>
                        <img src={sprinkler} className="home-image" alt="Lawn Sprinkler Systems"/>
                    </Link>
                    <Link to="/landscaping" className="home-service-container">
                        <h3 className="home-header3"> 
                            Landscaping 
                        </h3>
                        <img src={landscaping} className="home-image" alt="Landscaping"/>
                    </Link>
                    <Link to="/concrete" className="home-service-container">
                        <h3 className="home-header3"> 
                            Concrete 
                        </h3>
                        <img src={concrete2} className="home-image" alt="Stamped, Scored and Acid Stained Concrete"/>
                    </Link>
                    <Link to="/seamless-gutters" className="home-service-container">
                        <h3 className="home-header3"> 
                            Seamless Gutters 
                        </h3>
                        <img src={gutter} className="home-image" alt="Seamless Gutter Installation"/>
                    </Link>
                    <Link to="/landscape-lighting" className="home-service-container">
                        <h3 className="home-header3">
                            Landscape Lighting
                        </h3>
                        <img src={lighting} className="home-image" alt="Landscape Lighting Installation"/>
                    </Link>
                    <Link to="/pools" className="home-service-container">
                        <h3 className="home-header3"> 
                            Pools & Hot Tubs
                        </h3>
                        <img src={pool} className="home-image" alt="Pools"/>
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