import React from 'react';
import {
    NavLink
} from 'react-router-dom'
import Logements from '../assets/logements.json'
import Card from './Card.jsx'
import '../styles/Cards.css';

const Cards = () => {
    return (
        <div className="cards">
            {Array.from(Logements).map((values, i) => (
                <NavLink to={`/logement/${values.id}`} key={values.id}><Card image={values.cover} title={values.title}></Card></NavLink>
            ))}
        </div>
    );
};

export default Cards;