import React from 'react';
import { useState } from 'react'
import '../styles/Slideshow.css'
import chevron from '../assets/images/chevron-up.svg'

const Slideshow = ({slides}) => {
    const [currentSlide, slidechange] = useState(0)
    return (
        <div className="slideshow">
            <img alt='Slideshow' src={slides[currentSlide]}></img>
            {(slides.length > 1) ? (
                <>
                
                    <img alt='' onClick={() => slidechange((currentSlide === 0) ? (slides.length - 1) : (currentSlide - 1))} className="left" src={chevron} />
                    <img alt='' onClick={() => slidechange((currentSlide === slides.length - 1) ? 0 : currentSlide + 1)} className="right" src={chevron} />
                    <h2>{currentSlide + 1}/{slides.length}</h2>
                </>
            ) : null}
        </div>
    );
};

export default Slideshow;