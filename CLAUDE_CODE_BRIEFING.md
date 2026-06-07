# NEUROFRACT — Project Briefing for Claude Code

## 1. WHAT IS NEUROFRACT

NeuroFract is "The Virtual Neuromodulation Clinic" — a device-agnostic digital platform for patients receiving neuromodulation therapy (DBS, VNS, TMS, SCS, RNS, tDCS). It provides 24/7 closed-loop monitoring between clinic appointments using clinically validated patient-reported outcome (PRO) instruments.

**The problem:** After neuromodulation surgery, patients enter a 6-month monitoring blind spot. Clinicians have zero data between appointments. 33% of patients silently discontinue treatment (Romoli 2018). The NHS spends £2B/year on epilepsy alone, with 60,000 seizure-related A&E visits/year.

**The solution:** Patients complete validated assessments from their phone. The platform scores responses, detects clinical thresholds, computes trends, and alerts clinicians before patients deteriorate. Starting with epilepsy as the beachhead, expanding to Parkinson's, chronic pain, and depression.

**Website:** neurofract.com (GitHub Pages: github.com/yassamadian/neurofract)
**Founder:** Yas Samadian — MSc Neuroscience (Distinction, KCL), BSc Nursing (First Class), 4 publications, tDCS/neurofeedback/TMS-EEG experience (Imperial), DBS/epilepsy surgery research (King's College Hospital)
**Clinical Advisor:** Dr Antonio Valentin — Consultant Clinical Neurophysiologist, KCH, has agreed to pilot NeuroFract with his patients
**Programme:** Accepted into King's MedTech Accelerator 2026/27 (July 2026 – January 2027)

---

## 2. THREE USER ROLES

The platform has three distinct user types with different access levels:

### Patient
- Creates an account, enters profile (name, device type, condition)
- Takes assessments (LAEP, SSQ, QOLIE-31)
- Sees results with gentle, non-clinical language ("Improving ↑", "Stable →")
- Views their own score history and trends
- Cannot see raw clinical thresholds, other patients' data, or clinical alerts

### Clinician
- Sees a list of their assigned patients
- Views each patient's assessment results with full clinical detail
- Sees pattern recognition alerts (LAEP trajectory, SSQ-LAEP divergence, cognitive decline, completion gaps, seizure clustering)
- Views clinically meaningful charts with threshold lines
- Gets suggested care plan prompts with evidence citations
- Exports CSV data for clinical notes
- Cannot see patients belonging to other clinicians

### Researcher
- Sees anonymised cohort-level data (study IDs only, no names/emails)
- Views aggregate statistics (mean scores, completion rates, risk stratification)
- Exports full anonymised datasets in CSV
- Has a complete data dictionary matching published scoring manuals
- Cannot see patient names, emails, or identifiable information
- Cannot write or edit any data

---

## 3. THREE VALIDATED INSTRUMENTS

### LAEP — Liverpool Adverse Events Profile
- **Source:** Baker GA et al. 1994, Epilepsia 35(Suppl 7):S80
- **Items:** 19 items covering medication side effects
- **Scale:** 4-point Likert (1=Never, 2=Rarely, 3=Sometimes, 4=Always)
- **Score range:** 19–76 (sum of all items)
- **Clinical thresholds:**
  - ≥36.5: predicts treatment discontinuation with 85% accuracy (Romoli et al. 2018, Epilepsy & Behavior)
  - ≥45: associated with suicidality risk (Kwon et al. 2019, Seizure)
  - ≥40: screens for major depressive disorder with 80% sensitivity (Kwon 2018)
- **Subscales:** Neurological (10 items), Psychiatric (4 items), Systemic (5 items)
- **19 items in order:**
  1. Unsteadiness
  2. Tiredness
  3. Restlessness
  4. Feelings of aggression
  5. Nervousness or agitation
  6. Headache
  7. Hair loss
  8. Problems with skin
  9. Double or blurred vision
  10. Upset stomach
  11. Difficulty concentrating
  12. Trouble with mouth or gums
  13. Shaky hands
  14. Weight gain
  15. Dizziness
  16. Sleepiness
  17. Depression
  18. Memory problems
  19. Disturbed sleep

### SSQ — Seizure Severity Questionnaire
- **Source:** Cramer JA et al. 2002, Epilepsy Research 48:187-197
- **Items:** 24 items across 3 sections
- **Scale:** 7-point (1=Not at all to 7=Worst possible)
- **Score:** Mean of all items (range 1.0–7.0)
- **MIC:** 0.48 points (Cramer 2014)
- **Sections:**
  - Section 1: Warning/Perception (8 items) — warnings, fear, physical sensations, visual disturbance, taste/smell, déjà vu, stomach sensation, ability to prepare
  - Section 2: Ictal/During (8 items) — loss of awareness, falling, injury, tongue biting, incontinence, convulsions, duration, severity
  - Section 3: Recovery (8 items) — confusion, headache, sleepiness, speech difficulty, muscle soreness, recovery time, embarrassment, impact on daily activities

### QOLIE-31 — Quality of Life in Epilepsy
- **Source:** Cramer JA et al. 1998, Epilepsia 39:81-88
- **Items:** 31 items across 7 subscales
- **Scale:** 5-point (varies by subscale; some reverse-scored)
- **Score:** Transformed to 0–100 (higher = better quality of life)
- **Licence:** Public domain (RAND Corporation)
- **Subscales and weights:**
  - Seizure Worry (5 items, weight 0.08)
  - Overall QOL (2 items, weight 0.14)
  - Emotional Wellbeing (5 items, weight 0.14)
  - Energy/Fatigue (4 items, weight 0.12)
  - Cognitive Function (6 items, weight 0.27) — HIGHEST weight
  - Medication Effects (3 items, weight 0.03)
  - Social Function (6 items, weight 0.17)
- **Global benchmark:** Mean 59.8 (SD 8.0) across 31 countries, 7,255 patients (Gao et al. 2016)

---

## 4. FIVE PATTERN RECOGNITION ALGORITHMS

These run on the clinician dashboard, analysing longitudinal patient data:

### Algorithm 1: LAEP Trajectory Analysis
- Linear regression on last 3-4 LAEP scores
- Calculates slope (points/week) and predicts when patient will cross 36.5 (dropout) and 45 (toxicity)
- Generates predictive alert weeks before threshold crossing
- A rising slope > 0.5 pts/week triggers a trajectory warning

### Algorithm 2: SSQ-LAEP Divergence Detection
- Monitors direction of SSQ (seizure severity) vs LAEP (side effects)
- SSQ going down (improving) while LAEP going up (worsening) = divergence
- Indicates treatment works for seizures but side effects may drive discontinuation
- Triggers alert for medication adjustment

### Algorithm 3: Cognitive Subscale Decline
- Tracks QOLIE-31 cognitive subscale (6 items, weight 27%) independently
- If cognitive subscale drops ≥10 points while global score stable (change <8) = isolated cognitive decline
- May indicate subclinical seizures, medication toxicity (topiramate/levetiracetam), or progressive pathology
- Flags for neuropsychology referral

### Algorithm 4: Completion Pattern Analysis
- Monitors weekly assessment completion
- Gap of 2+ consecutive missed weeks triggers non-completion alert
- Non-completion correlates with depression, deterioration, and treatment abandonment
- "The absence of data is itself a clinical signal"

### Algorithm 5: Seizure Clustering
- Analyses seizure diary for day-of-week and time-of-day patterns
- Any day >1.8× daily mean = cluster
- May indicate medication timing issues, sleep disruption, or catamenial patterns

**Implementation:** Simple statistics (linear regression, threshold detection, paired comparison) — NOT machine learning. Statistics are explainable to clinicians. ML comes later with 50+ patients.

---

## 5. CURRENT STATE OF THE PROJECT

### What exists and works:
- **neurofract.com** is live on GitHub Pages with a dark-themed landing page
- **assess.html** — patient-facing LAEP questionnaire (19 items, one question per screen, results with interpretation). Uses localStorage. Blue colour scheme. Has a "Home" link back to main site. The SSQ and QOLIE-31 cards are visible but show "Coming soon" alerts
- **platform.html** — demo platform with role selection (Patient/Clinician/Researcher), all three questionnaires (LAEP 19 items, SSQ 24 items, QOLIE-31 31 items), patient results, clinician dashboard with demo patient data and Chart.js visualisations, researcher view with anonymised data and CSV export. Uses localStorage. Demo only — not connected to any backend
- **analytics.html** — clinician-facing pattern recognition dashboard with all 5 algorithms, Chart.js charts, demo patient data. Standalone demo
- **neurofract-kma-pitch.pptx** — 11-slide pitch deck (cutting-edge tech design, indigo/emerald palette, abbreviation glossary on every slide)
- **NeuroFract-Development-Proposal.docx** — comprehensive proposal for KMA programme covering evidence base, instruments, data analysis, regulatory strategy, revenue model
- Various earlier prototypes (JSX components, evidence maps, market analysis) in outputs — these are superseded by the current HTML files

### What is set up but not connected:
- **Firebase project** created at console.firebase.google.com (project ID: neurofract-ef9e9, Spark/free plan)
- Firebase Authentication: NEEDS TO BE ENABLED (Email/Password)
- Firebase Firestore: NEEDS TO BE CREATED (europe-west2 London region, test mode)
- Firebase config keys: NOT YET OBTAINED

### What is NOT built yet:
- Real authentication (email/password login replacing role-card demo)
- Cloud database (Firestore replacing localStorage)
- Role-based security rules in Firestore
- SSQ and QOLIE-31 functioning inside assess.html (only LAEP works there)
- Real clinician dashboard reading real patient data from Firestore
- Real researcher dashboard with anonymised data from Firestore
- Pattern recognition algorithms running on real (not demo) data
- Automated alert generation system
- Seizure diary feature
- Care plan generation
- Patient-clinician assignment system
- Study/trial management for researchers
- Mobile-responsive testing across devices
- DTAC compliance checks

### Company status:
- NeuroFract Ltd: NOT YET REGISTERED on Companies House (identity verification in progress)
- Business bank account: NOT YET OPENED
- Email: needs yas@neurofract.com via Google Workspace
- Trademark: NOT YET FILED

---

## 6. FIREBASE DATABASE STRUCTURE (PLANNED)

```
users/{userId}
  email: string
  name: string
  role: "patient" | "clinician" | "researcher"
  clinicianId: string (for patients — which clinician they belong to)
  createdAt: timestamp

patients/{userId}
  name: string
  dateOfBirth: string
  device: "DBS" | "VNS" | "TMS" | "SCS" | "RNS" | "tDCS" | "Other"
  condition: "Epilepsy" | "Parkinsons" | "Chronic pain" | "Depression" | "Essential tremor" | "OCD" | "Other"
  implantDate: string
  clinicianId: string
  studyId: string (anonymised ID like "NF-001")
  consentGiven: boolean
  consentDate: timestamp

assessments/{autoId}
  patientId: string
  studyId: string
  type: "laep" | "ssq" | "qolie"
  date: timestamp
  score: number
  answers: array of numbers
  subscales: object (varies by instrument)
  flagged: boolean (true if score crosses clinical threshold)

seizures/{autoId}
  patientId: string
  studyId: string
  date: string
  time: "morning" | "afternoon" | "night"
  duration: string
  type: string
  trigger: string
  notes: string

alerts/{autoId}
  patientId: string
  clinicianId: string
  type: "laep_threshold" | "laep_trajectory" | "divergence" | "cognitive_decline" | "completion_gap" | "seizure_cluster"
  severity: "high" | "medium" | "low"
  message: string
  evidence: string
  suggestedAction: string
  date: timestamp
  acknowledged: boolean
```

### Firestore Security Rules (planned):
- Patients can only read/write their own data
- Clinicians can read their assigned patients' data, cannot write patient assessments
- Researchers can read anonymised data only (no names, emails, DOBs)
- Nobody can delete data (data integrity for research)

---

## 7. DESIGN PREFERENCES

- **Light mode only** — white/off-white backgrounds. Dark mode rejected.
- **Blue colour scheme** (#4A6FA5 primary, #37577F dark, #EBF0F7 light, #1A2B3C navy for text). Green was rejected.
- **Branding:** "NeuroFract" with capital N and F. "Neuro" in navy, "Fract" in blue.
- **Typography:** Lora serif for headings, DM Sans for body
- **Style:** Clean, clinical, minimal, trustworthy. Not AI-generated looking. Think: NHS Digital meets Stripe.
- **Patient UX:** One question per screen, large tap targets, calming interface, auto-advance after selection, designed for post-ictal cognition. No raw clinical thresholds shown to patients. Gentle language.
- **No footer bars** with name/affiliation on slides or pages
- **Abbreviation explanations** on relevant pages (LAEP, SSQ, QOLIE-31, DBS, VNS, etc.)
- **Mobile-first** — most patients will use their phones

---

## 8. KEY EVIDENCE BASE

| Paper | Key Finding | Use in NeuroFract |
|---|---|---|
| Vansant et al. 2024, Scientific Reports (Nature) | 63.3% daily compliance, 85.5% monthly completion in 67 DBS patients | Proves digital monitoring feasibility |
| Romoli et al. 2018, Epilepsy & Behavior | LAEP ≥36.5 predicts dropout (85% accuracy, 79% specificity) | Dropout risk alert threshold |
| Kwon et al. 2019, Seizure | LAEP ≥45 predicts suicidality | Toxicity alert threshold |
| Gotlieb et al. 2025, Epilepsia (ILAE) | No epilepsy app combines validated PROs + clinician dashboard + device-agnostic design | Gap NeuroFract fills |
| Baker et al. 1994, Epilepsia | LAEP development and validation | LAEP instrument |
| Cramer et al. 2002, Epilepsy Research | SSQ development and validation | SSQ instrument |
| Cramer et al. 1998, Epilepsia | QOLIE-31 development (RAND, public domain) | QOLIE-31 instrument |
| Shankar & Terry 2026, Epilepsia Open | UK epilepsy roadmap, 630K patients, £2B cost | UK market data |
| Gao et al. 2016, Epilepsy & Behavior | QOLIE-31 global mean 59.8 (7,255 patients) | Reference benchmark |
| Nair et al. 2020, Neurology | 9-year RNS data, progressive improvement | Validates longitudinal tracking |
| Ross et al. 2021, Frontiers in Digital Health | Digital health + neuromodulation vision | Supports platform concept |

---

## 9. PRIORITY TASKS FOR CLAUDE CODE

In this exact order:

### Immediate (this week):
1. **Set up Firebase properly** — enable Authentication (email/password), create Firestore database (europe-west2), get config keys
2. **Build the real platform** — replace localStorage with Firestore, add real email/password login, implement role-based access
3. **All three questionnaires working** with correct items, scoring, and results
4. **Patient data saves to Firestore** and persists across sessions/devices
5. **Clinician dashboard reads real patient data** from Firestore with charts

### Next (weeks 2-3):
6. Add seizure diary feature
7. Implement the 5 pattern recognition algorithms on real data
8. Add automated alert generation
9. Add care plan suggestions
10. Add CSV export for clinicians and researchers

### After pilot starts (month 2+):
11. Add Parkinson's module (MDS-UPDRS)
12. Add depression module (PHQ-9, GAD-7)
13. Add chronic pain module (ODI, NRS)
14. Stripe payment integration
15. Professional UI redesign

---

## 10. TECHNICAL ENVIRONMENT

- **Current hosting:** GitHub Pages (static HTML, free)
- **Target hosting:** Firebase Hosting (free tier, supports custom domain)
- **Database:** Firebase Firestore (planned, free tier)
- **Auth:** Firebase Authentication (planned, free tier)
- **Charts:** Chart.js 4.4.1 (CDN)
- **Fonts:** Google Fonts (Lora + DM Sans)
- **Framework:** Vanilla HTML/CSS/JavaScript (no React in production yet — earlier JSX prototypes exist but are not deployed)
- **Domain:** neurofract.com (GitHub Pages, needs DNS update for Firebase Hosting)
- **GitHub repo:** github.com/yassamadian/neurofract

---

## 11. GITHUB REPO STRUCTURE (current)

The repo likely contains:
- `index.html` — main landing page (dark theme, needs colour update)
- `assess.html` — patient assessment tool (LAEP only, blue theme)
- `platform.html` — three-role demo platform (all 3 tests, demo data)
- `analytics.html` — pattern recognition dashboard (demo data)
- Possibly other files from earlier iterations

The repo should be reorganised into a clean structure for Firebase deployment.

---

## 12. IMPORTANT CONSTRAINTS

- **Scientifically accurate:** Every questionnaire item must match the published instrument exactly. Every threshold must be traceable to a peer-reviewed paper. No custom or modified scoring.
- **Patients cannot edit past assessments** — data integrity for research
- **Every data point has a system-generated timestamp** — not user-entered
- **Consent must be recorded before data collection** — with timestamp
- **Anonymised study IDs assigned at enrolment, not at export**
- **No data is ever deleted** — withdrawn patients are marked, not removed
- **LAEP scored as sum of 19 items (19-76), SSQ as mean (1.0-7.0), QOLIE-31 transformed to 0-100 (higher=better)**

---

## 13. FOUNDER CONTEXT

Yas is a clinician-scientist building this as a solo founder. She is not a software engineer — she has built HTML prototypes but needs Claude Code to handle the Firebase integration, database architecture, and production-grade implementation. She is under time pressure with the KMA programme starting July 2026. The priority is a working product for the clinical pilot with Dr Valentin (5 patients, 8 weeks, KCH), not design perfection.
