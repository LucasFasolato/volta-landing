# VOLTA Corporate — System

## Architecture

A lightweight Next.js App Router application on Vercel. The homepage and metadata routes are statically generated. There is no product database, authentication, customer data or privileged server action.

- `src/app/page.tsx`: five-chapter information architecture and semantic product stories.
- `src/data/corporate-products.ts`: typed available-product map and separate development initiatives; shared with analytics.
- `src/data/site.ts`: public origin, title and description. `NEXT_PUBLIC_SITE_URL` may explicitly override the canonical origin; preview hostnames never implicitly become canonical.
- `src/components/corporate/volta-web-shell.tsx`: header/footer and interim lockup.
- `src/components/corporate/mobile-navigation.tsx`: the narrow interactive navigation boundary.
- `src/components/corporate/product-moment-v2.tsx`: lightweight illustrative flows, without focusable fake controls or external media calls.
- `globals.css`: primitive/semantic tokens and core composition.
- `corporate-sections.css`: product illustrations and narrative chapters.
- `corporate-responsive.css`: interaction, responsive and accessibility modes.
- `layout.tsx`, `robots.ts`, `sitemap.ts`, `opengraph-image.tsx`: fonts, metadata and discovery assets.

CSS is loaded in the listed order through the root layout. Do not create a parallel token system. Brand-neutral illustrative colors are local content expression, not replacements for VOLTA interface semantics.

## Measurement

Vercel Web Analytics is retained. `ProductIntentAnalytics` recognizes only the three URLs from the presentation map. Ordinary and middle-button outbound clicks emit `Product selected` with `product` and `placement` (`products`, `footer`, fallback `other`). It never forwards link query strings or personal data.

Historical placement values belonged to previous layouts. Do not silently compare them as identical surfaces when reviewing analytics across this release.

## Verification

```bash
npm ci
npm run check
```

This runs source/content contracts, ESLint and the production build including TypeScript. The lockfile is the exact dependency authority.

For the browser suite, use Node 24 and a running production build:

```bash
npm install --prefix /tmp/volta-browser --no-package-lock --no-audit --no-fund playwright@1.57.0 @axe-core/playwright@4.11.0
/tmp/volta-browser/node_modules/.bin/playwright install --with-deps chromium
npm start
# in a second terminal
node scripts/verify-browser.mjs
```

The browser dependencies stay outside the application's dependency graph. Override `VOLTA_BROWSER_TOOLS`, `VOLTA_TEST_URL` or `VOLTA_TEST_OUTPUT` when needed. The default evidence location is `/tmp/corporate-evidence`.

The suite exercises actual production HTML/JS: responsive widths 320–1440px, Axe checks at desktop and mobile widths, mobile-menu dismissal/focus, native disclosure keyboard behavior, authoritative product destinations, real event delegation, reduced-motion behavior, canonical/OG/robots/sitemap/manifest/favicon and browser errors. Analytics and outbound product navigation are intercepted so verification does not send fake engagement to production products.

Review screenshots in addition to automated checks. Automated accessibility checks do not prove full WCAG conformance, physical-device coverage or user comprehension.

## Release

Production: https://volta-landing-delta.vercel.app  
Vercel project: `volta-landing`  
Production branch: `main`

Use an isolated branch, complete checks, recheck upstream and integrate one coherent verified change. This task's branch is excluded from Vercel previews by `vercel.json`; `main` remains deployment-enabled. Do not replace Git delivery with repeated manual deploys.

After integration, confirm the deployment's Git SHA, READY state, public alias, page content and metadata. CI status alone is not production status. Keep volatile release IDs in GitHub/Vercel evidence rather than freezing stale IDs here.

## External truth

Company rules and portfolio classification: `LucasFasolato/volta-foundation`. Product capability: Store, Booking, Portfolio, Shield and Bridge product repositories. Automate remains an exploratory thesis in the portfolio registry.

See [CURRENT_STATE](CURRENT_STATE.md) for the explicit Portfolio-domain reconciliation. No runtime fetch of internal company documents is needed.
