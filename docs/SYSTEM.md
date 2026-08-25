# VOLTA Corporate — System

## System shape

Lightweight Next.js App Router corporate/marketing application deployed on Vercel.

There is no application database, auth flow or server-side product state in this repository. The critical system is informational: product facts, lifecycle labels, destinations, visual previews, metadata and responsive storytelling must stay aligned with the rest of VOLTA.

## Current implementation

The production page is primarily composed in:

- `src/app/page.tsx` — current corporate information architecture, product summaries and visual mockups;
- `src/app/globals.css` — corporate visual system and responsive behavior;
- `src/app/layout.tsx` — fonts, metadata and favicon configuration;
- `src/components/ui/brand-logo.tsx` — current deployment-safe VOLTA mark.

The current page is static/prerendered. Product metadata is hard-coded in `page.tsx`; it is not dynamically sourced from `volta-os`.

## Current page flow

1. Fixed corporate navigation.
2. Hero: **“Tu próximo paso, online.”** plus Store/Portfolio/Booking ecosystem preview.
3. Ecosystem bridge: one brand, different ways to advance.
4. Dedicated Store, Portfolio and Booking showcases with domain-specific mock UI.
5. `Construido para avanzar` principles system.
6. `VOLTA en acción` outcome rows.
7. Three-step process: `Elegí → Hacelo tuyo → Ponelo online`.
8. Product-oriented closing CTA and footer.

## Production reality

- Vercel project: `volta-landing`.
- Public production URL: `https://volta-landing-delta.vercel.app`.
- Latest verified production deployment during this review: `dpl_4WjEspxUq1eom885SjiHG7wvysRJ` (`READY`).
- That deployment serves the Main 2.0 runtime corresponding to code commit `4c9ac8071a33b5994b67ef161e7fc91ca9687025`; later repository commits before this review were documentation/Product OS only.

### Deployment caveat

The normal GitHub → Vercel production path is not currently trustworthy. During the August 2026 rebuild, pushes to `main` stopped producing new Vercel deployments. The connected Vercel project currently reports `live: false`, and the latest successful production deployment has no Git commit metadata because it was created through a manual connector/bootstrap workaround that fetched the authoritative `main` source during build.

Treat this as an operational debt, not as the desired deployment architecture. Repairing Git-linked production deploys should restore commit traceability and remove the workaround.

## Cross-repository truth dependencies

Use these sources rather than duplicating truth locally:

- `LucasFasolato/volta-os/core/VOLTA.md` — ecosystem definition;
- `LucasFasolato/volta-os/core/BRAND.md` — global communication/brand rules;
- `LucasFasolato/volta-os/ecosystem/REGISTRY.yaml` — lifecycle/repository/known production destinations;
- Store/Booking/Portfolio `volta.product.yaml` and `docs/CURRENT_STATE.md` — product-specific capability and state.

If a product changes materially, corporate copy/previews/links should be reviewed for drift.

## Legacy implementation still present

The repository still contains an older component/content tree from the WhatsApp-first landing (`src/components/sections/*`, old layout/UI helpers and `src/data/landing-content.ts`). Those files are not the current page architecture and should not be treated as product truth. They also keep dependencies such as Framer Motion/utility helpers alive in the package graph even though Main 2.0 does not need them directly.

See `DEBT.md` before reusing or deleting them.

## Verification

Available repository checks:

```bash
npm run lint
npm run build
```

`next build` performs the TypeScript production check. There is no standalone `typecheck` or test script today.

Before shipping corporate changes, additionally verify:

- desktop and mobile layout;
- fixed navigation and anchor offsets;
- authoritative product destinations;
- metadata/title/description/favicon;
- no unsupported availability or metric claims;
- final production alias and rendered content after deployment.
