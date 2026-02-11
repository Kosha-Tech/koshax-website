import React from 'react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const layers = [
    {
        id: 5,
        name: 'Network',
        desc: 'A living network where humans and AI share context, exchange ideas, and collaborate effortlessly.',
        icon: '🌐'
    },
    {
        id: 4,
        name: 'Distributed Interface',
        desc: 'Access your world from anywhere - apps, whatsApp, messengers, browser extensions, or widgets.',
        icon: '📱'
    },
    {
        id: 3,
        name: 'Intelligence',
        desc: 'AI agents that observe, understand, and act - turning context into meaningful decisions.',
        icon: '🧠'
    },
    {
        id: 2,
        name: 'Context Graph',
        desc: 'Your data, stitched into a living graph - structured, secure, and always up to date.',
        icon: '🕸️'
    },
    {
        id: 1,
        name: 'Information Capture',
        desc: 'Your data, your way - connect, integrate, deploy bots, use MCPs, or just type it in.',
        icon: '📥'
    }
];

const HowItWorks = () => {
    return (
        <section className="how-it-works" id="product">
            <div className="container">
                <motion.h2
                    className="hiw-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    How <span className="hiw-highlight">KoshaX</span> Works?
                </motion.h2>
                <motion.p
                    className="hiw-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    Five intelligent layers that transform digital chaos into harmony.
                </motion.p>

                <div className="hiw-layout">
                    {/* Left: Animated image */}
                    <motion.div
                        className="hiw-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <div className="hiw-image-wrapper">
                            <img src="/layersa.png" alt="KoshaX Product Layers" className="hiw-image" />
                            <div className="hiw-image-glow" />
                        </div>
                    </motion.div>

                    {/* Right: Layer steps */}
                    <div className="hiw-steps">
                        {layers.map((layer, i) => (
                            <motion.div
                                key={layer.id}
                                className="hiw-step"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.45, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="hiw-step-connector">
                                    <span className="hiw-step-number">{layer.id}</span>
                                    {i < layers.length - 1 && <span className="hiw-step-line" />}
                                </div>
                                <div className="hiw-step-content">
                                    <div className="hiw-step-icon">{layer.icon}</div>
                                    <div>
                                        <h4 className="hiw-step-name">{layer.name}</h4>
                                        <p className="hiw-step-desc">{layer.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
