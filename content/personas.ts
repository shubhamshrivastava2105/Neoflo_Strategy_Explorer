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
  ],

  buyingCommittee: `**The realistic SEA mid-market buying committee** is 3–5 people: **Controller (primary buyer / champion)**, **CFO (economic buyer above $100K)**, **Sr Director AP or AR (champion / day-1 user)**, **CIO / IT** (veto authority on integration), and sometimes **Procurement Director** (if PR/PO is in scope). Average deal cycle 4–9 months. NDA → demo cycle is the make-or-break window per Pattern 2 — compression to 7 days is a 90-day priority.`,

  geographyDecisions: [
    {
      geography: 'Southeast Asia mid-market (Singapore, Indonesia, Malaysia, Vietnam, Thailand, Philippines)',
      decision: 'TARGET — primary',
      marketSize: 'Smaller in absolute dollars than US ($500M–$1.5B addressable for our segment), but right-to-win is dramatically higher.',
      buyerProfile: 'CFO / Controller at $50M–$500M revenue companies, multi-entity (SG HQ + ID/MY/VN subsidiaries), multi-currency, ERP-connected (NetSuite, SAP S/4, Oracle Fusion), currently running on Excel + email + ERP + bandaid SaaS.',
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
      buyerProfile: 'Indian CFO/Controller making the platform decision for SEA subsidiaries. Apparel Group is the canonical example.',
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
      buyerProfile: 'Mid-to-upper mid-market US enterprise ($500M–$2B revenue), SAP shop, multi-entity, has evaluated HighRadius/Coupa/Tipalti and rejected on price. Spectrum is canonical.',
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
      buyerProfile: 'Mid-market enterprise with GCC HQ and SEA / India operations',
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
      decision: 'DO NOT TARGET',
      marketSize: 'Large in absolute count, but commercially blocked',
      buyerProfile: 'CFO at venture-backed US tech / SaaS / DTC company, already on Brex or Ramp for cards',
      whyOrWhyNot: [
        '**Brex and Ramp own this segment via card distribution.** Their bill-pay tile is "free" (interchange-bundled). Charging SaaS for AP layer in these accounts is structurally hard.',
        '**Cold outbound is dead per Pattern 1 + Signal 4.** Direct sales motion in US would require 5–10x our SEA CAC. We have no team, no references, no network.',
        '**Single-entity, single-currency, US-only** is the simplest workflow scope — exactly where we have least differentiation. Stampli, Bill, Vic.ai are all stronger.',
        '**Their workflow is card-led**, not invoice-led. Our P2P workflow story doesn\'t resonate as the wedge.',
        '**Vic.ai / Stuut autonomy story is reshaping buyer expectation** in US — we\'re not category-leading on autonomy yet.',
      ],
      competitiveDynamics: 'Brex/Ramp from above (cards), Vic.ai/Stuut from agentic angle, Stampli from mid-market AP positioning. No structural advantage we can play here.',
      proofPoints: ['No documented US scale-up wins', 'Pattern 1 — all warm SEA + US enterprise via warm channel'],
      resourceCommitment: 'Zero. Decline inbound; refer to Stampli/Bill/Vic.ai if asked.',
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
    twelveMonthFocus: `Sell to **mid-market Controllers / VP Finance** at $50M–$500M revenue, multi-entity SEA companies. Champion = Sr Director AP / AR. Economic buyer = CFO. IT must be in the room early. Average deal 4–9 months, ACV $60–250K. **Lead with the multi-product platform** (P2P + O2C, R2R on roadmap) as the differentiator vs Peakflo (no R2R) and Stampli (AP-only). Use Zalora as the reference customer for every SEA pitch. Apply for PSG Pre-Approved Vendor status as the single biggest unlock for Singapore SMB-to-mid-market expansion.`,
    twelveTo24Months: `Add **US warm-channel motion** via CPA partner program (Rehmann + 2–3 more) and KPMG-alumni introductions. Spectrum closure validates the "HighRadius-rejected mid-market enterprise" segment. Build the systematic lead-gen for that segment (LinkedIn signals, advisor introductions, public earnings call mentions of DSO/cash-app pain). Open **GCC opportunistic** path via Apparel Group expansion and FATOORAH compliance work. Begin **R2R Phase 3** once O2C is shipping; close orchestration + JE workflow + recs is the MVP.`,
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
