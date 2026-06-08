// Drop into: content/p2p.ts
import type { ProcessExplainerData } from './types';

export const p2pData: ProcessExplainerData = {
  slug: 'p2p',
  title: 'Procure-to-Pay (P2P)',
  shortName: 'P2P',
  emoji: '📦',
  oneLiner:
    'The end-to-end process a B2B company runs to turn a need ("we need 50kg of coffee bean packaging") into a paid supplier invoice.',
  stageOrder: [
    'Vendor Onboarding',
    'Requisition',
    'Purchase Order',
    'Goods Receipt',
    'Invoice Receipt',
    '3-Way Match',
    'Payment',
  ],
  runningExample:
    "You run **Brew & Co**, a wholesale coffee bean business. You need to buy 10,000 paper bags from a new packaging supplier, **PackRight Industries**, to ship beans to your customers.",
  stages: [
    {
      number: 1,
      title: 'Vendor Onboarding & Master Data Management',
      whatItIs:
        'Setting up a new supplier in your systems before you can buy from them.',
      whatHappens:
        'You collect KYC info (PAN, GST, bank account, registration certificate), verify the bank account (penny drop or API check), check for duplicates against your existing vendor master, run any required compliance checks (sanctions, vendor blacklist), and route through approval. Once approved, the vendor record is created in the ERP with payment terms, currency, default GL coding, and tax setup. This is the **first** step and a one-time prerequisite at the start of the relationship — not a per-transaction step. It is also where the exchange channel is set up: if the vendor will send documents and invoices via EDI or a supplier portal, that connection (and the IT/API access behind it) is established here — so all the later stages that receive vendor documents via EDI depend on onboarding being completed first.',
      example:
        'PackRight submits their PAN, GST, and bank details. Your AP team verifies the GST is active, does a ₹1 penny drop to confirm the bank account is real, checks they\'re not already in the system under a different name, and creates them in the ERP with Net 45 terms.',
      analogy:
        'A new employee filling out joining paperwork before they can be paid.',
      whereItBreaks:
        'Onboarding takes 2–4 weeks manually. Duplicate vendors get created when the same supplier registers under slightly different names. Bank details are sometimes entered wrong (a single digit) and the first payment fails. Documents expire (GST, MSME certificates) and nobody notices until a payment is blocked.',
    },
    {
      number: 2,
      title: 'Requisition & Approval',
      whatItIs:
        'An internal request to buy something, routed for approval before any money is committed.',
      whatHappens:
        'A requestor (warehouse manager, ops lead, anyone with budget authority) raises a Purchase Requisition (PR) — what\'s needed, quantity, GL code, cost center, suggested vendor, expected price. The system checks budget availability, then routes through an approval matrix (department head, finance, CFO if above threshold).',
      example:
        'Your packaging manager raises a PR for 10,000 bags @ ₹8 each = ₹80,000, charged to "Cost of Goods Sold — Packaging." The PR routes to the Ops Head (auto-approved under ₹1L) and posts to the procurement queue.',
      analogy:
        'Asking your manager for permission before booking an expensive flight on the company card.',
      whereItBreaks:
        'Approval routing lives in email or Slack, not the system. People raise PRs after the purchase is already made (back-dated, defeating the control). Budget checks are manual or skipped. The same approver becomes a bottleneck and slows everything down.',
    },
    {
      number: 3,
      title: 'Purchase Order (PO)',
      whatItIs: 'The formal commitment to buy, sent to the vendor.',
      whatHappens:
        'Once the PR is approved, a PO is generated — a numbered, legally binding document that locks in price, quantity, delivery terms, and payment terms. It\'s sent to the vendor (email, EDI, supplier portal) and posted to the ERP as a commitment against the budget.',
      example:
        'PO-2026-0142 goes out to PackRight: 10,000 bags @ ₹8, delivery in 14 days, Net 45 payment terms, deliver to Bengaluru warehouse. PackRight acknowledges and the PO is now an open commitment in your ERP.',
      analogy:
        'Pressing "Place Order" on Amazon — the price is locked, the seller is committed, and your card is now reserved against the amount.',
      whereItBreaks:
        'POs get raised after the invoice arrives ("PO-flipping") which destroys the control purpose. Vendors deliver against email confirmations, not POs, and pricing drifts. Multi-line POs with partial deliveries get tracked in spreadsheets.',
    },
    {
      number: 4,
      title: 'Goods Receipt (GRN)',
      whatItIs: 'Confirming the goods (or services) actually arrived.',
      whatHappens:
        'When the delivery shows up, your warehouse or receiving team checks it against the PO — right item, right quantity, acceptable quality. They post a Goods Receipt Note (GRN) in the system, which becomes the trigger for the **3-way match** — the invoice itself arrives on the supplier\'s own schedule; the GRN is what lets you match it and post it. For services, this is service entry sheet (SES) confirmation.',
      example:
        'Truck arrives at your Bengaluru warehouse. Your team counts: 9,800 bags received, 200 short. They post a GRN for 9,800 bags against PO-2026-0142.',
      analogy:
        'Signing for a courier package — you\'re confirming you got what was shipped, in the condition described.',
      whereItBreaks:
        'GRNs are posted late or in batches, so invoices arrive before the GRN exists and get blocked. Partial deliveries aren\'t tracked cleanly. Quality rejections happen but never make it back to the GL as a claim against the vendor.',
    },
    {
      number: 5,
      title: 'Invoice Receipt & Processing',
      whatItIs: 'Capturing the supplier invoice into your AP system.',
      whatHappens:
        'Invoice arrives via email, supplier portal, EDI, or paper. OCR extracts header data (vendor, invoice number, date, amount, tax) and line items. AI suggests the matching PO and GL coding. The system checks for duplicates (same invoice number, same amount, same vendor) and validates tax (GST input credit eligibility, TDS applicability).',
      example:
        'PackRight emails Invoice INV-PR-887: 9,800 bags @ ₹8 + 18% GST = ₹92,512. Your AP system extracts the data, links it to PO-2026-0142, suggests GL code 5021 (COGS-Packaging), confirms GST is eligible for input credit, and flags it for matching.',
      analogy:
        'Your phone scanning a restaurant bill and auto-filling the expense report — except now there are 800 bills a month and three of them are duplicates from the same vendor in different formats.',
      whereItBreaks:
        'Invoices come in 12 different formats from one vendor. OCR confidence is uneven. Duplicate detection misses near-duplicates (same invoice resubmitted with a one-character change). GL coding is inconsistent because three different AP clerks code the same vendor differently.',
    },
    {
      number: 6,
      title: '3-Way Match & Approval',
      whatItIs:
        'The control check that confirms PO, GRN, and invoice all agree before payment is approved.',
      whatHappens:
        'The system compares three documents — what you ordered (PO), what you received (GRN), and what you\'re being billed for (invoice). If quantity, price, and tax line up within tolerance, it\'s a clean match and goes straight through. If anything\'s off — short delivery, price variance, tax mismatch — it goes to an exception queue for human review.',
      example:
        'PO says 10,000 bags @ ₹8 = ₹80,000. GRN says 9,800 received. Invoice says 9,800 bags @ ₹8 + GST = ₹92,512. Math checks out. The invoice clears 3-way match and is approved for payment.',
      analogy:
        'Comparing your Swiggy order screen, the delivery person\'s bill, and your card statement — all three need to agree before you mark the transaction as fine.',
      whereItBreaks:
        'This is where most P2P pain lives. 30–40% of invoices fail clean match the first time — wrong price, missing GRN, partial delivery, tax variance, currency mismatch. Each exception takes 15–30 minutes of human investigation. Invoices sit in exception queues for days. Vendors call asking why they haven\'t been paid.',
    },
    {
      number: 7,
      title: 'Payment & Reconciliation',
      whatItIs: 'Actually paying the vendor and closing the loop in your books.',
      whatHappens:
        'Approved invoices go into a payment run — usually weekly. The system selects invoices by due date, applies any early payment discounts, generates a bank file (NEFT/RTGS/ACH/SWIFT format), routes through dual approval (treasury + CFO for large runs), and releases payment. Once the bank confirms, the invoice is marked paid in AP, the GL is updated, and a remittance advice goes to the vendor.',
      example:
        'Friday\'s payment run includes PackRight\'s ₹92,512. The bank file is generated, you and the CFO approve, the bank confirms NEFT successful by 4pm, the AP ledger is updated, and PackRight gets an automated email: "Invoice INV-PR-887 paid ₹92,512, UTR ABC123XYZ."',
      analogy:
        'Setting up an auto-pay for your credit card bill — the system handles the actual transfer, but somebody has to make sure the money\'s there and approve the run.',
      whereItBreaks:
        'Bank files in the wrong format get rejected. Payment failures (closed account, wrong IFSC) aren\'t flagged in real time. Remittance advice doesn\'t go out, so vendors call AP asking "did you pay me?" Cash application on the vendor\'s side fails because there\'s no remittance reference. Multi-currency payments add FX complexity that breaks reconciliation.',
    },
  ],
  loopsAndConnections: `The diagram at the top is the **happy path**. In reality, the loops between stages are where the work piles up:

- **Invoice → PO loop:** Invoice arrives but no PO exists (rogue spend), or the PO is wrong. Procurement has to fix the PO before AP can match.
- **3-way match → GRN loop:** Invoice arrives before the GRN is posted. AP chases the warehouse to post the GRN.
- **3-way match → Vendor loop:** Price or quantity variance triggers a back-and-forth with the vendor — credit notes, revised invoices, debit memos.
- **Payment → Vendor query loop:** Vendor doesn't know if/when they were paid. They call AP. AP looks it up. Multiply by 200 vendors a month.
- **Spend analytics feeds back into vendor management:** Maverick spend (off-contract purchases) gets caught in analytics, then enforcement loops back into PR/PO controls.

The messy loops between stages are where AP teams spend 60–70% of their time, where cash leaks happen, and where vendor relationships break. That's also where automation value sits — not on the happy path, but in the exception handling and the chasing.`,
  whyItMattersForNeoflo: `P2P is Neoflo's **land motion** — the wedge into mid-market finance teams. The pain is concrete, the ROI is measurable, and the workflow is generalizable.

The pain is well-documented:

- 60–70% of AP team time goes to manual data entry, matching, and chasing
- 30–40% of invoices fail first-pass match and become exceptions
- DPO (Days Payable Outstanding) is managed reactively because there's no real-time view of AP commitments
- Maverick spend (off-PO purchases) runs at 15–25% in most mid-market companies, completely unmanaged
- Vendor self-service is non-existent — vendors call/email AP for every status update

The opportunity is the platform thesis: **Invoice Processing & STP** is the P0 wedge (high impact, 80–85% V1 automation, 14–18 weeks). Once Neoflo is the system of record for invoices, **Spend Analytics** and **Vendor Self-Service** become natural P1 expansions on the same data. Payment automation, T&E, and full PR-to-PO are P2 — useful but not the wedge.

The Zalora deployment is the proof point. Once the same workflow engine that runs Zalora's P2P generalizes to O2C and R2R, the platform thesis is validated.`,
};
