import React from 'react';
import Main from './pages/Main/MainPage';
import Tela from './pages/Tela';
import { BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom';
import Footer from './client/footer/Footer'
import Header from './client/header/Header';
import { isAuthenticated } from './auth';

const PrivateRoute = ({ element: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} {...rest} />
        ) : (
            redirect('/', {...props})
        )
    )} />
);


export default function RoutesMain() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/tela" element={<Tela />} />
                {/* <PrivateRoute path="/tela" element={<Tela />} /> */}
            </Routes>
            <Footer />
        </Router>
    )
}