# Neoflo FinOps Explorer — Build Documentation

This package contains everything needed to build a deployable web prototype
that bundles the P2P / O2C / R2R explainers and the competitive memo into one
shareable URL on Vercel.

## What's in this folder

```
neoflo-finops-prototype/
├── README.md                       ← You are here
├── 00-PRODUCT-SPEC.md              ← What this is, who it's for, what success looks like
├── 01-TECH-STACK.md                ← Technology choices and project structure
├── 02-WIREFRAMES.md                ← Page-by-page layout and information design
├── 03-DESIGN-DIRECTION.md          ← Visual design brief, typography, colors
├── 04-BUILD-PLAN.md                ← Step-by-step phase plan with time estimates
├── 05-CONTENT-DATA-FILES.md        ← Index of the content files (below)
├── 06-CLAUDE-CODE-PROMPTS.md       ← The actual prompts to give Claude Code
├── 07-CONTENT-NOTES.md             ← What to soften / add before public launch
└── content/                        ← Drop-in ready TypeScript data files
    ├── types.ts                    ← Shared types
    ├── p2p.ts                      ← P2P explainer content
    ├── o2c.ts                      ← O2C explainer content
    ├── r2r.ts                      ← R2R explainer content
    └── strategy.ts                 ← Competitive memo content
```

## How to use this with Claude Code

### Quickest path (3 hours, you're comfortable with Next.js)

1. Open Claude Code in your terminal
2. Open `06-CLAUDE-CODE-PROMPTS.md` in another window
3. Paste the SYSTEM CONTEXT block first (one message)
4. Run Phase 1 prompt → wait for completion → run Phase 2 prompt → continue
5. When asked to paste content files, copy from `/content/*.ts` files in this folder
6. After Phase 6, your prototype is on Vercel

### Methodical path (6–8 hours, first time with Next.js)

1. Read all 8 docs in order before starting (~30 min)
2. Then follow the Quickest path above

### Reference path (you want to understand before doing)

Read in this order: README → 00-PRODUCT-SPEC → 02-WIREFRAMES → 03-DESIGN-DIRECTION
→ 01-TECH-STACK → 04-BUILD-PLAN → 06-CLAUDE-CODE-PROMPTS → 07-CONTENT-NOTES.

## Key things to know before you start

1. **The content is final-ish.** The four `content/*.ts` files have the entire
   site's content. You won't need to write any prose during the build.

2. **Three explainers share an identical shape.** That's deliberate — one
   `<ProcessExplainer>` component renders all three. Don't break this pattern.

3. **Brew & Co is the running example through all three.** Same fictional
   company, three different lenses (buying, selling, closing books).

4. **The strategy page is the hardest page to build.** It has the most varied
   layout (TL;DR + tables + grid + timeline + risks). Budget extra time here.

5. **Mobile responsiveness is non-negotiable.** People will share this link
   in WhatsApp / Slack and open on phones. Test at 375px width.

6. **No CMS, no backend.** Content edits are TypeScript edits. Push to GitHub,
   Vercel auto-deploys.

## What "done" looks like

A live URL like `neoflo-finops-explorer.vercel.app` where:

- Home loads in <2s and shows 4 entry cards
- P2P / O2C / R2R explainer pages each show 6–9 stages with the Brew & Co
  running example
- Strategy page shows the full competitive memo with sticky section nav
- Everything works on mobile
- OpenGraph card looks intentional when pasted in Slack/LinkedIn
- You're comfortable sharing the URL with your CEO

## What's deliberately not here

- **No design files (Figma, etc.)** — the design direction is described in
  prose so Claude Code can implement it directly. If you want a Figma file,
  use `03-DESIGN-DIRECTION.md` to generate one separately.
- **No analytics setup** — Vercel's built-in is enough. Add Plausible or Fathom
  later if you want.
- **No CMS** — TypeScript files are the CMS. Edits feel like code.
- **No A/B testing or experiments** — this is a one-shot artifact.

## Maintenance after launch

The artifact is intentionally simple to update:

```bash
# Edit any content/*.ts file in your editor
git add . && git commit -m "Update P2P stage 3" && git push
# Vercel auto-deploys in ~60 seconds
```

For larger changes (new section, new page, design change), open Claude Code
again and use the iteration prompts at the bottom of `06-CLAUDE-CODE-PROMPTS.md`.

## Questions before you start

- **"Should I deploy under a custom domain?"** Not for v1. `*.vercel.app` is
  fine. Add a custom domain only after you've shared with 5+ people and
  confirmed it's the version you want to keep.

- **"Should I make this a private link?"** No — Vercel makes deploys public by
  default. If you want gating, that's a separate effort. Easier path: don't
  put anything in this artifact you wouldn't be okay with anyone reading.

- **"What if I want to add a chatbot / AI assistant?"** Don't. Not in v1.
  The artifact's value is its clarity, not its interactivity. A chatbot
  reduces clarity without adding insight.

- **"Should the Neoflo brand be on this?"** Mention Neoflo in the byline and
  footer. Don't put a Neoflo logo in the header. The artifact is "by someone
  at Neoflo" not "made by Neoflo marketing."

---

When you're ready, open `06-CLAUDE-CODE-PROMPTS.md` and start with the
System Context block.
