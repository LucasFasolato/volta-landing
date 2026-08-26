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
- Current verified product destinations are:
  - Store → `https://www.voltastore.app`;
  - Portfolio → `https://volta-portfolio-psi.vercel.app`;
  - Booking → `https://volta-booking.vercel.app`.
- Revalidate destinations against VOLTA OS/Product OS after material product changes rather than guessing replacements.
- A product may appear publicly only when its lifecycle and proposition are mature enough to represent without caveat.
- Real product previews are preferred over fictional dashboards or capability theater.
- Booking remains labeled `En evolución` until its Product OS lifecycle supports a stronger public claim.

## Claims / credibility

- No fabricated testimonials, client counts, conversion percentages, revenue impact or usage metrics.
- Social proof enters only with real evidence that can survive verification.
- Avoid generic claims that imply capabilities beyond the product shown.
- Technology, automation and AI are means; user/business outcomes are the headline.

## Measurement

- Analytics must answer a named product question; do not add tracking merely because it is available.
- Current Corporate question: **which VOLTA product does a visitor choose, and from which CTA placement?**
- Track only the product key and placement needed to answer that question.
- Do not attach names, emails, phone numbers, free text, account identifiers or other personal data to Corporate analytics events.
- Prefer the existing Vercel delivery stack over introducing a separate analytics vendor for this lightweight site.

## Brand / UX

- Premium, minimal, clear, high-contrast and mobile-first.
- Preserve strong hierarchy and intentional whitespace; avoid generic SaaS grids when a product-specific composition communicates more.
- Keep VOLTA green purposeful rather than decorative everywhere.
- Product surfaces may have distinct visual language while remaining recognizably VOLTA.
- Do not treat mobile as a stacked desktop afterthought.

## Architecture

- Keep the corporate runtime lightweight; do not introduce a backend/database merely to centralize marketing copy or analytics.
- If registry-driven metadata is introduced, prefer build-time/static behavior with graceful fallback and no dependency on product runtime health.
- Do not recreate retired WhatsApp-era component/content trees without a concrete current need.

## Shipping

Before shipping material changes:

- run `npm run verify:corporate`, `npm run lint` and `npm run build` (or `npm run check`);
- verify desktop and mobile layouts for material visual changes;
- verify fixed navigation/anchor behavior when navigation changes;
- verify every external product destination against an authoritative source;
- verify metadata/title/description/favicon;
- inspect final production output after deployment;
- confirm the Git-triggered Vercel deployment corresponds to the intended `main` commit.

## Agent autonomy

Agents may autonomously:

- fix defects, accessibility, responsive issues and performance problems;
- correct stale product links/labels when authoritative evidence exists;
- improve minor copy clarity without changing positioning;
- remove verified dead code/dependencies with checks;
- add narrowly scoped measurement that follows the Measurement guardrail;
- update Product OS to reflect verified current reality.

Human approval is required for:

- material brand/product repositioning;
- changing the primary corporate promise/headline;
- publishing a new/incubating product as generally available;
- adding unsupported commercial claims or social proof;
- introducing substantial runtime/backend architecture or paid third-party commitments.
