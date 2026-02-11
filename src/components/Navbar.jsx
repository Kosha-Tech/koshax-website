import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Scroll to top when navigating to a new page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const productLink = location.pathname === '/' ? '#product' : '/#product';
    const philosophyLink = location.pathname === '/' ? '#philosophy' : '/#philosophy';

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo">
                    <img src="/koshalogo.png" alt="KoshaX" className="navbar-logo-img" />
                </Link>
                <div className="navbar-center">
                    <a href={philosophyLink}>Philosophy</a>
                    <a href={productLink}>Product</a>
                    <Link to="/pricing">Pricing</Link>
                </div>
                <a href="/#hero" className="navbar-cta">Join Waitlist</a>
            </div>
        </nav>
    );
};

export default Navbar;
