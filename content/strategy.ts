// Drop into: content/strategy.ts
import type { StrategyData } from './types';

export const strategyData: StrategyData = {
  tldr: `**The bet, in one line:** Neoflo runs FinOps as a **done-for-you, AI + human managed service** — AP, AR, and close on a single AI-native engine, against one vendor master, one customer master, and one audit trail — for **US and SEA mid-market** finance teams. We are not software you operate; we **own the outcome, SLA-backed**. We land with **P2P + cash application** and expand across the cash cycle. Five claims behind the bet, each with proof and the "why now":

**1. We sell an outcome, not a tool.** *Claim:* the wedge is owning the work — *including the exceptions* — not shipping features a team has to run. *Proof:* buyers reject AP-alone software (Hitachi walked when we were AP-only and they wanted cash app); the exception-heavy 20% is exactly what costs finance teams headcount, and a tool hands that part back to the customer. *Why now:* AI extraction is racing to parity by 2027 — "who runs it and owns the result" is the durable differentiator, not accuracy.

**2. Land with P2P + cash application, then expand to full O2C and R2R.** *Claim:* P2P-only loses — it is the most contested, fastest-commoditizing segment, and buyers want the bundle; the minimum viable entry is invoice processing + cash application. *Proof:* Hitachi (AP-only → walked), Spectrum (rejected a $1.2–1.5M HighRadius quote precisely because they wanted AP + AR + deductions + cash app bundled), Anahita Arora framed the multi-process need explicitly. *Why now:* standalone OCR + workflow tools are squeezed from above (Brex/Ramp free interchange-bundled bill-pay) and below (commodity OCR).

**3. The moat is the cross-workflow data layer + the exception flywheel — not the AI.** *Claim:* one vendor master, one customer master, one audit trail across AP + AR + close — the things every controller manages today across 3–5 disconnected systems — that single-workflow vendors cannot match without a rebuild; and because we *run* the work, **every human-resolved exception trains the AI, so each client's touchless % climbs over time** — a compounding advantage software-you-operate cannot copy. *Proof:* every "did not buy" (Hitachi, Spectrum, Anahita) framed the need as unified / multi-process, not "better AI." *Why now:* AI capability is racing to parity by 2027; the unified-data + exception-flywheel compounding is what survives commoditization of the AI layer.

**4. The US competitive ring is workflow-specific, and we compete on "operation vs tool."** *Claim:* the players that actually show up are P2P (Stampli, Bill, Ramp, Vic.ai), O2C (HighRadius, Esker), and R2R (BlackLine, FloQast) — all software you run; Neoflo is the operation. We do not fight Ramp on cards or compete on a longer feature list. *Proof:* HighRadius prices out enterprise-mid ($1.2M+ → a Spectrum-style reject is a warm lead by definition); Stampli and Bill are AP-only / SMB-anchored; SAP VIM is the silent default in SAP shops (the "vs do nothing" deal). *Why now:* the managed-service frame sidesteps the "will my team adopt the AI" objection that stalls software demos.

**5. Trust + warm distribution is the go-to-market lever.** *Claim:* a sub-2-year-old vendor asking to run a customer's entire AP needs a **trust ramp** (shadow-mode → parallel-run → cutover; SOC 2 + ISO; VPC option) and **warm entry** (CPA / advisor partners, founder network) — cold outbound is dead. *Proof:* every documented win came warm (Spectrum via Big-4 alumni, Boomerang via the Rehmann CPA channel); zero conversions came from cold outbound. *Why now:* warm channels plus a credible trust ramp are the only scalable path into US mid-market, where handing over the whole process is a bigger trust ask than buying a tool.

**Beachhead, in one sentence:** $50–250M-revenue US mid-market companies, multi-entity, on NetSuite or SAP, where the Controller owns the close and an acute AP + cash-application pain exists today — landed via a warm CPA / advisor intro and de-risked with a shadow-mode pilot.

**Two primary markets, two motions:** we target **both US and SEA mid-market**. US runs via a warm CPA / advisor channel; SEA via direct sales, where Peakflo is the incumbent and PSG / MyInvois / Coretax are the local levers. Neither is "secondary" — they are two GTM motions for the same product.

**Existential dependency, 12-month version:** convert Spectrum plus 2 more US mid-market accounts to live, SLA-backed references by Q4 2026. Until then, a thin reference book is a deal-killing risk in every new conversation.`,

  marketSizing: {
    intro: `Three things matter for sizing: how big the global category is, how fast it's growing, and where the dollars actually concentrate. *Sources: the P2P (~$6.9B) and O2C (~$3.8B) figures track Mordor Intelligence (2026) closely; the R2R figure is an internal blend — published "financial close software" estimates vary widely ($1.5B–$8.8B) by scope, so treat ~$5.8B as a midpoint, not a single-sourced number.*`,
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
    segmentNote: `We are not selling to **enterprises** (HighRadius / BlackLine territory) or **SMBs** (Bill.com / QuickBooks territory). We're selling to **US and SEA mid-market: $50M–$250M revenue, 10–50 finance staff, multi-entity, ERP-connected (NetSuite / SAP), currently running on Excel + email + ERP + bandaid SaaS** — and we run it for them as a managed service rather than handing them another tool. Both are primary: US is a warm CPA / advisor-channel motion, SEA is direct sales (Peakflo is the incumbent).

**How much of the TAM is US mid-market?** A rough cut: the three categories total ~$16–17B globally today (P2P ~$6.9B + O2C ~$3.8B + R2R ~$5.8B). North America is ~37–40% of that (~$6–6.6B), and the mid-market band ($50–250M revenue) is roughly a third of the US spend once you strip out enterprise and SMB — so **US mid-market TAM across P2P+O2C+R2R is on the order of ~$2–2.5B today**, growing ~12% CAGR. *Treat this as a back-of-envelope estimate from analyst category sizing + NA-share splits — verify with a bottoms-up (US firms in band × ACV) before using it externally.*

**USA mid-market is over-served — concretely, not as a slogan.** A US mid-market controller has **19–25 viable named vendors** spread across P2P / O2C / R2R, with **5–10 viable options per category**: P2P (Stampli, Tipalti, AvidXchange, Vic.ai, Coupa, Bill, Ottimate, Ramp / Brex Bill Pay), O2C (Versapay, HighRadius mid-market SKU, Billtrust, Esker, Quadient AR, Tesorio, Invoiced), R2R (FloQast, BlackLine mid-market SKU, Trintech Adra, Numeric, Vena, Workiva). Price compression is visible — Coupa was taken private (Thoma Bravo, 2023), AvidXchange was taken private (TPG / Corpay, 2025, $2.2B), Bill mid-market growth is decelerating. Buying decisions are crowded and CAC is rising. But note *what* the crowding is: **single-workflow tools a finance team still has to operate.** See "The gap" for the full grid with sources.

**The opening is the empty cell, not the crowded ones.** Across all those US vendors, the **multi-process platform** column has **0–1 credible players** — and not one sells it as a *done-for-you managed outcome*. Every option above is software you run, in a single workflow. Our right-to-win is the intersection nobody occupies: **AP + AR + close on one engine, run as an SLA-backed managed service**, for US mid-market.

**Southeast Asia is our other primary market — and structurally even more open.** There the vendor count is even thinner — at most 2–3 per category, with only Peakflo spanning multiple workflows (and no full R2R) — so the right-to-win is especially high. SEA runs as a direct-sales motion alongside the US warm-channel motion.`,
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
              positioning: 'Global mass payments, 196 countries, 120+ currencies, KPMG-validated tax compliance. 4,000+ customers (Roblox, GoDaddy, Twitch). Last raise: $270M Series F at $8.3B (Dec 2021); secondary-market valuation marked down to ~$3.1B by 2024 (down-round / layoffs reported).',
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
              positioning: 'SMB → lower mid-market AP+AR. NASDAQ:BILL. ~494K customers (FY2025). QuickBooks/Xero/NetSuite/Sage Intacct native. Plays a network/Venmo-for-business angle with the BILL Network.',
              pricing: 'Per-transaction + per-user; ~$45–200/user/mo. Most customers <$25K ARR.',
              implementation: '4–8 weeks',
              g2: '4.4',
              notes: 'Most "successful" public AP company by customer count. Limited at the mid-market end — their UX, controls, and ERP integrations are SMB-grade. Not a serious threat in $50–500M revenue accounts.',
            },
            {
              name: 'Ramp Bill Pay',
              positioning: 'AP bundled with Ramp\'s corporate cards + spend management. "Agentic" AI bill pay. $44B valuation (Series F, Jun 2026). Aggressive go-to-market into mid-market via card displacement.',
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
              positioning: 'AI-first AP autonomous agent. Direct attack on traditional OCR-based workflow tools. ICONIQ-led $50M Series B (2021) + $52M Series C (2022); ~$115M total raised.',
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
              positioning: 'Cards + bill pay + travel + accounting. Acquired by Capital One for $5.15B (announced Jan 2026, completed Apr 2026) — well below its ~$12.3B 2022 peak. Aggressive AI rollout.',
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
              positioning: 'YC W22, Singapore HQ, founded 2020. AP + AR + cashflow + collections (voice AI in 12+ languages incl. Mandarin/Bahasa/Vietnamese). PSG-approved Pre-Approved Vendor (50% subsidy, S$30K cap). Customers include Lazada, Tonik (Philippines digital bank), Bukalapak, FairPrice. ISO 27001, PDPA, SOC 2. Marketplace commission reconciliation built natively.',
              pricing: 'Quote-based; PSG cap S$30K means net cost to Singapore SMB is ~S$15K. Real ARR for mid-market believed $25–60K.',
              whereTheyWin: 'PSG distribution moat in SG (we genuinely cannot match this without becoming PSG-approved — months of paperwork). Voice AI for collections is category-defining for SEA where phone collections are culturally normal. Marketplace seller commission reconciliation. Multi-currency native (SGD/MYR/IDR/THB/PHP/VND/USD/EUR). Localization for IRAS/LHDN tax filing.',
              whereTheyAreWeak: 'No R2R / close management — biggest scope gap. Workflow customization is narrower (their data model is invoice + collection-centric, less flexible for entity-scoped multi-process workflows). Brand and pricing tilt SME more than enterprise mid-market — Zalora-scale buyers question whether Peakflo can scale to multi-entity multi-jurisdiction. No flagship enterprise customer of Zalora\'s scale.',
              whyItMatters: '**The incumbent in our SEA market.** Same multi-product thesis and multi-currency reality, AI-forward, well-funded, with a head start in Southeast Asia. SEA is one of our two primary markets, so Peakflo is a frequent, direct head-to-head there (in the US ring the competitors are workflow-specific instead). PSG-subsidized pricing is their structural lever; PSG Pre-Approved status is the gap for us to close in SEA.',
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
            {
              name: 'Staple.ai',
              positioning: 'Singapore-HQ, founded 2018. AI-first document extraction for finance — invoices, receipts, bank statements, financial reports, KYC docs. Trained on SEA invoice formats specifically (handwritten Bahasa receipts, multi-language Mandarin/Thai/Vietnamese invoices, scanned PDFs from local SMBs). API-first product; deployed via API + dashboard rather than as full workflow.',
              pricing: 'Per-document API pricing; volume tiers. Closer to Nanonets / Rossum than to Peakflo / Stampli.',
              whereTheyWin: 'Best-in-class accuracy on **unstructured SEA-format invoices** specifically — the documents Stampli and Tipalti\'s OCR struggles with. Multi-language extraction (10+ languages). Used as the extraction layer underneath other workflow products. Strong with banks, BPOs, and large enterprises that have built their own AP workflow.',
              whereTheyAreWeak: '**Not a full AP workflow product.** No 3-way match, no approval routing, no payment automation, no AR. They\'re an extraction primitive, not a competitor for "automate my AP" — but buyers sometimes confuse the two during early evaluation. No close / R2R play.',
              whyItMatters: '**Different competitive frame than Peakflo.** Staple is a horizontal OCR layer that could be used by us, by Peakflo, or by an enterprise building their own. The strategic question is: **build vs partner vs compete on extraction quality**. If our SEA invoice extraction accuracy lags Staple, customers will route documents through Staple before they hit our workflow — which weakens our data moat. **Action: benchmark our SEA-format extraction accuracy against Staple on Zalora\'s actual invoice volume; decide build/partner within 60 days.**',
            },
          ],
          read: `**Peakflo is the incumbent in our SEA market (one of our two primary markets); in the US ring the competitors are workflow-specific instead.** In Southeast Asia they share our multi-product thesis and multi-currency reality and have a head start, so three actions matter there: (1) **apply for PSG Pre-Approved Vendor status** — their structural pricing lever; (2) **define differentiation in customer language**, not architecture language ("one vendor master across AP+AR+close" beats "shared workflow primitives"); (3) **price-test against the PSG-net price point** — we can't be 3x for the same scope. Our genuine advantages over them: full R2R, enterprise-grade references, and the **managed-service model itself** (we own the outcome; they ship software the customer runs). **In our primary US market the competitive ring is workflow-specific — Stampli / Bill / Ramp / Vic.ai (P2P), HighRadius / Esker (O2C), BlackLine / FloQast (R2R) — and we compete on operation-vs-tool, not on a longer feature list.** Banking-led players (Aspire, Airwallex) sell finance ops as a banking add-on; Spenmo and Volopay are going downmarket.`,
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
              positioning: 'SEC filing + SOX + close. 85%+ of Fortune 1,000',
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
              positioning: '"Built by accountants." 2,600+ customers. Excel-native workflow. Best mid-market G2 satisfaction.',
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
    intro: `If you map all the competitors above onto a 2D grid — **Geography (USA / Southeast Asia)** × **Process scope (P2P only / O2C only / R2R only / Multi-process platform)** — the picture becomes clear. The cells are not subjective: the player counts below come from cross-checking US 10-K filings (AvidXchange, Bill, BlackLine, Workiva, Coupa pre-take-private), funding-round disclosures, and analyst coverage (Gartner MQ Procure-to-Pay 2024, IDC MarketScape AR 2024, Ardent Partners ePayables 2024); SEA-side counts come from each vendor's own materials and DealStreetAsia/TechCrunch coverage through late 2025. Where a vendor is "borderline" mid-market or single-customer-anecdote in a region, we've stripped them out — the bar is "viable, fundable, currently selling at $50M–$500M revenue with multi-entity workflow depth."`,
    grid: [
      { geography: 'USA mid-market', category: 'P2P only', contents: '8–10 viable: Stampli, Tipalti, AvidXchange, Vic.ai, Coupa (upper-mid), Bill (lower-mid), Ottimate (vertical), Ramp / Brex Bill Pay (cards-led), Yooz US (borderline)' },
      { geography: 'USA mid-market', category: 'O2C only', contents: '6–8 viable: Versapay, HighRadius (mid-market SKU since 2023), Billtrust, Esker, Quadient AR, Tesorio, Invoiced, Sidetrade US (smaller)' },
      { geography: 'USA mid-market', category: 'R2R only', contents: '5–7 viable: FloQast, BlackLine (upper-mid SKU), Trintech Adra, Numeric, Vena (close + FP&A), Workiva (heavier), ReconArt (niche)' },
      { geography: 'USA mid-market', category: 'Multi-process platform', contents: '0–1 credible (Sage Intacct comes closest as the ERP, not as a workflow vendor)', highlight: true },
      { geography: 'Southeast Asia mid-market', category: 'P2P only', contents: '1 credible (Peakflo); Volopay / Aspire / Spenmo are SMB-skewed cards-led and do not credibly serve multi-entity SEA mid-market AP' },
      { geography: 'Southeast Asia mid-market', category: 'O2C only', contents: '1 credible (Peakflo) + Growfin (Singapore-HQ but US-customer-heavy; partial fit) + Chaser (UK, light SEA presence)' },
      { geography: 'Southeast Asia mid-market', category: 'R2R only', contents: '0 SEA-native vendors. FloQast and BlackLine sell into SEA via APAC enterprise teams; Sage Intacct close is the de facto fallback. Structural gap.', highlight: true },
      { geography: 'Southeast Asia mid-market', category: 'Multi-process platform', contents: '1 (Peakflo) — and they do not have R2R', highlight: true },
    ],
    takeaways: [
      `**The opening is the empty multi-process + managed-service cell.** A US mid-market controller has **19–25 viable single-workflow *tools*** across the three workflows — but the **multi-process platform** cell has **0–1 credible players**, and **none run it as a managed outcome.** The US is over-served on tools and price-compressing (Coupa take-private, AvidXchange take-private, Bill mid-market deceleration); it is empty exactly where we sit — multi-process, done-for-you.`,
      `**A multi-process FinOps platform, run as a managed service, for US + SEA mid-market** — nobody credibly occupies that cell today. That is the Neoflo opportunity. (In SEA — our other primary market — Peakflo is the lone multi-workflow incumbent and has no R2R, an even more open opening.)`,
      `**R2R for SEA mid-market is structurally empty.** No SEA-native mid-market close vendor of meaningful scale exists. BlackLine and FloQast sell in via APAC enterprise teams (too heavy / too expensive). Sage Intacct close is the do-nothing alternative. AI-native ERPs (Rillet, Campfire) are a future threat but not present-day competitors.`,
      `**O2C for SEA mid-market is functionally a single-vendor segment.** Peakflo is the only credible play. Growfin is Singapore-HQ but its customer base is US-heavy and skews lower-mid; not a structural alternative for SEA buyers today. Chaser, Sidetrade have light SEA footprint. This is closer to "uncontested" than the broader market thinks.`,
      `**Workflow generality is the moat that survives commoditization.** Every competitor above runs a process-specific data model: Stampli is invoice-centric, HighRadius is AR-centric, BlackLine is GL-centric. **Nobody has a generalized workflow engine running P2P, O2C, and R2R on shared primitives.** That is the Neoflo platform thesis, and it's what we should defend.`,
      `**There's a separate competitive frame we shouldn't miss: the Human + AI hybrid cohort.** Yarken, Auditoria, Klippa, Topkey, Aegis (acquired by Teleperformance) — and increasingly the BPO incumbents (Genpact, WNS, Sutherland) layering AI on top — operate the same managed-outcome model we do, but mostly outside the FinOps category. They're not in this gap grid because they cross-cut categories rather than slot into one. Conversation Pattern 4 ("BPO disruption window is open NOW") is partly a response to this cohort moving into our space. See "Human + AI hybrid cohort" in Part 3 for the deep dive.`,
    ],
  },

  recommendation: {
    headline: `**Land US + SEA mid-market "multi-entity, multi-process" finance teams with P2P + cash application, run as a managed service; expand P2P → O2C → R2R on one engine. Run two motions — US warm-channel and SEA direct (vs Peakflo). Refuse to compromise on workflow-engine generality.**`,
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
    geography: `**US and SEA mid-market are both primary target markets**, run as two motions. **US** (SAP-shop / NetSuite enterprise mid-market) goes via the warm CPA / advisor channel (Spectrum / Boomerang / Rehmann) — the best fit for the managed-service, multi-process model. **SEA mid-market** is direct sales, where Peakflo is the incumbent and the vendor-density inversion gives a strong right-to-win (see "The gap"). **US scale-ups** (venture-backed tech / SaaS / DTC) stay out of primary scope — cards-led incumbents (Brex / Ramp) own them and single-entity / single-currency reality thins our differentiation. Sequencing in both markets: land with **P2P + cash application**, then expand across the cash cycle to O2C and R2R.`,
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

  appendix: `**Memo provenance.** v1 was desk research. **v2 (current)** integrates direct customer evidence from 12+ documented buyer conversations (Zalora, Spectrum Brands, Hitachi Vantara, Welspun, Coca-Cola, Apparel Group, JLand Group, Agro Corp, Flipkart, Boomerang Catapult / Rehmann CPA, plus competitor / market touchpoints). Sources combined: customer interview transcripts in Notion, public market data (G2, Gartner Peer Insights, Mordor Intelligence, Forrester), vendor websites, regulatory portals (LHDN MyInvois, IMDA InvoiceNow, DGT e-Faktur, BIR EIS), and recent press releases (Brex/Capital One acquisition Jan 2026, Brex Accounting API Jan 2026, Brex/OpenAI Mar 2026).

**Holes still in v2:**

1. **Direct Peakflo win/loss data.** We have inferred competitive risk; we don\'t have a documented loss to Peakflo or a documented win against them. Talking to 3 Peakflo customers + 1 deal they lost is a 90-day action item (#8).

2. **Per-transaction unit economics for Neoflo at scale.** Internal financial analysis to confirm wedge / platform tier pricing holds margin. Currently a guideline; needs modeling.

3. **R2R India-specific context.** Ind AS 116 lease accounting, GST reconciliation under quarterly returns, MCA filings, India-specific consolidation under SEBI rules — the Indian mid-market R2R reality is under-developed in this memo. Needed if we re-enter India for non-AP scope.

4. **Pricing precision on competitor side.** Most enterprise/upper-mid pricing is quote-based. Numbers in tables are best-available estimates from third-party benchmarks (G2 reviews mentioning ARR, Capterra, Gartner Peer Insights, leaked RFP responses) — not vendor-confirmed.

5. **Quantified pipeline patterns.** Pattern 1 ("dominantly warm") is qualitative; we should number it (warm vs outbound %, win rate by channel, ACV by channel) once 6 months of CRM data is in.

6. **R2R workflow content depth.** P2P and O2C process explainers are well-developed. R2R explainer is solid but the Phase 3 product roadmap (close orchestration + JE workflow + recs as MVP) needs the same level of detail with build-vs-partner decisions per sub-workflow before Q3 2026.`,
};
