import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleDownloadClick, trackPixel } from '../utils/downloadRedirect';
import './LandingPage1.css';

const MEMORY_CARDS = [
  {
    emoji: '🏥',
    bg: 'rgba(59,130,246,0.12)',
    title: "Aarav's Pediatrician",
    subtitle: 'Dr. Neha Sharma · Apollo Clinic, Dwarka',
    detail: 'Policy #: STAR-2847193',
    time: 'Saved 2d ago',
  },
  {
    emoji: '🔑',
    bg: 'rgba(167,139,250,0.12)',
    title: "WiFi at Nani's House",
    subtitle: 'Network: SharmaHome5G · Password saved securely',
    detail: null,
    time: 'Used last week',
  },
  {
    emoji: '🍕',
    bg: 'rgba(244,114,182,0.12)',
    title: 'That amazing pizza place in Goa',
    subtitle: 'Artisan Pizzeria, Baga Beach · "Get the truffle mushroom"',
    detail: null,
    time: "Trip Dec '25",
  },
  {
    emoji: '📄',
    bg: 'rgba(251,191,36,0.12)',
    title: 'Car Insurance Renewal',
    subtitle: 'ICICI Lombard · Due July 14 · Policy #IL-9927461',
    detail: null,
    time: 'Reminder set',
  },
  {
    emoji: '🏫',
    bg: 'rgba(52,211,153,0.12)',
    title: "Meera's Quarterly PTM",
    subtitle: 'Ms. Anita Kapoor · Section 2B · Thu, May 22 · 10:00 AM',
    detail: null,
    time: 'In 4 days',
  },
];

const CHAOS_TAGS = [
  { emoji: '🧠', text: '"What was that password?"', bg: '#fde8e8', color: '#a83232' },
  { emoji: '📱', text: 'Screenshots in camera roll', bg: '#e8f0fe', color: '#2e5bb5' },
  { emoji: '📄', text: 'Insurance docs in a drawer', bg: '#fff9c4', color: '#9e8600' },
  { emoji: '💬', text: 'Address shared on WhatsApp', bg: '#e8f5e8', color: '#2e7d32' },
  { emoji: '📋', text: 'Booking confirmations in email', bg: '#f3e8fd', color: '#7b2eb5' },
  { emoji: '🤔', text: '"Which clinic was it?"', bg: '#fde8e8', color: '#a83232' },
  { emoji: '📝', text: 'Notes app, page 47', bg: '#e8f5e8', color: '#2e7d32' },
  { emoji: '📒', text: 'Warranty cards somewhere', bg: '#fff3e0', color: '#c77700' },
  { emoji: '📞', text: "Plumber's number in old chat", bg: '#e8f0fe', color: '#2e5bb5' },
  { emoji: '🍕', text: '"That place we ate in Goa"', bg: '#fce4ec', color: '#ad1457' },
  { emoji: '🏦', text: 'Account details in PDF', bg: '#fff9c4', color: '#9e8600' },
  { emoji: '🔑', text: 'Locker combo on a sticky note', bg: '#e8f5e8', color: '#2e7d32' },
  { emoji: '😰', text: '"When does it expire?"', bg: '#fde8e8', color: '#a83232' },
  { emoji: '💳', text: 'Card PIN written down', bg: '#fff3e0', color: '#c77700' },
  { emoji: '📸', text: 'Photo of a prescription', bg: '#e0f2f1', color: '#00695c' },
  { emoji: '🏠', text: "Landlord's number buried", bg: '#e8f0fe', color: '#2e5bb5' },
  { emoji: '💊', text: 'Medicine name on old slip', bg: '#fce4ec', color: '#ad1457' },
  { emoji: '🎒', text: "Kid's school ID number", bg: '#fff9c4', color: '#9e8600' },
  { emoji: '🚗', text: 'Car pollution due date', bg: '#e8f0fe', color: '#2e5bb5' },
  { emoji: '📅', text: '"Was it the 3rd or the 13th?"', bg: '#f3e8fd', color: '#7b2eb5' },
  { emoji: '🏥', text: 'Doctor said something important', bg: '#fde8e8', color: '#a83232' },
];

function DownloadButton({ location = 'hero' }) {
  const navigate = useNavigate();
  return (
    <button className="lp1-download-btn" onClick={() => handleDownloadClick(navigate, { variant: 'lp1', angle: 'memory-recall', location })}>
      <span className="lp1-download-btn-label">Download App</span>
      <span className="lp1-download-btn-circle">
        <img src="/lp1/arrow-right.svg" alt="" />
      </span>
    </button>
  );
}

function SectionBadge({ label = 'HOW IT WORKS' }) {
  return (
    <div className="lp1-section-badge">
      <img src="/lp1/section-icon.svg" alt="" />
      <span>{label}</span>
    </div>
  );
}

export default function LandingPage1() {
  useEffect(() => {
    trackPixel('ViewLandingPage', { variant: 'lp1', angle: 'memory-recall' });
  }, []);

  return (
    <div className="lp1">
      {/* Nav */}
      <nav className="lp1-nav">
        <div className="lp1-nav-inner">
          <div className="lp1-logo">
            <img src="/lp1/logo-mark.svg" alt="" className="lp1-logo-mark" />
            <span className="lp1-logo-name">KOSHA</span>
          </div>
          <div className="lp1-nav-links" />
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="lp1-hero-outer">
        <div className="lp1-hero-card">
          <div className="lp1-hero-card-content">
          {/* Left */}
          <div className="lp1-hero-left">
            <p className="lp1-eyebrow">Your Second Brain</p>
            <h1 className="lp1-hero-title">
              Don't forget anything.
              <br />
              Ever again.
            </h1>
            <p className="lp1-hero-subtitle">
              From health reports to policy numbers, your favourite restaurant to kid's PTM, Kosha
              remembers every detail so your brain doesn't have to.
            </p>
            <div className="lp1-hero-cta">
              <DownloadButton />
            </div>
          </div>

          {/* Right – memory cards */}
          <div className="lp1-hero-right">
            <div className="lp1-cards-stack">
              {/* Floating search bubble */}
              <div className="lp1-search-bubble">
                <span className="lp1-search-icon-emoji">🔍</span>
                <span className="lp1-search-text">
                  Search:{' '}
                  <strong className="lp1-search-highlight">"car insurance policy number"</strong>
                </span>
              </div>

              {MEMORY_CARDS.map((card, i) => (
                <div key={i} className="lp1-memory-card">
                  <div className="lp1-memory-icon" style={{ background: card.bg }}>
                    {card.emoji}
                  </div>
                  <div className="lp1-memory-body">
                    <div className="lp1-memory-title">{card.title}</div>
                    <div className="lp1-memory-subtitle">
                      {card.subtitle}
                      {card.detail && (
                        <>
                          <br />
                          {card.detail}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="lp1-memory-time">{card.time}</div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ── From Scattered Memories ── */}
      <section className="lp1-scatter-outer">
        <div className="lp1-scatter-inner">
          <div className="lp1-section-header">
            <SectionBadge />
            <h2 className="lp1-section-title">
              From scattered memories to instant recall.
            </h2>
          </div>

          <div className="lp1-chaos-wrapper">
            {/* Tag cloud */}
            <div className="lp1-chaos-tags">
              {CHAOS_TAGS.map((tag, i) => (
                <div key={i} className="lp1-chaos-tag" style={{ background: tag.bg, color: tag.color }}>
                  <span>{tag.emoji}</span>
                  <span>{tag.text}</span>
                </div>
              ))}
            </div>

            {/* Phone mockup */}
            <div className="lp1-phone-frame">
              <div className="lp1-phone-body">
                <img src="/lp1/phone-bg.png" alt="" className="lp1-phone-wallpaper" />
                <div className="lp1-phone-date">Thu 14 May</div>
                <div className="lp1-phone-time">09:45</div>
                <div className="lp1-phone-notif">
                  <div className="lp1-notif-icon-wrap">
                    <img src="/lp1/app-icon.svg" alt="Kosha" className="lp1-notif-icon" />
                  </div>
                  <div className="lp1-notif-body">
                    <div className="lp1-notif-title">Aarav's vaccination is due Thursday</div>
                    <div className="lp1-notif-sub">
                      Dr. Sharma, 4:30 PM — slot auto-held from calendar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Instantly Findable ── */}
      <section className="lp1-features-outer">
        <div className="lp1-features-inner">
          <div className="lp1-section-header">
            <SectionBadge label="FEATURES" />
            <h2 className="lp1-section-title">
              Every detail, instantly
              <br />
              available. Always.
            </h2>
          </div>

          <div className="lp1-feature-cards">
            <div className="lp1-feature-card">
              <div className="lp1-feature-icon">⚡</div>
              <div>
                <h3 className="lp1-feature-title">Instant Capture</h3>
                <p className="lp1-feature-text">
                  Capture a photo, jot down a note, or connect your email. Kosha automatically
                  organizes and tags it all — medical records, travel itineraries, account details —
                  so you can find anything in seconds.
                </p>
              </div>
            </div>
            <div className="lp1-feature-card">
              <div className="lp1-feature-icon">🔍</div>
              <div>
                <h3 className="lp1-feature-title">Ask, Don't Search</h3>
                <p className="lp1-feature-text lp1-feature-quote">
                  <em>"What's my insurance number?" "When does the warranty expire?"</em>
                </p>
                <p className="lp1-feature-text">
                  Just ask in plain language and get the answer instantly — no digging through folders or apps.
                </p>
              </div>
            </div>
            <div className="lp1-feature-card">
              <div className="lp1-feature-icon">🔐</div>
              <div>
                <h3 className="lp1-feature-title">Safe Storage</h3>
                <p className="lp1-feature-text">
                  Your info stays encrypted and private. Documents, policy numbers, medical records —
                  everything safe, accessible only to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="lp1-footer-outer">
        <div className="lp1-footer-inner">
          <div className="lp1-stars">
            {[1, 2, 3, 4, 5].map((n) => (
              <img key={n} src="/lp1/star.svg" alt="★" className="lp1-star" />
            ))}
            <span className="lp1-trusted-label">Trusted by Average Indian</span>
          </div>
          <h2 className="lp1-footer-title">
            Free your brain.
            <br />
            Remember everything.
          </h2>
          <p className="lp1-footer-subtitle">
            Download the app for a second brain that never forgets.
          </p>
          <DownloadButton location="footer" />
          <p className="lp1-copyright">© 2026 Kosha. Your second brain.</p>
        </div>
      </section>
    </div>
  );
}
