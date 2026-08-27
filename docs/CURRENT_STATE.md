# VOLTA Corporate — Current State

**Last reviewed:** 2026-08-26  
**Lifecycle:** PRODUCTION / ACTIVE DEVELOPMENT  
**Authoritative branch:** `main`  
**Production:** `https://volta-landing-delta.vercel.app`  
**Latest product-code merge:** `50d6559aa2e9009802f32e46afaaadc8d2f26a4b` (PR #13, `CORP-INIT-006`)

## Delivery state

`main` now contains Corporate 3.0 Hero/Product Moments plus the new **VOLTA Flow** language.

The latest verified production deployment is still the pre-Flow runtime:

- Vercel deployment: `dpl_5uL2Ykdp3NiKabDVLbvwauWXRE7w`;
- state: `READY`;
- source: `git`;
- branch: `main`;
- Git commit: `d2f8d51a9e9c434ab43c377a7c811231a41494e1`;
- production alias: `https://volta-landing-delta.vercel.app`.

The Flow product-code merge (`50d6559aa2e9009802f32e46afaaadc8d2f26a4b`) passed Corporate verification, ESLint and the Next.js production build in GitHub Actions. Vercel did not create the final preview or production build because the connected Hobby project returned `build-rate-limit`. This is a delivery/provider limit, not a compilation failure.

Until a later `main` deployment containing commit `50d6559...` is `READY` and promoted to the production alias, **Git `main` is ahead of production**.

## Verified production behavior

The currently served production build still confirms:

- approved headline **“Tu próximo paso, online.”**;
- intent-driven hero controls: `Vender`, `Mostrarte`, `Reservas`, `Automatizar`;
- Store, Portfolio, Booking and guarded Automate product chapters;
- interactive Product Moments;
- Store → `https://www.voltastore.app`;
- Portfolio → `https://volta-portfolio-psi.vercel.app`;
- Booking → `https://volta-booking.vercel.app`;
- Booking labeled **`En evolución`**;
- Automate labeled **`En preparación`** with no external product destination;
- Product Intent Analytics and Vercel Analytics.

A pixel-level screenshot sweep is still unavailable in the connected execution environment. Source-level mobile/reduced-motion contracts and production build checks remain protected.

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

## Current `main` runtime

Corporate 3.0 on `main` now includes:

- **Hero 3.0 / VOLTA Switchboard** as an intent selector;
- product-specific hero stages for Store, Portfolio, Booking and Automate;
- interactive Product Moments for all four chapters;
- **VOLTA Flow** activation signature: `OFF → VOLTA → ONLINE`;
- a four-way ecosystem branch map toward Store / Portfolio / Booking / Automate;
- a continuous chapter rail across product, principles, outcome, process and closing sections;
- scroll-aware active / passed / idle flow states powered by `IntersectionObserver`;
- mobile-specific horizontal flow signaling;
- purposeful flow motion with explicit `prefers-reduced-motion` behavior;
- real Store/Portfolio/Booking destinations;
- guarded Automate messaging without invented integrations or availability claims;
- `scripts/verify-corporate.mjs` protection for positioning, routes, lifecycle labels, switchboard, Product Moments, VOLTA Flow, metadata, analytics, responsive rules and legacy retirement;
- `.github/workflows/corporate-quality.yml` clean install, verification, lint and production build;
- Vercel Web Analytics and the existing privacy-limited `Product selected` event.

## Current information architecture

1. Fixed navigation.
2. Hero 3.0 with intent-driven VOLTA Switchboard.
3. VOLTA Flow activation signature (`OFF → VOLTA → ONLINE`).
4. `Una marca · Distintas formas de avanzar` with four-way flow branching.
5. Store, Portfolio, Booking and Automate Product Moments connected by the Flow rail.
6. `Construido para avanzar` principles.
7. Four-product `VOLTA en acción` outcome mapping.
8. `Elegí → Hacelo tuyo → Ponelo online` process.
9. Intent-oriented closing CTA / terminal Flow state.

## Active initiative

### CORP-INIT-006 — VOLTA Flow

Merged to `main` on 2026-08-26 via PR #13.

- product-code commit: `50d6559aa2e9009802f32e46afaaadc8d2f26a4b`;
- Corporate verifier: PASS;
- ESLint: PASS;
- Next.js production build: PASS;
- Vercel final preview/production promotion: BLOCKED by provider `build-rate-limit`;
- status: **MERGED / PRODUCTION PROMOTION BLOCKED**.

See `docs/initiatives/active/CORP-INIT-006-volta-flow.md`.

## Recently shipped

### CORP-INIT-005 — Hero 3.0 & Product Moments

Shipped 2026-08-26 via PR #11.

- introduced the `Vender / Mostrarte / Reservas / Automatizar` ecosystem switchboard;
- replaced passive showcase visuals with interactive Product Moments;
- added guarded VOLTA Automate representation;
- passed Corporate verifier, lint and production build;
- verified production deployment and HTTP 200.

See `docs/initiatives/completed/CORP-INIT-005-hero-product-moments.md`.

### CORP-INIT-004 — Conversion Clarity & Dependency Cleanup

Shipped 2026-08-26.

- introduced narrowly scoped product-intent measurement;
- removed residual dependencies from the retired WhatsApp-era implementation;
- strengthened Corporate verification and analytics guardrails.

See `docs/initiatives/completed/CORP-INIT-004-conversion-clarity.md`.

## Material open debt / risks

1. Product facts still live locally in `src/app/page.tsx`; cross-product drift remains possible. See `CORP-DEBT-002`.
2. Corporate uses **VOLTA Automate** as the guarded customer-facing working name while `volta-os` still holds the automation direction as provisional/incubating; reconcile source of truth before availability changes.
3. GitHub repository description still frames VOLTA as WhatsApp-only. See `CORP-DEBT-006`.
4. `main` is temporarily ahead of production until Vercel accepts a post-Flow production build.
5. Full pixel-level desktop/mobile browser QA should be repeated when browser infrastructure is available.

## Next recommended direction

1. Promote a `main` deployment containing `50d6559...` once the Vercel build-rate limit allows it, then verify the production alias and close CORP-INIT-006.
2. Reconcile `VOLTA Automate` naming/lifecycle in `volta-os` before treating it as generally available.
3. Use real product-selection data before changing CTA hierarchy again.
4. Resolve registry-driven product facts when the cross-product contract is ready.
5. Update the external GitHub repository description when an authorized metadata write path is available.

## Last operating agent

ChatGPT implemented `CORP-INIT-006` on 2026-08-26, merged VOLTA Flow to `main`, passed the full GitHub quality gate and recorded the external Vercel build-rate-limit blocking final production promotion.
