import React from 'react';
import { motion } from 'framer-motion';
import './KoshaLayers.css';

const layers = [
    { id: 5, name: "Anandamaya", label: "Zero Digital Chaos", desc: "The bliss of perfect organization", color: "#7c3aed", rgb: "124,58,237" },
    { id: 4, name: "Vijnanamaya", label: "Intelligence", desc: "AI-powered insights and decisions", color: "#8b5cf6", rgb: "139,92,246" },
    { id: 3, name: "Manomaya", label: "Data Storage", desc: "Organized information at your fingertips", color: "#0ea5e9", rgb: "14,165,233" },
    { id: 2, name: "Pranamaya", label: "Connectivity", desc: "Seamless sync across all devices", color: "#38bdf8", rgb: "56,189,248" },
    { id: 1, name: "Annamaya", label: "Digital Devices", desc: "Your physical hardware unified", color: "#7dd3fc", rgb: "125,211,252" }
];

const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: 4 + Math.random() * 5,
    left: 5 + Math.random() * 90,
    delay: Math.random() * 6,
    duration: 5 + Math.random() * 4,
    color: i % 3 === 0 ? '#7c3aed' : i % 3 === 1 ? '#0ea5e9' : '#8b5cf6',
    drift: -30 + Math.random() * 60
}));

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
                            {/* Ambient rotating color wash */}
                            <div className="ambient-wash" />

                            {layers.map((layer, index) => {
                                const minSize = (index + 1) * 50 + 20;
                                const maxSize = (index + 1) * 80 + 40;
                                const vwSize = (index + 1) * 16;

                                return (
                                    <motion.div
                                        key={layer.id}
                                        className={`abstract-circle ring-glow-${index}`}
                                        style={{
                                            borderColor: layer.color,
                                            '--ring-rgb': layer.rgb,
                                            '--ring-color': layer.color,
                                            zIndex: layer.id,
                                            width: `clamp(${minSize}px, ${vwSize}vw, ${maxSize}px)`,
                                            height: `clamp(${minSize}px, ${vwSize}vw, ${maxSize}px)`
                                        }}
                                        animate={{
                                            rotate: index % 2 === 0 ? 360 : -360,
                                            scale: [1, 1.04, 1],
                                            opacity: 1
                                        }}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        transition={{
                                            rotate: { duration: 15 + index * 5, repeat: Infinity, ease: "linear" },
                                            scale: { duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 },
                                            opacity: { duration: 1, delay: index * 0.15 }
                                        }}
                                    >
                                        {/* Orbiting energy dot */}
                                        <span
                                            className="orbit-dot"
                                            style={{
                                                backgroundColor: '#fff',
                                                boxShadow: `0 0 4px 2px #fff, 0 0 10px 4px ${layer.color}, 0 0 20px 8px ${layer.color}99, 0 0 40px 12px ${layer.color}44`
                                            }}
                                        />
                                        {/* Second orbiting dot opposite side */}
                                        <span
                                            className="orbit-dot orbit-dot-secondary"
                                            style={{
                                                backgroundColor: layer.color,
                                                boxShadow: `0 0 6px 3px ${layer.color}aa, 0 0 15px 6px ${layer.color}44`
                                            }}
                                        />
                                    </motion.div>
                                );
                            })}

                            {/* Floating particles */}
                            {particles.map((p) => (
                                <span
                                    key={p.id}
                                    className="floating-particle"
                                    style={{
                                        width: p.size,
                                        height: p.size,
                                        left: `${p.left}%`,
                                        backgroundColor: p.color,
                                        boxShadow: `0 0 ${p.size * 2}px ${p.color}88`,
                                        animationDelay: `${p.delay}s`,
                                        animationDuration: `${p.duration}s`,
                                        '--drift': `${p.drift}px`
                                    }}
                                />
                            ))}

                            {/* Glowing center core */}
                            <div className="center-core">
                                <div className="core-ring core-ring-1" />
                                <div className="core-ring core-ring-2" />
                                <div className="core-ring core-ring-3" />
                            </div>

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
                                    whileHover={{ x: 10, backgroundColor: 'rgba(124,58,237,0.06)' }}
                                >
                                    <div className="layer-number" style={{ backgroundColor: layer.color }}>{layer.id}</div>
                                    <div className="layer-info">
                                        <h4>{layer.name} • <span style={{ color: '#7c3aed' }}>{layer.label}</span></h4>
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
