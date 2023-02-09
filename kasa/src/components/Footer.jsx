import React from 'react';
import logo from './../assets/images/LOGO_White.svg';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={logo} alt="Logo de Kasa"/>
                <h2>© 2020 Kasa. All rights reserved</h2>
            </div>
        </footer>
    );
};

export default Footer;