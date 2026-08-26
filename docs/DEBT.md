# VOLTA Corporate — Material Debt

| ID | Priority | Area | Evidence / impact | Resolution | Status |
|---|---|---|---|---|---|
| CORP-DEBT-001 | P2 | Documentation | Repository README was generic create-next-app boilerplate and provided no VOLTA context. | Replaced during Product OS adoption. | RESOLVED |
| CORP-DEBT-002 | P2 | Content operations | Product facts and lifecycle labels remain local in `src/app/page.tsx` while Store/Booking/Portfolio evolve independently. `verify:corporate` protects current URLs/labels, but does not consume the central registry. | Reconcile against registry/Product OS after material product releases. Introduce a typed/build-time manifest only if repeated drift justifies it. | OPEN |
| CORP-DEBT-003 | P1 | Deployment | August 2026 Git→Vercel delivery temporarily failed. After repository reconnection and rate-limit recovery, normal `main` pushes again create production deployments with Git metadata. | Reopen only with new evidence of failed Git-triggered deployments. | RESOLVED |
| CORP-DEBT-004 | P3 | Code hygiene | The retired WhatsApp-era source tree was removed in `CORP-INIT-003`. `CORP-INIT-004` then removed residual `clsx`, `framer-motion` and `tailwind-merge` dependencies, regenerated the lockfile, passed clean install/verify/lint/build and deployed successfully. | No further legacy dependency work required. | RESOLVED |
| CORP-DEBT-005 | P1 | Conversion / cross-product dependency | Store, Portfolio and Booking all expose authoritative production URLs in VOLTA OS and Corporate production routes all three. | Keep routing aligned with registry/Product OS. | RESOLVED |
| CORP-DEBT-006 | P2 | Repository metadata | GitHub repository description still says `Landing de VOLTA — sistema que automatiza ventas y atención en WhatsApp.`, contradicting the current ecosystem-first role. The connected GitHub integration can read this metadata but exposes no authorized repository-description write action. | Update the GitHub repository description through GitHub settings or another authorized metadata-write path, then verify it no longer frames VOLTA as WhatsApp-only. | OPEN |

Do not create speculative technical debt for this lightweight site without repository, Product OS or production evidence.
