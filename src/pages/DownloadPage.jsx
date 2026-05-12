import React, { useEffect, useState } from 'react';
import './DownloadPage.css';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.koshax.ai&hl=en_IN';
const APP_STORE_URL = 'https://apps.apple.com/in/app/koshax/id6761248820';

const detectPlatform = () => {
    if (typeof navigator === 'undefined') return 'other';
    const ua = navigator.userAgent || '';
    // iPadOS 13+ reports as Mac with touch — treat as iOS.
    const isIpadOS = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
    if (/iPhone|iPad|iPod/.test(ua) || isIpadOS) return 'ios';
    if (/Android/i.test(ua)) return 'android';
    return 'other';
};

const DownloadPage = () => {
    const [platform, setPlatform] = useState('other');

    useEffect(() => {
        const p = detectPlatform();
        setPlatform(p);
        if (p === 'ios') {
            window.location.replace(APP_STORE_URL);
        } else if (p === 'android') {
            window.location.replace(PLAY_STORE_URL);
        }
    }, []);

    const redirecting = platform === 'ios' || platform === 'android';

    return (
        <section className="download-page">
            <div className="container download-container">
                <img src="/koshalogo.png" alt="KoshaX" className="download-logo" />
                <h1 className="download-title">
                    {redirecting ? 'Redirecting to your store…' : 'Download KoshaX'}
                </h1>
                <p className="download-subtitle">
                    {redirecting
                        ? 'If you are not redirected automatically, use the links below.'
                        : 'Available on iOS and Android.'}
                </p>
                <div className="download-buttons">
                    <a
                        href={APP_STORE_URL}
                        className="download-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg className="download-btn-icon" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                        </svg>
                        <span className="download-btn-text">
                            <span className="download-btn-eyebrow">Download on the</span>
                            <span className="download-btn-store">App Store</span>
                        </span>
                    </a>
                    <a
                        href={PLAY_STORE_URL}
                        className="download-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg className="download-btn-icon" viewBox="0 0 512 512" aria-hidden="true">
                            <path fill="#00D4FF" d="M325.3 234.3 104.6 13l280.8 161z"/>
                            <path fill="#FFCE00" d="m104.6 499 220.7-221.3L385.4 338z"/>
                            <path fill="#FF3A44" d="M385.4 338 104.6 499V13l280.8 161z"/>
                            <path fill="#00F076" d="M325.3 277.7 104.6 499V13l220.7 264.7z" opacity=".8"/>
                        </svg>
                        <span className="download-btn-text">
                            <span className="download-btn-eyebrow">Get it on</span>
                            <span className="download-btn-store">Google Play</span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DownloadPage;
