# VOLTA Corporate — Current State

**Last reviewed:** 2026-08-25  
**Lifecycle:** PRODUCTION / ACTIVE DEVELOPMENT  
**Authoritative branch:** `main`  
**Production:** `https://volta-landing-delta.vercel.app`  
**Latest product-code merge:** `6e05ebefba6441f892c9926bbceab0416e2f8a63` (PR #5, `CORP-INIT-003`)  
**Latest verified production commit:** `9cb4fc29dd5c1d9be307ed6bb3a9aad5210ed714`

## Production state

VOLTA Corporate is live and aligned with current `main` runtime.

Verified production deployment:

- Vercel deployment: `dpl_FCoZtPH6LapDkRHFqxRjHZeMbyJp`;
- state: `READY`;
- source: `git`;
- branch: `main`;
- Git commit: `9cb4fc29dd5c1d9be307ed6bb3a9aad5210ed714`;
- production alias: `https://volta-landing-delta.vercel.app`;
- Vercel records Git repository, branch and commit metadata.

The build cloned `LucasFasolato/volta-landing`, compiled Next.js 16.2.2, passed TypeScript, generated the static pages and promoted the deployment without alias errors.

Public verification returned HTTP 200 and confirmed:

- headline: **“Tu próximo paso, online.”**;
- Store → `https://www.voltastore.app`;
- Portfolio → `https://volta-portfolio-psi.vercel.app`;
- Booking → `https://volta-booking.vercel.app`;
- approved metadata/favicon remain present.

The GitHub → Vercel integration is therefore proven healthy again after the repository was reconnected and the temporary Hobby build-rate limit cleared.

## What the site is

VOLTA Corporate is the ecosystem hub, not a WhatsApp automation landing and not a standalone SaaS product.

Current approved corporate headline:

> **Tu próximo paso, online.**

The customer-facing product map is:

- **VOLTA Store** — production commerce/storefront product;
- **VOLTA Portfolio** — production/active professional portfolio product;
- **VOLTA Booking** — active, production-oriented booking product, intentionally labeled **`En evolución`**;
- **VOLTA Automatization** — incubation direction with provisional naming; intentionally not presented as generally available.

## Current runtime

`main` contains Main 2.0 plus Production Hardening & Product Routing:

- real Store/Portfolio/Booking destinations;
- retired WhatsApp-first source tree removed;
- `scripts/verify-corporate.mjs` protecting positioning, routes, metadata, responsive contracts and retired paths;
- `.github/workflows/corporate-quality.yml` running clean install, verification, lint and production build on PRs and `main` pushes.

GitHub quality runs have passed clean install, corporate verification, lint and build. The Vercel production build independently passed Next.js compilation and TypeScript.

## Current information architecture

1. Fixed navigation.
2. Hero with ecosystem preview.
3. `Una marca · Distintas formas de avanzar` bridge.
4. Full-width Store, Portfolio and Booking showcases.
5. `Construido para avanzar` product/design principles.
6. `VOLTA en acción` outcome mapping.
7. `Elegí → Hacelo tuyo → Ponelo online` process.
8. `¿Cuál es el próximo?` closing CTA.

## Recently shipped

### CORP-INIT-003 — Production Hardening & Product Routing

Shipped 2026-08-25.

- reconciled runtime CTAs with authoritative product destinations;
- removed ~1,000 lines of retired WhatsApp-era source modules;
- added the Corporate source-of-truth verification script;
- added the GitHub Actions quality gate;
- restored and proved Git → Vercel production delivery with commit metadata;
- verified production routing for Store, Portfolio and Booking.

See `docs/initiatives/completed/CORP-INIT-003-production-hardening-routing.md`.

## Material open debt / risks

1. Product facts remain hard-coded in `src/app/page.tsx`, so cross-product drift remains possible; see `CORP-DEBT-002`.
2. Legacy source cleanup is complete, but residual unused package dependencies still need a lockfile-safe removal; see `CORP-DEBT-004`.
3. GitHub repository description still frames VOLTA as WhatsApp-only; see `CORP-DEBT-006`.

`CORP-DEBT-003` is resolved: a normal `main` Git push produced deployment `dpl_FCoZtPH6LapDkRHFqxRjHZeMbyJp` with Git commit metadata and updated the production alias.

## Active Product OS work

No product initiative is currently active.

`CORP-INIT-001`, `CORP-INIT-002` and `CORP-INIT-003` are shipped/closed.

## Next recommended direction

1. Remove residual unused dependencies and regenerate the lockfile safely.
2. Keep product copy/routes reconciled with VOLTA OS after material product changes.
3. Start conversion-focused improvements only from measurable questions and real evidence.
4. Record a deliberate responsive/browser pass with the next material visual change.

## Last operating agent

ChatGPT completed `CORP-INIT-003` on 2026-08-25, including production verification and restoration of traceable Git → Vercel delivery.
