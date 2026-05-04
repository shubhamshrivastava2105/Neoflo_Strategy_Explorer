# Master Prompt for Claude Code

This is the prompt to give Claude Code at the start of the build session. It's structured so Claude Code has full context, then can execute one phase at a time.

---

## How to use this

1. Open Claude Code in your terminal
2. Navigate to the directory where you want to create the project
3. Paste the **System Context** block first (one message)
4. Then send Phase 1 prompt, wait, send Phase 2, etc.
5. Use the **Iteration prompts** at the bottom for refinements

---

## SYSTEM CONTEXT (paste this first)

```
I'm building a single-page web prototype called "FinOps Explorer" — a deployable Next.js
app that bundles three explainer pages (P2P, O2C, R2R) plus a competitive strategy memo
into one shareable artifact. Target deployment: Vercel.

Context about me:
- I'm Shubham Shrivastava, Head of Product at Neoflo
- Neoflo builds AI-driven FinOps automation for mid-market finance teams in SEA
- This artifact is partly an internal strategy artifact, partly an external explainer
- Audience priority: (1) my CEO and leadership, (2) prospects/investors, (3) new joiners

Tech stack (already decided):
- Next.js 15 with App Router, TypeScript
- Tailwind CSS v4
- shadcn/ui (only Card)
- lucide-react for icons
- Inter font via next/font
- Deployed to Vercel from a GitHub repo

Design intent:
- Editorial feel (Stripe Press / increment.com vibe), NOT a SaaS marketing site
- One typeface (Inter), 5-color palette: warm off-white bg, white surfaces,
  near-black text, muted gray for secondary, indigo accent, amber for warnings
- Generous whitespace, max measure ~70ch for prose, 720px max for explainer pages,
  1100px for strategy page
- Mobile-responsive
- No animation, no gradients, no marketing illustrations

The content is already finalized and lives in 4 TypeScript files I'll provide:
- content/p2p.ts (P2P explainer)
- content/o2c.ts (O2C explainer)
- content/r2r.ts (R2R explainer)
- content/strategy.ts (competitive memo)

There's also a content/types.ts file with shared TypeScript types.

I'll guide you through 6 phases. Don't skip ahead. After each phase confirm what you
built and ask me to verify before proceeding. Be opinionated about implementation
details — don't ask me trivial questions like "should I use a div or a section?"
Just pick the right answer and ship.
```

---

## PHASE 1 PROMPT — Project setup

```
Phase 1: Set up the Next.js project.

Run these commands in sequence:
1. npx create-next-app@latest neoflo-finops-explorer --typescript --tailwind
   --app --no-src-dir --eslint --import-alias "@/*"
2. cd neoflo-finops-explorer
3. npx shadcn@latest init (accept defaults — Slate base color, CSS variables yes)
4. npx shadcn@latest add card
5. npm install lucide-react

Then:
- Set up the Inter font in app/layout.tsx using next/font/google
- Create the folder structure: components/, content/, lib/
- Create lib/types.ts (I'll paste the content next)
- Update app/globals.css to set the warm off-white bg color (#FAFAF9) and
  reset Tailwind base styles for body color and font smoothing

Confirm setup is working by running npm run dev and verifying localhost:3000 loads.
```

After Phase 1 confirms working, paste `content/types.ts` from this package, then say "Now create lib/types.ts with this content."

---

## PHASE 2 PROMPT — Content data files

```
Phase 2: Create the four content data files.

I'll paste each file's content one by one. For each:
1. Create the file at the specified path
2. Verify TypeScript doesn't error
3. Move to the next file

Files in order:
1. content/p2p.ts
2. content/o2c.ts
3. content/r2r.ts
4. content/strategy.ts

Wait for me to paste each one. Don't try to write the content yourself — these
are finalized and I have them ready.
```

Then paste each `content/*.ts` file from this package one at a time.

---

## PHASE 3 PROMPT — Core reusable components

```
Phase 3: Build the reusable components.

Build these in order, in components/ folder:

1. Nav.tsx
   - Top nav, sticky on scroll
   - Logo on left: "FinOps Explorer" in semibold, no actual logo image
   - Right side: links to /p2p, /o2c, /r2r, /strategy
   - Mobile: hamburger drawer using a useState toggle, no animation library
   - Active route gets indigo color, inactive is muted gray
   - Below 768px viewport, shows hamburger; above, shows inline links

2. Hero.tsx
   - Used on the home page
   - Big H1: "FinOps, explained."
   - Subtitle: "What every B2B finance team actually does — and where the market
     is going."
   - Body para describing the field guide premise
   - Author byline: "By Shubham Shrivastava · Head of Product, Neoflo · May 2026"
   - No image, no CTA button. The page itself is the CTA.

3. EntryCard.tsx
   - Takes props: emoji, title, subtitle, stages (e.g. "7 stages"), href, accent
     (indigo or muted)
   - Renders as a clickable card linking to the href
   - Hover state: subtle border color shift to indigo, slight upward translate (-1px)
   - Used 4 times on the home page in a responsive grid (4 cols desktop, 2 tablet,
     1 mobile)

4. ProcessFlow.tsx
   - Inline SVG flow diagram showing the stages of a process
   - Takes prop: stages: string[]
   - Horizontal layout on desktop (boxes left to right with arrows)
   - Vertical layout on mobile (boxes top to bottom with down-arrows)
   - Use viewBox so it scales. Each box: rounded rectangle, 1px border, stage name
     centered, ~20px padding
   - Boxes are ~140px wide × 56px tall on desktop
   - Connect with thin lines (1.5px) ending in small arrowheads
   - All using the muted text color, no fills beyond white

5. StageCard.tsx
   - Takes a ProcessStage object
   - Layout described in 02-WIREFRAMES.md
   - Stage number is large (60px), light gray, sits to the left of the title
     (or above on mobile)
   - The 5 sub-blocks (whatItIs, whatHappens, example, analogy, whereItBreaks)
     are labeled paragraph blocks, NOT cards. Label is small uppercase tracked
     muted text (e.g. "WHAT IT IS")
   - whereItBreaks block has a 3px amber left border + slightly tinted background
   - Generous vertical spacing between sub-blocks (24-32px)

6. ProcessExplainer.tsx
   - Page-level component, takes ProcessExplainerData
   - Renders: emoji + title H1, oneLiner as a large lead paragraph,
     reading-time pill, ProcessFlow at top, "The running example" section,
     all stages mapped to StageCards, "How the stages connect" section
     (loopsAndConnections), "Why this matters for Neoflo" section
   - Bottom: prev/next links (e.g. /p2p has "Next: Order-to-Cash →")
   - Renders markdown in the prose blocks (use react-markdown — install if needed,
     keep config minimal: paragraphs, bold, italic, lists, no extensions)

Show me the file tree when done. I'll spot-check Nav and StageCard before proceeding.
```

---

## PHASE 4 PROMPT — Strategy page components

```
Phase 4: Build the strategy-page-specific components.

In components/:

1. CompetitorTable.tsx
   - Props: competitors: Competitor[], columns: Array<keyof Competitor>
   - Renders a real HTML table, no card-list fallback for mobile (instead make
     the table horizontally scrollable inside its container with overflow-x-auto)
   - Header row: muted bg, semibold uppercase tracked labels, 1px bottom border
   - Body rows: 12-16px padding, no zebra striping, just hairline borders between
   - First column (name) is semibold

2. CohortSection.tsx
   - Props: cohort: Cohort
   - Renders: cohort letter + title in a header, optional intro paragraph,
     CompetitorTable, then the "Read:" takeaway in a tinted callout below
   - The "Read:" callout has a thin indigo left border and italic prose styling

3. GapGrid.tsx
   - Props: cells: GapGridCell[]
   - Renders the 2x2 (well, 2x4) gap grid as a real CSS grid (not a table)
   - Two row labels (USA mid-market, Southeast Asia mid-market) on the left
   - Four column headers across the top
   - 8 cells, each containing the contents string
   - Cells with highlight: true get an amber tint and slightly bolder text
   - On mobile, this becomes 2 stacked sections (one per geography), each with
     4 mini cards inside

4. SequencingTimeline.tsx
   - Props: phases: Array<{phase, timeline, description}>
   - Renders a 3-phase horizontal timeline on desktop
   - SVG with three phase markers along a horizontal line, labeled with timeline
     and phase name
   - Below: each phase description in a card, in horizontal row on desktop,
     stacked on mobile

5. RiskCard.tsx
   - Props: risk: Risk
   - Renders: number + title in a header, description, then a "Counter:" block
     with subtle indent and italic styling

Confirm complete and show file tree.
```

---

## PHASE 5 PROMPT — Pages

```
Phase 5: Build the pages.

In app/:

1. layout.tsx
   - Set Inter font via next/font/google
   - Set up metadata: title, description, OpenGraph (image at /og-image.png,
     fallback OK if not yet created)
   - Render <Nav /> at top, children, simple footer
   - Footer: "By Shubham Shrivastava · Head of Product, Neoflo · Last updated May 2026"
     and a thin top border

2. page.tsx (home)
   - <Hero />
   - 4-card grid using <EntryCard /> for P2P, O2C, R2R, Strategy
   - "How to read this" section with 3 short paragraphs explaining the field guide
     premise and reading times

3. p2p/page.tsx — <ProcessExplainer data={p2pData} />
4. o2c/page.tsx — <ProcessExplainer data={o2cData} />
5. r2r/page.tsx — <ProcessExplainer data={r2rData} />

6. strategy/page.tsx — Custom layout:
   - Header with title, subtitle, byline
   - TL;DR section in a tinted callout box
   - Sticky section nav on the right side (desktop) / collapsed top sheet (mobile)
     with anchor links to: market-sizing, p2p-landscape, o2c-landscape,
     r2r-landscape, gap, recommendation, risks, appendix
   - Section 1 — Market sizing: intro, the 3-row TAM table, headline, segmentation note
   - Section 2 — P2P landscape: intro paragraph, then map cohorts to <CohortSection />
   - Section 3 — O2C landscape: same pattern
   - Section 4 — R2R landscape: same pattern
   - Section 5 — Where the gap is: intro, <GapGrid />, takeaway bullets
   - Section 6 — The recommendation: headline callout, <SequencingTimeline />,
     non-negotiable, geography, future vision sections
   - Section 7 — Risks: 4 <RiskCard />s
   - Section 8 — What would change my mind: bullet list
   - Appendix: italicized prose

Each page should also export its own metadata object with appropriate per-page
titles like "P2P explained — FinOps Explorer".

Run npm run dev and confirm all 5 routes load. Show me screenshots of each
(or describe any layout issues you spot).
```

---

## PHASE 6 PROMPT — Polish, metadata, deploy

```
Phase 6: Polish + deploy prep.

1. Walk every page on desktop AND mobile (use DevTools responsive mode at
   375px width). Fix any:
   - Overflowing tables that don't scroll properly
   - Text that breaks awkwardly
   - Cards that lose their proportions
   - Sticky nav that overlaps content

2. Add a not-found.tsx page with a clean 404 message and a link back to home.

3. Add an OG image route at app/og/route.tsx using next/og to generate a
   1200x630 OpenGraph image dynamically. Title + subtitle + author. Off-white
   background with indigo accent.

4. Verify all metadata: each page has title, description, openGraph object.

5. Run npm run build locally — fix any errors.

6. Push to GitHub:
   git init (if not done)
   git add .
   git commit -m "Ready for deploy"
   gh repo create neoflo-finops-explorer --public --source=. --push
   (Or push to existing repo if it's set up)

7. Tell me: project is ready to import to Vercel. Walk me through the Vercel
   import steps if I'm unfamiliar.

After deploy, share the live URL with me and I'll smoke-test it.
```

---

## ITERATION PROMPTS (after deploy)

These are short prompts for common tweaks once it's live:

**Update content:**
```
Update content/p2p.ts: change stage 3 example to read "[new text]". Push and redeploy.
```

**Visual tweak:**
```
The competitive tables look too dense on mobile. Increase row padding by 4px and
reduce font size to 13px on viewports under 640px. Show me before/after.
```

**Add a section:**
```
Add a new section to the strategy page between "Where the gap is" and "The
recommendation" called "What we'd build differently if we were starting today."
Take 4-6 sentences from me, add to strategy.ts, render it as a tinted callout
section.
```

**Add the glossary:**
```
Add /glossary route. Two-column layout on desktop, single column on mobile.
Pull terms from the explainers — DSO, DPO, GRN, GRNI, ROU, JE, KYC, SES, STP,
3-way match, TDS, dunning, cash application, flux analysis, intercompany,
consolidation. ~15 terms. Each term in semibold + 1-2 sentence definition in
muted text. Link from the home page footer.
```

---

## A note on debugging

If Claude Code gets stuck or builds something visually wrong:
- Be specific: "The stage card's amber border is on the right side, should be
  on the left."
- Send a screenshot when describing visual issues
- Don't accept "this looks complex, simplify?" — the design intent is the design
  intent, push back

If TypeScript errors come up around the content files:
- The most common issue is the Competitor type having optional fields that
  render conditionally. Make sure your CompetitorTable component handles
  undefined gracefully (just skip the cell, or render an em-dash).
