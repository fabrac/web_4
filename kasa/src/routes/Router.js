import React from 'react';
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import About from '../pages/About'
import Logement from '../pages/Logement'
import {
    Routes, Route
} from "react-router-dom"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/logement/:id" element={<Logement/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default Router;