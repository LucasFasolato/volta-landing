# CORP-INIT-006 — VOLTA Flow

- **Status:** MERGED / PRODUCTION PROMOTION BLOCKED
- **Priority:** P1
- **Merged:** 2026-08-26
- **Product-code commit:** `50d6559aa2e9009802f32e46afaaadc8d2f26a4b`
- **PR:** #13

## Outcome

Make activation, energy and flow visible as a recognizable VOLTA interaction language across Corporate without turning motion into decoration.

## Shipped to `main`

- `OFF → VOLTA → ONLINE` activation signature in the hero;
- a four-way branch map for Store, Portfolio, Booking and guarded Automate;
- a continuous chapter rail through product, principles, outcome, process and closing sections;
- scroll-aware active/passed/idle states powered by `IntersectionObserver`;
- mobile-specific horizontal flow signaling rather than a desktop rail squeezed into narrow screens;
- purposeful signal/core motion with explicit `prefers-reduced-motion` fallbacks;
- no changes to product URLs, lifecycle labels, Automate availability or the approved corporate headline;
- expanded `verify:corporate` contracts for the flow system.

## Validation

GitHub Corporate Quality Gate passed on the final feature head:

- Corporate source-of-truth verifier: PASS;
- ESLint: PASS;
- Next.js production build: PASS.

The final feature head and merged `main` commit could not receive a Vercel build because the connected Hobby project returned `build-rate-limit`. This is an external delivery limit, not a compilation failure. The last pre-limit preview only covers an earlier intermediate commit and is not sufficient evidence for the final visual release.

## Production rule

Do not mark this initiative `SHIPPED` or move it to `docs/initiatives/completed/` until a Vercel production deployment sourced from commit `50d6559aa2e9009802f32e46afaaadc8d2f26a4b` (or a later `main` descendant containing the same product code) is `READY`, the production alias resolves to it, and the resulting public output is verified.

## Remaining verification

- production deployment / alias promotion;
- public HTTP 200 on the final production build;
- visual browser pass at representative mobile and desktop widths when browser infrastructure is available.
