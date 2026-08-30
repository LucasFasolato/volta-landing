# VOLTA Corporate — Guardrails

## Source-of-truth authority

Use the authority that owns the question.

| Question | Authority |
| --- | --- |
| What does this repository currently implement? | Current `main` code and Git history. |
| What does the public corporate site actually serve? | Current production deployment/domain evidence. |
| What is VOLTA and how should it behave as a company/brand? | `LucasFasolato/volta-foundation` Company OS. |
| Which initiatives exist and how are they classified? | `volta-foundation/registry/portfolio.yaml`. |
| What can a product truthfully claim? | The corresponding product repository plus applicable Product/Brand constraints. |
| What was intended historically? | Git history / accepted records / superseded docs as historical context only. |

If two sources conflict, identify the domain authority and resolve the contradiction explicitly.

> **Corporate represents VOLTA; it does not redefine VOLTA.**

## Positioning

- Current corporate headline: **“Tu próximo paso, online.”**
- Corporate is ecosystem-first, not WhatsApp-first.
- Technology and AI are means; practical outcomes are the public story.
- Material repositioning or major information-architecture change requires Brand-level approval.
- Explore-stage initiatives must not borrow maturity from customer-ready products.

## Product representation

Canonical current product/initiative classification comes from `volta-foundation/registry/portfolio.yaml`.

Current verified customer-facing product destinations:

- Store → `https://www.voltastore.app`;
- Portfolio → `https://volta-portfolio-psi.vercel.app`;
- Booking → `https://volta-booking.vercel.app`.

Current strategic interpretation:

- Store — OPERATE / INVEST;
- Portfolio — OPERATE / INVEST;
- Booking — BUILD / candidate for OPERATE / INVEST;
- Automate — EXPLORE / INCUBATE;
- Bridge — EXPLORE / INCUBATE;
- Shield — EXPLORE / INCUBATE.

Rules:

- Revalidate local status/copy after material portfolio changes.
- A product claim must remain supported by the relevant product repository.
- Booking should remain visibly evolving until its lifecycle changes canonically.
- Automate must not be presented as available while it remains EXPLORE.
- Adding/removing an Explore-stage initiative from the primary public chooser is a material positioning decision.
- Real product previews are preferred over fictional dashboards.

## Claims / credibility

- No fabricated testimonials, customer counts, revenue impact, conversion percentages or usage metrics.
- Social proof enters only when real and supportable.
- Do not turn aspirations into current capability claims.
- Distinguish customer-ready products from exploratory theses visually and verbally.

## Measurement

Current Corporate question:

> **Which VOLTA product does a visitor choose, and from which placement?**

Track only what is necessary to answer that question:

- product key;
- placement.

Do not attach personal data, identifiers or free text.

Do not add another analytics vendor or broader tracking without a named decision that needs it.

## Brand / Visual / UX

Global authority:

- `VOLTA-BRD-001` — Brand System;
- `VOLTA-VIS-001` — Visual Foundation;
- `VOLTA-DSN-001` — Design System.

Corporate inherits:

- VOLTA Green `#00E878` as canonical brand primitive;
- Instrument Sans Variable as primary VOLTA-owned type direction;
- The Shift visual grammar;
- semantic tokens;
- WCAG 2.2 AA;
- premium through execution;
- mobile first-class.

Current legacy Inter / `#12E89A` implementation is controlled Design Debt.

Do not create a broad rewrite only to remove legacy values. When a surface is materially changed, prefer convergence over further drift.

Product expression may vary; Corporate should not force every product to look identical.

## Architecture

- Keep the runtime lightweight.
- Do not add a backend/database merely to centralize marketing copy or analytics.
- If synchronization with portfolio truth becomes necessary, prefer build-time/static mechanisms before runtime coupling.
- Do not recreate retired presentation systems without a concrete need.
- Local product data is a presentation cache, not canonical portfolio authority.

## Shipping

Follow `VOLTA-DLV-001`.

Before shipping material changes, select the smallest sufficient verification set, which may include:

- `npm run verify:corporate`;
- lint;
- build;
- desktop/mobile render verification;
- navigation/anchor behavior;
- product destinations;
- metadata/SEO/favicon;
- production verification when the release boundary requires it.

A docs-only correction should not intentionally consume a runtime deployment.

Do not repeatedly redeploy to bypass provider limits.

## Agent autonomy

Agents may autonomously:

- fix defects, accessibility, responsive and performance issues;
- correct stale links/status labels when canonical evidence exists;
- improve minor copy clarity without repositioning;
- reconcile local documentation with Company OS;
- remove verified dead implementation;
- preserve current analytics contracts.

Human/Brand approval is required for:

- material repositioning;
- headline replacement;
- material changes to which initiatives appear publicly;
- presenting Explore/Validate initiatives as customer-ready;
- new unsupported commercial/credibility claims;
- major IA changes;
- substantial runtime/backend/paid-provider commitments.
