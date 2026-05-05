// Drop into: content/strategy.ts
import type { StrategyData } from './types';

export const strategyData: StrategyData = {
  tldr: `**Stay sequenced P2P → O2C → R2R, but ground the bet in what 12+ buyers actually told us, not desk research.** P2P alone is the largest, most contested, fastest-commoditizing segment globally — Hitachi and Spectrum independently confirmed they will not pay for an AP-only product. Our defensible position is **the multi-workflow FinOps platform for SEA mid-market and SAP-shop enterprise (US warm-channel via CPA partners only)**, with engineering delivered from India for cost leverage in those markets. The wedge is P2P invoice processing (Zalora live; 2 more SEA references existential by Q4 2026). The moat in customer language: **one vendor master, one customer master, one audit trail across AP + AR + close — the things every controller manages today across 3–5 disconnected systems**. The real competitive ring isn't BlackLine or Tipalti — they don't show up in these deals. It's **Peakflo** (4-year head start in SEA, PSG-subsidized in Singapore, voice AI for collections), **SAP VIM / ERP-native AP modules** (the actual incumbent in every SAP-shop conversation), **the AI-native US wave** (Brex/Ramp from above, Vic.ai/Stuut as direct attackers, Rillet from below) which is resetting "automation" to "agents," and the **ASEAN e-invoicing mandate wave** (MyInvois, PEPPOL/InvoiceNow, e-Faktur) which is forced-buying for our exact target segment over the next 24 months and is the single biggest distribution lever we're under-using.`,

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
      intro: `The P2P / AP automation market is **mature, segmented, geographically-sliced**, and shaped more by the buyer's existing ERP than by best-of-breed competition. There are six distinct competitive cohorts we encounter. Our positioning depends entirely on which cohort we benchmark against — and the most important one (ERP-native modules) is the one we lose silently when we don't even get into the room.`,
      cohorts: [
        {
          id: 'p2p-a',
          letter: 'A',
          title: 'Enterprise / Global (we don\'t compete here)',
          competitors: [
            {
              name: 'Tipalti',
              positioning: 'Global mass payments, 196 countries, 120+ currencies, KPMG-validated tax compliance. 2,500+ customers (Roblox, GoDaddy, X). Last raise: $270M Series F at $8.3B (Dec 2021), reportedly down-round / layoffs in 2024.',
              pricing: '~$1.5K/mo base + $4–5K implementation + per-transaction fees. Real ARR for mid-market typically $40–80K.',
              implementation: '6–18 months',
              notes: 'Heavy implementation, opinionated workflow, weakest area is mid-market UX speed. Strong wherever cross-border payment compliance is non-negotiable.',
            },
            {
              name: 'Coupa',
              positioning: 'Full procurement suite (PR → PO → invoice → payment + sourcing + contracts). Acquired by Thoma Bravo Feb 2023 for $8B (private now).',
              pricing: 'Enterprise-priced, custom; typical ARR $200K–$1M+',
              implementation: '6–18 months',
              notes: 'Going further upmarket post-acquisition. Mid-market is being pushed off Coupa to lighter tools — Stampli has captured a lot of this displacement.',
            },
            {
              name: 'SAP Ariba',
              positioning: 'ERP-bundled procurement for SAP shops. The default if you\'re a Fortune 1000 SAP customer.',
              pricing: 'Bundled with SAP licensing; typical $250K–$2M ARR',
              implementation: '12+ months',
              notes: 'Aging UX. SAP is pushing customers toward S/4 + Ariba but the upgrade path is painful. Not relevant for mid-market.',
            },
            {
              name: 'Oracle Fusion AP',
              positioning: 'Native AP for Oracle Fusion ERP customers. Tightly bundled.',
              pricing: 'Bundled with Fusion licensing',
              implementation: '8–12 months',
              notes: 'Same dynamic as Ariba — if the customer is locked into the ERP, they default to the bundled module.',
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
              positioning: '"Communication-first" AP — every invoice is a chat thread between AP, requester, approver, and vendor. Billy the Bot AI suggests GL coding and approvers. 70+ ERP integrations including SAP, Oracle, NetSuite, Sage Intacct, Microsoft Dynamics. 1,500+ customers.',
              pricing: 'Quote-based, ~$30–100K ARR typical. Implementation included or low-cost.',
              implementation: '4–6 weeks (their public commit is 30 days)',
              g2: '4.6–4.8 — consistently the highest in mid-market AP',
              notes: 'Founded 2015, $140M total raised, $720M valuation 2023. Their differentiator isn\'t the AI — it\'s that the invoice page is the unit of collaboration. Every other tool treats invoices as records; Stampli treats them as conversations. AP-only — no AR, no close. **The most important player to study.**',
            },
            {
              name: 'Bill.com (BILL)',
              positioning: 'SMB → lower mid-market AP+AR. NASDAQ:BILL. 460K+ customers. QuickBooks/Xero/NetSuite/Sage Intacct native. Plays a network/Venmo-for-business angle with the BILL Network.',
              pricing: 'Per-transaction + per-user; ~$45–200/user/mo. Most customers <$25K ARR.',
              implementation: '4–8 weeks',
              g2: '4.4',
              notes: 'Most "successful" public AP company by customer count. Limited at the mid-market end — their UX, controls, and ERP integrations are SMB-grade. Not a serious threat in $50–500M revenue accounts.',
            },
            {
              name: 'Ramp Bill Pay',
              positioning: 'AP bundled with Ramp\'s corporate cards + spend management. "Agentic" AI bill pay. $32B valuation. Aggressive go-to-market into mid-market via card displacement.',
              pricing: 'Free tier; bundled with card interchange revenue',
              implementation: 'Days to weeks',
              g2: '4.7',
              notes: 'The strategic threat isn\'t Ramp\'s AP module — it\'s that Ramp owns the upstream card spend and pulls AP along with it. If a CFO standardizes on Ramp for cards + T&E, Ramp Bill Pay is the path of least resistance for AP.',
            },
            {
              name: 'AvidXchange',
              positioning: 'Mid-market vertical AP — real estate, HOA, construction, financial services. NASDAQ:AVDX. 8,000+ customers, 1,200+ supplier integrations.',
              pricing: 'Per-transaction + subscription. Typical ~$15–60K ARR.',
              implementation: '8–12 weeks',
              g2: '4.1',
              notes: 'Strongest in vertical-specific compliance (e.g., HOA assessments). Not a horizontal competitor.',
            },
            {
              name: 'Medius',
              positioning: 'AI-native AP, Nordic origin, growing in North America. Strong fraud detection (anomaly scoring on invoice patterns). EU-strong, especially Sweden / Norway / Germany.',
              pricing: 'Quote-based, ~$50–150K ARR mid-market',
              implementation: '8–16 weeks',
              g2: '4.3',
              notes: 'Their fraud/controls story is best-in-class — uses ML on invoice streams to detect duplicate invoices, vendor impersonation, ghost vendors. Worth studying if we add fraud as a P1.',
            },
            {
              name: 'Vic.ai',
              positioning: 'AI-first AP autonomous agent. Direct attack on traditional OCR-based workflow tools. ICONIQ-led $50M+ raise (2023).',
              pricing: 'Per-transaction; touch ratio (autonomous %) is the key SLA.',
              implementation: '4–8 weeks',
              notes: '**Architectural threat:** Vic.ai\'s thesis is that an AI agent should auto-post 80–95% of invoices with no human touch. Stampli, Bill, AvidXchange all still assume human-in-loop. If Vic.ai\'s autonomy claim holds, the workflow layer becomes thinner and the value migrates to whoever has the highest autonomy %.',
            },
            {
              name: 'Yooz',
              positioning: 'French-origin, document-workflow-first AP. Strong in EU mid-market.',
              pricing: 'Per-document pricing, mid-market accessible',
              implementation: '4–8 weeks',
              g2: '4.4',
              notes: 'Not relevant for SEA or our pipeline. Listed for completeness.',
            },
          ],
          read: `This is the cohort we'd compete with if we ever entered the US directly. **Stampli is the one to study most carefully** — they've defined the modern mid-market AP playbook (4–6 week deploy, 70+ ERP integrations, AI copilot, invoice-as-conversation). G2 satisfaction is consistently the highest in the category. Their structural weakness is **AP-only — no AR, no close**, which is exactly the Hitachi/Spectrum gap. **Vic.ai is the architectural one to watch** — if autonomous AI invoice posting becomes table-stakes, every workflow-centric tool (including ours, including Stampli) has to retrofit toward agent-first. Bill.com is too SMB. AvidXchange is too vertical. Ramp is the upstream-spend threat we should price-watch but not directly fight.`,
          columns: ['name', 'positioning', 'pricing', 'implementation', 'g2', 'notes'],
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
              positioning: 'YC W22, Singapore HQ, founded 2021. AP + AR + cashflow + collections (voice AI in 12+ languages incl. Mandarin/Bahasa/Vietnamese). PSG-approved Pre-Approved Vendor (50% subsidy, S$30K cap). Customers include Lazada, Tonik (Philippines digital bank), Bukalapak, FairPrice. ISO 27001, PDPA, SOC 2. Marketplace commission reconciliation built natively.',
              pricing: 'Quote-based; PSG cap S$30K means net cost to Singapore SMB is ~S$15K. Real ARR for mid-market believed $25–60K.',
              whereTheyWin: 'PSG distribution moat in SG (we genuinely cannot match this without becoming PSG-approved — months of paperwork). Voice AI for collections is category-defining for SEA where phone collections are culturally normal. Marketplace seller commission reconciliation. Multi-currency native (SGD/MYR/IDR/THB/PHP/VND/USD/EUR). Localization for IRAS/LHDN tax filing.',
              whereTheyAreWeak: 'No R2R / close management — biggest scope gap. Workflow customization is narrower (their data model is invoice + collection-centric, less flexible for entity-scoped multi-process workflows). Brand and pricing tilt SME more than enterprise mid-market — Zalora-scale buyers question whether Peakflo can scale to multi-entity multi-jurisdiction. No flagship enterprise customer of Zalora\'s scale.',
              whyItMatters: '**The competitor.** Same geography, same buyer, same multi-product thesis, same multi-currency reality, AI-forward, well-funded. 4-year head start. The PSG gap is the most urgent strategic action item — apply for PSG Pre-Approved status now. Without it, every Singapore deal under S$2M ARR is structurally biased to Peakflo.',
            },
            {
              name: 'Aspire',
              positioning: 'Singapore-HQ business banking + cards + bill pay. Banking-led, embedded payments. Strong cross-border for SG/HK/ID/VN.',
              pricing: 'Banking margins on FX + interchange; software is loss-leader',
              whereTheyWin: 'Cross-border payments, multi-currency wallets, FX margins. SG/HK incorporation flow.',
              whereTheyAreWeak: 'Real AP/AR is light. Treats finance ops as a banking add-on, not the product.',
            },
            {
              name: 'Airwallex',
              positioning: 'Australia-origin, $5.5B valuation. Cross-border banking + cards + bill pay. Aggressive in SEA + ANZ.',
              pricing: 'Banking margins primary, software bundled',
              whereTheyWin: 'Multi-currency banking, FX, global accounts. Cards.',
              whereTheyAreWeak: 'AP/AR/R2R features are checkbox-grade.',
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
          ],
          read: `**Peakflo is the competitor.** Same geography, buyer, multi-product thesis, multi-currency reality, AI-forward, well-funded, 4-year head start. Three concrete actions are existential: (1) **apply for PSG Pre-Approved Vendor status immediately** — this is the single biggest distribution gap and the only one with a defined process; (2) **define our differentiation in customer language**, not architecture language ("one vendor master across AP+AR+close" beats "shared workflow primitives"); (3) **price-test against the S$30K PSG-net Peakflo price point** — we can't be 3x for the same scope. Our genuine advantages are R2R (which they don\'t have), enterprise-grade references (Zalora vs their marketplace SMB book), and India engineering cost leverage allowing more aggressive pricing if we choose to use it. The banking-led players (Aspire, Airwallex) are not core threats — they sell finance ops as a banking add-on. Spenmo and Volopay are going downmarket.`,
          columns: ['name', 'positioning', 'pricing', 'whereTheyWin', 'whereTheyAreWeak'],
        },
        {
          id: 'p2p-e',
          letter: 'E',
          title: 'ERP-native AP modules — the silent default we lose to without knowing',
          intro: `Every conversation with an SAP/Oracle/NetSuite/Microsoft shop has an invisible competitor: their existing ERP\'s native AP module. The "do nothing / use what we have" option. SAP VIM specifically came up in **four of our enterprise conversations** (Coca-Cola, Spectrum, Welspun, Hitachi). This cohort is who we\'re actually displacing.`,
          competitors: [
            {
              name: 'SAP S/4HANA Central Invoice Management (incl. SAP VIM via OpenText)',
              positioning: 'Default invoice processing inside SAP shops. VIM is template-based OCR, weak first-pass automation, painful upgrades, scarce certified ABAP experts. S/4 Central Invoice Management is the modern replacement but adoption is slow.',
              pricing: 'Bundled with SAP licensing or OpenText AddOn',
              implementation: '6–18 months for VIM; longer for S/4 CIM',
              whyItMatters: '**This is the actual incumbent in our enterprise pipeline.** Coca-Cola pitch was structured as 11-dimension head-to-head with VIM. Spectrum is mid-S/4 migration. Welspun and Hitachi run SAP. **Win story:** "lighter than VIM, smarter than VIM, deploys in weeks not months, doesn\'t require IT to migrate off anything, comes with AR + close which VIM can\'t do."',
            },
            {
              name: 'Oracle Fusion AP / Oracle Cloud ERP',
              positioning: 'Native AP for Oracle Fusion customers. Tight bundle but rigid workflow, weak OCR, expensive to customize.',
              pricing: 'Bundled',
              implementation: 'Long; depends on Fusion footprint',
              whyItMatters: 'Same dynamic as SAP. Where the customer is locked in, the default is the bundled module. We compete on speed, UX, and AR/close scope.',
            },
            {
              name: 'NetSuite AP (Bill Capture / SuiteApps)',
              positioning: 'Native AP for NetSuite customers. Bill Capture is OCR-light. Most NetSuite customers run Stampli or Bill.com on top.',
              pricing: 'Bundled OCR; subscription for SuiteApps',
              implementation: 'Days to weeks',
              whyItMatters: 'NetSuite is **the** mid-market ERP for SEA scale-ups. If we don\'t have a clean NetSuite integration with bidirectional sync (vendor master, GL, dimensions), we lose the entire NetSuite-installed segment to Stampli.',
            },
            {
              name: 'Microsoft Dynamics 365 Finance AP',
              positioning: 'Native AP in Dynamics. Capable but generic; usually augmented by ISV add-ons.',
              pricing: 'Bundled',
              implementation: 'Months',
              whyItMatters: 'Dynamics is a meaningful share of mid-market in US, MY, SG. Worth a Dynamics integration roadmap entry.',
            },
            {
              name: 'Workday Financial Management AP',
              positioning: 'Native AP for Workday customers. Modern UX, weak OCR, workflow capable.',
              pricing: 'Bundled with Workday Fin',
              implementation: 'Months',
              whyItMatters: 'Less common in our segment but rising. Workday-shop deals are usually all-Workday.',
            },
            {
              name: 'Acumatica AP',
              positioning: 'Mid-market cloud ERP, growing fast. Native AP is functional, often augmented.',
              pricing: 'Bundled',
              implementation: 'Weeks to months',
              whyItMatters: 'Edge case for our segment. Worth a roadmap stub.',
            },
          ],
          read: `**This cohort is the most under-discussed competitor in our v1 memo.** Every SAP-shop deal we\'ve had — Coca-Cola, Spectrum, Welspun, Hitachi — is structurally a "should we replace VIM?" decision, not a "Stampli vs Tipalti vs Neoflo" decision. The pitch frame has to be **VIM displacement specifically**. The buyer\'s objection is always "but our ERP can do this" — the answer must be: faster deploy, better OCR/agentic autonomy, AR + close in the same platform (which VIM can\'t do at all), and zero IT migration cost. **Action items:** (1) build a VIM-displacement battlecard with the 11 dimensions Coca-Cola asked about; (2) prioritize SAP S/4 + NetSuite integration depth over breadth; (3) quantify "weeks not months" with hard SLA commitment; (4) ship a "comes with AR" demo as standard in every SAP-shop pitch.`,
          columns: ['name', 'positioning', 'pricing', 'implementation', 'whyItMatters'],
        },
        {
          id: 'p2p-f',
          letter: 'F',
          title: 'India regional players — the cohort the buying committee compares',
          intro: `Even when we\'re not targeting India directly (per Signal 2), Indian conglomerates with SEA operations and India-headquartered SEA buyers bring these names into the room. Worth knowing the frame.`,
          competitors: [
            {
              name: 'Zoho Finance Plus',
              positioning: 'Bundle of Zoho Books, Inventory, Invoice, Expense, Subscriptions. Massive India + SEA SMB footprint. Aggressive pricing.',
              pricing: '$249/org/mo for the full suite. Genuinely cheap.',
              implementation: 'Days, self-serve',
              whyItMatters: 'The "give me everything cheap" option for sub-mid-market. They will appear in any cost-comparison conversation. Their weakness: workflow customization, ERP-grade controls, multi-entity scale.',
            },
            {
              name: 'Razorpay X / Razorpay Source-to-Pay',
              positioning: 'Payments-rail-led. India focus, expanding ASEAN. Bill pay + payouts + cards. Acquired Curlec in Malaysia (2022).',
              pricing: 'Banking margins primary',
              whyItMatters: 'Distribution moat in India and Malaysia. Their AP product is light. Threat is upstream payment rails, not workflow.',
            },
            {
              name: 'Recko (acquired by Stripe, 2021)',
              positioning: 'B2B reconciliation engine. Now part of Stripe Revenue & Finance Automation.',
              pricing: 'Stripe-bundled',
              whyItMatters: 'Reconciliation as commodity. Watch as Stripe pushes it into SEA.',
            },
            {
              name: 'Kosh.ai',
              positioning: 'YC-backed, AI-native AP for India mid-market. Per-transaction pricing competitive with Cogniquest/Nanonets.',
              pricing: 'Per-transaction; aggressive',
              whyItMatters: 'Confirms the Indian commodity dynamic. Not a SEA competitor today.',
            },
            {
              name: 'ClearTax (Clear)',
              positioning: 'Tax compliance + e-invoicing rails. India GST mandatory e-invoicing leader. Expanding to SEA mandates.',
              pricing: 'Per-invoice / per-return',
              whyItMatters: '**The structural one to watch.** They are e-invoicing-native, which lines up exactly with the MyInvois / PEPPOL / e-Faktur regulatory wave. If they enter SEA with the same playbook they ran in India GST, they own e-invoicing as a standalone layer below us.',
            },
            {
              name: 'Cogniquest, Nanonets',
              positioning: 'Indian invoice OCR vendors. Sub-$5/invoice unit cost.',
              pricing: '₹1.6–4 per invoice',
              whyItMatters: 'Sets the floor for Indian enterprise per-transaction pricing. Validates Signal 2 (India enterprise priced itself out).',
            },
          ],
          read: `Useful background, not active competition for SEA mid-market. The one to actively watch is **ClearTax** — if they make a serious SEA push on e-invoicing rails, they become a horizontal layer underneath our product. Best response: integrate with them where regulation forces it, partner where possible, otherwise build native. The Indian OCR vendors validate why India isn\'t our market — not why we\'d lose to them in SEA.`,
          columns: ['name', 'positioning', 'pricing', 'whyItMatters'],
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
