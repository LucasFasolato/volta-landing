# VOLTA Corporate — Current State

**Last reviewed:** 2026-08-26  
**Lifecycle:** PRODUCTION / ACTIVE DEVELOPMENT  
**Authoritative branch:** `main`  
**Production:** `https://volta-landing-delta.vercel.app`  
**Latest product-code merge:** `dc2c310d1db0f27d349f81a30e6a48f69401e9aa` (PR #11, `CORP-INIT-005`)

## Production state

VOLTA Corporate is live with the first two Corporate 3.0 epics shipped.

Latest verified production deployment:

- Vercel deployment: `dpl_9qrHJiEjmFJnnV79xdY8fdU3hn69`;
- state: `READY`;
- source: `git`;
- branch: `main`;
- Git commit: `dc2c310d1db0f27d349f81a30e6a48f69401e9aa`;
- production alias: `https://volta-landing-delta.vercel.app`.

The production build compiled Next.js 16.2.2 successfully and the public alias returned HTTP 200 after promotion.

Production output verification confirmed:

- approved headline **“Tu próximo paso, online.”**;
- intent-driven hero controls: `Vender`, `Mostrarte`, `Reservas`, `Automatizar`;
- Store, Portfolio, Booking and guarded Automate product chapters;
- interactive Product Moment client components are included in the production runtime;
- Store → `https://www.voltastore.app`;
- Portfolio → `https://volta-portfolio-psi.vercel.app`;
- Booking → `https://volta-booking.vercel.app`;
- Booking remains labeled **`En evolución`**;
- Automate is labeled **`En preparación`** and has no external product destination;
- metadata/favicon updated without changing the approved corporate statement;
- `ProductIntentAnalytics` and Vercel `Analytics` remain included.

The PR quality gate passed Corporate verification, ESLint and the production build. Source-level mobile/reduced-motion contracts remain protected. A pixel-level screenshot sweep was not available in the connected execution environment, so future material visual work should continue to include a dedicated browser/device QA pass when browser infrastructure is available.

## What the site is

VOLTA Corporate is the ecosystem hub, not a WhatsApp automation landing and not a standalone SaaS product.

Current approved corporate headline:

> **Tu próximo paso, online.**

Customer-facing product map on Corporate:

- **VOLTA Store** — production commerce/storefront product;
- **VOLTA Portfolio** — production/active professional portfolio product;
- **VOLTA Booking** — active, production-oriented booking product, intentionally labeled **`En evolución`**;
- **VOLTA Automate** — guarded customer-facing working name for the automation direction, intentionally labeled **`En preparación`** with no external product link.

`volta-os` remains authoritative for the final automation product name and lifecycle. Corporate must not promote Automate to generally available until that truth changes.

## Current runtime

Corporate 3.0 now includes:

- **Hero 3.0 / VOLTA Switchboard** as a client-side intent selector;
- product-specific hero stages for Store, Portfolio, Booking and Automate;
- interactive Product Moments for all four chapters;
- real Store/Portfolio/Booking destinations;
- guarded Automate messaging without invented integrations or availability claims;
- `scripts/verify-corporate.mjs` protection for positioning, routes, lifecycle labels, the switchboard, Product Moments, metadata, analytics contracts, responsive rules and legacy retirement;
- `.github/workflows/corporate-quality.yml` clean install, verification, lint and production build;
- Vercel Web Analytics;
- custom event **`Product selected`** for external Store/Portfolio/Booking CTAs, recording only product and CTA placement.

## Current information architecture

1. Fixed navigation.
2. Hero 3.0 with intent-driven VOLTA Switchboard.
3. `Una marca · Distintas formas de avanzar` intent bridge.
4. Store, Portfolio, Booking and Automate Product Moments.
5. `Construido para avanzar` principles.
6. Four-product `VOLTA en acción` outcome mapping.
7. `Elegí → Hacelo tuyo → Ponelo online` process.
8. Intent-oriented closing CTA.

## Recently shipped

### CORP-INIT-005 — Hero 3.0 & Product Moments

Shipped 2026-08-26 via PR #11.

- introduced the `Vender / Mostrarte / Reservas / Automatizar` ecosystem switchboard;
- replaced passive product showcase visuals with interactive Product Moments;
- added a fourth guarded Corporate chapter for VOLTA Automate;
- kept Automate explicitly `En preparación`, without external link or unsupported integration claims;
- updated metadata and Corporate verification contracts;
- passed Corporate verifier, lint and production build;
- verified the resulting `main` deployment as `READY` and HTTP 200 in production.

See `docs/initiatives/completed/CORP-INIT-005-hero-product-moments.md`.

### CORP-INIT-004 — Conversion Clarity & Dependency Cleanup

Shipped 2026-08-26.

- introduced narrowly scoped product-intent measurement;
- removed residual dependencies from the retired WhatsApp-era implementation;
- strengthened Corporate verification and analytics guardrails.

See `docs/initiatives/completed/CORP-INIT-004-conversion-clarity.md`.

## Material open debt / risks

1. Product facts still live locally in `src/app/page.tsx`; cross-product drift remains possible. See `CORP-DEBT-002`.
2. Corporate now uses **VOLTA Automate** as the guarded customer-facing working name while `volta-os` still holds the automation direction as provisional/incubating; reconcile the source of truth before availability changes.
3. GitHub repository description still frames VOLTA as WhatsApp-only. See `CORP-DEBT-006`.
4. Full pixel-level desktop/mobile browser QA should be repeated when browser infrastructure is available for the next material visual pass.

## Active Product OS work

No Corporate product initiative is currently active.

`CORP-INIT-001` through `CORP-INIT-005` are shipped/closed.

## Next recommended direction

1. Reconcile `VOLTA Automate` naming/lifecycle in `volta-os` before treating it as generally available.
2. Continue Corporate 3.0 with the later approved flow/narrative epics rather than adding decorative motion for its own sake.
3. Use real product-selection data before changing CTA hierarchy again.
4. Resolve registry-driven product facts when the cross-product contract is ready.
5. Update the external GitHub repository description when an authorized metadata write path is available.

## Last operating agent

ChatGPT completed `CORP-INIT-005` on 2026-08-26, including Hero 3.0, Product Moments, guarded Automate representation, CI validation, merge to `main` and verified production deployment.
