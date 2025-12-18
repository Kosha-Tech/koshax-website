import React from 'react';
import './Features.css';

const features = [
    {
        id: 1,
        title: 'Personal Management',
        description: 'Organize your life with intelligent notes, tasks, and calendar integration.',
        icon: '🧠'
    },
    {
        id: 2,
        title: 'Health & Fitness',
        description: 'Track your wellness journey, workouts, and health metrics in one place.',
        icon: '💪'
    },
    {
        id: 3,
        title: 'Finance',
        description: 'Master your wealth. Track expenses, investments, and financial goals.',
        icon: '💰'
    },
    {
        id: 4,
        title: 'Travel',
        description: 'Plan seamless adventures. Itineraries, bookings, and memories.',
        icon: '✈️'
    },
    {
        id: 5,
        title: 'Friends & Family',
        description: 'Deepen your connections. Manage contacts and meaningful moments.',
        icon: '❤️'
    }
];

const Features = () => {
    return (
        <section className="features" id="product">
            <div className="container">
                <h2 className="section-title">Empower Your Digital Life</h2>
                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
