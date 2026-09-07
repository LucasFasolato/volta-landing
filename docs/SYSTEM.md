# VOLTA Corporate — System

## Architecture

A lightweight Next.js App Router application on Vercel. The homepage and metadata routes are statically generated. There is no product database, authentication, customer data or privileged server action.

- `src/app/page.tsx`: five-chapter information architecture and semantic product stories.
- `src/data/corporate-products.ts`: typed product map, media metadata and separate development initiatives, shared with analytics and footer.
- `src/data/site.ts`: public origin, title and description. `NEXT_PUBLIC_SITE_URL` may explicitly override the canonical origin; preview hostnames never implicitly become canonical.
- `src/components/corporate/volta-web-shell.tsx`: header/footer and interim lockup.
- `src/components/corporate/mobile-navigation.tsx`: the narrow interactive navigation boundary.
- `public/showcase/`: versioned responsive captures and machine-readable provenance; see [MEDIA](MEDIA.md).
- `globals.css`: primitive/semantic tokens, shell and interaction accessibility.
- `home.module.css`: the five chapter compositions and responsive behavior.
- `layout.tsx`, `robots.ts`, `sitemap.ts`, `opengraph-image.tsx`: fonts, metadata and discovery assets.

The root imports global CSS; the page imports its CSS module. No remote media, runtime capture service or Vercel image transform is required. Do not add a parallel token system.

## Measurement

Vercel Web Analytics is retained. `ProductIntentAnalytics` recognizes only the three product URLs. Ordinary and middle-button outbound clicks emit `Product selected` with `product` and `placement` (`products`, `footer`, fallback `other`). It never forwards query strings or personal data. Media enlargement and the separate Store example link do not inflate the product-selection event.

Historical placement values belonged to previous layouts. Do not silently compare them as identical surfaces across this release.

## Verification

```bash
npm ci
npm run check
```

This runs source/content/media contracts, ESLint and the production build including TypeScript. The lockfile is the exact dependency authority. The source check also verifies real WebP dimensions and byte budgets using Sharp already supplied by the Next.js dependency graph.

For the browser suite, use Node 24 and a running production build:

```bash
npm install --prefix /tmp/volta-browser --no-package-lock --no-audit --no-fund playwright@1.57.0 @axe-core/playwright@4.11.0
/tmp/volta-browser/node_modules/.bin/playwright install --with-deps chromium
npm start
# In a second terminal
node scripts/verify-browser.mjs
```

Browser dependencies stay outside the application dependency graph. Override `VOLTA_BROWSER_TOOLS`, `VOLTA_TEST_URL` or `VOLTA_TEST_OUTPUT` when needed. The default evidence location is `/tmp/corporate-evidence`.

The suite exercises actual production HTML/JS at ten widths from 320–1920px. It waits for every image to decode before screenshots, runs selected Axe checks, exercises keyboard/mobile navigation, anchor resolution/clearance, outgoing destinations and event delegation, verifies media byte budgets and enlargement links, and checks reduced motion, forced colors, expanded text spacing, canonical/OG/robots/sitemap/manifest/favicon and console/runtime errors. Analytics and outgoing product actions are intercepted so verification does not create engagement or transactions.

On pushes to main, `verify-production.mjs` waits for the public Corporate v1 and runs the same browser suite against production, writing evidence under `production/`. It never invokes deployment. Exact deployment SHA and alias promotion must also be checked in Vercel.

Review screenshots in addition to automated checks. Automated accessibility checks do not prove full WCAG conformance, physical-device coverage or user comprehension.

## Release

Production: https://volta-landing-delta.vercel.app  
Vercel project: `volta-landing`  
Production branch: `main`

Use an isolated branch, complete checks, recheck upstream and integrate one coherent verified change. `feat/corporate-v1-final` is excluded from Vercel previews by `vercel.json`; main and other branches retain their prior default behavior. Temporary source/media capture workflows used for this release are removed before merge. Do not replace Git delivery with repeated manual deployments.

After integration, confirm the deployment's Git SHA, READY state, public alias, page content, images and metadata. CI status alone is not production status. Keep volatile release IDs in GitHub/Vercel evidence rather than freezing stale IDs here.

## External truth

Company rules and portfolio classification: `LucasFasolato/volta-foundation`. Product capability: Store, Booking, Portfolio, Shield and Bridge product repositories. Automate remains exploratory. See [CURRENT_STATE](CURRENT_STATE.md) for the explicit Portfolio-domain reconciliation. There is no runtime fetch of internal company documents.
