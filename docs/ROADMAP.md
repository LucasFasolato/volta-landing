# VOLTA Corporate — Roadmap

## NOW

### CORP-INIT-006 production promotion
VOLTA Flow is merged to `main` and the full GitHub quality gate is green. Final Vercel preview/production delivery is currently blocked by the Hobby project `build-rate-limit`. Promote and verify a `main` deployment containing `50d6559aa2e9009802f32e46afaaadc8d2f26a4b` (or a later descendant with the same product code) before closing the initiative.

### Repository metadata alignment
Update the GitHub repository description so it no longer frames VOLTA as a WhatsApp-only system. Current connected tooling can verify this metadata but does not expose an authorized repository-description write.

### Product-drift review
Corporate still keeps product facts locally. After material Store/Portfolio/Booking releases, reconcile routes, lifecycle labels and claims against `volta-os/ecosystem/REGISTRY.yaml` and each Product OS before changing Corporate.

## NEXT

### Learn from product-selection data
Corporate records the narrow event `Product selected` with product key and CTA placement. Accumulate enough real traffic to answer which product/placement is doing the work before changing hierarchy or adding another conversion layer.

### Responsive/browser regression pass
Repeat a deliberate browser pass at representative mobile widths (375/390/430), tablet and desktop for VOLTA Flow when browser infrastructure is available. Source-level breakpoint and reduced-motion checks are not a substitute for visual verification.

### Product manifest only if it reduces real drift
If local product facts begin to diverge repeatedly, extract a small typed/build-time manifest or registry sync. Do not add runtime coupling to the global registry just for architectural neatness.

## LATER

### Credibility / social proof
Add proof only when it is real and attributable: live products, customer outcomes, measurable usage or credible case studies. Never backfill the page with invented metrics/testimonials.

### New VOLTA branches
Add new public product sections only when the global registry marks the branch mature enough for customer-facing representation. The automation direction remains guarded and must not be presented as generally available until VOLTA OS changes.

## COMPLETED

- **CORP-INIT-001 — Product OS Adoption** — shipped 2026-08-25.
- **CORP-INIT-002 — Main 2.0 Ecosystem Rebuild** — shipped 2026-08-25.
- **CORP-INIT-003 — Production Hardening & Product Routing** — shipped 2026-08-25.
- **CORP-INIT-004 — Conversion Clarity & Dependency Cleanup** — shipped 2026-08-26; Vercel Analytics instrumentation, product-intent event contract, residual dependency cleanup and updated measurement guardrails.
- **CORP-INIT-005 — Hero 3.0 & Product Moments** — shipped 2026-08-26; intent-driven switchboard, interactive Product Moments and guarded Automate representation.
- **Product destination reconciliation** — Store, Portfolio and Booking route to authoritative production URLs.
- **Git → Vercel traceability restoration** — normal `main` pushes create production deployments with Git metadata when the provider accepts the build.
- **Legacy implementation cleanup** — retired WhatsApp-first source and residual package dependencies removed.
- **Corporate quality gate** — clean install + source-of-truth verification + lint + production build on PRs and `main`.
