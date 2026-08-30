# VOLTA Corporate — Web 2.0 Implementation Contract

**Status:** Current local implementation contract / legacy design baseline  
**Scope:** `volta-landing` public Corporate surface  
**Company visual authority:** `VOLTA-VIS-001` + `VOLTA-DSN-001` + `VOLTA-BRD-001`

## Purpose

This document describes the concise Web 2.0 composition currently implemented by VOLTA Corporate.

It remains useful because it captures proven local decisions about:

- page length;
- product-led storytelling;
- Product Moments;
- mobile behavior;
- content budgets;
- lightweight runtime behavior.

It is **not** a company-wide visual standard after approval of VOLTA Company OS v1.

Where this file conflicts with Visual Foundation or Design System, the Company OS authority wins and Corporate should converge incrementally when the affected surface is materially changed.

## Current composition principles

1. **Result first.** Lead with what the visitor can accomplish.
2. **Show before explaining.** Prefer real Product Moments to long feature copy.
3. **One idea per moment.** Each major viewport should advance one clear idea.
4. **Remain concise.** Corporate currently uses five primary sections.
5. **Light by default, dark with purpose.** Contrast should communicate hierarchy or product depth.
6. **Mobile is a primary layout.** Do not stack desktop mechanically.
7. **Motion demonstrates causality.** Avoid decorative choreography.
8. **Every scroll earns itself.** Remove repeated or non-decision-useful content.

These principles remain compatible with Company OS v1 and may continue unless evidence justifies a better local solution.

## Current Corporate information architecture

1. Hero / ecosystem chooser
2. Products / Product Moments
3. How VOLTA works
4. Why VOLTA
5. Final CTA
6. Footer

The five-section count is a local implementation guardrail, not a foundational VOLTA rule.

## Product Moments

A Product Moment is a compact visual explanation of the product's decisive mechanism.

Current examples:

- Store → product → cart → WhatsApp order;
- Booking → service/time → confirmed reservation;
- Portfolio → professional material → composition → published presence.

Explore-stage initiatives must not use Product Moments that imply shipped capability or customer readiness.

### Product Moment rules

- Reflect real current product behavior or clearly labeled exploration.
- No fictional dashboards or unsupported capability theatre.
- Do not require interaction to understand the value.
- Prefer lightweight HTML/CSS/SVG over heavy client animation.
- Treat decorative visuals as decorative when equivalent meaning already exists semantically.

## Company Visual Foundation inheritance

The approved Company OS v1 visual foundation defines:

- canonical VOLTA Green: `#00E878`;
- primary VOLTA-owned type family: Instrument Sans Variable;
- technical mono companion: Geist Mono;
- The Shift as foundational visual hook;
- refined geometry with controlled softness;
- semantic token architecture: primitive → semantic → component;
- WCAG 2.2 AA baseline.

Corporate should not maintain competing foundational values.

## Legacy implementation state

Current Corporate code still contains legacy Web 2.0 choices including:

- Inter for the VOLTA-owned shell;
- green values around `#12E89A`;
- local raw color values;
- local Web 2.0 token assumptions.

These are controlled Design Debt.

They should be migrated incrementally when meaningful surfaces are touched rather than through a broad rewrite performed only for formal compliance.

## Color usage

Current semantic intent remains valid:

- green = selected action / progress / confirmation / focused brand signal;
- dark = purposeful contrast/product depth;
- sophisticated neutrals = dominant surface foundation.

When migrating values, use the canonical Visual Foundation rather than perpetuating legacy raw tokens.

Bright VOLTA Green should use a dark foreground by default according to the approved contrast relationship in `VOLTA-VIS-001`.

## Typography

VOLTA-owned Corporate typography should converge toward **Instrument Sans Variable**.

The current Inter implementation remains accepted legacy until the relevant surface is materially revised.

Do not confuse typography rendered inside Product Moments or product-owned content with Corporate brand-shell typography.

## Layout and spacing

The existing layout logic remains useful:

- strong hierarchy;
- controlled reading width;
- generous but purposeful whitespace;
- mobile-first composition;
- no unnecessary card grids;
- no horizontal overflow without a functional reason.

New work should prefer spacing/radius values compatible with the approved Visual Foundation rather than extending a competing local primitive scale.

## Navigation

Corporate navigation should preserve:

- recognizable VOLTA lockup;
- clear product/ecosystem routing;
- one visually dominant action when appropriate;
- touch-friendly mobile controls;
- truthful product destinations.

## Cards

Use cards when content represents an object or state.

Do not turn principles or narrative copy into generic SaaS cards merely to fill layout.

## Motion

Allowed motion should communicate:

- selection;
- transition;
- progress;
- confirmation;
- continuity.

Respect reduced motion.

Do not introduce ambient technology effects that compete with clarity.

## Accessibility

Applicable Corporate UI targets WCAG 2.2 AA.

Preserve:

- semantic headings;
- visible focus;
- contrast;
- touch target usability;
- reduced motion;
- non-color-only meaning;
- responsive text scaling.

## Performance

Corporate should remain lightweight.

Prefer server-rendered structure and lightweight visuals. Add client JavaScript only when interaction creates user value.

Performance thresholds should be measured and used when they improve decisions rather than treated as decorative score targets.

## Analytics

Corporate currently measures:

- event: `Product selected`;
- product key;
- placement.

Do not add personal data or free text.

Do not expand tracking without a named decision question.

## Acceptance lens

A material Corporate visual change should preserve:

- fast comprehension of VOLTA;
- truthful portfolio representation;
- real product visibility;
- strong mobile execution;
- accessibility;
- current Brand/Visual Foundation alignment in the changed surface;
- no unsupported claims;
- proportional runtime complexity;
- relevant source/lint/build/render verification.

## Decision rule

Before adding a block, ask:

1. Does it add new understanding?
2. Does it improve trust with real evidence?
3. Does it help a visitor choose the correct product?
4. Does it improve VOLTA recognition without adding noise?
5. Does it support an approved positioning decision?

If not, it probably does not belong.
