import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || 'YOUR_SITE_KEY';
const WAITLIST_ENDPOINT = import.meta.env.VITE_WAITLIST_ENDPOINT || 'YOUR_APPS_SCRIPT_WEB_APP_URL';

const countryCodes = [
    { code: '+91', country: 'IN', flag: '🇮🇳' },
    { code: '+1', country: 'US', flag: '🇺🇸' },
    { code: '+44', country: 'GB', flag: '🇬🇧' },
    { code: '+61', country: 'AU', flag: '🇦🇺' },
    { code: '+971', country: 'AE', flag: '🇦🇪' },
    { code: '+65', country: 'SG', flag: '🇸🇬' },
    { code: '+49', country: 'DE', flag: '🇩🇪' },
    { code: '+33', country: 'FR', flag: '🇫🇷' },
    { code: '+81', country: 'JP', flag: '🇯🇵' },
    { code: '+86', country: 'CN', flag: '🇨🇳' },
    { code: '+82', country: 'KR', flag: '🇰🇷' },
    { code: '+55', country: 'BR', flag: '🇧🇷' },
    { code: '+7', country: 'RU', flag: '🇷🇺' },
    { code: '+27', country: 'ZA', flag: '🇿🇦' },
    { code: '+234', country: 'NG', flag: '🇳🇬' },
    { code: '+62', country: 'ID', flag: '🇮🇩' },
    { code: '+60', country: 'MY', flag: '🇲🇾' },
    { code: '+63', country: 'PH', flag: '🇵🇭' },
    { code: '+66', country: 'TH', flag: '🇹🇭' },
    { code: '+39', country: 'IT', flag: '🇮🇹' },
    { code: '+34', country: 'ES', flag: '🇪🇸' },
    { code: '+31', country: 'NL', flag: '🇳🇱' },
    { code: '+46', country: 'SE', flag: '🇸🇪' },
    { code: '+41', country: 'CH', flag: '🇨🇭' },
    { code: '+64', country: 'NZ', flag: '🇳🇿' },
    { code: '+353', country: 'IE', flag: '🇮🇪' },
    { code: '+972', country: 'IL', flag: '🇮🇱' },
    { code: '+94', country: 'LK', flag: '🇱🇰' },
    { code: '+977', country: 'NP', flag: '🇳🇵' },
];

const Hero = () => {
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [message, setMessage] = useState('');
    const [widgetId, setWidgetId] = useState(null);
    const turnstileRef = useRef(null);
    const renderedRef = useRef(false);
    const tokenInputRef = useRef(null);
    const formRef = useRef(null);
    const iframeRef = useRef(null);
    const pendingSubmitRef = useRef(false);

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

    useEffect(() => {
        const iframeEl = iframeRef.current;
        if (!iframeEl) return;

        const handleLoad = () => {
            if (!pendingSubmitRef.current) return;
            pendingSubmitRef.current = false;
            setStatus('success');
            setMessage('You are on the waitlist. Thank you!');
            setPhone('');
            window?.turnstile?.reset?.(widgetId || undefined);
        };

        iframeEl.addEventListener('load', handleLoad);
        return () => {
            iframeEl.removeEventListener('load', handleLoad);
        };
    }, [widgetId]);

    const countryDigits = countryCode.replace(/\D/g, '');
    const maxSubscriberDigits = 15 - countryDigits.length;
    const e164Number = `+${countryDigits}${phone}`;

    const handleSubmit = (e) => {
        const totalDigits = countryDigits.length + phone.length;
        if (totalDigits < 7 || totalDigits > 15) {
            e.preventDefault();
            setStatus('error');
            setMessage('Please enter a valid phone number.');
            return;
        }

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

        pendingSubmitRef.current = true;
        setStatus('loading');
        setMessage('Submitting...');
    };

    return (
        <section className="hero" id="waitlist">
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
                    Focus on what matters,<br />
                    <span className="highlight-text">We'll handle the rest</span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    KoshaX is your everyday personal assistant for household, personal management, health, finance and travel
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <iframe ref={iframeRef} name="waitlist_iframe" className="waitlist-iframe" title="waitlist" />
                    <form
                        ref={formRef}
                        className="waitlist-form"
                        onSubmit={handleSubmit}
                        method="POST"
                        target="waitlist_iframe"
                        action={WAITLIST_ENDPOINT}
                    >
                        <div className="waitlist-row">
                            <select
                                className="country-code-select"
                                value={countryCode}
                                onChange={(e) => {
                                    const newCode = e.target.value;
                                    const newMax = 15 - newCode.replace(/\D/g, '').length;
                                    setCountryCode(newCode);
                                    setPhone((prev) => prev.slice(0, newMax));
                                }}
                                name="countryCode"
                            >
                                {countryCodes.map((c) => (
                                    <option key={c.code + c.country} value={c.code}>
                                        {c.flag} {c.country} {c.code}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
                                value={phone}
                                onChange={(e) => { const digits = e.target.value.replace(/\D/g, ''); if (digits.length <= maxSubscriberDigits) setPhone(digits); }}
                                required
                            />
                            <button type="submit" className="btn-primary" disabled={status === 'loading'}>
                                <span className="btn-text-full">{status === 'loading' ? 'Joining...' : 'Join the waitlist'}</span>
                                <span className="btn-text-short">{status === 'loading' ? '...' : 'Join Waitlist'}</span>
                            </button>
                        </div>

                        <div className="turnstile-wrapper">
                            <div ref={turnstileRef} className="turnstile-target" />
                        </div>

                        <input type="text" name="hp" style={{ display: 'none' }} autoComplete="off" />
                        <input type="hidden" name="turnstileToken" ref={tokenInputRef} />
                        <input type="hidden" name="e164Phone" value={e164Number} />
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
