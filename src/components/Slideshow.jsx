import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from 'react'
import '../styles/Slideshow.css'

const Slideshow = ({slides}) => {
    const [currentSlide, slidechange] = useState(0)
    return (
        <div className="slideshow">
            <img alt='Slideshow' src={slides[currentSlide]}></img>
            {(slides.length > 1) ? (
                <>
                
                    <FontAwesomeIcon onClick={() => slidechange((currentSlide === 0) ? (slides.length - 1) : (currentSlide - 1))} className="left" icon={icon({name:'chevron-up', style:'solid'})} />
                    <FontAwesomeIcon onClick={() => slidechange((currentSlide === slides.length - 1) ? 0 : currentSlide + 1)} className="right" icon={icon({name:'chevron-up', style:'solid'})} />
                    <h2>{currentSlide + 1}/{slides.length}</h2>
                </>
            ) : null}
        </div>
    );
};

export default Slideshow;