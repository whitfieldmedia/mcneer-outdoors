import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/quote.css';

function RequestQuote() {
    let [ name, setName ] = useState("");
    let [ phone, setPhone ] = useState("");
    let [ email, setEmail ] = useState("");
    let [ address, setAddress ] = useState("");
    let [ city, setCity ] = useState("");
    let [ service, setService ] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "/send",
            data: {
                name: name,
                phone: phone,
                email: email,
                address: address,
                city: city,
                service: service
            }
        })
        setName('');
        setPhone('');
        setEmail('');
        setAddress('');
        setCity('');
        setService('');
    }
    return (
        <div className="request-quote-component">
            <h2 className="quote-header">
                Request an Estimate
            </h2>
            <form className="quote-container">
                <div className="quote-column">
                    <label htmlFor="name" className="quote-label">
                        Name*
                    </label>
                    <input type="text"
                        className="quote-input"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                </div>
                <div className="quote-column">
                    <label htmlFor="phone" className="quote-label">
                        Phone*
                    </label>
                    <input type="text"
                        className="quote-input"
                        placeholder="phone" 
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        />
                </div>
                <div className="quote-column">
                    <label htmlFor="email" className="quote-label">
                        Email*
                    </label>
                    <input type="text"
                        className="quote-input"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                </div>
                <div className="quote-column">
                    <label htmlFor="address" className="quote-label">
                        Address*
                    </label>
                    <input type="text"
                        className="quote-input"
                        placeholder="Address"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        />
                </div>
                <div className="quote-column">
                    <label htmlFor="city" className="quote-label">
                        City*
                    </label>
                    <input type="text"
                        className="quote-input"
                        placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        />
                </div>
                <div className="quote-column">
                    <label htmlFor="service" className="quote-label">
                        Service Needed*
                    </label>
                    <textarea type="text"
                        className="quote-input"
                        placeholder="Services Needed"
                        onChange={(e) => setService(e.target.value)}
                        value={service}
                        />
                </div>
                <button className="quote-button" onClick={(e) => handleSubmit(e)}>
                    Send
                    <i className="fas fa-paper-plane"></i>
                </button>
            </form>
        </div>
    )
}

export default RequestQuote;