import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    Kosha<span>X</span>
                    <p>© 2025 KoshaX Inc.</p>
                </div>
                <div className="footer-links">
                    <div className="link-column">
                        <h4>Product</h4>
                        <a href="#product">Features</a>
                        <a href="#pricing">Pricing</a>
                    </div>
                    <div className="link-column">
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="link-column">
                        <h4>Legal</h4>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                    <div className="link-column">
                        <h4>Social</h4>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
