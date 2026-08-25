# VOLTA Corporate — Roadmap

## NOW

### Complete CORP-INIT-003 production publish
The code portion is merged and quality-verified at `6e05ebef`, but production still serves the preceding Main 2.0 deployment.

**Current blocker:** Git→Vercel did not react to the merge. The manual Vercel API route is temporarily blocked by the Hobby `api-deployments-free-per-day` quota (100/100), with reset reported for approximately 2026-08-26 17:45 America/Argentina/Cordoba.

**Done when:** current `main` is deployed, `https://volta-landing-delta.vercel.app` is verified with Store/Portfolio/Booking external routes, and `CORP-INIT-003` is moved to completed.

### Repair production deployment traceability
Restore the normal GitHub → Vercel path so a `main` commit produces a traceable production deployment without the manual connector/bootstrap workaround.

**Done when:** a normal `main` change deploys successfully, Vercel records Git commit metadata and the production alias updates automatically.

A successful manual deployment does **not** close this item.

## NEXT

### Finish residual dependency cleanup
The retired WhatsApp-era source tree is gone. Remove `clsx`, `framer-motion` and `tailwind-merge` only after regenerating the lockfile safely and proving the quality gate stays green.

### Product-drift review
`verify:corporate` protects the currently approved routes/metadata, but product facts are still local source data. Keep a lightweight review against `volta-os/ecosystem/REGISTRY.yaml` and adopted Product OS state after material product launches.

### Conversion clarity
Now that Store, Portfolio and Booking all have real destinations in `main`, evaluate the path from corporate discovery to product action. Add privacy-respecting analytics only when it answers a specific conversion question.

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
- **CORP-INIT-002 — Main 2.0 Ecosystem Rebuild** — shipped 2026-08-25; current production experience.
- **Product destination reconciliation** — Store, Portfolio and Booking all have authoritative production URLs and Corporate `main` wires all three.
- **Legacy source cleanup** — retired WhatsApp-first sections/content/UI removed from `main` in `6e05ebef`; only residual package cleanup remains.
- **Lightweight Corporate quality gate** — source-of-truth verification + lint + build is active on `main`; first run `32897006491` passed.
