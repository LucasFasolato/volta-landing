# VOLTA Corporate — System

## System shape

Lightweight Next.js App Router corporate/marketing application deployed on Vercel. There is no application database, auth flow or server-side product state in this repository.

The critical system is informational: product facts, lifecycle labels, destinations, visual previews, metadata and product-intent measurement must stay aligned with the rest of VOLTA.

## Current implementation

The active runtime is intentionally small:

- `src/app/page.tsx` — information architecture, product summaries/routes and visual mockups;
- `src/app/globals.css` — corporate visual system and responsive behavior;
- `src/app/layout.tsx` — fonts, metadata, favicon and Vercel Analytics injection;
- `src/components/analytics/product-intent-analytics.tsx` — narrow outbound product-intent event delegation;
- `src/components/ui/brand-logo.tsx` — deployment-safe VOLTA mark.

The page is static/prerendered. Product facts remain local source data; they are not dynamically sourced from `volta-os`.

The retired WhatsApp-first component/content tree and its residual `clsx`, `framer-motion` and `tailwind-merge` dependencies are gone.

## Product routing

Production and `main` route:

- Store → `https://www.voltastore.app`
- Portfolio → `https://volta-portfolio-psi.vercel.app`
- Booking → `https://volta-booking.vercel.app`

Booking remains labeled `En evolución`, reflecting its Product OS lifecycle rather than treating a deployment URL as proof of completed maturity.

## Conversion measurement

Corporate 2.1 uses Vercel Web Analytics rather than adding a separate vendor or backend.

`ProductIntentAnalytics` listens only for clicks to the three authoritative external product URLs and sends:

- event: `Product selected`;
- `product`: `store`, `portfolio` or `booking`;
- `placement`: `showcase`, `closing` or fallback `other`.

Do not add names, emails, phone numbers, account IDs, free text or other personal data to this event.

Production includes Vercel `Analytics`, and `https://volta-landing-delta.vercel.app/_vercel/insights/script.js` returned HTTP 200 after the Corporate 2.1 deployment.

## Quality gate

`main` includes:

- `scripts/verify-corporate.mjs` — approved headline, routes/status, metadata/favicon, analytics contract, mobile/reduced-motion CSS, retired-path and dependency checks;
- `.github/workflows/corporate-quality.yml` — Node 24, `npm ci`, Corporate verification, lint and production build on PRs and `main` pushes.

Local commands:

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
- Latest verified deployment: `dpl_6QeSt5MbJch3Ahf6pjHmmP7soena`.
- Deployment state: `READY`.
- Source: `git`.
- Branch: `main`.
- Git commit: `06083c423bb9bd0918227af6042e63a49be35bba`.

The production build cloned GitHub `main`, installed the simplified dependency graph, compiled Next.js 16.2.2, passed TypeScript and promoted without alias errors. Public verification returned HTTP 200 with the approved headline, metadata and all three product destinations.

GitHub → Vercel delivery is currently healthy and traceable. `CORP-DEBT-003` remains resolved.

## Cross-repository truth dependencies

Use these sources rather than duplicating global/product truth locally:

- `LucasFasolato/volta-os/core/VOLTA.md` — ecosystem definition;
- `LucasFasolato/volta-os/core/BRAND.md` — global communication/brand rules;
- `LucasFasolato/volta-os/ecosystem/REGISTRY.yaml` — lifecycle/repository/production destinations;
- Store/Booking/Portfolio `volta.product.yaml` and `docs/CURRENT_STATE.md` — product-specific capability and state.

If a product changes materially, review Corporate copy/previews/links for drift.

## Shipping verification

Before shipping Corporate changes:

- run `npm run check`;
- verify desktop/mobile when visuals change materially;
- verify fixed navigation/anchors when navigation changes;
- verify authoritative product destinations;
- verify metadata/title/description/favicon;
- avoid unsupported availability, metric or social-proof claims;
- verify the final production alias and intended Git commit after deployment;
- when measurement changes, verify it still answers a named question and does not introduce PII.
