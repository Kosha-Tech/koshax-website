import React from 'react';
import { motion } from 'framer-motion';
import './KoshaLayers.css';

const layers = [
    { id: 5, name: "Anandamaya", label: "Zero Digital Chaos", desc: "The bliss of perfect organization", color: "#e0c068" }, // Gold
    { id: 4, name: "Vijnanamaya", label: "Intelligence", desc: "AI-powered insights and decisions", color: "#3aa99f" }, // Teal Accent
    { id: 3, name: "Manomaya", label: "Data Storage", desc: "Organized information at your fingertips", color: "#2d7a74" }, // Teal Medium
    { id: 2, name: "Pranamaya", label: "Connectivity", desc: "Seamless sync across all devices", color: "#1f504c" }, // Teal Dim
    { id: 1, name: "Annamaya", label: "Digital Devices", desc: "Your physical hardware unified", color: "#163a37" }  // Teal Dark
];

const KoshaLayers = () => {
    return (
        <section className="kosha-layers-section">
            <div className="container">
                {/* Header Section */}
                <div className="layers-header">
                    <h2 className="layers-title">The Five Layers of <span className="highlight-text">Digital Harmony</span></h2>
                    <p className="layers-sub">Inspired by the ancient Kosha philosophy, KoshaX creates layers of protection and organization around your digital life.</p>
                </div>

                <div className="layers-split-layout">
                    <div className="layers-visual">
                        {/* Abstract Concentric Circles */}
                        <div className="circles-wrapper">
                            {layers.map((layer, index) => {
                                const minSize = (index + 1) * 50 + 20;
                                const maxSize = (index + 1) * 80 + 40;
                                const vwSize = (index + 1) * 16;

                                return (
                                    <motion.div
                                        key={layer.id}
                                        className="abstract-circle"
                                        style={{
                                            backgroundColor: layer.color,
                                            zIndex: layer.id,
                                            width: `clamp(${minSize}px, ${vwSize}vw, ${maxSize}px)`,
                                            height: `clamp(${minSize}px, ${vwSize}vw, ${maxSize}px)`
                                        }}
                                        animate={{
                                            rotate: index % 2 === 0 ? 360 : -360,
                                            scale: [1, 1.05, 1],
                                            opacity: 0.9
                                        }}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        transition={{
                                            rotate: { duration: 15 + index * 5, repeat: Infinity, ease: "linear" }, // Distinct speeds
                                            scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }, // Faster breathing
                                            opacity: { duration: 1, delay: index * 0.1 }
                                        }}
                                    >
                                    </motion.div>
                                );
                            })}

                            {/* Static Center Label */}
                            <motion.div
                                className="center-label"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                            >
                                Kosha<span className="accent">X</span>
                            </motion.div>
                        </div>
                    </div>

                    <div className="layers-list-wrapper">
                        <div className="layers-list">
                            {layers.map((layer) => (
                                <motion.div
                                    key={layer.id}
                                    className="layer-card"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: (6 - layer.id) * 0.1 }}
                                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.08)' }}
                                >
                                    <div className="layer-number" style={{ backgroundColor: layer.color }}>{layer.id}</div>
                                    <div className="layer-info">
                                        <h4>{layer.name} • <span style={{ color: '#3aa99f' }}>{layer.label}</span></h4>
                                        <p>{layer.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KoshaLayers;
