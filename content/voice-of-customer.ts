// Drop into: content/voice-of-customer.ts
// Synthesized from GTM Home in Notion: Client Insights Analysis (8 meetings),
// Competitive Customer Intelligence Brief (May 2026, 117 companies),
// AP Role Findings (Mar–Apr 2026, 500+ postings), Sales Playbook v1.1,
// Objection Handling Library, ICP Definition, Pricing & Packaging Reference,
// Cold Calling Playbook, Website FAQ.
// This is the buyer-side reality: what they ask, what they push back on,
// what makes them lean in, and what kills the deal.

export type ClientQuestion = {
  question: string;
  frequency: string;
  whoAsked: string[];
  ourResponse: string;
  actionNeeded?: string;
  priority: 'P0' | 'P1' | 'P2';
};

export type LiveObjection = {
  category: string;
  objection: string;
  source: string;
  whatWorked: string;
  playbookGap?: string;
};

export type ConversationPattern = {
  number: number;
  pattern: string;
  prevalence: string;
  description: string;
  evidence: string[];
  whatItMeans: string;
};

export type DisplacementPattern = {
  name: string;
  count: string;
  insight: string;
  evidence: string[];
  outreachAngle: string;
  topTargets: string[];
};

export type DemoMoment = {
  moment: string;
  whyItWorks: string;
  evidence: string[];
};

export type ReplacementTask = {
  task: string;
  appearsInPostings: string;
  whatPostingsSay: string;
  neofloStatus: 'Core' | 'Partial' | 'Gap' | 'HumanOps';
  ifMissing: string;
};

export type ImmediateAction = {
  action: string;
  source: string;
  priority: 'P0' | 'P1';
};

export type VoiceOfCustomerData = {
  intro: string;
  topQuestions: ClientQuestion[];
  liveObjections: LiveObjection[];
  conversationPatterns: ConversationPattern[];
  displacementPatterns: DisplacementPattern[];
  demoAhaMoments: DemoMoment[];
  apReplacementChecklist: {
    intro: string;
    tasks: ReplacementTask[];
    decision: string;
  };
  immediateActions: ImmediateAction[];
};

export const voiceOfCustomerData: VoiceOfCustomerData = {
  intro: `**The buyer-side reality.** Synthesized from 12+ documented client conversations (Zalora, Spectrum, Hitachi, Apparel, JLand, Agro, Welspun, Coca-Cola, Flipkart, Boomerang, Irvins, HSBC Ventures, Anahita Arora) plus the Competitive Customer Intelligence Brief (117 companies / 23 competitors), AP Role Findings (500+ job postings analyzed Mar–Apr 2026), Sales Playbook v1.1, ICP Definition, Cold Calling Playbook, and the Objection Handling Library. Use this to brief any new GTM hire, debug stalled deals, or pressure-test product priorities against what buyers are actually saying.`,

  topQuestions: [
    {
      question: '"How does this integrate with our ERP?"',
      frequency: '7 of 8 client conversations',
      whoAsked: ['Irvins (SAP B1)', 'Welspun', 'HSBC', 'JLand (MS Dynamics)', 'Zalora (SAP)', 'Flipkart (Oracle Fusion)', 'Inspire (Oracle Cloud)'],
      ourResponse: 'Pre-built integrations for SAP, Oracle Cloud, NetSuite, Zoho, QuickBooks, Dynamics. Shadow layer — ERP stays system of record. 4–6 week go-live.',
      actionNeeded: 'Build ERP Integration Guide one-pager covering SAP + Oracle specifically (P1).',
      priority: 'P1',
    },
    {
      question: '"How is this priced?"',
      frequency: '7 of 8 client conversations',
      whoAsked: ['Anahita Arora (sharpest feedback)', 'Welspun (wanted explicit tiers)', 'HSBC (asked about average)', 'Inspire (33K-location scale)', 'all others in some form'],
      ourResponse: '$1.50–$5/invoice outcome-based, not per-seat. Gain-share available. Pilot fee credited to Year 1.',
      actionNeeded: '**P0:** Pricing calculator with worked example. Anahita literally reverse-engineered it herself because the explanation didn\'t land. Build: FTE cost → time on invoices → Neoflo cost → savings, with 2–3 complexity tiers (Simple / Standard / Complex).',
      priority: 'P0',
    },
    {
      question: '"Can AI handle poor scans, handwriting, varied templates?"',
      frequency: '6 of 8 client conversations',
      whoAsked: ['Irvins (Prithvi demoed handwritten live)', 'Welspun (barcode + stamp detection)', 'JLand', 'Flipkart (50–60 RO templates, poor scans)', 'Zalora', 'Inspire'],
      ourResponse: 'Contextual extraction, not rule-based OCR. Handles 50+ templates. Handwritten supported. If a human can\'t read it, AI can\'t either — but partial extraction + human review still saves time.',
      actionNeeded: 'Show worst-case scan examples in every demo. This is the #1 credibility builder.',
      priority: 'P1',
    },
    {
      question: '"How do I know my data is safe?"',
      frequency: '6 of 8 client conversations',
      whoAsked: ['Welspun (on-prem is hard requirement)', 'Anahita (raised proactively — said front-load it)', 'HSBC', 'JLand', 'Inspire (asked SOC 1 Type 2 + audit firm name)', 'Zalora'],
      ourResponse: 'SOC 2 Type II. AES-256 at rest. TLS 1.2+ in transit. PII tokenized at ingest. Data residency: US, EU, APAC, on-prem. 7+ year audit trails.',
      actionNeeded: '**P0:** Compliance one-pager. Per Anahita: lead with this proactively in every call, don\'t wait to be asked.',
      priority: 'P0',
    },
    {
      question: '"Can we do a trial / POC first?"',
      frequency: '6 of 8 client conversations',
      whoAsked: ['Irvins (NDA + data demo)', 'Welspun (wants 50–70% improvement threshold defined upfront)', 'JLand (workshop before POC)', 'Flipkart (sample data exchange started Feb 4)', 'Zalora (UAT planned)', 'Inspire (pilot of few thousand invoices)'],
      ourResponse: 'NDA → sample docs → we process → show results. 1–2 month POC. Fee credited to Year 1. Start with 5–10% of volume.',
      actionNeeded: 'Codify paid POC structure with defined success criteria (P1).',
      priority: 'P1',
    },
    {
      question: '"What about \\$120K–\\$250K vs hiring 2–3 AP specialists at $50–80K each?"',
      frequency: 'Comes up the moment we share pricing',
      whoAsked: ['Implicit in every CFO conversation; explicit in Anahita / Welspun / Inspire'],
      ourResponse: 'Fully loaded AP cost is salary × ~1.4 (benefits, recruiting, mgmt overhead, ramp). Mid-market typical 2–3 specialists = $170–285K/year. Neoflo at 3,000 invoices/month = $72–108K/year. Payback under 90 days.',
      actionNeeded: 'Open every discovery call with the salary delta math, in the prospect\'s currency.',
      priority: 'P0',
    },
    {
      question: '"What happens when AI makes a mistake?"',
      frequency: 'Every CFO call',
      whoAsked: ['Universal — auditor / control framing'],
      ourResponse: 'Confidence scoring on every output. High-confidence auto-posts. Low-confidence routes to human specialists who validate, correct, feed corrections back. AI learns from every correction. 95%+ touchless with 99%+ accuracy on verified outputs. SLAs are risk-protected — miss them, you don\'t pay full price.',
      priority: 'P1',
    },
    {
      question: '"How long does it take to get started?"',
      frequency: 'Every discovery call',
      whoAsked: ['Universal'],
      ourResponse: '4 weeks signed-to-live. Week 1: APIs connected. Week 2: AI ingests 3–6 months of historical data. Week 3: parallel run. Week 4: handoff. 30-day embedded CSM after go-live.',
      priority: 'P1',
    },
    {
      question: '"Your company is small / less than a year old."',
      frequency: 'Every enterprise call',
      whoAsked: ['HSBC ("Would HSBC be too big a client?")', 'Inspire (requested references from similar-scale public cos)'],
      ourResponse: 'Backed by Lightspeed + Peak XV. Founder built $250M+ revenue business. Strong unit economics; profitable per customer from day one. We can take HSBC-scale on if it\'s in scope, but mid-market is our chosen GTM focus.',
      priority: 'P1',
    },
    {
      question: '"How is Neoflo different from a traditional BPO / from AP automation software?"',
      frequency: 'Every first call',
      whoAsked: ['Universal — public-facing FAQ has 2 of 9 questions on this'],
      ourResponse: '**vs BPO:** They scale with people; we scale with AI. Their economics worsen at scale; ours improve. **vs Software:** Software automates routine; the team still handles exceptions, disputes, close. Most customers hire 2–3 FTEs to manage the tool. We own the entire process and the outcome.',
      priority: 'P1',
    },
  ],

  liveObjections: [
    {
      category: 'Competitive / switching',
      objection: '"We already have UiPath / RPA handling 40–50% of invoices."',
      source: 'Zalora (Marie Claire)',
      whatWorked: 'Prithvi reframed: UiPath handles deterministic cases. The remaining 50% is where AI unlocks value. "We complement your RPA, not replace it."',
      playbookGap: 'Add "RPA Complement" framing — common at any mid-market with partial automation.',
    },
    {
      category: 'Competitive / switching',
      objection: '"Oracle Cloud already has embedded AI and computer vision. Why add another layer?"',
      source: 'Inspire Brands (Scott Cane) — Oracle Cloud AI accuracy limited per their notes',
      whatWorked: 'Nipun: "Oracle\'s automation coverage and accuracy are limited. We complement Oracle by handling what it can\'t — complex matching, varied templates, edge cases."',
      playbookGap: 'Add "vs ERP-Embedded AI" competitive section.',
    },
    {
      category: 'Competitive / switching',
      objection: '"OpenAI and others are launching ready-made agents. Why you?"',
      source: 'HSBC Ventures (Sam M George)',
      whatWorked: 'Prithvi: "Nobody stitches things end to end. We do consulting + delivery + outcome-as-a-service. All three together." Sam validated: "A lot of in-house use cases are already failing."',
      playbookGap: 'Add "vs Foundation Model Agents" competitive section.',
    },
    {
      category: 'Competitive / switching',
      objection: '"We\'ve been building some AI tools internally."',
      source: 'Welspun (Sudeep)',
      whatWorked: 'Sudeep candidly admitted internal tools cover ~20%. "Building is 20%, operating at scale with SLAs is 80%." Add: "Your tools handle the 20% you built for. We handle the 80% edge cases."',
    },
    {
      category: 'Readiness / timing',
      objection: '"We\'re doing other software deployments this year. Exploration stage."',
      source: 'Irvins (CNY timing + other rollouts)',
      whatWorked: 'Prithvi did NOT push. "Start with a demo on your actual data, then decide." Aakriti closed gracefully with NDA as zero-commitment next step. Irvins said "sounds interesting, will discuss."',
    },
    {
      category: 'Security / risk',
      objection: '"How should this be configured into SAP? Concerned about governance and direct posting."',
      source: 'Zalora (Agnes + Marie Claire) — strict park-then-post, no exceptions',
      whatWorked: 'Prithvi explained tiered approach — straight-through for simple/deterministic invoices, human review for complex. Rules configurable per vendor.',
      playbookGap: 'Add "Governance & Controls" section to SAP integration docs. Tiered posting model is the answer.',
    },
    {
      category: 'Security / risk',
      objection: '"What keeps data on-prem? Architecture lead needs to sign off."',
      source: 'Welspun (Akhilesh — technical gatekeeper)',
      whatWorked: 'Prithvi committed to sharing security docs before next touchpoint.',
      playbookGap: '**P0:** On-prem architecture one-pager must be ready BEFORE technical-stakeholder calls.',
    },
    {
      category: 'Security / risk',
      objection: '"We need SOC 1 Type 2 audit. Who is your audit firm?"',
      source: 'Inspire (Scott Cane) — SOC 1, not SOC 2 (financial controls)',
      whatWorked: 'Nipun committed to providing audit firm name — hard requirement for enterprise QSR.',
      playbookGap: 'Clarify SOC 1 vs SOC 2 positioning. If SOC 1 not done, be transparent on timeline.',
    },
    {
      category: 'Pricing',
      objection: '"I don\'t fully understand the pricing."',
      source: 'Anahita Arora (CFO) reverse-engineered it: cost of one FTE ÷ time on invoices = what she\'d pay. Also flagged usage-spike concerns.',
      whatWorked: 'Honest acknowledgment + commitment to send a worked example.',
      playbookGap: '**#1 friction point.** Build a calculator, not an explanation.',
    },
    {
      category: 'Pricing',
      objection: '"It\'s too expensive."',
      source: 'Universal',
      whatWorked: '"Your fully-loaded cost for this process is at least double what we charge — salaries, benefits, management overhead, error remediation, turnover. Pilot fee credited to Year 1, so risk is close to zero. Most automation vendors won\'t guarantee SLAs on outcomes. We do."',
    },
    {
      category: 'Scope / fit',
      objection: '"We have a system that already does PO-to-invoice matching in SAP. How does AI help?"',
      source: 'Irvins (Ken + Renu) — SAP PO module already linked',
      whatWorked: 'Prithvi: "AI extracts PO# from invoice, fetches from your system. For the 40% your system can\'t match, AI suggests closest matches and routes exceptions." Reframed from replacement to complement-for-exceptions.',
    },
    {
      category: 'Scope / fit',
      objection: '"We prefer thin-layer integrations before core ERP transformations."',
      source: 'Inspire (Scott Cane)',
      whatWorked: 'Nipun: "First step is to replicate your workflows into AI scripts, minimizing disruption. Process transformation is step two." Also offered manual data input or partial connections if IT restricts.',
      playbookGap: 'Add "mirror-then-transform" positioning for enterprise. Reduces perceived risk.',
    },
    {
      category: 'Build vs buy',
      objection: '"Our CTO wants to build it in-house."',
      source: 'Per ICP Definition this is a **disqualifier**. If it surfaces mid-deal:',
      whatWorked: '"Building the automation is 20% of the problem. Operating it at scale with SLAs is the other 80%. We\'re not an automation tool — we\'re a managed service that owns the outcome." If CTO controls budget and remains a blocker — walk away and revisit when dynamic changes.',
    },
    {
      category: 'Vendor risk',
      objection: '"Your company is small. How do I know you\'ll be around?"',
      source: 'HSBC, Inspire',
      whatWorked: '"Backed by Lightspeed and Peak XV. Founder built $250M+ revenue business. Profitable per customer. Not burning cash to acquire users."',
    },
    {
      category: 'IT / integration',
      objection: '"Will this break our ERP setup?"',
      source: 'Universal',
      whatWorked: '"We integrate with SAP, QuickBooks, Xero, Sage, NetSuite out of the box. Custom-built where needed thanks to in-house engineering. Standard ERP = 4–6 weeks live. We scope integration upfront — no surprises."',
    },
  ],

  conversationPatterns: [
    {
      number: 1,
      pattern: 'Pilot as wedge wins every time',
      prevalence: '8 of 8 prospects',
      description: 'Nobody wants full transformation on first call. Always close with: "Start with 5–10% of volume, see results in 4 weeks."',
      evidence: ['Inspire: "a manageable pilot of a few thousand invoices."', 'Irvins: "NDA + data demo."', 'Flipkart: already exchanging sample data.', 'Zalora: UAT planned'],
      whatItMeans: 'Productize the 90-day pilot. Standardize scope, success metrics, fee, conversion path. Should be a 2-page download, not a custom proposal each time.',
    },
    {
      number: 2,
      pattern: 'End-to-end ownership is the moat',
      prevalence: 'Resonated in every call',
      description: '"Consulting + delivery + outcome-as-a-service" — no competitor does all three.',
      evidence: ['HSBC (Sam): "This is interesting — nobody stitches things together end to end."', 'Inspire (Scott): appreciated SLA-backed, outcome-driven model.', 'Anahita: "Lead with the awesome — saves me time, automates boring backend processes, uses cool technology."'],
      whatItMeans: 'Lead with the outcome ownership story before the technology. The differentiation is the accountability, not the AI.',
    },
    {
      number: 3,
      pattern: 'Controllers are the real entry point, not CFOs',
      prevalence: 'Anahita said directly, validated by every other call',
      description: '"Strategic CFOs like me are too removed from invoice operations. The right first contact is controllers and FinOps heads."',
      evidence: ['Anahita Arora (CFO) explicit guidance', 'Spectrum: VP Controller (Utpala) is the buyer; introducing Sr Director AP + Sr Director AR', 'Welspun: Sudeep (likely VP Finance) is the entry point'],
      whatItMeans: 'Update ICP primary persona from CFO to Controller / VP Finance. CFO frame becomes "two things: resource unlock + capital unlock, in a compliant privacy-led way."',
    },
    {
      number: 4,
      pattern: 'BPO disruption window is open NOW',
      prevalence: 'Confirmed by multiple sources',
      description: 'BPOs are stuck in FTE pricing and can\'t cannibalize their own revenue. The transition to AI-native vendors is starting.',
      evidence: ['HSBC (Sam): "They are still stuck in FTE-based pricing. They will get disrupted. Not yet, but soon."', 'Inspire (Scott): outcome-based model resonated as an alternative to BPO headcount.', 'Competitive Intel: 14 enterprises stuck in BPO lock-in (Wesco/Genpact, AVEVA/Cognizant, Coca-Cola Bottlers/Genpact).'],
      whatItMeans: '"They layered AI on a 30-year labor model. We started with AI, added humans where needed. Run a side-by-side on one process. 90 days." Lead with pilot for BPO accounts.',
    },
    {
      number: 5,
      pattern: '"Mirror then transform" wins enterprise trust',
      prevalence: 'Inspire + Irvins',
      description: 'Enterprises prefer thin-layer integrations before touching core systems.',
      evidence: ['Inspire (Scott): "cautious about replacing existing systems and prefers thin-layer integrations before core ERP transformations"', 'Irvins: comfort with incremental approach'],
      whatItMeans: 'Standard enterprise talk track: "Mirror your workflows into AI scripts first. Transform in step two." Reduces perceived risk.',
    },
    {
      number: 6,
      pattern: 'Working-capital impact sells to CFOs',
      prevalence: 'Used successfully on Irvins',
      description: 'DSO reduction (invoice 3 days faster = 3-day DSO improvement) resonates beyond pure cost savings.',
      evidence: ['Prithvi to Irvins: "If AI can help you collect even 2 days faster, every day matters for working capital."'],
      whatItMeans: 'Use in second meetings when finance leaders are present. Quantify cost-of-capital × days-saved as a board-level metric.',
    },
    {
      number: 7,
      pattern: 'The demo "aha moment" is confidence scoring',
      prevalence: '3 of 3 demos that landed',
      description: 'Side-by-side extraction with color-coded confidence scores is the single moment that builds trust.',
      evidence: ['Anahita: "Very clean UX, very easy to use, technically very cool."', 'Irvins: leaned in during the live extraction demo.', 'Inspire (Scott): the matching logic walkthrough landed.'],
      whatItMeans: 'Restructure every demo: lead with confidence-scored live extraction on customer data. Save the architecture monologue for technical deep-dive.',
    },
    {
      number: 8,
      pattern: 'NDA-to-demo cycle drag is killing momentum',
      prevalence: '3 of 5 enterprise deals',
      description: 'NDA cycles stretch 1+ month, and prospects cool during the gap.',
      evidence: ['Hitachi Vantara: NDA sent November, never heard back', 'JLand: NDA stretched 1+ month before videos shared', 'Flipkart: 3+ weeks from intro to NDA close'],
      whatItMeans: '**Process improvement, not strategy.** Standardize: 7-day NDA-to-demo SLA. Pre-qualified template. CSM owns the cycle.',
    },
  ],

  displacementPatterns: [
    {
      name: 'The Software Ceiling',
      count: '68 of 117 verified competitor customers (58%)',
      insight: 'They bought the AP automation tool. They still have the team. AP software handles routine invoices (60–80% of volume). Exceptions, vendor disputes, 3-way match failures, coding errors, month-end close still require humans.',
      evidence: ['Purple (Stampli): 1,100+ invoices/month, processing time cut 63%. AP team still in place.', 'Brooklinen (Tipalti): saved 1 week/month on AP. Still runs in-house.', 'SONIC Drive-In (Basware): 450K invoices/year, 97% electronic. Still employs 13 AP staff.', 'Lush (Medius): 120K invoices/year, 67% touchless. 33% remains manual.', 'Touch of Modern (Tipalti): saves 4,000 hrs/year. Still has AP headcount.'],
      outreachAngle: '"You automated invoice capture. Your team still handles the exceptions, the disputes, the close. We run the whole process. One fee. No headcount."',
      topTargets: ['Brooklinen ($250M+, D2C NY)', 'Purple ($500M+, 1,100/mo)', 'Revolve ($1.1B, public e-com)', 'Touch of Modern ($200M+)', 'Vivino ($150M+, marketplace, NetSuite)', 'Zola ($100M+, 600K+ invoices/year)', 'Centerfield Media ($200M+)'],
    },
    {
      name: 'The BPO Lock-In',
      count: '14 of 117 verified (12%)',
      insight: 'They outsourced the outcome. They\'re paying 10x what we charge. Multi-year contracts, delivery model unchanged in a decade. Cost-per-transaction stays flat. Onboarding 3–6 months. The BPO has no incentive to automate because revenue depends on headcount.',
      evidence: ['Wesco (Genpact): 3M+ invoices/year, only 40% zero-touch. 1.8M still need manual handling.', 'AVEVA (Cognizant): 1,600 finance professionals across 28 countries.', 'Coca-Cola Bottlers (Genpact): 90% early discount capture. 10% missed = millions on massive spend.'],
      outreachAngle: '"Your provider layered AI on a 30-year labor model. We started with AI, added humans where needed. Run a side-by-side on one process. 90 days."',
      topTargets: ['Wesco ($22B)', 'eBay ($10B)', 'Hyatt ($6.7B)', 'MGM Resorts ($17B)'],
    },
    {
      name: 'The Spend-Stack Sprawl',
      count: '15 of 117 verified (13%)',
      insight: 'They picked Brex or Ramp for cards. AP is a bolt-on. Simple invoice-to-pay works at $50M revenue. Past $200M, multi-entity consolidation, complex matching, month-end close become bottlenecks the bolt-on can\'t handle.',
      evidence: ['DoorDash ($9.6B, marketplace)', 'Allbirds ($250M, D2C)', 'Poshmark ($300M+, marketplace)', 'Coinbase ($6.6B, multi-entity)'],
      outreachAngle: '"Keep Brex for cards. Hand us the back-office complexity they weren\'t built to handle."',
      topTargets: ['DoorDash', 'Allbirds', 'Poshmark', 'Coinbase'],
    },
    {
      name: 'The AR-Side Entry',
      count: '12 of 117 verified (10%)',
      insight: 'They automated collections (HighRadius, Billtrust, Celonis). AP and R2R untouched. Important signal: this is a finance leadership team that buys outcomes and measures ROI. AP pitch is a natural extension.',
      evidence: ['Sysmex (Celonis): recovered $3.4M in overdue AR in one month.', 'GE Healthcare (Celonis): boosted free cash flow by $1.3B.', 'Cintas (Billtrust): $9.6B revenue, automated cash app. AP unaddressed.'],
      outreachAngle: '"You automated the revenue side. The cost side is still running on spreadsheets and headcount. Same ROI logic applies."',
      topTargets: ['Cintas ($9.6B)', '84 Lumber ($7B)', 'GlobalTranz ($2B)', 'Kellogg ($13B, CPG)'],
    },
  ],

  demoAhaMoments: [
    {
      moment: 'Live extraction on a handwritten / poor-scan invoice with confidence scoring visible',
      whyItWorks: 'Buyers expect AI to fail on hard cases. Watching it succeed in real time, with calibrated confidence (not "trust me" but "here\'s what I\'m sure of and here\'s what I\'m not"), reframes the entire credibility conversation.',
      evidence: ['Irvins: "leaned in during the live extraction demo"', 'Anahita: "Very clean UX, very easy to use, technically very cool"'],
    },
    {
      moment: 'Side-by-side comparison of "before" (manual ops) and "after" (Neoflo flow)',
      whyItWorks: 'Anchors the value in the prospect\'s daily reality, not abstract savings. Especially powerful with Sr Director AP/AR who feels the pain personally.',
      evidence: ['Anahita: "Lead with the awesome. Saves me time, automates boring backend processes, uses cool technology."'],
    },
    {
      moment: 'Walkthrough of matching logic + exception routing on the customer\'s own ERP screen',
      whyItWorks: 'Removes the abstraction. Makes the integration story concrete to the IT veto persona who would otherwise block.',
      evidence: ['Inspire (Scott): "the matching logic walkthrough landed"'],
    },
  ],

  apReplacementChecklist: {
    intro: `From the AP Role Findings analysis (March–April 2026, 500+ AP job postings analyzed). Every AP specialist posting describes the same 8 core tasks. **If Neoflo handles all 8, we replace 2–3 heads (a $170–285K/year savings conversation). If we handle 5, the customer still needs one FTE and the pitch weakens to "we reduce headcount by one" ($30K conversation).** This is the structural frame for what "replacing the hire" really requires.`,
    tasks: [
      {
        task: 'Invoice data entry + GL coding',
        appearsInPostings: '~100% of postings',
        whatPostingsSay: '"Enter invoices into [ERP], code to correct GL accounts, departments, cost centers"',
        neofloStatus: 'Core',
        ifMissing: 'Deal-breaker. No value prop without this.',
      },
      {
        task: 'Three-way match (PO / receipt / invoice)',
        appearsInPostings: '~85%',
        whatPostingsSay: '"Perform 3-way match. Resolve discrepancies."',
        neofloStatus: 'Core',
        ifMissing: 'Construction, staffing, 3PL list this as the primary daily task. Must support configurable tolerance, not just exact match.',
      },
      {
        task: 'Approval routing',
        appearsInPostings: '~80%',
        whatPostingsSay: '"Route invoices for approval per company policy. Follow up on outstanding approvals."',
        neofloStatus: 'Core',
        ifMissing: 'Multi-entity companies emphasize complex multi-level chains by amount, department, GL, vendor, project.',
      },
      {
        task: 'Vendor master maintenance',
        appearsInPostings: '~70%',
        whatPostingsSay: '"Set up new vendors. Collect W-9s. Validate TIN. Maintain vendor records."',
        neofloStatus: 'Partial',
        ifMissing: '**Wedge opportunity.** Stampli and Bill.com do not handle W-9 / TIN validation. Full vendor onboarding automation is a SaaS differentiator.',
      },
      {
        task: 'Payment runs (ACH, wire, check)',
        appearsInPostings: '~70%',
        whatPostingsSay: '"Process weekly payment runs. Ensure payments are made on time."',
        neofloStatus: 'Gap',
        ifMissing: '**Customer still runs payments manually.** Neoflo processes invoices, customer still cuts checks. The hire is not replaced.',
      },
      {
        task: 'Month-end close (accruals, reconciliation)',
        appearsInPostings: '~65%',
        whatPostingsSay: '"Prepare AP accruals. Reconcile AP subledger to GL. Support month-end close."',
        neofloStatus: 'Gap',
        ifMissing: '**Controllers spend 3–5 days per close on this.** Without it, the Controller still needs a person for close week.',
      },
      {
        task: '1099 reporting',
        appearsInPostings: '~55%',
        whatPostingsSay: '"Prepare annual 1099 filings. Ensure vendor classifications are correct."',
        neofloStatus: 'Gap',
        ifMissing: '**Retention risk.** Customer who loves Neoflo Jan–Nov still needs an AP clerk in December. This is the gap that causes churn.',
      },
      {
        task: 'Vendor communication',
        appearsInPostings: '~50%',
        whatPostingsSay: '"Respond to vendor inquiries. Resolve payment discrepancies. Handle statement reconciliations."',
        neofloStatus: 'HumanOps',
        ifMissing: '**Judgment required.** Vendor disputes need human intervention. Neoflo\'s managed-services model handles this through HumanOps team, not AI.',
      },
    ],
    decision: `**Audit Neoflo against this table this week. The gap list is the product roadmap for FY2026. No other input is needed.** Metric: replacement ratio. Target 7 of 8 tasks fully automated by Q4 2026. Currently estimated 4–5 of 8.`,
  },

  immediateActions: [
    { action: 'Compliance one-pager (SOC 2, data residency, PII handling, on-prem options) — front-load in every first call.', source: 'Anahita, Welspun/Akhilesh, Inspire/Scott', priority: 'P0' },
    { action: 'Pricing calculator (FTE cost → time on invoices → Neoflo cost → savings, with 2–3 complexity tiers).', source: 'Anahita reverse-engineered it; Welspun/Sudeep wanted explicit tiers', priority: 'P0' },
    { action: 'Restructure demo flow: lead with OUTCOME first ("saves X hours, Y% cost reduction"), then show extraction + confidence scoring, then explain the how.', source: 'Anahita: "Lead with the awesome"', priority: 'P0' },
    { action: 'Add "vs Foundation Model Agents" competitive section.', source: 'HSBC/Sam asked about OpenAI agents', priority: 'P0' },
    { action: 'Add "vs RPA" complement positioning ("We handle the 50% your RPA can\'t").', source: 'Zalora (UiPath 40–50%), Inspire (Oracle Cloud AI limited)', priority: 'P0' },
    { action: 'Add "vs ERP-Embedded AI" ("Oracle/SAP AI handles basics. We handle exceptions and complex matching").', source: 'Inspire/Scott', priority: 'P0' },
    { action: 'Codify paid POC structure (4–6 weeks, 50–70% improvement threshold, fee credited to Year 1).', source: 'Welspun/Sudeep', priority: 'P0' },
    { action: 'On-prem architecture one-pager — must exist BEFORE technical-stakeholder calls.', source: 'Welspun/Akhilesh', priority: 'P0' },
    { action: 'Standardize 7-day NDA-to-demo SLA + customer-data-shape demo template.', source: 'Hitachi (silent during NDA), JLand (1+ month), Flipkart (3+ weeks)', priority: 'P0' },
    { action: 'Build VIM-displacement battlecard with the 11-dimension Coca-Cola structure.', source: 'Coca-Cola, Spectrum, Welspun, Hitachi all SAP-shop deals', priority: 'P0' },
    { action: '"Mirror-then-transform" talk track for enterprise.', source: 'Inspire/Scott, Irvins', priority: 'P1' },
    { action: 'Working capital / DSO impact value prop in CFO collateral.', source: 'Irvins (Prithvi pitched O2C); Zalora (payment cycle)', priority: 'P1' },
  ],
};
