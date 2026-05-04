# Customer Evidence Integration — Addendum

This file is an addendum to the original prototype documentation package. It describes
the new `/customers` route that pulls from `content/customers.ts` and the small changes
this requires elsewhere.

## What's new

A new content file is included: `content/customers.ts`.

It contains a structured synthesis of 12+ documented customer conversations from
Neoflo's pipeline — five major signals, three underlying patterns, the changes-to-strategy
mapping, and open questions. The data is the strongest evidence layer in the entire
artifact and should be presented prominently.

## Where it lives in the IA

```
/                  Home (now 5 entry cards instead of 4)
├── /p2p
├── /o2c
├── /r2r
├── /customers     ← NEW: customer evidence synthesis
└── /strategy
```

The `/customers` route is the proof layer for the strategy. It should be linked from
both the home page (as one of the entry cards) and from inside the strategy page
(wherever a customer signal validates a claim).

## Updates to the home page

Update the home page to show **5 entry cards** instead of 4. The fifth card:

- Emoji: 💡 or 📊 (use whichever doesn't conflict with R2R's 📊 — try 💡)
- Title: "Customer Evidence"
- Subtitle: "What 12+ buyer conversations actually told us"
- Stages line: "5 signals · 3 patterns"
- Card accent: Use a slightly different visual treatment to mark this as the "evidence" card

In the responsive grid:
- Desktop: 5 cards in a row, or 3+2 layout
- Tablet: 2 columns × 3 rows (last row has 1 card)
- Mobile: stacked

## The /customers page layout

Use a similar pattern to the strategy page but with stronger visual hierarchy on
each signal. Each signal is the "headline" — make them feel like big claims with
evidence underneath.

```
┌──────────────────────────────────────────────────────────────┐
│ [Top Nav]                                                    │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  💡 Customer Evidence                                        │
│  What 12+ buyer conversations actually told us               │
│                                                              │
│  By Shubham Shrivastava · Head of Product, Neoflo · May 2026 │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─ Why this exists ────────────────────────────────────┐   │
│  │ The Strategic Bet Memo v1 was built on desk research │   │
│  │ — G2, Gartner, vendor websites, market reports. v2   │   │
│  │ is built on our actual customer conversations,       │   │
│  │ every one documented in our Notion. This page is     │   │
│  │ the synthesis: what 12+ buyers told us, what         │   │
│  │ patterns emerged, and how it changed the strategy.   │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Sticky section nav (desktop, right side):                  │
│  • Signal 1 — Multi-product validated                       │
│  • Signal 2 — India priced itself out                       │
│  • Signal 3 — SAP VIM is the incumbent                      │
│  • Signal 4 — US is warm-channel-only                       │
│  • Signal 5 — SEA R2R unproven                              │
│  • Underlying patterns                                       │
│  • How this changed the strategy                            │
│  • Open questions                                            │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Signal 1 — The multi-product platform thesis is            │
│  validated by lost deals                                    │
│                                                              │
│  [Summary paragraph]                                        │
│                                                              │
│  Evidence:                                                   │
│                                                              │
│  ┌─ Hitachi Vantara · Mathew Sia, Controller · Nov 2025 ┐  │
│  │  ❝They are more interested in cash application,       ❞ │
│  │   which we did not have, in Nov.                       │ │
│  │                                                         │ │
│  │  Context: Met at SSON Singapore. Demo done Nov 14.    │ │
│  │  Outcome: Deal went silent. They walked because we    │ │
│  │  were AP-only when they needed AR.                    │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌─ Spectrum Brands · Utpala Shelar, VP Controller · Apr 26 ┐│
│  │  ❝Evaluated HighRadius for deductions and cash         ❞ ││
│  │   application — got quotes of $1.2–1.5M, couldn't      ││
│  │   justify the ROI. Rejected.❞                          ││
│  │                                                         ││
│  │  Context: Year 5 of S/4HANA migration. Flagged AP +   ││
│  │  AR + deductions + cash app as "open territory."      ││
│  │  Outcome: Live opportunity. Tammy + Tom intros next.  ││
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  What it means:                                              │
│  [The whatItMeans paragraph in italic, indented]            │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  [Signal 2, 3, 4, 5 — same structure]                       │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Underlying patterns                                         │
│  [Three patterns laid out as cards]                         │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  How this changed the strategy                              │
│  [Mapping table: change → driving signal]                   │
│                                                              │
│  → Read the full strategic memo                             │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  What we still don't know                                    │
│  [5 open questions as a bullet list]                        │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

## New components needed

Add these to `components/`:

1. **EvidenceCard.tsx** — The blockquote-style card for each piece of evidence.
   - Props: `company`, `role`, `when`, `quote`, `context`, `outcome`
   - Visual: thin left border (indigo accent), company name + role + date in muted
     header, quote in italic, context and outcome as small muted prose below
   - Quote uses real quotation marks, slightly larger font than body

2. **SignalSection.tsx** — Wraps a full signal: title + summary + evidence cards
   + "What it means" closing paragraph.
   - Props: `signal: CustomerSignal`
   - Number is large and muted to the left of the title (similar treatment to
     stages on explainer pages)

3. **PatternCard.tsx** — For the underlying patterns section.
   - Props: `pattern: Pattern`
   - If `data` array is provided, render as a 2-column key/value list
   - If just description, render as prose

## Updates to the strategy page

Add cross-links from the strategy page to the customer evidence:

- In the TL;DR, after "Hitachi Vantara walked away" — add a small inline link:
  `(see evidence →)` linking to `/customers#signal-1`
- After the "₹1.6 per invoice" data point — `(see evidence →)` linking to
  `/customers#signal-2`
- After the SAP VIM cohort introduction — `(see evidence →)` to `/customers#signal-3`
- After the "US is warm-channel-only" recommendation — `(see evidence →)` to
  `/customers#signal-4`
- After the "SEA R2R demand is unproven" framing — `(see evidence →)` to
  `/customers#signal-5`

These cross-links are what make the artifact feel rigorous instead of opinion-y.

## Updates to the strategy page header

Add a small pill badge next to the date:

```
By Shubham Shrivastava · Head of Product, Neoflo · May 2026 ·
[evidence-backed by 12+ customer conversations]
```

The pill links to `/customers`.

## Updates to types.ts

Add to `lib/types.ts`:

```typescript
import type { CustomerEvidenceData, CustomerSignal, Pattern } from '../content/customers';

// Re-export so components can import from a single types file
export type { CustomerEvidenceData, CustomerSignal, Pattern };
```

(or just import directly from `content/customers` in the components — either works)

## Build phase placement

Where to add this in the original 6-phase build plan:

- **Phase 2 (content data files):** Add `content/customers.ts` to the list (5 files
  total now instead of 4).
- **Phase 3 or 4 (components):** Build `EvidenceCard`, `SignalSection`, `PatternCard`
  alongside the other components.
- **Phase 5 (pages):** Add `app/customers/page.tsx`. Update home to 5 entry cards.
  Add cross-links in `app/strategy/page.tsx`.
- **Phase 6 (polish):** Verify cross-links work and the customer page reads well
  on mobile.

Estimated additional time: ~90 minutes on top of the original 3–8 hours.

## A note on tone

The customer evidence section is the most narratively powerful part of the entire
artifact. Real names, real quotes, real outcomes. **Don't dilute it with corporate
language.** Keep the verbatim quotes intact. Keep the "outcome: deal went silent"
unvarnished. The honesty of the synthesis is what makes it credible — sanitizing it
into "we identified an opportunity to expand our product scope" would destroy what
makes it valuable to leadership.

If anything makes you uncomfortable showing a public stranger (e.g., "Welspun went
silent"), use a softer phrasing or omit specific company names while keeping the
pattern. But err toward honesty.
