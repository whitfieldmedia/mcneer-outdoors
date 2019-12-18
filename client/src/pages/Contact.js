import React, {useState} from 'react';
import axios from 'axios';
import '../assets/scss/contact.scss';

function Contact() {
    let [ name, setName ] = useState("");
    let [ email, setEmail ] = useState("");
    let [ message, setMessage ] = useState("");
    function handleSubmit() {
        axios({
            method: "POST",
            url: "http://localhost:3100/contact",
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
    return (
        <div className="contact-page">
            <h1 className="contact-header">
                Contact Us
            </h1>
            <div className="contact-link-row">
                <div className="contact-link-holder">
                    <h3 className="contact-header3">
                        Location
                    </h3>
                    <p className="contact-text">
                        <i className="material-icons">
                            my_location
                        </i>
                        611 Gaines Hwy, <br/> Cleveland Ms 38703
                    </p>
                </div>
                <div className="contact-link-holder">
                    <h3 className="contact-header3">
                        Phone
                    </h3>
                    <a href="tel:6627195306" className="contact-link">
                        <i className="material-icons">
                            phone
                        </i>
                        (662) 719-5306
                    </a>
                </div>
                <div className="contact-link-holder">
                    <h3 className="contact-header3">
                        Email
                    </h3>
                    <a href="mailto:phil@mcneeroutdoors.com" className="contact-link">
                        <i className="material-icons">
                            mail_outline
                        </i>
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
    )
}

export default Contact;