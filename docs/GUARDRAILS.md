# VOLTA Corporate — Guardrails

## Scoped truth

Corporate represents VOLTA; it does not redefine VOLTA.

- Company identity, brand and foundational design: approved Company OS in `LucasFasolato/volta-foundation`.
- Portfolio classification: `volta-foundation/registry/portfolio.yaml`.
- Product capabilities and operational destinations: current product-owned documentation/configuration and production evidence.
- Current implementation: repository code and Git history.
- Actual public release: production domain/deployment evidence, not a successful build alone.
- Historical intent: decision records and superseded initiatives, not current policy.

Resolve conflicts explicitly. [CURRENT_STATE](CURRENT_STATE.md) records the newer Portfolio-domain evidence rather than silently treating an old registry URL as current.

## Positioning and public claims

Keep **Tu próximo paso, online.** unless the responsible human/Brand authority approves a replacement. VOLTA is a product and technology company, not WhatsApp-only, AI-only or a generic software agency.

Store and Portfolio may be represented as available. Booking remains visibly evolving. Shield and Bridge are development initiatives; Automate is exploratory. None of those three may be presented as generally available without new authoritative evidence and the appropriate approval.

The September hub presentation is recorded in [CORP-DDR-001](decisions/CORP-DDR-001-corporate-hub.md). It does not grant blanket authority to promote future products.

No fabricated testimonials, metrics, customers, certifications, ROI or security guarantees. Do not turn aspirations into shipped capabilities. Clearly label illustrative content; do not make it look like an actual customer result. Product previews may express personality without redefining the corporate brand.

## Measurement

Question: **Which product is selected, and from which placement?**

`Product selected` contains only product key and placement. Do not attach PII, account identifiers, free text or arbitrary URL/query values. A new vendor or broader tracking requires a named decision need.

## Visual and interaction floor

Inherit `VOLTA-BRD-001`, `VOLTA-VIS-001` and `VOLTA-DSN-001`: Instrument Sans, `#00E878`, semantic contrast pairs, The Shift, controlled geometry, clear hierarchy, generous spacing and mobile-first execution.

Bright brand green uses dark foreground. Preserve semantic headings, visible focus, keyboard/touch operation, readable content, reduced motion and responsive reflow. The accessibility target is WCAG 2.2 AA; passing an automated scan is not a certification.

Retain the interim logo until a centrally approved asset replaces it. Do not reintroduce obsolete Inter/legacy-green shell conventions or retired presentation components.

## Architecture and security

Keep the page static/server-rendered. Client code is justified by interaction or narrow telemetry. Do not add a database, runtime portfolio dependency, shared identity or third-party provider merely to centralize copy.

Keep dependencies supported and patched. Evaluate scanner findings against real exposure; never use `npm audit fix --force` as an unreviewed release mechanism. No secrets, private product data or customer transcripts belong in this repository or its public examples.

## Execution and authority

Agents may fix defects, improve accessibility/responsiveness/performance, reconcile clear canonical facts, maintain existing analytics and update local documentation. They must preserve concurrent work.

Human/Brand approval remains required for material repositioning, headline replacement, major IA or initiative-presence changes, general-availability promotion and substantial runtime/backend/paid-provider commitments. Unsupported claims are not authorized simply because they are marketing.

Use the shortest responsible Delivery path: targeted contracts, lint, build/TypeScript and real browser verification for changed visual/interactive surfaces. Verify product links, metadata and the final production commit when shipping.

Default to **one final remote Vercel deployment per coherent work package**, within the operating ceiling in `AGENTS.md`. Consolidate changes, suppress unnecessary previews and never retry deployment loops to evade a limit.
