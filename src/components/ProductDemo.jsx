import React from 'react';
import { motion } from 'framer-motion';
import './ProductDemo.css';

const ProductDemo = () => {
    return (
        <section className="product-demo">
            <div className="container">
                <h2 className="section-title">Experience the Flow</h2>
                <div className="demo-wrapper">
                    <motion.div
                        className="demo-screen"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="screen-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="screen-content">
                            <div className="sidebar">
                                <div className="skeleton-line w-50"></div>
                                <div className="skeleton-line w-70"></div>
                                <div className="skeleton-line w-60"></div>
                            </div>
                            <div className="main-area">
                                <div className="skeleton-block"></div>
                                <div className="skeleton-grid">
                                    <div className="skeleton-card"></div>
                                    <div className="skeleton-card"></div>
                                    <div className="skeleton-card"></div>
                                </div>
                            </div>
                        </div>
                        <div className="demo-overlay">
                            <button className="btn-primary">Watch Full Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductDemo;
