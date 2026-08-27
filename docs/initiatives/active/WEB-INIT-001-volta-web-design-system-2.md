# WEB-INIT-001 — VOLTA Web Design System 2.0

**Status:** MERGED / PRODUCTION PROMOTION BLOCKED  
**PR:** #15  
**Merge:** `42843ae4cba4f3d5eac3fd226d9f52b8bb06ddf8`  
**Scope:** ecosystem web design system + Corporate reference implementation

## Objective

Create the reusable visual and structural language for VOLTA public marketing surfaces and prove it on Corporate with a materially shorter, clearer and more product-led landing.

## Approved direction

- Preserve the approved Corporate promise: **“Tu próximo paso, online.”**
- Reduce page length aggressively.
- Explain simply, visually and with outcome-first copy.
- Use Store's light-first commercial clarity as an internal benchmark without cloning Store.
- Keep product-specific personality inside a recognizable VOLTA family.
- Treat Corporate as the first reference implementation before migrating Booking, Portfolio and Store.

## Delivered in PR #15

### Foundations

- light-first canvas and surface system;
- purposeful dark surfaces;
- VOLTA green reserved for action/active/confirmation states;
- Inter as primary web typeface;
- shared display, section, container and spacing tokens;
- explicit mobile breakpoint and reduced-motion contract.

### Shared Corporate web shell

- `VoltaHeader`;
- `VoltaLockup`;
- `SectionHeading`;
- `VoltaFooter`.

### Product truth

Product facts moved from the page composition into `src/data/corporate-products.ts`:

- Store → `https://www.voltastore.app`;
- Booking → `https://volta-booking.vercel.app`, `En evolución`;
- Portfolio → `https://volta-portfolio-psi.vercel.app`;
- Automate → `En preparación`, no external destination.

### Product Moments 2.0

New compact, server-rendered moments for:

- Store: product → cart → WhatsApp;
- Booking: time selection → confirmed reservation;
- Portfolio: editorial project → published presence;
- Automate: guarded event → flow → result direction without unsupported availability claims.

### Corporate 2.0 information architecture

The landing now has exactly five primary sections:

1. Hero / ecosystem chooser
2. Products / four compact Product Moments
3. How it works / three steps
4. Why VOLTA / four principles
5. Final CTA

The source verifier fails if the primary section count changes from five without an explicit guardrail update.

### Runtime simplification

Retired:

- `HeroSwitchboard`;
- legacy interactive Product Moments;
- `VoltaFlow` observer/rail/branches;
- `volta-flow.css`.

This removes client-state and scroll-observer complexity from the core Corporate presentation.

### Analytics

The existing privacy-limited `Product selected` event is preserved. Placement now comes from explicit `data-product-placement` attributes instead of inferring obsolete page classes.

## Design system authority

See `docs/VOLTA-WEB-DESIGN-SYSTEM-2.md` for the ecosystem web standard covering content budgets, page length, color semantics, typography, spacing, Product Moments, navigation, motion, mobile, accessibility, performance and acceptance criteria.

## Quality result

PR #15 passed the complete GitHub quality gate before merge:

```text
verify:corporate  PASS
eslint            PASS
next build        PASS
```

The Vercel deployment is externally blocked by the existing Hobby `build-rate-limit`. This is recorded separately from code quality.

## Remaining completion condition

The code/design portion of WEB-INIT-001 is complete. Keep the initiative active only until a Web 2.0 Vercel build is accepted and visually verified in production.

After production promotion:

1. verify representative mobile widths, tablet and desktop;
2. confirm the production alias points to Web 2.0;
3. archive this initiative;
4. proceed with Booking 2.0 as the first product migration.
