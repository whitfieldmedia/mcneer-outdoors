import React, { useEffect } from 'react';
import background from '../../assets/images/sod.jpg'
import '../../assets/css/services.css';

function SodAndHydroseeding() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="service-page">
            <div className="service-top-section">
                <img src={background} className="service-top-img" alt=""/>
            </div>
            <div className="service-section">
                <h1 className="service-header">
                    Sod & Hydroseeding
                </h1>
                <p className="service-par">
                    What’s a lawn without grass? Summers can be hot in the Delta and maintaining a lush green landscape isn’t always as easy at it looks. That’s why Professional Lawn Care Services offers its customers sodding options that will fit in best with their lifestyle and budget.
                </p>
                <h2 className="service-header2">
                    Sodding
                </h2>
                <p className="service-par">
                    Sod is mature lawn that has been carefully and professionally cultivated; cut into thick squares or rolls with the underlying soil and roots installed in your yard for an “instant new lawn.” Sodding is a traditional tool of landscape design and Professional Lawn Care Services representatives will work with you to find the exact type that will meet your needs.
                </p>
                <h2 className="service-header2">
                    Hydroseeding
                </h2>
                <p className="service-par">
                    A few years ago, in an effort to better serve its customers, Professional Lawn Care Services began to offer hydroseeding as an alternative to the traditional sodding method. Hydroseeding is a process by which seed, water, fertilizer, fiber mulch are blended together in a tank and applied onto a prepared lawn area through a spraying hose.
                </p>
                <p className="service-par">
                    Results are often quick with high germination rates producing grass growth in about a week and mowing maintenance beginning around three to four weeks from the date of application.
                </p>
                <p className="service-par">
                    And at a third the cost of sodding, hydroseeding is definitely budget-friendly.
                </p>
            </div>
        </div>
    )
}   

export default SodAndHydroseeding;