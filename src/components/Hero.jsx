import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || 'YOUR_SITE_KEY';
const WAITLIST_ENDPOINT = import.meta.env.VITE_WAITLIST_ENDPOINT || 'YOUR_APPS_SCRIPT_WEB_APP_URL';

const Hero = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [message, setMessage] = useState('');
    const [widgetId, setWidgetId] = useState(null);
    const turnstileRef = useRef(null);
    const renderedRef = useRef(false);
    const tokenInputRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        let cancelled = false;

        const renderTurnstile = () => {
            if (cancelled || renderedRef.current || !turnstileRef.current || !window.turnstile) return;
            try {
                const id = window.turnstile.render(turnstileRef.current, {
                    sitekey: TURNSTILE_SITE_KEY,
                    theme: 'dark'
                });
                setWidgetId(id);
                renderedRef.current = true;
            } catch (err) {
                console.error('Turnstile render failed', err);
            }
        };

        // Attempt render immediately
        renderTurnstile();

        // Retry until script is ready
        const interval = setInterval(() => {
            if (renderedRef.current || cancelled) {
                clearInterval(interval);
                return;
            }
            renderTurnstile();
        }, 300);

        return () => {
            cancelled = true;
            clearInterval(interval);
            if (widgetId && window.turnstile?.remove) {
                window.turnstile.remove(turnstileRef.current);
            }
            renderedRef.current = false;
        };
    }, []);

    const handleSubmit = (e) => {
        const token = window?.turnstile?.getResponse?.(widgetId || undefined);
        if (!token) {
            e.preventDefault();
            setStatus('error');
            setMessage('Please complete the Turnstile check.');
            return;
        }

        if (tokenInputRef.current) {
            tokenInputRef.current.value = token;
        }

        setStatus('success');
        setMessage('Request sent. Check your inbox soon!');
        setEmail('');
        window?.turnstile?.reset?.(widgetId || undefined);
    };

    return (
        <section className="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="badge-dot"></span> AI-Powered Digital Ecosystem
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Get back control,<br />
                    <span className="highlight-text">feel the power</span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Your personal AI ecosystem for personal management, health, finance, travel, and relationships.
                    From chaos to clarity, powered by intelligence.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <iframe name="waitlist_iframe" className="waitlist-iframe" title="waitlist" />
                    <form
                        ref={formRef}
                        className="waitlist-form"
                        onSubmit={handleSubmit}
                        method="POST"
                        target="waitlist_iframe"
                        action={WAITLIST_ENDPOINT}
                    >
                        <div className="waitlist-row">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn-primary" disabled={status === 'loading'}>
                                {status === 'loading' ? 'Joining...' : 'Join the waitlist'}
                            </button>
                        </div>

                        <div className="turnstile-wrapper">
                            <div ref={turnstileRef} className="turnstile-target" />
                        </div>

                        <input type="text" name="hp" style={{ display: 'none' }} autoComplete="off" />
                        <input type="hidden" name="turnstileToken" ref={tokenInputRef} />
                        <input type="hidden" name="source" value="hero" />
                        <input type="hidden" name="userAgent" value={navigator.userAgent} />

                        {message && (
                            <div className={`waitlist-status ${status}`}>
                                {message}
                            </div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
