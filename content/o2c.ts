// Drop into: content/o2c.ts
import type { ProcessExplainerData } from './types';

export const o2cData: ProcessExplainerData = {
  slug: 'o2c',
  title: 'Order-to-Cash (O2C)',
  shortName: 'O2C',
  emoji: '💰',
  oneLiner:
    'If P2P was cash going *out* (paying suppliers), O2C is the mirror image — cash coming *in*: the end-to-end process a B2B company runs to turn a customer order into cash in the bank.',
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
      simple: `A new friend wants to drink your lemonade *now* and pay you *later*. Smart move before you say yes: check — is this friend good for it? Do they usually pay people back? You decide how much you'll let them owe at any one time (say, up to $20), and when they have to pay you back (within 30 days). Now they're officially a **"pay-later" friend**. 🤝`,
      title: 'Customer Onboarding & Credit Management',
      whatItIs:
        'Setting up a new customer in your systems and deciding how much credit to extend them.',
      whatHappens:
        'You collect KYC info, verify they\'re a real business, check their credit history (via Experian, D&B, or internal scoring), and assign them a credit limit and payment terms.',
      example:
        'Brew & Co submits their details. You check their credit, decide they\'re good for $200,000 of credit, and set payment terms at Net 30.',
      analogy: 'A bank deciding your credit card limit before issuing the card.',
      whereItBreaks:
        'Onboarding takes 2–4 weeks manually. Credit data is stale by the time it\'s used. Risk profiles aren\'t updated as customers\' payment behavior changes.',
    },
    {
      number: 2,
      simple: `Your friend says *"I want 10 cups of lemonade!"* Before you start pouring, you do a quick think: Do I even *have* 10 cups right now? Is my **price** right? And does this push them over the $20 they're allowed to owe? If everything checks out, you say *"Deal!"* and start pouring. 🍋`,
      title: 'Order Management',
      whatItIs: 'Taking in a customer order, validating it, and booking it.',
      whatHappens:
        'Order arrives (via email, EDI, portal, rep). You check: Is inventory available? Is pricing correct? Does this order fit within the customer\'s approved credit limit? If yes, you confirm the order and push it to fulfillment.',
      example:
        'Brew & Co places a wholesale order of beans worth $50,000. You confirm stock, check that $50,000 fits within their $200,000 limit, and accept the order.',
      analogy:
        'Amazon checking your cart, payment method, and stock before you click "Place Order."',
      whereItBreaks:
        'Orders come in via too many channels. Credit checks are manual or skipped. Pricing errors are common.',
    },
    {
      number: 3,
      simple: `You actually hand over the 10 cups. And — really important — your friend says *"Yep, got them!"* (maybe with a thumbs up). That little *"got it!"* is the thing that tells you it's now okay to ask for the money. No handover, no asking. 🥤`,
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
      simple: `Now you make the note that says how much they owe: *"10 cups = $10, please pay me within 30 days."* You hand them that note. Grown-ups have a fancy word for this friendly little "you-owe-me" slip — they call it an **invoice**. ✉️`,
      title: 'Billing',
      whatItIs: 'Generating the invoice.',
      whatHappens:
        'You take the delivered quantity, apply contract pricing, taxes (sales/use tax in the US, or VAT/GST abroad), discounts, and any customer-specific terms. Invoice gets sent to the customer via email, portal, EDI, or e-invoicing.',
      example:
        'You create an invoice: $50,000, due in 30 days. Email it to Brew & Co.',
      analogy:
        'The restaurant bill — except the customer has 30 days to pay, not 30 seconds.',
      whereItBreaks:
        'Invoice errors (wrong pricing, wrong tax) cause disputes downstream. E-invoicing compliance varies by country. Manual invoice generation is slow.',
    },
    {
      number: 5,
      simple: `Before you hand over that "you owe me" note, you double-check your *own* note: did I write 10 cups (what they really got) and the right price? It would be embarrassing — and start a fight — to ask for the wrong amount. So you check your own homework *first*. ✔️`,
      title: 'Validation & Approval',
      whatItIs:
        'Internal checks before the invoice is recognized as revenue.',
      whatHappens:
        'Finance validates the invoice against the sales order, the proof of delivery, and the contract / price list, then applies revenue-recognition rules and any approval routing. (This is the sell-side mirror of the AP 3-way match — but here you are checking your *own* invoice before it goes out, not a supplier\'s.)',
      example:
        'Your finance team confirms the $50,000 invoice matches the sales order and the delivery to Brew & Co, the pricing is right, and signs it off.',
      analogy:
        'A second person at the restaurant double-checking the bill they are about to hand you against what you actually ordered.',
      whereItBreaks:
        'Validation is done manually. Approval chains are slow. Revenue-recognition errors create audit issues.',
    },
    {
      number: 6,
      simple: `Now you keep a list on the fridge of every friend who owes you money, and for how long: *"Tommy owes $10 — it's been 10 days… 20 days… 25 days."* You're just watching the clock. Not chasing anyone yet — just keeping a careful eye on who owes what. 📋`,
      title: 'Accounts Receivable Management',
      whatItIs: 'Tracking the money customers owe you.',
      whatHappens:
        'The invoice now lives as a receivable on your books. You track it through aging buckets — 0–30 days, 31–60, 61–90, 90+. You monitor DSO (Days Sales Outstanding) — the average time it takes to collect cash.',
      example:
        'The $50,000 sits in your "money owed" list. Day 10, day 20, day 25 — still not paid, but not late yet.',
      analogy:
        'Your phone showing "EMI due in 5 days" reminders — you\'re just watching what\'s owed.',
      whereItBreaks:
        'AR data lives in ERP exports. Dashboards are built in Excel monthly. CFOs have no real-time view of cash exposure.',
    },
    {
      number: 7,
      simple: `A friend hasn't paid, and the 30 days are up. So you start reminding them — nicely at first (*"hey, don't forget!"*), then more firmly, and finally you go knock on their door. And you chase the friends who owe the **most**, first. 🏃`,
      title: 'Dunning & Collection',
      whatItIs: 'Chasing customers who haven\'t paid.',
      whatHappens:
        'A sequence of reminders — polite, firm, then escalating — goes out by email, SMS, and phone call. Collectors prioritize by value × days overdue × risk. Promise-to-pay commitments are tracked. In extreme cases, accounts go to legal or collections agencies.',
      example:
        'Day 31: polite reminder email to Brew & Co. Day 45: firmer email. Day 60: collections person calls. Day 90: threat to stop future orders.',
      analogy:
        'How your credit card company first texts you, then calls, then threatens to report you to the credit bureau.',
      whereItBreaks:
        'Reminders are ad hoc. Collectors work from spreadsheets. Promise-to-pay isn\'t tracked. Customers in dispute still get dunned, which damages the relationship.',
    },
    {
      number: 8,
      simple: `Lots of friends owe you money for lemonade. Each one has a little *"you owe me $5"* note — that's the **invoice**. But your friends pay in a messy, sneaky way: they drop coins into your piggy bank and run off without saying who they are or what it's for! 🐷

So every morning you open the piggy bank, find money, and play **detective**:

- 🕵️ **Who** gave me this? Even with no name, you might go *"Aha — Tommy always pays in sticky nickels!"* And if you truly *can't* tell, you do **not** guess — you put it in a "figure-out-later" box so the money is never, ever lost.
- 🕵️ **Which** lemonade was it paying for? One coin might pay for one cup; a big handful might pay for five at once.
- 🕵️ **Why** is it sometimes *less* than they owed? Maybe a grown-up took a little as "tax" (you'll get that back later — okay). Maybe you gave them a discount (okay). Or maybe they're shorting you (uh-oh — time to chase!).

The one golden rule: **the money is never lost.** Even on the messiest day, you at least know *whose* it is, and you tuck it somewhere safe until you figure out the rest. 💰`,
      title: 'Cash Application & Reconciliation',
      whatItIs:
        'Matching an incoming payment to the invoice(s) it\'s paying for.',
      whatHappens:
        'Payment lands in your bank. You need to figure out: which customer, which invoice(s), full payment or partial? Then you update the AR ledger to mark those invoices as paid.',
      example:
        'Brew & Co transfers $50,000 — but the reference just says "payment." You have to look up the customer and the open invoices to figure out what it\'s paying for.',
      analogy:
        'Your friend sends you $50 via Venmo with no note, and you have to remember if it was for rent, your share of dinner, or a concert ticket.',
      whereItBreaks:
        'Customers pay lump sums across multiple invoices. Short-pay (paying less than the invoice amount). Wrong reference numbers. Multi-currency payments. Manual matching consumes 20–30% of AR team time.',
    },
    {
      number: 9,
      simple: `Sometimes a friend says *"I'm NOT paying full price — half my lemonade was warm and yucky!"* Now you have to figure out: are they right? If yes, you say *"fair enough"* and knock some money off (grown-ups call that a **credit note**). If they're just being sneaky, you stand your ground and ask for the rest. Either way, you sort it out so the argument doesn't drag on for weeks. 🤔`,
      title: 'Dispute Resolution',
      whatItIs: 'Resolving why a customer is refusing to pay.',
      whatHappens:
        'Customer disputes the invoice — wrong price, short delivery, bad quality, tax error, billing error. You investigate: sales handles pricing disputes, ops handles quality/delivery, finance handles billing errors. If the dispute is valid, you issue a credit note. If not, you push for payment.',
      example:
        'Brew & Co says part of the shipment was stale. They\'re only paying $40,000, not $50,000. You investigate, agree, issue a $10,000 credit note.',
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
