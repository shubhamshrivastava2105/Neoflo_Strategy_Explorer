// Drop into: content/process-stages-deep.ts
// Operational deep-dive for each P2P/O2C/R2R stage in the process explainers.
// Different angle from workflow-deep.ts — that one is competitor-context heavy;
// this one is operational: roles, KPIs, variations, edge cases, regulatory.
// Keyed by `${process}_${number}` matching the stage numbers in p2p.ts / o2c.ts / r2r.ts.

export type StageDeepDive = {
  howItReallyHappens: string;
  whoDoesWhat: Array<{ actor: string; responsibility: string }>;
  howSuccessIsMeasured: string[];
  howItVaries: string[];
  regulatoryAndCompliance: string[];
  keyJudgmentCalls: string[];
};

export const stageDeepDives: Record<string, StageDeepDive> = {
  // ─── P2P ───
  P2P_1: {
    howItReallyHappens: `Onboarding is rarely a single linear flow — it's a relay. AP receives the supplier's documents, but procurement owns the relationship, finance owns the payment terms, legal owns the contract review, and IT owns the system access. Each handoff costs 2–4 days, and at any point a missing field bounces the request back to the start. The "fast" companies eliminate handoffs entirely with a single self-service portal where the supplier inputs once and parallel reviews fire concurrently.`,
    whoDoesWhat: [
      { actor: 'Supplier (vendor)', responsibility: 'Submits KYC, bank, registration, tax docs via portal or email' },
      { actor: 'AP / Procurement Ops', responsibility: 'Reviews completeness, runs duplicate detection, validates GST/PAN/sanctions' },
      { actor: 'Compliance / Risk', responsibility: 'Approves any high-risk vendor (sanctions adjacency, PEP check, sanctioned country)' },
      { actor: 'Finance Controller', responsibility: 'Approves payment terms above standard (e.g., Net 60+, prepayments)' },
      { actor: 'IT', responsibility: 'Issues supplier portal credentials, sets up EDI / API access' },
    ],
    howSuccessIsMeasured: [
      'Time-to-active vendor (target <72h; mid-market typical 2–4 weeks)',
      'First-payment success rate (target >98%; weak when bank verification skipped)',
      'Duplicate-vendor rate in master (target <2%; mid-market typical 5–8%)',
      '% of vendor records with stale documents (GST/MSME expired) — should be near 0 with auto-monitoring',
    ],
    howItVaries: [
      'India: PAN + GST + MSME + bank IFSC; penny-drop verification standard; LEI for >₹50Cr suppliers',
      'Singapore: UEN + GST + bank verification; lighter than India',
      'Indonesia: NPWP + PKP status + bank account name match (very strict)',
      'Malaysia: SSM registration + LHDN tax registration; MyInvois TIN required from 2026',
      'US: EIN + W-9; ACH bank verification; 1099 reporting setup',
      'EU: VAT ID + IBAN; SEPA mandate; GDPR data-handling consent',
    ],
    regulatoryAndCompliance: [
      'FATF / AML — beneficial ownership disclosure required at >25% threshold in most jurisdictions',
      'OFAC / UN / EU sanctions screening must be re-run quarterly minimum',
      'GDPR / PDPA / DPDP — supplier-data retention rules vary by jurisdiction',
      'India MSME: payments to MSME vendors must be made within 45 days under MSMED Act',
      'PEP (Politically Exposed Person) — enhanced due diligence required',
    ],
    keyJudgmentCalls: [
      'Standard vs enhanced KYC — when does a vendor warrant deeper review?',
      'Duplicate vs near-match — same vendor under different legal entity is not always a duplicate',
      'Payment terms — Net 30 vs Net 60 vs prepayment given counterparty risk',
      'Prefer-vendor classification — what justifies preferred status (volume, strategic, sole-source)?',
    ],
  },

  P2P_2: {
    howItReallyHappens: `In practice, requisitions are where finance discipline meets operational urgency. The warehouse manager needs supplies *today*; the approval matrix says it routes through finance and CFO. Mature P2P automation routes intelligently — under-threshold PRs auto-approve against budget, near-threshold escalate, over-threshold require dual approval. The failure mode is approvals via Slack/email that bypass the system entirely (the "PO-flipping" pattern: PR raised after the invoice arrives, defeating the control).`,
    whoDoesWhat: [
      { actor: 'Requestor (warehouse / dept manager)', responsibility: 'Specifies item, quantity, GL code, cost center, suggested vendor' },
      { actor: 'Department Head', responsibility: 'First-level approval against department budget' },
      { actor: 'Finance / Controller', responsibility: 'Cross-checks budget availability and flags variances' },
      { actor: 'CFO', responsibility: 'Approves above threshold (typically ₹5L+ / $10K+)' },
      { actor: 'Procurement', responsibility: 'Negotiates pricing if non-catalog; suggests preferred vendors' },
    ],
    howSuccessIsMeasured: [
      'PR-to-PO cycle time (target <24h; mid-market typical 5–10 days)',
      'Approval queue aging (target <48h; bottleneck approvers can stretch to weeks)',
      '% maverick spend / off-PO spend (target <5%; mid-market typical 15–25%)',
      'Budget-variance flags — POs raised above original budget',
    ],
    howItVaries: [
      'Manufacturing: high-volume catalog purchasing with pre-negotiated rates',
      'Services / professional firms: project-based with PR-per-engagement',
      'CPG / retail: trade-promotion accruals complicate PO commitments',
      'Tech / SaaS-buyer: software subscriptions raise PR/PO discipline questions (recurring procurement)',
    ],
    regulatoryAndCompliance: [
      'SOX (US-listed): PR/PO is the primary control evidence for procurement audit',
      'Tax: certain commitments (capex, leases) trigger different accounting under IFRS-16/ASC-842',
      'Public-sector / govt-affiliated: tender requirements above threshold (varies by jurisdiction)',
    ],
    keyJudgmentCalls: [
      'When to require PR (some catalog purchases under threshold can self-serve)',
      'How to set the approval matrix — depth vs speed tradeoff',
      'When to override budget for urgent operational needs',
      'How to handle blanket POs vs item-specific POs',
    ],
  },

  P2P_3: {
    howItReallyHappens: `Goods receipt is operationally simple but financially critical — it is the trigger for AP. In product businesses it's a barcode scan at the dock; in services businesses it's a service-completion confirmation, which is much messier. The classic failure mode: the warehouse posts GRN late (or in batches) and the invoice arrives at AP with no matching GRN, causing automatic blocking. Best-in-class operations post GRN within hours of physical receipt via mobile scanner.`,
    whoDoesWhat: [
      { actor: 'Warehouse / Receiving team', responsibility: 'Physically receives, counts, inspects quality, posts GRN' },
      { actor: 'Quality team', responsibility: 'Inspects acceptance; raises rejections / debit memos for damaged/short' },
      { actor: 'Requestor (for services)', responsibility: 'Confirms service completion via Service Entry Sheet (SES)' },
      { actor: 'AP team', responsibility: 'Consumes GRN to enable invoice 3-way match' },
    ],
    howSuccessIsMeasured: [
      'GRN posting time after delivery (target <2h; mid-market typical 24–72h)',
      'GR/IR clearing-account aging (target near zero; mid-market 1–3% of total spend persistently)',
      'Quality rejection rate captured (debit memos issued vs claims raised)',
      'Partial-delivery tracking accuracy',
    ],
    howItVaries: [
      'Goods (manufacturing): physical count, barcode/RFID scanning at dock',
      'Services (consulting/professional): SES sign-off via email or mobile by the requestor',
      'Drop-ship (direct-to-customer): GRN happens at customer site, not your dock',
      'Subscription / software: GRN essentially nominal — service provisioned',
    ],
    regulatoryAndCompliance: [
      'GST (India): Input tax credit only available after both GRN posting and invoice receipt',
      'IFRS / GAAP: GR/IR accruals are a balance-sheet item; long-aged items become audit findings',
      'Customs: import GRN must reconcile to bill-of-entry for duty/GST input claims',
    ],
    keyJudgmentCalls: [
      'When to accept partial delivery vs reject (impact on production schedule)',
      'When to raise quality rejection vs negotiate concession',
      'How quickly to post SES for services (under-pressure to delay if budget concerns)',
      'How to handle damaged-in-transit (claim against carrier vs supplier)',
    ],
  },

  P2P_4: {
    howItReallyHappens: `Invoice receipt is no longer one channel — it's a fan-in problem. A typical mid-market AP team handles invoices from email (60–70%), supplier portal (15–25%), EDI (5–15%), and paper/scan (still 5–10% in many markets). Each channel has different format conventions, different metadata fidelity, and different OCR challenges. Modern AP automation normalizes across channels and applies AI to extract structured data. Touch-ratio (the % of invoices auto-posted with no human touch) is the headline metric — Vic.ai claims 80–95%, Stampli 65–80%, SAP VIM <60%.`,
    whoDoesWhat: [
      { actor: 'Supplier', responsibility: 'Sends invoice via preferred channel (email / portal / EDI)' },
      { actor: 'AP Clerk', responsibility: 'Reviews low-confidence extractions, fixes coding, handles unusual formats' },
      { actor: 'AP Lead', responsibility: 'Trains the AI / sets coding rules; monitors touch ratio trends' },
      { actor: 'Tax / GL Owner', responsibility: 'Validates GL coding consistency and tax treatment' },
    ],
    howSuccessIsMeasured: [
      'Touch ratio (% auto-posted without human review) — target 70%+, best-in-class 85%+',
      'OCR accuracy on header (vendor / invoice# / amount) — target 95%+',
      'Time from invoice receipt to ready-for-match (target <1h)',
      'Duplicate-invoice catch rate (both exact and near-match)',
      'GL-coding consistency (same vendor, same coding across clerks)',
    ],
    howItVaries: [
      'Industry: utilities/telcos high-volume, repetitive format, easy to automate. Construction / capex: heterogeneous, harder.',
      'Geography: India e-invoicing IRN-based (structured), US still mostly PDF, EU mixed (PEPPOL standardizing)',
      'Vendor mix: long tail of small vendors send paper/email PDFs; large vendors use EDI',
      'Volume: SMB <500/mo can handle manually; mid-market 500-5000/mo needs OCR; enterprise 5000+/mo needs AI',
    ],
    regulatoryAndCompliance: [
      'India e-invoicing: invoices >₹5cr revenue threshold must have IRN (Invoice Reference Number); QR-coded',
      'Malaysia MyInvois: real-time submission to LHDN via PEPPOL or API since Aug 2024',
      'Singapore InvoiceNow: PEPPOL-formatted required for newly registered businesses from Nov 2025',
      'Indonesia e-Faktur: NPWP validation and DGT submission since 2016',
      'EU VAT: input VAT credit requires structured invoice with valid VAT IDs',
    ],
    keyJudgmentCalls: [
      'When to override AI suggestion vs trust it (training the model long-term)',
      'How to handle near-duplicates (same invoice with one-character difference)',
      'When a credit note is legitimate vs fraud',
      'When to escalate suspicious invoice patterns (timing, amount, unusual vendor)',
    ],
  },

  P2P_5: {
    howItReallyHappens: `The 3-way match itself is mechanical — system compares three numbers within tolerance. Reality is that 30–40% of invoices fail clean match the first time, and the *exception handling* is where AP teams burn their week. Each exception takes 15–30 minutes of detective work: pull up the PO, look at the GRN, message the warehouse, message the buyer, message the vendor, post a credit note, retry. Best-in-class operations have an exception queue UX that loads all the context on one screen and an in-product chat directly with the vendor (Stampli's wedge).`,
    whoDoesWhat: [
      { actor: 'AP Clerk', responsibility: 'Works the exception queue — investigates and resolves' },
      { actor: 'Buyer / Procurement', responsibility: 'Resolves PO-side issues (price variance, change orders)' },
      { actor: 'Warehouse', responsibility: 'Resolves GRN-side issues (missing/late GRN, partial delivery)' },
      { actor: 'Vendor (via portal / email)', responsibility: 'Issues credit notes, revised invoices, or accepts variances' },
      { actor: 'Controller', responsibility: 'Approves overrides on out-of-tolerance items above threshold' },
    ],
    howSuccessIsMeasured: [
      'First-pass match rate (target >80%; mid-market typical 50–70%)',
      'Time-to-resolve exception (target <2h average; weak operations >24h)',
      'Exception aging (no item should sit >5 days)',
      'Exception-to-vendor-call ratio (lower = more in-product resolution)',
      'Reason-code distribution — concentrates effort where it matters',
    ],
    howItVaries: [
      'Tolerance settings: tight (₹100/2%) for high-volume catalog; loose (₹1000/10%) for services',
      'Some companies do 4-way match (PO + GRN + Invoice + Inspection)',
      'Service-only firms run 2-way match (PO + Invoice, no GRN)',
      'Multi-currency adds FX-tolerance variance',
    ],
    regulatoryAndCompliance: [
      'SOX: 3-way match is the auditor\'s primary AP control evidence',
      'GST input tax credit eligibility depends on clean match',
      'Internal audit standards: separation of duties between requestor / approver / payer',
    ],
    keyJudgmentCalls: [
      'When to accept a variance vs push back to vendor',
      'When to issue a debit memo vs reject the invoice',
      'When to override tolerance for a strategic vendor relationship',
      'How aggressively to chase the warehouse for missing GRN',
    ],
  },

  P2P_6: {
    howItReallyHappens: `Approval workflow looks the same as PR/PO approval but the stakes are different — this is the gate before money moves. Mature operations route by amount, GL, vendor risk, and anomaly score; high-confidence low-risk invoices auto-approve, and humans only see the items that need human judgment. The failure mode is "rubber stamp" approvals where 200 invoices land in someone's inbox, they click approve-all without reading, and a fraud invoice slips through. Anomaly detection (10x normal amount, new vendor, weekend timing) is the modern AP control to layer on top.`,
    whoDoesWhat: [
      { actor: 'Cost-center owner', responsibility: 'First-line approval; reviews vs budget' },
      { actor: 'Department head', responsibility: 'Above-threshold approval' },
      { actor: 'Controller / CFO', responsibility: 'Top-end approvals; anomaly review' },
      { actor: 'AP team', responsibility: 'Configures approval rules; handles routing exceptions' },
    ],
    howSuccessIsMeasured: [
      'Approval cycle time (target <8h; weak ops 1–3 days)',
      'SLA breach rate',
      'Anomaly catches per period — surfaced unusual items reviewed deeper',
      'Out-of-office routing failures (auto-delegation working?)',
    ],
    howItVaries: [
      'Hierarchical orgs: deep approval chains (5+ levels)',
      'Flat orgs: lighter approval; risk-based instead of hierarchical',
      'Public sector: legally mandated chains, less flexible',
      'Multi-entity: approval routing by entity, not by amount alone',
    ],
    regulatoryAndCompliance: [
      'SOX delegation-of-authority documentation required',
      'Segregation of duties: same person cannot raise PR + approve PO + post invoice',
      'Audit trail must be immutable and time-stamped',
    ],
    keyJudgmentCalls: [
      'When approval is rubber-stamped, intervene with anomaly flagging?',
      'How to handle out-of-office (delegate vs hold)?',
      'How to surface anomalies without crying-wolf fatigue?',
      'When to require dual approval vs single?',
    ],
  },

  P2P_7: {
    howItReallyHappens: `Payment is the highest-stakes step — this is real money out the door. A typical Friday payment run might process ₹5–50Cr across 200 invoices. The bank-file format must be exactly right (NEFT/RTGS for India, ACH for US, SWIFT MT103 for cross-border, FAST/GIRO/PayNow for SG/MY). Failures are unforgiving: a wrong IFSC code, a closed account, a typo in the beneficiary name — and the payment bounces back days later. Modern AP layers add real-time payment tracking (SWIFT GPI, ACH same-day) and immediate failure alerts.`,
    whoDoesWhat: [
      { actor: 'AP team', responsibility: 'Selects invoices for payment run by due date and discount eligibility' },
      { actor: 'Treasury', responsibility: 'Reviews payment run, ensures bank balance, approves bank file' },
      { actor: 'CFO', responsibility: 'Final approval on large runs (typically >$1M / >₹10Cr)' },
      { actor: 'Bank', responsibility: 'Executes the file, returns confirmation/UTR/reference' },
      { actor: 'Vendor', responsibility: 'Receives payment + remittance advice with invoice references' },
    ],
    howSuccessIsMeasured: [
      'On-time payment rate (target >98%; weak ops 80–90%)',
      'Payment failure rate (target <1%; weak <5% — closed accounts, wrong IFSC)',
      'Discount-capture rate (early-payment discounts taken)',
      'Days Payable Outstanding (DPO) — strategic metric, balanced against vendor relationships',
      'Remittance-advice delivery rate to vendors',
    ],
    howItVaries: [
      'Domestic only: NEFT/RTGS (India), ACH (US), FAST/GIRO/PayNow (SG/MY)',
      'Cross-border: SWIFT MT103 with FX conversion; SWIFT GPI for tracking',
      'Multi-rail: card payments via Brex/Ramp for some categories, ACH for others',
      'Vertical-specific: AvidPay Network for real-estate/HOA construction',
    ],
    regulatoryAndCompliance: [
      'India: TDS deduction at source for certain vendor categories',
      'US: 1099 reporting for non-W2 payments above $600/yr',
      'EU: SEPA mandate management; PSD2 strong customer authentication',
      'Cross-border: FATCA, beneficial ownership for SWIFT, sanctions screening at the bank level',
      'India MSME: 45-day payment requirement under MSMED Act, with interest penalty',
    ],
    keyJudgmentCalls: [
      'Take early-payment discount vs hold cash for working capital?',
      'Pay urgent vendor early vs DPO target?',
      'How aggressive to be on DPO without damaging vendor relationships?',
      'How to handle payment failures — auto-retry vs manual investigation?',
    ],
  },

  // ─── O2C ───
  O2C_1: {
    howItReallyHappens: `Customer onboarding is two workflows fused together — KYC (the same as supplier onboarding, mirror image) and credit decisioning (which is unique to O2C). A new customer wants to buy ₹50K of beans. The credit-bureau check returns a score, the internal model overlays it with industry/geography/payment history, and a credit limit is assigned. Most mid-market firms do this manually because the cost of full automation isn't justified at their volume. But the cost of getting it wrong is bad debt — the difference between Net 30 and Net 60 against a marginal-credit customer is whether you eat the loss or not.`,
    whoDoesWhat: [
      { actor: 'Sales rep', responsibility: 'Brings the customer, advocates for terms; sometimes pressures looser credit' },
      { actor: 'Credit team', responsibility: 'Runs bureau check, assigns limit, monitors utilization' },
      { actor: 'Finance / CFO', responsibility: 'Approves above-policy exceptions; sets credit policy' },
      { actor: 'Customer', responsibility: 'Submits KYC + financials' },
    ],
    howSuccessIsMeasured: [
      'Bad debt as % of revenue (target <1%; weak >3%)',
      'Onboarding cycle time (target <24h for low-risk; mid-market 1–2 weeks)',
      'Credit utilization rate (target 60–80%; over 90% = under-limited; under 30% = over-cautious)',
      'Customer churn at onboarding (rejected applicants)',
      '90+ day past-due as % of AR',
    ],
    howItVaries: [
      'B2B mid-market: bureau-driven (Experian / D&B / CIBIL) + internal scoring',
      'B2B enterprise: financial statement review, references, deeper KYC',
      'B2B SMB: light review, smaller limits, often paid by card',
      'Cross-border: harder (sparse credit data); often require LC or prepayment',
    ],
    regulatoryAndCompliance: [
      'KYC obligations same as supplier onboarding',
      'GDPR / PDPA: credit data is personal data with retention rules',
      'India FEMA: cross-border B2B requires specific compliance documentation',
      'AML: large B2B transactions may need source-of-funds for one-off sales',
    ],
    keyJudgmentCalls: [
      'How aggressive to be on credit limit (revenue vs risk)',
      'When to override sales pressure for looser terms',
      'When to extend credit despite weak bureau score (strategic customer)',
      'How often to re-score (quarterly is standard)',
    ],
  },

  O2C_2: {
    howItReallyHappens: `Order management is ERP territory. The conceptual flow is straightforward (receive order, check inventory, check credit, accept) but the operational reality has dozens of variations: contract pricing vs spot, partial fulfillment, backorder, drop-ship, multi-warehouse routing. We don't replace this layer — we integrate. Our value adds *downstream* of order acceptance: clean billing data, real-time AR view, intelligent collections.`,
    whoDoesWhat: [
      { actor: 'Sales / order entry', responsibility: 'Captures order' },
      { actor: 'Inventory / warehouse', responsibility: 'Confirms availability, reserves stock' },
      { actor: 'Credit team', responsibility: 'Real-time credit-limit check' },
      { actor: 'Customer service', responsibility: 'Handles order changes, cancellations, status' },
    ],
    howSuccessIsMeasured: [
      'Order-to-acknowledge time (target <1h)',
      'Order accuracy (target >99%)',
      'Backorder fill rate',
      'Order cancellation rate',
    ],
    howItVaries: [
      'B2C: high-volume, standard SKUs, fast fulfillment',
      'B2B: contract-priced, complex SKU configurations, longer lead times',
      'Project-based: PO + statement-of-work hybrid',
      'Subscription / recurring: very different flow (no per-order capture)',
    ],
    regulatoryAndCompliance: [
      'Tax determination at order capture (origin/destination)',
      'Export controls (ITAR, EAR) for restricted goods/destinations',
      'Industry-specific (medical devices: lot tracking; pharma: CoA)',
    ],
    keyJudgmentCalls: [
      'Accept order on stock-out and backorder vs reject?',
      'Override credit check for strategic customer?',
      'Partial fulfillment vs hold for complete?',
    ],
  },

  O2C_3: {
    howItReallyHappens: `Order delivery is mostly logistics — the integration point with O2C is the *proof of delivery* (POD). The POD is the legal basis for billing — without it, you can't invoice (in most contracts). PODs flow back from carrier signatures, customer acknowledgments, or service-completion confirmations. The classic failure mode is PODs sitting in the warehouse / driver's clipboard for days before they hit the system, delaying billing and inflating DSO.`,
    whoDoesWhat: [
      { actor: 'Warehouse / fulfillment', responsibility: 'Picks, packs, ships goods' },
      { actor: 'Carrier (or own delivery)', responsibility: 'Delivers, captures POD' },
      { actor: 'Customer', responsibility: 'Signs POD or acknowledges receipt' },
      { actor: 'AR / billing team', responsibility: 'Triggers invoice generation off POD' },
    ],
    howSuccessIsMeasured: [
      'On-time delivery rate (OTD)',
      'POD-to-invoice time (target <24h)',
      'POD capture rate (target >98%; weak <90% leaks DSO)',
      'Damaged-in-transit rate',
    ],
    howItVaries: [
      'B2C: same-day signature/photo via carrier app',
      'B2B truck-shipped: BOL + signed POD',
      'Drop-ship: POD captured at end-customer site',
      'Services: SES/timesheet/deliverable acceptance',
    ],
    regulatoryAndCompliance: [
      'Customs / export documentation for cross-border',
      'Industry-specific delivery records (cold chain for pharma, hazardous materials)',
      'Revenue recognition: POD is the trigger for ASC-606 / IFRS-15 control transfer',
    ],
    keyJudgmentCalls: [
      'Allow POD-less billing for trusted customers (rare, risky)',
      'When to write off short-delivery vs claim against carrier',
      'Manual POD entry from email confirmation acceptable?',
    ],
  },

  O2C_4: {
    howItReallyHappens: `Billing is where O2C meets compliance — particularly in jurisdictions with mandatory e-invoicing (MyInvois MY, InvoiceNow SG, e-Faktur ID). The invoice is generated from delivered orders, contract pricing applied, taxes calculated, and the structured data is submitted to the tax authority for IRN/QR validation *before* it can be sent to the customer. Mature operations auto-bill on POD; weak operations have a billing team manually generating invoices days later. Recurring billing (subscriptions, retainers) is a separate workflow with its own complexities (proration, mid-cycle changes, tier upgrades).`,
    whoDoesWhat: [
      { actor: 'AR / Billing team', responsibility: 'Generates invoice (or auto-trigger from POD)' },
      { actor: 'Tax engine', responsibility: 'Calculates GST/VAT/withholding per jurisdiction' },
      { actor: 'E-invoicing rails', responsibility: 'Submits structured invoice to tax authority, returns IRN' },
      { actor: 'Customer', responsibility: 'Receives invoice via email/portal/EDI/PEPPOL' },
    ],
    howSuccessIsMeasured: [
      'POD-to-invoice cycle time (target <24h)',
      'Invoice error rate (target <1%; weak ops 3–5% drives disputes)',
      'E-invoicing first-submission success (target >95%)',
      '% recurring billing on autopilot (target >95% for SaaS / subscription)',
    ],
    howItVaries: [
      'Goods: invoice on delivery (POD-triggered)',
      'Services: invoice on milestone or T&M against approved timesheets',
      'Subscription: monthly/annual recurring with proration',
      'CPG: trade promotion accruals on invoice; deductions tracked',
    ],
    regulatoryAndCompliance: [
      '**Malaysia MyInvois (mandatory)**: real-time submission, UBL 2.1 format, QR-coded',
      '**Singapore InvoiceNow (PEPPOL)**: required for newly GST-registered from Nov 2025',
      '**Indonesia e-Faktur**: NPWP + DGT submission since 2016',
      '**India GST e-invoicing**: mandatory above ₹5cr revenue threshold',
      '**EU PEPPOL / DDV**: structured invoicing increasingly required',
      'Revenue recognition (ASC-606 / IFRS-15) — invoice timing affects revenue timing',
    ],
    keyJudgmentCalls: [
      'When to invoice partial deliveries vs hold for complete',
      'How to handle billing on disputed deliveries',
      'When credit notes vs revised invoices',
      'How to bill bundles (services + goods + subscription)',
    ],
  },

  O2C_5: {
    howItReallyHappens: `The internal validation gate before invoices are recognized as revenue. Finance verifies the invoice against PO, POD, and contract — the AR-side equivalent of 3-way match. Tax and pricing are double-checked; revenue recognition rules applied (ASC-606 / IFRS-15 control-transfer, performance obligations). Approval routing kicks in for non-standard items. This is also where revenue recognition complexity lives — variable consideration, performance obligations, contract modifications.`,
    whoDoesWhat: [
      { actor: 'Billing team', responsibility: 'Initial invoice creation and submission' },
      { actor: 'Finance / AR Lead', responsibility: 'Validates against PO/POD/contract; checks tax and pricing' },
      { actor: 'Revenue Recognition team', responsibility: 'Applies ASC-606 / IFRS-15 rules; identifies performance obligations' },
      { actor: 'Controller', responsibility: 'Approves non-standard or above-threshold invoices' },
    ],
    howSuccessIsMeasured: [
      'Validation cycle time (target <24h)',
      'Restatement rate (invoices that need correction post-issue)',
      'Revenue recognition errors (audit findings)',
      '% invoices auto-approved vs flagged',
    ],
    howItVaries: [
      'Goods sale: simple — control transfers at delivery',
      'Subscription / SaaS: ratable revenue, performance obligations span period',
      'Services / professional firms: percentage-of-completion or milestone',
      'Bundled deals: split between performance obligations',
    ],
    regulatoryAndCompliance: [
      'ASC-606 (US GAAP) / IFRS-15: 5-step revenue recognition model',
      'SOX: revenue is the highest-risk area for control failures',
      'Industry-specific: software (timing of license recognition), pharma (channel stuffing concerns)',
    ],
    keyJudgmentCalls: [
      'When does control transfer (revenue recognition timing)?',
      'How to allocate transaction price across performance obligations',
      'Variable consideration estimation (rebates, returns, discounts)',
      'Contract modification — new contract vs modification accounting',
    ],
  },

  O2C_6: {
    howItReallyHappens: `AR management is the visibility layer — what does the CFO see, and how often? Mature operations have real-time AR dashboards refreshed daily, drilled by customer / cohort / region / product. Weak operations have monthly Excel exports from the ERP, leaving CFOs blind for 29 days at a time. The metric that matters most is DSO (Days Sales Outstanding) — but DSO can be gamed (timing-of-billing tricks); CEI (Collections Effectiveness Index) is more honest.`,
    whoDoesWhat: [
      { actor: 'AR analyst', responsibility: 'Maintains aging reports, customer dashboards' },
      { actor: 'Controller', responsibility: 'Reviews aging trends, flags at-risk accounts' },
      { actor: 'CFO', responsibility: 'Strategic AR planning, working capital management' },
      { actor: 'Sales', responsibility: 'Aware of customer payment behavior; helps with at-risk accounts' },
    ],
    howSuccessIsMeasured: [
      'DSO (Days Sales Outstanding) — best in class <45; mid-market 60–90',
      'CEI (Collections Effectiveness Index) — % of beginning AR + period AR collected; >85% best-in-class',
      'Aging mix — <30 day % should be 80%+',
      '% AR over 90 days (target <2%)',
      'Bad debt as % of revenue',
    ],
    howItVaries: [
      'B2C: shorter DSO, more transactional',
      'B2B mid-market: 30–60 day terms, focus on collection',
      'Government / public sector: very long DSO (90–180 day standard)',
      'Subscription / SaaS: prepaid annual, low DSO',
    ],
    regulatoryAndCompliance: [
      'Allowance for doubtful accounts: IFRS-9 expected credit loss / CECL (US)',
      'Aging-based provision policy required for audit',
      'Cross-border: FX exposure on AR balances',
    ],
    keyJudgmentCalls: [
      'Bad-debt provision percentage (industry-specific judgment)',
      'When to write off a receivable (typically 180+ days with collection efforts exhausted)',
      'How granular to slice AR (by customer, region, product, cohort)',
      'Proactive vs reactive — when to engage at-risk accounts',
    ],
  },

  O2C_7: {
    howItReallyHappens: `Collections is the make-or-break of AR — every day of DSO compression is real working capital saved. Mature collections is sequenced and personalized: Day 31 polite email, Day 45 firmer email, Day 60 phone call from collector, Day 90 escalation. Voice AI is reshaping this — Peakflo's voice agents handle first-pass collections in 12+ languages, freeing collectors to focus on the hard cases. Collections discipline that respects relationships matters: customers in legitimate dispute should not be dunned (that's how relationships break).`,
    whoDoesWhat: [
      { actor: 'Collections team', responsibility: 'Works the prioritized queue, manages relationships' },
      { actor: 'Voice AI / autodialer', responsibility: 'First-pass calls in local languages' },
      { actor: 'Sales', responsibility: 'Engages strategic accounts; negotiates payment plans' },
      { actor: 'Legal', responsibility: 'Escalation for >90+ day, high-value accounts' },
      { actor: 'Customer', responsibility: 'Responds, makes promise-to-pay, raises dispute' },
    ],
    howSuccessIsMeasured: [
      'DSO compression (days reduced from baseline)',
      'Promise-to-pay capture rate',
      'Promise-to-pay fulfillment rate (PTPs that actually pay)',
      'Per-collector productivity (cases resolved per week)',
      '% AR aged >90 days reducing over time',
    ],
    howItVaries: [
      'SEA: phone collections culturally normal; voice AI especially effective',
      'US: email + portal-driven; voice less common but rising',
      'EU: structured legal escalation; sometimes 3rd-party collections agencies',
      'B2B SMB: relationship-driven; B2B enterprise: process-driven',
    ],
    regulatoryAndCompliance: [
      'India: usury laws limit interest on overdue',
      'US: Fair Debt Collection Practices Act (FDCPA) for consumers; less restrictive for B2B',
      'EU: GDPR limits personal-data use in collection comms',
      'SEA: anti-harassment rules, allowed dialing hours',
      'Voice recording: disclosure required in most jurisdictions',
    ],
    keyJudgmentCalls: [
      'When to escalate (vs continue softer dunning)',
      'When to accept payment plan vs demand full',
      'When to write off vs persist with collection',
      'How to suppress dunning during legitimate disputes',
      'Voice AI vs human collector for which segments',
    ],
  },

  O2C_8: {
    howItReallyHappens: `Cash application is conceptually simple, operationally awful. A customer wires ₹2L with no reference. AR has 5 open invoices for that customer totaling ₹2.8L. Is the wire paying invoice 4? Or invoice 2 + half of invoice 3? Or partial on all five? In mature operations, AI handles 90%+ of this STP (straight-through processing) — HighRadius is the gold standard with 18+ AI agents specifically for cash app. In weak operations, a person manually matches every payment to an invoice, eating 20–30% of the AR team's time.`,
    whoDoesWhat: [
      { actor: 'AR / Cash app team', responsibility: 'Reviews unmatched payments, applies manually' },
      { actor: 'AI cash-app engine', responsibility: 'Auto-matches based on reference, amount, customer history' },
      { actor: 'Customer', responsibility: 'Includes (or fails to include) remittance reference' },
      { actor: 'Bank', responsibility: 'Provides payment feeds with available reference data' },
    ],
    howSuccessIsMeasured: [
      'STP rate (% auto-applied, no human touch) — target >95%, mid-market typical 60–75%',
      'Days of unallocated cash sitting in clearing',
      'Same-day cash application rate',
      'Short-pay capture rate (deductions identified at receipt)',
      'AR ledger accuracy',
    ],
    howItVaries: [
      'Domestic: cleaner remittance data; ACH/NEFT typically has reference',
      'Cross-border: messier; SWIFT remittance fields often truncated',
      'Card payments: include detailed reference',
      'Lockbox (US-specific): scanned remittance with check; OCR-driven',
      'CPG / retail: complex deductions (trade promo, returns, allowances) at receipt',
    ],
    regulatoryAndCompliance: [
      'Multi-currency: FX gain/loss recognition at application',
      'Tax: input/output tax implications when partial-paid',
      'Audit: cash application accuracy is high-priority for revenue recognition audits',
    ],
    keyJudgmentCalls: [
      'Allocate to oldest invoice or customer-specified?',
      'How to handle unidentifiable payments (investigation vs hold)?',
      'Short-pay: chase or accept and write off?',
      'Multi-invoice lump-sum allocation logic when no reference?',
    ],
  },

  O2C_9: {
    howItReallyHappens: `Disputes are where AR meets sales meets ops. Customer says the goods were stale, the price was wrong, the delivery was short, the bill is incorrect. Without a shared system of record, disputes sit in email threads for weeks and the receivable ages. Mature operations have a single dispute case-management system that loops in sales (pricing), ops (quality), and finance (billing) with SLAs and full audit trail. CPG/retail has a particularly painful sub-workflow — *deductions* — where customers reduce payment for trade promotions, returns, and allowances; HighRadius monetizes heavily on this.`,
    whoDoesWhat: [
      { actor: 'Customer', responsibility: 'Raises the dispute (inbound) or short-pays with reason' },
      { actor: 'AR analyst', responsibility: 'Triages the dispute, routes to right owner' },
      { actor: 'Sales', responsibility: 'Owns pricing disputes; negotiates resolution' },
      { actor: 'Operations', responsibility: 'Owns quality / delivery / quantity disputes' },
      { actor: 'Finance / Billing', responsibility: 'Owns billing-error disputes; issues credit notes' },
    ],
    howSuccessIsMeasured: [
      'Average dispute resolution time (target <7 days, mid-market typical 14–30)',
      'Dispute volume per ₹1Cr / $1M of revenue',
      '% disputes resolved in customer\'s favor (calibrates billing accuracy)',
      'Aged disputes (none should sit >30 days)',
    ],
    howItVaries: [
      'CPG / retail: high deduction volume (trade promo, slotting, returns); requires deductions module',
      'B2B mid-market: lower volume, relationship-driven resolution',
      'B2B subscription: prorations, mid-cycle changes drive disputes',
      'Government / public sector: long, formal dispute processes',
    ],
    regulatoryAndCompliance: [
      'Revenue recognition impact: disputed revenue may need to be reclassified',
      'Industry-specific (e.g., pharma chargebacks, defense FAR clauses)',
      'Tax implications of credit notes',
    ],
    keyJudgmentCalls: [
      'Issue full credit vs negotiate vs reject?',
      'When to escalate to legal vs continue commercial dialogue?',
      'Standard credit-issuance threshold (auto-issue under $X)',
      'How to balance customer relationship vs revenue protection?',
    ],
  },

  // ─── R2R ───
  R2R_1: {
    howItReallyHappens: `Pre-close cutoff is a coordination problem. The accounting calendar says "books close April 8 for March." But sub-ledgers live in different systems, owned by different teams, and freeze at different times. AP keeps posting March invoices into early April "because they came in late." Payroll won\'t accrue until they have final timesheets. Inventory counts are still being adjusted. The controller's job is to enforce the cutoff and accrue for everything that didn't make it into the sub-ledger but belongs to the period. **Cross-process advantage:** as the system of record for AP and AR, our cutoff data is real-time; standalone close tools depend on stale ERP feeds.`,
    whoDoesWhat: [
      { actor: 'Controller', responsibility: 'Enforces cutoff, coordinates sub-ledger leads, signs off on accruals' },
      { actor: 'AP Lead', responsibility: 'Confirms all in-period invoices entered or accrued (GR/IR)' },
      { actor: 'AR Lead', responsibility: 'Confirms all delivered orders billed' },
      { actor: 'Payroll', responsibility: 'Accrues for late-period worked-but-unpaid hours' },
      { actor: 'Inventory team', responsibility: 'Confirms physical counts, adjusts for shrinkage' },
      { actor: 'Subsidiaries', responsibility: 'Confirm all intercompany positions match HQ' },
    ],
    howSuccessIsMeasured: [
      'Cutoff confirmation completion by Day 1 of close',
      'Number of post-cutoff entries (target near zero)',
      'Sub-ledger to GL tie at cutoff (must be 100%)',
      'GR/IR accrual quality (matches reality)',
    ],
    howItVaries: [
      'Mid-market mono-entity: simpler — one ERP, fewer sub-ledgers',
      'Multi-entity / multi-currency: complex — each entity\'s cutoff needs to align',
      'Multi-GAAP: parallel close runs (Local GAAP + IFRS / US GAAP)',
      'Public companies: tighter SOX deadlines',
    ],
    regulatoryAndCompliance: [
      'SOX: cutoff is a key audit area',
      'Tax cutoff differs from accounting (some jurisdictions)',
      'IFRS / US GAAP: revenue / expense matching principle drives cutoff rigor',
      'India: GST returns are monthly (GSTR-3B due 20th); affects AP/AR cutoff timing',
    ],
    keyJudgmentCalls: [
      'How aggressive on cutoff enforcement vs operational reality?',
      'Materiality threshold for accruals',
      'When to re-open sub-ledger for late entry vs accrue and let it hit next period',
      'Intercompany matching tolerance (small variances accepted)',
    ],
  },

  R2R_2: {
    howItReallyHappens: `JEs are where accounting judgment lives. Every accrual has a story (rent for the period not yet billed, FX revaluation, lease amortization, deferred tax). Each JE has a preparer (typically a senior accountant), a reviewer, and an approver. The audit trail must show who calculated, who reviewed, who approved, and what evidence was attached. Reality: most mid-market companies maintain JE templates in Excel that get re-prepared every month from scratch instead of refreshed-with-data. The high-leverage modernization is template-driven recurring JEs that auto-populate from sub-ledger data.`,
    whoDoesWhat: [
      { actor: 'Senior Accountant (preparer)', responsibility: 'Calculates entry, attaches evidence, drafts JE' },
      { actor: 'Manager (reviewer)', responsibility: 'Checks math, GL coding, reasonableness' },
      { actor: 'Controller (approver)', responsibility: 'Signs off; posts to GL' },
      { actor: 'CFO', responsibility: 'Top-side adjustments and material judgment calls' },
    ],
    howSuccessIsMeasured: [
      '# of JEs per period (mid-market typical 30–60)',
      'JE cycle time prep-to-post (target <2 days)',
      '% recurring JEs from templates (target >80%; weak <50%)',
      'Audit findings on JE evidence (target zero)',
      'Anomaly rate (unusual entries that should be flagged)',
    ],
    howItVaries: [
      'Asset-heavy (manufacturing, real estate): more depreciation / amortization JEs',
      'Multi-entity: FX revaluation JEs for foreign-denominated balances',
      'Public companies: deferred tax, stock-comp expense, more SOX rigor',
      'Subscription / SaaS: deferred revenue + ratable revenue JEs are central',
    ],
    regulatoryAndCompliance: [
      'SOX: JE workflow audit-trail is a key control',
      'IFRS 16 / ASC 842: lease accounting JEs (right-of-use asset, amortization)',
      'Stock-based comp: ASC 718 / IFRS 2',
      'Deferred tax: IAS 12 / ASC 740',
    ],
    keyJudgmentCalls: [
      'Materiality for accrual estimation',
      'Period-end estimates (bonus, bad debt, returns) — methodology and reasonableness',
      'When to true-up prior-period estimates',
      'Top-side adjustments: when justified vs control bypass',
    ],
  },

  R2R_3: {
    howItReallyHappens: `Reconciliations are the single biggest time sink in close. For a mid-market company with two entities, expect 25–50 separate reconciliations: bank accounts (one per account per entity), AR sub-ledger, AP sub-ledger, fixed assets, inventory, prepaids, accruals, deferred revenue, lease liability, payroll liability, intercompany, and deferred tax. Each requires a preparer, a reviewer, and supporting documentation. Auto-matching with ML handles 80%+ of lines in mature operations; the human work concentrates on the reconciling items (deposits in transit, GR/IR open, credit memos posted to one side but not the other).`,
    whoDoesWhat: [
      { actor: 'Accountant (preparer)', responsibility: 'Pulls GL + source data, runs auto-match, documents reconciling items' },
      { actor: 'Senior Accountant (reviewer)', responsibility: 'Reviews logic, evidence, aging items' },
      { actor: 'Controller (approver)', responsibility: 'Signs off on reconciliation' },
      { actor: 'External Auditor', responsibility: 'Reviews reconciliations as primary close evidence' },
    ],
    howSuccessIsMeasured: [
      'Auto-match rate (target >85%; mid-market typical 50–70%)',
      'Reconciliation cycle time (target <2 days; weak ops 4–8 days)',
      '% reconciliations completed by Day 5',
      'Aged reconciling items >30 days (target zero; weak ops accumulate)',
      'Audit findings (reconciliations that don\'t reconcile)',
    ],
    howItVaries: [
      'Mid-market: 25–50 recs',
      'Multi-entity enterprise: 100s',
      'Banks / financial services: thousands of recs (per-account, daily)',
      'Stripe / payment processor: high-volume transaction recs',
    ],
    regulatoryAndCompliance: [
      'SOX: reconciliations are a primary audit control',
      'Bank-recon evidence retention: 7 years typical',
      'Tax recs (input GST, TDS) drive return filings',
      'Intercompany recs: transfer-pricing audit relevant',
    ],
    keyJudgmentCalls: [
      'Tolerance for unexplained variance (small differences as "timing")',
      'Aging reconciling items: when to write off?',
      'Frequency: monthly vs quarterly for low-activity accounts?',
      'Auto-match confidence threshold (lower = more matched but more risk)',
    ],
  },

  R2R_4: {
    howItReallyHappens: `Review and sign-off is the most senior step in close. After all JEs are posted and recs are done, the trial balance is locked. The controller runs flux analysis — comparing every P&L and BS line to prior month, prior year, and budget — and writes a commentary explaining each material variance ("Marketing spend +42% vs Feb because of International Coffee Day campaign"). The CFO reviews, asks questions, requests adjustments. Top-side adjustments at this stage are dangerous because they bypass control workflows. AI-generated draft flux commentary is the obvious modern lift — Numeric is shipping it; FloQast adding it.`,
    whoDoesWhat: [
      { actor: 'Controller', responsibility: 'Runs flux analysis, writes initial commentary, signs off on financials' },
      { actor: 'CFO', responsibility: 'Reviews, asks probing questions, requests adjustments, final sign-off' },
      { actor: 'FP&A team', responsibility: 'Provides forward-looking commentary, budget context' },
      { actor: 'Auditors (later)', responsibility: 'Review flux as evidence of controller diligence' },
    ],
    howSuccessIsMeasured: [
      'Flux commentary quality (audit-worthy explanations)',
      'CFO review cycle (target <2 days)',
      'Top-side adjustments (target zero; each one bypasses control)',
      'Number of CFO follow-up questions (lower = better controller diligence)',
    ],
    howItVaries: [
      'Public companies: stricter, with audit-committee review',
      'Private mid-market: shorter, less formal',
      'PE-backed: investor-grade rigor with quarterly board pack',
    ],
    regulatoryAndCompliance: [
      'SOX: management certification of financials by CEO/CFO',
      'Audit-committee review for public companies',
      '10-Q / 10-K disclosure consistency with management commentary',
    ],
    keyJudgmentCalls: [
      'Materiality threshold for flux commentary',
      'When to push back on a top-side adjustment vs accept',
      'How much variance commentary detail vs concise',
      'How to surface anomalies the system didn\'t catch',
    ],
  },

  R2R_5: {
    howItReallyHappens: `Consolidation is its own discipline. Each entity has its own trial balance, currency, and possibly GAAP. Group reporting requires (1) translating to group currency at appropriate rates, (2) eliminating intercompany transactions, (3) calculating minority interest, (4) handling acquisition/disposal accounting. Most mid-market companies do this in massive Excel models that one person owns and nobody else understands — a single-person dependency that creates audit risk and continuity risk. Enterprise-grade tools (OneStream, BlackLine, SAP BPC, Oracle FCCS) handle this; mid-market often suffers. **Out of our V1 scope** per Risk #4 — heavy and segment-specific.`,
    whoDoesWhat: [
      { actor: 'Group Controller', responsibility: 'Owns consolidation; runs translations and eliminations' },
      { actor: 'Entity Controllers', responsibility: 'Provide locked entity TBs, intercompany confirmations' },
      { actor: 'Group CFO', responsibility: 'Reviews consolidated financials' },
      { actor: 'External Auditor', responsibility: 'Audit-validates consolidation logic' },
    ],
    howSuccessIsMeasured: [
      'Consolidation cycle time (target <3 days post entity close)',
      'Intercompany reconciling items (target zero open)',
      'FX-translation reasonableness (vs published rates)',
      'Audit findings on consolidation (typically the highest-risk area)',
    ],
    howItVaries: [
      'Single-entity: no consolidation needed',
      '2–5 entities: doable in Excel by experienced controller',
      '5–25 entities: requires dedicated consolidation tool',
      '25+ entities (multinational): enterprise-grade OneStream / BPC / FCCS',
    ],
    regulatoryAndCompliance: [
      'IFRS / US GAAP consolidation rules (control, significant influence, joint arrangements)',
      'FX translation: closing rate (BS), average rate (P&L), historical rate (equity)',
      'Multi-GAAP: parallel sets of books for local statutory + group reporting',
    ],
    keyJudgmentCalls: [
      'Control vs significant influence vs JV (consolidation accounting)',
      'FX rate selection (closing vs average; affects P&L)',
      'Intercompany elimination — what counts as truly intercompany',
      'Acquisition / disposal accounting',
    ],
  },

  R2R_6: {
    howItReallyHappens: `Reporting is the artifact stakeholders consume — board pack, statutory filings, regulatory returns, departmental P&Ls. Statutory reporting is per-jurisdiction work; mature operations partner with ClearTax (India), Sovos/Avalara (global), Workiva (US SEC/SOX). Management reporting (the board pack) is mostly manual at most mid-market companies — assembled in PowerPoint with charts copy-pasted from Excel, written from memory, not from structured analysis. The high-leverage move is auto-generated board packs from a single source of truth.`,
    whoDoesWhat: [
      { actor: 'Controller', responsibility: 'Owns statutory financials and tax returns' },
      { actor: 'FP&A', responsibility: 'Assembles management reporting, board pack, KPI dashboards' },
      { actor: 'Tax team', responsibility: 'Files GST/VAT/withholding returns, country-specific' },
      { actor: 'CFO', responsibility: 'Approves all external reporting; presents to board' },
      { actor: 'External Auditor', responsibility: 'Audits statutory financials' },
    ],
    howSuccessIsMeasured: [
      'Board pack delivery on time (target Day +5 of close)',
      'Statutory filing accuracy (zero refilings)',
      'Numbers consistency across slides / tabs (a common error)',
      'Auditor adjustments (target zero)',
      'Disclosure quality (clear narrative, drives less Q&A)',
    ],
    howItVaries: [
      'Public companies: SEC 10-Q/10-K with extensive disclosures',
      'Private mid-market: simpler statutory + investor-friendly mgmt reporting',
      'PE-backed: monthly investor packs',
      'Multi-jurisdiction: many statutory filings (every entity, every regulator)',
    ],
    regulatoryAndCompliance: [
      'SEC / FCA / SEBI: public company statutory filings',
      'XBRL / iXBRL tagging required',
      'SOX 302/404 management certification',
      'India: MCA filings, GST returns, TDS, MSMED reporting',
      'EU: country-specific tax + statutory + ESG reporting (CSRD)',
    ],
    keyJudgmentCalls: [
      'Disclosure quality — how much narrative vs concise',
      'Materiality for footnote disclosure',
      'Forward-looking commentary tone',
      'Build vs partner for statutory (ClearTax, Sovos, Avalara) vs internal',
    ],
  },
};
