# Neoflo FinOps Explorer — Product Spec

## What this is

A single-page, deployable web prototype that bundles **the P2P, O2C, R2R explainers + the competitive memo** into one shareable, navigable artifact. The link is the deliverable.

It is **not** a marketing site for Neoflo. It is a strategic artifact disguised as an interactive explainer — built so that anyone landing on it (CEO, board member, investor, prospect, internal teammate) walks away understanding (a) what these three finance processes are, (b) who competes in each, and (c) where Neoflo should bet and why.

## Who's it for

Three audiences, in priority order:

1. **Internal — Saurabh (CEO), Kostav, leadership.** This is what the link is really for. It demonstrates Head of Product–level synthesis: market view, competitive view, opinionated recommendation. The artifact is the proof.
2. **External — prospects, design partners, investors who get the link shared with them.** They get a polished single-source overview of FinOps, with Neoflo's positioning naturally embedded.
3. **Internal — new joiners, sales, partnerships.** Onboarding artifact. "Read this, you'll understand the space."

## What success looks like

- One URL Shubham can share that opens to a clear, fast, legible interface.
- Reader can answer "what is P2P / O2C / R2R" in 60 seconds.
- Reader can answer "who are the major players, and where does Neoflo sit" in 3 minutes.
- Reader can answer "what's the strategic recommendation and why" in 5 minutes.
- It feels like a piece of strategic work, not a content blog. Dense without being exhausting.

## What it ships as

- A Vercel-deployed static or near-static Next.js app.
- Single domain, e.g. `finops-explorer.vercel.app` or a custom subdomain.
- Mobile-responsive (people will open this on phones).
- Loads fast (under 2s on 4G).
- Shareable per-section URLs (e.g. `/competitive` or `/o2c`).

## What it is NOT

- Not a CRM-integrated marketing funnel.
- Not a "Neoflo product page" — it's an explainer with Neoflo's POV embedded.
- Not interactive in a gimmicky way (no chatbots, no AI assistant, no quizzes). The interaction is navigation + progressive disclosure.
- Not a CMS. Content is in the codebase, edited like code.

## Information architecture

```
Home (hero + 4 entry cards)
├── /p2p       — P2P Explainer (the 7 stages, Brew & Co example)
├── /o2c       — O2C Explainer (the 9 stages, Brew & Co example)
├── /r2r       — R2R Explainer (the 6 stages, Brew & Co example)
└── /strategy  — The Competitive & Strategic Bet Memo
    ├── #market-sizing
    ├── #p2p-landscape
    ├── #o2c-landscape
    ├── #r2r-landscape
    ├── #the-gap
    └── #the-bet
```

Optional second-tier:
- `/about` — "Why this exists" — one paragraph from Shubham, photo, contact.
- `/glossary` — Quick reference for FinOps terms.

## Constraints

- **One person can build it in 4–8 hours with Claude Code.** No team, no design system, no API.
- **Content is final-ish.** The three explainers and the memo are written. The job is presentation, not authoring.
- **No backend.** No login, no analytics beyond Vercel's built-in, no database.
- **Privacy:** Don't expose anything that's not already shareable. The competitive memo's "Risks" section names Peakflo directly — that's fine for an external audience but consider if the framing needs softening for a fully public link. (See `06-CONTENT-NOTES.md`.)
