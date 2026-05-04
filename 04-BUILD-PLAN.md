# Build Plan — Step by Step for Claude Code

This is the actual sequence to give Claude Code. Each phase is a self-contained chunk that produces a working, deployable thing.

## Phase 0 — Project setup (10 min)

```bash
# Create the Next.js project
npx create-next-app@latest neoflo-finops-explorer \
  --typescript --tailwind --app --no-src-dir --eslint \
  --import-alias "@/*"

cd neoflo-finops-explorer

# Install shadcn/ui base
npx shadcn@latest init

# Add only the components we'll use
npx shadcn@latest add card

# Install lucide-react for icons
npm install lucide-react

# Initialize git, push to GitHub
git init && git add . && git commit -m "Initial setup"
gh repo create neoflo-finops-explorer --public --source=. --push
```

**Verify:** `npm run dev` shows the default Next.js page at `localhost:3000`.

---

## Phase 1 — Content data layer (30 min)

This is the foundation. Get the data right, the UI is straightforward.

**Files to create:**

1. `lib/types.ts` — All shared types (see 01-TECH-STACK.md for the shape)
2. `content/p2p.ts` — Full P2P data (use `05-CONTENT-DATA-FILES.md` from this package)
3. `content/o2c.ts` — Full O2C data
4. `content/r2r.ts` — Full R2R data
5. `content/strategy.ts` — Competitive memo data structured as cohorts + sections

**Verify:** Open each file. TypeScript shouldn't complain. Each explainer object has the correct number of stages with all 5 sub-blocks.

---

## Phase 2 — Core components (60–90 min)

Build the reusable pieces before the pages.

**Files to create:**

1. `components/Nav.tsx` — Top nav with logo, 4 links, mobile drawer
2. `components/Hero.tsx` — Home page hero
3. `components/EntryCard.tsx` — The 4 cards on home page
4. `components/ProcessFlow.tsx` — Inline SVG flow diagram, takes `stageOrder: string[]` and renders boxes + arrows
5. `components/StageCard.tsx` — Single stage with 5 sub-blocks, "Where it breaks" gets amber accent
6. `components/ProcessExplainer.tsx` — The page-level component that takes a `ProcessExplainer` data object and renders the full layout
7. `components/CompetitorTable.tsx` — Renders a `Competitor[]` as a styled table
8. `components/CohortSection.tsx` — Wraps an intro + table + "Read:" paragraph

**Verify:** Each component renders cleanly in isolation. Use Storybook? No — too much overhead. Just preview them on a scratch page.

---

## Phase 3 — Pages (45 min)

Now wire components to routes.

**Files to create / modify:**

1. `app/layout.tsx` — Set up font (Inter via `next/font`), wrap children with `<Nav />` and footer
2. `app/page.tsx` — Home (Hero + 4 EntryCards + "How to read this" section)
3. `app/p2p/page.tsx` — `<ProcessExplainer data={p2pData} />`
4. `app/o2c/page.tsx` — `<ProcessExplainer data={o2cData} />`
5. `app/r2r/page.tsx` — `<ProcessExplainer data={r2rData} />`
6. `app/strategy/page.tsx` — Custom layout: TL;DR → sticky nav + sections → recommendation → risks
7. `app/globals.css` — Tailwind imports + minimal custom (font smoothing, prose styles for readable line-length)

**Verify:** All 5 pages load. Navigation works. Mobile responsive (resize the window — it should not break).

---

## Phase 4 — Visual polish (45–60 min)

This is what separates "looks fine" from "looks intentional."

- Add the **sequencing timeline SVG** to the strategy page (3-phase horizontal timeline)
- Add the **2x2 gap grid SVG/HTML** to the strategy page (where the gap is)
- Tighten typography: line heights, letter-spacing on uppercase labels, table padding
- Verify color tokens consistent across all pages
- Add subtle hover states on links and entry cards
- Add a `not-found.tsx` page (something simple and on-brand for if someone hits a wrong URL)

**Verify:** Walk the whole site as if you've never seen it. Anything that feels rough — fix.

---

## Phase 5 — Metadata + sharing (15 min)

The link gets shared. Make the share preview good.

**Files to create / modify:**

1. `app/layout.tsx` — Set `metadata` with title, description, OpenGraph image
2. `public/og-image.png` — 1200x630 image. Title + subtitle + Shubham's name. Can be generated on Figma in 5 min, or use a Vercel OG image route to generate dynamically (`app/og/route.tsx`)
3. Per-page metadata: each `page.tsx` exports its own `metadata` object so per-section share previews are accurate
4. `public/favicon.ico` — Even a simple emoji favicon (📊 or similar) is fine

**Verify:** Paste the deployed URL into Slack, X, LinkedIn — does the share card look right?

---

## Phase 6 — Deploy (15 min)

```bash
# Push final state
git add . && git commit -m "Ready to deploy" && git push

# Then on Vercel:
# 1. Import the GitHub repo
# 2. Accept defaults
# 3. Deploy
```

First deploy: ~60 seconds. Vercel gives you a URL like `neoflo-finops-explorer.vercel.app`.

**Verify:** Open the URL on:
- Desktop Chrome
- Mobile Safari
- A 4G connection (throttle in DevTools to verify load speed)

---

## Phase 7 — Iteration loop (ongoing)

Every change after launch:

```bash
git add . && git commit -m "what changed" && git push
```

Vercel auto-deploys. Preview deploys per branch. No CI/CD setup needed.

---

## Estimated total time

- Solo with Claude Code, no prior Next.js: **6–8 hours**
- Solo with Claude Code, comfortable with Next.js: **3–5 hours**
- Pairing two people: **3–4 hours total elapsed**

The bottleneck is almost always content fidelity (matching the Notion source exactly), not code. Spend time on that.

---

## Checklist before sharing the link

- [ ] All four explainer pages load and render the full content
- [ ] Strategy page sticky nav works on desktop, collapses correctly on mobile
- [ ] Tables are horizontally scrollable on mobile, not broken
- [ ] The 2x2 gap grid renders correctly on mobile
- [ ] OpenGraph image displays correctly when pasted in Slack
- [ ] No spelling/typo errors (re-read every page once)
- [ ] No "Lorem ipsum" or placeholder text anywhere
- [ ] Favicon shows in browser tab
- [ ] Footer has Shubham's name + link to Neoflo
- [ ] At minimum 90+ Lighthouse score for Performance and Accessibility
- [ ] Page works with JavaScript disabled (it should — this is mostly static)
