# VOLTA Corporate — Current State

**Last reviewed:** 2026-08-25  
**Lifecycle:** PRODUCTION / ACTIVE DEVELOPMENT  
**Authoritative branch:** `main`  
**Production:** `https://volta-landing-delta.vercel.app`  
**Product OS adoption merge:** `56efdbae7a0d5ed3a543783db212ece6020d7867` (PR #1)  
**Adoption closure:** `3ea0d6e8168c05d464147ebf7e58a2c33f2f506a`

## Production state

The public site is live and the latest verified Vercel production deployment is `dpl_4WjEspxUq1eom885SjiHG7wvysRJ` with state `READY`.

The runtime currently served is the Main 2.0 corporate rebuild based on code commit `4c9ac8071a33b5994b67ef161e7fc91ca9687025`. Subsequent commits before this consolidation were documentation/Product OS changes, so production code and current `main` code remain aligned.

## What the site is today

VOLTA Corporate is the ecosystem hub, not a WhatsApp automation landing and not a standalone SaaS product.

Current approved corporate headline:

> **Tu próximo paso, online.**

The page publicly presents three customer-facing branches:

- **VOLTA Store** — production commerce/storefront product; corporate CTA links to `https://www.voltastore.app`.
- **VOLTA Portfolio** — production/active portfolio product. VOLTA OS registers `https://volta-portfolio-psi.vercel.app` as its verified production URL; the current Corporate runtime has not yet been updated to use that external destination.
- **VOLTA Booking** — active, production-oriented booking product. VOLTA OS now registers `https://volta-booking.vercel.app` as its verified production URL; the current Corporate runtime still keeps the CTA in-page and labels the product `En evolución`.

**VOLTA Automatization** remains an incubation direction with provisional naming in the global registry and is intentionally not presented as a generally available corporate product.

## Current information architecture

1. Fixed navigation.
2. Hero with ecosystem preview.
3. `Una marca · Distintas formas de avanzar` bridge.
4. Full-width Store, Portfolio and Booking product showcases.
5. `Construido para avanzar` design/product principles.
6. `VOLTA en acción` outcome mapping.
7. `Elegí → Hacelo tuyo → Ponelo online` process.
8. `¿Cuál es el próximo?` closing CTA.

The older four-card principles block that was explicitly rejected during review no longer represents the current page.

## Recently shipped

### August 2026 — ecosystem repositioning

- Replaced the narrow WhatsApp-first corporate definition with a product-ecosystem role.
- Removed unsupported/fabricated-style proof and avoided publishing metrics without evidence.
- Introduced Store, Portfolio and Booking as the public product map.
- Updated brand metadata and SEO away from WhatsApp-only language.

Key commits: `f73179e`, `cdc2bb5`, `c831eaa`.

### August 2026 — Main 2.0

- Adopted **“Tu próximo paso, online.”** as the approved corporate headline.
- Rebuilt the landing around dedicated product showcases rather than equal generic cards.
- Replaced the generic principles grid with a VOLTA-specific visual system.
- Added product outcomes, three-step activation narrative, dedicated closing and mobile-specific responsive rules.
- Hardened brand/favicon/metadata for deployment.

Key commits: `fd16933`, `e521c0a`, `4c9ac80` plus preceding deployment-hardening commits.

### August 2026 — Product OS

- Adopted VOLTA OS v1.0.
- Replaced starter documentation.
- Formalized `represent, not redefine` governance.
- Reconciled the corporate Product OS against Git/Vercel/product history.
- Central registry reconciliation subsequently verified both Portfolio and Booking public production destinations.

## Verified operating constraints

- Store has an authoritative production destination in the global registry and Store Product OS.
- Portfolio has an authoritative production destination in the global registry: `https://volta-portfolio-psi.vercel.app`.
- Booking has an authoritative production destination in the global registry: `https://volta-booking.vercel.app`.
- Product facts are hard-coded in `src/app/page.tsx`; product drift remains a real risk.
- The existence of verified destinations does not mean Corporate runtime has already wired them; current code remains the authority for current CTA behavior.

## Known debt / risks

1. **Git → Vercel production automation is not healthy.** The project reports `live: false`; August pushes stopped creating deployments. Current production was shipped through a manual connector/bootstrap workaround and lacks Git commit metadata in Vercel.
2. **Legacy WhatsApp-era implementation remains in the repository** as unused sections, content, UI helpers and dependencies.
3. **Corporate runtime product destinations lag the registry.** Portfolio and Booking now have verified public URLs, but Main 2.0 still keeps those CTAs internal. This is implementation/roadmap scope, while the underlying cross-product dependency is resolved.
4. Corporate product copy can drift from the faster-moving product repositories.

See `DEBT.md` for evidence and resolution criteria.

## Validation still required

These are not claimed bugs; they are unclosed validation items:

- repair the Git-linked Vercel flow and prove a normal `main` commit deploys with Git metadata;
- update Portfolio and Booking CTAs to their registered production URLs in a deliberate Corporate runtime change;
- re-evaluate the `En evolución` Booking lifecycle label against current Product OS before that runtime change;
- record a deliberate mobile/cross-browser regression pass after future material visual changes rather than assuming responsive CSS alone is sufficient.

## Active Product OS work

No product initiative is currently active. `CORP-INIT-001` (Product OS adoption) and the historical `CORP-INIT-002` (Main 2.0 ecosystem rebuild) are shipped/closed.

## Next recommended direction

1. Repair and simplify deployment traceability.
2. Reconcile Main 2.0 CTAs/status labels with the now-complete Store/Portfolio/Booking registry.
3. Remove the unused WhatsApp-era component/content/dependency tree after confirming no imports remain.
4. Add a lightweight corporate quality gate for build/lint/critical links/metadata once the deploy path is stable.
5. Continue visual/conversion refinement only from real product capability and evidence.

## Last operating agent

ChatGPT agent performed the full chat/repository/Git/production consolidation into VOLTA OS on 2026-08-25; central VOLTA OS reconciliation then synchronized verified Store, Portfolio and Booking destinations.
