# Page-by-Page Wireframes

Each section below describes one page: what's on it, in what order, and what the reader should walk away with.

---

## `/` — Home

**Job-to-be-done:** Tell the visitor in 10 seconds what this is, and let them choose their entry point.

**Layout (top to bottom):**

```
┌─────────────────────────────────────────────────────────────┐
│  [Top Nav: Logo "FinOps Explorer"  P2P  O2C  R2R  Strategy] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   FinOps, explained.                                        │
│   What every B2B finance team actually does — and           │
│   where the market is going.                                │
│                                                             │
│   A field guide to the three workflows that run             │
│   every finance team on earth: Procure-to-Pay,              │
│   Order-to-Cash, and Record-to-Report. Plus a               │
│   competitive map of who's building what.                   │
│                                                             │
│   By Shubham Shrivastava · Head of Product, Neoflo          │
│   May 2026                                                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────┐│
│   │   📦     │  │   💰     │  │   📊     │  │    🎯      ││
│   │   P2P    │  │   O2C    │  │   R2R    │  │  Strategy  ││
│   │ Procure- │  │ Order-to-│  │ Record-  │  │ Where the  ││
│   │ to-Pay   │  │  Cash    │  │ to-Report│  │ bets are   ││
│   │  7 stages│  │ 9 stages │  │ 6 stages │  │ Memo + map ││
│   └──────────┘  └──────────┘  └──────────┘  └────────────┘│
│                                                             │
├─────────────────────────────────────────────────────────────┤
│   How to read this                                          │
│                                                             │
│   The three process pages explain what P2P, O2C, and R2R    │
│   actually are — using one running example (Brew & Co,      │
│   a wholesale coffee bean business) flowing through every   │
│   stage of every process.                                   │
│                                                             │
│   The Strategy page is the opinionated part: market sizing, │
│   competitor map, and where Neoflo should bet.              │
│                                                             │
│   Total reading time: ~25 minutes for everything,           │
│   ~5 minutes per process, ~10 for strategy.                 │
└─────────────────────────────────────────────────────────────┘
```

**Notes:**
- Hero copy is direct, not marketing-y. No "Welcome to..." filler.
- The 4 entry cards are the navigation. Clicking goes to the section.
- "How to read this" sets expectations on length — important for time-pressed readers.
- Footer: "Built with Claude Code · Source on GitHub (link if open) · Last updated [date]"

---

## `/p2p`, `/o2c`, `/r2r` — Process explainer pages

All three follow the **identical** template. The component is `<ProcessExplainer data={p2pData} />`.

**Layout (top to bottom):**

```
┌─────────────────────────────────────────────────────────────┐
│  [Top Nav]                                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   📦 Procure-to-Pay (P2P)                                   │
│   The end-to-end process a B2B company runs to turn a       │
│   need ("we need 50kg of coffee bean packaging") into a     │
│   paid supplier invoice.                                    │
│                                                             │
│   ┌─ Reading time: 5–7 min ──────────────────────────────┐ │
│   │  7 stages · One example · One platform thesis        │ │
│   └──────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   The seven stages, in order:                               │
│                                                             │
│   [Vendor Onboarding] → [Requisition] → [PO] → [Goods       │
│   Receipt] → [Invoice Receipt] → [3-Way Match] → [Payment]  │
│                                                             │
│   ↑ Inline SVG flow diagram, simple boxes + arrows ↑        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   The running example                                       │
│                                                             │
│   You run Brew & Co, a wholesale coffee bean business...    │
│   [The Brew & Co setup paragraph from the explainer]        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Stage 1 — Vendor Onboarding & Master Data Management      │
│                                                             │
│   ┌─ What it is ────────────────────────────────────────┐  │
│   │  Setting up a new supplier in your systems...       │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   ┌─ What happens ──────────────────────────────────────┐  │
│   │  You collect KYC info...                            │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   ┌─ Example ───────────────────────────────────────────┐  │
│   │  PackRight submits their PAN, GST...                │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   ┌─ Analogy ───────────────────────────────────────────┐  │
│   │  A new employee filling out joining paperwork...    │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   ┌─ Where it breaks ─────────────────────── ⚠ ─────────┐  │
│   │  Onboarding takes 2–4 weeks manually...             │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   [Stage 2, 3, ... 7 — same structure]                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   How the stages connect                                    │
│   [The "loops and connections" paragraph]                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Why this matters for Neoflo                               │
│   [The Neoflo POV paragraph + the platform thesis]          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ← Previous: Home    Next: Order-to-Cash →                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Visual treatment per stage:**
- Stage number is large and muted (e.g. light gray "01" behind the title).
- Each of the 5 sub-blocks (What it is / What happens / Example / Analogy / Where it breaks) is a labeled card.
- The "Where it breaks" card has a subtle warning tint (amber/red border-left), making the pain visible at a glance.
- Stages are separated by generous vertical space, not horizontal lines.

**Mobile:** Stack everything. Flow diagram becomes vertical. Stage cards remain readable.

---

## `/strategy` — The competitive memo

**Job-to-be-done:** Make the strategic recommendation legible, scannable, and defensible.

**Layout (top to bottom):**

```
┌─────────────────────────────────────────────────────────────┐
│  [Top Nav]                                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   🎯 Where Neoflo should compete in FinOps                  │
│   A competitive landscape, segment-by-segment, plus the     │
│   sequenced bet for the next 18 months.                     │
│                                                             │
│   By Shubham Shrivastava · Head of Product, Neoflo          │
│   May 2026 · Draft v1                                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─ TL;DR ─────────────────────────────────────────────┐  │
│   │  Stay sequenced P2P → O2C → R2R, but reframe the    │  │
│   │  bet. Our defensible position is the multi-workflow │  │
│   │  FinOps platform built for Southeast Asia mid-      │  │
│   │  market with India-grade engineering economics.     │  │
│   │  The threat isn't BlackLine or Tipalti — they don't │  │
│   │  compete here. The threats are Peakflo (direct      │  │
│   │  overlap, Singapore-based, YC-backed) and the       │  │
│   │  AI-native US wave (Brex, Ramp, Rillet) which is    │  │
│   │  resetting category expectations.                   │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [Section nav — sticky on the side on desktop, top on      │
│   mobile]                                                   │
│                                                             │
│   • Market sizing                                           │
│   • P2P landscape                                           │
│   • O2C landscape                                           │
│   • R2R landscape                                           │
│   • Where the gap is                                        │
│   • The recommendation                                      │
│   • Risks                                                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   1. Market sizing                                          │
│   [The 3-row TAM table + paragraph + segmentation note]     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   2. P2P landscape                                          │
│                                                             │
│   ┌─ Cohort A — Enterprise / Global ────────────────────┐  │
│   │  We don't compete here.                             │  │
│   │  [Table: Tipalti, Coupa, SAP Ariba]                 │  │
│   │  Read: These are not our competitors today.         │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   ┌─ Cohort B — US mid-market AP specialists ───────────┐  │
│   │  [Table: Stampli, Bill.com, Ramp, AvidXchange,      │  │
│   │   Medius, Yooz]                                     │  │
│   │  Read: Stampli is the one to study most carefully.  │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   [Cohort C — AI-native challenger wave]                    │
│   [Cohort D — Southeast Asia mid-market]                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   3. O2C landscape                                          │
│   [Same cohort treatment: Enterprise / US mid / SEA]        │
│                                                             │
│   4. R2R landscape                                          │
│   [Enterprise / Mid-market / AI-native ERP wave]            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   5. Where the gap is                                       │
│                                                             │
│   ┌── 2x2 grid: Geography × Process scope ───────────────┐ │
│   │                                                      │ │
│   │            P2P only │ O2C only │ R2R only │ Multi    │ │
│   │  USA mid   [list]   │ [list]   │ [list]   │ Sparse   │ │
│   │  SEA mid   [list]   │ [list]   │ EMPTY    │ Peakflo  │ │
│   │                                                      │ │
│   └──────────────────────────────────────────────────────┘ │
│                                                             │
│   [The 3 gap takeaways as bulleted callouts]                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   6. The recommendation                                     │
│                                                             │
│   ┌─ The bet ───────────────────────────────────────────┐  │
│   │  Stay sequenced P2P → O2C → R2R. Re-target SEA      │  │
│   │  mid-market multi-entity finance teams. Refuse to   │  │
│   │  compromise on workflow engine generality.          │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   [Sequencing timeline graphic — 3 horizontal phases]      │
│                                                             │
│   [The non-negotiable + Geographic focus + 2026-28 vision]  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   7. Risks and what would change my mind                    │
│   [The 4 risks as cards]                                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Appendix — sources and gaps                               │
│   [Brief, italicized]                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Notes:**
- Sticky section nav on desktop is critical — this is a long page and readers need orientation.
- Tables should be **dense** but not painful. Min row padding, clear row separators.
- The 2x2 gap grid is the visual centerpiece. Make it a real grid, not a markdown table.
- The sequencing timeline (P2P now → O2C Q3 → R2R Q1 27) deserves a custom inline SVG.
- The "Read:" takeaway after each cohort table should be visually distinct — italic, slightly indented, or in a tinted box. It's the "so what" and shouldn't blend into prose.

---

## Optional: `/glossary`

Quick-reference page if a reader doesn't know "DSO" or "GRN." One column, term + definition, alphabetical. Build this only if there's time.
