import React from 'react';
import Banner from '../components/Banner.jsx'
import img from '../assets/images/Banner.jpg';
import Cards from '../components/Cards.jsx';

const Home = () => {
    return (
        <main className="home">
            <Banner image={img} title='Chez vous, partout et ailleurs'></Banner>
            <Cards></Cards>
        </main>
    );
};

export default Home;