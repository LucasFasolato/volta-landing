# VOLTA Corporate — Evidence

## Purpose

Corporate is a Brand / Distribution Asset, not a commercial product. Its evidence model therefore focuses on whether it accurately represents VOLTA, transfers trust and routes visitors toward the correct product.

This document does not replace `volta-foundation/registry/portfolio.yaml` or product-specific evidence.

## Current evidence questions

### Representation

Can a visitor understand what VOLTA is and what its customer-ready products do without being misled by exploratory work?

### Routing

Which product does a visitor choose, and from which placement?

### Trust transfer

Does Corporate help a visitor perceive Store, Booking and Portfolio as coherent products from one credible company rather than unrelated experiments?

### Distribution value

Does traffic from Corporate lead to meaningful product discovery or downstream product activity?

Current instrumentation does not yet prove downstream impact.

## Evidence profile

| Dimension | Current state | What is actually supported |
| --- | --- | --- |
| Accurate portfolio representation | Improving / current after Company OS v1 reconciliation | Local product map is now aligned to canonical classification. |
| Product-selection behavior | Instrumented, evidence volume unknown | `Product selected` records product key + placement. |
| Comprehension | Unknown | No current canonical user-research evidence. |
| Trust transfer | Unknown | Brand coherence is an intended outcome, not yet measured directly. |
| Downstream acquisition contribution | Unknown | Corporate does not currently connect product selection to comparable downstream activation cohorts. |
| Repeat visitation | Not strategically required today | Corporate should not optimize artificial engagement. |
| Economic evidence | Indirect / unknown | Corporate is not a standalone revenue line. |

## Current evidence constraints

Do not infer effectiveness from:

- a successful production deploy;
- visual polish;
- section count;
- animation quality;
- number of products shown;
- code quality;
- a visitor clicking once without sufficient traffic context.

These may demonstrate implementation quality, not distribution value.

## Primary current outcome

> **Accurately represent VOLTA and route qualified visitors toward the product that best matches their need, while strengthening one coherent perception of the company.**

## Measurement now

Keep the current narrow event:

`Product selected`

with:

- product key;
- placement.

This is sufficient to establish a routing baseline.

## Evidence to accumulate

When traffic becomes meaningful, useful questions include:

- product-selection distribution;
- placement differences;
- whether visitors understand product distinctions;
- whether Explore-stage content causes confusion;
- whether Corporate-originated visitors activate in the destination product;
- whether product order meaningfully changes routing;
- whether real credibility assets improve downstream behavior.

Do not expand tracking until a concrete decision needs the additional evidence.

## Explore-stage representation test

For Automate, Bridge, Shield or future Explore/Validate initiatives, ask:

1. Does public presence create useful strategic value now?
2. Can its status be understood without caveat-heavy copy?
3. Could a visitor reasonably mistake exploration for an available product?
4. Does its presence improve VOLTA understanding or make the portfolio feel less credible?

If uncertainty is high, the initiative should not gain stronger public prominence merely because a card can be designed for it.

## Next evidence milestone

1. Accumulate enough real Corporate traffic for `Product selected` to become directional.
2. Validate comprehension with a small number of real visitors if ambiguity appears.
3. Establish whether Corporate materially contributes to product discovery before another major information-architecture redesign.

## Evidence rule

> **Corporate earns change from observed representation or routing problems, not from visual restlessness.**
