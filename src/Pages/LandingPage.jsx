import React from 'react';
import Hero from '../Components/Hero.jsx';
import Feature from '../Components/Feature.jsx';
import AboutUs from '../Components/AboutUs.jsx';
import Testimonials from '../Components/Testimonials.jsx';

const LandingPage = () => {
    return ( 
        <>
            <Hero />
            <Feature />        
            <AboutUs />
            <Testimonials />
        </>
     );
}
 
export default LandingPage;