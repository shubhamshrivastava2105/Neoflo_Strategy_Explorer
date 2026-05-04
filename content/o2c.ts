// Drop into: content/o2c.ts
import type { ProcessExplainerData } from './types';

export const o2cData: ProcessExplainerData = {
  slug: 'o2c',
  title: 'Order-to-Cash (O2C)',
  shortName: 'O2C',
  emoji: '💰',
  oneLiner:
    'The end-to-end process a B2B company runs to turn a customer order into cash in the bank.',
  stageOrder: [
    'Customer Onboarding',
    'Order Management',
    'Order Delivery',
    'Billing',
    'Validation',
    'AR Management',
    'Dunning & Collection',
    'Cash Application',
    'Dispute Resolution',
  ],
  runningExample:
    'You run a wholesale coffee bean business. A new café, **Brew & Co**, wants to start buying from you.',
  stages: [
    {
      number: 1,
      title: 'Customer Onboarding & Credit Management',
      whatItIs:
        'Setting up a new customer in your systems and deciding how much credit to extend them.',
      whatHappens:
        'You collect KYC info, verify they\'re a real business, check their credit history (via Experian, D&B, CIBIL, or internal scoring), and assign them a credit limit and payment terms.',
      example:
        'Brew & Co submits their details. You check their credit, decide they\'re good for ₹2 lakh of credit, and set payment terms at Net 30.',
      analogy: 'A bank deciding your credit card limit before issuing the card.',
      whereItBreaks:
        'Onboarding takes 2–4 weeks manually. Credit data is stale by the time it\'s used. Risk profiles aren\'t updated as customers\' payment behavior changes.',
    },
    {
      number: 2,
      title: 'Order Management',
      whatItIs: 'Taking in a customer order, validating it, and booking it.',
      whatHappens:
        'Order arrives (via email, EDI, portal, rep). You check: Is inventory available? Is pricing correct? Does this order fit within the customer\'s approved credit limit? If yes, you confirm the order and push it to fulfillment.',
      example:
        'Brew & Co orders 50 kg of beans worth ₹50,000. You confirm stock, check that ₹50,000 fits within their ₹2 lakh limit, and accept the order.',
      analogy:
        'Amazon checking your cart, payment method, and stock before you click "Place Order."',
      whereItBreaks:
        'Orders come in via too many channels. Credit checks are manual or skipped. Pricing errors are common.',
    },
    {
      number: 3,
      title: 'Order Delivery Fulfillment',
      whatItIs: 'Physically delivering the goods (or completing the service).',
      whatHappens:
        'Warehouse picks and packs. Goods ship. Customer signs proof of delivery (POD). POD flows back into the system and becomes the trigger for billing.',
      example:
        'Your warehouse ships 50 kg to Brew & Co. The café owner signs the POD on delivery.',
      analogy:
        'The Swiggy delivery person handing you food and you confirming receipt in the app.',
      whereItBreaks:
        'PODs get lost. Delivery confirmations don\'t flow to billing on time. Partial deliveries are badly tracked.',
    },
    {
      number: 4,
      title: 'Billing',
      whatItIs: 'Generating the invoice.',
      whatHappens:
        'You take the delivered quantity, apply contract pricing, taxes (GST, VAT, sales tax), discounts, and any customer-specific terms. Invoice gets sent to the customer via email, portal, EDI, or e-invoicing.',
      example:
        'You create an invoice: ₹50,000 + 18% GST = ₹59,000, due in 30 days. Email it to Brew & Co.',
      analogy:
        'The restaurant bill — except the customer has 30 days to pay, not 30 seconds.',
      whereItBreaks:
        'Invoice errors (wrong pricing, wrong tax) cause disputes downstream. E-invoicing compliance varies by country. Manual invoice generation is slow.',
    },
    {
      number: 5,
      title: 'Validation & Approval',
      whatItIs:
        'Internal checks before the invoice is recognized as revenue.',
      whatHappens:
        'Finance verifies the invoice matches the purchase order and the proof of delivery (3-way match). Tax and pricing are checked. Revenue recognition rules are applied. Approval routing kicks in if needed.',
      example:
        'Your finance team confirms ₹59,000 matches the PO from Brew & Co, GST is right, and signs it off.',
      analogy:
        'A second person at the restaurant verifying your bill before it goes into their accounting system.',
      whereItBreaks:
        '3-way match is done manually. Approval chains are slow. Revenue recognition errors create audit issues.',
    },
    {
      number: 6,
      title: 'Accounts Receivable Management',
      whatItIs: 'Tracking the money customers owe you.',
      whatHappens:
        'The invoice now lives as a receivable on your books. You track it through aging buckets — 0–30 days, 31–60, 61–90, 90+. You monitor DSO (Days Sales Outstanding) — the average time it takes to collect cash.',
      example:
        'The ₹59,000 sits in your "money owed" list. Day 10, day 20, day 25 — still not paid, but not late yet.',
      analogy:
        'Your phone showing "EMI due in 5 days" reminders — you\'re just watching what\'s owed.',
      whereItBreaks:
        'AR data lives in ERP exports. Dashboards are built in Excel monthly. CFOs have no real-time view of cash exposure.',
    },
    {
      number: 7,
      title: 'Dunning & Collection',
      whatItIs: 'Chasing customers who haven\'t paid.',
      whatHappens:
        'A sequence of reminders — polite, firm, then escalating — goes out by email, SMS, and phone call. Collectors prioritize by value × days overdue × risk. Promise-to-pay commitments are tracked. In extreme cases, accounts go to legal or collections agencies.',
      example:
        'Day 31: polite reminder email to Brew & Co. Day 45: firmer email. Day 60: collections person calls. Day 90: threat to stop future orders.',
      analogy:
        'How your credit card company first texts you, then calls, then threatens to report you to CIBIL.',
      whereItBreaks:
        'Reminders are ad hoc. Collectors work from spreadsheets. Promise-to-pay isn\'t tracked. Customers in dispute still get dunned, which damages the relationship.',
    },
    {
      number: 8,
      title: 'Cash Application & Reconciliation',
      whatItIs:
        'Matching an incoming payment to the invoice(s) it\'s paying for.',
      whatHappens:
        'Payment lands in your bank. You need to figure out: which customer, which invoice(s), full payment or partial? Then you update the AR ledger to mark those invoices as paid.',
      example:
        'Brew & Co transfers ₹59,000 — but the reference just says "payment." You have to look up the customer and the open invoices to figure out what it\'s paying for.',
      analogy:
        'Your mom sends you ₹5,000 via UPI with no note, and you have to remember if it was for rent, groceries, or your birthday.',
      whereItBreaks:
        'Customers pay lump sums across multiple invoices. Short-pay (paying less than the invoice amount). Wrong reference numbers. Multi-currency payments. Manual matching consumes 20–30% of AR team time.',
    },
    {
      number: 9,
      title: 'Dispute Resolution',
      whatItIs: 'Resolving why a customer is refusing to pay.',
      whatHappens:
        'Customer disputes the invoice — wrong price, short delivery, bad quality, tax error, billing error. You investigate: sales handles pricing disputes, ops handles quality/delivery, finance handles billing errors. If the dispute is valid, you issue a credit note. If not, you push for payment.',
      example:
        'Brew & Co says 10 kg of beans were stale. They\'re only paying ₹47,000, not ₹59,000. You investigate, agree, issue a ₹12,000 credit note.',
      analogy:
        'Ordered a pizza, half was burnt, and you\'re arguing with Zomato support about a partial refund.',
      whereItBreaks:
        'Disputes sit in email threads for weeks. No shared system of record between sales, ops, and finance. Credit notes are issued slowly or incorrectly. Unresolved disputes = aged receivables = bad DSO.',
    },
  ],
  loopsAndConnections: `The diagram at the top is the **happy path** — the flow when everything goes right. In reality, it's not that clean:

- **Dispute Resolution loops back to Billing** — when a dispute is valid, you issue a credit note or reissue the invoice.
- **Collections feeds back to Credit Management** — bad payers get their credit limits cut or payment terms tightened.
- **Cash Application feeds AR** — every matched payment closes out an open receivable.
- **Validation can loop back to Billing** — if the 3-way match fails, the invoice gets corrected.

The messy loops between stages are where cash leaks, disputes fester, and manual work compounds. That's also where automation value sits — not on the happy path, but in the exception handling.`,
  whyItMattersForNeoflo: `O2C is a natural second vertical for Neoflo (after P2P). The platform is already workflow-agnostic — the same stage-based, role-based, entity-scoped architecture that runs P2P can run O2C.

The pain is well-documented:

- DSO of 60–90+ days at most mid-market B2B companies
- 60–70% of AR team time spent on manual chasing and matching
- Disputes that sit unresolved for weeks because there's no shared system of record
- CFOs with no real-time cash visibility

The opportunity is clear. The remaining question is sequencing — which module do we tackle first, and with which client.`,
};
