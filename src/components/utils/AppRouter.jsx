import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Routes';
import LoginForm from '../Auth/Login/LoginForm';
import HomePage from '../Home/HomePage';
import AboutUs from '../about/AboutUs';
import Services from '../services/Services';
import SignupForm from '../Auth/Signup/SignupForm';
import ErrorPage from '../Error/ErrorPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={routes.home} element={<HomePage />} />
                <Route path={routes.login} element={<LoginForm />} />
                <Route path={routes.signup} element={<SignupForm />} />
                <Route path={routes.error} element={<ErrorPage />} />
                <Route path={routes.aboutus} element={<AboutUs />} />
                <Route path={routes.services} element={<Services />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
