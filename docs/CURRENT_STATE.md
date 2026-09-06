# VOLTA Corporate — Current State

**Last reviewed:** 2026-09-06  
**Entity type:** Brand / Distribution Asset  
**Strategic roles:** BRAND_DISTRIBUTION · ECOSYSTEM_ASSET  
**Investment posture:** MAINTAIN  
**Authoritative branch:** `main`  
**Production origin:** https://volta-landing-delta.vercel.app

## Role

VOLTA Corporate is the public home of the company and a routing surface into independent products. It is not a standalone SaaS, a WhatsApp-only brand, a shared identity platform or a source of product lifecycle authority.

The approved headline remains **Tu próximo paso, online.** The explanation now names concrete outcomes before technology.

## Implemented experience

The September corporate hub redesign, recorded in [CORP-DDR-001](decisions/CORP-DDR-001-corporate-hub.md), contains five content chapters:

1. Company introduction, illustrative product composition and goal-based shortcuts.
2. Store, Booking and Portfolio: audience, outcome, three supported capabilities and one external action per product.
3. The VOLTA approach: useful technology, simple adoption and execution quality.
4. Shield, Bridge and Automate, explicitly separated as development/exploration initiatives.
5. Getting started with the three publishing products, followed by the footer.

The page uses Instrument Sans Variable, the canonical `#00E878` brand anchor, semantic interface colors, restrained Shift-derived composition, visible focus and reduced-motion/forced-color modes. The previous Inter/legacy-green shell debt is removed from the active presentation. The interim V + dot lockup is retained; this release does not approve a new logo.

Mobile navigation is a labeled disclosure with Escape/focus return, outside-click dismissal, selection dismissal and desktop-resize recovery. Product illustrations are labeled examples, not customer evidence or screenshots.

## Public portfolio treatment

| Initiative | Public treatment | Destination |
| --- | --- | --- |
| VOLTA Store | Disponible | https://www.voltastore.app |
| VOLTA Booking | En evolución | https://volta-booking.vercel.app |
| VOLTA Portfolio | Disponible | https://www.voltaportfolio.app |
| VOLTA Shield | En desarrollo; not generally available | None |
| VOLTA Bridge | En desarrollo; not generally available | None |
| VOLTA Automate | En exploración; not available | None |

Strategy classification remains in `volta-foundation/registry/portfolio.yaml`. Shield and Bridge's current product documents describe validation-stage development, not generally available products. Automate remains exploratory.

**Destination reconciliation:** the registry/older Corporate documentation still contained Portfolio's legacy Vercel hostname. The newer product-owned `src/lib/config.ts`, `docs/auth-production-setup.md` and `docs/production-web-presence.md` establish `https://www.voltaportfolio.app` as its operational canonical origin. Corporate uses that origin without changing Strategy's lifecycle classification.

## Measurement and technical state

`Product selected` records only product key and placement (`products`, `footer`, or fallback `other`). The destination map is shared with presentation rather than duplicated in the tracker. This is instrumentation, not evidence of increased conversion.

The application is static/prerendered, without a database or authentication. Metadata, canonical origin, robots, sitemap, Open Graph image and manifest are defined centrally. See [SYSTEM](SYSTEM.md) for verification and delivery commands.

GitHub checks, PR evidence and the Vercel deployment are the authorities for execution/release status. Do not infer production promotion from this document or from a successful build alone.

## Remaining work

- Maintain product truth after real product/domain changes.
- Accumulate actual routing and comprehension evidence before further structural redesign.
- Replace interim brand assets only when a final logo is centrally approved.
- Preserve the public distinction between available products and controlled development.
- Resolve the repository-description metadata debt through an authorized metadata-write path; it does not affect the rendered homepage.
