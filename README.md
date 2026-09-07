# VOLTA Corporate

The public home of VOLTA: a product and technology company. This website explains the company, helps visitors discover the right product and distinguishes available products from initiatives still being built.

Production: https://volta-landing-delta.vercel.app

Corporate is a **Brand / Distribution Asset**, not another SaaS product or a shared account platform.

## Corporate v1 — current experience

- Approved headline: **Tu próximo paso, online.**
- Five chapters: company, product showcases, principles, development and closing.
- Store, Booking and Portfolio: concrete outcomes, local high-resolution captures of public demonstrations, and authoritative destinations.
- Shield: the primary development presentation, En validación; Bridge: En desarrollo; Automate: En exploración.
- Explicit media captions/provenance and a link to Store's existing published storefront example.
- Instrument Sans, canonical VOLTA Green, restrained Shift geometry and intentional mobile navigation.
- Static/server-rendered content; client code only for navigation and narrow product-selection analytics.

## Development

Use the committed npm lockfile. CI and production use Node 24.

```bash
npm ci
npm run dev
npm run check
```

`check` runs public-content/media contracts, ESLint and the production build, including TypeScript. Browser verification is described in [SYSTEM](docs/SYSTEM.md). It covers reflow at ten widths, decoded media, selected accessibility rules, navigation, metadata and product-intent events. The post-merge workflow also verifies public production without triggering another deployment.

## Context

Start with [AGENTS.md](AGENTS.md), [CURRENT_STATE](docs/CURRENT_STATE.md) and the relevant context:

- [PRODUCT](docs/PRODUCT.md) and [GUARDRAILS](docs/GUARDRAILS.md): public purpose, authority and claim boundaries.
- [Local visual contract](docs/VOLTA-WEB-DESIGN-SYSTEM-2.md) and [MEDIA](docs/MEDIA.md): composition and image provenance.
- [SYSTEM](docs/SYSTEM.md): architecture, verification and delivery.
- [EVIDENCE](docs/EVIDENCE.md) and [ROADMAP](docs/ROADMAP.md): what is known and what should come next.
- [Corporate hub decision](docs/decisions/CORP-DDR-001-corporate-hub.md) and [final v1 decision](docs/decisions/CORP-DDR-002-corporate-v1-final.md).

Company authority lives in `LucasFasolato/volta-foundation`, especially `registry/canonical-documents.yaml` and `registry/portfolio.yaml`. Individual product repositories own current capabilities and operational destinations. Local marketing data is a presentation cache, not a competing registry.

## Delivery

Develop and verify before deployment-triggering integration. Default to **one final Vercel deployment per coherent work package**. The final-v1 feature branch suppresses automatic previews; main remains enabled. Preserve concurrent work and recheck upstream before merging. After v1, prioritize actual product changes, defects and visitor evidence rather than recurring aesthetic rewrites.

> Corporate represents VOLTA. It does not redefine VOLTA.
