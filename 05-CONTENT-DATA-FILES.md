# Content Data Files

The actual content for the prototype is in three TypeScript files in this folder. These are **drop-in ready** — Claude Code can copy them directly into `/content/` in the Next.js project.

## Files

- `p2p.ts` — Procure-to-Pay explainer (7 stages, Brew & Co + PackRight Industries running example)
- `o2c.ts` — Order-to-Cash explainer (9 stages, Brew & Co selling to Café Brew & Co running example)
- `r2r.ts` — Record-to-Report explainer (6 stages, Brew & Co closing March 2026)
- `strategy.ts` — Competitive memo as structured data: cohorts, tables, sections

## Important notes

1. **The shape is identical across the three explainers.** That's deliberate — the `<ProcessExplainer>` component takes any of them and renders the same template. Don't change the shape without updating the type.

2. **Brew & Co is the running example through all three.** Same fictional company, three different lenses. Don't break this consistency.

3. **The "Where it breaks" sections are the secret weapon.** They're what makes the explainers feel real instead of textbook. Preserve them verbatim.

4. **The competitive memo data is structured as cohorts (A, B, C, D), each with an intro, a table, and a "Read:" paragraph.** That structure maps directly to the `<CohortSection>` component.

5. **The strategy data also includes:**
   - `tldr` — the one-paragraph TL;DR
   - `marketSizing` — the TAM table
   - `gapGrid` — the 2x2 grid data (geography × process scope)
   - `recommendation` — the structured recommendation with phases
   - `risks` — the 4 risks as separate objects

## How to update content later

Edit the TypeScript file. Push to GitHub. Vercel redeploys. That's the entire workflow. No CMS.
