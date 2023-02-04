import React from 'react';
import {
    NavLink
} from "rea"

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <NavLink to="/logement/50">voir le logement</NavLink>
        </div>
    );
};

export default Home;