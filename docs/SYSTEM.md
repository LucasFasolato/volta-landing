# VOLTA Corporate — System

## System shape

Lightweight Next.js App Router corporate/marketing application deployed on Vercel.

There is no application database, auth flow or server-side product state in this repository. The critical system is informational: product facts, lifecycle labels, destinations, visual previews, metadata and responsive storytelling must stay aligned with the rest of VOLTA.

## Current implementation

The active runtime is intentionally small:

- `src/app/page.tsx` — corporate information architecture, product summaries, routes and visual mockups;
- `src/app/globals.css` — corporate visual system and responsive behavior;
- `src/app/layout.tsx` — fonts, metadata and favicon configuration;
- `src/components/ui/brand-logo.tsx` — deployment-safe VOLTA mark.

The current page is static/prerendered. Product metadata is hard-coded in `page.tsx`; it is not dynamically sourced from `volta-os`.

`CORP-INIT-003` removed the retired WhatsApp-first section/content/UI source tree after repository search confirmed it was not imported by Main 2.0. Do not recreate a parallel component tree without a concrete need.

## Current product routing

Production and `main` route:

- Store → `https://www.voltastore.app`
- Portfolio → `https://volta-portfolio-psi.vercel.app`
- Booking → `https://volta-booking.vercel.app`

These values were reconciled against VOLTA OS/Product OS before wiring. Booking remains labeled `En evolución`, reflecting its `ACTIVE / production-oriented` lifecycle rather than treating a deployment URL as proof of completed product maturity.

## Current page flow

1. Fixed corporate navigation.
2. Hero: **“Tu próximo paso, online.”** plus Store/Portfolio/Booking ecosystem preview.
3. Ecosystem bridge: one brand, different ways to advance.
4. Dedicated Store, Portfolio and Booking showcases with domain-specific mock UI.
5. `Construido para avanzar` principles system.
6. `VOLTA en acción` outcome rows.
7. Three-step process: `Elegí → Hacelo tuyo → Ponelo online`.
8. Product-oriented closing CTA and footer.

## Quality gate

`main` includes two layers of low-cost verification:

- `scripts/verify-corporate.mjs` — asserts the approved headline, authoritative product routes, metadata/favicon contracts, mobile/reduced-motion CSS presence and retirement of known legacy files;
- `.github/workflows/corporate-quality.yml` — Node 24, `npm ci`, corporate verification, lint and production build on `main` pushes and PRs.

Available local commands:

```bash
npm run verify:corporate
npm run lint
npm run build
npm run check
```

`next build` performs the TypeScript production check.

## Production delivery

- Vercel project: `volta-landing`.
- Public production URL: `https://volta-landing-delta.vercel.app`.
- Verified deployment: `dpl_FCoZtPH6LapDkRHFqxRjHZeMbyJp`.
- Deployment state: `READY`.
- Deployment source: `git`.
- Git branch: `main`.
- Git commit: `9cb4fc29dd5c1d9be307ed6bb3a9aad5210ed714`.
- Production alias was promoted without alias errors.

The build cloned the GitHub repository, installed dependencies, compiled Next.js 16.2.2, passed TypeScript and generated the static pages. Public verification returned HTTP 200 with the approved headline, metadata and all three external product destinations.

### Git integration status

GitHub → Vercel production delivery is currently healthy and traceable.

During August 2026 it temporarily stopped producing deployments. The repository was reconnected in Vercel, and an initial retry was still blocked by the Hobby build-rate limit. After that limit cleared, a normal `main` push created `dpl_FCoZtPH6LapDkRHFqxRjHZeMbyJp` with full Git repository/branch/commit metadata and updated the production alias. `CORP-DEBT-003` is therefore resolved.

## Cross-repository truth dependencies

Use these sources rather than duplicating truth locally:

- `LucasFasolato/volta-os/core/VOLTA.md` — ecosystem definition;
- `LucasFasolato/volta-os/core/BRAND.md` — global communication/brand rules;
- `LucasFasolato/volta-os/ecosystem/REGISTRY.yaml` — lifecycle/repository/production destinations;
- Store/Booking/Portfolio `volta.product.yaml` and `docs/CURRENT_STATE.md` — product-specific capability and state.

If a product changes materially, corporate copy/previews/links should be reviewed for drift.

## Residual dependency cleanup

The old source modules are gone, but `clsx`, `framer-motion` and `tailwind-merge` remain in the package manifest/lock. No current Main 2.0 source references to them were found during `CORP-INIT-003`. Remove them only together with a lockfile regeneration and a green quality gate; see `CORP-DEBT-004`.

## Shipping verification

Before shipping corporate changes:

- run the Corporate quality gate;
- verify desktop and mobile layout for material visual changes;
- verify fixed navigation and anchor offsets;
- verify authoritative product destinations;
- verify metadata/title/description/favicon;
- avoid unsupported availability or metric claims;
- verify the final production alias and rendered content after deployment.
