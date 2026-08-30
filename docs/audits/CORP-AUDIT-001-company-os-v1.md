# CORP-AUDIT-001 — VOLTA Corporate Company OS v1 Audit

**Date:** 2026-08-30  
**Repository:** `LucasFasolato/volta-landing`  
**Scope:** Product role, portfolio truth, Brand/Visual/Design alignment, documentation, agent routing, evidence and delivery posture.

## Executive conclusion

VOLTA Corporate is correctly understood as a **Brand / Distribution Asset**, not a standalone SaaS product.

The strongest existing decisions remain valid:

- ecosystem-first rather than WhatsApp-first positioning;
- concise public experience;
- real product moments instead of fictional capability theatre;
- no fabricated social proof;
- lightweight runtime;
- narrow product-selection analytics.

The principal Company OS v1 inconsistencies were governance and visual-authority drift:

1. the repository still pointed to superseded `volta-os` as company authority;
2. the local Web Design System 2.0 still declared itself an active ecosystem standard;
3. local product classifications used deployment-era terms such as `PRODUCTION` / `ACTIVE` rather than canonical Strategy lifecycles;
4. Automate was presented as `En preparación` despite canonical EXPLORE / INCUBATE classification;
5. the Corporate shell still uses legacy Inter / `#12E89A` visual foundations.

The audit resolves the first four and records the fifth as controlled Design Debt.

## Canonical classification

Corporate is:

- entity type: Brand / Distribution Asset;
- lifecycle/runtime: operating production surface;
- strategic roles: BRAND_DISTRIBUTION + ECOSYSTEM_ASSET;
- investment posture: MAINTAIN.

It should not be evaluated using standalone SaaS revenue or feature velocity.

## Portfolio representation

Canonical portfolio truth now comes from:

`volta-foundation/registry/portfolio.yaml`

Current interpretation:

- Store — OPERATE / INVEST;
- Booking — BUILD / candidate for OPERATE / INVEST;
- Portfolio — OPERATE / INVEST;
- Automation real-estate vertical — VALIDATE / INCUBATE;
- Automate — EXPLORE / INCUBATE;
- Bridge — EXPLORE / INCUBATE;
- Shield — EXPLORE / INCUBATE.

Corporate must not create its own lifecycle taxonomy.

## Automate public presence

Automate remains in the current local product chooser, but its label is now `En exploración` and its copy explicitly describes exploration.

This audit intentionally does **not** remove Automate from the public chooser because changing which initiatives receive primary Corporate representation is a material positioning decision.

Follow-up strategic question:

> Should an EXPLORE-stage thesis with no customer-ready destination appear alongside customer-ready products in the primary Corporate chooser?

Until explicitly resolved, Corporate must not strengthen Automate's maturity signals or imply availability.

## Brand audit

Corporate's core positioning remains compatible with Brand System:

- VOLTA as one company with multiple products;
- technology applied to real outcomes;
- premium through execution;
- clear, direct and human language;
- product proof rather than technology costume;
- no unsupported claims.

The headline `Tu próximo paso, online.` remains a current local approved positioning statement and was not changed by this audit.

## Visual audit

The local Web 2.0 implementation predates the approved Visual Foundation v1.

Observed legacy foundations include:

- Inter as Corporate shell font;
- `#12E89A` as primary green;
- local raw Web 2.0 token values;
- an ecosystem-standard claim that is no longer valid.

Company OS v1 now defines:

- VOLTA Green `#00E878`;
- Instrument Sans Variable;
- Geist Mono technical companion;
- The Shift;
- refined geometry / controlled softness;
- primitive → semantic → component token architecture;
- WCAG 2.2 AA.

Decision:

- demote Web Design System 2.0 to local implementation contract;
- preserve useful composition/content principles;
- migrate foundational visual values incrementally when surfaces are materially touched;
- do not trigger a full redesign solely for compliance.

## Design assessment

Strong current choices:

- concise information architecture;
- one idea per section;
- product-led storytelling;
- mobile-first rules;
- dark surfaces used selectively;
- real object/state cards rather than generic card grids;
- lightweight server-rendered presentation.

Risk:

> The existing five-section verifier can become ritual if treated as global doctrine rather than a local constraint.

The five-section limit remains a local guardrail and may evolve when evidence or approved positioning justifies it.

## Evidence audit

Corporate had instrumentation but lacked an explicit evidence model.

Created `docs/EVIDENCE.md`.

Primary current outcome:

> Accurately represent VOLTA and route qualified visitors toward the product that best matches their need, while strengthening one coherent perception of the company.

Current strongest measurable signal:

- `Product selected` by product key + placement.

Unknown today:

- comprehension;
- trust transfer;
- downstream activation contribution;
- whether product order materially changes outcomes;
- whether Explore-stage public presence creates confusion.

## Engineering / architecture audit

The current lightweight Next.js/Vercel architecture is appropriate.

Do not add:

- a database;
- runtime portfolio coupling;
- a CMS;
- a service layer;
- distributed product synchronization;

unless repeated operational drift proves that simpler build-time/static approaches are insufficient.

Corporate should remain inexpensive to understand and operate.

## Documentation audit

Updated:

- `README.md`;
- `AGENTS.md`;
- `docs/PRODUCT.md`;
- `docs/CURRENT_STATE.md`;
- `docs/ROADMAP.md`;
- `docs/GUARDRAILS.md`;
- `docs/VOLTA-WEB-DESIGN-SYSTEM-2.md`;
- `src/data/corporate-products.ts`.

Created:

- `docs/EVIDENCE.md`;
- this audit.

The repository no longer needs `volta-os` for current authority.

## Agent audit

Agent routing now begins with `volta-foundation` and loads:

- Brand;
- Visual Foundation;
- Design;
- Strategy/portfolio truth;
- Delivery;
- local Corporate context.

Agents may correct stale product facts when evidence is clear, but cannot independently:

- reposition VOLTA;
- alter the primary headline;
- change which initiatives receive material public prominence;
- promote Explore work to customer-ready status.

## Main risks after audit

### CORP-RISK-001 — Portfolio truth drift

Local product data may become stale after lifecycle/product changes.

Mitigation: canonical registry first; update only local presentation cache.

### CORP-RISK-002 — Explore maturity leakage

An Explore thesis displayed beside products may appear more mature than it is.

Mitigation: explicit status language today; strategic review of public presence later.

### CORP-RISK-003 — Visual Foundation drift

Legacy Inter / green foundations may persist indefinitely if every change treats them as untouchable legacy.

Mitigation: changed surfaces should converge incrementally rather than extend legacy tokens.

### CORP-RISK-004 — Redesign without evidence

Corporate has already gone through several presentation iterations.

Mitigation: require representation, routing, brand or trust evidence before another major redesign.

## Recommended next operating sequence

1. Keep Corporate stable while current routing evidence accumulates.
2. Verify product status/destinations after material product lifecycle changes.
3. Decide explicitly whether Explore-stage initiatives belong in primary Corporate representation.
4. Migrate Visual Foundation values opportunistically on material visual work.
5. Add real credibility only when customer/product evidence exists.
6. Avoid another major IA/visual rebuild without a named problem and evidence.

## Final assessment

| Area | Assessment |
| --- | --- |
| Strategic role clarity | Strong after audit |
| Brand alignment | Strong |
| Portfolio truth | Strong after reconciliation |
| Visual Foundation v1 alignment | Partial / controlled debt |
| Runtime architecture | Appropriate |
| Product-routing instrumentation | Appropriate baseline |
| Distribution effectiveness evidence | Unknown |
| Agent governance | Strong after reconciliation |
| Risk of over-design | Material if evidence discipline weakens |

> **Corporate should earn changes by improving truth, trust or routing—not by continuously reinventing its presentation.**
