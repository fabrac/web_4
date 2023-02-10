import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import '../styles/Rating.css'

const Rating = ({stars}) => {
    let content = [];
    for (let i = 0; i < 5; i++) {
        content.push(<FontAwesomeIcon key={i} className={(i < stars) ? "star-fill" : "star" } icon={icon({name:'star', style:'solid'})} />);
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