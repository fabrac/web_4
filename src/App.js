import React from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import Router from './routes/Router'

const App = () => {
    return (
        <div>
            <Header />
            <Router />
            <Footer />
        </div>
    );
};

export default App;