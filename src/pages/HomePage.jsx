import React from 'react';
import Hero from '../components/Hero';
import ProblemStatement from '../components/ProblemStatement';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
    return (
        <>
            <Hero />
            <ProblemStatement />
            <HowItWorks />
            <Features />
            <Testimonials />
        </>
    );
};

export default HomePage;
