import React, { useEffect } from 'react';
import Facebook from '../components/Facebook';
import { Helmet } from 'react-helmet';
import '../assets/css/contact.css';

function Contact() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="contact-page">
            <Helmet>
                <title> 
                    Contact | McNeer Outdoors Professional Lawn Care
                </title>
                <link rel="canonical" 
                    href="https://www.mcneeroutdoors/com/contact-us" />
                <meta name="description" 
                    content="If you have any questions give us a call at (662) 745-2686 or shoot an email to phil@mcneeroutdoors.com.  We offer free onsite inspections and McNeer Outdoors Professional Lawn Care is a name you can trust." 
                    />
            </Helmet>
            <div className="contact-section">
                <h1 className="contact-header">
                    Contact Us
                </h1>
                <p className="contact-par">
                    No job is too big or small.  McNeer Outdoors can help maintain both the curbside appeal and value of your home.  If you have any questions or need a job done give us a call, shoot an email, or fill out the form below. 
                </p>
                <div className="contact-link-row">
                    <div className="contact-link-holder">
                        <h3 className="contact-header3">
                            Phone
                        </h3>
                        <a href="tel:6627452686" className="contact-link">
                            (662) 745-2686
                        </a>
                    </div>
                    <div className="contact-link-holder">
                        <h3 className="contact-header3">
                            Email
                        </h3>
                        <a href="mailto:phil@mcneeroutdoors.com" className="contact-link">
                            phil@mcneeroutdoors.com
                        </a>
                    </div>
                </div>
                <form className="contact-form" action="https://formspree.io/philmcneer@gmail.com" method="POST">
                    <label htmlFor="form_name" className="contact-label">
                        Name*
                        <input type="text"
                            className="contact-input"
                            placeholder="First & Last"
                            name="name"
                        />                            
                    </label>
                    <label htmlFor="form_email" className="contact-label">
                        Email*
                        <input type="text"
                            className="contact-input"
                            placeholder="Email Address"
                            name="email"
                        />                            
                    </label>
                    <label htmlFor="form_phone"
                        className="contact-label">
                            Phone
                        <input type="text"
                            className="contact-input"
                            placeholder="Phone Number"
                            name="phone" />
                    </label>
                    <label htmlFor="form_message" className="contact-label">
                        Message
                        <input type="text"
                            className="contact-input"
                            placeholder="Message/Questions"
                            name="message"
                        />
                    </label>
                    <button className="contact-button">
                        Send
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
            <div className="contact-facebook-wrapper">
                <Facebook />
            </div>
        </div>
    )
}

export default Contact;