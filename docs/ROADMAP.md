# VOLTA Corporate — Roadmap

## NOW

### Finish residual dependency cleanup
The retired WhatsApp-era source tree is gone. Remove `clsx`, `framer-motion` and `tailwind-merge` only together with a safe lockfile regeneration and a green Corporate quality gate.

### Repository metadata alignment
Update the GitHub repository description so it no longer frames VOLTA as a WhatsApp-only system. Keep the repository description aligned with the ecosystem-first role documented in Product OS.

## NEXT

### Product-drift review
`verify:corporate` protects the currently approved routes/metadata, but product facts are still local source data. Keep a lightweight review against `volta-os/ecosystem/REGISTRY.yaml` and adopted Product OS state after material product launches.

### Conversion clarity
Store, Portfolio and Booking now have real production destinations. Evaluate the path from corporate discovery to product action and add privacy-respecting analytics only when it answers a specific conversion question.

### Responsive/browser regression pass
For the next material visual change, record deliberate checks at representative mobile widths (375/390/430), tablet and desktop rather than relying only on responsive CSS presence.

## LATER

### Credibility / social proof
Add proof only when it is real and attributable: live products, customer outcomes, measurable usage or credible case studies. Never backfill the page with invented metrics/testimonials.

### New VOLTA branches
Add new public product sections only when the global registry marks the branch mature enough for customer-facing representation. `VOLTA Automatization` remains incubation/provisional today.

### Registry-driven metadata
Consider generating part of the corporate product manifest from the global registry only after its contract is stable. Corporate runtime must not depend on unrelated product availability.

## COMPLETED

- **CORP-INIT-001 — Product OS Adoption** — shipped 2026-08-25.
- **CORP-INIT-002 — Main 2.0 Ecosystem Rebuild** — shipped 2026-08-25.
- **CORP-INIT-003 — Production Hardening & Product Routing** — shipped 2026-08-25; real Store/Portfolio/Booking routing, legacy-source retirement, Corporate quality gate and verified Git-triggered production delivery.
- **Product destination reconciliation** — Store, Portfolio and Booking all have authoritative production URLs and Corporate routes all three.
- **Git → Vercel traceability restoration** — deployment `dpl_FCoZtPH6LapDkRHFqxRjHZeMbyJp` was created from `main`, records Git commit `9cb4fc29dd5c1d9be307ed6bb3a9aad5210ed714` and owns the production alias.
- **Legacy source cleanup** — retired WhatsApp-first sections/content/UI removed; only residual package cleanup remains.
- **Lightweight Corporate quality gate** — source-of-truth verification + lint + build is active on PRs and `main`.
