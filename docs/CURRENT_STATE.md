# VOLTA Corporate — Current State

**Last reviewed:** 2026-08-26  
**Lifecycle:** PRODUCTION / ACTIVE DEVELOPMENT  
**Authoritative branch:** `main`  
**Production:** `https://volta-landing-delta.vercel.app`  
**Latest product-code merge:** `06083c423bb9bd0918227af6042e63a49be35bba` (PR #9, `CORP-INIT-004`)

## Production state

VOLTA Corporate is live and aligned with the current runtime.

Latest verified production deployment:

- Vercel deployment: `dpl_6QeSt5MbJch3Ahf6pjHmmP7soena`;
- state: `READY`;
- source: `git`;
- branch: `main`;
- Git commit: `06083c423bb9bd0918227af6042e63a49be35bba`;
- production alias: `https://volta-landing-delta.vercel.app`.

The build cloned GitHub `main`, removed the retired package dependencies, compiled Next.js 16.2.2, passed TypeScript and promoted without alias errors.

Public verification returned HTTP 200 and confirmed:

- headline **“Tu próximo paso, online.”**;
- Store → `https://www.voltastore.app`;
- Portfolio → `https://volta-portfolio-psi.vercel.app`;
- Booking → `https://volta-booking.vercel.app`;
- approved metadata/favicon;
- `ProductIntentAnalytics` and Vercel `Analytics` are included in the production runtime;
- `/_vercel/insights/script.js` returns HTTP 200 in production.

## What the site is

VOLTA Corporate is the ecosystem hub, not a WhatsApp automation landing and not a standalone SaaS product.

Current approved corporate headline:

> **Tu próximo paso, online.**

Customer-facing product map:

- **VOLTA Store** — production commerce/storefront product;
- **VOLTA Portfolio** — production/active professional portfolio product;
- **VOLTA Booking** — active, production-oriented booking product, intentionally labeled **`En evolución`**;
- **VOLTA Automatization** — incubation/provisional; intentionally not presented as generally available.

## Current runtime

Main 2.0 now includes the production-hardening and Corporate 2.1 layers:

- real Store/Portfolio/Booking destinations;
- retired WhatsApp-first source tree removed;
- retired `clsx`, `framer-motion` and `tailwind-merge` dependencies removed with a regenerated lockfile;
- `scripts/verify-corporate.mjs` protects positioning, routes, metadata, analytics contracts, responsive rules and legacy retirement;
- `.github/workflows/corporate-quality.yml` runs clean install, verification, lint and production build;
- Vercel Web Analytics is wired into the layout;
- custom event **`Product selected`** records only `product` and CTA `placement` (`showcase` or `closing`), with no names, emails, phone numbers, free text or account identifiers.

## Current information architecture

1. Fixed navigation.
2. Hero with ecosystem preview.
3. `Una marca · Distintas formas de avanzar` bridge.
4. Store, Portfolio and Booking showcases.
5. `Construido para avanzar` principles.
6. `VOLTA en acción` outcome mapping.
7. `Elegí → Hacelo tuyo → Ponelo online` process.
8. Product-oriented closing CTA.

## Recently shipped

### CORP-INIT-004 — Conversion Clarity & Dependency Cleanup

Shipped 2026-08-26.

- introduced narrowly scoped product-intent measurement without changing the Main 2.0 visual design;
- tracks which VOLTA product a visitor chooses and whether the click came from the showcase or closing CTA;
- removed residual dependencies from the retired WhatsApp-era implementation;
- regenerated `package-lock.json` safely with Node/npm;
- expanded the Corporate verifier and measurement guardrails;
- production deployment and analytics script endpoint verified.

See `docs/initiatives/completed/CORP-INIT-004-conversion-clarity.md`.

## Material open debt / risks

1. Product facts still live locally in `src/app/page.tsx`; cross-product drift remains possible even though the verifier protects current known URLs/status. See `CORP-DEBT-002`.
2. GitHub repository description still frames VOLTA as WhatsApp-only; current connected tooling exposes repository metadata read but no authorized description write. See `CORP-DEBT-006`.

`CORP-DEBT-003` (Git→Vercel) and `CORP-DEBT-004` (legacy dependency cleanup) are resolved.

## Active Product OS work

No product initiative is currently active.

`CORP-INIT-001` through `CORP-INIT-004` are shipped/closed.

## Next recommended direction

1. Use real product-selection data before making another conversion redesign.
2. Reconcile Corporate product copy/routes with VOLTA OS after material product releases.
3. Run a deliberate responsive/browser pass with the next material visual change.
4. Update the external GitHub repository description when an authorized metadata write path is available.

## Last operating agent

ChatGPT completed `CORP-INIT-004` on 2026-08-26, including production verification, dependency cleanup and narrowly scoped conversion instrumentation.
