import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;