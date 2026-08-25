# VOLTA Corporate — Guardrails

## Source-of-truth authority

There is no single source that outranks every other source for every question. Use the authoritative source for the domain being changed:

| Question | Authority |
|---|---|
| What does this repository currently implement? | Current `main` code and Git history. |
| What does the public corporate site actually serve? | Vercel production deployment/domain evidence. |
| What is VOLTA, which branches exist and what is their lifecycle/naming? | `volta-os` global doctrine and registry. |
| What can Store/Booking/Portfolio truthfully claim? | The corresponding Product OS plus current product implementation. |
| What was intended historically? | Conversation/history only as input; verify it before promoting it into current truth. |

If two sources appear to conflict, describe the conflict explicitly and resolve it against the correct domain authority rather than silently choosing the more convenient statement.

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
