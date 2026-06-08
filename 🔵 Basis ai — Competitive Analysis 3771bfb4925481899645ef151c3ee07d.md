# 🔵 Basis.ai — Competitive Analysis

# Internal Note — For Nipun's Attention

**Prepared by:** Prithvi Rajaram | **Date:** June 2026 | **Context:** Rehmann Partnership Pitch

> **Purpose.** This note covers two things: (1) what [Basis.ai](http://Basis.ai) actually does, where it beats Neoflo, and where Neoflo beats Basis; and (2) how to pitch Neoflo as complementary to Basis in the Rehmann CAS context — not as a direct competitor.
> 

---

# 1. Context and Corrected Frame

Our proposal to Rehmann is **Model 1: Managed CAS Operations** — Neoflo runs AP, AR, reconciliation, and close prep for Rehmann's CAS clients, white-labeled. This means Neoflo is the operational layer that Basis would otherwise try to automate. The question Rehmann will ask is: *"Why do we need Neoflo if we can use Basis?"*

> ⚠️ **Important correction from earlier analysis.** A prior version of this analysis stated that invoice processing and cash application were "not Basis use cases." That was wrong. Basis covers document extraction and reconciliation, which overlap with both AP invoice processing and bank-level cash application. The comparison below reflects the corrected picture.
> 

---

# 2. What [Basis.ai](http://Basis.ai) Is

Basis is a **$1.15B-valued AI platform** (Series B, February 2026 — led by Accel and Google Ventures, $138M raised total) built specifically for accounting firms. It deploys autonomous, goal-oriented agents that execute complex multi-step accounting workflows: tax preparation, audit testing, workpaper generation, reconciliations, and month-end close.

**Market position:** Used by approximately 30% of the Top 25 US accounting firms. Backed by Accel, Google Ventures, Khosla Ventures, and Lloyd Blankfein. Claims 20–50% efficiency gains across practices.

## How Basis Works

Basis agents are goal-oriented, not instruction-following. The firm gives an agent a goal — *"prepare Q4 federal corporate tax return"* — and the agent determines the full task sequence, requests human review only when confidence drops below a set threshold, and returns completed deliverables. **The accounting firm's staff supervises and reviews all outputs. Basis does not take the work off the firm's plate — it makes the firm's staff faster.**

## Confirmed Capabilities

- Tax return preparation — end-to-end, including a demonstrated autonomous 1065 completion
- Audit testing procedures and workpaper generation
- Reconciliations — bank, vendor, inter-entity
- Document classification and data extraction — invoice-level fields, financial statement cross-referencing
- Journal entry drafting with source citations
- Variance analysis and month-end close automation
- ERP integrations: QuickBooks, Xero, NetSuite, SAP (48-hour onboarding claimed)
- Client Accounting Services (CAS), bookkeeping, CFO advisory — explicitly stated practice areas

---

# 3. Neoflo vs. Basis: Full Head-to-Head

| Dimension | [Basis.ai](http://Basis.ai) | Neoflo | Verdict |
| --- | --- | --- | --- |
| **Tax return preparation** | ✅ Core strength. Demonstrated autonomous 1065 end-to-end. | ❌ Out of scope. | Basis only |
| **Audit testing & workpapers** | ✅ Core strength. Deployed at 30%+ of Top 25 US firms. | ❌ Out of scope. | Basis only |
| **Month-end close automation** | ✅ Core strength. Journal entries, variance explanations, close packs. | 🔶 Upstream feeder. R2R module covers reconciliation and close prep. | Basis stronger at close layer; Neoflo stronger upstream |
| **Bank & vendor reconciliation** | ✅ Explicitly confirmed core workflow. | ✅ AI matching with timing variance vs. pricing discrepancy vs. missing transaction logic. | Direct overlap. Neoflo likely deeper on exception classification. |
| **Invoice data extraction & GL coding** | ✅ Document classification and data extraction confirmed. | ✅ Contextual extraction trained on accounting logic, not fixed templates. | Direct overlap. Neoflo differentiates on construction / retention / change order complexity. |
| **3-way PO matching with tolerances** | 🔶 Likely yes in CAS context; not explicitly detailed in public materials. | ✅ Explicitly stated. Configurable tolerances, vendor-by-vendor learning. | Neoflo has more operational depth on record. |
| **Exception handling & vendor comms** | 🔶 Agents flag exceptions; Rehmann's staff resolves. No vendor comms layer. | ✅ Explicit: exception routing, ranked recommendations, vendor query resolution in workflow. | Neoflo differentiated. |
| **Cash application (remittance, deductions, short pays)** | 🔶 Reconciliation yes; full remittance-context cash application not confirmed. | ✅ Explicit: partial pays, short pays, deduction routing by remittance context. | Neoflo differentiated. |
| **Collections & DSO management** | ❌ Not a stated capability. | ✅ AI-driven: customer risk profiling, DSO decomposition by segment, cash flow forecasting. | Neoflo only. |
| **Delivery model** | SaaS platform. Rehmann's staff supervises and reviews all agent output. | Managed service. Neoflo's team operates the system and handles exceptions. | Fundamentally different. Neoflo removes the staffing burden. |
| **Outcome accountability** | Software delivers; Rehmann owns outcomes. | SLA-backed. Neoflo has skin in the game. No delivery = no payment. | Neoflo differentiated. |
| **ERP integrations** | QuickBooks, Xero, NetSuite, SAP — 48-hour onboarding claimed. | QuickBooks, Zoho, SAP, NetSuite, Xero — custom integrations built in weeks. | Comparable surface coverage; Neoflo builds deeper workflow config per client. |
| **Scale & market momentum** | $1.15B valuation. 30%+ of Top 25 US firms. $138M raised. | Seed stage. Zalora ($100K+ ARR), Big Four audit firm. Lightspeed / Peak XV / Alter Global. | Basis ahead on brand and scale. Neoflo is the emerging challenger. |

---

# 4. Score Summary

| Area | [Basis.ai](http://Basis.ai) | Neoflo |
| --- | --- | --- |
| Tax, audit, assurance | ✅ Dominant | ❌ Out of scope |
| Month-end close & journal entries | ✅ Strong | 🔶 Upstream feeder |
| Reconciliation | ✅ Strong | ✅ Strong |
| Invoice extraction & GL coding | ✅ Capable | ✅ Capable + vertical depth |
| 3-way matching | 🔶 Likely capable | ✅ Explicit, configurable |
| Exception handling & vendor comms | 🔶 Flags only | ✅ Full resolution layer |
| Cash application & deductions | 🔶 Reconciliation only | ✅ Explicit capability |
| Collections / DSO management | ❌ Not stated | ✅ Core capability |
| Delivery accountability / SLA | ❌ Software only | ✅ Managed service, SLA-backed |
| Brand / market position | ✅ Unicorn, top firm adoption | 🔶 Emerging, seed stage |

> 💡 **The structural difference that matters.** Basis is a productivity tool — it makes Rehmann's accountants faster, but Rehmann still staffs, supervises, and owns outcomes. Neoflo is a delivery service — we staff, operate, and own the outcome under SLA. These are different propositions, not just feature differences.
> 

---

# 5. Where Neoflo Is Genuinely Vulnerable

Rehmann will probe these. We need clean answers ready.

## Brand Gap

Basis is a unicorn backed by Accel and Google Ventures. Neoflo is seed-stage. A Rehmann partner evaluating both will feel safer with Basis on paper.

**Answer:** We are not replacing Basis for tax and audit. We are running CAS client operations that Basis does not take off Rehmann's plate regardless of how much Basis they deploy.

## Basis May Expand into Managed Services

Basis's current model requires the firm to supervise. If Basis moves toward a fully managed offering, the gap closes.

**Mitigation:** Lock in Rehmann on a multi-year agreement before that happens. Build depth in their specific client verticals — construction, healthcare — that would be hard for Basis to replicate quickly.

## The "Just Use Basis for Everything" Objection

Rehmann could use Basis for CAS bookkeeping and decide they don't need Neoflo.

**Response:** Basis CAS still requires Rehmann staff to supervise agent outputs for every client. At scale — 50, 100, 200 CAS clients — that supervision burden doesn't go away with Basis; it just changes shape. Neoflo takes the delivery risk entirely: we run the operation, meet the SLA, and Rehmann's team steps in only at the review and advisory layer. This is not a software question — it is a staffing and delivery risk question.

---

# 6. Rehmann Pitch Strategy

## The One-Line Pitch

> **"Basis makes your accountants faster. Neoflo makes your CAS clients operationally independent. Rehmann needs both problems solved."**
> 

The fuller version: Basis is an excellent tool for Rehmann's internal workflows — tax, audit, and close automation. Neoflo operates at a different layer. For CAS clients with meaningful AP/AR volume, someone has to process invoices, resolve vendor exceptions, apply cash, and manage collections. Basis does not do that — it gives Rehmann's staff better tools to do that faster. Neoflo removes the staffing requirement entirely.

## Rehmann Concerns Mapped

| Rehmann's concern | What Basis solves | What Neoflo adds |
| --- | --- | --- |
| **Staff capacity ceiling in CAS** | Makes existing staff 20–50% faster | Removes the transactional work entirely; no headcount needed for AP/AR ops |
| **Data quality feeding the close** | Better close automation if data is clean | Cleans the data at source — invoice extraction, matching, exception resolution — before it reaches the close |
| **Outcome risk** | Rehmann owns it; Basis provides the tool | Neoflo owns delivery under SLA; if efficiency doesn't improve, Neoflo doesn't get paid |
| **Client vertical complexity (construction, healthcare, manufacturing)** | General accounting intelligence | Vertical-specific workflows: retention billing, insurance rec, 3-way match at scale |
| **Cost per CAS client** | Reduced labor per client (faster staff) | Per-invoice / per-client pricing; cost falls as volume grows without adding headcount |
| **Change management burden** | Rehmann must train staff to supervise agents | Neoflo embeds, co-builds, and operates; Rehmann's team reviews, not manages |

## If Basis Comes Up Directly

> **If Rehmann says: "We're already evaluating Basis."**
> 

> 
> 

> *"Basis is the right tool for your internal team workflows — tax, audit, and close automation. That's not what we do. We run the transactional operations layer for your CAS clients: invoice processing, AP matching, cash application, vendor queries, collections. A Rehmann associate using Basis is still spending time on those tasks for every CAS client. Neoflo removes that time entirely. The two sit at different layers — we are additive from day one."*
> 

> **If Rehmann says: "Can't Basis do the same for CAS clients?"**
> 

> 
> 

> *"Basis can help your staff work faster on CAS tasks, including some AP and reconciliation work. But Basis still requires your team to supervise and own the outcome for each client. At scale — 50, 100, 200 CAS clients — that supervision burden doesn't go away with Basis; it just changes shape. Neoflo takes the delivery risk entirely: we run the operation, meet the SLA, and your team steps in only at the review and advisory layer."*
> 

## The Pilot Angle

Propose a CAS client pilot where Neoflo runs AP/AR operations for 90 days. The comparison point is not "Neoflo vs. Basis" — it is **Neoflo vs. current state** (Rehmann staff doing it manually or with basic tools). Basis is irrelevant to that comparison. The question Rehmann answers after the pilot: did we free up associate time, did accuracy improve, did cost per client fall? That conversation does not involve Basis at all.

---

# 7. Fix Needed in Proposal Draft 2

The current Basis paragraph in Draft 2 reads:

> *"Neoflo and Basis work together, not against each other. Basis automates the close. Neoflo automates the upstream — AP, AR, reconciliation — so the data feeding into Basis is clean and structured."*
> 

**The problem:** This breaks down when Rehmann reads the R2R module, which explicitly covers reconciliation and close prep. We cannot claim "Basis does the close, we do the upstream" while offering a module that includes both.

**Recommended replacement:**

> *"For Rehmann's internal practices — tax, audit, and assurance — Basis is the right tool, and Neoflo has no overlap there. For CAS client operations, Neoflo runs the transactional layer: invoice processing, AP matching, cash application, and exception resolution. Rehmann's team steps in at the review and advisory layer. Clean upstream data from Neoflo's workflows makes any close or reconciliation tool — Basis included — work better and faster. The two sit at different layers of the same workflow."*
> 

---

# 8. Bottom Line for Nipun

- **Basis is a real competitor at the CAS layer**, not just a tax/audit tool. They cover reconciliation, document extraction, and GL coding. Our earlier analysis understated this.
- **Neoflo's real differentiation is delivery accountability.** Basis gives Rehmann better tools. Neoflo takes the work off Rehmann entirely, under SLA. That is the wedge, regardless of feature overlap.
- **The "complementary" framing holds — but only if we are precise.** Complementary means Basis for tax/audit/internal workflows + Neoflo for CAS client transactional operations. Not "Basis closes, Neoflo feeds" — that is not clean enough and will be challenged.
- **Fix the Basis paragraph in Draft 2** before the proposal goes to Sharon Berman and Patti Zulewski. The current version creates a credibility risk if Rehmann spots the contradiction in the R2R module.
- **Design the pilot to keep Basis out of the conversation.** Neoflo vs. current state is the comparison that wins. Do not let the pilot become a Neoflo vs. Basis evaluation.