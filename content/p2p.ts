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
    'Vendor Self-Service',
  ],
  runningExample:
    "You run **Brew & Co**, a wholesale coffee bean business. You need to buy 10,000 paper bags from a new packaging supplier, **PackRight Industries**, to ship beans to your customers.",
  stages: [
    {
      number: 1,
      simple: `Before you buy lemons and cups from a new shop, you want to be sure the shop is real and you know exactly where to send the money. So the very first time, you write everything about them in your special notebook: their name, where their shop is, and which piggy bank (bank account) their money goes to. You check it's a real shop, not a made-up one, and that you didn't already write them down before. You only do this **once** — after that, you can just buy from them whenever you need to. 📒`,
      title: 'Vendor Onboarding & Master Data Management',
      whatItIs:
        'Setting up a new supplier in your systems before you can buy from them.',
      whatHappens:
        'You collect KYC info (W-9 / TIN, bank account, registration certificate), verify the bank account (ACH micro-deposit or API check), check for duplicates against your existing vendor master, run any required compliance checks (sanctions, vendor blacklist), and route through approval. Once approved, the vendor record is created in the ERP with payment terms, currency, default GL coding, and tax setup. This is the **first** step and a one-time prerequisite at the start of the relationship — not a per-transaction step. It is also where the exchange channel is set up: if the vendor will send documents and invoices via EDI or a supplier portal, that connection (and the IT/API access behind it) is established here — so all the later stages that receive vendor documents via EDI depend on onboarding being completed first.',
      example:
        'PackRight submits their W-9 (legal name + EIN) and bank details. Your AP team verifies the EIN, runs an ACH micro-deposit to confirm the bank account is real, checks they\'re not already in the system under a different name, and creates them in the ERP with Net 45 terms.',
      analogy:
        'A new employee filling out joining paperwork before they can be paid.',
      whereItBreaks:
        'Onboarding takes 2–4 weeks manually. Duplicate vendors get created when the same supplier registers under slightly different names. Bank details are sometimes entered wrong (a single digit) and the first payment fails. Documents expire (tax-registration / W-9 / compliance certificates) and nobody notices until a payment is blocked.',
    },
    {
      number: 2,
      simple: `You're not allowed to spend the stand's money all by yourself. So when you need something — say, 100 cups — you first put your hand up and ask the grown-up in charge: *"Can I please buy 100 cups? They cost this much."* If they say yes, you're allowed to go buy it. If it's something really expensive, an even bigger grown-up has to say yes too. This way nobody spends the stand's money on silly things. 🙋`,
      title: 'Requisition & Approval',
      whatItIs:
        'An internal request to buy something, routed for approval before any money is committed.',
      whatHappens:
        'A requestor (warehouse manager, ops lead, anyone with budget authority) raises a Purchase Requisition (PR) — what\'s needed, quantity, GL code, cost center, suggested vendor, expected price. The system checks budget availability, then routes through an approval matrix (department head, finance, CFO if above threshold).',
      example:
        'Your packaging manager raises a PR for 10,000 bags @ $0.80 each = $8,000, charged to "Cost of Goods Sold — Packaging." The PR routes to the Ops Head (auto-approved under $10K) and posts to the procurement queue.',
      analogy:
        'Asking your manager for permission before booking an expensive flight on the company card.',
      whereItBreaks:
        'Approval routing lives in email or Slack, not the system. People raise PRs after the purchase is already made (back-dated, defeating the control). Budget checks are manual or skipped. The same approver becomes a bottleneck and slows everything down.',
    },
    {
      number: 3,
      simple: `Now that you're allowed to buy, you send the shop a clear note: *"Please send me 100 cups, at this price, by Friday."* Now it's a promise — they promise to send those cups, and you promise to pay that exact price. No surprises later. It's just like clicking **"Place Order"**: the price is locked in. 🧾`,
      title: 'Purchase Order (PO)',
      whatItIs: 'The formal commitment to buy, sent to the vendor.',
      whatHappens:
        'Once the PR is approved, a PO is generated — a numbered, legally binding document that locks in price, quantity, delivery terms, and payment terms. It\'s sent to the vendor (email, EDI, supplier portal) and posted to the ERP as a commitment against the budget.',
      example:
        'PO-2026-0142 goes out to PackRight: 10,000 bags @ $0.80, delivery in 14 days, Net 45 payment terms, deliver to your Columbus warehouse. PackRight acknowledges and the PO is now an open commitment in your ERP.',
      analogy:
        'Pressing "Place Order" on Amazon — the price is locked, the seller is committed, and your card is now reserved against the amount.',
      whereItBreaks:
        'POs get raised after the invoice arrives ("PO-flipping") which destroys the control purpose. Vendors deliver against email confirmations, not POs, and pricing drifts. Multi-line POs with partial deliveries get tracked in spreadsheets.',
    },
    {
      number: 4,
      simple: `When the box of cups finally shows up, you don't just toss it in the corner. You open it and **count**: did all 100 cups come? Are any broken? Then you tick it off in your notebook — *"Yes, the cups arrived."* That little tick matters a lot, because later it's how you'll prove you really got the stuff. 📦✅`,
      title: 'Goods Receipt (GRN)',
      whatItIs: 'Confirming the goods (or services) actually arrived.',
      whatHappens:
        'When the delivery shows up, your warehouse or receiving team checks it against the PO — right item, right quantity, acceptable quality. They post a Goods Receipt Note (GRN) in the system, which becomes the trigger for the **3-way match** — the invoice itself arrives on the supplier\'s own schedule; the GRN is what lets you match it and post it. For services, this is service entry sheet (SES) confirmation.',
      example:
        'Truck arrives at your Columbus warehouse. Your team counts: 9,800 bags received, 200 short. They post a GRN for 9,800 bags against PO-2026-0142.',
      analogy:
        'Signing for a courier package — you\'re confirming you got what was shipped, in the condition described.',
      whereItBreaks:
        'GRNs are posted late or in batches, so invoices arrive before the GRN exists and get blocked. Partial deliveries aren\'t tracked cleanly. Quality rejections happen but never make it back to the GL as a claim against the vendor.',
    },
    {
      number: 5,
      simple: `A few days later the shop sends you their **bill** — a piece of paper that says *"You owe us this much for the cups."* You take that bill and tidily write it into your notebook, right next to the order it belongs to. And if the very same bill sneakily shows up twice, you catch it — so you never pay for the same cups twice. 🧾`,
      title: 'Invoice Receipt & Processing',
      whatItIs: 'Capturing the supplier invoice into your AP system.',
      whatHappens:
        'Invoice arrives via email, supplier portal, EDI, or paper. OCR extracts header data (vendor, invoice number, date, amount, tax) and line items. AI suggests the matching PO and GL coding. The system checks for duplicates (same invoice number, same amount, same vendor) and validates tax treatment (sales/use tax, 1099 / withholding applicability).',
      example:
        'PackRight emails Invoice INV-PR-887: 9,800 bags @ $0.80 = $7,840. Your AP system extracts the data, links it to PO-2026-0142, suggests GL code 5021 (COGS-Packaging), and flags it for matching.',
      analogy:
        'Your phone scanning a restaurant bill and auto-filling the expense report — except now there are 800 bills a month and three of them are duplicates from the same vendor in different formats.',
      whereItBreaks:
        'Invoices come in 12 different formats from one vendor. OCR confidence is uneven. Duplicate detection misses near-duplicates (same invoice resubmitted with a one-character change). GL coding is inconsistent because three different AP clerks code the same vendor differently.',
    },
    {
      number: 6,
      simple: `Now you play **matching detective** with three things: (1) what you *ordered*, (2) what actually *showed up* in the box, and (3) what the *bill* says. If all three agree — you ordered 100, got 100, and the bill is for 100 — great, you're allowed to pay. But if they DON'T agree — you got only 95, yet the bill says 100 — you **stop** and ask questions before paying a single penny. 🔍`,
      title: '3-Way Match & Approval',
      whatItIs:
        'The control check that confirms PO, GRN, and invoice all agree before payment is approved.',
      whatHappens:
        'The system compares three documents — what you ordered (PO), what you received (GRN), and what you\'re being billed for (invoice). If quantity, price, and tax line up within tolerance, it\'s a clean match and goes straight through. If anything\'s off — short delivery, price variance, tax mismatch — it goes to an exception queue for human review.',
      example:
        'PO says 10,000 bags @ $0.80 = $8,000. GRN says 9,800 received. Invoice says 9,800 bags @ $0.80 = $7,840. The invoice is matched to the *received* quantity (9,800), not the ordered 10,000 — so it clears the 3-way match and is approved for payment; the 200-unit shortfall stays open on the PO.',
      analogy:
        'Comparing your Swiggy order screen, the delivery person\'s bill, and your card statement — all three need to agree before you mark the transaction as fine.',
      whereItBreaks:
        'This is where most P2P pain lives. 30–40% of invoices fail clean match the first time — wrong price, missing GRN, partial delivery, tax variance, currency mismatch. Each exception takes 15–30 minutes of human investigation. Invoices sit in exception queues for days. Vendors call asking why they haven\'t been paid.',
    },
    {
      number: 7,
      simple: `Everything matches, so now you actually pay. You take the money out of the piggy bank and send it to the shop. Then you cross that bill off your list — *"paid!"* — and the shop gets a little note saying *"here's your money."* Done. That whole lemons-and-cups story is finished and closed. 💸`,
      title: 'Payment & Reconciliation',
      whatItIs: 'Actually paying the vendor and closing the loop in your books.',
      whatHappens:
        'Approved invoices go into a payment run — usually weekly. The system selects invoices by due date, applies any early payment discounts, generates a bank file (ACH / wire / SWIFT format), routes through dual approval (treasury + CFO for large runs), and releases payment. Once the bank confirms, the invoice is marked paid in AP, the GL is updated, and a remittance advice goes to the vendor.',
      example:
        'Friday\'s payment run includes PackRight\'s $7,840. The bank file is generated, you and the CFO approve, the bank confirms the ACH payment by 4pm, the AP ledger is updated, and PackRight gets an automated email: "Invoice INV-PR-887 paid $7,840, trace # ABC123XYZ."',
      analogy:
        'Setting up an auto-pay for your credit card bill — the system handles the actual transfer, but somebody has to make sure the money\'s there and approve the run.',
      whereItBreaks:
        'Bank files in the wrong format get rejected. Payment failures (closed account, wrong IFSC) aren\'t flagged in real time. Remittance advice doesn\'t go out, so vendors call AP asking "did you pay me?" Cash application on the vendor\'s side fails because there\'s no remittance reference. Multi-currency payments add FX complexity that breaks reconciliation.',
    },
    {
      number: 8,
      simple: `Shops get worried and keep asking *"Did you get my bill? When will you pay me?"* Instead of answering the same questions on the phone all day, you give every shop a little **"track your money" window** they can peek at themselves — just like the "Track your order" page for a package. They look it up, see *"paying you Friday,"* and stop bugging you. Everyone's happier. 🪟`,
      title: 'Vendor Self-Service & Query Resolution',
      whatItIs:
        'The supporting layer that lets vendors submit invoices and check status themselves — and gives AP one place to answer "did you get my invoice?" and "when am I paid?" This isn\'t a sequential step; it runs alongside the whole cycle.',
      whatHappens:
        'Vendors submit invoices and tax/bank documents through a portal instead of email, and see real-time status of every invoice (received → matched → approved → scheduled → paid). They raise queries in-thread, and AP resolves exceptions and vendor questions in one place with the full PO / GRN / invoice context attached — instead of digging through inboxes. Done well, most "where\'s my payment?" questions are answered before the vendor even asks.',
      example:
        'PackRight logs into the portal, sees Invoice INV-PR-887 is "Approved — scheduled for Friday\'s run," and uploads next month\'s invoice directly — no email to your AP team, no phone call.',
      analogy:
        'The "Track your order" page on Amazon — you check the status yourself instead of emailing the seller "where\'s my package?"',
      whereItBreaks:
        'Without it, vendors call and email AP for every status update, and AP burns hours a day on "did you get it / when am I paid" — the single biggest avoidable load on the team. Queries sit in scattered inboxes with no link to the PO / GRN / invoice, so each one is re-investigated from scratch, exceptions age, and vendor relationships fray.',
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
