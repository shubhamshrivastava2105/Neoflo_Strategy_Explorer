# Tech Stack & Architecture

## Recommended stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js 15 (App Router)** | Vercel-native, fastest deploy path. App Router gives clean per-section URLs out of the box. |
| Language | **TypeScript** | Better with Claude Code; catches typos in content data structures. |
| Styling | **Tailwind CSS v4** | Fast iteration, no separate stylesheet hell. v4 has the new CSS-first config. |
| UI primitives | **shadcn/ui** (only what's needed) | Tabs, Accordion, Card, Button. Don't pull the whole library. |
| Icons | **lucide-react** | Pairs with shadcn, ~20 icons total needed. |
| Content | **TypeScript data files in `/content`** | No CMS. Each explainer is a typed object. Edits feel like code, version-controlled. |
| Deployment | **Vercel** | Connect GitHub repo → auto-deploy. Free tier is fine. |
| Domain | **`*.vercel.app` initially** | Custom domain later if it lands well. |

## Why not...

- **Why not a Notion publish link?** Notion's published pages look like Notion. This artifact needs to feel intentional. Custom typography + layout + navigation is the point.
- **Why not Framer / Webflow?** Slower to iterate when you have real prose to ship. Claude Code + Next.js is faster for someone who works in code-adjacent tools.
- **Why not just a single big Markdown page?** Loses the per-section URL, the navigation, the "I want to scan and pick the section I care about" reader behavior. A single page also makes the competitive memo feel buried.
- **Why not a full design system / Storybook?** Way too much overhead for an 8-hour build.

## Project structure

```
neoflo-finops-explorer/
├── app/
│   ├── layout.tsx             # Global shell + nav + footer
│   ├── page.tsx               # Home (hero + 4 entry cards)
│   ├── p2p/page.tsx           # P2P explainer page
│   ├── o2c/page.tsx           # O2C explainer page
│   ├── r2r/page.tsx           # R2R explainer page
│   ├── strategy/page.tsx      # Competitive memo
│   └── globals.css
├── components/
│   ├── ProcessExplainer.tsx   # Reusable: takes a process data object, renders all stages
│   ├── StageCard.tsx          # Single stage with What/Happens/Example/Analogy/Breaks
│   ├── ProcessFlow.tsx        # Visual top-of-page flow diagram (SVG, lightweight)
│   ├── CompetitorTable.tsx    # Reusable competitive table
│   ├── CohortSection.tsx      # Wraps a competitive cohort with intro + table + read
│   ├── Nav.tsx                # Top nav + mobile drawer
│   ├── Hero.tsx               # Home page hero
│   └── EntryCard.tsx          # The 4 cards on the home page
├── content/
│   ├── p2p.ts                 # P2P explainer data (typed)
│   ├── o2c.ts                 # O2C explainer data
│   ├── r2r.ts                 # R2R explainer data
│   └── strategy.ts            # Competitive memo data (cohorts, tables, sections)
├── lib/
│   └── types.ts               # Shared TypeScript types
└── public/
    └── og-image.png           # OpenGraph card for link sharing
```

## Content data model (the heart of it)

The three explainers share an identical shape — that's what makes the `ProcessExplainer` component reusable.

```typescript
// lib/types.ts

export type ProcessStage = {
  number: number;
  title: string;
  whatItIs: string;
  whatHappens: string;
  example: string;
  analogy: string;
  whereItBreaks: string;
};

export type ProcessExplainer = {
  slug: 'p2p' | 'o2c' | 'r2r';
  title: string;            // e.g. "Procure-to-Pay (P2P)"
  shortName: string;        // e.g. "P2P"
  emoji: string;            // 📦 / 💰 / 📊
  oneLiner: string;         // The "short version" sentence
  stageOrder: string[];     // For the flow diagram at top
  runningExample: string;   // The Brew & Co setup paragraph
  stages: ProcessStage[];
  loopsAndConnections: string;  // The "how stages connect" paragraph
  whyItMattersForNeoflo: string;
};

export type Competitor = {
  name: string;
  positioning: string;
  pricing: string;
  implementation: string;
  g2?: string;
  notes?: string;
};

export type Cohort = {
  id: string;
  title: string;        // "Cohort A — Enterprise / Global"
  intro: string;
  competitors: Competitor[];
  read: string;         // The "Read:" takeaway paragraph
};
```

This shape is filled in `/content/p2p.ts`, `/content/o2c.ts`, etc. The component layer doesn't care about which process — it renders whatever data it gets.

## Visual design constraints

See `03-DESIGN-DIRECTION.md` for the full design brief. Short version:

- **One typeface** (Inter or similar geometric sans). No display font.
- **Two colors** beyond neutrals. One accent (Neoflo brand if it's defined; otherwise a clean indigo or teal). One semantic warning red for "where it breaks" callouts.
- **Generous whitespace.** This is a reading experience, not a dashboard.
- **Subtle SVG flow diagram** at the top of each explainer page. Stages laid out left-to-right with arrows. Inline, not animated. ~600px wide max.
- **Tables that look like tables** in the competitive memo, not card walls. Density is the point.

## Deployment plan

1. Build locally with `npm run dev`.
2. Push to GitHub.
3. `Add New Project` on Vercel, point at the repo.
4. First deploy in ~60 seconds.
5. Iterate by pushing commits — preview deploys per PR.

## What's intentionally out of scope

- Authentication
- Analytics beyond Vercel built-ins
- A search bar (the navigation is the search)
- A glossary popover (link to a `/glossary` page if needed; don't build hover-cards)
- Dark mode (do it later if it lands well; don't block on it)
- Print stylesheet
- Internationalization
