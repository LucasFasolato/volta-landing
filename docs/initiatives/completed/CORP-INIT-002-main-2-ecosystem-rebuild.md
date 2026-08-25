# CORP-INIT-002 — Main 2.0 Ecosystem Rebuild

- **Status:** SHIPPED
- **Priority:** P1
- **Started:** 2026-08-24
- **Shipped:** 2026-08-25

## Problem

The corporate landing still reflected VOLTA's earlier WhatsApp/automation framing and then, after the first ecosystem rewrite, still read too much like a generic SaaS landing with equal feature cards. It did not give Store, Portfolio and Booking enough individual product presence.

## Approved direction

- Treat the site as the main VOLTA ecosystem hub.
- Use **“Tu próximo paso, online.”** as the primary corporate headline.
- Give Store, Portfolio and Booking dedicated product storytelling rather than one generic card grid.
- Replace generic principles cards with a more VOLTA-specific composition.
- Keep mobile as a first-class layout, not only desktop stacked vertically.
- Avoid invented metrics/testimonials and unsupported claims.

## Shipped outcome

The current production information architecture now includes:

- ecosystem hero and preview;
- `Una marca · Distintas formas de avanzar` bridge;
- dedicated Store/Portfolio/Booking showcases with domain-specific mock UI;
- `Construido para avanzar` principles system;
- `VOLTA en acción` outcomes;
- `Elegí → Hacelo tuyo → Ponelo online` process;
- `¿Cuál es el próximo?` closing.

## Evidence

Key commits:

- `f73179e55b8f0bc6daf140bfcda8ee90987c8c42` — reposition corporate around the product ecosystem;
- `c831eaa0e92aa477abaf48caf1f1a59cf21d4eef` — elevate the landing into an ecosystem hub;
- `fd16933446228c486187b257c91938c1d108f1cb` — rebuild around product showcases;
- `e521c0aec86efa2fcf1ab223fb9c3ea2e059852e` — responsive/visual-system refinement;
- `4c9ac8071a33b5994b67ef161e7fc91ca9687025` — final brand-statement metadata alignment.

Verified production deployment during later OS consolidation:

- `dpl_4WjEspxUq1eom885SjiHG7wvysRJ` — `READY` at `https://volta-landing-delta.vercel.app`.

## Follow-ups intentionally not hidden

- Store has an authoritative external URL; Portfolio and Booking did not have registered public production URLs during this initiative, so their corporate CTAs remain internal.
- The Vercel Git auto-deploy path failed during the rebuild and production required a manual connector/bootstrap workaround. That is tracked as `CORP-DEBT-003`, not considered resolved by this initiative.
