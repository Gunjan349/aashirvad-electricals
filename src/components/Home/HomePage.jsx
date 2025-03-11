import React from 'react';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Services from './Services';
import Features from './Features';
import {Helmet} from 'react-helmet'
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Aashirvad Electricals</title>
        <meta name="description" content="Welcome to Aashirvad Electricals. We offer a wide range of electrical products including cables, insulators, switches, and more at affordable prices." />
        <meta name="keywords" content="electrical products, cables, insulators, switches, Aashirvad Electricals, electrical supplies" />
        <meta property="og:title" content="Aashirvad Electricals" />
        <meta property="og:description" content="Explore a wide range of electrical products including cables, insulators, and switches." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aashirvadelectricals.com" />
      </Helmet>
      <HeroSection />
      <AboutUs />
      <Services />
      <Features />
    </>
  )
}

export default HomePage
