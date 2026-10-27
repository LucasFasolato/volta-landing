# VOLTA Corporate — Material Debt

| ID | Priority | Area | Evidence / impact | Resolution | Status |
| --- | --- | --- | --- | --- | --- |
| CORP-DEBT-001 | P2 | Documentation | Generic README lacked company context. | Replaced with Corporate purpose, source routing and verification. | RESOLVED |
| CORP-DEBT-002 | P2 | Content operations | Typed product facts live in `src/data/corporate-products.ts` while product repositories evolve independently. Source checks catch contract drift, not future changes elsewhere. | Reconcile after material releases. Add build-time synchronization only if recurring drift earns it. | OPEN |
| CORP-DEBT-003 | P1 | Deployment | Earlier Git→Vercel delivery failed, then recovered. | Reopen with new failed-delivery evidence; verify every material release's actual commit and alias. | RESOLVED |
| CORP-DEBT-004 | P3 | Code hygiene | Retired WhatsApp-era components and animation/helper dependencies were removed previously. | Do not revive them. | RESOLVED |
| CORP-DEBT-005 | P1 | Product routing | The corporate page needs authoritative destinations. Portfolio moved from its legacy Vercel hostname to its product-owned canonical domain. | Reconciled to `www.voltaportfolio.app`; see CURRENT_STATE for evidence precedence. | RESOLVED |
| CORP-DEBT-006 | P2 | Repository metadata | GitHub About, read 2026-10-27, is “Sitio corporativo de VOLTA, empresa de producto y tecnología. Next.js 16, React 19 y Tailwind 4.” Next.js 16 and React 19 match `package.json`. The Tailwind 4 clause does not: authored styles do not import Tailwind, and `tailwind.config.ts` is vestigial (see SYSTEM). | Update the About text through an authorized GitHub metadata-write path so it no longer calls the site Tailwind-styled. | OPEN |
| CORP-DEBT-007 | P2 | Visual foundation | Active shell previously used Inter and legacy green. | September hub adopts Instrument Sans, canonical brand green and semantic contrast relationships. Final logo remains a separate centrally controlled deliverable, not an invented local replacement. | RESOLVED |

Scanner findings must be reviewed against the actual dependency graph and exposure. Security patch evidence belongs with the release checks; do not hide material runtime vulnerabilities as visual debt.
