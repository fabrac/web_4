import React from 'react';
import '../styles/Host.css'

const Host = ({name, image}) => {
    return (
        <div className='host'>
            <h3>{name}</h3>
            <img alt='host' src={image}/>
        </div>
    );
};

export default Host;