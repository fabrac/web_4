import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../assets/images/LOGO.svg';
import '../styles/Header.css'

function Header()
{
    return (
        <header>
             <NavLink to="/"><img src={logo} alt="Logo de Kasa"/></NavLink>
            <nav>
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/about">A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;