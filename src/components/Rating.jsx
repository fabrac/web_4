import React from 'react';
import '../styles/Rating.css'
import star from '../assets/images/star.svg'
import star_fill from '../assets/images/star_fill.svg'

const Rating = ({stars}) => {
    let content = [];
    for (let i = 0; i < 5; i++) {
        content.push(<img key={i} alt='' className="star" src={(i < stars) ? star_fill : star } />);
    }
    return (
        <div className="rating">
            <div className="rating-list">
                {content}
            </div>
        </div>
    );
};

export default Rating;