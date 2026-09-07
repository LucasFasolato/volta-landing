# VOLTA Corporate — Evidence

## Primary outcome

Accurately represent VOLTA and route qualified visitors to the product matching their need, while reinforcing one coherent company identity. Corporate is a Brand / Distribution Asset. This document does not replace Strategy's portfolio registry or product evidence.

## What is known

Corporate v1 is grounded in the approved Foundation, Brand, Visual Foundation and Design System, current product definitions and the portfolio registry. [CURRENT_STATE](CURRENT_STATE.md) records current-source reconciliation and [CORP-DDR-002](decisions/CORP-DDR-002-corporate-v1-final.md) records the founder-authorized final presentation.

Source contracts, lint, build, screenshots and interaction/accessibility checks provide **implementation evidence**. GitHub artifacts and PR records preserve exact results; Vercel/public-domain checks establish release status. They do not establish that people understand the company faster, trust it more or convert at a higher rate.

## Evidence profile

| Dimension | Status | Meaning |
| --- | --- | --- |
| Content provenance | Reconciled against identified sources | Available products and development initiatives stay separate. |
| Product selection | Instrumented; evidence volume not established | `Product selected` records product and placement only. |
| Comprehension | Unknown | No user-study result is claimed. |
| Trust transfer | Unknown | Coherent design is an intended mechanism, not measured trust. |
| Downstream acquisition | Unknown | No comparable activation cohort or attribution claim. |
| Economic contribution | Indirect / unknown | Corporate is not a standalone revenue line. |

## Measurement boundary

Retain `Product selected` with product key and placement (`products`, `footer`, fallback `other`). Historical placements from previous layouts are not equivalent surfaces and should not be silently combined. Do not add PII, arbitrary URLs or free text. Expand measurement only for a named decision.

## Corporate v1 implementation evidence

Public product demonstrations were captured read-only at high resolution and bundled locally with provenance; no customer sessions or outcomes were fabricated. Corporate waits for every image to decode before screenshot acceptance. The nine responsive variants have a combined byte budget below 800 KB. Browser coverage spans ten widths from 320–1920px, open-menu accessibility, media links, forced colors and text-spacing reflow.

Local offline build/static render evidence is supplementary: the editing environment could not navigate a browser to localhost because of its managed URL policy. That policy was not altered. Actual navigation/interaction/release evidence comes from permitted Chromium runs in GitHub Actions and public deployment checks. An unpublished local render alone does not qualify the release.

Exact verification and deployment results are recorded on the release PR and CI artifacts. The post-merge production check is read-only and creates no product transactions or analytics engagement.

## Next evidence

Accumulate enough traffic for routing direction to be meaningful. Check with actual visitors whether they can explain VOLTA, distinguish product destinations and recognize development work as not generally available. Consider product-origin activation measurement only when a distribution decision needs it.

A polished design, deployment success, automated accessibility result or a single click is not a conversion study. Public example compositions are not customer evidence.

> Improve from real representation and routing signals, not visual restlessness.
