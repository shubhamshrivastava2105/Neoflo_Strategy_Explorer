# Design Direction

## North star references

The artifact should feel like:

- **Stripe Press / increment.com** — editorial, generous whitespace, serious typography
- **Lenny Rachitsky's blog post layouts** — confident, no fluff, scannable
- **Maven course pages** — clear information hierarchy, content-forward
- **Pitch's investor decks aesthetic** — bold but minimal

It should **NOT** feel like:

- A SaaS marketing site (no big colorful gradients, no stock photos, no testimonial sections)
- A Notion published page (which is what most internal docs look like when shared externally)
- A startup landing page (no "Trusted by" logo wall, no fake metrics counters)

## Typography

| Use | Font | Size | Weight |
|-----|------|------|--------|
| Body | Inter | 16px (mobile) / 17px (desktop) | 400 |
| H1 (page title) | Inter | 40–48px | 700 |
| H2 (section) | Inter | 28–32px | 600 |
| H3 (stage / sub-section) | Inter | 20–22px | 600 |
| Small / labels | Inter | 13–14px | 500, uppercase, tracked |
| Tables | Inter | 14–15px | 400 |
| Code / numbers | JetBrains Mono (only if needed) | 13–14px | 400 |

Line height: 1.6 for body, 1.3 for headings. Max measure: 70ch for prose.

**One font family.** Inter does it all. Don't introduce a serif "for editorial feel" — it's a 4-hour build, not a redesign.

## Color

Keep it spare. Five tokens.

| Token | Light value | Use |
|-------|-------------|-----|
| `bg` | `#FAFAF9` (warm off-white) | Page background |
| `surface` | `#FFFFFF` | Cards |
| `text` | `#0A0A0A` | Body |
| `text-muted` | `#525252` | Captions, table secondary, "Read:" tags |
| `border` | `#E5E5E5` | Dividers, card borders |
| `accent` | `#4F46E5` (indigo-600) | Links, emphasized buttons, stage numbers |
| `warning` | `#B45309` (amber-700) | "Where it breaks" left-border accent |

That's it. No gradients. No shadows beyond a single subtle one for elevated cards.

## Layout grid

- Max content width: **720px** for prose pages (P2P/O2C/R2R explainers).
- Max content width: **1100px** for the strategy page (tables need room).
- Side gutters: 24px mobile, 48px tablet, generous on desktop.
- Section vertical rhythm: 64px between major sections, 32px within.

## Components — visual specs

### Stage card (used in process explainers)

```
┌─────────────────────────────────────────────────┐
│  01     Vendor Onboarding                        │ ← Stage number muted, large title
│         & Master Data Management                 │
│                                                  │
│  WHAT IT IS                                      │ ← Small, uppercase, muted label
│  Setting up a new supplier in your systems       │
│  before you can buy from them.                   │
│                                                  │
│  WHAT HAPPENS                                    │
│  You collect KYC info (PAN, GST, bank account)…  │
│                                                  │
│  EXAMPLE                                         │
│  PackRight submits their PAN, GST, and bank      │
│  details. Your AP team verifies the GST is       │
│  active...                                       │
│                                                  │
│  ANALOGY                                         │
│  A new employee filling out joining paperwork    │
│  before they can be paid.                        │
│                                                  │
│ ▌WHERE IT BREAKS                                 │ ← Amber left-border, ~3px
│ ▌Onboarding takes 2–4 weeks manually...          │
└─────────────────────────────────────────────────┘
```

The 5 sub-blocks within a stage are **not** boxed cards — they're labeled paragraph blocks. Only the "Where it breaks" gets a visual treatment (amber left border). Avoid card-in-card-in-card nesting.

### Competitive table

Plain HTML table, styled flat. No alternating row colors (too noisy). Clear column headers, single-pixel border-bottom on header. Comfortable row padding (12–16px). First column slightly wider than others. Numerical/short columns center-aligned, prose columns left-aligned.

Below each table, the "Read:" takeaway sits as an italicized paragraph indented from the left, with a thin accent-colored vertical bar.

### Process flow diagram (top of each explainer page)

Horizontal, simple boxes connected by arrows. Inline SVG, ~700px wide on desktop, scrolls horizontally on mobile (or wraps).

```
[Stage 1] → [Stage 2] → [Stage 3] → ... → [Stage N]
```

Each box: rounded rectangle, subtle border, stage name inside. Arrows: thin lines with arrowheads. **No animation.** No icons inside boxes — just text. This is documentation, not motion design.

### Sequencing timeline (in strategy page)

Custom horizontal timeline showing the three phases:

```
NOW ─────────── Q3 2026 ─────────── Q1 2027 ────────── Q4 2027
│               │                   │                   │
P2P (lock as    O2C (billing +      R2R (close mgmt
the wedge)      cash app +          + JE workflow +
                collections)        recs only)
```

SVG with three labeled phase markers along a horizontal line. Each phase shows what ships in that window. Below the timeline, a single line of text describing the non-negotiable.

## Mobile behavior

- Top nav collapses to a hamburger.
- 4 entry cards on home stack vertically.
- Process flow diagram becomes vertical (stages stacked, arrows pointing down).
- Tables become **horizontally scrollable within their container** — never restructure tables into card lists, that destroys the comparison value.
- Sticky strategy-page section nav becomes a top sheet (collapsed by default, tap to expand).

## Accessibility

- All text contrast ≥ AA (this is easy with the palette above).
- All interactive elements keyboard-focusable.
- Skip-to-content link.
- Real semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`, `<h1>` once per page).
- Tables have `<th scope="col">`.
- The flow diagram and 2x2 gap grid SVGs include text alternatives.

## What to deliberately NOT design

- A logo (use the words "FinOps Explorer" set tight in Inter)
- Hero animation
- Hover micro-interactions beyond standard link underlines and button states
- Empty-state illustrations
- A footer with social links (Shubham's name + Neoflo + a link to the Notion source if applicable, that's it)
