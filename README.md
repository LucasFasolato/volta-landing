# VOLTA Corporate

The public home of VOLTA: a product and technology company. This website explains the company, helps visitors discover the right product and distinguishes available products from initiatives still being built.

Production: https://volta-landing-delta.vercel.app

Corporate is a **Brand / Distribution Asset**, not another SaaS product or a shared account platform.

## Current experience

- Approved headline: **Tu próximo paso, online.**
- Store, Booking and Portfolio: concrete outcomes and authoritative product destinations.
- Shield, Bridge and Automate: a separate, clearly labeled development/exploration chapter, without availability promises.
- Instrument Sans, VOLTA Green, restrained Shift geometry and intentional mobile navigation.
- Static/server-rendered content; client code only for navigation and narrow product-selection analytics.

## Development

Use the committed npm lockfile. CI and production use Node 24.

```bash
npm ci
npm run dev
npm run check
```

`check` runs the public-content contracts, ESLint and the production build, including TypeScript. Browser verification is described in [SYSTEM](docs/SYSTEM.md); it covers responsive rendering, accessibility, navigation, metadata and product-intent events.

## Context

Start with [AGENTS.md](AGENTS.md), [CURRENT_STATE](docs/CURRENT_STATE.md) and the relevant local context:

- [PRODUCT](docs/PRODUCT.md): public purpose, scope and product representation.
- [GUARDRAILS](docs/GUARDRAILS.md): claims, authority and shipping boundaries.
- [Local visual contract](docs/VOLTA-WEB-DESIGN-SYSTEM-2.md): composition and implementation.
- [SYSTEM](docs/SYSTEM.md): architecture, verification and delivery.
- [EVIDENCE](docs/EVIDENCE.md) and [ROADMAP](docs/ROADMAP.md): what is known and what should come next.
- [Corporate hub decision](docs/decisions/CORP-DDR-001-corporate-hub.md): the September 2026 redesign.

Company authority lives in `LucasFasolato/volta-foundation`, especially `registry/canonical-documents.yaml` and `registry/portfolio.yaml`. Individual product repositories own current product capabilities and operational destinations. Local marketing data is a presentation of that truth, not a competing registry.

## Delivery

Develop and verify before deployment-triggering integration. Default to **one final Vercel deployment per coherent work package**. Do not use preview builds as an editing loop. Preserve other contributors' work and recheck upstream before merging.

> Corporate represents VOLTA. It does not redefine VOLTA.
