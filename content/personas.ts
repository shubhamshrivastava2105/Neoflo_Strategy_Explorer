// Drop into: content/personas.ts
// Target persona analysis + geography targeting reasoning.
// Answers: Who do we sell to? Why this geography and not others?

export type BuyerPersona = {
  role: string;
  level: string;
  whatTheyOwn: string;
  dailyPain: string;
  motivations: string[];
  decisionAuthority: string;
  blockers: string[];
  whatTheyAskFirst: string[];
  ourTalkTrack: string;
  classification: 'Primary buyer' | 'Champion' | 'Economic buyer' | 'Veto authority' | 'Influencer';
};

export type GeographyDecision = {
  geography: string;
  decision: 'TARGET — primary' | 'TARGET — secondary' | 'OPPORTUNISTIC' | 'DO NOT TARGET' | 'DO NOT TARGET YET';
  marketSize: string;
  buyerProfile: string;
  whyOrWhyNot: string[];
  competitiveDynamics: string;
  proofPoints: string[];
  resourceCommitment: string;
};

export type PersonasData = {
  intro: string;
  buyerPersonas: BuyerPersona[];
  buyingCommittee: string;
  geographyDecisions: GeographyDecision[];
  recommendation: {
    headline: string;
    twelveMonthFocus: string;
    twelveTo24Months: string;
    avoidThesePitfalls: string[];
  };
};

export const personasData: PersonasData = {
  intro: `Two questions our memo never answered cleanly: **who exactly is the buyer**, and **why do we target the geographies we do — with what reasoning for each "no"?** This section answers both, grounded in customer evidence v2 (Spectrum, Hitachi, Apparel, JLand, Agro, Welspun, Coca-Cola, Flipkart, Boomerang, Zalora) plus market structure analysis.`,

  buyerPersonas: [
    {
      role: 'Mid-market Controller / VP Finance',
      level: 'Director / VP — reports to CFO',
      whatTheyOwn: 'Daily ownership of close, AP, AR, reconciliations, financial reporting. The person who feels every day of close compression and every hour of AP exception handling.',
      dailyPain: 'Close takes 8–15 days, 60–70% of team time is manual chasing/coordination, monthly fire-drill on board pack, anxiety that the numbers might not tie. AR sits on monthly Excel reports; CFO asks "what\'s our cash position?" mid-month and the answer is "let me get back to you in a day."',
      motivations: [
        'Close compression — every day saved is a personal-credibility win',
        'Audit-clean books — controller career risk lives in audit findings',
        'Visible CFO impact — board-pack quality is their performance review',
        'Team productivity — losing senior accountants because of tedious work',
        'Multi-entity / multi-jurisdiction complexity (SEA reality) — currently held together with Excel and good will',
      ],
      decisionAuthority: 'Discretionary spend up to ~$100K. Above that requires CFO sign-off but they are the one defining the ask.',
      blockers: [
        'Burned-once skepticism — past vendor oversold and underdelivered (Spectrum explicit pattern)',
        'IT veto — controller can\'t approve anything that requires IT capacity if IT is constrained (Spectrum, Welspun)',
        'Bandwidth — they\'re drowning in ops; finding 6 weeks for evaluation is real friction',
      ],
      whatTheyAskFirst: [
        '"Show me your reference customer that looks like us"',
        '"How long is implementation in real weeks, not your marketing weeks?"',
        '"Will my team actually adopt this or push back?"',
        '"What\'s your support model when something breaks during close?"',
      ],
      ourTalkTrack: `Lead with the Zalora story for SEA, Spectrum (when closed) for US enterprise. Concrete time-to-live (target 4–6 weeks for P2P wedge, 8–12 weeks for platform). Quote Hitachi/Spectrum directly: "AP+AR+close in one platform, at one-tenth HighRadius cost." Avoid product-feature monologue; talk in terms of close-cycle days and AP-team hours saved.`,
      classification: 'Primary buyer',
    },
    {
      role: 'Sr Director AP / Sr Director AR',
      level: 'Sr Director — reports to Controller or VP Finance',
      whatTheyOwn: 'AP team or AR team operations; day-to-day workflow execution; team productivity metrics.',
      dailyPain: '60–70% of their team\'s week is manual chasing — invoices for AP, dunning for AR. Constant fire-drill on exceptions, cash-app mismatches, vendor "where\'s my payment" inquiries, customer disputes that age in email threads.',
      motivations: [
        'Team capacity — they cannot hire fast enough; automation is survival',
        'Quarterly metrics — touch ratio (AP), DSO (AR), unallocated cash (cash app)',
        'Career upside if they own a successful automation rollout',
        'Vendor / customer relationship quality',
      ],
      decisionAuthority: 'Champions internally; rarely the economic buyer. Significant influence on Controller / CFO decision.',
      blockers: [
        'Skepticism that "automation" actually delivers (burned by past tools)',
        'Workflow disruption fear — change-management anxiety',
        'Politics with adjacent teams (procurement, sales) over workflow boundaries',
      ],
      whatTheyAskFirst: [
        '"What does my team\'s day look like 90 days after go-live?"',
        '"Will I lose senior accountants because they\'re bored, or keep them because the work is finally interesting?"',
        '"What does the exception queue UX look like — show me with my own data?"',
      ],
      ourTalkTrack: `Show them the day-in-the-life delta — before vs after. Demo with their own invoice/AR data shape, not generic examples. Quote analogous customer (e.g., Zalora\'s AP lead) on what changed. Make them the hero of the rollout — they bring it in, controller signs off, CFO gets the credit, and they earn the next promotion.`,
      classification: 'Champion',
    },
    {
      role: 'CFO / Group CFO',
      level: 'C-suite — reports to CEO',
      whatTheyOwn: 'Cash position, financial reporting accuracy, audit relationship, finance-team strategy and spend.',
      dailyPain: 'No real-time view of cash. Board asks unanswerable mid-month questions. Close is an 8–15 day event that consumes the team. Audit findings every year because controls aren\'t airtight. Constant pressure to do more with less headcount.',
      motivations: [
        'Cash visibility (board-level)',
        'Audit-clean financials',
        'Close compression as a board-level metric',
        'Productive finance team that can scale with revenue',
        'Strategic CFO credibility — moving from "back office" to "co-pilot"',
      ],
      decisionAuthority: 'Economic buyer for any deal >$100K ARR. Final approval on multi-year platform contracts.',
      blockers: [
        'Risk-aversion — CFOs are professionally rewarded for not making mistakes',
        'Trust in references — peer CFO testimonials carry far more weight than vendor demos',
        'CapEx vs OpEx framing — multi-year subscription needs CapEx-style approval in some companies',
      ],
      whatTheyAskFirst: [
        '"Which CFO at a comparable company will take my call?"',
        '"What\'s the total cost over 3 years, including services and integration?"',
        '"What\'s the rip-out cost if this doesn\'t work?"',
        '"How does this affect my audit?"',
      ],
      ourTalkTrack: `Get on the phone with a peer CFO at Zalora. Quantify ROI — close days saved × cost-of-finance-team-time, DPO/DSO impact × cost-of-capital. Show audit-trail richness as the audit-prep gift. Tie to the board-level metrics they\'re measured on.`,
      classification: 'Economic buyer',
    },
    {
      role: 'CIO / VP IT',
      level: 'C-suite or one-down — reports to CEO or COO',
      whatTheyOwn: 'IT systems, integrations, security posture, data governance.',
      dailyPain: 'Maintaining ERP integrations, fielding requests for new SaaS tools, security/compliance overhead, ERP migration project that\'s been running 3+ years (Spectrum on Year 5 of S/4HANA).',
      motivations: [
        'Reduce migration burden, not add to it',
        'Security and compliance posture',
        'Vendor consolidation where possible',
        'Predictable, supported integrations',
      ],
      decisionAuthority: 'Veto authority on technical fit, security, integration. Almost never the economic buyer for finance tools, but can kill any deal.',
      blockers: [
        'Past vendors who oversold and underdelivered',
        'Integration scope creep that pulls IT capacity from primary projects',
        'Security questionnaire that takes weeks to complete',
      ],
      whatTheyAskFirst: [
        '"What\'s the integration architecture with our SAP / Oracle / NetSuite?"',
        '"SOC 2? ISO 27001? PDPA / GDPR / DPDP compliance?"',
        '"What happens to the integration when our ERP upgrades?"',
        '"Can my team self-serve the day-2 ops, or is this an ongoing dependency?"',
      ],
      ourTalkTrack: `Pre-built reference architectures for SAP S/4 + Oracle Fusion + NetSuite + Dynamics. Compliance pack ready Day 0 of evaluation (SOC 2, ISO 27001, PDPA, regional). Position as "we sit alongside your ERP via API, no migration risk." Get IT on the call early — late-stage IT objections kill deals.`,
      classification: 'Veto authority',
    },
    {
      role: 'Procurement Director / VP Procurement',
      level: 'Director / VP — reports to COO or CFO',
      whatTheyOwn: 'Vendor relationships, contracts, sourcing, spend management.',
      dailyPain: 'Maverick spend (15–25% of mid-market spend) running unmanaged. Manual savings tracking. Vendor portal fragmentation. PR-PO discipline breaking down operationally.',
      motivations: [
        'Spend visibility across categories',
        'Savings capture (negotiated rates actually applied)',
        'Vendor consolidation',
        'Compliance with procurement policy',
      ],
      decisionAuthority: 'Champion or co-buyer for procurement modules; rarely the lead on AP automation alone.',
      blockers: [
        'Existing tools (Coupa, Ariba) at enterprises — switching cost',
        'Maverick spend incentive misalignment — ops teams who benefit don\'t want controls',
      ],
      whatTheyAskFirst: [
        '"How does this consolidate our PR/PO workflow with AP processing?"',
        '"Spend analytics — how granular?"',
        '"How does this work with our existing supplier portals?"',
      ],
      ourTalkTrack: `For procurement-led deals, lead with PR/PO + spend analytics + vendor self-service as the bundle. AP automation is the back-end of their procurement story. Frame as "what Coupa charges enterprise pricing for, at mid-market price."`,
      classification: 'Influencer',
    },
    {
      role: 'Chief Accounting Officer (CAO)',
      level: 'C-suite (typically only at $1B+ companies / public or pre-IPO) — reports to CFO. Sits between VP Controller and CFO.',
      whatTheyOwn: 'Accounting policy, technical accounting (revenue recognition, lease accounting, business combinations), SOX 404 controls, external auditor relationship, statutory and SEC / regional reporting, group-level consolidation. The signing officer on accounting representations in the 10-K / equivalents.',
      dailyPain: 'Audit findings every cycle on AP cut-off, accruals, and intercompany eliminations. Restatement risk lives in the gap between subledgers and the GL. SOX walkthroughs require evidence the team manually pulls from 4–6 systems each quarter. Material-weakness exposure when close stretches and post-close adjustments accumulate.',
      motivations: [
        'Audit-clean, restatement-free books — career risk lives here',
        'SOX evidence pulled automatically rather than manually each quarter',
        'Sub-process auditability — every workflow step has an immutable evidence trail',
        'Consistent accounting policy applied across entities (especially after acquisitions)',
        'Close compression without sacrificing controls',
      ],
      decisionAuthority: 'Strong influence on platform decisions impacting controls and reporting. Often the technical "buy or not" voice for tools that hit GL, accruals, or consolidation. Economic buyer above ~$200K when CFO defers technical-accounting decisions.',
      blockers: [
        'Auditor relationship — anything that changes how transactions hit the GL needs auditor sign-off',
        'Migration risk during ERP upgrades or restatements',
        'Lacking a SOX-grade evidence bundle from the vendor on Day 1 of evaluation',
      ],
      whatTheyAskFirst: [
        '"What does your audit-trail evidence pack look like for SOX walkthroughs?"',
        '"How do you handle period-end accrual cut-off automatically?"',
        '"Show me a journal-entry trail — every JE traceable to the source document and approval."',
        '"What happens to the audit trail when our ERP upgrades?"',
        '"What\'s the technical-accounting impact for revenue recognition / lease / intercompany?"',
      ],
      ourTalkTrack: `Lead with the cross-process audit trail — one immutable evidence chain from PO → invoice → approval → payment → JE → reconciliation, across AP / AR / close. SOX-pack as an out-of-the-box artifact, not a quarter-end project. Position as "the only mid-market platform that gives a CAO Big-4-grade evidence without Big-4 implementation cost." Reference the upper-mid SAP-shop accounts (Spectrum Brands segment) where the CAO is the controls owner.`,
      classification: 'Veto authority',
    },
    {
      role: 'Accounting Manager / Sr Accounting Manager',
      level: 'Manager / Sr Manager — reports to Controller (or VP Finance in flatter orgs). Typically supervises 3–10 staff and senior accountants.',
      whatTheyOwn: 'Day-to-day close execution, ownership of specific subledgers (AP, AR, fixed assets, prepaids, accruals, intercompany), monthly reconciliations, JE preparation and review, and direct supervision of the team that does the work. Their calendar IS the close calendar.',
      dailyPain: 'Lives inside the close every month — 8–15 days of fire-drill, recs that don\'t tie, AP cut-off questions at 11 PM, intercompany mismatches that take days to chase. Owns the narrative the Controller carries to the CFO; if it\'s late, it\'s their week. Spends 50–60% of time on rework and chasing instead of analysis.',
      motivations: [
        'Close calendar that holds — predictability is psychological survival',
        'Fewer reconciling items each cycle — quality is a personal scorecard',
        'Career path to Assistant Controller / Controller',
        'Senior accountants who actually grow rather than burn out on tedium',
        'Controls that pass audit walkthroughs without weekend prep',
      ],
      decisionAuthority: 'Champion in evaluation. Their adoption signal is the difference between rollout success and shelfware. Rarely the economic buyer; powerful day-1 user influence; can effectively veto by under-adopting.',
      blockers: [
        'Change-management fatigue — they\'ve been through 1–2 failed automations',
        'Tool-on-top-of-tool concern — they don\'t want another login; they want fewer',
        'Worry about losing reportability or familiar workflow patterns the team relies on',
      ],
      whatTheyAskFirst: [
        '"Walk me through close day 3 with this product — what\'s different from today?"',
        '"What goes wrong, and who do I call when it does — during close, at 9 PM?"',
        '"Will this generate the JEs I need, or do I still build them in Excel and post manually?"',
        '"Recs — how does the platform handle the messy ones (multi-currency, partial payments, deductions)?"',
        '"What happens to my staff accountants? Am I going to lose two of them to boredom or save two of them from burnout?"',
      ],
      ourTalkTrack: `Day-3-of-close demo using their actual reconciliation and JE shape — not a generic flow. Show the exception queues and the audit drill-down. Frame the team impact concretely: senior accountants stop doing copy-paste from email and start doing analysis. Tie it to their own progression: "This is the rollout that gets you promoted to Assistant Controller because the close calendar finally holds." For SEA mid-market deals where the org is smaller, the Accounting Manager often functions as both champion and primary day-1 user — invest demo time accordingly.`,
      classification: 'Champion',
    },
    {
      role: 'Shared Services / GBS Director',
      level: 'Director / Sr Director / VP — reports to CFO, COO, or Group Controller depending on org. Common at multi-entity conglomerates (Apparel Group, Welspun, Hitachi Vantara pattern).',
      whatTheyOwn: 'Centralized AP, AR, recs, master-data management, and sometimes payroll across all entities. Runs a captive (or BPO-supported) center of 20–200 finance ops staff. Owns SLAs to entity controllers — e.g., "invoice posted within 24 hours of approval, 98% on-time, under $X cost-per-transaction."',
      dailyPain: 'Wildly different invoice formats, ERP instances, and approval workflows across entities. Adoption inconsistency — entity A is on the global platform, entity B insists on its own. Volume scales linearly with headcount because today\'s tools don\'t generalize. Each new entity acquisition adds 3–6 months of integration work.',
      motivations: [
        'Cost-per-transaction reduction (the headline metric they\'re measured on)',
        'Standardization across entities — one workflow, many entities, one master-data set',
        'Headcount scaling sub-linearly with volume',
        'Visible SLA performance to entity controllers (their internal customers)',
        'Onboarding new entities in weeks, not quarters — acquisition integration speed',
      ],
      decisionAuthority: 'Primary buyer for multi-entity / GBS-led deals. Common at Indian and SEA conglomerates with regional ops (Apparel Group is canonical). Often holds the consolidated budget for the AP+AR platform across all entities.',
      blockers: [
        'Entity-controller resistance to standardization (political — local CFOs want their own tools)',
        'Multi-ERP reality (one entity on SAP, another on NetSuite, another on Tally)',
        'Country-specific regulatory pockets (GST, e-invoicing, withholding tax) the platform may not cover',
        'Past failed standardization attempts — burned-once pattern is strong here',
      ],
      whatTheyAskFirst: [
        '"Show me a multi-ERP, multi-entity reference customer — concretely, with the entity count and ERP mix."',
        '"Cost per transaction at our volume — and how does it change as we double?"',
        '"How long to onboard the next entity after the first one is live?"',
        '"Does your master-data engine handle merges and dedupe across entities, or is that our problem?"',
        '"Country regulatory: which mandates do you support natively, and what\'s the roadmap by jurisdiction?"',
      ],
      ourTalkTrack: `Lead with the unified-master-data + multi-entity workflow story — exactly where Peakflo and Stampli weaken. Quote per-transaction economics at their scale and project the curve as they consolidate entities. Reference the SEA multi-entity pattern (Zalora live, Apparel Group active). Make e-invoicing native (MyInvois, InvoiceNow, e-Faktur) part of the pitch — one less compliance project they have to run themselves. For Indian-HQ conglomerates with SEA ops, frame the deployment as SEA-platform-with-Indian-buying-process — matches the geography secondary-target playbook.`,
      classification: 'Primary buyer',
    },
    {
      role: 'Treasurer / Director of Treasury',
      level: 'Director / VP — reports to CFO. Smaller orgs may merge Treasury into the Controller role.',
      whatTheyOwn: 'Cash position (real-time view), FX exposure, bank relationships, debt and hedging, payment-file release, working-capital optimization (DPO + DSO).',
      dailyPain: 'Cash position is reconstructed each morning from 6–12 bank portals + ERP balances + AP run-list + AR collections. FX exposure misjudged because invoice-currency timing is opaque. Payment runs depend on AP closing on time; AR cash-app accuracy drives forecast quality. They don\'t own AP or AR but they\'re downstream of every accuracy gap in both.',
      motivations: [
        'Real-time, single-pane cash position',
        'Reduced cost of capital — DPO extension on AP, DSO compression on AR',
        'Lower idle cash because the forecast is reliable',
        'Fraud-loss avoidance on outbound payments (vendor-master fraud is the rising attack vector)',
        'FX hedge accuracy — fewer surprise impacts to gross margin',
      ],
      decisionAuthority: 'Influencer. Co-buyer when AP automation includes payment-file orchestration or when AR cash-app drives DSO. Veto on payment-control posture (dual-control, segregation of duties).',
      blockers: [
        'Bank-connectivity changes — anything touching ACH / SWIFT / faster-payment rails touches their controls',
        'Payment-fraud paranoia (justified)',
        'Existing TMS (Kyriba, GTreasury) territoriality if the company has one already',
      ],
      whatTheyAskFirst: [
        '"Cash forecast accuracy at +/- 7 days — what\'s your delta at reference customers?"',
        '"How do you handle dual-control on payment release, and segregation between approver and releaser?"',
        '"Vendor-master changes — how do you detect a fraudulent bank-detail update?"',
        '"DSO and DPO movement at your reference customers — show me the curve."',
        '"Bank connectivity — what banks, what protocols, who owns the file format if it changes?"',
      ],
      ourTalkTrack: `Frame Neoflo as the cash-visibility layer their existing TMS lacks at the transaction level. Quantify DSO compression from auto-cash-app + DPO extension from disciplined approval routing. Lean hard on payment-control posture (dual control, vendor-master change detection, ACH / local-rail support). Pull peer Treasurer / VP Finance reference where available. Don\'t pitch as a TMS replacement — that gets the deal killed; pitch as the FinOps layer that feeds their TMS cleaner data.`,
      classification: 'Influencer',
    },
    {
      role: 'Tax Director / Indirect Tax Manager',
      level: 'Director — reports to CFO or CAO depending on org structure. Often dotted-line to Group Tax at multinationals.',
      whatTheyOwn: 'Direct tax (income / corporate), indirect tax (VAT, GST, sales / use tax, withholding), e-invoicing mandate compliance, transfer-pricing documentation, tax provision and disclosures.',
      dailyPain: 'Indirect-tax filings depend on AP / AR data accuracy down to the line item. E-invoicing mandates (MyInvois, FATOORAH, e-Faktur, GST IRN, PEPPOL / InvoiceNow) arrive with hard deadlines and patchwork ERP support. Manual reconciliation between ERP, e-invoicing platform, and tax-authority portals consumes 30–60% of the team. Penalties for late or rejected filings are personal.',
      motivations: [
        'Mandate compliance with zero rejected filings',
        'Audit-defensibility per filing — the data trail back to the source invoice',
        'Reduced manual prep time',
        'Country-by-country localization without separate point tools per jurisdiction',
        'Real-time matching of input-tax credits (especially GST / VAT)',
      ],
      decisionAuthority: 'Primary or co-buyer for the e-invoicing-tailwind segment. Strong influence on AP platforms that flow into tax filings. Holds budget for compliance tooling that often sits adjacent to the FinOps stack.',
      blockers: [
        'Existing point compliance vendors (ClearTax, Sovos, Avalara) with embedded contracts',
        'Country-specific mandate complexity that vendors over-promise on',
        'Tax-authority API instability (especially in SEA) that punishes early adopters',
      ],
      whatTheyAskFirst: [
        '"Which mandates do you support natively today, and what\'s your roadmap by country and date?"',
        '"Do you produce filing-grade outputs, or just data we re-shape into our compliance tool?"',
        '"Walk me through the rejection-handling flow when MyInvois rejects an invoice."',
        '"Tax-authority API outages — how do you handle queued submissions and retries?"',
        '"Audit-trail evidence per filing — show me one full chain from invoice to acknowledgement."',
      ],
      ourTalkTrack: `E-invoicing native is one of our biggest differentiators in SEA — MyInvois, InvoiceNow, e-Faktur. Frame as "compliance is a side-effect of the workflow, not a separate project." Speak to country-by-country roadmap honestly (don\'t over-promise GCC / EU coverage). Position vs ClearTax / Sovos as "they bolt onto your ERP; we already include it." Demo the rejection-handling flow — that\'s where buyers see the depth and where competitors fall short. For the e-invoicing-mandate-driven segment, the Tax Director can be the first conversation, not a late-stage stakeholder.`,
      classification: 'Influencer',
    },
  ],

  buyingCommittee: `**The realistic SEA mid-market buying committee** is 3–5 people: **Controller (primary buyer / champion)**, **CFO (economic buyer above $100K)**, **Sr Director AP or AR + Accounting Manager (champions / day-1 users)**, **CIO / IT** (veto authority on integration), and sometimes **Procurement Director** (if PR/PO is in scope). Average deal cycle 4–9 months. NDA → demo cycle is the make-or-break window per Pattern 2 — compression to 7 days is a 90-day priority.

**Variants by segment:**
- **Multi-entity SEA conglomerates** (Apparel Group / Welspun pattern) — the **Shared Services / GBS Director** often replaces the entity Controller as primary buyer; the Group Controller signs off; entity-level controllers become influencers.
- **Upper-mid US enterprise** (Spectrum-class, $1B+ SAP shops) — add the **Chief Accounting Officer** as the controls-and-audit gate; close the deal only after CAO sign-off on the SOX-evidence pack and the auditor relationship.
- **E-invoicing-mandate-driven deals** (MyInvois, FATOORAH, e-Faktur urgency) — the **Tax Director** is a co-buyer, often the first conversation rather than a late-stage stakeholder. Treasury comes in late on payment-control posture and DSO/DPO impact.`,

  geographyDecisions: [
    {
      geography: 'Southeast Asia mid-market (Singapore, Indonesia, Malaysia, Vietnam, Thailand, Philippines)',
      decision: 'TARGET — primary',
      marketSize: 'Smaller in absolute dollars than US ($500M–$1.5B addressable for our segment), but right-to-win is dramatically higher.',
      buyerProfile: 'CFO / Controller at $50M–$500M revenue companies, multi-entity (SG HQ + ID/MY/VN subsidiaries), multi-currency, ERP-connected (NetSuite, SAP S/4, Oracle Fusion), currently running on Excel + email + ERP + bandaid SaaS. **Stakeholder pattern by sub-segment:** at single-HQ mid-market the Controller / VP Finance is the primary buyer with the Accounting Manager as day-1 user. At multi-entity SEA conglomerates the **Shared Services / GBS Director** often replaces the entity Controller as primary buyer. For e-invoicing-mandate-driven evaluations (MyInvois / InvoiceNow / e-Faktur) the **Tax Director** comes in as a co-buyer in the first conversation, not late.',
      whyOrWhyNot: [
        '**Right-to-win is structural.** SEA mid-market is under-served — Peakflo is the only credible multi-process incumbent, and they don\'t have R2R. Stampli, FloQast, BlackLine are not present. Coupa and SAP Ariba are enterprise-only.',
        '**Forced-buy regulatory tailwind.** MyInvois (Malaysia, mandatory through 2026), InvoiceNow / PEPPOL (Singapore, rolling 2025–2026), e-Faktur (Indonesia, mandatory). Mid-market CFOs must comply; we make compliance a side-effect of our product.',
        '**Multi-entity / multi-currency reality matches our architecture.** Workflow engine generality is a moat in SEA in a way it isn\'t in single-entity US scale-ups.',
        '**Cultural fit for voice AI** — phone-based collections is normal in SEA in a way it isn\'t in US/UK. Peakflo built on this; we should match or partner.',
        '**India engineering cost leverage maximized here** — pricing in SGD/IDR/MYR/USD against engineering delivered at India costs.',
        '**Existing pipeline density** — Zalora live, Apparel Group active, JLand + Agro exploratory. Real warm intros vs theoretical TAM.',
      ],
      competitiveDynamics: 'Peakflo is the critical competitor. PSG approval is the structural distribution gap to close. Our R2R differentiation is the moat they can\'t match in 2027–2028. Aspire/Airwallex/Spenmo/Volopay are not core threats (banking-led or SMB).',
      proofPoints: ['Zalora live (P2P) → expanding to O2C', 'Apparel Group active', '4 of 4 SAP-shop conversations (Coca-Cola, Spectrum, Welspun, Hitachi) had SEA / cross-border ops in scope'],
      resourceCommitment: '**80%+ of GTM resources for next 12 months.** Founder-led + 2–3 SEA-based GTM hires. PSG approval as a 90-day priority. Local accounting-firm partner program (BDO, RSM, Crowe in MY/ID).',
    },
    {
      geography: 'India-headquartered multinationals with SEA operations',
      decision: 'TARGET — secondary',
      marketSize: '~150–300 mid-market companies (Indian conglomerates with SEA ops); ACV $80–300K',
      buyerProfile: 'Indian CFO / Controller — or, in the Apparel-Group canonical pattern, a **Shared Services / GBS Director** running centralized finance ops for SEA / GCC subsidiaries — making the platform decision for non-Indian entities. The Indian Tax Director is often a co-stakeholder when GST IRN compliance or transfer-pricing documentation is in scope.',
      whyOrWhyNot: [
        '**Hybrid sale**: sold via Indian network warm intros, deployed in SEA entities. Apparel Group is exactly this pattern.',
        '**India network access** is a real advantage we have via existing relationships',
        '**Platform deployment is in SEA** — so India per-transaction commodity dynamics (Signal 2) don\'t apply',
        'Apparel CFO Hiren Patadia explicitly wants "AI in Finance" narrative — SEA platform with AI roadmap fits',
      ],
      competitiveDynamics: 'Less competition than direct SEA mid-market — Indian conglomerates are not Peakflo\'s primary motion.',
      proofPoints: ['Apparel Group active (Dubai HQ, SEA ops)', 'Welspun was attempted (stalled but pattern valid)'],
      resourceCommitment: 'Capacity from existing founder network + the SEA-based GTM team. No new investment required.',
    },
    {
      geography: 'US enterprise via SAP-shop CPA channel (warm only)',
      decision: 'TARGET — secondary',
      marketSize: '~500–1500 SAP-shop mid-market enterprises that have rejected HighRadius/Tipalti enterprise quotes; ACV $80–300K',
      buyerProfile: 'Mid-to-upper mid-market US enterprise ($500M–$2B revenue), SAP shop, multi-entity, has evaluated HighRadius/Coupa/Tipalti and rejected on price. Spectrum is canonical. **Stakeholder additions vs SEA primary:** at $1B+ public or pre-IPO accounts, the **Chief Accounting Officer (CAO)** is the controls-and-audit gate that must sign off on the SOX-evidence pack and the auditor relationship before contract; deals close only after CAO approval, regardless of CFO enthusiasm. The Treasurer becomes a co-stakeholder when the deal includes payment-file orchestration or AR cash-app driving DSO.',
      whyOrWhyNot: [
        '**HighRadius reject quote is the entry trigger.** $1.2–1.5M quote pushes them to look for alternatives. Spectrum is in motion now; we should systematize "HighRadius-rejected" lead generation.',
        '**Channel works via warm: CPA partnerships (Rehmann opened) + Big-4 alumni networks (KPMG → Spectrum)** + executive warm intros from CFO communities. Cold outbound is dead per Warner Queeny + Utpala Shelar (Signal 4).',
        '**SAP-shop framing wins** — VIM displacement pitch with the 11-dimension Coca-Cola battlecard is a structural advantage Stampli/Tipalti don\'t lean into.',
        '**ACV is enterprise-grade** — $80–300K vs $25–80K SEA mid-market. One US enterprise customer = 3–5 SEA mid-market customers in revenue.',
      ],
      competitiveDynamics: 'Compete primarily against SAP VIM (incumbent), HighRadius (rejected), Stampli (mid-market AP-only). Win on the AP+AR+close bundle and price.',
      proofPoints: ['Spectrum Brands active', 'Rehmann CPA opening', 'Boomerang Catapult relationship'],
      resourceCommitment: '**~15% of GTM resources.** Opportunistic — accept warm-channel leads, don\'t build US sales motion. CPA partner program is a 6-month learning agenda.',
    },
    {
      geography: 'GCC / Middle East (UAE, Saudi)',
      decision: 'OPPORTUNISTIC',
      marketSize: 'Apparel Group plus 50–200 similar mid-market enterprises with regional HQs in GCC',
      buyerProfile: 'Mid-market enterprise with GCC HQ and SEA / India operations. The **Tax Director** is often the first conversation in this segment because FATOORAH e-invoicing compliance is a forced-buy event with hard authority deadlines; the GBS Director / Group Controller is the operational buyer once the compliance hook is established.',
      whyOrWhyNot: [
        '**FATOORAH e-invoicing (Saudi, mandatory) is structurally similar to MyInvois** — same compliance moat we\'re building applies',
        '**Apparel Group is in pipeline already** — Dubai HQ, multi-jurisdiction',
        '**Limited market size** doesn\'t justify dedicated sales motion',
        '**Future GCC mandate compliance is doable as adjacent localization work** (next layer after MY/SG/ID)',
      ],
      competitiveDynamics: 'Limited competition; few SEA-style players have made GCC moves. Peakflo has not announced GCC.',
      proofPoints: ['Apparel Group (Dubai HQ) active'],
      resourceCommitment: 'Track inbound only. No invested motion. 2027 reassessment.',
    },
    {
      geography: 'India domestic mid-market (Indian operations only)',
      decision: 'DO NOT TARGET',
      marketSize: 'Theoretically large ($300M+), but commercially unaddressable for us',
      buyerProfile: 'Indian mid-market enterprise paying ₹1.6–4 per invoice for OCR (Cogniquest, Nanonets) and bundling AP into SAP/Oracle ERP licensing',
      whyOrWhyNot: [
        '**Sub-$5/invoice commodity pricing** destroys SaaS unit economics. Flipkart loss confirms — they pay ₹15/RO and Cogniquest claims they\'re profitable at that level. We are not.',
        '**Indian enterprise has 3–5 viable per-transaction OCR vendors** (Cogniquest, Nanonets, Kosh.ai, ClearTax) — commodity dynamics fully baked in',
        '**Workflow value is undervalued** — Indian buyers benchmark against per-transaction commodity, not against SaaS workflow value',
        '**Our India engineering cost advantage is neutral here** — Indian competitors have the same advantage',
        '**Cultural / pricing expectation gap** — Indian CFOs expect 5–10x lower pricing than SEA / US mid-market',
      ],
      competitiveDynamics: 'Cogniquest, Nanonets, Kosh.ai, ClearTax own per-transaction OCR. Razorpay, Zoho own integrated SMB. Tally owns small-business accounting. There is no addressable platform mid-market segment for us at sustainable unit economics.',
      proofPoints: ['Flipkart loss to Uttara at ₹15/RO', 'Cogniquest pricing at ₹1.6/invoice', 'Nanonets at ₹4/invoice'],
      resourceCommitment: 'Zero. Decline inbound. Refer to Indian commodity vendors where appropriate.',
    },
    {
      geography: 'US scale-ups (venture-backed tech / SaaS / DTC, $20M–$200M revenue)',
      decision: 'TARGET — secondary',
      marketSize: 'Large in absolute count. Single-entity, single-currency, US-only buyers — the simplest workflow scope in our serviceable market.',
      buyerProfile: 'CFO at venture-backed US tech / SaaS / DTC company, often already on Brex or Ramp for cards.',
      whyOrWhyNot: [
        '**Distribution friction is real but not structural** — Brex and Ramp own card distribution and bundle bill-pay as an interchange-funded tile. Selling a SaaS AP layer over the top requires either a card-displacement story or an explicit AR / close angle the cards-led tools do not have.',
        '**No warm-channel network here today** — Pattern 1 in voice-of-customer flags that all wins so far are warm; in US scale-ups we have no references, no founder network, no analyst coverage. CAC will be 5–10× our SEA CAC until those assets exist.',
        '**Differentiation is thinner here than in SEA** — single-entity, single-currency, US-only is exactly where the workflow-generality moat applies least. Stampli, Bill, Vic.ai are stronger on the standalone AP story. Where we win is the multi-product platform (AP + AR + close) at customers who feel the pain of stitching tools.',
        '**Card-led buyer journey** — these buyers shop for spend management with bill-pay attached, not AP automation. Entry conversation looks different from SEA — leading with cash visibility / month-end close pain works better than P2P invoice processing.',
        '**Autonomy reset matters here first** — Vic.ai / Stuut have shifted what "automation" means to US buyers; meeting or matching the autonomy bar is part of the entry cost.',
      ],
      competitiveDynamics: 'Brex / Ramp from above (cards-led), Vic.ai / Stuut from the agentic-autonomy angle, Stampli from mid-market AP. Sage Intacct + NetSuite native AP is the do-nothing alternative for many of these accounts.',
      proofPoints: ['No documented US scale-up wins yet', 'Pattern 1 — all wins so far are warm; building warm-channel network is the unlock'],
      resourceCommitment: 'Open question for the team. The market is large; the entry cost is the unanswered piece. One option is opportunistic only (warm intros, no outbound). Another is dedicated US GTM motion once SEA primary is de-risked.',
    },
    {
      geography: 'EU mid-market',
      decision: 'DO NOT TARGET YET',
      marketSize: 'Large (~$500M+ addressable mid-market), but execution-blocked currently',
      buyerProfile: 'EU mid-market enterprise with PEPPOL e-invoicing, multi-entity multi-jurisdiction reality, GDPR compliance',
      whyOrWhyNot: [
        '**No warm channel** — pattern 1 says no outbound; we have no EU network',
        '**GDPR compliance is heavy** — different posture from PDPA/DPDP and not interchangeable',
        '**Strong EU incumbents** — Yooz (FR), Esker (FR), Medius (Nordic), Sidetrade (FR) hold their geographies',
        '**Multi-currency / multi-jurisdiction reality is a fit** — but EU requires localization breadth (DE / FR / IT / ES / NL / Nordics) we can\'t support yet',
        '**PEPPOL standardization is a tailwind** — our SEA PEPPOL work transfers eventually',
      ],
      competitiveDynamics: 'Yooz, Esker, Medius, Sidetrade are the regional incumbents. SAP Ariba and Coupa cover enterprise.',
      proofPoints: ['No EU pipeline', 'No EU references'],
      resourceCommitment: 'Zero now. **Re-evaluate in 2028** once SEA platform thesis is locked and we have multi-jurisdictional localization patterns proven.',
    },
  ],

  recommendation: {
    headline: `**Target SEA mid-market Controllers + CFOs as the primary buyer (12-month focus). Sell to US enterprise warm channels opportunistically (15% of capacity). Do not pursue India domestic, US scale-ups, or EU.**`,
    twelveMonthFocus: `Sell to **mid-market Controllers / VP Finance** at $50M–$500M revenue, multi-entity SEA companies. Champions = **Sr Director AP / AR + Accounting Manager** (the Accounting Manager is the day-1 user whose adoption signal makes-or-breaks rollout — invest demo time accordingly). Economic buyer = CFO. IT must be in the room early. **For multi-entity conglomerate sub-segment** (Apparel Group / Welspun pattern), open with the Shared Services / GBS Director — they often hold the consolidated platform budget across entities. **For e-invoicing-mandate-driven deals**, the Tax Director is the first conversation, not a late-stage stakeholder. Average deal 4–9 months, ACV $60–250K. **Lead with the multi-product platform** (P2P + O2C, R2R on roadmap) as the differentiator vs Peakflo (no R2R) and Stampli (AP-only). Use Zalora as the reference customer for every SEA pitch. Apply for PSG Pre-Approved Vendor status as the single biggest unlock for Singapore SMB-to-mid-market expansion.`,
    twelveTo24Months: `Add **US warm-channel motion** via CPA partner program (Rehmann + 2–3 more) and KPMG-alumni introductions. Spectrum closure validates the "HighRadius-rejected mid-market enterprise" segment — at this segment the **Chief Accounting Officer** is the controls gate (SOX-evidence pack and auditor relationship sign-off must precede contract); the Treasurer enters when payment-file orchestration or AR cash-app DSO is in scope. Build the systematic lead-gen for that segment (LinkedIn signals, advisor introductions, public earnings call mentions of DSO/cash-app pain). Open **GCC opportunistic** path via Apparel Group expansion and FATOORAH compliance work — Tax Director-led entry is the canonical motion here. Begin **R2R Phase 3** once O2C is shipping; close orchestration + JE workflow + recs is the MVP.`,
    avoidThesePitfalls: [
      '**Don\'t chase India domestic mid-market** — sub-$5/invoice commodity dynamics destroy unit economics. The Flipkart loss is the canonical proof.',
      '**Don\'t pursue US scale-ups** — Ramp/Brex own them via cards; cold outbound is dead; we have no network or references. CAC would be 5–10x SEA.',
      '**Don\'t expand to EU before 2028** — no warm channel, GDPR is a heavy lift, regional incumbents are entrenched. Re-evaluate after SEA platform is proven.',
      '**Don\'t over-build R2R complexity (consolidation, statutory)** — Risk #4. Lock R2R MVP to close + JE + recs. Consolidation is a swamp.',
      '**Don\'t let any one US enterprise inbound (e.g., Spectrum, Coca-Cola) redirect product roadmap** — follow the money short-term, but the SEA mid-market thesis is the platform bet.',
      '**Don\'t skip PSG application** — single biggest distribution gap to Peakflo. 90-day must-do.',
      '**Don\'t pitch "platform thesis" in builder language** — speak buyer language: "one vendor master, one customer master, one audit trail across AP+AR+close."',
    ],
  },
};
