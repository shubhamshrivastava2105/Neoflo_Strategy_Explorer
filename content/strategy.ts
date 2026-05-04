// Drop into: content/strategy.ts
import type { StrategyData } from './types';

export const strategyData: StrategyData = {
  tldr: `**Stay sequenced on P2P → O2C → R2R, but reframe the bet.** P2P is the largest, most contested, fastest-commoditizing segment globally — we will not win on "AP automation" alone. Our defensible position is **the multi-workflow FinOps platform built for Southeast Asia mid-market with India-grade engineering economics**. The wedge is P2P invoice processing (already in-flight with Zalora). The moat is what nobody else has built well in this geography: **one platform that runs P2P + O2C + R2R on shared data and shared workflow primitives**. The threat isn't BlackLine or Tipalti — they don't compete here. The threats are **Peakflo** (direct overlap, Singapore-based, YC-backed, already moving on multi-product) and the **AI-native US wave** (Brex, Ramp, Rillet, Numeric) which is resetting category expectations from "automated workflow" to "continuous, agentic, zero-day close" — a bar we need to track even if our buyers aren't asking for it yet.`,

  marketSizing: {
    intro: `Three things matter for sizing: how big the global category is, how fast it's growing, and where the dollars actually concentrate.`,
    rows: [
      {
        process: 'P2P / AP Automation',
        tam2026: '~$6.9B',
        forecast2031: '~$12.5B',
        cagr: '12.4%',
        notes: 'North America 37% share. Most mature category. APAC growing 14% CAGR.',
      },
      {
        process: 'O2C / AR Automation',
        tam2026: '~$3.8B',
        forecast2031: '~$6.6B',
        cagr: '11.6%',
        notes: 'APAC fastest-growing at 14% CAGR. Less commoditized than P2P.',
      },
      {
        process: 'R2R / Close & Reconciliation',
        tam2026: '~$5.8B',
        forecast2031: '~$10B+',
        cagr: '12%',
        notes: 'BlackLine + FloQast + Trintech dominate enterprise & upper mid.',
      },
    ],
    headline: `**The headline:** P2P is the biggest market but also the most fragmented and most price-pressured. O2C is smaller but has more pricing power per customer (DSO impact → cash → CFO will pay). R2R is enterprise-priced — BlackLine charges $40K–$300K+ ARR for mid-market, which means there's room for a serious mid-market disruptor if you can match capability at 1/3 the price.`,
    segmentNote: `We are not selling to **enterprises** (HighRadius / BlackLine territory) or **SMBs** (Bill.com / QuickBooks territory). We're selling to **mid-market: $50M–$500M revenue, 10–50 finance staff, multi-entity, ERP-connected, currently running on Excel + email + ERP + bandaid SaaS**. Within that segment, two geographies look very different. **USA mid-market** is over-served — every category has 5–10 viable players. **Southeast Asia mid-market** is under-served, especially the multi-entity multi-currency multi-jurisdiction reality. **Our addressable opportunity in SEA mid-market is smaller in absolute dollars than the US, but our right to win is dramatically higher.**`,
  },

  landscapes: {
    p2p: {
      slug: 'p2p',
      title: 'P2P competitive landscape',
      intro: `The P2P / AP automation market is a **mature, segmented, geographically-sliced** market. There is no single "competitor" — there are at least four distinct competitive cohorts. Our positioning depends entirely on which cohort we benchmark against.`,
      cohorts: [
        {
          id: 'p2p-a',
          letter: 'A',
          title: 'Enterprise / Global (we don\'t compete here)',
          competitors: [
            {
              name: 'Tipalti',
              positioning: 'Global mass payments, 196 countries, 120+ currencies, KPMG-validated tax compliance',
              pricing: '$129–149/mo base + $4–5K implementation + per-transaction fees',
              implementation: '6–18 months',
            },
            {
              name: 'Coupa',
              positioning: 'Full procurement suite (PR → PO → invoice → payment + sourcing)',
              pricing: 'Enterprise-priced, custom',
              implementation: '6–18 months',
            },
            {
              name: 'SAP Ariba / Oracle',
              positioning: 'ERP-bundled procurement',
              pricing: 'Bundled with ERP licensing',
              implementation: '12+ months',
            },
          ],
          read: `These are not our competitors today. They show up only when a customer is asking "what's the gold standard?" and we benchmark against them. We win against them on speed-to-value and price, lose on global breadth and enterprise-grade compliance. Don't waste cycles on these unless a deal forces it.`,
          columns: ['name', 'positioning', 'pricing', 'implementation'],
        },
        {
          id: 'p2p-b',
          letter: 'B',
          title: 'US mid-market AP specialists',
          competitors: [
            {
              name: 'Stampli',
              positioning: '"Communication-first" AP — invoice-as-conversation, Billy the Bot AI, 70+ ERP integrations',
              pricing: 'Quote-based, ~$30–100K ARR typical',
              implementation: '4–6 weeks',
              g2: '4.6–4.8',
            },
            {
              name: 'Bill.com (BILL)',
              positioning: 'SMB → lower mid-market AP+AR. QuickBooks/Xero/NetSuite native',
              pricing: 'Per-transaction; ~$45–200/user/mo',
              implementation: '4–8 weeks',
              g2: '4.4',
            },
            {
              name: 'Ramp Bill Pay',
              positioning: 'AP layered on Ramp\'s spend management; "autonomous" AI agents',
              pricing: 'Free tier exists; bundled with cards',
              implementation: 'Days to weeks',
              g2: '4.7',
            },
            {
              name: 'AvidXchange',
              positioning: 'Mid-market vertical-focused (real estate, HOA, construction)',
              pricing: 'Quote-based',
              implementation: '8–12 weeks',
              g2: '4.1',
            },
            {
              name: 'Medius',
              positioning: 'AI-native, Nordic origin, growing in N. America. Strong fraud/controls',
              pricing: 'Quote-based, mid-market enterprise pricing',
              implementation: '8–16 weeks',
              g2: '4.3',
            },
            {
              name: 'Yooz',
              positioning: 'French-origin, document-workflow-first',
              pricing: 'Per-document pricing, mid-market accessible',
              implementation: '4–8 weeks',
              g2: '4.4',
            },
          ],
          read: `This is the cohort we'd compete with if we ever entered the US. **Stampli is the one to study most carefully** — they've defined the modern mid-market AP playbook (fast implementation, strong ERP integrations, AI copilot, invoice-centric collaboration). Their G2 satisfaction is consistently the highest in the category. Their weakness is they're AP-only — no AR, no close, no broader FinOps.`,
          columns: ['name', 'positioning', 'pricing', 'implementation', 'g2'],
        },
        {
          id: 'p2p-c',
          letter: 'C',
          title: 'AI-native challenger wave (most strategically important to track)',
          competitors: [
            {
              name: 'Brex',
              positioning: 'Card + spend + AI accounting API (Jan 2026 launch). "Agentic" finance platform. Owns the upstream transaction.',
              whyItMatters: 'Acquired by Capital One (Jan 2026, $5.15B). Already the financial backbone for OpenAI, DoorDash, Anthropic. Their thesis: own the swipe → the GL is automatic.',
            },
            {
              name: 'Ramp',
              positioning: '$32B valuation. Cards + bill pay + travel + accounting. Aggressive AI rollout.',
              whyItMatters: 'Attacks legacy AP from above (the card spend layer) and pulls bill pay along with it.',
            },
            {
              name: 'Vic.ai',
              positioning: 'AI-first AP autonomous agent. Direct attack on traditional OCR-based AP.',
              whyItMatters: 'Proves the "AI agents do the work, humans review exceptions" model.',
            },
            {
              name: 'Stuut',
              positioning: 'AI-native autonomous AR/collections. Documented 6–10 day go-lives.',
              whyItMatters: 'PerkinElmer reduced overdue invoices 50% → 15% in a year. Same playbook on the AR side.',
            },
          ],
          read: `This cohort isn't in our deals today, but **they're resetting the buyer's expectations of what "automation" means**. The narrative is shifting from "workflow automation with AI features" to "autonomous AI agents with workflow guardrails." If our roadmap doesn't have a clear answer to "where are the agents?" by 2027, we'll be selling against a category that has moved.`,
          columns: ['name', 'positioning', 'whyItMatters'],
        },
        {
          id: 'p2p-d',
          letter: 'D',
          title: 'Southeast Asia mid-market (this is our actual competitive ring)',
          competitors: [
            {
              name: 'Peakflo',
              positioning: 'YC W22, Singapore HQ. AP + AR + cashflow management. PSG-approved (50% Singapore govt subsidy). Voice AI for collections. Multi-currency SGD/MYR/IDR/THB/USD/EUR.',
              pricing: 'Quote-based. PSG cap S$30K. Mid-market pricing.',
              whereTheyWin: 'Local payment rails (FAST, GIRO, PayNow). PDPA compliance. Marketplace commission engine. Direct PSG go-to-market.',
              whereTheyAreWeak: 'Limited R2R/close. Workflow customization narrower than Neoflo. Brand tilts SME more than enterprise mid-market.',
            },
            {
              name: 'Spenmo',
              positioning: 'Singapore-HQ, founded 2019. Spend management + AP. SME-focused.',
              pricing: 'Per-user/month, SMB-friendly',
              whereTheyWin: 'Card + spend + AP bundle for growth-stage',
              whereTheyAreWeak: 'No AR. No close. Going more downmarket.',
            },
            {
              name: 'Volopay',
              positioning: 'India + SEA. Cards + AP + multi-currency.',
              pricing: 'Per-user/month',
              whereTheyWin: 'Multi-currency for SEA SMBs',
              whereTheyAreWeak: 'Same scope as Spenmo — not enterprise mid-market',
            },
            {
              name: 'Aspire / Airwallex',
              positioning: 'Banking-led, embedded payments, light AP',
              pricing: 'Banking margins',
              whereTheyWin: 'Cross-border payments, Singapore/HK',
              whereTheyAreWeak: 'Not real AP/AR/R2R',
            },
          ],
          read: `**Peakflo is the competitor.** Same geography, same buyer, same multi-product thesis (AP + AR), same mid-market positioning, same multi-currency reality, AI-forward, well-funded. Their advantages: 3–4 year head start, PSG distribution channel in Singapore, voice AI for collections, marketplace commission tooling. Our advantages: workflow engine generality (P2P + O2C + R2R on one engine), India engineering depth, Zalora as a flagship enterprise-grade reference. **The blunt assessment:** if we don't have a sharper differentiation story vs Peakflo within 90 days, we will lose deals to them in Singapore. That's the single biggest competitive risk.`,
          columns: ['name', 'positioning', 'pricing', 'whereTheyWin', 'whereTheyAreWeak'],
        },
      ],
    },
    o2c: {
      slug: 'o2c',
      title: 'O2C competitive landscape',
      intro: `O2C is more concentrated than P2P. The market segments cleanly by company size, and the pricing power per deal is higher because the value (DSO compression → cash flow) is directly board-visible.`,
      cohorts: [
        {
          id: 'o2c-a',
          letter: 'A',
          title: 'Enterprise (Fortune 1000)',
          competitors: [
            {
              name: 'HighRadius',
              positioning: 'Gartner Magic Quadrant Leader for Invoice-to-Cash. 800+ enterprise customers. 18+ AI agents across credit, collections, cash app, deductions.',
              pricing: '$35K–$100K+ ARR; six-figure implementation',
              implementation: '3–9 months',
            },
            {
              name: 'Sidetrade',
              positioning: 'EU-origin. Aimie autonomous AI for collections. $7.2T B2B payment data lake. SAP/Oracle deep integration.',
              pricing: 'Enterprise-priced',
              implementation: '4–8 months',
            },
            {
              name: 'Esker',
              positioning: 'French, end-to-end O2C (order entry through collections)',
              pricing: 'Enterprise-priced',
              implementation: '4–9 months',
            },
            {
              name: 'BlackLine Invoice-to-Cash',
              positioning: 'Bolt-on to BlackLine\'s close platform',
              pricing: 'Bundled with BlackLine ARR',
              implementation: '3–6 months',
            },
          ],
          read: `Like P2P enterprise — not our cohort. Reference benchmark only.`,
          columns: ['name', 'positioning', 'pricing', 'implementation'],
        },
        {
          id: 'o2c-b',
          letter: 'B',
          title: 'US mid-market AR',
          competitors: [
            {
              name: 'Versapay',
              positioning: '"Collaborative AR" — buyer/seller shared portal',
              pricing: '$1K–$5K/mo subscription',
              implementation: '4–8 weeks',
              notes: 'Strong on dispute mgmt, weak on autonomous collections',
            },
            {
              name: 'Billtrust',
              positioning: 'Invoicing + payments + cash app, mid-to-upper mid',
              pricing: '$1K–$5K/mo + per-transaction',
              implementation: '3–6 months',
              notes: 'Public company, supplier network advantage',
            },
            {
              name: 'Quadient AR (formerly YayPay)',
              positioning: 'Mid-market, structured collections playbooks',
              pricing: 'Quote-based',
              implementation: '4–8 weeks',
              notes: 'Stronger in upper-mid',
            },
            {
              name: 'Tesorio',
              positioning: 'Cash flow forecasting + collections prioritization',
              pricing: 'Quote-based',
              implementation: '4–8 weeks',
              notes: 'Best for finance-led, forecast-heavy ops',
            },
            {
              name: 'Gaviti / Centime / Stuut',
              positioning: 'AI-native challengers, fast deployment',
              pricing: '$15–$35K ARR (mid-market)',
              implementation: 'Days to weeks',
              notes: 'Stuut goes live in 6–10 days, documented',
            },
          ],
          read: `This is a real market with no clear winner outside enterprise. **Tesorio + Stuut are the most interesting** because they're moving fastest on autonomous AI. If we ever enter the US, they're who we'd benchmark against.`,
          columns: ['name', 'positioning', 'pricing', 'implementation', 'notes'],
        },
        {
          id: 'o2c-c',
          letter: 'C',
          title: 'SEA mid-market AR',
          competitors: [
            {
              name: 'Peakflo',
              positioning: 'Same player as P2P. AR + collections + voice AI. PDPA compliant. Multi-language including Mandarin and regional SEA.',
              notes: '**Direct overlap.** Their 22-day DSO reduction claim within 90 days is a strong outcome story.',
            },
            {
              name: 'Cforia / Local players',
              positioning: 'Smaller scale, jurisdiction-specific',
              notes: 'Not material competitive threats',
            },
          ],
          read: `Same conclusion as P2P. **Peakflo is the competitive frame.** The voice-AI-for-collections angle is something we should evaluate seriously — it's emerging as a category-shaping feature in SEA where customer engagement on calls is culturally normal.`,
          columns: ['name', 'positioning', 'notes'],
        },
      ],
    },
    r2r: {
      slug: 'r2r',
      title: 'R2R competitive landscape',
      intro: `R2R is the most concentrated of the three categories — BlackLine effectively defined the category and FloQast carved out the mid-market. The interesting development is the AI-native ERP wave (Rillet, Campfire, Numeric) which is rebuilding R2R from the GL up.`,
      cohorts: [
        {
          id: 'r2r-a',
          letter: 'A',
          title: 'Enterprise close incumbents',
          competitors: [
            {
              name: 'BlackLine',
              positioning: 'Category leader. Reconciliations + JE + close mgmt + intercompany. NASDAQ:BL. 4,300+ customers.',
              pricing: '$40K–$300K ARR mid-market; $150K–$500K typical; implementation 1.0–1.5x first-year license',
              implementation: '3–6 months mid; 6–9 months enterprise',
            },
            {
              name: 'Trintech (Cadency + Adra)',
              positioning: 'Dual platform — Cadency enterprise, Adra mid-market. 3,800+ customers.',
              pricing: 'Cadency enterprise; Adra ~$30–100K',
              implementation: '3–6 months',
            },
            {
              name: 'OneStream',
              positioning: 'Close + consolidation + planning unified',
              pricing: '$200K–$1M+ ARR',
              implementation: '6–18 months',
            },
            {
              name: 'Workiva',
              positioning: 'SEC filing + SOX + close. 75% of Fortune 500',
              pricing: 'Enterprise-priced',
              implementation: '4–8 months',
            },
          ],
          read: `Enterprise incumbents are not addressable for mid-market. But they set the reference for what \"complete close automation\" looks like.`,
          columns: ['name', 'positioning', 'pricing', 'implementation'],
        },
        {
          id: 'r2r-b',
          letter: 'B',
          title: 'Mid-market close',
          competitors: [
            {
              name: 'FloQast',
              positioning: '"Built by accountants." 2,800+ customers. Excel-native workflow. Best mid-market G2 satisfaction.',
              pricing: '$30–$80K ARR',
              implementation: '4–8 weeks',
              g2: '4.5',
            },
            {
              name: 'Numeric',
              positioning: 'AI-native close, controller-led. Founder-led, growing fast.',
              pricing: 'Mid-market quote',
              implementation: '4–8 weeks',
              g2: 'High user satisfaction',
            },
            {
              name: 'ChatFin',
              positioning: 'AI agents for matching, anomaly detection',
              pricing: 'Mid-market',
              implementation: '4–8 weeks',
              g2: 'Newer entrant',
            },
          ],
          read: `FloQast is the dominant mid-market close player. Anyone trying to compete here has to match its Excel-native workflow + 4–8 week deploy + sub-$80K ARR pricing. Numeric is a serious AI-native challenger to watch.`,
          columns: ['name', 'positioning', 'pricing', 'implementation', 'g2'],
        },
        {
          id: 'r2r-c',
          letter: 'C',
          title: 'AI-native ERP wave (the structural threat)',
          competitors: [
            {
              name: 'Rillet',
              positioning: 'AI-native general ledger. "Zero-day close." Closes from ~20 days → ~2. Native integrations with Brex, Ramp, Stripe, Salesforce.',
              whyItMatters: 'Their thesis: if the GL is AI-native, R2R as a separate category collapses. One Rillet customer scaled ARR 10x while adding only 1 finance hire.',
            },
            {
              name: 'Campfire',
              positioning: 'AI-native ERP for high-growth companies',
              whyItMatters: 'Same thesis. Brex Accounting API launch partner.',
            },
          ],
          read: `R2R is the most strategically uncertain category in our roadmap. **The AI-native ERPs are a category-resetting threat.** If Rillet's "zero-day close" thesis plays out, the workflow layer (close mgmt, recs, JE) becomes commodity — the value moves to the GL itself. **For mid-market SEA in the next 24 months, this won't matter.** Rillet is US-only, English-only, and not addressing multi-currency multi-jurisdiction SEA reality. So **we have a window**.`,
          columns: ['name', 'positioning', 'whyItMatters'],
        },
      ],
    },
  },

  gap: {
    intro: `If you map all the competitors above onto a 2D grid — **Geography (USA / Southeast Asia)** × **Process scope (P2P only / O2C only / R2R only / Multi-process platform)** — the picture becomes clear.`,
    grid: [
      { geography: 'USA mid-market', category: 'P2P only', contents: 'Stampli, Bill, Ramp, Medius, Yooz' },
      { geography: 'USA mid-market', category: 'O2C only', contents: 'Versapay, Billtrust, Tesorio, Stuut' },
      { geography: 'USA mid-market', category: 'R2R only', contents: 'FloQast, Numeric, Trintech Adra' },
      { geography: 'USA mid-market', category: 'Multi-process platform', contents: 'Sparse. Stampli adding P2P features, Coupa enterprise-only', highlight: true },
      { geography: 'Southeast Asia mid-market', category: 'P2P only', contents: 'Peakflo, Spenmo, Volopay' },
      { geography: 'Southeast Asia mid-market', category: 'O2C only', contents: 'Peakflo' },
      { geography: 'Southeast Asia mid-market', category: 'R2R only', contents: 'Empty.', highlight: true },
      { geography: 'Southeast Asia mid-market', category: 'Multi-process platform', contents: 'Peakflo (only)', highlight: true },
    ],
    takeaways: [
      `**Multi-process FinOps platform for SEA mid-market** — Peakflo is the only credible incumbent here, and they don't have R2R. This is the Neoflo opportunity.`,
      `**R2R for SEA mid-market** — essentially unaddressed. BlackLine is too expensive and US/EU-built. FloQast doesn't localize for SEA. AI-native ERPs are a future threat but not present-day competitors.`,
      `**Workflow generality** — every competitor we've listed runs a process-specific data model. Stampli's data model is invoice-centric. HighRadius is AR-centric. BlackLine is GL-centric. **Nobody has a generalized workflow engine that runs P2P, O2C, R2R on shared primitives.** That is exactly Neoflo's platform thesis, and it's what we should defend.`,
    ],
  },

  recommendation: {
    headline: `**Stay sequenced P2P → O2C → R2R. Re-target the buyer to SEA mid-market "multi-entity, multi-process" finance teams. Refuse to compromise on workflow engine generality.**`,
    sequencing: [
      {
        phase: 'Phase 1 — Lock the wedge',
        timeline: 'Now → Q3 2026',
        description: `**Lock P2P invoice processing as the wedge.** Zalora is the proof point. Add **2–3 more SEA mid-market enterprise references** in 2026. Don't expand scope until we have 5+ live customers running P2P invoice STP in production. This is what makes the next sale 10x easier.`,
      },
      {
        phase: 'Phase 2 — Prove the platform',
        timeline: 'Q3 2026 → Q1 2027',
        description: `**Ship O2C billing + cash application + collections (the P0s in Sandeep's prioritization).** This is what proves the platform thesis externally — same workflow engine, second workflow. **This is also where we directly engage Peakflo head-on.** We need to be pricing-competitive and feature-comparable on AR by Q1 2027 or we're permanently behind in Singapore.`,
      },
      {
        phase: 'Phase 3 — The moat',
        timeline: 'Q1 2027 → Q4 2027',
        description: `**Begin R2R with Financial Close Management as P0.** Specifically the close orchestration + JE workflow + reconciliations layer — not consolidation or statutory reporting. Position as "FloQast capability at FloQast-comparable price, but on the same platform that already runs your AP and AR." That's a switching-cost story competitors literally cannot match.`,
      },
    ],
    nonNegotiable: `Every shortcut that hardcodes assumptions about "this is an AP workflow" or "this is an AR-specific data model" will cost us 3x the time when we expand. **The platform thesis is the moat. Without it, we're just another AP tool with mid-market features.** Stage definitions, role mappings, entity scoping, audit trail, integrations, exception handling — these all stay generic. Domain logic lives at the workflow definition layer, not the engine layer.`,
    geography: `We should explicitly **deprioritize the US** for the next 18 months as a target market. The math is brutal: we have no US sales motion, no US references, and 5–10 well-funded incumbents per category with 3–7 year head starts. **Cost of customer acquisition in the US would be 5–10x what it costs in Singapore/Indonesia.** If US deals come inbound — take them, but don't let them dictate the roadmap.`,
    futureVision: `The Brex / Ramp / Rillet / Stuut wave tells us where buyer expectations are heading: **"AI agents do the work, humans review exceptions."** Our 2026 roadmap is workflow-first. Our 2027–2028 roadmap should be agent-first — not as a feature, but as the operating model. We don't need to ship that now, but the architecture decisions we make this year should not preclude it.`,
  },

  risks: [
    {
      number: 1,
      title: 'Peakflo accelerates into R2R before we do.',
      description: `They have the customers, the funding, and the geographic advantage. If they ship a credible close product in 2026, our "multi-process platform" advantage is gone before we get there.`,
      counter: `Watch their roadmap, talk to 3 of their customers, and consider whether O2C → R2R should compress to 9 months instead of 12.`,
    },
    {
      number: 2,
      title: 'AI-native ERPs eat the category from the GL up.',
      description: `If Rillet expands beyond US English-only, the workflow layer thesis weakens.`,
      counter: `Rillet's go-to-market is venture-backed US tech companies. SEA mid-market with multi-jurisdictional GST/SST/PEPPOL/MyInvois reality is at least 3 years from being addressable by them.`,
    },
    {
      number: 3,
      title: 'Zalora stalls or churns.',
      description: `Single-customer dependence on the flagship P2P story.`,
      counter: `The next 2 SEA P2P references are existential. This is the #1 commercial priority.`,
    },
    {
      number: 4,
      title: 'We over-build R2R complexity (consolidation, statutory) and miss the simpler R2R wedge.',
      description: `R2R is a swamp — you can build forever and never ship.`,
      counter: `Lock R2R MVP scope to **close orchestration + JE workflow + recs only.** Consolidation, multi-GAAP, statutory reporting are explicitly out of v1.`,
    },
  ],

  changeMyMind: [
    `Direct customer evidence (3+ conversations) that SEA mid-market specifically wants USA-style point solutions, not a multi-process platform.`,
    `Discovery that Peakflo is shipping R2R in the next 6 months — then we need to compress aggressively or pivot defensively.`,
    `A US enterprise inbound that's willing to be a $500K+ ARR design partner — in that case, follow the money short-term but don't redirect strategy.`,
  ],

  appendix: `This memo is **desk research v1**. It draws from public sources: G2, Gartner Peer Insights, Mordor Intelligence, Forrester market sizing, vendor websites, recent press releases (Brex/Capital One Jan 2026, Brex Accounting API launch Jan 2026, Brex/OpenAI Mar 2026), and competitive teardown blogs from incumbents (Stampli, Peakflo, Stuut, ChatFin).

The biggest holes in this draft:

1. **Direct customer evidence.** The strongest version of this memo includes 5–7 conversations with mid-market finance teams (in SEA + 1–2 in USA) about their tool stack, what they considered, what they rejected, and why.

2. **Real win/loss data.** I don't have hard data on what Peakflo wins and loses on. We should debrief any deal we've competed with them on.

3. **R2R India context.** I have been Singapore-heavy on SEA. The Indian mid-market R2R reality (Ind AS 116 lease accounting, GST reconciliation, MCA filings) deserves its own slice that I haven't done justice to here.

4. **Pricing precision.** Most of the public pricing for enterprise/upper-mid players is quote-based. Numbers in the tables are best-available estimates from third-party benchmarks, not vendor-confirmed.`,
};
