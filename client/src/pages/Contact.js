import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Facebook from '../components/Facebook';
import '../assets/css/contact.css';

function Contact() {
    let [ name, setName ] = useState("");
    let [ email, setEmail ] = useState("");
    let [ message, setMessage ] = useState("");
    function handleSubmit() {
        axios({
            method: "POST",
            url: "/contact",
            data: {
                name: name,
                email: email,
                message: message
            }
        })
        setName('')
        setEmail('')
        setMessage('')
    }
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="contact-page">
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
                        <a href="tel:6627195306" className="contact-link">
                            (662) 719-5306
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
                    <div className="contact-column">
                        <label htmlFor="name" className="contact-label">
                            Name*
                        </label>
                        <input type="text"
                            className="contact-input"
                            placeholder="First & Last"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            />
                    </div>
                    <div className="contact-column">
                        <label htmlFor="email" className="contact-label">
                            Email*
                        </label>
                        <input type="text"
                            className="contact-input"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            />
                    </div>
                    <div className="contact-column">
                        <label htmlFor="message" className="contact-label">
                            Message*
                        </label>
                        <input type="text"
                            className="contact-input"
                            placeholder="Message/Questions"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            />
                    </div>
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