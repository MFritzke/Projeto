import React from 'react';
import Main from './pages/Main/MainPage';
import Home from './pages/Home/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './client/footer/Footer'
import Header from './client/header/Header';

export default function RoutesMain() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/tela" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    )
}