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
- **VOLTA Portfolio** — production/active portfolio product; corporate CTA intentionally stays in-page because no authoritative public production URL is registered yet.
- **VOLTA Booking** — active, production-oriented booking product; corporate UI labels it `En evolución` and keeps the CTA in-page because no authoritative public production URL is registered yet.

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

## Verified operating constraints

- Store has an authoritative production destination in the global registry and Store Product OS.
- Booking and Portfolio do **not** currently have authoritative `production_url` values in the global registry; do not guess Vercel URLs.
- In the connected Vercel team used for this review, Booking/Portfolio projects were not visible. This is **not** proof that they are not deployed elsewhere; the actionable fact is only that no authoritative public destination is currently registered.
- Product facts are hard-coded in `src/app/page.tsx`; product drift remains a real risk.

## Known debt / risks

1. **Git → Vercel production automation is not healthy.** The project reports `live: false`; August pushes stopped creating deployments. Current production was shipped through a manual connector/bootstrap workaround and lacks Git commit metadata in Vercel.
2. **Legacy WhatsApp-era implementation remains in the repository** as unused sections, content, UI helpers and dependencies.
3. **Portfolio/Booking conversion destinations are incomplete** until authoritative public URLs are registered.
4. Corporate product copy can drift from the faster-moving product repositories.

See `DEBT.md` for evidence and resolution criteria.

## Validation still required

These are not claimed bugs; they are unclosed validation items:

- repair the Git-linked Vercel flow and prove a normal `main` commit deploys with Git metadata;
- register/verify public destinations for Portfolio and Booking before external corporate linking;
- record a deliberate mobile/cross-browser regression pass after future material visual changes rather than assuming responsive CSS alone is sufficient.

## Active Product OS work

No product initiative is currently active. `CORP-INIT-001` (Product OS adoption) and the historical `CORP-INIT-002` (Main 2.0 ecosystem rebuild) are shipped/closed.

## Next recommended direction

1. Repair and simplify deployment traceability.
2. Reconcile public product destinations and claims against the registry/product OS.
3. Remove the unused WhatsApp-era component/content/dependency tree after confirming no imports remain.
4. Add a lightweight corporate quality gate for build/lint/critical links/metadata once the deploy path is stable.
5. Continue visual/conversion refinement only from real product capability and evidence.

## Last operating agent

ChatGPT agent performed the full chat/repository/Git/production consolidation into VOLTA OS on 2026-08-25.
