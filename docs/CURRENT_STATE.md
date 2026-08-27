# VOLTA Corporate — Current State

**Last reviewed:** 2026-08-27  
**Lifecycle:** PRODUCTION / ACTIVE DEVELOPMENT  
**Authoritative branch:** `main`  
**Production:** `https://volta-landing-delta.vercel.app`  
**Latest product-code merge:** `42843ae4cba4f3d5eac3fd226d9f52b8bb06ddf8` (PR #15, `WEB-INIT-001`)

## Delivery state

`main` now contains **VOLTA Web Design System 2.0** and the new Corporate reference implementation.

PR #15 passed the complete Corporate quality gate before merge:

- `npm run verify:corporate` — PASS;
- ESLint — PASS;
- Next.js production build — PASS.

The merge-triggered Vercel deployment is currently blocked by the connected Hobby project's `build-rate-limit`. This is a delivery/provider limit, not a compilation failure.

The last independently verified production deployment remains:

- Vercel deployment: `dpl_5uL2Ykdp3NiKabDVLbvwauWXRE7w`;
- state: `READY`;
- branch: `main`;
- Git commit: `d2f8d51a9e9c434ab43c377a7c811231a41494e1`;
- production alias: `https://volta-landing-delta.vercel.app`.

Therefore **Git `main` is ahead of production** until Vercel accepts a later build containing Web 2.0.

## What the site is

VOLTA Corporate is the ecosystem hub, not a WhatsApp-only landing and not a standalone SaaS product.

Approved corporate headline:

> **Tu próximo paso, online.**

Customer-facing product map:

- **VOLTA Store** — available; `https://www.voltastore.app`;
- **VOLTA Booking** — active and intentionally labeled **`En evolución`**; `https://volta-booking.vercel.app`;
- **VOLTA Portfolio** — available; `https://volta-portfolio-psi.vercel.app`;
- **VOLTA Automate** — guarded working name, intentionally labeled **`En preparación`**, no external destination.

`volta-os` and the corresponding Product OS remain authoritative for product lifecycle and capability truth.

## Current `main` runtime — Web 2.0

Corporate now follows the ecosystem web standard documented in `docs/VOLTA-WEB-DESIGN-SYSTEM-2.md`.

Key changes:

- light-first / dark-purposeful surface system;
- Inter as the primary web typeface;
- purposeful VOLTA green semantics for action, active state and confirmation;
- exactly **five primary sections** on Corporate;
- compact, server-rendered Product Moments for Store, Booking, Portfolio and Automate;
- shared `VoltaHeader`, `VoltaLockup`, `SectionHeading` and `VoltaFooter` components;
- product facts centralized in `src/data/corporate-products.ts`;
- explicit product-intent analytics placement;
- mobile and reduced-motion contracts preserved;
- no fictional social proof or unsupported product claims.

## Current information architecture

1. Hero / ecosystem chooser
2. Products / four compact Product Moments
3. `Elegí → Hacelo tuyo → Ponelo online`
4. Why VOLTA / four principles
5. Final CTA
6. Footer

The Corporate source verifier intentionally fails if the primary `<section>` count changes from five without an explicit guardrail update.

## Runtime simplification

Web 2.0 retired the previous Corporate 3.0 presentation layer:

- Hero Switchboard;
- interactive legacy Product Moments;
- VOLTA Flow observer/rail/branch UI;
- `volta-flow.css`.

The current core marketing presentation is server-rendered and no longer depends on client state or `IntersectionObserver` for storytelling.

## Measurement

Corporate continues to answer one narrow question:

> Which VOLTA product does a visitor choose, and from which placement?

The existing Vercel Analytics event remains:

- event: `Product selected`;
- product key;
- explicit placement (`products`, `footer`, or future declared placement);
- no personal data.

## Active / latest initiative

### WEB-INIT-001 — VOLTA Web Design System 2.0

Merged to `main` via PR #15 on 2026-08-27.

- product-code merge: `42843ae4cba4f3d5eac3fd226d9f52b8bb06ddf8`;
- Corporate verifier: PASS;
- ESLint: PASS;
- Next.js production build: PASS;
- Vercel promotion: BLOCKED by provider `build-rate-limit`;
- code status: **MERGED / PRODUCTION PROMOTION BLOCKED**.

The implementation and ecosystem rules are documented in:

- `docs/VOLTA-WEB-DESIGN-SYSTEM-2.md`;
- `docs/initiatives/active/WEB-INIT-001-volta-web-design-system-2.md`.

## Historical initiative note

`CORP-INIT-006 — VOLTA Flow` remains useful historical context, but its Flow presentation layer was intentionally superseded by Web 2.0 after approved direction to reduce page length and simplify the Corporate experience.

## Material open debt / risks

1. Production is behind `main` while Vercel build-rate limiting continues.
2. Product truth is centralized locally but still requires reconciliation with VOLTA OS/Product OS after material product releases.
3. `VOLTA Automate` naming/lifecycle remains guarded until global product truth changes.
4. Full pixel-level desktop/mobile browser QA should be repeated once a Web 2.0 preview/production deployment is available.
5. GitHub repository description may still contain stale WhatsApp-only positioning and should be corrected through an authorized metadata write path.

## Next recommended direction

1. Promote and visually verify Web 2.0 when Vercel accepts a new build.
2. Use `docs/VOLTA-WEB-DESIGN-SYSTEM-2.md` as the basis for **Booking 2.0**.
3. Apply the same system to Portfolio while preserving its editorial personality.
4. Retrofit Store to shared Web 2.0 primitives rather than redesigning Store from zero.
5. Keep Automate guarded until its product truth is mature enough for a dedicated landing.

## Last operating agent

ChatGPT implemented `WEB-INIT-001`, merged PR #15 to `main`, passed the full GitHub quality gate and recorded the external Vercel `build-rate-limit` blocking final production promotion.
