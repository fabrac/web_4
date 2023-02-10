import React from 'react';
import '../styles/Banner.css';
const Banner = ({image, title}) => {
    return (
        <div className='banner'>
            <img alt='' src={image}/>
            {title ?  (
                <h1>Chez vous, partout et ailleurs</h1>
            ) : null}
        </div>
    );
};

export default Banner;