import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Facebook from '../components/Facebook';
import { Helmet } from 'react-helmet';
import '../assets/css/contact.css';

function Contact() {
    let [ name, setName ] = useState("");
    let [ email, setEmail ] = useState("");
    let [ message, setMessage ] = useState("");
    let [ phone, setPhone ] =  useState("");
    function handleSubmit() {
        axios({
            method: "POST",
            url: "/contact",
            data: {
                name: name,
                email: email,
                phone: phone,
                message: message
            }
        })
        setName('')
        setEmail('')
        setMessage('')
        setPhone('')
    }
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
                <div className="contact-form">
                    <label for="name" className="contact-label">
                        Name*
                        <input type="text"
                            className="contact-input"
                            placeholder="First & Last"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            name="name"
                        />                            
                    </label>
                    <label for="email" className="contact-label">
                        Email*
                        <input type="text"
                            className="contact-input"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            name="email"
                        />                            
                    </label>
                    <label for="phone"
                        className="contact-label">
                            Phone
                        <input type="text"
                            className="contact-input"
                            placeholder="Phone Number"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            name="phone" />
                    </label>
                    <label for="message" className="contact-label">
                        Message
                        <input type="text"
                            className="contact-input"
                            placeholder="Message/Questions"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            name="message"
                        />
                    </label>
                    <button onClick={(e) => handleSubmit(e)} className="contact-button">
                        Send
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
            <div className="contact-facebook-wrapper">
                <Facebook />
            </div>
        </div>
    )
}

export default Contact;