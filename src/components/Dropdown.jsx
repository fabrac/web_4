import React from 'react';
import { useState } from 'react'
import '../styles/Dropdown.css'
import chevron from '../assets/images/chevron-up.svg'

const Dropdown = ({title, text}) => {
    const [isOpen, open] = useState(false)
    return (
        <div className={isOpen ? "dropdown enable" : "dropdown"}>
            <h2 onClick={() => open(!isOpen)}>{title} 
                <img alt='' src={chevron} /></h2>
            <div className="text">
                {(Array.isArray(text) ? (
                    <ul>
                        {text.map((value) => (
                            <li key={value}>{value}</li>
                ))}
                    </ul>
                ) : (<p>{text}</p>))}
            </div>
        </div>
    );
};

export default Dropdown;