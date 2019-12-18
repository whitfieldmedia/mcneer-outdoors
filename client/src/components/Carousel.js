import React, { useState } from 'react';
import '../assets/scss/carousel.scss';

function Carousel(props) {
    const [ count, setCount ] = useState(0)
    function handleNext() {
        if(count < (props.images.length - 1)) {
            setCount(count + 1)
        } else {
            setCount(0)
        }
    }
    function handlePrev() {
        if(count > 0) {
            setCount(count - 1);
        } else {
            setCount(props.images.length - 1)
        }
    }
    function handleClick(image) {
        for(var i = 0; i < props.images.length; i++) {
            if(props.images[i] === image) {
                setCount(i);
            }
        }
    }
    function showThumbnails() {
        var images = []
        for(var i = count + 1; i < props.images.length; i++) {
            images.push(props.images[i]);
        }
        for(var j = 0; j < count; j++) {
            images.push(props.images[j]);
        }
        return images.map(image => (
            <img src={image} key={image} onClick={() => handleClick(image)} className={(props.images[count] === image) ? "service-thumbnail-img-active" : "service-thumbnail-img"} alt="McNeer Outdoor's Work" />
        ))
    }
    console.log(props)
    return (
        <div className="service-carousel-component">
            <div className="service-carousel">
                <i onClick={handlePrev} id="service-left-arrow" className="fas fa-arrow-circle-left"></i>
                <img src={props.images[count]} className="service-carousel-image" alt="McNeer Outdoors Recent Work"/>
                <i onClick={handleNext} id="service-right-arrow" className="fas fa-arrow-circle-right"></i>
            </div>
            <div className="service-thumbnail-container">
                {showThumbnails()}
                {/* {props.images.map(image => (
                    <img src={image} key={image} onClick={() => handleClick(image)} className={(props.images[count] === image) ?"service-thumbnail-img-active" : "service-thumbnail-img"} alt="McNeer Outdoors recent work" />
                ))} */}
            </div>
        </div>

    )
}

export default Carousel;