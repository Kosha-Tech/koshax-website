import React from 'react';
import Hero from '../components/Hero';
import ProblemStatement from '../components/ProblemStatement';
import KoshaLayers from '../components/KoshaLayers';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
    return (
        <>
            <Hero />
            <ProblemStatement />
            <KoshaLayers />
            <HowItWorks />
            <Features />
            <Testimonials />
        </>
    );
};

export default HomePage;
