# CORP-INIT-004 — Conversion Clarity & Dependency Cleanup

- **Status:** SHIPPED
- **Priority:** P2
- **Started:** 2026-08-26
- **Completed:** 2026-08-26

## Objective

Make Corporate measurable without redesigning Main 2.0, finish the residual dependency cleanup from the WhatsApp-first implementation and formalize safe measurement guardrails.

## Product question

> Which VOLTA product does a visitor choose, and from which CTA placement?

No broader tracking scope was introduced.

## Shipped

Runtime merge: `06083c423bb9bd0918227af6042e63a49be35bba` (PR #9).

- Added `@vercel/analytics` and Vercel `Analytics` to the App Router layout.
- Added `ProductIntentAnalytics` with event `Product selected`.
- Event properties are limited to `product` and `placement`.
- Product choices: Store, Portfolio, Booking.
- Placement identifies the product showcase or closing CTA; no personal fields are collected by the custom event.
- Removed residual `clsx`, `framer-motion` and `tailwind-merge` dependencies.
- Regenerated `package-lock.json` with Node/npm rather than editing it manually.
- Extended `verify:corporate` to protect analytics contracts and forbid retired dependencies.
- Corrected stale guardrails around Portfolio/Booking external routing and added explicit measurement rules.

## Verification

- PR #9 Corporate Quality Gate: clean install, Corporate verification, lint and build — success.
- Branch preview: `dpl_GH6HyATbRR7SpfXN7CGjz6D8hPr9` — `READY`.
- Production deployment: `dpl_6QeSt5MbJch3Ahf6pjHmmP7soena` — `READY`.
- Production source: Git `main`, commit `06083c423bb9bd0918227af6042e63a49be35bba`.
- Public production returned HTTP 200 with approved headline, metadata and Store/Portfolio/Booking routes unchanged.
- Production runtime includes both `ProductIntentAnalytics` and Vercel `Analytics`.
- `/_vercel/insights/script.js` returned HTTP 200 after deployment.

## Deliberately not changed

- No visual redesign.
- No invented social proof or metrics.
- No backend/database added for analytics.
- No new external analytics vendor.
- Booking remains `En evolución`.
- Product facts remain local source data; registry-driven generation is deferred until repeated drift justifies it.

## Result

Corporate 2.1 can now answer a specific conversion question while keeping the product experience and architecture lightweight. Residual legacy dependency debt is closed.
