# CORP-INIT-003 — Production Hardening & Product Routing

- **Status:** BLOCKED ON PRODUCTION PUBLISH
- **Priority:** P1
- **Started:** 2026-08-25

## Objective

Close the operational gap after Main 2.0 without redesigning the site: make product routing real, retire obsolete code, establish a small quality gate and restore trustworthy production delivery.

## Completed in `main`

Runtime/code merge: `6e05ebefba6441f892c9926bbceab0416e2f8a63` (PR #5).

- Portfolio now routes to `https://volta-portfolio-psi.vercel.app`.
- Booking now routes to `https://volta-booking.vercel.app`.
- Store remains routed to `https://www.voltastore.app`.
- Booking keeps the truthful `En evolución` label because its Product OS lifecycle is `ACTIVE / production-oriented`.
- The unused WhatsApp-first section/content/UI source tree was removed.
- `verify:corporate` protects current positioning, routes, metadata and key responsive contracts.
- GitHub Actions now runs clean install, verification, lint and build.
- First `main` quality run `32897006491` completed successfully.

## Production blocker

The `main` merge did not trigger a Vercel deployment, confirming `CORP-DEBT-003` remains open.

A manual production deployment was attempted only after the quality gate passed, but Vercel rejected it with `402 payment_required`: the Hobby `api-deployments-free-per-day` quota was exhausted at 100/100. The API reported reset around 2026-08-26 17:45 Argentina time.

The latest verified production deployment therefore remains `dpl_4WjEspxUq1eom885SjiHG7wvysRJ`; it does not yet contain this initiative's new routing.

## Remaining acceptance criteria

- publish current `main` to production after the API quota resets;
- verify `https://volta-landing-delta.vercel.app` serves the approved headline/metadata and external Store, Portfolio and Booking routes;
- move this initiative to `docs/initiatives/completed/` after production verification;
- clear the initiative entry from `HANDOFF.md`;
- keep `CORP-DEBT-003` open unless a normal Git-linked deployment is independently proven fixed.

## Out of scope / follow-up

Residual `clsx`, `framer-motion` and `tailwind-merge` package entries remain for a lockfile-safe dependency cleanup. This does not block the current runtime because the source modules that used them are gone and the clean-install/lint/build quality run is green.
