import React, { useState } from 'react';

const GOLD = '#C9A84C';
const DARK = '#0D0D0D';
const CARD = '#141414';
const BORDER = '#2a2a2a';

const styles = {
  page: {
    minHeight: '100vh',
    background: DARK,
    color: '#fff',
    fontFamily: "'Segoe UI', sans-serif",
    padding: '0 0 60px 0',
  },
  header: {
    borderBottom: `1px solid ${BORDER}`,
    padding: '24px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 20,
    fontWeight: 700,
    color: GOLD,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  tagline: {
    fontSize: 11,
    color: '#666',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginTop: 2,
  },
  hero: {
    textAlign: 'center',
    padding: '48px 20px 32px',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 700,
    color: '#fff',
    lineHeight: 1.2,
    marginBottom: 10,
  },
  heroAccent: { color: GOLD },
  heroSub: {
    fontSize: 14,
    color: '#888',
    maxWidth: 340,
    margin: '0 auto',
    lineHeight: 1.6,
  },
  divider: {
    width: 48,
    height: 2,
    background: GOLD,
    margin: '20px auto',
    borderRadius: 2,
  },
  section: { padding: '0 16px', maxWidth: 480, margin: '0 auto' },
  sectionLabel: {
    fontSize: 11,
    color: GOLD,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 12,
    fontWeight: 600,
  },
  card: {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    padding: '16px',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: '#fff',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 13,
    color: '#888',
    lineHeight: 1.5,
  },
  badge: {
    display: 'inline-block',
    background: 'rgba(201,168,76,0.12)',
    color: GOLD,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: 'uppercase',
    padding: '3px 8px',
    borderRadius: 4,
    marginBottom: 8,
  },
  ndaBox: {
    background: 'rgba(201,168,76,0.06)',
    border: `1px solid rgba(201,168,76,0.2)`,
    borderRadius: 10,
    padding: '16px',
    marginBottom: 20,
  },
  ndaTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: GOLD,
    marginBottom: 6,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  ndaText: {
    fontSize: 12,
    color: '#888',
    lineHeight: 1.6,
  },
  input: {
    width: '100%',
    background: '#1a1a1a',
    border: `1px solid ${BORDER}`,
    borderRadius: 8,
    color: '#fff',
    fontSize: 14,
    padding: '12px 14px',
    marginBottom: 10,
    outline: 'none',
    boxSizing: 'border-box',
  },
  checkRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 16,
  },
  checkbox: {
    marginTop: 2,
    accentColor: GOLD,
    width: 16,
    height: 16,
    flexShrink: 0,
    cursor: 'pointer',
  },
  checkLabel: {
    fontSize: 12,
    color: '#888',
    lineHeight: 1.5,
    cursor: 'pointer',
  },
  btn: {
    width: '100%',
    background: GOLD,
    color: '#000',
    border: 'none',
    borderRadius: 8,
    padding: '14px',
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  btnDisabled: {
    background: '#2a2a2a',
    color: '#555',
    cursor: 'not-allowed',
  },
  successBox: {
    textAlign: 'center',
    padding: '48px 20px',
  },
  successIcon: { fontSize: 48, marginBottom: 16 },
  successTitle: { fontSize: 22, fontWeight: 700, color: GOLD, marginBottom: 8 },
  successSub: { fontSize: 13, color: '#888', lineHeight: 1.6 },
};

const services = [
  {
    badge: 'Strategy',
    title: 'Business Blueprint',
    desc: 'Full operational roadmap — systems, structure, and execution plan tailored to your vision.',
  },
  {
    badge: 'Brand',
    title: 'Identity & Positioning',
    desc: 'Logo, color system, voice, and market positioning that commands premium authority.',
  },
  {
    badge: 'Tech',
    title: 'Digital Infrastructure',
    desc: 'Automation, CRM setup, and digital tools that run your business on autopilot.',
  },
  {
    badge: 'Growth',
    title: 'Revenue Architecture',
    desc: 'Offer structure, pricing strategy, and client acquisition systems built to scale.',
  },
];

export default function App() {
  const [step, setStep] = useState('nda'); // 'nda' | 'review' | 'done'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canSign = name.trim().length > 1 && email.includes('@') && agreed;

  const handleSign = () => {
    if (!canSign) return;
    setSubmitted(true);
    setTimeout(() => setStep('review'), 1200);
  };

  if (step === 'done') {
    return (
      <div style={styles.page}>
        <div style={styles.header}>
          <div>
            <div style={styles.logo}>JForge Industries</div>
            <div style={styles.tagline}>Blueprint Review</div>
          </div>
        </div>
        <div style={styles.successBox}>
          <div style={styles.successIcon}>✅</div>
          <div style={styles.successTitle}>Request Received</div>
          <div style={styles.successSub}>
            Thank you, {name.split(' ')[0]}. Jonathan will review your submission
            and be in touch within 24–48 hours to schedule your Blueprint session.
          </div>
          <div style={{ marginTop: 24, fontSize: 12, color: '#555' }}>
            JForgeIndustries@Gmail.com
          </div>
        </div>
      </div>
    );
  }

  if (step === 'review') {
    return (
      <div style={styles.page}>
        <div style={styles.header}>
          <div>
            <div style={styles.logo}>JForge Industries</div>
            <div style={styles.tagline}>Blueprint Review — Confidential</div>
          </div>
        </div>
        <div style={styles.hero}>
          <div style={styles.heroTitle}>
            Welcome, <span style={styles.heroAccent}>{name.split(' ')[0]}</span>
          </div>
          <div style={styles.divider} />
          <div style={styles.heroSub}>
            Your NDA is on file. Below is a summary of what JForge Industries delivers.
          </div>
        </div>
        <div style={styles.section}>
          <div style={styles.sectionLabel}>Core Deliverables</div>
          {services.map((s, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.badge}>{s.badge}</div>
              <div style={styles.cardTitle}>{s.title}</div>
              <div style={styles.cardDesc}>{s.desc}</div>
            </div>
          ))}
          <div style={{ marginTop: 24 }}>
            <div style={styles.sectionLabel}>Ready to Move Forward?</div>
            <button style={styles.btn} onClick={() => setStep('done')}>
              Request My Blueprint Session
            </button>
          </div>
        </div>
      </div>
    );
  }

  // NDA step
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <div style={styles.logo}>JForge Industries</div>
          <div style={styles.tagline}>Confidential — Blueprint Review</div>
        </div>
      </div>
      <div style={styles.hero}>
        <div style={styles.heroTitle}>
          You've Been <span style={styles.heroAccent}>Invited</span>
        </div>
        <div style={styles.divider} />
        <div style={styles.heroSub}>
          Before viewing confidential service details, please sign the Non-Disclosure Agreement below.
        </div>
      </div>
      <div style={styles.section}>
        <div style={styles.ndaBox}>
          <div style={styles.ndaTitle}>Non-Disclosure Agreement</div>
          <div style={styles.ndaText}>
            By signing below, you agree that all materials, strategies, pricing, and information
            shared by JForge Industries / Jonathan E. Stevens are strictly confidential and may
            not be shared, copied, or disclosed to any third party without written consent.
            This agreement is governed by the laws of the State of Georgia.
          </div>
        </div>
        <input
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <div style={styles.checkRow}>
          <input
            type="checkbox"
            style={styles.checkbox}
            id="agree"
            checked={agreed}
            onChange={e => setAgreed(e.target.checked)}
          />
          <label htmlFor="agree" style={styles.checkLabel}>
            I have read and agree to the Non-Disclosure Agreement. I understand this is a
            legally binding commitment governed by Georgia law.
          </label>
        </div>
        <button
          style={{ ...styles.btn, ...(canSign ? {} : styles.btnDisabled) }}
          onClick={handleSign}
          disabled={!canSign}
        >
          {submitted ? 'Signing...' : 'Sign & Enter Review'}
        </button>
        <div style={{ textAlign: 'center', marginTop: 16, fontSize: 11, color: '#444' }}>
          JForge Industries · Georgia, USA · JForgeIndustries@Gmail.com
        </div>
      </div>
    </div>
  );
}
