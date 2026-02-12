import React from 'react';
import { motion } from 'framer-motion';
import './ProblemStatement.css';

const chaosTags = [
    { text: 'Too many calls', rotate: -8, top: '18%', left: '5%' },
    { text: 'Meal planning', rotate: 5, top: '10%', left: '28%' },
    { text: 'Low energy', rotate: -3, top: '25%', left: '48%' },
    { text: 'Files everywhere', rotate: 7, top: '8%', left: '68%' },
    { text: 'Missed the deadline', rotate: -6, top: '30%', left: '15%' },
    { text: 'Lost that note', rotate: 4, top: '35%', left: '38%' },
    { text: 'Too many apps', rotate: -5, top: '22%', left: '75%' },
    { text: 'Where did I save it?', rotate: 3, top: '38%', left: '60%' },
];

const ProblemStatement = () => {
    return (
        <section className="problem-section">
            <div className="container">
                <motion.p
                    className="problem-lead"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    More systems. More data. Just one mind to make sense of it all.
                </motion.p>

                <div className="chaos-zone">
                    {chaosTags.map((tag, i) => (
                        <motion.span
                            key={i}
                            className="chaos-tag"
                            style={{
                                top: tag.top,
                                left: tag.left,
                                '--rotate': `${tag.rotate}deg`,
                            }}
                            initial={{ opacity: 0, y: 15, rotate: 0 }}
                            whileInView={{ opacity: 1, y: 0, rotate: tag.rotate }}
                            transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                            viewport={{ once: true }}
                        >
                            {tag.text}
                        </motion.span>
                    ))}

                    <motion.h2
                        className="problem-punchline"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        It's <span className="punchline-accent">Pandemonium</span>
                    </motion.h2>
                </div>
            </div>
        </section>
    );
};

export default ProblemStatement;
