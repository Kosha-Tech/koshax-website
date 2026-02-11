import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Pricing.css';

const plans = [
    {
        name: "Seeker",
        desc: "For individuals getting started",
        monthlyPrice: 0,
        annualPrice: 0,
        features: [
            { text: "Basic Notes & Reminders", included: true },
            { text: "Personal Calendar", included: true },
            { text: "1 GB Storage", included: true },
            { text: "1 Device Sync", included: true },
            { text: "AI Assistant", included: false },
            { text: "Priority Support", included: false },
        ],
        cta: "Get Started Free",
        highlight: false
    },
    {
        name: "Sage",
        desc: "For power users who want more",
        monthlyPrice: 9,
        annualPrice: 7,
        badge: "Most Popular",
        features: [
            { text: "Unlimited Notes & Reminders", included: true },
            { text: "Smart Calendar Sync", included: true },
            { text: "50 GB Storage", included: true },
            { text: "5 Device Sync", included: true },
            { text: "AI Assistant", included: true },
            { text: "Priority Support", included: false },
        ],
        cta: "Start Free Trial",
        highlight: true
    },
    {
        name: "Siddhi",
        desc: "For those who want it all",
        monthlyPrice: 29,
        annualPrice: 24,
        features: [
            { text: "Everything in Sage", included: true },
            { text: "Unlimited Storage", included: true },
            { text: "Unlimited Devices", included: true },
            { text: "White-Glove Onboarding", included: true },
            { text: "Advanced AI Insights", included: true },
            { text: "Priority Support", included: true },
        ],
        cta: "Start Free Trial",
        highlight: false
    }
];

const faqs = [
    {
        q: "Can I switch plans later?",
        a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle."
    },
    {
        q: "Is there a free trial?",
        a: "Yes! Both the Sage and Siddhi plans come with a 14-day free trial. No credit card required to start."
    },
    {
        q: "What happens to my data if I cancel?",
        a: "Your data remains accessible for 30 days after cancellation. You can export everything at any time from your account settings."
    },
    {
        q: "Do you offer team or family plans?",
        a: "We're working on team and family plans. Join the waitlist to be the first to know when they launch."
    }
];

const Pricing = () => {
    const [annual, setAnnual] = useState(true);
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                {/* Header */}
                <div className="pricing-header">
                    <motion.h2
                        className="pricing-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Simple, transparent pricing
                    </motion.h2>
                    <motion.p
                        className="pricing-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Start free. Upgrade when you're ready. No hidden fees, ever.
                    </motion.p>

                    {/* Billing toggle */}
                    <motion.div
                        className="billing-toggle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span className={!annual ? 'active' : ''}>Monthly</span>
                        <button
                            className={`toggle-switch ${annual ? 'on' : ''}`}
                            onClick={() => setAnnual(!annual)}
                            aria-label="Toggle billing period"
                        >
                            <span className="toggle-knob" />
                        </button>
                        <span className={annual ? 'active' : ''}>Annual</span>
                        <span className="save-badge">Save 20%</span>
                    </motion.div>
                </div>

                {/* Cards */}
                <div className="pricing-grid-wrapper">
                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {plan.badge && <div className="card-badge">{plan.badge}</div>}
                            <h3 className="card-plan-name">{plan.name}</h3>
                            <p className="card-desc">{plan.desc}</p>

                            <div className="card-price">
                                {plan.monthlyPrice === 0 ? (
                                    <span className="price-amount">Free</span>
                                ) : (
                                    <>
                                        <span className="price-currency">$</span>
                                        <span className="price-amount">
                                            {annual ? plan.annualPrice : plan.monthlyPrice}
                                        </span>
                                        <span className="price-period">/mo</span>
                                    </>
                                )}
                            </div>
                            {plan.monthlyPrice > 0 && annual && (
                                <p className="price-annual-note">Billed annually</p>
                            )}

                            <ul className="card-features">
                                {plan.features.map((f) => (
                                    <li key={f.text} className={f.included ? 'included' : 'excluded'}>
                                        <span className="feature-icon">{f.included ? '✓' : '—'}</span>
                                        {f.text}
                                    </li>
                                ))}
                            </ul>

                            <button className={`card-cta ${plan.highlight ? 'cta-primary' : 'cta-outline'}`}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
                <div className="coming-soon-overlay">
                    <div className="coming-soon-badge">Coming Soon</div>
                </div>
                </div>

                {/* FAQ */}
                <div className="pricing-faq">
                    <motion.h3
                        className="faq-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Frequently asked questions
                    </motion.h3>
                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                className={`faq-item ${openFaq === i ? 'open' : ''}`}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    {faq.q}
                                    <span className="faq-chevron">{openFaq === i ? '−' : '+'}</span>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            className="faq-answer"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <p>{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Pricing;
