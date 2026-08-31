# VOLTA Corporate — Agent Entry Point

This repository operates under the **VOLTA Company OS v1**.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Canonical company context

Company-level authority lives in `LucasFasolato/volta-foundation`.

Use the minimum relevant source:

- Company OS registry: `volta-foundation/registry/canonical-documents.yaml`
- Portfolio truth: `volta-foundation/registry/portfolio.yaml`
- Brand: `VOLTA-BRD-001`
- Visual Foundation: `VOLTA-VIS-001`
- Design: `VOLTA-DSN-001`
- Strategy: `VOLTA-STR-001`
- Delivery: `VOLTA-DLV-001`
- Agent Operations: `VOLTA-AGT-001`
- Vercel agent delivery: `VOLTA-AGT-PROFILE-VERCEL-001`

Do not depend on the superseded `volta-os` repository for current VOLTA policy.

## Before changing the site

1. Read `docs/CURRENT_STATE.md`, `docs/GUARDRAILS.md` and `docs/EVIDENCE.md`.
2. Read `docs/PRODUCT.md` before changing product representation or positioning.
3. Read `docs/VOLTA-WEB-DESIGN-SYSTEM-2.md` for the current local implementation contract, then apply `VOLTA-VIS-001` / `VOLTA-DSN-001` when material visual work occurs.
4. Inspect `volta-foundation/registry/portfolio.yaml` before changing product status, presence or cross-product links.
5. Inspect the relevant product repository before publishing material capability claims.
6. Inspect current code and recent Git history.
7. Check `docs/HANDOFF.md` and concurrent work before overlap.

## Core rule

This site **represents VOLTA; it does not redefine VOLTA**.

Product facts should come from the canonical portfolio registry plus the relevant product repository, not from local marketing assumptions.

## Authority

Agents may autonomously:

- fix defects;
- improve accessibility/performance/responsiveness;
- correct stale product destinations/status labels when canonical evidence is clear;
- improve minor copy clarity without changing positioning;
- remove verified dead implementation;
- update local documentation to match current Company OS truth.

Human approval is required for:

- material brand repositioning;
- changing the primary corporate promise/headline;
- materially changing which initiatives are publicly represented;
- presenting Explore/Validate work as generally available;
- unsupported claims/social proof;
- major information-architecture changes;
- substantial new runtime/backend/paid-provider commitments.

## Corporate-site expectations

- Explain VOLTA simply.
- Corporate is a Brand / Distribution Asset, not a SaaS product.
- Product cards/previews must reflect real product truth.
- Keep the site deliberately concise unless evidence proves additional content is useful.
- Preserve mobile-first clarity and accessibility.
- Prefer real Product Moments and outcome-oriented language over technology theatre.
- Treat product links and statuses as conversion infrastructure.
- Do not let local visual conventions silently redefine Company OS visual foundations.

## Evidence discipline

Corporate currently measures one narrow question:

> **Which VOLTA product does a visitor choose, and from which placement?**

Before reordering products, adding large sections or materially changing CTA hierarchy, prefer real routing/visitor evidence over aesthetic preference.

## Shipping

Follow `VOLTA-DLV-001` and use the smallest verification set that proves the claim.

Relevant checks include source verifier, lint, build, metadata/SEO, product destinations and representative desktop/mobile rendering for visual work.

### Vercel deployment discipline

Follow `VOLTA-AGT-PROFILE-VERCEL-001`.

- Stay below the current **100 Vercel builds / rolling 24-hour** hard operating ceiling.
- Default to **one final remote deployment per coherent feature/fix/work package**.
- Develop and visually verify locally first; batch changes before deployment-triggering pushes.
- Use additional previews/deployments only when hosted evidence is materially necessary and unavailable locally.
- Coordinate concurrent agents so the same change is not previewed redundantly.
- Avoid dummy commits, redeploy loops and repeated retries when Vercel is rate-limited.
- Docs-only changes should not intentionally consume runtime deployment capacity when avoidable.

> **Parallelize development; consolidate deployment.**

There is no legacy shipping protocol that overrides `VOLTA-DLV-001`.

Update `docs/CURRENT_STATE.md` after material changes. Use `docs/HANDOFF.md` only when unresolved continuation context is valuable.
