import React from 'react';
import {
    NavLink
} from 'react-router-dom'
import '../styles/NotFound.css'

const NotFound = () => {
    return (
        <main id="not_found">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink to="/">Retourner sur la page d’accueil</NavLink>
        </main>
    );
};

export default NotFound;