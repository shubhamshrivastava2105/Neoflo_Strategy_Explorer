// Drop into: content/insights.ts
// Deep insights layered on top of the strategy memo — pricing, regulation, defensibility, buyer journey, GTM.

export type PricingBenchmark = {
  vendor: string;
  segment: string;
  pricingModel: string;
  typicalARR: string;
  implementation: string;
  notes: string;
};

export type RegulatoryWindow = {
  jurisdiction: string;
  mandate: string;
  status: string;
  whoMustComply: string;
  whatItForces: string;
  ourPlay: string;
};

export type DefensibilityLayer = {
  layer: string;
  description: string;
  durability: 'Low' | 'Medium' | 'High';
  howToReinforce: string;
};

export type JobMapStep = {
  number: number;
  step: string;
  cfoQuestion: string;
  controllerQuestion: string;
  itQuestion: string;
  whatWins: string;
};

export type GTMPlay = {
  segment: string;
  geography: string;
  channel: string;
  motion: string;
  cycleLength: string;
  acvRange: string;
  status: 'Active' | 'Test' | 'Future';
  evidence: string;
};

export type InsightsData = {
  pricing: {
    intro: string;
    benchmarks: PricingBenchmark[];
    proposedNeoflo: {
      wedge: string;
      platform: string;
      perTransactionFloor: string;
      logic: string;
    };
  };
  regulatory: {
    intro: string;
    windows: RegulatoryWindow[];
    headline: string;
  };
  defensibility: {
    intro: string;
    layers: DefensibilityLayer[];
    summary: string;
  };
  buyerJobMap: {
    intro: string;
    steps: JobMapStep[];
  };
  gtmPlaybook: {
    intro: string;
    plays: GTMPlay[];
    sequencing: string;
  };
  ninetyDayActions: Array<{
    number: number;
    action: string;
    owner: string;
    why: string;
    successMetric: string;
  }>;
};

export const insightsData: InsightsData = {
  pricing: {
    intro: `Pricing is the most under-specified part of the v1 memo. A "platform thesis" without a price ladder is unfalsifiable. This section benchmarks what each cohort actually charges, and proposes a defensible Neoflo price ladder for **US mid-market** — priced as a **managed service** (you pay for the outcome), with competitor ARR as the benchmark.`,
    benchmarks: [
      {
        vendor: 'Stampli',
        segment: 'US mid-market AP',
        pricingModel: 'Quote-based subscription, no per-transaction',
        typicalARR: '$30–100K',
        implementation: '4–6 weeks, included',
        notes: 'Their "fast time-to-value" is the price/value anchor for mid-market AP globally. We must match implementation speed.',
      },
      {
        vendor: 'Tipalti',
        segment: 'Upper mid + global enterprise AP',
        pricingModel: 'Base subscription + per-transaction + payment fees',
        typicalARR: '$40–80K (mid) → $200K+ (enterprise)',
        implementation: '6–18 months, $4–5K+',
        notes: 'Heavy implementation is part of the moat for global complexity. Not directly competitive in our SEA mid-market segment.',
      },
      {
        vendor: 'Bill.com',
        segment: 'SMB / lower mid AP+AR',
        pricingModel: 'Per-user/mo + per-transaction',
        typicalARR: '$5–25K',
        implementation: '4–8 weeks, mostly self-serve',
        notes: 'Sets the price floor for the lightweight end. Not relevant for $50M+ revenue customers.',
      },
      {
        vendor: 'Peakflo',
        segment: 'SEA mid-market AP+AR',
        pricingModel: 'Quote-based; PSG subsidy applies in SG',
        typicalARR: '$25–60K (gross), ~S$15K net for SG SMB after PSG',
        implementation: '4–8 weeks',
        notes: 'PSG-net pricing is the anchor every SG buyer compares us to. Without PSG approval, we pay a structural ~50% pricing penalty in Singapore.',
      },
      {
        vendor: 'HighRadius',
        segment: 'Enterprise O2C',
        pricingModel: 'Subscription + module add-ons',
        typicalARR: '$35K–100K+ (mid) → $1M+ (enterprise)',
        implementation: '3–9 months, six figures',
        notes: 'Spectrum quote was $1.2–1.5M — this is the "no" price that pushes enterprise mid-market customers like Spectrum to look for alternatives. **That gap is our opportunity.**',
      },
      {
        vendor: 'BlackLine',
        segment: 'Enterprise + upper mid R2R',
        pricingModel: 'Per-user + module licensing',
        typicalARR: '$40K–300K (mid) → $500K+ (enterprise)',
        implementation: '3–9 months; 1.0–1.5x first-year license',
        notes: 'Explicit "FloQast capability at FloQast price, on the same platform that runs your AP+AR" is our R2R wedge story.',
      },
      {
        vendor: 'FloQast',
        segment: 'Mid-market R2R',
        pricingModel: 'Per-user subscription',
        typicalARR: '$30–80K',
        implementation: '4–8 weeks',
        notes: 'The pricing anchor for our future R2R module. Excel-native UX is the differentiator we have to match or beat.',
      },
      {
        vendor: 'Cogniquest / Nanonets (Indian per-transaction)',
        segment: 'Indian enterprise AP — the floor',
        pricingModel: 'Per-invoice transactional',
        typicalARR: 'Equivalent of $0.02–0.05 per invoice',
        implementation: 'Months',
        notes: 'Why Indian enterprise is structurally non-addressable for us at SaaS pricing. Confirms Signal 2.',
      },
    ],
    proposedNeoflo: {
      wedge: '$25–45K/yr for managed P2P (invoice processing + cash application; 5–10 users, sub-50K invoices/yr) — priced on the outcome, not seats; undercuts Stampli\'s AP-only software.',
      platform: '$60–120K/yr for the managed P2P + O2C operation (10–25 users, multi-entity, multi-currency) — below HighRadius+Stampli combined, and run for you rather than handed over.',
      perTransactionFloor: 'Price on outcomes (per resolved exception, % DSO reduction, close-days saved) and tiered volume; avoid a published per-invoice sticker that invites a commodity-OCR comparison. Introduce explicit per-transaction tiers only at scale (>250K invoices/yr) to protect unit economics.',
      logic: `Three constraints: (1) Stampli ($30–100K AP-only **software**) sets the upper bound for AP-only positioning — but we sell a service, not a cheaper tool. (2) HighRadius reject-quote ($1.2M+) sets the platform ceiling — don't price like a HighRadius replacement. (3) Because we **run** the work, the value frame is "a finance hire or two replaced, outcome-guaranteed," not "a cheaper license." (In the secondary SEA motion, Peakflo PSG-net ~S$15K is the local floor.)`,
    },
  },

  regulatory: {
    intro: `The single most under-discussed strategic input in the v1 memo. ASEAN is in the middle of a coordinated e-invoicing mandate wave. This is **forced buying** for our exact target segment over the next 24 months. Done right, it's the highest-leverage GTM input we have. Done wrong, ClearTax and Peakflo eat the moment.`,
    windows: [
      {
        jurisdiction: 'Malaysia — MyInvois (LHDN)',
        mandate: 'Mandatory B2B e-invoicing through the IRBM portal with PEPPOL interop',
        status: 'Phase 1 (>RM100M) live since Aug 2024; Phase 2 (>RM25M) since Jan 2025; Phase 3 (>RM5M) since Jul 2025; Phase 4 since Jan 2026; remaining smaller taxpayers phased in **through 2031** (not 2026)',
        whoMustComply: 'Every Malaysian-incorporated business sequentially by revenue band',
        whatItForces: 'Real-time invoice submission to LHDN, structured data (UBL 2.1), QR-coded receipts, validation latency <3s. Manual / Excel / paper invoicing becomes legally non-compliant.',
        ourPlay: '**P0 — the mandate is here now, not coming: Phases 1–4 are already live (Jul 2025 / Jan 2026), with smaller bands phasing through 2031.** Native MyInvois validation + submission inside our P2P module is a present-day forced-buy trigger for Malaysian mid-market. Position as: "we keep you compliant from day 1, no separate e-invoicing tool needed."',
      },
      {
        jurisdiction: 'Singapore — InvoiceNow (PEPPOL)',
        mandate: 'GST-registered businesses must transmit invoice data to IRAS via InvoiceNow',
        status: 'Mandatory for newly incorporated GST-registered businesses from Nov 2025; expanded rollout 2026',
        whoMustComply: 'All Singapore GST-registered entities sequentially',
        whatItForces: 'PEPPOL-formatted e-invoices via the IMDA InvoiceNow network. Buyer side must be able to receive structured PEPPOL invoices.',
        ourPlay: 'PEPPOL access point + InvoiceNow integration must be standard in our SG offering. Apply for PSG Pre-Approved status simultaneously — these solve as one bundle for SG buyers.',
      },
      {
        jurisdiction: 'Indonesia — Coretax (DJP), formerly e-Faktur',
        mandate: 'Mandatory tax administration + e-invoicing through the DJP Coretax system for VAT-registered businesses',
        status: 'e-Faktur regime since 2016, now **superseded by the Coretax system** (DJP) — live from Jan 2025 and the enforceable regime going forward',
        whoMustComply: 'All VAT-registered Indonesian businesses (PKP)',
        whatItForces: 'Invoices and tax data submitted through Coretax, NPWP validation, real-time tax-authority sync.',
        ourPlay: 'Already-mandatory mature regime. Native **Coretax (ex-e-Faktur)** support is **non-negotiable for any Indonesian customer** (Indonesia is the largest by population in the SEA geography). Without it, you can\'t pitch in Jakarta at all.',
      },
      {
        jurisdiction: 'Philippines — BIR EIS',
        mandate: 'Electronic invoicing through BIR Electronic Invoicing System',
        status: 'Pilot 2022; phased mandatory rollout 2024–2026 for large taxpayers, expanding',
        whoMustComply: 'Top 1,000 large taxpayers first; expanding to mid-market',
        whatItForces: 'Real-time BIR submission, JSON-format e-invoices, signed digital receipts.',
        ourPlay: 'P1 once Indonesia + Malaysia are shipped. Tonik (Peakflo customer) is in Philippines — they\'ll be feeling this pressure first.',
      },
      {
        jurisdiction: 'Vietnam — ISeBP',
        mandate: 'Mandatory electronic invoicing through GDT-certified providers',
        status: 'Mandatory since Jul 2022',
        whoMustComply: 'All Vietnamese enterprises',
        whatItForces: 'GDT-approved e-invoicing provider integration, signed e-invoices, 7-year retention.',
        ourPlay: 'Tactical priority. Probably best to partner with a GDT-certified Vietnamese provider rather than build native.',
      },
      {
        jurisdiction: 'Thailand — RD e-Tax Invoice',
        mandate: 'Voluntary e-Tax Invoice & e-Receipt; mandatory roadmap rolling',
        status: 'Voluntary now; mandatory expansion expected 2026–2027',
        whoMustComply: 'Currently opt-in; will become mandatory by revenue band',
        whatItForces: 'Digital signature, RD format submission, integrated with VAT filing.',
        ourPlay: 'P2 — wait for mandate clarity before building.',
      },
    ],
    headline: `**In the secondary SEA motion, three jurisdictions (MY, SG, ID) require structured e-invoicing right now — the mandates are already live, not coming.** Malaysia's MyInvois is rolling through bands to 2031; Indonesia runs on Coretax; Singapore's InvoiceNow is phasing in. Where we pursue SEA, the pitch becomes "compliance is a free side effect of using us," which sells before the AP/AR features do — but this is a SEA-specific lever with **no US equivalent**, so it is not part of the primary US thesis. Peakflo and ClearTax are already in motion here.`,
  },

  defensibility: {
    intro: `The v1 memo asserts "platform thesis is the moat" without analyzing what competitors would have to do to neutralize it. Layered defensibility analysis: what we have, how durable each layer is, and how to reinforce.`,
    layers: [
      {
        layer: 'Workflow engine generality (P2P + O2C + R2R on shared primitives)',
        description: 'Same engine runs invoice processing, billing, collections, JE workflow, reconciliations. Reduces internal cost of new modules. Surfaces to customer as one vendor master, one customer master, one audit trail across all finance ops.',
        durability: 'Medium',
        howToReinforce: 'A well-funded competitor with a workflow engine (FloQast, even Stampli) can replicate the *architecture* in 18–24 months. The moat isn\'t the engine — it\'s being **first to run all three (P2P + O2C + R2R) as a single managed outcome for US mid-market**, plus the **exception flywheel** that compounds as we operate it (every human-resolved exception trains the AI, so each client\'s touchless % climbs). Reinforce by accelerating O2C + R2R and instrumenting the flywheel. Lose this if we slip the platform proof past Q2 2027.',
      },
      {
        layer: 'Localized regulatory compliance (MyInvois, InvoiceNow, Coretax)',
        description: 'Native integration with each ASEAN jurisdiction\'s e-invoicing regime — built once per country, mandatory for compliance, becomes table stakes for that geography.',
        durability: 'High',
        howToReinforce: 'Relevant to the **secondary SEA motion**, not the primary US market (the US has no equivalent national e-invoicing mandate). In SEA it is a genuinely durable layer — each jurisdiction is months of work nobody outside SEA bothers with — so pursue MY/SG/ID compliance only if we commit to SEA. It is **not** a US moat.',
      },
      {
        layer: 'Multi-entity / multi-currency / intercompany',
        description: 'Native handling of group structures (HQ + subs), FX revaluation, intercompany elimination, multi-GAAP. The "Singapore HQ + Indonesian PT + Malaysian Sdn Bhd" reality is the SEA mid-market\'s structural complexity.',
        durability: 'Medium-High',
        howToReinforce: 'Bill.com / Stampli / Peakflo all wave at this; nobody handles it cleanly for our segment. Document this in our buyer-facing collateral. Build automated intercompany matching as a P1 feature.',
      },
      {
        layer: 'Switching cost from data accumulation',
        description: 'After 12+ months, customer\'s vendor master, customer master, GL coding patterns, approval routes, and exception-handling rules accumulate inside Neoflo. Migrating this out is harder than starting fresh.',
        durability: 'Low → Medium (compounds with time)',
        howToReinforce: 'Standard SaaS lock-in. Explicitly track and surface: number of unique vendor records, approval rule count, GL coding accuracy %, etc. Make these visible to the customer to anchor their sense of accumulated value.',
      },
      {
        layer: 'Reference network (Zalora, target +2 SEA enterprise)',
        description: 'Enterprise-scale reference customers in target geography. Concrete answer to "who else like us is using this."',
        durability: 'Medium',
        howToReinforce: 'Get 2 more SEA mid-market enterprise references live by Q4 2026. Public case studies. Reference call program. Without these, the next deal is uphill.',
      },
      {
        layer: 'India engineering cost leverage',
        description: 'Engineering headcount delivered at India costs while pricing in SEA/US currencies. Allows aggressive pricing or higher gross margin.',
        durability: 'Medium',
        howToReinforce: 'Real, but not unique — Razorpay, Zoho, Peakflo (which has Indian eng) also have this. The leverage is in choosing to use it for pricing aggression, not in having it. This isn\'t a moat by itself; it\'s a financial constraint we should exploit consciously.',
      },
      {
        layer: 'CPA partnership channel (US warm-only)',
        description: 'Rehmann CPA opening, KPMG-overlap warm intros (Spectrum), Boomerang relationship.',
        durability: 'Low (early stage, contingent)',
        howToReinforce: 'This becomes a moat only if we lock in a small number of mid-market CPAs (5–10) with revenue-share agreements that are exclusive in geography or vertical. Right now it\'s a trickle. Either invest in the partnership motion deliberately or treat it as opportunistic and don\'t over-claim.',
      },
    ],
    summary: `**The three durable layers** for the US managed-service model are: (1) the **cross-workflow unified data layer + audit trail** (one vendor master, one customer master, one audit trail across AP+AR+close — single-workflow vendors can't match it without a rebuild); (2) the **exception flywheel** — because we *run* the work, every resolved exception trains the AI and each client's touchless % compounds, which software-you-operate structurally cannot copy; (3) **multi-entity / intercompany handling** which Stampli/Peakflo wave at but don't solve. Regulatory localization (MyInvois/InvoiceNow/Coretax) is a durable layer **only in the secondary SEA motion** — there is no US equivalent. Everything else (engineering cost, switching cost, channel) is real but commodity. **The single biggest mistake we can make is treating "workflow engine generality" as the moat. It isn't — it's a precondition. The moat is what we run on it that nobody else does: integrated data + the exception flywheel.**`,
  },

  buyerJobMap: {
    intro: `The v1 memo describes processes (P2P/O2C/R2R) but not the buying job itself — what the buyer is actually doing when they evaluate us, what they\'re asking, and what wins each step. Mapping this from the customer evidence we have.`,
    steps: [
      {
        number: 1,
        step: 'Identify the pain (CFO-level)',
        cfoQuestion: 'Where is finance team capacity going? Why does close take 12 days? Why is DSO stuck at 65?',
        controllerQuestion: 'How do I stop spending 60% of my month chasing invoices and reconciliations?',
        itQuestion: '(Not in conversation yet.)',
        whatWins: 'Diagnostic content (process explainers, benchmark data). Warm intro from peer who solved the same problem.',
      },
      {
        number: 2,
        step: 'Survey the market',
        cfoQuestion: 'What is everyone else using? Is there a standard?',
        controllerQuestion: 'Stampli, Bill, Tipalti, HighRadius, BlackLine, FloQast — which actually fits us?',
        itQuestion: 'Will this play with our SAP/NetSuite/Oracle?',
        whatWins: 'Cohort comparison clarity (this memo). Battlecard against the specific incumbents (VIM, NetSuite native, Stampli). Prepared answers to "we\'re an Oracle shop / a SAP shop / a NetSuite shop."',
      },
      {
        number: 3,
        step: 'Shortlist & quote',
        cfoQuestion: 'What\'s the price for what scope, and how does it compare to my next-best option?',
        controllerQuestion: 'Will this actually deploy in weeks, or am I about to sign up for an 8-month implementation?',
        itQuestion: 'How does data flow? Who maintains the integration when SAP upgrades?',
        whatWins: 'Tight scoped pricing (wedge / platform tiers). Public time-to-live SLA. Reference architecture diagram for SAP/Oracle/NetSuite/Dynamics integration.',
      },
      {
        number: 4,
        step: 'NDA + demo + technical eval',
        cfoQuestion: 'Did the demo show my actual workflow or a generic one?',
        controllerQuestion: 'Will my team adopt this or push back?',
        itQuestion: 'Security posture? SOC 2? Data residency? PDPA / DPDP compliance?',
        whatWins: '**Customer-specific demo with their data shape**, not a generic walkthrough. Compliance & security pack ready before the meeting. **Cycle compression — the NDA cycle is killing momentum** (Pattern 2). Standardize a 7-day NDA-to-demo SLA.',
      },
      {
        number: 5,
        step: 'Pilot / proof-of-concept',
        cfoQuestion: 'What\'s the path from pilot to scale, and what\'s the cost?',
        controllerQuestion: 'How quickly can I show value to the CFO?',
        itQuestion: 'Will this break anything in production?',
        whatWins: 'Productized 6–8 week pilot with defined success metrics (% STP, hours saved, DSO delta). Dedicated CSM. Pilot pricing that converts cleanly to platform pricing without renegotiation.',
      },
      {
        number: 6,
        step: 'Procurement + legal',
        cfoQuestion: 'Are we buying once or signing a multi-year? Where does the budget come from?',
        controllerQuestion: '(Hands off to procurement.)',
        itQuestion: 'InfoSec review. Security questionnaire. Penetration test results.',
        whatWins: 'Standard contract templates with sane redlines. Pre-completed SOC 2 / ISO 27001 / PDPA security questionnaires. Multi-year discount that anchors the platform expansion.',
      },
      {
        number: 7,
        step: 'Go-live + expand',
        cfoQuestion: 'Are we hitting the metrics we promised the board?',
        controllerQuestion: 'Can we add AR / close on the same platform without another procurement cycle?',
        itQuestion: 'Is uptime / data integrity holding?',
        whatWins: 'Quarterly business reviews tied to original metrics. Pre-built upgrade path from P2P → P2P+O2C → full platform. Reference call willingness as a KPI.',
      },
    ],
  },

  gtmPlaybook: {
    intro: `Customer evidence Pattern 1 made it explicit: every documented pipeline deal came from warm channels. Cold outbound is dead in our category. This is the full GTM matrix — segment × geography × channel × motion.`,
    plays: [
      {
        segment: 'SEA mid-market enterprise (Zalora-like, $200M–$2B rev)',
        geography: 'Singapore, Indonesia, Malaysia',
        channel: 'Direct + warm intros (founder network, KPMG/Big 4 overlap, SSON events)',
        motion: 'Founder-led, 2–4 stakeholder selling (CFO + Controller + IT)',
        cycleLength: '4–9 months',
        acvRange: '$60–250K',
        status: 'Active',
        evidence: 'Zalora live. Apparel Group, Agro Corp, JLand Group in pipeline.',
      },
      {
        segment: 'SEA mid-market scale-ups ($50–200M rev)',
        geography: 'Singapore (PSG-eligible), Indonesia, Malaysia',
        channel: 'PSG Pre-Approved Vendor channel (SG), accounting firm partners (BDO, RSM, Crowe in MY/ID), regional CFO communities',
        motion: 'Inside sales + accounting-firm referral',
        cycleLength: '6–12 weeks',
        acvRange: '$25–75K',
        status: 'Test',
        evidence: 'Not yet active. Requires PSG approval (3–6 months) and accounting partner program. **This is the volume play we\'re currently missing.**',
      },
      {
        segment: 'US enterprise via SAP-shop CPA channel',
        geography: 'US Midwest + East Coast (Rehmann coverage), opportunistic elsewhere',
        channel: 'CPA firm white-label / co-sell. No direct outbound.',
        motion: 'Partner-led; Neoflo plays expert SME role on calls',
        cycleLength: '6–12 months',
        acvRange: '$80–300K',
        status: 'Test',
        evidence: 'Rehmann (Michigan) opening. Spectrum Brands warm intro via KPMG. Boomerang Catapult relationship.',
      },
      {
        segment: 'India domestic enterprise',
        geography: 'India',
        channel: '—',
        motion: 'Do not pursue (Signal 2)',
        cycleLength: '—',
        acvRange: '—',
        status: 'Future',
        evidence: 'Flipkart loss, sub-$5/invoice market. Per-transaction unit economics fail. Revisit only if Indian mid-market emerges as a segment willing to pay SaaS pricing for multi-process platform.',
      },
      {
        segment: 'India-HQ multinationals with SEA ops',
        geography: 'Hybrid — sold to Indian HQ, deployed in SEA entities',
        channel: 'Warm Indian-network intros (Apparel Group, Welspun pattern)',
        motion: 'Founder-led, similar to direct SEA mid-market',
        cycleLength: '4–9 months',
        acvRange: '$80–300K',
        status: 'Active',
        evidence: 'Apparel Group is exactly this pattern. Welspun was attempted but stalled.',
      },
      {
        segment: 'GCC / Middle East',
        geography: 'UAE, Saudi (FATOORAH e-invoicing mandate)',
        channel: 'Opportunistic — referral only',
        motion: 'Reactive',
        cycleLength: 'TBD',
        acvRange: 'TBD',
        status: 'Future',
        evidence: 'Apparel Group (Dubai HQ) is in pipeline. FATOORAH is structurally similar to MyInvois — same e-invoicing mandate dynamic. Worth tracking for 2027–2028.',
      },
    ],
    sequencing: `**For the next 12 months, focus is on US mid-market via the warm CPA / advisor channel** — land with P2P + cash application, run as a managed service, expand across the cash cycle. SEA (the former Plays 1 + 2) and India-HQ multinationals (Play 5) become **secondary, opportunistic** — take warm inbound, don't let it become roadmap-defining. Play 4 (India direct) stays disabled; Play 6 (GCC) logged for later. **The single most important GTM action this quarter is standing up the US warm channel: 2–3 CPA / advisor referral partnerships + a packaged shadow-mode pilot offer.**`,
  },

  ninetyDayActions: [
    {
      number: 1,
      action: 'Stand up the warm US channel: 2–3 CPA / advisor referral partnerships + a packaged shadow-mode pilot offer',
      owner: 'Founders + GTM lead',
      why: 'US mid-market is the primary market and every documented win came warm (cold outbound is dead). The managed-service trust ask needs a shadow → parallel-run → cutover pilot to de-risk. This is the volume lever. (PSG Pre-Approved Vendor status is the equivalent lever in the secondary SEA motion — pursue only if we commit to SEA.)',
      successMetric: '2–3 signed referral partners and a documented shadow-mode pilot offer within 60 days.',
    },
    {
      number: 2,
      action: 'Build VIM-displacement battlecard with the 11-dimension structure from Coca-Cola pitch',
      owner: 'Sales + product marketing',
      why: 'Every SAP-shop conversation (Coca-Cola, Spectrum, Welspun, Hitachi) is structurally a VIM-replacement decision, not a Stampli/Tipalti comparison. We\'re losing the framing today.',
      successMetric: 'Battlecard live; used in next 5 SAP-shop conversations; win-rate tracked.',
    },
    {
      number: 3,
      action: 'Ship MyInvois validation + submission native in P2P module',
      owner: 'Eng + a Malaysian regulatory partner',
      why: 'Mandatory by revenue band through 2026. Forced-buy trigger for every Malaysian mid-market customer. Highest-leverage compliance moat we can build.',
      successMetric: 'MyInvois fully integrated; first MY customer go-live with native compliance.',
    },
    {
      number: 4,
      action: 'Standardize 7-day NDA-to-demo SLA + customer-data-shape demo template',
      owner: 'Sales ops + revops',
      why: 'Pattern 2 — NDA cycles are killing momentum. Hitachi went silent during NDA. Flipkart took 3+ weeks. Closing this loop is process improvement, not strategy change.',
      successMetric: 'Median NDA-to-demo time <7 days for next 10 deals.',
    },
    {
      number: 5,
      action: 'Lock 2 SEA mid-market enterprise references beyond Zalora',
      owner: 'Founders + sales',
      why: 'Risk #3 (Zalora dependency) is existential. Two more references make the next sale 10x easier and de-risk the entire SEA story.',
      successMetric: 'Two LOIs or signed contracts in SEA mid-market enterprise by end of 90 days.',
    },
    {
      number: 6,
      action: 'Define and publish wedge / platform pricing tiers',
      owner: 'Founders + finance',
      why: 'Today every deal is bespoke; no anchor against Peakflo S$15K-net or Stampli $30–100K. A defensible price ladder is the precondition for sales scale.',
      successMetric: 'Wedge tier ($25–45K), platform tier ($60–120K), enterprise quote-based — published internally and tested against next 5 quotes.',
    },
    {
      number: 7,
      action: 'Reframe "platform thesis" in customer language across all collateral',
      owner: 'Product marketing',
      why: '"Workflow engine generality" is builder-language. Buyers (Hitachi, Spectrum) said "we want AP + AR + cash app + deductions in one bundle, at non-enterprise prices." Lead with that.',
      successMetric: 'Website, sales deck, and one-pager refreshed with customer-language framing.',
    },
    {
      number: 8,
      action: 'Talk to 3 Peakflo customers (won deals) and 1 Peakflo loss (a deal they lost) — fill the win/loss data gap',
      owner: 'Founders or first-hire revops',
      why: 'Open Question #1 — we have inferred competitive risk on Peakflo, no documented loss. Without primary data, every Peakflo strategy is guesswork.',
      successMetric: '4 documented conversations; structured win/loss notes; refresh strategy based on findings.',
    },
  ],
};
