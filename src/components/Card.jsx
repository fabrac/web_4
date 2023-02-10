import React from 'react';
import '../styles/Card.css';

const Card = ({image, k, title}) => {
    return (
        <figure key={k}>
            <div className='card'>
                <div className='container'>
                <img alt={title} src={image}/>
                </div>
                <h2>{title}</h2>
            </div>
        </figure>
    );
};

export default Card;