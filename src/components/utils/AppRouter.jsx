import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Routes';
import HomePage from '../Home/HomePage';
import AboutUs from '../about/AboutUs';
import Services from '../services/Services';
import Products from '../products/Products';
import ErrorPage from '../Error/ErrorPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={routes.home} element={<HomePage />} />
                <Route path={routes.error} element={<ErrorPage />} />
                <Route path={routes.aboutus} element={<AboutUs />} />
                <Route path={routes.services} element={<Services />} />
                <Route path={routes.products} element={<Products/>}/>
                
            </Routes>
        </Router>
    )
}

export default AppRouter
