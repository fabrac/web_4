import React from 'react';
import '../styles/Tag.css'

const Tag = ({title}) => {
    return (
        <div className='tag'>
            <h3>{title}</h3>
        </div>
    );
};

export default Tag;