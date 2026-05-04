// Drop into: content/customers.ts
// This is the structured customer evidence data for the /customers route in the prototype

export type CustomerSignal = {
  number: number;
  title: string;
  summary: string;
  evidence: Array<{
    company: string;
    role?: string;
    when?: string;
    quote?: string;
    context?: string;
    outcome?: string;
  }>;
  whatItMeans: string;
};

export type Pattern = {
  title: string;
  description: string;
  data?: Array<{ label: string; value: string }>;
};

export type CustomerEvidenceData = {
  intro: string;
  signals: CustomerSignal[];
  patterns: Pattern[];
  changesToStrategy: Array<{ change: string; signal: string }>;
  openQuestions: string[];
};

export const customerEvidenceData: CustomerEvidenceData = {
  intro: `The Competitive & Strategic Bet Memo v1 was built on desk research — G2, Gartner, vendor websites, market reports. v2 is built on **our actual customer conversations**, every one documented in our Notion. This page is the synthesis: what 12+ buyers told us, what patterns emerged, and how it changed the strategy.`,

  signals: [
    {
      number: 1,
      title: 'The multi-product platform thesis is validated by lost deals',
      summary:
        'Two independent enterprise prospects, same pattern: rejected single-product solutions, walked away from enterprise pricing, asked for the bundle Neoflo is building.',
      evidence: [
        {
          company: 'Hitachi Vantara',
          role: 'Mathew Sia, Controller',
          when: 'November 2025',
          quote:
            'They are more interested in cash application, which we did not have, in Nov.',
          context:
            'Met at SSON Singapore event. Demo done November 14, 2025. Sent NDA, requested samples.',
          outcome:
            'Deal went silent. They walked because we were AP-only when they needed AR.',
        },
        {
          company: 'Spectrum Brands',
          role: 'Utpala Shelar, VP & Global Controller ($2.8B NYSE-listed)',
          when: 'April 2026',
          quote:
            'Evaluated HighRadius for deductions and cash application — got quotes of $1.2–1.5M, couldn\'t justify the ROI. Rejected.',
          context:
            'Warm intro via KPMG overlap. Currently in year 5 of SAP S/4HANA migration. Explicitly flagged AP, AR, deductions, and cash application as "open territory" for outsourcing/automation.',
          outcome:
            'Live opportunity. Introducing Tammy McIntyre (Sr Director AP) and Tom Brighton (Sr Director AR) in 2–3 weeks.',
        },
      ],
      whatItMeans: `Two enterprises, independently, in different geographies, telling us the same thing: **they want AP + AR + deductions + cash app as one bundle, they won't pay enterprise prices for it, and the existing market doesn't serve them.** This isn't theoretical platform thesis — it's documented buyer demand. Every deal we've lost to single-product positioning (Welspun went silent, Hitachi walked) is evidence for the multi-product bet.`,
    },
    {
      number: 2,
      title: 'India enterprise priced itself out',
      summary:
        'Indian enterprise AP is a sub-$5-per-transaction commodity layer. Our cost structure cannot profitably compete there.',
      evidence: [
        {
          company: 'Flipkart',
          role: 'Nishit (close-out conversation)',
          when: 'March 2026',
          quote:
            'They are charging FK ₹15 per RO but Nishit is quite confident that they are making money at ₹15. All of the other vendors they\'re working with are able to make commercials work at lower costs.',
          context:
            'Flipkart evaluated Neoflo for RO automation. Went with Uttara instead.',
          outcome:
            'Loss. They confirmed they are sorted on both P2P and O2C. Possible future opening on analytics dashboard.',
        },
        {
          company: 'Cogniquest (incumbent in market)',
          quote:
            '₹1.6 per invoice (~$0.02), 92% accuracy, includes 3-way match. Same vendor processes claim documents at <₹1 per claim.',
          context: 'Indian vendor processing invoices for enterprise clients.',
        },
        {
          company: 'Nanonets at Zepto (incumbent in market)',
          quote:
            '₹4 per invoice (extraction + 3-way matching), ~70% accuracy across non-standard formats, no implementation fee.',
        },
      ],
      whatItMeans: `Indian enterprise AP is sub-$5-per-transaction commodity pricing. Our cost structure cannot profitably compete there with ARR pricing, and per-transaction pricing at those levels destroys our unit economics. **The Flipkart loss is not a deal we should have priced differently — it's evidence that Indian enterprise isn't the right segment for us.** This signal justified shifting our target geography to SEA mid-market and US warm-channel deals.`,
    },
    {
      number: 3,
      title: 'SAP VIM is the actual enterprise incumbent we\'re displacing',
      summary:
        'Every enterprise prospect in our pipeline runs SAP and has VIM. The competitive frame for enterprise pitches isn\'t "win against Tipalti" — it\'s "replace VIM."',
      evidence: [
        {
          company: 'Coca-Cola',
          context:
            'Pitch structured as 11-dimension head-to-head with SAP VIM: extraction tech, first-pass automation, learning, tax/GL coding, email ingestion, customization overhead, implementation/upgrade complexity, expertise availability, country-specific compliance, fraud detection, AR.',
        },
        {
          company: 'Spectrum Brands',
          context:
            'In year 5 of SAP S/4HANA migration. IT fully constrained. Past vendors who oversold and underdelivered have made IT very cautious.',
        },
        {
          company: 'Welspun',
          context:
            'Indian conglomerate, SAP shop. Demo done Nov 19, 2025. Went silent after multiple follow-ups.',
        },
        {
          company: 'Hitachi Vantara',
          context: 'Runs SAP. Same pattern.',
        },
      ],
      whatItMeans: `**SAP VIM (OpenText Vendor Invoice Management)** is the dominant invoice processing tool inside SAP shops globally. Template-based OCR, weak tax coding, scarce certified ABAP experts, painful upgrades. **VIM is the gap our enterprise prospects are trying to escape.** The deal we win is "lighter than VIM, smarter than VIM, doesn't require IT to migrate off anything, comes bundled with AR/cash app/deductions which VIM doesn't do." v1 of the memo missed this entirely.`,
    },
    {
      number: 4,
      title: 'US is warm-channel-only, not direct sales',
      summary:
        'Two senior US finance professionals said the same thing in different words: cold outreach is dead. The path that works is CPA partnerships and warm intros.',
      evidence: [
        {
          company: 'Boomerang Catapult',
          role: 'Warner Queeny, Principal (ex-Dunzo Founding Partner)',
          when: 'March 2026',
          quote:
            'CFOs are drowning in AI pitches. Cold outreach is nearly dead. You need boots-on-ground with personal relationship-based selling — lunches, warm intros.',
          context:
            'Suggested 80/20 revenue share with mid-market CPA firms as the entry model.',
          outcome: 'Opening Rehmann CPA in Michigan for us.',
        },
        {
          company: 'Spectrum Brands',
          role: 'Utpala Shelar, VP Controller',
          when: 'April 2026',
          quote:
            'US mid-market companies trust local relationships and CPA-style advisors. Cold outreach doesn\'t work.',
          context:
            'Independently said the same thing as Warner without coordination.',
          outcome:
            'Opening Tammy McIntyre and Tom Brighton inside Spectrum. Sharing contacts for shared services professional groups.',
        },
      ],
      whatItMeans: `Two independent senior US buyers told us the same thing without coordination. **The US blocker isn't CAC — it's that the channel itself is broken for our category.** The path that works is CPA-firm partnerships at the mid-market level and warm intros from internal advocates at enterprises. **This isn't "deprioritize US" — it's "US is warm-channel-only, no direct sales motion, opportunistic CPA partnerships only."**`,
    },
    {
      number: 5,
      title: 'SEA mid-market R2R demand is unproven',
      summary:
        'Across every SEA conversation in our pipeline, nobody is pulling on R2R. R2R demand has shown up only in US conversations.',
      evidence: [
        {
          company: 'Zalora',
          context:
            'P2P invoice processing wedge, expanding to O2C billing + cash app. R2R not in scope.',
        },
        {
          company: 'JLand Group (Malaysia)',
          context:
            'Met at SSON Singapore. Process Transformation team (not Finance). Sent invoices and process videos. Trying to get a meeting with Finance head. R2R not raised.',
        },
        {
          company: 'Apparel Group (Dubai)',
          context:
            'CFO Hiren Patadia wants to focus on AI in Finance. Came via Evolv.ai referral. AP/AR scope. R2R not raised.',
        },
        {
          company: 'Agro Corp (Singapore)',
          context:
            'CFO + Group Controller. Exploratory discussion. Partnership potential. R2R not raised.',
        },
      ],
      whatItMeans: `My v1 memo's Q1 2027 R2R timeline assumed SEA mid-market would naturally pull R2R after P2P + O2C. **That's an assumption, not a signal.** The actual SEA mid-market demand pattern is "give me AP and AR done well, on the same platform." R2R might be a 2028 conversation in SEA, not a 2027 one. The platform thesis still holds defensively, but the timing should soften: **build R2R in 2027 if O2C lands and customer pull emerges. Otherwise defer.**`,
    },
  ],

  patterns: [
    {
      title: 'Pipeline is dominantly warm intros, not outbound',
      description:
        'Looking at how each prospect entered our pipeline, roughly all of our documented pipeline came from warm channels. No documented cold-outbound win. This is consistent with what Warner and Utpala said about the US market — and it\'s a structural strategic input, not just a phase thing.',
      data: [
        { label: 'Zalora', value: 'Personal connection (Shivam)' },
        { label: 'Flipkart', value: 'Warm intro (Shreya)' },
        { label: 'JLand Group', value: 'SSON Singapore event' },
        { label: 'Apparel Group', value: 'Evolv.ai referral' },
        { label: 'Agro Corp', value: 'Personal network (Nipun)' },
        { label: 'Coca-Cola', value: 'Internal warm intro' },
        { label: 'Hitachi Vantara', value: 'SSON Singapore event' },
        { label: 'Spectrum Brands', value: 'KPMG overlap (Utpala)' },
        { label: 'Welspun', value: 'SSON Singapore event' },
        { label: 'Warner Queeny', value: 'Personal network' },
      ],
    },
    {
      title: 'NDA cycles are killing momentum',
      description:
        'By the time we\'re ready to demo, the buyer has often cooled. There\'s a process improvement opportunity in our NDA-to-demo flow.',
      data: [
        { label: 'Flipkart NDA', value: 'Jan 14 → late Jan (~3+ weeks)' },
        { label: 'JLand NDA', value: 'Stretched 1+ month before videos shared' },
        { label: 'Hitachi Vantara NDA', value: 'Sent in November, never heard back' },
      ],
    },
    {
      title: 'The SEA wedge is invoice processing + cash application',
      description:
        'Multiple SEA conversations converged on the same combined product ask. Hitachi wanted both, walked when we only had AP. Zalora is buying P2P expanding to O2C cash app. JLand likely in scope once we engage Finance leadership. **The combined bundle is the SEA wedge, not AP alone.** This reinforces the multi-product thesis.',
    },
  ],

  changesToStrategy: [
    {
      change: 'TL;DR rewritten to lead with Hitachi + Spectrum validation',
      signal: 'Signal 1',
    },
    {
      change: 'India explicitly removed from target geography',
      signal: 'Signal 2',
    },
    {
      change: 'New competitive cohort added: SAP-shop VIM displacement',
      signal: 'Signal 3',
    },
    {
      change: '"Deprioritize US" replaced with "US warm-channel-only via CPA firms"',
      signal: 'Signal 4',
    },
    {
      change:
        'R2R timing softened from "Q1 2027 commit" to "build if demand emerges"',
      signal: 'Signal 5',
    },
  ],

  openQuestions: [
    'Win/loss data on Peakflo specifically — we don\'t have a documented loss to Peakflo, only the inferred competitive risk.',
    'Per-transaction unit economics for Neoflo at scale — internal financial analysis not done.',
    'What % of pipeline is warm vs outbound, quantified — pattern looks dominantly warm but not numbered.',
    'Whether SEA mid-market will pull R2R in 24 months — could be timing.',
    'R2R India context — Indian mid-market R2R reality (Ind AS 116, GST reconciliation, MCA filings) deserves its own evaluation.',
  ],
};
