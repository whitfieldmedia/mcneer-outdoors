import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/quote.css';

function RequestQuote() {
    return (
        <div className="request-quote-component">
            <h2 className="quote-header">
                Request an Estimate
            </h2>
            <form className="quote-container" action="https://formspree.io/philmcneer@gmail.com" method="POST">
                <div className="quote-column">
                    <label htmlFor="form_name" className="quote-label">
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
                    <label htmlFor="form_phone" className="quote-label">
                        Phone*
                    </label>
                    <input type="text"
                        className="quote-input"
                        placeholder="phone" 
                        />
                </div>
                <div className="quote-column">
                    <label htmlFor="form_email" className="quote-label">
                        Email*
                    </label>
                    <input type="text"
                        className="quote-input"
                        placeholder="Email"
                        />
                </div>
                <div className="quote-column">
                    <label htmlFor="form_address" className="quote-label">
                        Address*
                    </label>
                    <input type="text"
                        className="quote-input"
                        placeholder="Address"
                        />
                </div>
                <div className="quote-column">
                    <label htmlFor="form_city" className="quote-label">
                        City*
                    </label>
                    <input type="text"
                        className="quote-input"
                        placeholder="City"
                        />
                </div>
                <div className="quote-column">
                    <label htmlFor="form_service" className="quote-label">
                        Service Needed*
                    </label>
                    <textarea type="text"
                        className="quote-input"
                        placeholder="Services Needed"
                        />
                </div>
                <div className="quote-column">
                    <button className="quote-button">
                        Send
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RequestQuote;