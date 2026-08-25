# VOLTA Corporate — Current State

**Last reviewed:** 2026-08-25  
**Lifecycle:** PRODUCTION / ACTIVE DEVELOPMENT  
**Authoritative branch:** `main`  
**Production:** `https://volta-landing-delta.vercel.app`  
**Product OS adoption merge:** `56efdbae7a0d5ed3a543783db212ece6020d7867` (PR #1)  
**Latest product-code merge:** `6e05ebefba6441f892c9926bbceab0416e2f8a63` (PR #5, `CORP-INIT-003`)

## Source state (`main`)

`main` contains the Main 2.0 ecosystem experience plus the Production Hardening & Product Routing work:

- Store routes to `https://www.voltastore.app`;
- Portfolio routes to `https://volta-portfolio-psi.vercel.app`;
- Booking routes to `https://volta-booking.vercel.app`;
- Booking remains labeled **`En evolución`**, consistent with Booking Product OS lifecycle `ACTIVE / production-oriented`;
- the retired WhatsApp-first section/content/UI source tree was removed;
- `scripts/verify-corporate.mjs` now protects the corporate headline, product destinations, metadata, mobile/reduced-motion rules and legacy-file retirement;
- `.github/workflows/corporate-quality.yml` runs clean install, corporate verification, lint and production build on `main` pushes and future PRs.

GitHub Actions run `32897006491` for merge `6e05ebef` completed successfully: dependency install, corporate verification, lint and build all passed.

## Production state

The public alias is live, but **production has not yet received `6e05ebef`**.

Latest verified Vercel production deployment remains `dpl_4WjEspxUq1eom885SjiHG7wvysRJ` (`READY`), which serves the Main 2.0 code before the new Portfolio/Booking external routing and source cleanup.

A normal `main` merge still did **not** create a Vercel deployment, confirming the Git→Vercel integration remains unhealthy. A manual API deployment was attempted after the green quality gate and was rejected with Vercel `402 payment_required` because the Hobby account exhausted the `api-deployments-free-per-day` limit (100/100). The API reports reset at approximately **2026-08-26 17:45 America/Argentina/Cordoba**.

Do not describe the new product routing as live until a production deployment is verified.

## What the site is

VOLTA Corporate is the ecosystem hub, not a WhatsApp automation landing and not a standalone SaaS product.

Current approved corporate headline:

> **Tu próximo paso, online.**

The customer-facing product map is:

- **VOLTA Store** — production commerce/storefront product;
- **VOLTA Portfolio** — production/active professional portfolio product;
- **VOLTA Booking** — active, production-oriented booking product;
- **VOLTA Automatization** — incubation direction with provisional naming; intentionally not presented as generally available.

## Current information architecture

1. Fixed navigation.
2. Hero with ecosystem preview.
3. `Una marca · Distintas formas de avanzar` bridge.
4. Full-width Store, Portfolio and Booking showcases.
5. `Construido para avanzar` product/design principles.
6. `VOLTA en acción` outcome mapping.
7. `Elegí → Hacelo tuyo → Ponelo online` process.
8. `¿Cuál es el próximo?` closing CTA.

## Recently shipped to `main`

### Main 2.0

- ecosystem-first positioning;
- **“Tu próximo paso, online.”** brand statement;
- dedicated Store/Portfolio/Booking storytelling;
- product-specific visual previews and mobile rules;
- no invented metrics/testimonials;
- deployment-safe metadata/favicon/brand work.

Key commits: `f73179e`, `c831eaa`, `fd16933`, `e521c0a`, `4c9ac80`.

### CORP-INIT-003 — Production Hardening & Product Routing

- reconciled runtime CTAs with the authoritative Store/Portfolio/Booking production destinations;
- removed ~1,000 lines of retired WhatsApp-era source modules;
- added a small source-of-truth verification script;
- added a GitHub Actions quality gate;
- validated clean install + verification + lint + build successfully.

Runtime merge: `6e05ebefba6441f892c9926bbceab0416e2f8a63`.

## Known debt / risks

1. **Git → Vercel deployment traceability remains broken**; see `CORP-DEBT-003`.
2. **Legacy source cleanup is materially complete**, but unused package dependencies retained by the old implementation still require a lockfile-safe cleanup; see `CORP-DEBT-004`.
3. Product facts remain hard-coded in `src/app/page.tsx`, so cross-product drift remains possible; see `CORP-DEBT-002`.
4. GitHub repository description still frames VOLTA as WhatsApp-only; see `CORP-DEBT-006`.

## Active Product OS work

`CORP-INIT-003` is **BLOCKED ON PRODUCTION PUBLISH**, not fully shipped. Code and quality-gate work are merged and green; the remaining acceptance item is publishing and verifying `main` in Vercel.

`CORP-INIT-001` and `CORP-INIT-002` remain shipped/closed.

## Next action

1. After the Vercel API deployment quota resets, publish the current `main` to production.
2. Verify `volta-landing-delta.vercel.app` serves Portfolio and Booking external links and retains the approved headline/metadata.
3. Keep `CORP-DEBT-003` open until a normal Git-linked `main` push creates a traceable Vercel deployment; a successful manual deploy does not close that debt.
4. Then close `CORP-INIT-003` and clear `HANDOFF.md`.

## Last operating agent

ChatGPT implemented and merged the code/quality portion of `CORP-INIT-003` on 2026-08-25 and recorded the Vercel production blocker explicitly rather than claiming deployment success.
