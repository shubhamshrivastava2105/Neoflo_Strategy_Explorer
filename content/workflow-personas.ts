// Drop into: content/workflow-personas.ts
// Maps each of the 28 workflows to the primary persona it solves for.
// Keyed by `${process}_${number}` matching the workflow map.

export type WorkflowPersonaMapping = {
  primaryPersona: string;
  primaryRole: string;
  whatItRelievesForThem: string;
  secondaryPersonas: string[];
  buyerOfThisFeature: string;
};

export const workflowPersonas: Record<string, WorkflowPersonaMapping> = {
  // ─── P2P ───
  P2P_1: {
    primaryPersona: 'AP / Procurement Operations Lead',
    primaryRole: 'Manager / Sr Manager — owns the vendor master and onboarding workflow day-to-day',
    whatItRelievesForThem: 'Eliminates the 2–4 week email-and-paperwork onboarding cycle, the duplicate-vendor cleanup project nobody has time for, and the 2am surprise of a payment failing because the bank IFSC was off by one digit.',
    secondaryPersonas: ['Compliance / Risk Officer', 'Procurement Director', 'Sr Director AP'],
    buyerOfThisFeature: 'Controller — signs off as part of the AP automation purchase',
  },
  P2P_2: {
    primaryPersona: 'Procurement Manager / Buyer',
    primaryRole: 'Owns supplier negotiation, PO issuance, contract compliance',
    whatItRelievesForThem: 'Removes the email/Slack approval chase. Eliminates "PO-flipping" where invoices arrive without POs. Gives them real-time budget visibility against open commitments.',
    secondaryPersonas: ['Department Head (requestor)', 'Finance Controller (budget owner)', 'CFO (large-PO approver)'],
    buyerOfThisFeature: 'Procurement Director or Controller — depends on org size',
  },
  P2P_3: {
    primaryPersona: 'Warehouse Manager / Receiving Lead',
    primaryRole: 'Confirms physical receipt of goods or services for AP triggering',
    whatItRelievesForThem: 'Mobile barcode-scanning receipt eliminates batch-end-of-day GRN posting. Removes the friction with AP about "missing GRN" blocking invoice match.',
    secondaryPersonas: ['Operations Director', 'Quality Manager', 'AP Team (downstream consumer)'],
    buyerOfThisFeature: 'COO / Operations Director (warehouse-side); AP Director (downstream)',
  },
  P2P_4: {
    primaryPersona: 'AP Clerk / AP Specialist',
    primaryRole: 'Day-to-day invoice processing, OCR review, GL coding',
    whatItRelievesForThem: 'Replaces 20-minute manual invoice entry with 30-second AI review. Touch-ratio improvement directly = hours saved per week. Duplicate detection prevents costly double-payments.',
    secondaryPersonas: ['Sr Director AP', 'Tax / GL Owner', 'Controller'],
    buyerOfThisFeature: 'Sr Director AP / Controller — this is the primary AP-automation decision',
  },
  P2P_5: {
    primaryPersona: 'AP Specialist (Exception Handler)',
    primaryRole: 'Investigates and resolves invoice-PO-GRN mismatches',
    whatItRelievesForThem: '60–70% of their week is exception work. Single-screen context (PO + GRN + invoice + vendor chat) cuts each exception from 25 minutes to 5. Vendor self-service eliminates inbound "where\'s my payment" calls.',
    secondaryPersonas: ['Procurement (PO-side issues)', 'Warehouse (GRN issues)', 'Vendor'],
    buyerOfThisFeature: 'Sr Director AP — the ROI case is direct and measurable',
  },
  P2P_6: {
    primaryPersona: 'Cost Center Owner / Department Head',
    primaryRole: 'Approver in the AP routing chain',
    whatItRelievesForThem: 'Mobile-first approval with full invoice context replaces the email-bombardment. Anomaly flags surface unusual items so they\'re not rubber-stamping fraud risk.',
    secondaryPersonas: ['Controller (above-threshold)', 'CFO (top-end)', 'AP Team (configures rules)'],
    buyerOfThisFeature: 'Controller — owns the approval matrix policy',
  },
  P2P_7: {
    primaryPersona: 'Treasury Analyst / AP Payment Lead',
    primaryRole: 'Generates payment runs, manages bank files, monitors execution',
    whatItRelievesForThem: 'Real-time payment status replaces "did the bank file go through?" anxiety. Multi-rail support means one workflow for NEFT/ACH/SWIFT/FAST. Auto-remittance to vendors eliminates AP\'s biggest inbound: "did you pay me?"',
    secondaryPersonas: ['CFO (large-run approver)', 'Vendor (recipient)', 'Controller (DPO management)'],
    buyerOfThisFeature: 'CFO + Treasury Director — payment automation is a treasury-CFO joint decision',
  },
  P2P_8: {
    primaryPersona: 'Accounts Payable Lead',
    primaryRole: 'Manages vendor relationships, fields inbound queries, master-data updates',
    whatItRelievesForThem: 'Replaces ~20% of weekly AP-team time spent on "where\'s my payment" inquiries. Self-service master data updates with proper MFA workflow eliminates BEC fraud risk on bank-detail changes.',
    secondaryPersonas: ['Vendor (primary user of the portal)', 'Procurement', 'Compliance'],
    buyerOfThisFeature: 'Sr Director AP — productivity-driven',
  },
  P2P_9: {
    primaryPersona: 'Procurement Director / VP Procurement',
    primaryRole: 'Owns category strategy, vendor consolidation, savings initiatives',
    whatItRelievesForThem: 'Replaces monthly Excel spend reports with real-time dashboards. Surfaces maverick spend (15–25% of mid-market spend, completely unmanaged) with concrete amounts. Automated savings recommendations.',
    secondaryPersonas: ['CFO (board-level visibility)', 'Category Managers', 'Finance FP&A'],
    buyerOfThisFeature: 'Procurement Director — strategic spend management ROI',
  },
  P2P_10: {
    primaryPersona: 'Employee (expense submitter)',
    primaryRole: 'Files expense claims for reimbursement or card reconciliation',
    whatItRelievesForThem: 'Mobile-on-the-go submission, AI policy auto-application, sub-1-day reimbursement.',
    secondaryPersonas: ['Manager (approver)', 'Finance (policy)', 'HR shared-services'],
    buyerOfThisFeature: 'CFO + HR jointly — out of Neoflo scope',
  },

  // ─── O2C ───
  O2C_1: {
    primaryPersona: 'Credit Manager / AR Lead',
    primaryRole: 'Reviews credit applications, sets limits, monitors customer risk',
    whatItRelievesForThem: 'Auto-bureau checks + scoring model replaces 1–2 hour manual review per customer. Real-time utilization alerts catch deteriorating accounts before they become bad debt.',
    secondaryPersonas: ['Sales (advocates new customers)', 'CFO (sets credit policy)', 'Risk / Compliance'],
    buyerOfThisFeature: 'Controller / CFO — risk-mitigation framing',
  },
  O2C_2: {
    primaryPersona: 'Sales Operations / Order Management Lead',
    primaryRole: 'Orchestrates order-to-fulfillment',
    whatItRelievesForThem: 'Out of Neoflo scope (ERP territory) — but our O2C inputs depend on clean order data flowing in.',
    secondaryPersonas: ['Inventory Lead', 'Customer Service', 'Sales'],
    buyerOfThisFeature: 'COO / VP Operations — ERP-bundled decision',
  },
  O2C_3: {
    primaryPersona: 'AR / Billing Lead',
    primaryRole: 'Generates invoices, ensures tax accuracy, transmits to customers',
    whatItRelievesForThem: 'Auto-billing on POD eliminates 1–3 day delays. Native e-invoicing (MyInvois / InvoiceNow / e-Faktur) eliminates the separate compliance tool. Recurring billing automation handles proration without spreadsheets.',
    secondaryPersonas: ['Tax Director (compliance)', 'Customer (recipient)', 'Revenue Recognition team'],
    buyerOfThisFeature: 'Controller — joint decision with Tax for SEA mandates',
  },
  O2C_4: {
    primaryPersona: 'Controller / VP Finance',
    primaryRole: 'Owns AR ledger health, DSO management, working capital',
    whatItRelievesForThem: 'Real-time AR replaces monthly Excel exports. Customer-level early-warning indicators surface deteriorating accounts before they become 90+ day past-due. CFO-visible dashboards replace controller-built spreadsheets.',
    secondaryPersonas: ['CFO (cash visibility)', 'Treasury (cash forecast)', 'Sales (customer health)'],
    buyerOfThisFeature: 'CFO — directly visible to the board',
  },
  O2C_5: {
    primaryPersona: 'Collections Manager / Sr AR Analyst',
    primaryRole: 'Works the prioritized collections queue, manages dunning sequences',
    whatItRelievesForThem: 'Automated sequencing replaces ad-hoc spreadsheet-driven outreach. Promise-to-pay tracking ends the "we already had this conversation" loop. Dispute-aware suppression prevents relationship damage.',
    secondaryPersonas: ['Sales (strategic accounts)', 'Legal (escalations)', 'Customer'],
    buyerOfThisFeature: 'CFO + Controller — every day of DSO compression = real cash',
  },
  O2C_6: {
    primaryPersona: 'Collections Manager (operational benefit) + CFO (strategic benefit)',
    primaryRole: 'Replaces high-volume first-pass calling with AI agents in local languages',
    whatItRelievesForThem: '70%+ of first-call volume handled autonomously, 24/7, in 12+ languages. Collectors freed to focus on hard cases. Massive scale unlock for SEA where phone collections is culturally normal.',
    secondaryPersonas: ['Customer (recipient)', 'Sales (strategic accounts hand-off)'],
    buyerOfThisFeature: 'CFO — productivity + DSO compression case',
  },
  O2C_7: {
    primaryPersona: 'AR Cash App Specialist',
    primaryRole: 'Matches incoming bank payments to open invoices',
    whatItRelievesForThem: '20–30% of weekly AR-team time goes here in unmanaged operations. STP improvement from 65% → 95% directly = hours saved per week + faster AR ledger accuracy.',
    secondaryPersonas: ['Treasury (cash position)', 'Customer (cash-app accuracy)'],
    buyerOfThisFeature: 'CFO — this is the Hitachi-pattern feature; without it the deal walks',
  },
  O2C_8: {
    primaryPersona: 'AR Dispute Lead / Deductions Specialist (CPG/retail)',
    primaryRole: 'Resolves customer disputes, issues credit notes, manages CPG deductions',
    whatItRelievesForThem: 'Single system of record across sales / ops / finance. Ends the email-thread dispute that ages 30+ days. CPG deductions specifically: trade-promo / returns / allowances are deduction-heavy and need their own workflow.',
    secondaryPersonas: ['Sales (pricing disputes)', 'Operations (quality)', 'Customer Success'],
    buyerOfThisFeature: 'Controller / Sr Director AR — Spectrum specifically asked for this',
  },
  O2C_9: {
    primaryPersona: 'Treasury / FP&A Director',
    primaryRole: 'Manages cash position, forecasts inflows, working capital decisions',
    whatItRelievesForThem: 'Daily-refreshed forecast at customer-level replaces monthly Excel ±20% guesses. Scenario modeling (DSO compression, top-customer slowdown) on demand. Integrates with treasury cash positioning.',
    secondaryPersonas: ['CFO (board commentary)', 'CEO (cash runway in scale-ups)'],
    buyerOfThisFeature: 'CFO — cash visibility is universally board-level',
  },
  O2C_10: {
    primaryPersona: 'Customer (B2B buyer\'s AP team)',
    primaryRole: 'Self-service portal users — view invoices, pay, raise disputes',
    whatItRelievesForThem: 'For the customer\'s AP team: single portal for invoice viewing, multi-rail payment, dispute raising. For our customer\'s AR team: 40%+ reduction in inbound emails.',
    secondaryPersonas: ['Our customer\'s AR team (efficiency)', 'Customer\'s AP team (UX)'],
    buyerOfThisFeature: 'Sr Director AR — productivity-driven',
  },

  // ─── R2R ───
  R2R_1: {
    primaryPersona: 'Controller / VP Finance',
    primaryRole: 'Owns close calendar, enforces cutoff, signs off on accruals',
    whatItRelievesForThem: 'Cross-process advantage: real-time AP/AR cutoff data eliminates "did everyone freeze?" coordination. GR/IR accruals are real-time, not stale. Intercompany matched within 1 day.',
    secondaryPersonas: ['Sub-ledger leads (AP, AR, payroll)', 'Sub Controller', 'Group Controller (multi-entity)'],
    buyerOfThisFeature: 'CFO — close compression is a board-level metric',
  },
  R2R_2: {
    primaryPersona: 'Senior Accountant (JE preparer)',
    primaryRole: 'Prepares accruals, amortizations, FX revaluation, deferred tax JEs',
    whatItRelievesForThem: 'Template-driven recurring JEs auto-populated from sub-ledger data. Cross-process audit trail eliminates the "where\'s my evidence?" question. AI flags anomalies humans would miss.',
    secondaryPersonas: ['Manager / Reviewer', 'Controller (approver)', 'Auditors (consume the trail)'],
    buyerOfThisFeature: 'Controller — JE workflow ROI is direct',
  },
  R2R_3: {
    primaryPersona: 'Reconciliation Lead / Senior Accountant',
    primaryRole: 'Owns 25–50 reconciliations per close cycle',
    whatItRelievesForThem: 'Auto-matching covers 85%+ of lines. Ready Day 1 of close instead of Day 4. Aging reconciling items prioritized for resolution.',
    secondaryPersonas: ['Sub-ledger leads', 'Controller (approver)', 'External auditor'],
    buyerOfThisFeature: 'Controller — biggest time sink in close',
  },
  R2R_4: {
    primaryPersona: 'Controller (drives) + CFO (consumes)',
    primaryRole: 'Runs flux analysis, writes commentary, signs off on financials',
    whatItRelievesForThem: 'AI generates initial flux commentary from cross-process data context (P2P + O2C + R2R). Controller refines instead of starting from blank page. CFO sees variance commentary that\'s consistent across slides.',
    secondaryPersonas: ['FP&A team', 'External auditor (consumes flux)'],
    buyerOfThisFeature: 'CFO — flux quality is the controller\'s most-visible deliverable',
  },
  R2R_5: {
    primaryPersona: 'Group Controller',
    primaryRole: 'Owns consolidation across entities',
    whatItRelievesForThem: 'Out of V1 scope. Heavy and segment-specific. Mid-market customers manage in Excel; enterprise uses OneStream / SAP BPC.',
    secondaryPersonas: ['Entity Controllers', 'Group CFO', 'External Auditor'],
    buyerOfThisFeature: 'Group CFO — typically a separate consolidation purchase decision',
  },
  R2R_6: {
    primaryPersona: 'Tax Director / Statutory Reporting Lead',
    primaryRole: 'Owns statutory financial filings, tax returns, regulatory submissions per jurisdiction',
    whatItRelievesForThem: 'Per-jurisdiction filings auto-prepared from GL via integrations (ClearTax / Sovos / Avalara) where complexity warrants. Reduced refile risk from data inconsistency. SOX evidence captured automatically.',
    secondaryPersonas: ['Controller', 'External auditor', 'CFO (signs off)'],
    buyerOfThisFeature: 'CFO + Tax Director — joint decision; SEA mandates make this a forced-buy',
  },
  R2R_7: {
    primaryPersona: 'FP&A Director / VP FP&A',
    primaryRole: 'Owns board-pack assembly, executive dashboards, departmental P&Ls',
    whatItRelievesForThem: 'Auto-generated board packs from a single source of truth eliminate copy-paste errors and 2–3 day post-close manual work. Self-service drill-down for executives. Mobile-readable dashboards for department heads.',
    secondaryPersonas: ['CFO (presents)', 'CEO + Board (consume)', 'Department heads'],
    buyerOfThisFeature: 'CFO — board-level visibility deliverable',
  },
  R2R_8: {
    primaryPersona: 'Group Accountant / Intercompany Specialist',
    primaryRole: 'Matches intercompany invoices and balances across entities, settles intercompany positions',
    whatItRelievesForThem: 'Real-time intercompany matching as transactions post eliminates "one side booked, other didn\'t" reconciliation. FX differences auto-explained. Audit findings concentrate here in unmanaged ops — automation removes that risk.',
    secondaryPersonas: ['Group Controller', 'Entity Controllers', 'Group CFO'],
    buyerOfThisFeature: 'Group CFO — multi-entity audit-risk mitigation',
  },
};
