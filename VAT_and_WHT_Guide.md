# Sales Tax & Withholding — A Plain-English Guide (US)

A non-finance walkthrough of the two taxes a US finance team keeps running into across P2P and O2C: **sales & use tax** (on what you buy and sell) and **1099 / backup withholding** (on what you pay vendors). The international cousin — **VAT** — is covered briefly at the end, because overseas entities and e-invoicing mandates still use it.

---

## What is sales tax?

**Sales & use tax** is a consumption tax in the US, collected **once, at the final retail sale**, and remitted to the state (and often a county/city).

The important things to understand:

- The **seller collects** it from the buyer and sends it to the state.
- It is **single-stage**. Unlike VAT, there is **no chain of input credits**. A business buying goods for resale hands the seller a **resale / exemption certificate** and pays no sales tax on that purchase.
- The rate depends on **what** is sold and **where** — ~45 states plus thousands of local jurisdictions, combined rates roughly 0–10%+.
- **Use tax** is the mirror: if you buy taxable goods and the seller didn't charge sales tax (e.g., an out-of-state vendor), you **self-assess** and pay use tax to your own state.
- **Nexus (post-Wayfair, 2018):** you owe sales tax in states where you have **economic nexus** (sales-volume thresholds), not just physical presence.

**Sales tax follows the product and the location — not the person** — but a valid resale/exemption certificate makes a B2B sale tax-free.

---

## What is 1099 / backup withholding?

This is the closest US analog to "withholding tax on vendor payments." It is entirely about **who you're paying**, not the product.

When you pay a US vendor (especially for services):

- You collect a **W-9** (their legal name + TIN/EIN) **before** paying.
- If you pay them **$600 or more** in a year for services, you report it to the IRS on **Form 1099-NEC** (and send the vendor a copy).
- Normally you withhold **nothing** — the vendor pays their own income tax.
- **But** if the vendor won't furnish a valid TIN (or the IRS flags a name/TIN mismatch), you **must apply 24% backup withholding** — hold back 24% of the payment and send it to the IRS.

**Backup withholding follows the vendor's tax status, not the product.** Missing or invalid W-9 → 24% withheld.

---

## The key difference at a glance

| | Sales & use tax | 1099 / backup withholding |
|---|---|---|
| What triggers it? | A taxable sale, in a taxing jurisdiction | Paying a reportable vendor |
| Calculated on? | The sale price (by product + location) | The payment to the vendor |
| Who collects/remits? | Seller remits to the state | Buyer reports (and withholds only if TIN is bad) |
| Default withholding? | n/a — tax is added to the price | 0% normally; **24%** if W-9/TIN missing or invalid |
| Multi-stage credit? | **No** (single-stage) | n/a |

---

## How it works — a worked US example

Three players: **a US clothing brand** selling to **a US retailer** selling to **a consumer**. Combined sales-tax rate = **9%**.

### Step 1 · Brand sells to Retailer (for resale) — $100

The Retailer is buying to resell, so it hands the Brand a **resale certificate**. **No sales tax** applies.

| | Amount |
|---|---|
| Price (for resale) | $100 |
| Sales tax | $0 (resale certificate) |
| **Retailer pays Brand** | **$100** |

### Step 2 · Retailer sells to Consumer — $200

| | Amount |
|---|---|
| Price | $200 |
| Sales tax (9%) | $18 |
| **Consumer pays Retailer** | **$218** |

The Retailer collects $18 and remits it to the state.

### Step 3 · The Consumer

The Consumer can't reclaim anything. The tax stops with them.

### Where did the government's money come from?

The state collected **exactly $18 — 9% of the final $200 retail price — once, at the final sale.** There is no multi-stage credit chain to reconcile. **That single-stage simplicity is the key difference from VAT.**

---

## Where 1099 withholding fits

This is separate from sales tax — it's about paying vendors. Say the Retailer pays a **freelance designer $5,000** for services:

- **Designer provides a valid W-9** → Retailer withholds nothing, pays the full **$5,000**, and issues a **1099-NEC** at year end.
- **Designer refuses / gives an invalid TIN** → Retailer must apply **24% backup withholding**: holds **$1,200**, pays the designer **$3,800**, and sends **$1,200** to the IRS. The designer reconciles it on their own tax return.

---

## Individual vs company vendor

- **Sales tax** rate is the **same regardless of who the seller is** — it depends on the product + jurisdiction (and whether a valid exemption certificate is on file).
- **1099 / backup withholding:** payments to **corporations are generally exempt** from 1099 reporting (with exceptions, e.g., legal and medical payments); payments to **individuals, LLCs, and partnerships for services are reportable**. The **24% backup withholding** is triggered by a **missing/invalid TIN**, not by being an individual per se.

---

## The international cousin: VAT

Most of the world — the EU, UK, India (GST), and dozens of others — uses **VAT** instead of US-style sales tax. VAT is **multi-stage**: tax is added at every step in the chain, and each business **reclaims the VAT it paid** (input credit), so the net burden lands on the end consumer. **The US has no VAT and no input-credit chain.**

This matters for Neoflo in two ways: (1) customers with **overseas entities** will deal with VAT abroad, and (2) **e-invoicing mandates** (PEPPOL in the EU, and similar regimes) are VAT-driven. But for **US operations**, the relevant taxes are sales & use tax and 1099 withholding.

---

## One-page summary

| | Sales & use tax | 1099 / backup withholding | VAT (international) |
|---|---|---|---|
| **What is it?** | Single-stage tax on final retail sale | Reporting + conditional withholding on vendor pay | Multi-stage tax on value added |
| **Based on?** | Product + jurisdiction | The vendor (TIN status) | Product (line item) |
| **Who remits?** | Seller → state | Buyer (withholds only if TIN bad) | Each seller in the chain |
| **Input credit?** | **No** | n/a | **Yes** (registered businesses) |
| **Default withholding?** | n/a | 0%, or **24%** if no valid W-9 | n/a |

---

## Key takeaways

1. **US sales tax is single-stage** — collected once at the final retail sale, **no input-credit chain**; B2B purchases for resale are tax-free with a certificate.
2. **Use tax + economic nexus (Wayfair)** mean you can owe tax in states where you sell even without physical presence.
3. **The US "withholding" analog is 1099 reporting + 24% backup withholding** when a W-9/TIN is missing or invalid — not a flat rate on every vendor.
4. **Corporations are generally 1099-exempt;** what matters is the **$600 services threshold** and a **valid TIN**.
5. **VAT is the international cousin** — multi-stage with input credits — relevant only for overseas entities and e-invoicing mandates.

---

*This document is written for general understanding. Tax rates and rules vary by state and country and change over time. Always consult a tax professional for specific advice.*
