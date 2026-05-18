import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleDownloadClick } from '../utils/downloadRedirect';
import './LandingPage1.css';
import './LandingPage2.css';

const CHAOS_TAGS = [
  { emoji: '📋', text: 'Vaccination cards', bg: '#fff9c4', color: '#9e8600' },
  { emoji: '💊', text: 'Medication schedules', bg: '#fce4ec', color: '#ad1457' },
  { emoji: '📱', text: '4 different health apps', bg: '#e8f5e8', color: '#2e7d32' },
  { emoji: '🧠', text: '"I think his allergy was..."', bg: '#f3e8fd', color: '#7b2eb5' },
  { emoji: '🩸', text: 'Lab reports in email', bg: '#fde8e8', color: '#a83232' },
  { emoji: '🦷', text: 'Dental records somewhere', bg: '#e8f0fe', color: '#2e5bb5' },
  { emoji: '👁️', text: 'Eye test prescription', bg: '#e8f5e8', color: '#2e7d32' },
  { emoji: '🤔', text: '"When was the last checkup?"', bg: '#f3e8fd', color: '#7b2eb5' },
  { emoji: '📞', text: 'Clinic phone numbers', bg: '#e0f2f1', color: '#00695c' },
  { emoji: '🧪', text: 'Allergy test results', bg: '#e8f5e8', color: '#2e7d32' },
  { emoji: '💉', text: 'Booster due dates', bg: '#fde8e8', color: '#a83232' },
  { emoji: '📄', text: 'Insurance claim papers', bg: '#e8f0fe', color: '#2e5bb5' },
  { emoji: '😰', text: '"Did we give the dose?"', bg: '#f3e8fd', color: '#7b2eb5' },
  { emoji: '🏥', text: 'Doctor visit notes', bg: '#e8f0fe', color: '#2e5bb5' },
  { emoji: '💬', text: 'WhatsApp prescription pics', bg: '#e0f2f1', color: '#00695c' },
  { emoji: '🗂️', text: 'School medical forms', bg: '#fff3e0', color: '#c77700' },
  { emoji: '📈', text: "Child's growth charts", bg: '#e8f5e8', color: '#2e7d32' },
  { emoji: '🩺', text: "Pediatrician's advice", bg: '#fce4ec', color: '#ad1457' },
];

const FAMILY = [
  {
    emoji: '👩', name: 'Priya', role: 'You',
    bars: [
      { label: 'Sleep', fill: 82, color: '#4ade80' },
      { label: 'Steps', fill: 65, color: '#60a5fa' },
    ],
  },
  {
    emoji: '👨', name: 'Rahul', role: 'Partner',
    bars: [
      { label: 'Sleep', fill: 55, color: '#fcd34d' },
      { label: 'Steps', fill: 90, color: '#4ade80' },
    ],
  },
  {
    emoji: '👦', name: 'Aarav', role: 'Son, 8yr',
    bars: [
      { label: 'Sleep', fill: 88, color: '#4ade80' },
      { label: 'Water', fill: 45, color: '#fcd34d' },
    ],
  },
  {
    emoji: '👧', name: 'Meera', role: 'Daughter, 5yr',
    bars: [
      { label: 'Sleep', fill: 92, color: '#4ade80' },
      { label: 'Water', fill: 70, color: '#4ade80' },
    ],
  },
];

const EVENTS = [
  { dot: '#4ade80', label: 'Meera — MMR Booster', date: 'May 18' },
  { dot: '#fcd34d', label: 'Rahul — Dental Checkup', date: 'May 24' },
  { dot: '#60a5fa', label: 'Aarav — Eye Test', date: 'Jun 2' },
];

function WaitlistForm() {
  const [email, setEmail] = useState('');
  return (
    <div className="lp2-cta-form">
      <input
        className="lp2-email-input"
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="lp2-waitlist-btn">Join the Waitlist</button>
    </div>
  );
}

function SectionBadge({ label = 'HOW IT WORKS' }) {
  return (
    <div className="lp1-section-badge">
      <img src="/lp2/section-icon.svg" alt="" />
      <span>{label}</span>
    </div>
  );
}

function DownloadButton() {
  const navigate = useNavigate();
  return (
    <button className="lp1-download-btn" onClick={() => handleDownloadClick(navigate)}>
      <span className="lp1-download-btn-label">Download App</span>
      <span className="lp1-download-btn-circle">
        <img src="/lp2/arrow-right.svg" alt="" />
      </span>
    </button>
  );
}

export default function LandingPage2() {
  return (
    <div className="lp1 lp2">
      {/* Nav */}
      <nav className="lp1-nav">
        <div className="lp1-nav-inner">
          <div className="lp1-logo">
            <img src="/lp2/logo-mark.svg" alt="" className="lp1-logo-mark" />
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
                Your whole family's health. One calm place
              </h1>
              <p className="lp1-hero-subtitle">
                Vaccines, allergies, medications, checkups, sleep habits — scattered across apps,
                papers, and memory. Kosha brings it all together so nothing slips through the
                cracks.
              </p>
              <div className="lp1-hero-cta">
                <DownloadButton />
              </div>
            </div>

            {/* Right – Family Wellness card */}
            <div className="lp2-hero-right">
              <div className="lp2-dashboard">

                {/* Header */}
                <div className="lp2-dash-header">
                  <span className="lp2-dash-title">Family Wellness</span>
                  <div className="lp2-dash-tabs">
                    <span className="lp2-tab lp2-tab-active">Overview</span>
                    <span className="lp2-tab lp2-tab-muted">Health</span>
                    <span className="lp2-tab lp2-tab-muted">Activity</span>
                  </div>
                </div>

                {/* 2×2 family grid */}
                <div className="lp2-family-grid">
                  {FAMILY.map((m) => (
                    <div key={m.name} className="lp2-family-card">
                      <div className="lp2-family-card-header">
                        <span className="lp2-family-emoji">{m.emoji}</span>
                        <div className="lp2-family-identity">
                          <span className="lp2-family-name">{m.name}</span>
                          <span className="lp2-family-role">{m.role}</span>
                        </div>
                      </div>
                      <div className="lp2-family-bars">
                        {m.bars.map((b) => (
                          <div key={b.label} className="lp2-bar-row">
                            <span className="lp2-bar-label">{b.label}</span>
                            <div className="lp2-bar-track">
                              <div className="lp2-bar-fill" style={{ width: `${b.fill}%`, background: b.color }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Upcoming events */}
                <div className="lp2-events-card">
                  <div className="lp2-events-title">Upcoming Health Events</div>
                  <div className="lp2-events-list">
                    {EVENTS.map((e, i) => (
                      <div key={i} className={`lp2-event-row ${i < EVENTS.length - 1 ? 'lp2-event-divider' : ''}`}>
                        <span className="lp2-event-dot" style={{ background: e.dot }} />
                        <span className="lp2-event-label">{e.label}</span>
                        <span className="lp2-event-date">{e.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── From Scattered Health Info ── */}
      <section className="lp1-scatter-outer">
        <div className="lp1-scatter-inner">
          <div className="lp1-section-header">
            <SectionBadge />
            <h2 className="lp1-section-title">
              From scattered health info to proactive family care.
            </h2>
          </div>

          <div className="lp1-chaos-wrapper">
            <div className="lp1-chaos-tags">
              {CHAOS_TAGS.map((tag, i) => (
                <div key={i} className="lp1-chaos-tag" style={{ background: tag.bg, color: tag.color }}>
                  <span>{tag.emoji}</span>
                  <span>{tag.text}</span>
                </div>
              ))}
            </div>

            <div className="lp1-phone-frame">
              <div className="lp1-phone-body">
                <img src="/lp2/phone-bg.png" alt="" className="lp1-phone-wallpaper" />
                <div className="lp1-phone-date">Thu 14 May</div>
                <div className="lp1-phone-time">09:45</div>
                <div className="lp2-phone-notifs">
                  <div className="lp1-phone-notif lp2-phone-notif">
                    <div className="lp1-notif-icon-wrap">
                      <img src="/lp2/app-icon.svg" alt="Kosha" className="lp1-notif-icon" />
                    </div>
                    <div className="lp1-notif-body">
                      <div className="lp1-notif-title">Meera's MMR booster is due May 18</div>
                      <div className="lp1-notif-sub">
                        Dr. Kapoor, 10:30 AM — slot auto-held from calendar
                      </div>
                    </div>
                  </div>
                  <div className="lp1-phone-notif lp2-phone-notif">
                    <div className="lp1-notif-icon-wrap">
                      <img src="/lp2/app-icon.svg" alt="Kosha" className="lp1-notif-icon" />
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
        </div>
      </section>

      {/* ── Everything Your Family Needs ── */}
      <section className="lp1-features-outer">
        <div className="lp1-features-inner">
          <div className="lp1-section-header">
            <SectionBadge label="FEATURES" />
            <h2 className="lp1-section-title">
              Everything your family needs.
              <br />
              Nothing it doesn't.
            </h2>
          </div>

          <div className="lp1-feature-cards">
            <div className="lp1-feature-card">
              <div className="lp1-feature-icon">📋</div>
              <div>
                <h3 className="lp1-feature-title">Health Records Vault</h3>
                <p className="lp1-feature-text">
                  Store vaccination records, prescriptions, lab reports, and allergy info for every
                  family member in one secure, searchable place.
                </p>
              </div>
            </div>
            <div className="lp1-feature-card">
              <div className="lp1-feature-icon">🔔</div>
              <div>
                <h3 className="lp1-feature-title">Smart Health Alerts</h3>
                <p className="lp1-feature-text">
                  Never miss a vaccination due date, medication refill, or annual checkup. Kosha
                  tracks it all and nudges you at the right time.
                </p>
              </div>
            </div>
            <div className="lp1-feature-card">
              <div className="lp1-feature-icon">📊</div>
              <div>
                <h3 className="lp1-feature-title">Wellness Trends</h3>
                <p className="lp1-feature-text">
                  Track sleep, hydration, screen time, and activity across your family. Spot patterns
                  before they become problems.
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
              <img key={n} src="/lp2/star.svg" alt="★" className="lp1-star" />
            ))}
            <span className="lp1-trusted-label">Trusted by Average Indians</span>
          </div>
          <h2 className="lp1-footer-title">
            Give your family the care it deserves
          </h2>
          <p className="lp1-footer-subtitle">
            Download the app and be the first to experience a smarter way to manage your family's health.
          </p>
          <DownloadButton />
          <p className="lp1-copyright">© 2026 Kosha. Your second brain.</p>
        </div>
      </section>
    </div>
  );
}
