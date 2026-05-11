import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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
    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <a href="/" className="navbar-logo" onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname === '/') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        navigate('/');
                    }
                }}>
                    <img src="/koshalogo.png" alt="KoshaX" className="navbar-logo-img" />
                </a>
                <div className="navbar-center">
                    <Link to="/philosophy">Philosophy</Link>
                    <a href={productLink}>Product</a>
                    <Link to="/pricing">Pricing</Link>
                </div>
                <a
                    href={location.pathname === '/' ? '#waitlist' : '/#waitlist'}
                    className="navbar-cta"
                    onClick={() => window?.fbq?.('trackCustom', 'ClickJoinWaitlistCTA', { location: 'navbar' })}
                >Join Waitlist</a>
            </div>
        </nav>
    );
};

export default Navbar;
