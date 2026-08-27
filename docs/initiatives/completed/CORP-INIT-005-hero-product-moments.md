# CORP-INIT-005 — Hero 3.0 & Product Moments

- **Status:** SHIPPED
- **Priority:** P1
- **Shipped:** 2026-08-26
- **Product code merge:** `dc2c310d1db0f27d349f81a30e6a48f69401e9aa` (PR #11)

## Problem

Corporate 2.x correctly repositioned VOLTA as an ecosystem, but the hero still presented the product map as a mostly static preview and the product chapters explained Store, Portfolio and Booking through mock interfaces rather than small moments a visitor could actually use.

The ecosystem also needed a safe way to acknowledge the emerging automation direction without collapsing VOLTA back into a WhatsApp-only proposition or presenting an incubating product as generally available.

## Approved direction

This initiative implements the first two approved Corporate 3.0 epics:

1. **Hero 3.0 / VOLTA Switchboard** — enter the ecosystem from user intent rather than from product names.
2. **Product Moments** — let visitors understand each product through one representative interaction.

The approved corporate headline remains:

> **Tu próximo paso, online.**

## Shipped outcome

### Hero 3.0 / VOLTA Switchboard

The hero now includes an interactive ecosystem stage with four intent choices:

- `Vender` → VOLTA Store;
- `Mostrarte` → VOLTA Portfolio;
- `Reservas` → VOLTA Booking;
- `Automatizar` → VOLTA Automate.

The selected intent changes the product-specific stage and supporting result copy. The switchboard uses accessible tab semantics and keeps the primary page story outcome-first rather than technology-first.

### Product Moments

Each product chapter now contains a small interactive moment instead of a passive mockup:

- **Store** — add products and see the cart/subtotal move toward the WhatsApp handoff;
- **Portfolio** — switch among projects and see the presented work change;
- **Booking** — choose a time and see the reservation confirmation state;
- **Automate** — advance through a generic `Entrada → Decisión → Acción → Resultado` flow.

### VOLTA Automate representation

Corporate now uses the customer-facing working name **VOLTA Automate** but intentionally labels it **`En preparación`** and does not link to an external product.

The page does not claim specific integrations, general availability or unverified automation capabilities. This is a guarded Corporate representation of the current incubation direction; VOLTA OS remains the authority for final lifecycle and naming decisions.

### Supporting changes

- product outcomes and closing navigation now include Automate with preparation caveats;
- metadata now mentions automation and `VOLTA Automate en preparación` while preserving the approved headline;
- the Corporate verifier protects the switchboard, all four Product Moments, Automate caveats, existing Store/Portfolio/Booking routes and Booking's `En evolución` label.

## Validation

PR #11 passed the repository's `Corporate Quality Gate`:

- clean dependency install;
- `npm run verify:corporate`;
- ESLint;
- production Next.js build.

The Vercel preview for commit `59399025424f957bb7b57ba01418b35564bffef8` built successfully on Next.js 16.2.2, returned HTTP 200 and rendered the four intent controls, four product chapters, updated metadata and guarded Automate copy.

## Files materially changed

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/components/corporate/hero-switchboard.tsx`
- `src/components/corporate/product-moment.tsx`
- `scripts/verify-corporate.mjs`

## Follow-ups

- Reconcile the final Automate naming/lifecycle in `volta-os` before presenting it as generally available.
- Extend measurement only when there is a named decision to answer; current external-product intent analytics remain intentionally narrow.
- Continue Corporate 3.0 with the later approved visual-flow/narrative epics rather than adding decorative motion for its own sake.
