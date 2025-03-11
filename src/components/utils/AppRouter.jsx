import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Routes';
import HomePage from '../Home/HomePage';
import AboutUs from '../about/AboutUs';
import Services from '../services/Services';
import Products from '../products/Products';
import Contact from '../contact/contact';
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
                <Route path={routes.contact} element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
