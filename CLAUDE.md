# CLAUDE.md — NeuroFract Project

## Quick Summary
NeuroFract is a virtual neuromodulation clinic — a web platform where patients take clinically validated assessments (LAEP, SSQ, QOLIE-31), clinicians view results with pattern recognition alerts, and researchers access anonymised cohort data. Firebase backend (Auth + Firestore). Starting with epilepsy, expanding to Parkinson's, pain, depression.

## Tech Stack
- Frontend: Vanilla HTML/CSS/JavaScript (no framework yet)
- Backend: Firebase (Authentication + Firestore + Hosting)
- Charts: Chart.js 4.4.1
- Fonts: Google Fonts (Lora + DM Sans)
- Current hosting: GitHub Pages → migrating to Firebase Hosting

## Firebase Project
- Project ID: neurofract-ef9e9
- Region: europe-west2 (London)
- Plan: Spark (free)
- Auth: Email/Password
- Database: Firestore

## Key Files
- `index.html` — main landing page
- `assess.html` — patient assessment tool (LAEP working, SSQ/QOLIE-31 coming soon cards)
- `platform.html` — three-role demo (Patient/Clinician/Researcher) with all 3 questionnaires
- `analytics.html` — pattern recognition dashboard (demo data)
- `CLAUDE_CODE_BRIEFING.md` — full project background, instruments, algorithms, database schema, priorities

## Design Rules
- Light mode only, blue colour scheme (#4A6FA5 primary)
- Branding: "NeuroFract" (capital N and F), "Neuro" navy, "Fract" blue
- Lora serif headings, DM Sans body
- Patient UX: one question per screen, gentle language, no raw thresholds
- Mobile-first
- Use hex colours in JavaScript (never CSS variables in JS-generated inline styles — this causes crashes)

## Scientific Constraints
- LAEP: 19 items, 4-point Likert, score 19-76, threshold 36.5 (Romoli 2018)
- SSQ: 24 items, 7-point scale, mean score 1.0-7.0 (Cramer 2002)
- QOLIE-31: 31 items, 7 subscales, score 0-100 higher=better (Cramer 1998, RAND public domain)
- Every threshold traceable to a peer-reviewed paper
- Patients cannot edit past assessments
- All timestamps system-generated
- No data deletion (mark as withdrawn only)

## Current Priority
1. Connect Firebase (Auth + Firestore) to replace localStorage
2. Real login with email/password
3. All 3 questionnaires working with cloud storage
4. Clinician dashboard reading real patient data
5. Deploy on Firebase Hosting

## Read CLAUDE_CODE_BRIEFING.md for full details
That file contains: complete instrument items, 5 pattern recognition algorithms, database schema, evidence base, design preferences, founder context, and the full development roadmap.
