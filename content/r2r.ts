// Drop into: content/r2r.ts
import type { ProcessExplainerData } from './types';

export const r2rData: ProcessExplainerData = {
  slug: 'r2r',
  title: 'Record-to-Report (R2R)',
  shortName: 'R2R',
  emoji: '📊',
  oneLiner:
    'The end-to-end process a finance team runs every month, quarter, and year to close the books and produce financial statements.',
  stageOrder: [
    'Pre-Close Cutoff',
    'Journal Entries',
    'Reconciliations',
    'Review & Sign-Off',
    'Consolidation',
    'Reporting',
  ],
  runningExample:
    "It's **April 1st, 2026**. **Brew & Co** — the wholesale coffee bean business — needs to close the books for **March 2026**. Two entities (India HQ + Singapore subsidiary), three bank accounts, ~800 invoices in AP, ~400 invoices in AR, payroll of ₹18L, and a CFO who has promised the board the close lands by **April 8th**.",
  stages: [
    {
      number: 1,
      title: 'Pre-Close Cutoff',
      whatItIs:
        'Drawing the line on the period — deciding what counts as a March transaction and what counts as April.',
      whatHappens:
        'Sub-ledgers (AP, AR, payroll, fixed assets, inventory) get "frozen" at period-end. Outstanding items that belong to March but haven\'t hit the GL yet get accrued: goods or services received from suppliers but not yet invoiced (the GR/IR or GRNI accrual — Goods Received, Not Invoiced), supplier invoices that arrived but aren\'t keyed yet, bills you owe for utilities/rent/services consumed in March, payroll for hours worked in late March but paid in April, depreciation for the month, and intercompany transactions between entities.',
      example:
        'Your AP team confirms all March invoices are entered. The warehouse confirms all March deliveries are recorded. Payroll for the last week of March is accrued at ₹4.5L. Depreciation runs on fixed assets: ₹1.2L for the month. The Singapore office confirms all intercompany transactions with India for March.',
      analogy:
        'Calling "time!" on a board game — nothing more counts toward this round, anything that happens after the buzzer is the next round.',
      whereItBreaks:
        'Sub-ledgers don\'t all freeze at the same time. AP keeps posting March invoices into early April "because they came in late." GRNI accruals are based on stale data. Intercompany transactions don\'t match (India says it sent S$10,000, Singapore received S$9,995 due to FX or fees). Payroll accrual gets re-stated three times.',
    },
    {
      number: 2,
      title: 'Journal Entries (JEs)',
      whatItIs:
        'All the manual accounting entries that don\'t come automatically from sub-ledgers — accruals, prepaid amortization, lease accounting, FX revaluation, provisions, deferred tax, and one-off adjustments.',
      whatHappens:
        'Each JE has a preparer (usually a senior accountant), a reviewer, and an approver. The preparer pulls supporting evidence (lease schedule, FX rates, accrual workings), calculates the entry, drafts the JE in the ERP or a JE workflow tool, attaches the support, and submits for review. The reviewer checks math, GL coding, and reasonableness. The approver signs off. The JE posts to the GL.',
      example:
        'Brew & Co posts ~40 JEs for March: rent accrual ₹6L for unbilled March rent; utilities accrual ₹85K estimated; bonus accrual ₹12L (3 months of FY accrual); prepaid insurance amortization ₹1.5L; ROU asset amortization (lease) ₹4.2L; FX revaluation on Singapore AR ₹1.8L gain; bad debt provision (1.5% of AR over 90 days) ₹65K; depreciation ₹1.2L; deferred tax true-up ₹2.8L; and 30 more.',
      analogy:
        'Filing your annual tax return — you\'re not making new transactions, you\'re recording the *implications* of transactions that already happened, plus estimates for things you owe but haven\'t been billed for yet.',
      whereItBreaks:
        'JEs live in Excel templates with no version control. The same JE gets re-prepared every month from scratch instead of as a template + numbers refresh. Reviewers don\'t have time to check workings, so they approve based on trust. Last-minute JEs from the controller bypass the workflow entirely. Anomalous entries (10x the normal amount, unusual GL combinations) sail through because nobody\'s pattern-matching.',
    },
    {
      number: 3,
      title: 'Reconciliations',
      whatItIs:
        'Proving that what\'s in the GL matches what\'s in the underlying source — bank statements, sub-ledgers, schedules, third-party confirmations.',
      whatHappens:
        'For every balance sheet account, somebody on the finance team prepares a reconciliation. Bank account: GL balance vs bank statement, with a list of reconciling items (deposits in transit, outstanding cheques). AR sub-ledger to GL: total of all open invoices = AR control account. Same for AP, fixed assets, inventory, prepaids, accruals, deferred revenue, lease liability, payroll liability, intercompany balances. Each rec needs a preparer, reviewer, and supporting documentation.',
      example:
        'Brew & Co\'s AR reconciliation: GL says ₹1.8 Cr in AR, sub-ledger total of 412 open invoices = ₹1.798 Cr. ₹20K difference. Investigation: a credit note posted to GL but not to sub-ledger. Fix it. Now reconciles. Multiply this by ~25 reconciliations across two entities.',
      analogy:
        'Reconciling your bank statement against your spending tracker app at month-end — except now you have 25 different accounts, each with its own "app," and any unexplained difference becomes an audit finding.',
      whereItBreaks:
        'Reconciliations are the single biggest time sink in close. They\'re done in Excel templates that get emailed around. Discrepancies are explained as "timing differences" and ignored, then compound month over month. Fixed asset and lease recs are particularly painful — the schedules live in separate spreadsheets that don\'t auto-tie to the GL. "Reconciled" often means "the controller signed it off" not "every line was actually checked."',
    },
    {
      number: 4,
      title: 'Review & Sign-Off',
      whatItIs:
        'The controller and CFO reviewing the draft financials before they\'re considered "closed."',
      whatHappens:
        'Once all JEs are posted and recs are done, the trial balance is locked. The controller runs **flux analysis** — comparing every P&L and BS line to prior month, prior year, and budget, and explaining any movement above a threshold. Each variance gets a written explanation. The controller reviews balance sheet accounts line by line, signs off on the financials. The CFO does a final review, asks questions, requests adjustments, signs off.',
      example:
        'Brew & Co\'s flux analysis flags: "Marketing spend +42% vs Feb (₹3.2L vs ₹2.25L). Driver: International Coffee Day campaign in March, budgeted ₹3L, came in ₹2.8L plus ₹40K unbudgeted Instagram ads." Controller adds the commentary, CFO accepts. After 3 rounds of CFO questions and 2 top-side adjustments (₹1L bonus accrual revision, ₹85K reclass from OpEx to COGS), the books are signed off on April 7th.',
      analogy:
        'Your senior reviewing your code before merging to main — they\'re looking for the things you might have missed, the patterns that smell wrong, the assumptions you didn\'t surface.',
      whereItBreaks:
        'Flux analysis is done by the controller manually pulling data into Excel and writing comments by hand for 60+ lines. CFO questions trigger another round of reconciliation work. Top-side adjustments at the eleventh hour bypass controls. The "close" gets pushed by a day, then two, then four — and now it\'s late for the board pack.',
    },
    {
      number: 5,
      title: 'Consolidation',
      whatItIs:
        'Combining the financials of multiple entities into a single set of group financial statements.',
      whatHappens:
        'Each entity has its own trial balance, in its own currency, possibly under its own GAAP. Consolidation: translate all entities to the group reporting currency at appropriate FX rates (closing rate for BS, average rate for P&L, historical rate for equity). Eliminate intercompany transactions and balances. Calculate minority interest if applicable. Generate consolidated P&L, BS, and cash flow.',
      example:
        'Brew & Co India: revenue ₹12 Cr, expenses ₹10 Cr, profit ₹2 Cr. Brew & Co Singapore: revenue S$200K, expenses S$170K, profit S$30K. After translation (1 SGD = ₹62): Singapore revenue ₹1.24 Cr, expenses ₹1.05 Cr. Intercompany elimination: India sold raw beans worth ₹15L to Singapore, Singapore booked it as inventory — eliminate ₹15L from both sides. Consolidated revenue: ₹12 Cr + ₹1.24 Cr - ₹15L = ₹13.09 Cr.',
      analogy:
        'Combining household finances when two earners file jointly — you don\'t double-count the rent one paid the other, and you have to translate everyone\'s contributions into one combined view.',
      whereItBreaks:
        'Consolidation lives in massive Excel models that one person owns and nobody else understands. Intercompany doesn\'t match (one side booked it, the other didn\'t). FX rates are pulled manually and applied inconsistently. Entity-level top-side adjustments after consolidation breaks the reconciliation between entity TB and consolidated TB. Auditors hate this stage and always find issues here.',
    },
    {
      number: 6,
      title: 'Reporting',
      whatItIs:
        'Turning the closed numbers into the artifacts that stakeholders actually consume.',
      whatHappens:
        '**Statutory reporting** — the formal P&L, Balance Sheet, Cash Flow Statement, and notes for filing. **Management reporting** — the board pack with executive summary, KPI dashboards, variance commentary, and forward-looking commentary. **Departmental reporting** — cost center P&Ls, budget-vs-actuals dashboards for each function head. **Regulatory filings** — GST returns, TDS, withholding, country-specific returns.',
      example:
        'April 8th: Brew & Co\'s board pack is published. P&L, BS, CF for India + Singapore + Consolidated. KPI dashboard with revenue growth (28% YoY), gross margin (42%, down from 44% — commentary explains green coffee price spike), DSO (52 days), DPO (38 days), cash position (₹4.2 Cr). Variance commentary on every line above 5% deviation. Distributed to 8 board members via secure portal.',
      analogy:
        'A photographer\'s edit — the raw shots are done, now you\'re picking the best frames, captioning them, and arranging them for an audience that won\'t see the 200 raw images you didn\'t include.',
      whereItBreaks:
        'Board packs are assembled in PowerPoint by hand, with charts copy-pasted from Excel. Numbers don\'t match between slides because someone updated one source and not the other. Commentary is written from memory, not from a structured variance analysis. Statutory and management reporting are produced from different data sets, so they don\'t reconcile to each other. Last-minute changes to the close (top-side adjustments) don\'t propagate to all the downstream reports.',
    },
  ],
  loopsAndConnections: `R2R is **strictly sequential** in a way P2P and O2C aren't. You can't start reconciliations before JEs are posted. You can't sign off without recs done. You can't consolidate before each entity is signed off. You can't report before consolidation.

This is why R2R bottlenecks compound:

- **A late JE delays reconciliation** — if a major accrual is posted late, every related rec has to be re-done.
- **A failed reconciliation delays sign-off** — controllers won't sign on a balance they can't prove.
- **A late entity close delays consolidation** — group can only close as fast as its slowest entity.
- **A consolidation issue delays reporting** — you can't publish a board pack on numbers that don't tie.
- **Top-side adjustments cascade backwards** — a CFO request at sign-off triggers JE → rec → review work all over again.

The goal of every CFO is to compress the close. "Best in class" is 3–5 days. Most mid-market companies sit at 8–15 days. The difference is mostly in **how much manual chasing, copy-pasting, and Excel work** the controller has to coordinate.

That's where automation value sits — not in posting transactions (the ERP already does that), but in the **coordination, reconciliation, review, and reporting layer** that the ERP does badly or not at all.`,
  whyItMattersForNeoflo: `R2R is Neoflo's **third vertical**, sequenced after P2P and O2C. The platform thesis says the same workflow engine that runs P2P invoice processing can run R2R close management — stages, owners, dependencies, sign-offs, audit trail. The data layer (already integrated with the ERP for P2P/O2C) is the same data layer R2R needs.

The pain is well-documented:

- Mid-market close cycles run 8–15 days — BlackLine and Trintech have proven the value of compressing this, but they're priced and built for enterprise.
- 60–70% of close time is spent on reconciliations and JE workflow, not on actual analysis.
- Flux analysis and variance commentary are 100% manual at most mid-market companies — the controller writes 60+ comments by hand each month.
- Consolidation is a single-person Excel dependency that creates massive audit and continuity risk.
- Board pack assembly takes 2–3 days of finance team time after close, every single month.

The sequencing question is **what to build first within R2R**. The Product Priority Map flags **Financial Close Management** as the P0 — the workflow engine that orchestrates close tasks, JE workflow, recs, review, and sign-off, with dependencies and audit trail. **Management Reporting & KPI Dashboards** is P1 (high impact, 85–90% V1 automation). **Consolidation** and **Statutory Reporting** are P2 — high value but high build effort and segment-specific complexity.

R2R is also the stage where Neoflo's defensibility compounds: a customer running P2P + O2C + R2R on Neoflo has integrated data across the entire FinOps spectrum. That's a switching cost moat that single-workflow competitors can't match.`,
};
