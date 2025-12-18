import React from 'react';
import './Pricing.css';

const plans = [
    {
        name: "Seeker",
        price: "Free",
        features: ["Basic Notes", "Personal Calendar", "1GB Storage"],
        highlight: false
    },
    {
        name: "Sage",
        price: "$29/mo",
        features: ["Unlimited Storage", "White-glove Service", "Ecosystem Access", "Early Features"],
        highlight: true
    }
];

const Pricing = () => {
    return (
        <section className="pricing pricing-coming-soon" id="pricing">
            <div className="container">
                <h2 className="section-title">Start Your Journey</h2>
                <div className="pricing-grid">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                            <h3>{plan.name}</h3>
                            <div className="price">{plan.price}</div>
                            <ul className="features-list">
                                {plan.features.map(f => <li key={f}>✓ {f}</li>)}
                            </ul>
                            <button className={`btn-plan ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}>
                                Choose {plan.name}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="coming-soon-overlay">
                    <div className="coming-soon-badge">Coming Soon</div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
