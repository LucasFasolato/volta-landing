# VOLTA Corporate — Guardrails

## Source-of-truth precedence

When chat, docs, code and production disagree, use this order for the question being answered:

1. **Current repository implementation** for what `main` contains and how the site is coded.
2. **Vercel project/deployment evidence** for what production actually serves and how it was deployed.
3. **`volta-os`** for global VOLTA definition, brand doctrine, registry and lifecycle vocabulary.
4. **The corresponding Product OS/current implementation** for Store/Booking/Portfolio-specific capabilities and state.
5. **Conversation history** only as historical intent; verify it before promoting it into current truth.

Corporate represents VOLTA; it does not redefine it.

## Positioning

- The current approved corporate headline is **“Tu próximo paso, online.”**
- Corporate is ecosystem-first, not WhatsApp-first. WhatsApp may be explained where it is a real product mechanism (for example Store checkout), but the VOLTA brand must not collapse back into “a chatbot” or “WhatsApp automation”.
- Material repositioning, replacement of the primary brand statement or a major information-architecture change requires human approval.
- `VOLTA Automatization` is an incubation direction with provisional naming. Do not present it as generally available until global/product truth changes.

## Product representation

- Product claims, statuses and previews must reflect current authoritative product state.
- Store may link to `https://www.voltastore.app` because the destination is registered and verified.
- Do **not** guess Booking or Portfolio deployment URLs. Keep CTAs internal until an authoritative public URL is registered/verified.
- A product may appear publicly only when its lifecycle and proposition are mature enough to represent without caveat.
- Real product previews are preferred over fictional dashboards or capability theater.

## Claims / credibility

- No fabricated testimonials, client counts, conversion percentages, revenue impact or usage metrics.
- Social proof enters only with real evidence that can survive verification.
- Avoid generic claims that imply capabilities beyond the product shown.
- Technology, automation and AI are means; user/business outcomes are the headline.

## Brand / UX

- Premium, minimal, clear, high-contrast and mobile-first.
- Preserve strong hierarchy and intentional whitespace; avoid generic SaaS grids when a product-specific composition communicates more.
- Keep VOLTA green purposeful rather than decorative everywhere.
- Product surfaces may have distinct visual language while remaining recognizably VOLTA.
- Do not treat mobile as a stacked desktop afterthought.

## Architecture

- Keep the corporate runtime lightweight; do not introduce a backend/database merely to centralize marketing copy.
- If registry-driven metadata is introduced, prefer build-time/static behavior with graceful fallback and no dependency on product runtime health.
- Do not reuse legacy WhatsApp-era modules as current truth merely because they remain in the tree; verify imports and intent first.

## Shipping

Before shipping material changes:

- run `npm run lint` and `npm run build`;
- verify desktop and mobile layouts;
- verify fixed navigation/anchor behavior;
- verify every external product destination against an authoritative source;
- verify metadata/title/description/favicon;
- inspect final production output after deployment;
- until `CORP-DEBT-003` is resolved, explicitly verify the Vercel production alias because Git-linked auto-deploy cannot be assumed.

## Agent autonomy

Agents may autonomously:

- fix defects, accessibility, responsive issues and performance problems;
- correct stale product links/labels when authoritative evidence exists;
- improve minor copy clarity without changing positioning;
- remove verified dead code/dependencies with checks;
- update Product OS to reflect verified current reality.

Human approval is required for:

- material brand/product repositioning;
- changing the primary corporate promise/headline;
- publishing a new/incubating product as generally available;
- adding unsupported commercial claims or social proof;
- introducing substantial runtime/backend architecture or paid third-party commitments.
