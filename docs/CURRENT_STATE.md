# VOLTA Corporate — Current State

**Review:** 2026-09-07 (2026-09-06 in Argentina)  
**Presentation baseline:** Corporate v1  
**Entity:** Brand / Distribution Asset · OPERATE · MAINTAIN  
**Production origin:** https://volta-landing-delta.vercel.app

## Role and authority

The public home of a product and technology company, routing into independent products. Not a SaaS suite, shared account platform, AI-only company or source of lifecycle authority. The founder explicitly authorized the final five-chapter redesign; [CORP-DDR-002](decisions/CORP-DDR-002-corporate-v1-final.md) records its scope.

## Implemented presentation

1. **Company:** the approved “Tu próximo paso, online.”, one simple explanation and an accessible product directory. No people photography, floating dashboard nodes or invented corporate metrics.
2. **Products:** three editorial showcases with alternating composition. Audience, outcome, supported capabilities, maturity and authoritative external action. Each visual has a visible source/example caption and an enlargement link.
3. **The VOLTA approach:** “Lo complejo, adentro. Lo simple, para vos.” and three short principles.
4. **In development:** Shield is the full-width primary presentation; Bridge follows; Automate is a smaller exploratory item.
5. **Closing:** one company statement and one product-discovery action. No redundant getting-started steps or separate stock-photo gallery.

Instrument Sans, canonical green `#00E878`, semantic contrast pairs, restrained offset geometry, generous spacing, keyboard navigation, reduced motion and forced colors remain. The interim V + dot lockup is retained, not replaced by a newly approved logo.

## Public product truth

| Initiative | Public label | Destination |
| --- | --- | --- |
| Store | Disponible | https://www.voltastore.app |
| Booking | En evolución | https://volta-booking.vercel.app |
| Portfolio | Disponible | https://www.voltaportfolio.app |
| Shield | En validación; controlled MVP development | No general-availability action |
| Bridge | En desarrollo | No general-availability action |
| Automate | En exploración; no launch date | No general-availability action |

`src/data/corporate-products.ts` is the single presentation cache for stories, future labels and footer; it does not replace Foundation's portfolio registry. Shield's **visual priority is founder-authorized**, not a change to its formal VALIDATE / INCUBATE classification.

Portfolio's product-owned `src/lib/config.ts`, `docs/auth-production-setup.md` and `docs/production-web-presence.md` establish the `.app` origin, superseding the registry's older Vercel destination. Bridge's current Product document uses **professionals**, not talent as a domain identity.

## Media: exactly what the visitor sees

The three images are browser captures of the **public demonstrations on the product sites**, not screenshots of authenticated customer operations. Store shows NOVA Studio; Booking shows its published reservation demonstration; Portfolio shows its published architectural example. Visible captions and alt text preserve that distinction.

Capture URL, timestamp, selector and original dimensions live in `public/showcase/provenance.json`. The images are shipped as local responsive WebP variants (640, 960 and maximum-source resolution). No external image requests, runtime screenshot service or Vercel image transformations are needed. Store also links to the public Strong.Protein storefront already promoted by the Store site, without claiming endorsement or commercial results.

## Verification and release

`npm run check` covers source/media contracts, lint and the production build including TypeScript. The expanded Chromium suite checks ten widths from 320 to 1920px, decodes every image before capturing, checks selected WCAG rules, keyboard/mobile navigation, anchors, tracked product links, media budgets, metadata, forced colors and text spacing.

See GitHub Actions artifacts/PR and Vercel for exact execution status. A document or successful local build is not proof of production promotion. The merge-triggered quality workflow also checks the public production version and reruns browser verification without sending analytics or making product transactions.

## Maintenance baseline

Close visual iteration around this v1. Change the page for real product/domain/status changes, accessibility/performance defects or evidence from actual visitors—not aesthetic restlessness. Comprehension, trust and conversion improvement remain unmeasured. Final logo approval remains a separate company decision.
