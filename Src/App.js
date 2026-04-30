import React, { useState } from 'react';

const GOLD = '#C9A84C';
const DARK = '#0D0D0D';
const CARD = '#141414';
const BORDER = '#2a2a2a';

const styles = {
  page: { minHeight: '100vh', background: DARK, color: '#fff', fontFamily: "'Segoe UI', sans-serif", padding: '0 0 60px 0' },
  header: { borderBottom: `1px solid ${BORDER}`, padding: '24px 20px' },
  logo: { fontSize: 20, fontWeight: 700, color: GOLD, letterSpacing: 2, textTransform: 'uppercase' },
  tagline: { fontSize: 11, color: '#666', letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 },
  hero: { textAlign: 'center', padding: '48px 20px 32px' },
  heroTitle: { fontSize: 28, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 10 },
  heroAccent: { color: GOLD },
  heroSub: { fontSize: 14, color: '#888', maxWidth: 340, margin: '0 auto', lineHeight: 1.6 },
  divider: { width: 48, height: 2, background: GOLD, margin: '20px auto', borderRadius: 2 },
  section: { padding: '0 16px', maxWidth: 480, margin: '0 auto' },
  sectionLabel: { fontSize: 11, color: GOLD, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12, fontWeight: 600 },
  card: { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: '16px', marginBottom: 12 },
  cardTitle: { fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 4 },
  cardDesc: { fontSize: 13, color: '#888', lineHeight: 1.5 },
  badge: { display: 'inline-block', background: 'rgba(201,168,76,0.12)', color: GOLD, fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', padding: '3px 8px', borderRadius: 4, marginBottom: 8 },
  ndaBox: { background: 'rgba(201,168,76,0.06)', border: `1px solid rgba(201,168,76,0.2)`, borderRadius: 10, padding: '16px', marginBottom: 20 },
  ndaTitle: { fontSize: 13, fontWeight: 700, color: GOLD, marginBottom: 6, letterSpacing: 1, textTransform: 'uppercase' },
  ndaText: { fontSize: 12, color: '#888', lineHeight: 1.6 },
  input: { width: '100%', background: '#1a1a1a', border: `1px solid ${BORDER}`, borderRadius: 8, color: '#fff', fontSize: 14, padding: '12px 14px', marginBottom: 10, outline: 'none', boxSizing: 'border-box' },
  checkRow: { display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 16 },
  checkbox: { marginTop: 2, accentColor: GOLD, width: 16, height: 16, flexShrink: 0, cursor: 'pointer' },
  checkLabel: { fontSize: 12, color: '#888', lineHeight: 1.5, cursor: 'pointer' },
  btn: { width: '100%', background: GOLD, color: '#000', border: 'none', borderRadius: 8, padding: '14px', fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer' },
  btnDisabled: { background: '#2a2a2a', color: '#555', cursor: 'not-allowed' },
  successBox: { textAlign: 'center', padding: '48px 20px' },
  successIcon: { fontSize: 48, marginBottom: 16 },
  successTitle: { fontSize: 22, fontWeight: 700, color: GOLD, marginBottom: 8 },
  successSub: { fontSize: 13, color: '#888', lineHeight: 1.6 },
};

const services = [
  { badge: 'Strategy', title: 'Business Blueprint', desc: 'Full operational roadmap — systems, structure, and execution plan tailored to your vision.' },
  { badge: 'Brand', title: 'Identity & Positioning', desc: 'Log
