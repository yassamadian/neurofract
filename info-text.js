// NeuroFract — Clinical info text for questionnaire items
// One sentence per item, grounded in the evidence base from CLAUDE_CODE_BRIEFING.md
// References: Baker 1994 (LAEP), Romoli 2018 (thresholds), Kwon 2018/2019 (LAEP psychiatric),
//             Cramer 2002 (SSQ), Cramer 1998 / Gao 2016 (QOLIE-31)

export const LAEP_INFO = [
  // 0 — Unsteadiness
  "Balance and coordination problems are common neurological side effects of anti-seizure medications and can significantly affect daily safety (Baker et al. 1994).",
  // 1 — Tiredness
  "Fatigue is one of the most frequently reported side effects of anti-seizure medications and strongly predicts treatment discontinuation (Romoli et al. 2018).",
  // 2 — Restlessness
  "Psychomotor agitation is a known adverse effect of several anti-seizure medications, including levetiracetam, and affects quality of life (Baker et al. 1994).",
  // 3 — Feelings of aggression
  "Aggressive behaviour is a recognised psychiatric side effect, particularly with levetiracetam, and contributes to elevated LAEP scores linked to suicidality risk (Kwon et al. 2019).",
  // 4 — Nervousness or agitation
  "Anxiety and agitation are psychiatric side effects tracked by the LAEP because they increase the risk of treatment non-adherence (Baker et al. 1994).",
  // 5 — Headache
  "Headache is a common systemic side effect of several anti-seizure medications and can be a sign of dose-related toxicity (Baker et al. 1994).",
  // 6 — Hair loss
  "Alopecia is a well-documented side effect of sodium valproate and can significantly affect psychological wellbeing and treatment acceptance (Baker et al. 1994).",
  // 7 — Problems with skin
  "Skin reactions, including rashes, are a clinically important side effect — some (e.g. with lamotrigine) can indicate serious hypersensitivity requiring urgent review (Baker et al. 1994).",
  // 8 — Double or blurred vision
  "Visual disturbance is a dose-related neurological side effect common with carbamazepine and oxcarbazepine, and may indicate the need for dose adjustment (Baker et al. 1994).",
  // 9 — Upset stomach
  "Gastrointestinal symptoms are systemic side effects that frequently affect medication adherence and are an important quality-of-life concern (Baker et al. 1994).",
  // 10 — Difficulty concentrating
  "Attention problems are a key cognitive side effect tracked by the LAEP, with strong links to reduced quality of life and academic or occupational impairment (Baker et al. 1994).",
  // 11 — Trouble with mouth or gums
  "Gingival hyperplasia is a recognised side effect of phenytoin, and tracking oral health problems helps detect this and related issues early (Baker et al. 1994).",
  // 12 — Shaky hands
  "Tremor is a dose-related neurological side effect of several medications including valproate and may affect daily activities like writing and using utensils (Baker et al. 1994).",
  // 13 — Weight gain
  "Weight gain is a systemic side effect most commonly associated with valproate and gabapentin, and affects adherence and cardiometabolic health (Baker et al. 1994).",
  // 14 — Dizziness
  "Dizziness is a common neurological side effect that contributes to falls risk and reduced confidence, particularly in older adults (Baker et al. 1994).",
  // 15 — Sleepiness
  "Daytime sleepiness affects driving, work, and social functioning; elevated sleepiness scores contribute to the LAEP threshold that predicts treatment dropout (Romoli et al. 2018).",
  // 16 — Depression
  "Depression is a psychiatric side effect monitored because an LAEP score ≥40 screens for major depressive disorder with 80% sensitivity (Kwon et al. 2018).",
  // 17 — Memory problems
  "Memory difficulties are among the most distressing cognitive side effects of anti-seizure medications and are strongly linked to reduced quality of life over time (Baker et al. 1994).",
  // 18 — Disturbed sleep
  "Sleep disruption is a systemic side effect that worsens seizure threshold, fatigue, and mood — tracking it helps identify patients at risk of a negative cycle (Baker et al. 1994)."
];

export const SSQ_INFO = [
  // Section 1: Warning & Perception (items 0–7)
  // 0 — Warning frequency
  "Auras and pre-seizure warnings affect how much preparation a patient can make and are important indicators of seizure predictability (Cramer et al. 2002).",
  // 1 — Fear during warning
  "The fear and anxiety associated with warnings significantly impairs quality of life independently of the seizures themselves (Cramer et al. 2002).",
  // 2 — Physical sensations during warning
  "The intensity of physical warning sensations helps characterise seizure type and informs clinical decision-making about treatment targets (Cramer et al. 2002).",
  // 3 — Visual disturbances
  "Visual aura characteristics can help localise seizure onset and are relevant to assessing the impact of neuromodulation on seizure networks (Cramer et al. 2002).",
  // 4 — Unusual tastes or smells
  "Olfactory and gustatory auras are hallmarks of temporal lobe involvement and can help map the seizure focus being targeted by neuromodulation (Cramer et al. 2002).",
  // 5 — Déjà vu
  "Déjà vu is a recognised feature of temporal lobe seizures and helps characterise the seizure semiology relevant to your treatment (Cramer et al. 2002).",
  // 6 — Stomach sensation
  "Epigastric aura (rising stomach sensation) is a key feature of mesial temporal lobe epilepsy and is clinically important for seizure characterisation (Cramer et al. 2002).",
  // 7 — Ability to prepare
  "A patient's ability to prepare for a seizure affects their safety and independence; this item measures the functional value of having a warning (Cramer et al. 2002).",

  // Section 2: During the seizure (items 8–15)
  // 8 — Loss of awareness
  "Loss of awareness is a key determinant of driving restrictions, occupational risk, and overall seizure severity as measured by the SSQ (Cramer et al. 2002).",
  // 9 — Falling
  "Falls during seizures are a major injury risk and are directly relevant to assessing how well neuromodulation is reducing ictal severity (Cramer et al. 2002).",
  // 10 — Injury
  "Seizure-related injuries affect independence and safety; tracking injury rate over time helps measure the real-world benefit of treatment (Cramer et al. 2002).",
  // 11 — Tongue biting
  "Tongue biting is a marker of convulsive seizure severity and is one of the ictal features tracked to measure treatment response (Cramer et al. 2002).",
  // 12 — Loss of bladder or bowel control
  "Incontinence during seizures has a major impact on dignity and social confidence; tracking it helps capture quality-of-life impacts not visible in seizure counts alone (Cramer et al. 2002).",
  // 13 — Severity of convulsions
  "The intensity of motor convulsions directly affects injury risk and is a core measure of ictal severity in the SSQ (Cramer et al. 2002).",
  // 14 — Duration of seizures
  "Seizure duration is a clinically critical variable — prolonged seizures carry risk of status epilepticus and indicate less effective seizure control (Cramer et al. 2002).",
  // 15 — Overall seizure severity
  "This global severity rating allows your clinician to track whether treatment is reducing the overall impact of seizures on your life (Cramer et al. 2002).",

  // Section 3: Recovery (items 16–23)
  // 16 — Post-ictal confusion
  "Post-ictal confusion affects how quickly patients can return to normal activities and is a key measure of recovery burden (Cramer et al. 2002).",
  // 17 — Post-ictal headache
  "Post-ictal headache is common and affects wellbeing and productivity after seizures; tracking it helps measure recovery quality (Cramer et al. 2002).",
  // 18 — Post-ictal sleepiness
  "Post-ictal fatigue can last hours to days and significantly disrupts daily functioning; it is one of the key recovery items in the SSQ (Cramer et al. 2002).",
  // 19 — Speech difficulty after seizure
  "Post-ictal dysphasia can indicate left hemisphere seizure involvement and affects communication and safety after a seizure (Cramer et al. 2002).",
  // 20 — Muscle soreness
  "Myalgia after convulsions indicates the physical intensity of the seizure and contributes to post-ictal disability (Cramer et al. 2002).",
  // 21 — Recovery time
  "The time taken to fully recover determines how much of daily life is disrupted by each seizure — a key measure of overall treatment burden (Cramer et al. 2002).",
  // 22 — Embarrassment in public
  "The social and emotional impact of visible seizures affects confidence and participation; tracking embarrassment helps capture the psychosocial burden of epilepsy (Cramer et al. 2002).",
  // 23 — Impact on daily activities
  "This item captures the overall functional burden of seizures on everyday life, linking seizure severity directly to quality of life (Cramer et al. 2002)."
];

export const QOLIE_INFO = [
  // Subscale 1: Seizure Worry (items 0–4)
  // 0 — Worry about another seizure
  "Seizure worry is a core dimension of epilepsy quality of life, independently predicting social withdrawal and reduced independence (Cramer et al. 1998).",
  // 1 — Worry about injury
  "Fear of injury shapes activity restriction and avoidance behaviour in epilepsy; tracking it helps clinicians address unwarranted or under-recognised safety concerns (Cramer et al. 1998).",
  // 2 — Avoiding activities due to seizure risk
  "Activity avoidance is a key measurable consequence of seizure worry and links directly to reduced participation and quality of life (Cramer et al. 1998).",
  // 3 — Seizure worry limiting activities
  "Understanding how much worry — not just seizures themselves — limits daily life is essential for holistic epilepsy management (Cramer et al. 1998).",
  // 4 — Fear about seizures
  "Seizure-related fear is a psychological burden that often exceeds the objective risk, and is responsive to psychological support and better seizure control (Cramer et al. 1998).",

  // Subscale 2: Overall QOL (items 5–6)
  // 5 — Overall quality of life rating
  "This global quality-of-life rating anchors the QOLIE-31; the international benchmark is 59.8 across 7,255 patients in 31 countries (Gao et al. 2016).",
  // 6 — Life satisfaction
  "Life satisfaction is a distinct psychological construct from symptom burden and captures the patient's broader wellbeing beyond seizure control (Cramer et al. 1998).",

  // Subscale 3: Emotional Wellbeing (items 7–11)
  // 7 — Nervousness or anxiety
  "Anxiety affects up to 50% of people with epilepsy and is a key emotional wellbeing item because it predicts treatment adherence and social functioning (Cramer et al. 1998).",
  // 8 — Calm and peaceful
  "Sense of calm is a positive emotional wellbeing indicator; its absence signals psychological distress beyond what seizure frequency alone captures (Cramer et al. 1998).",
  // 9 — Feeling low or downhearted
  "Depressive symptoms are the most common psychiatric comorbidity in epilepsy, affecting up to 30% of patients, and are a strong predictor of quality of life (Cramer et al. 1998).",
  // 10 — Being a happy person
  "Positive affect is a distinct component of emotional wellbeing and helps capture resilience and psychological resources in people with epilepsy (Cramer et al. 1998).",
  // 11 — Too low to be cheered up
  "This item screens for the more severe end of depressive symptoms; it is included because depression in epilepsy is often under-recognised and under-treated (Cramer et al. 1998).",

  // Subscale 4: Energy/Fatigue (items 12–15)
  // 12 — Energy level
  "Energy is one of the dimensions most sensitive to medication effects and seizure burden, and tracks independently from mood (Cramer et al. 1998).",
  // 13 — Worn out
  "Fatigue is one of the most common side effects of anti-seizure medications and a leading driver of treatment discontinuation (Romoli et al. 2018).",
  // 14 — Feeling tired
  "Tiredness impairs occupational performance, relationships, and safety (e.g. driving); it is tracked here as part of the energy-fatigue subscale (Cramer et al. 1998).",
  // 15 — Full of energy
  "Positive energy is the counterpart to fatigue; its presence or absence helps distinguish drug-related fatigue from general functional decline (Cramer et al. 1998).",

  // Subscale 5: Cognitive Function (items 16–21) — weight 0.27, highest in QOLIE-31
  // 16 — Memory problems
  "Cognitive function carries the highest subscale weight (27%) in QOLIE-31 because memory and cognition have the strongest link to quality of life in epilepsy (Cramer et al. 1998).",
  // 17 — Difficulty concentrating
  "Concentration difficulties affect work, driving, and daily tasks; they are a key cognitive item because they are sensitive to both seizures and medication effects (Cramer et al. 1998).",
  // 18 — Trouble finding words
  "Word-finding difficulties are a sensitive marker of left temporal lobe dysfunction and medication cognitive toxicity, particularly with topiramate (Cramer et al. 1998).",
  // 19 — Trouble with mental tasks
  "Difficulty with mental arithmetic and similar tasks reflects executive cognitive function, which is disproportionately affected in epilepsy (Cramer et al. 1998).",
  // 20 — Feeling mentally slow
  "Mental slowing is a subjective marker of cognitive burden and is among the side effects most frequently reported by patients as affecting quality of life (Cramer et al. 1998).",
  // 21 — Trouble thinking clearly
  "Clarity of thinking integrates multiple cognitive domains; a drop of ≥10 points in this subscale triggers a cognitive decline alert for your clinical team (Cramer et al. 1998).",

  // Subscale 6: Medication Effects (items 22–24)
  // 22 — Medication effect on memory
  "Memory effects of medication are tracked separately from seizure-related memory problems to help your clinician identify whether dose adjustment might help (Cramer et al. 1998).",
  // 23 — Medication effect on concentration
  "Medication-related attention problems are among the most common reasons patients consider stopping treatment; tracking them enables timely dose optimisation (Cramer et al. 1998).",
  // 24 — Medication effect on coordination
  "Physical coordination problems caused by medication — such as ataxia — affect safety and independence and are a key indicator of dose-related toxicity (Cramer et al. 1998).",

  // Subscale 7: Social Function (items 25–30)
  // 25 — Epilepsy limiting social activities
  "Social function carries a 17% weight in QOLIE-31 because social isolation is a major consequence of epilepsy that responds to both better seizure control and psychological support (Cramer et al. 1998).",
  // 26 — Epilepsy affecting travel or transport
  "Driving restrictions and transport difficulties are among the most life-altering consequences of epilepsy; this item captures functional independence (Cramer et al. 1998).",
  // 27 — Epilepsy causing relationship problems
  "Relationship strain is a significant but often hidden consequence of epilepsy; tracking it helps identify patients who would benefit from peer or psychological support (Cramer et al. 1998).",
  // 28 — Epilepsy preventing work or study
  "Occupational impact is a concrete measure of epilepsy severity with major economic and psychological consequences; improvement here reflects meaningful treatment benefit (Cramer et al. 1998).",
  // 29 — Feeling isolated
  "Social isolation in epilepsy is driven by stigma, activity restriction, and mood; it is an independent predictor of quality of life beyond seizure frequency (Cramer et al. 1998).",
  // 30 — Epilepsy affecting leisure or hobbies
  "Leisure activity is a quality-of-life indicator that captures how much epilepsy constrains the parts of life that bring fulfilment and meaning (Cramer et al. 1998)."
];
