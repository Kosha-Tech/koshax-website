import React from 'react';
import { useNavigate } from 'react-router-dom';
import { handleDownloadClick } from '../utils/downloadRedirect';
import './LandingPage1.css';
import './LandingPage3.css';

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
];

const TASKS = [
  {
    done: true,
    label: 'Pay electricity bill',
    badge: 'Finance', badgeBg: '#dcfce7', badgeColor: '#16a34a',
    assignee: 'Rahul',
  },
  {
    done: false,
    label: "Submit Aarav's field trip form",
    badge: 'School', badgeBg: '#dbeafe', badgeColor: '#2563eb',
    assignee: 'Priya',
  },
  {
    done: false,
    label: 'Book AC servicing — summer',
    badge: 'Home', badgeBg: '#ede9fe', badgeColor: '#7c3aed',
    assignee: 'Rahul',
  },
  {
    done: false,
    label: "Get Meera's uniform altered",
    badge: 'Urgent', badgeBg: '#fee2e2', badgeColor: '#dc2626',
    assignee: 'Priya',
  },
];

const SCHEDULE = [
  { time: '8:30 AM',  label: 'School drop-off — Aarav + Meera', bg: '#dbeafe', color: '#2563eb', border: '#2563eb' },
  { time: '11:00 AM', label: 'Grocery delivery (BigBasket)',      bg: '#dcfce7', color: '#16a34a', border: '#16a34a' },
  { time: '4:30 PM',  label: "Meera's dance class pickup",        bg: '#ede9fe', color: '#7c3aed', border: '#7c3aed' },
];

function DownloadButton() {
  const navigate = useNavigate();
  return (
    <button className="lp1-download-btn" onClick={() => handleDownloadClick(navigate)}>
      <span className="lp1-download-btn-label">Download App</span>
      <span className="lp1-download-btn-circle">
        <img src="/lp3/arrow-right.svg" alt="" />
      </span>
    </button>
  );
}

function SectionBadge() {
  return (
    <div className="lp1-section-badge">
      <img src="/lp3/section-icon.svg" alt="" />
      <span>HOW IT WORKS</span>
    </div>
  );
}

export default function LandingPage3() {
  return (
    <div className="lp1 lp3">
      {/* Nav */}
      <nav className="lp1-nav">
        <div className="lp1-logo">
          <img src="/lp3/logo-mark.svg" alt="" className="lp1-logo-mark" />
          <span className="lp1-logo-name">KOSHA</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="lp1-hero-outer">
        <div className="lp1-hero-card">
          <div className="lp1-hero-card-content">

            {/* Left — no eyebrow on LP3 */}
            <div className="lp1-hero-left">
              <h1 className="lp1-hero-title lp3-hero-title">
                Running a life is a job. Finally, there's an app for it.
              </h1>
              <p className="lp1-hero-subtitle">
                Bills, school forms, grocery runs, vet appointments, car servicing, birthday gifts,
                someone has to keep track of it all. Kosha is the admin tool you never knew you needed.
              </p>
              <div className="lp1-hero-cta">
                <DownloadButton />
              </div>
            </div>

            {/* Right — task manager panel */}
            <div className="lp3-hero-right">
              {/* Floating top-left: task completed notification */}
              <div className="lp3-notif-badge lp3-notif-top">
                <span className="lp3-notif-dot" style={{ background: '#b45309' }} />
                <div>
                  <div className="lp3-notif-title">Rahul completed a task</div>
                  <div className="lp3-notif-sub">Electricity bill — paid ✓</div>
                </div>
              </div>

              {/* Main panel */}
              <div className="lp3-panel">
                {/* Panel header */}
                <div className="lp3-panel-header">
                  <span className="lp3-panel-title">📋 Sharma Family HQ</span>
                  <div className="lp3-panel-tabs">
                    <span className="lp3-tab lp3-tab-active">Tasks</span>
                    <span className="lp3-tab lp3-tab-muted">Calendar</span>
                    <span className="lp3-tab lp3-tab-muted">Docs</span>
                  </div>
                </div>

                {/* Panel body */}
                <div className="lp3-panel-body">
                  {/* This Week */}
                  <div className="lp3-section">
                    <div className="lp3-section-title-row">
                      <span className="lp3-section-label">This Week</span>
                      <span className="lp3-count-badge">5</span>
                    </div>
                    <div className="lp3-task-list">
                      {TASKS.map((t, i) => (
                        <div key={i} className="lp3-task-row">
                          <div className={`lp3-checkbox ${t.done ? 'lp3-checkbox-done' : ''}`}>
                            {t.done && <span>✓</span>}
                          </div>
                          <span className={`lp3-task-label ${t.done ? 'lp3-task-done' : ''}`}>
                            {t.label}
                          </span>
                          <span
                            className="lp3-task-badge"
                            style={{ background: t.badgeBg, color: t.badgeColor }}
                          >
                            {t.badge}
                          </span>
                          <span className="lp3-task-assignee">{t.assignee}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Today's Schedule */}
                  <div className="lp3-section">
                    <div className="lp3-section-title-row">
                      <span className="lp3-section-label">Today's Schedule</span>
                    </div>
                    <div className="lp3-schedule-card">
                      {SCHEDULE.map((s, i) => (
                        <div
                          key={i}
                          className={`lp3-schedule-row ${i < SCHEDULE.length - 1 ? 'lp3-schedule-divider' : ''}`}
                        >
                          <span className="lp3-schedule-time">{s.time}</span>
                          <div
                            className="lp3-schedule-event"
                            style={{
                              background: s.bg,
                              color: s.color,
                              borderLeft: `3px solid ${s.border}`,
                            }}
                          >
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating bottom-right: completion % */}
              <div className="lp3-stat-badge">
                <div className="lp3-stat-pct">89%</div>
                <div className="lp3-stat-label">Tasks completed this week</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── From Life Chaos ── */}
      <section className="lp1-scatter-outer">
        <div className="lp1-scatter-inner">
          <div className="lp1-section-header">
            <SectionBadge />
            <h2 className="lp1-section-title">
              From life chaos to a system that runs itself.
            </h2>
          </div>

          <div className="lp1-chaos-wrapper">
            <div className="lp1-chaos-tags">
              {[...CHAOS_TAGS, ...CHAOS_TAGS].map((tag, i) => (
                <div
                  key={i}
                  className="lp1-chaos-tag"
                  style={{ background: tag.bg, color: tag.color }}
                >
                  <span>{tag.emoji}</span>
                  <span>{tag.text}</span>
                </div>
              ))}
            </div>

            {/* Phone mockup */}
            <div className="lp1-phone-frame">
              <div className="lp1-phone-body">
                <img src="/lp3/phone-bg.png" alt="" className="lp1-phone-wallpaper" />
                <div className="lp1-phone-date">Thu 14 May</div>
                <div className="lp1-phone-time">09:45</div>
                <div className="lp1-phone-notif">
                  <div className="lp1-notif-icon-wrap">
                    <img src="/lp3/app-icon.svg" alt="Kosha" className="lp1-notif-icon" />
                  </div>
                  <div className="lp1-notif-body">
                    <div className="lp1-notif-title">Aarav's vaccination is due Thursday</div>
                    <div className="lp1-notif-sub">
                      Dr. Mehra, 4:30 PM — slot auto-held from calendar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Everything a life admin does ── */}
      <section className="lp1-features-outer">
        <div className="lp1-features-inner">
          <div className="lp1-section-header">
            <SectionBadge />
            <h2 className="lp1-section-title">
              Everything a life admin does
              <br />
              now in one app.
            </h2>
          </div>

          <div className="lp1-feature-cards">
            <div className="lp1-feature-card">
              <div className="lp1-feature-icon">📋</div>
              <div>
                <h3 className="lp1-feature-title">Task Board</h3>
                <p className="lp1-feature-text">
                  Create tasks, set deadlines, delegate to family members, track completion. No more
                  "I thought you were doing it" moments.
                </p>
              </div>
            </div>
            <div className="lp1-feature-card">
              <div className="lp1-feature-icon">📅</div>
              <div>
                <h3 className="lp1-feature-title">Unified Calendar</h3>
                <p className="lp1-feature-text">
                  One view of everything — school events, doctor visits, bill due dates, service
                  appointments. Conflicts highlighted automatically.
                </p>
              </div>
            </div>
            <div className="lp1-feature-card">
              <div className="lp1-feature-icon">📎</div>
              <div>
                <h3 className="lp1-feature-title">Document Hub</h3>
                <p className="lp1-feature-text">
                  Admission letters, insurance papers, warranties, recipes — all filed, tagged, and
                  instantly searchable whenever you need them.
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
              <img key={n} src="/lp3/star.svg" alt="★" className="lp1-star" />
            ))}
            <span className="lp1-trusted-label">Trusted by 2,500+ teams</span>
          </div>
          <h2 className="lp1-footer-title">
            You deserve an admin that never drops the ball
          </h2>
          <p className="lp1-footer-subtitle">
            Join the waitlist. Stop running your life from sticky notes and WhatsApp groups.
          </p>
          <DownloadButton />
          <p className="lp1-copyright">© 2026 Kosha. The operating system for modern life.</p>
        </div>
      </section>
    </div>
  );
}
