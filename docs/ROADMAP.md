# VOLTA Corporate — Roadmap

## NOW

### Repair production deployment traceability
Restore the normal GitHub → Vercel production path so a `main` commit produces a traceable production deployment without the manual connector/bootstrap workaround.

**Done when:** a normal `main` change deploys successfully, Vercel records the Git commit metadata, the production alias updates, and the workaround is no longer required.

### Reconcile product destinations
Store is correctly routed to `https://www.voltastore.app`. Portfolio is now authoritatively registered at `https://volta-portfolio-psi.vercel.app` and should be wired into Corporate in the next runtime change. Booking still needs an authoritative public destination registered in its Product OS/global registry before an external CTA is enabled.

**Do not guess project URLs.** Until a destination is authoritative, keeping the CTA internal is intentional.

### Remove legacy landing implementation
Confirm no current imports depend on the WhatsApp-era component/content tree, then remove unused sections, old layout/UI helpers, stale content and dependencies that exist only for that implementation.

Target evidence includes `src/components/sections/*`, old layout/UI files, `src/data/landing-content.ts` and dependencies such as Framer Motion/utility helpers that are not used by Main 2.0.

## NEXT

### Lightweight corporate quality gate
Add the smallest useful automated check for this site:

- lint;
- production build/TypeScript;
- critical product-link assertions;
- metadata/title/description sanity;
- optionally a small responsive smoke test if it remains cheap to maintain.

### Product-drift review
Create a lightweight operating check against `volta-os/ecosystem/REGISTRY.yaml` and adopted product states after material product launches. Prefer build-time/manual checks before runtime coupling.

### Conversion clarity
Improve the path from corporate discovery to product action once all product destinations are real. Evaluate privacy-respecting corporate analytics only when it will answer specific conversion questions.

## LATER

### Credibility / social proof
Add proof only when it is real and attributable: live products, customer outcomes, measurable usage or credible case studies. Never backfill the page with invented metrics/testimonials.

### New VOLTA branches
Add new public product sections only when the global registry marks the branch mature enough for customer-facing representation. `VOLTA Automatization` remains incubation/provisional today.

### Registry-driven metadata
Consider generating part of the corporate product manifest from the global registry only after its contract is stable. Corporate runtime must not depend on unrelated product availability.

## COMPLETED

- **CORP-INIT-001 — Product OS Adoption** — shipped 2026-08-25.
- **CORP-INIT-002 — Main 2.0 Ecosystem Rebuild** — shipped 2026-08-25; current production experience.
