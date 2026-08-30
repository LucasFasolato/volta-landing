# VOLTA Corporate — Current State

**Last reviewed:** 2026-08-30  
**Entity type:** Brand / Distribution Asset  
**Strategic roles:** BRAND_DISTRIBUTION · ECOSYSTEM_ASSET  
**Investment posture:** MAINTAIN  
**Runtime state:** PRODUCTION / ACTIVE DEVELOPMENT  
**Authoritative branch:** `main`  
**Production:** `https://volta-landing-delta.vercel.app`

## What Corporate is

VOLTA Corporate is the public ecosystem hub.

It is not:

- a standalone SaaS product;
- the source of truth for product lifecycle;
- a WhatsApp-only landing;
- a place to promote Explore-stage initiatives as if customer-ready.

Canonical company and portfolio truth lives in `LucasFasolato/volta-foundation`.

Current corporate headline:

> **Tu próximo paso, online.**

## Current portfolio representation

Canonical portfolio truth currently implies:

- **VOLTA Store** — OPERATE / INVEST — customer-ready — `https://www.voltastore.app`;
- **VOLTA Booking** — BUILD / candidate for OPERATE / INVEST — public but evolving — `https://volta-booking.vercel.app`;
- **VOLTA Portfolio** — OPERATE / INVEST — customer-ready — `https://volta-portfolio-psi.vercel.app`;
- **VOLTA Automate** — EXPLORE / INCUBATE — not customer-ready, no external destination;
- **VOLTA Bridge** — EXPLORE / INCUBATE — not currently represented as a customer-ready branch;
- **VOLTA Shield** — EXPLORE / INCUBATE — not currently represented as a customer-ready branch.

Corporate may summarize this truth but must not override `volta-foundation/registry/portfolio.yaml`.

## Current implementation

`main` contains the concise Corporate Web 2.0 implementation:

- light-first / dark-purposeful surfaces;
- five primary content sections;
- compact product moments;
- centralized local product representation in `src/data/corporate-products.ts`;
- product-selection analytics;
- mobile and reduced-motion behavior;
- no fictional social proof.

The current implementation predates VOLTA Visual Foundation v1 in some foundational details, notably:

- Inter as VOLTA-owned shell typography;
- legacy green values around `#12E89A`;
- local Web 2.0 tokens presented historically as ecosystem-wide defaults.

These are controlled Visual/Design debt, not a reason for an immediate full-site rewrite.

## Visual authority after Company OS v1

The global visual authority is now:

- `VOLTA-VIS-001` — Visual Foundation;
- `VOLTA-DSN-001` — Design System;
- `VOLTA-BRD-001` — Brand System.

`docs/VOLTA-WEB-DESIGN-SYSTEM-2.md` remains useful as a description of the current Corporate implementation and proven landing composition, but it is no longer a company-wide design standard.

Future material visual work should incrementally converge toward:

- VOLTA Green `#00E878` as canonical brand primitive;
- Instrument Sans Variable for VOLTA-owned primary typography;
- semantic tokens rather than raw legacy brand values;
- The Shift and the approved visual grammar where it materially improves recognition.

## Current information architecture

1. Hero / ecosystem chooser
2. Products / compact Product Moments
3. `Elegí → Hacelo tuyo → Ponelo online`
4. Why VOLTA
5. Final CTA
6. Footer

The five-section constraint is a current implementation guardrail, not a universal Company OS law. Change it only when evidence or an approved positioning decision justifies the additional complexity.

## Measurement

Corporate currently answers one narrow question:

> **Which VOLTA product does a visitor choose, and from which placement?**

Existing event:

- `Product selected`;
- product key;
- explicit placement;
- no personal data.

This is sufficient until another named decision requires more measurement.

## Material open risks / debt

1. **Visual Foundation convergence:** current code still contains legacy Inter / `#12E89A` implementation.
2. **Automate public presence:** Automate is EXPLORE. Keeping an `En exploración`/preparation representation is a material brand/portfolio decision and must never imply availability.
3. **Portfolio synchronization:** local product copy/status can drift after product releases; `volta-foundation/registry/portfolio.yaml` is the company-level classification authority.
4. **Production verification:** material visual changes still require real desktop/mobile render verification.
5. **Distribution effectiveness:** product-selection analytics exist, but current evidence does not yet establish whether Corporate materially improves product discovery or adoption.

## Next recommended direction

1. Keep Corporate aligned to the canonical portfolio after each material portfolio/lifecycle change.
2. Measure product selection before reordering branches or rebuilding the IA.
3. Incrementally migrate VOLTA-owned visual surfaces to Visual Foundation v1 when materially touched.
4. Keep Explore-stage initiatives explicitly differentiated from customer-ready products.
5. Do not reopen a large Corporate redesign without evidence that current representation, trust or routing is failing.
