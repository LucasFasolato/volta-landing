# VOLTA Corporate — Agent Entry Point

This repository is operated under **VOLTA OS v1.0**.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Before changing the site

1. Read `docs/CURRENT_STATE.md` and `docs/GUARDRAILS.md`.
2. Read `docs/VOLTA-WEB-DESIGN-SYSTEM-2.md` before changing public visual language, landing structure or marketing components.
3. Read current `volta-os` global product/brand context when changing positioning, product representation or cross-product links.
4. Inspect current code and recent Git history.
5. Check `docs/HANDOFF.md` and open/concurrent work before overlap.

## Core rule

This site **represents VOLTA; it does not redefine VOLTA**. Product facts should be sourced from the relevant product repository/registry rather than invented here.

## Authority

Agents may autonomously fix defects, accessibility, performance, responsive issues, minor copy clarity and safe visual polish. Material repositioning, new strategic promises, unsupported product claims or major information-architecture changes require an approved direction.

## Corporate-site expectations

- Explain the ecosystem simply.
- Keep Corporate deliberately short; the Web 2.0 reference implementation uses five primary sections.
- Product cards/previews must reflect real products, not fictional capability.
- Keep VOLTA's global visual DNA: premium, minimal, strong hierarchy, purposeful contrast, purposeful green accents and mobile-first clarity.
- Use light surfaces by default and dark surfaces only when they add meaning.
- Avoid technical jargon and AI-centric marketing unless it materially explains user value.
- Prefer outcome-oriented storytelling and Product Moments over long feature copy.
- Product links and metadata are conversion infrastructure; treat broken/stale destinations as real defects.

## Shipping

Run relevant build/type/lint checks and verify key breakpoints, navigation, metadata/SEO and product links. Update `docs/CURRENT_STATE.md` after material changes.

### Vercel deployment budget — mandatory

Follow `volta-os/governance/SHIPPING-PROTOCOL.md`.

- **One requirement/work item = one production deployment from `main`.** The normal Git-triggered deployment after the final merge/push is the deployment for that requirement.
- Preview deployments are exceptional: target **0**, normally allow **at most 1** when remote/render verification is materially needed; a second preview is only for re-verifying a material fix found in the first.
- Do not push intermediate commits merely to obtain previews, and do not create dummy commits/branches or repeatedly press redeploy when Vercel is rate-limited.
- Batch remote/GitHub API writes into coherent commits when practical so one file edit does not become one deployment attempt.
- Use repository CI/source checks before Vercel. Preview is near-final verification, not the development loop.
- If Vercel returns `build-rate-limit` or `api-deployments-free-per-day`, record the blocker and stop retrying until quota/provider capacity is available.
