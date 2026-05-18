import React from 'react';
import { useNavigate } from 'react-router-dom';
import { handleDownloadClick } from '../utils/downloadRedirect';
import './LandingPage1.css';
import './LandingPage4.css';

const CHAOS_TAGS = [
  { emoji: '📧', text: '47 unread emails', bg: '#fde8e8', color: '#a83232' },
  { emoji: '📅', text: '3 calendar conflicts', bg: '#e8f0fe', color: '#2e5bb5' },
  { emoji: '💬', text: 'WhatsApp groups (89)', bg: '#e8f5e8', color: '#2e7d32' },
  { emoji: '📱', text: 'Social notifications', bg: '#f3e8fd', color: '#7b2eb5' },
  { emoji: '🎒', text: 'School circulars', bg: '#fff9c4', color: '#9e8600' },
  { emoji: '📰', text: 'News alerts', bg: '#fff3e0', color: '#c77700' },
  { emoji: '📝', text: 'Scattered to-dos', bg: '#e0f2f1', color: '#00695c' },
  { emoji: '💊', text: 'Medication reminders', bg: '#fce4ec', color: '#ad1457' },
  { emoji: '🏦', text: 'Bank notifications', bg: '#fde8e8', color: '#a83232' },
  { emoji: '🚗', text: 'Car service due', bg: '#e8f0fe', color: '#2e5bb5' },
  { emoji: '🛒', text: 'Grocery lists', bg: '#e8f5e8', color: '#2e7d32' },
  { emoji: '🎂', text: 'Birthday reminders', bg: '#f3e8fd', color: '#7b2eb5' },
  { emoji: '📋', text: 'Insurance renewal', bg: '#fff3e0', color: '#c77700' },
  { emoji: '📞', text: 'Missed calls', bg: '#e0f2f1', color: '#00695c' },
  { emoji: '🏥', text: "Aarav's checkup", bg: '#fce4ec', color: '#ad1457' },
  { emoji: '📄', text: 'Tax documents', bg: '#fff9c4', color: '#9e8600' },
  { emoji: '🛵', text: 'Delivery tracking', bg: '#e8f5e8', color: '#2e7d32' },
  { emoji: '🔋', text: 'Device warranties', bg: '#e8f0fe', color: '#2e5bb5' },
  { emoji: '🎯', text: 'Pending decisions', bg: '#fce4ec', color: '#ad1457' },
  { emoji: '🏠', text: 'Home repairs list', bg: '#fff3e0', color: '#c77700' },
  { emoji: '📌', text: 'Things to remember', bg: '#f3e8fd', color: '#7b2eb5' },
  { emoji: '⏰', text: 'Overdue reminders', bg: '#fde8e8', color: '#a83232' },
];

const TASKS = [
  { done: true,  text: 'Drop kids at school',       badge: 'Personal', badgeBg: '#e8f5e8', badgeColor: '#3b8b3b' },
  { done: false, text: 'Pick up groceries for dinner', badge: 'Personal', badgeBg: '#e8f5e8', badgeColor: '#3b8b3b' },
  { done: false, text: 'Book dentist for Aarav',    badge: 'Health',   badgeBg: '#fde8e8', badgeColor: '#c53b3b' },
];

const STATS = [
  { value: '2.4×', label: 'More tasks completed per week' },
  { value: '87%',  label: 'Feel less overwhelmed' },
  { value: '45min', label: 'Saved daily on average' },
];

function DownloadButton({ location }) {
  const navigate = useNavigate();
  return (
    <button className="lp1-download-btn" onClick={() => handleDownloadClick(navigate, { source: `lp4-${location}` })}>
      <span className="lp1-download-btn-label">Download App</span>
      <span className="lp1-download-btn-circle">
        <img src="/lp4/arrow-right.svg" alt="" />
      </span>
    </button>
  );
}

function SectionBadge({ label = 'HOW IT WORKS' }) {
  return (
    <div className="lp1-section-badge">
      <img src="/lp4/section-icon.svg" alt="" />
      <span>{label}</span>
    </div>
  );
}

export default function LandingPage4() {
  return (
    <div className="lp1 lp4">
      {/* Nav */}
      <nav className="lp1-nav">
        <div className="lp1-nav-inner">
          <div className="lp1-logo">
            <img src="/lp4/logo-mark.svg" alt="" className="lp1-logo-mark" />
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
              <p className="lp1-eyebrow">Your Life OS</p>
              <h1 className="lp1-hero-title">
                Focus on what<br />matters.
              </h1>
              <p className="lp1-hero-subtitle">
                Your days are full of noise — endless tasks, pings, and mental clutter burying the
                things that actually count. Kosha cuts through it all, so your time and energy go
                where they belong.
              </p>
              <div className="lp1-hero-cta">
                <DownloadButton location="hero" />
              </div>
            </div>

            {/* Right — app panel */}
            <div className="lp4-hero-right">
            <div className="lp4-panel">
              {/* Header */}
              <div className="lp4-panel-header">
                <div>
                  <div className="lp4-greeting-sub">Good morning,</div>
                  <div className="lp4-greeting-name">Priya</div>
                </div>
                <div className="lp4-avatar">P</div>
              </div>

              {/* Body */}
              <div className="lp4-panel-body">
                {/* Today's Focus card */}
                <div className="lp4-focus-card">
                  <div className="lp4-focus-label">🎯 Today's Focus</div>
                  <div className="lp4-focus-title">Finish quarterly review deck</div>
                  <div className="lp4-focus-sub">Deep work block · 10:00 – 12:00 AM</div>
                </div>

                {/* Task rows */}
                {TASKS.map((t, i) => (
                  <div key={i} className="lp4-task-row">
                    <div className={`lp4-checkbox ${t.done ? 'lp4-checkbox-done' : ''}`}>
                      {t.done && <span>✓</span>}
                    </div>
                    <span className={`lp4-task-text ${t.done ? 'lp4-task-done' : ''}`}>
                      {t.text}
                    </span>
                    <span className="lp4-task-badge" style={{ background: t.badgeBg, color: t.badgeColor }}>
                      {t.badge}
                    </span>
                  </div>
                ))}
              </div>

              {/* Floating streak badge */}
              <div className="lp4-streak-badge">
                <span className="lp4-streak-fire">🔥</span>
                <div>
                  <div className="lp4-streak-num">12</div>
                  <div className="lp4-streak-label">Day streak</div>
                </div>
              </div>

              {/* Floating progress bar */}
              <div className="lp4-progress-badge">
                <div className="lp4-progress-label">Today's progress</div>
                <div className="lp4-progress-track">
                  <div className="lp4-progress-fill" style={{ width: '72%' }} />
                </div>
              </div>
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
                <img src="/lp4/phone-bg.png" alt="" className="lp1-phone-wallpaper" />
                <div className="lp1-phone-date">Thu 14 May</div>
                <div className="lp1-phone-time">09:45</div>
                <div className="lp2-phone-notifs">
                  <div className="lp1-phone-notif lp2-phone-notif">
                    <div className="lp1-notif-icon-wrap">
                      <img src="/lp4/app-icon.svg" alt="Kosha" className="lp1-notif-icon" />
                    </div>
                    <div className="lp1-notif-body">
                      <div className="lp1-notif-title">Aarav's vaccination is due Thursday</div>
                      <div className="lp1-notif-sub">Dr. Mehra, 4:30 PM — slot auto-held from calendar</div>
                    </div>
                  </div>
                  <div className="lp1-phone-notif lp2-phone-notif">
                    <div className="lp1-notif-icon-wrap">
                      <img src="/lp4/app-icon.svg" alt="Kosha" className="lp1-notif-icon" />
                    </div>
                    <div className="lp1-notif-body">
                      <div className="lp1-notif-title">Tax filing deadline in 5 days</div>
                      <div className="lp1-notif-sub">Documents ready — just needs your review & sign</div>
                    </div>
                  </div>
                  <div className="lp1-phone-notif lp2-phone-notif">
                    <div className="lp1-notif-icon-wrap">
                      <img src="/lp4/app-icon.svg" alt="Kosha" className="lp1-notif-icon" />
                    </div>
                    <div className="lp1-notif-body">
                      <div className="lp1-notif-title">Car service overdue by 800km</div>
                      <div className="lp1-notif-sub">Nearest service centre has a Saturday morning slot</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Less overwhelm ── */}
      <section className="lp1-features-outer">
        <div className="lp1-features-inner">
          <div className="lp1-section-header">
            <SectionBadge label="FEATURES" />
            <h2 className="lp1-section-title">
              Less Chaos, More clarity.<br />Every single day.
            </h2>
          </div>

          <div className="lp1-feature-cards">
            <div className="lp1-feature-card">
              <div className="lp1-feature-icon">🎯</div>
              <div>
                <h3 className="lp1-feature-title">Daily Focus Mode</h3>
                <p className="lp1-feature-text">
                  Each morning, pick the one thing that truly matters. Everything else gets parked —
                  not forgotten, just quieted — so you can do deep work without guilt.
                </p>
              </div>
            </div>
            <div className="lp1-feature-card">
              <div className="lp1-feature-icon">⚡</div>
              <div>
                <h3 className="lp1-feature-title">Smart Prioritisation</h3>
                <p className="lp1-feature-text">
                  Kosha learns what matters to you and surfaces high-impact tasks automatically. The
                  busywork fades. The important stuff rises.
                </p>
              </div>
            </div>
            <div className="lp1-feature-card">
              <div className="lp1-feature-icon">🧘</div>
              <div>
                <h3 className="lp1-feature-title">Calm Dashboard</h3>
                <p className="lp1-feature-text">
                  No red badges. No anxiety counters. Just a clean, quiet view of what's next —
                  designed to make you feel in control, not overwhelmed.
                </p>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="lp4-stats-row">
            {STATS.map((s) => (
              <div key={s.value} className="lp4-stat">
                <div className="lp4-stat-value">{s.value}</div>
                <div className="lp4-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="lp1-footer-outer">
        <div className="lp1-footer-inner">
          <div className="lp1-stars">
            {[1, 2, 3, 4, 5].map((n) => (
              <img key={n} src="/lp4/star.svg" alt="★" className="lp1-star" />
            ))}
            <span className="lp1-trusted-label">Trusted by Average Indians</span>
          </div>
          <h2 className="lp1-footer-title">
            Remove the noise.<br />Focus on the signal.
          </h2>
          <p className="lp1-footer-subtitle">
            Download the app for a Life OS that will improve signal/noise.
          </p>
          <DownloadButton location="footer" />
          <p className="lp1-copyright">© 2026 Kosha. The operating system for modern life.</p>
        </div>
      </section>
    </div>
  );
}
