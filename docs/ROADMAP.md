# VOLTA Corporate — Roadmap

## NOW

### WEB-INIT-001 production promotion
VOLTA Web Design System 2.0 and the five-section Corporate reference implementation are merged to `main` through PR #15. The complete GitHub quality gate is green. Final Vercel preview/production delivery is currently blocked by the Hobby project `build-rate-limit`.

When the provider accepts a new build:

1. verify the deployment contains `42843ae4cba4f3d5eac3fd226d9f52b8bb06ddf8` or a later descendant;
2. verify the production alias;
3. perform a deliberate browser pass at mobile/tablet/desktop;
4. close the production-promotion portion of WEB-INIT-001.

### Repository metadata alignment
Update the GitHub repository description so it no longer frames VOLTA as a WhatsApp-only system when an authorized metadata write path is available.

### Product-drift review
Corporate product facts now live in `src/data/corporate-products.ts`, but product lifecycle and capability truth still belongs to VOLTA OS and each Product OS. Reconcile after material Store/Booking/Portfolio releases.

## NEXT

### Booking 2.0 — first Web 2.0 product migration
Use `docs/VOLTA-WEB-DESIGN-SYSTEM-2.md` to shorten and lighten Booking while preserving its operational/calming personality. The target is a concise product landing built around the booking-confirmation Product Moment rather than dense dashboard UI.

### Portfolio 2.0 — editorial dialect
Apply the same system to Portfolio without flattening its editorial identity. Preserve stronger dark/editorial moments while introducing more light rhythm, shorter copy and clearer conversion hierarchy.

### Store 2.1 — shared-system retrofit
Store remains the strongest internal commercial benchmark. Retrofit shared header/lockup, typography, Product Frame, motion and footer semantics without replacing the landing architecture that already works.

### Learn from product-selection data
Corporate records `Product selected` with product key and explicit placement. Accumulate real traffic before reordering products or changing CTA hierarchy again.

## LATER

### Automate landing
Do not build a dedicated Automate landing until the product proposition, lifecycle, target use cases and supported capability truth are mature enough to market without caveat.

### Product manifest only if it reduces real drift
If local product facts repeatedly diverge, extract a typed/build-time manifest or registry sync. Do not add runtime coupling merely for architectural neatness.

### Credibility / social proof
Add proof only when real and attributable: live products, customer outcomes, measurable usage or credible case studies. Never use invented metrics or testimonials.

### New VOLTA branches
Add new public product destinations only when the global registry marks the branch mature enough for customer-facing representation.

## COMPLETED

- **CORP-INIT-001 — Product OS Adoption** — shipped 2026-08-25.
- **CORP-INIT-002 — Main 2.0 Ecosystem Rebuild** — shipped 2026-08-25.
- **CORP-INIT-003 — Production Hardening & Product Routing** — shipped 2026-08-25.
- **CORP-INIT-004 — Conversion Clarity & Dependency Cleanup** — shipped 2026-08-26.
- **CORP-INIT-005 — Hero 3.0 & Product Moments** — shipped 2026-08-26; superseded visually by Web 2.0.
- **CORP-INIT-006 — VOLTA Flow** — merged 2026-08-26; presentation layer intentionally superseded by approved Web 2.0 simplification.
- **WEB-INIT-001 — VOLTA Web Design System 2.0 / code delivery** — merged 2026-08-27 via PR #15; design system, five-section Corporate, compact server-rendered Product Moments, centralized product registry and legacy Flow/Switchboard retirement. Production promotion remains blocked by Vercel `build-rate-limit`.
- **Product destination reconciliation** — Store, Portfolio and Booking route to authoritative production URLs.
- **Corporate quality gate** — source-of-truth verification + lint + production build on PRs and `main`.
