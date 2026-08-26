# CORP-INIT-003 — Production Hardening & Product Routing

- **Status:** SHIPPED
- **Priority:** P1
- **Started:** 2026-08-25
- **Completed:** 2026-08-25

## Objective

Close the operational gap after Main 2.0 without redesigning the site: make product routing real, retire obsolete code, establish a small quality gate and restore trustworthy production delivery.

## Delivered

Runtime/code merge: `6e05ebefba6441f892c9926bbceab0416e2f8a63` (PR #5).

- Store routes to `https://www.voltastore.app`.
- Portfolio routes to `https://volta-portfolio-psi.vercel.app`.
- Booking routes to `https://volta-booking.vercel.app`.
- Booking keeps the truthful `En evolución` label, aligned with its `ACTIVE / production-oriented` Product OS lifecycle.
- The unused WhatsApp-first section/content/UI source tree was removed (~1,000 lines).
- `scripts/verify-corporate.mjs` protects positioning, destinations, metadata and key responsive contracts.
- `.github/workflows/corporate-quality.yml` runs clean install, verification, lint and production build.
- GitHub quality runs passed clean install, corporate verification, lint and build.

## Production completion evidence

After the Git repository was reconnected in Vercel and the temporary Hobby build-rate limit cleared, a normal `main` push created:

- Vercel deployment: `dpl_FCoZtPH6LapDkRHFqxRjHZeMbyJp`;
- state: `READY`;
- source: `git`;
- Git commit: `9cb4fc29dd5c1d9be307ed6bb3a9aad5210ed714`;
- production alias: `https://volta-landing-delta.vercel.app`;
- Git repository/branch/commit metadata recorded by Vercel.

Public verification returned HTTP 200 and confirmed the approved headline/metadata plus external Store, Portfolio and Booking routes.

This evidence also resolves `CORP-DEBT-003` because normal Git-triggered, traceable production delivery was independently proven restored.

## Acceptance result

All initiative acceptance criteria are complete:

- real product routing in source and production;
- obsolete source retirement;
- automated quality gate;
- production build verified;
- public alias verified;
- Git → Vercel traceability restored.

## Follow-up outside this initiative

Residual `clsx`, `framer-motion` and `tailwind-merge` package entries remain for a lockfile-safe dependency cleanup (`CORP-DEBT-004`). Product facts also remain hard-coded locally (`CORP-DEBT-002`).
