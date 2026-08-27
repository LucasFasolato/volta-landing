# VOLTA Web — Design System 2.0

**Status:** active ecosystem standard  
**First reference implementation:** VOLTA Corporate  
**Scope:** public marketing/landing surfaces across VOLTA products

## Purpose

VOLTA Web 2.0 exists to make every public landing easier to understand, shorter to navigate and more recognizably VOLTA without forcing every product into the same visual composition.

A landing does not document the product. **It demonstrates value and helps a visitor decide.**

The system preserves VOLTA's core principles: simplicity, clarity, professional quality, mobile-first execution, purposeful personalization and outcome-oriented communication.

## Core principles

1. **Result first.** Lead with what the visitor can accomplish, not implementation detail.
2. **Show before explaining.** Prefer a real Product Moment to long feature copy.
3. **One idea per moment.** Each major viewport should advance one clear idea.
4. **Fewer sections.** A standard landing uses 5–7 primary sections; Corporate is intentionally capped at 5.
5. **Light by default.** Light surfaces maximize clarity and make dark product moments meaningful.
6. **Dark with purpose.** Dark surfaces signal product, operation, depth or a decisive brand moment.
7. **Green means action.** VOLTA green represents action, active state, progress or confirmation.
8. **Mobile is a primary layout.** Mobile is designed intentionally, not produced by stacking desktop.
9. **Motion demonstrates causality.** Animation should explain a state change, never merely decorate.
10. **Every scroll must earn itself.** If a block adds no new understanding, trust or conversion value, remove it.

## Information architecture

A standard product landing should fit this sequence when all blocks are needed:

1. Hero
2. Problem → outcome or proof
3. Product experience / Product Moment
4. How it works
5. Proof / target audience
6. Pricing (optional)
7. Final CTA
8. Footer

Corporate uses only:

1. Hero
2. Products
3. How it works
4. Why VOLTA
5. Final CTA
6. Footer

## Content budget

### Hero

- H1: target 8–12 words.
- Supporting copy: target 20–30 words.
- Primary CTA: one.
- Secondary CTA: at most one.
- Trust signals: at most three.

### Sections

- H2: target 4–9 words.
- Paragraph: target 2–3 desktop lines.
- Feature group: at most four visible items.
- Process: normally three steps; four only when the product genuinely requires it.
- FAQ: at most five conversion-relevant objections.

If a section repeats a benefit already demonstrated visually, remove it.

## Product Moment

A Product Moment is a compact representation of the action that defines a VOLTA product.

- **Store:** product → cart → WhatsApp order.
- **Booking:** service/time → confirmed reservation.
- **Portfolio:** project → composition → published presence.
- **Automate:** event → rule/flow → result, while the product remains explicitly in preparation.

Product Moments share framing, radius, status treatment, borders and motion behavior while preserving product-specific internal visual language.

### Product Moment rules

- Reflect a real product mechanism or current product direction.
- No fictional dashboards or unsupported capability theater.
- Do not require interaction to understand the core value.
- Prefer server-rendered HTML/CSS over heavy client animation.
- Treat the visual as decorative when equivalent meaning already exists in nearby semantic copy.

## Color system

### Base tokens

| Token | Value | Purpose |
|---|---|---|
| Canvas | `#F6F8F5` | primary page background |
| Surface | `#FFFFFF` | elevated/light content |
| Ink | `#07120F` | text and dark surfaces |
| Muted | `#66706C` | secondary text |
| VOLTA Green | `#12E89A` | primary action / activation |
| Green Strong | `#00C97B` | compact state / active details |
| Border | `rgba(7,18,15,.08)` | light structure |
| Dark | `#07120F` | purposeful contrast surface |

### Surface ratio

A typical VOLTA marketing page should be roughly 70–80% light and 20–30% dark. This is a design heuristic, not a rigid pixel quota.

### Green semantics

Use green for:

- primary action;
- selected/active state;
- progress;
- confirmation;
- small brand activation cues.

Do not use green as the default border, glow or decorative fill for every component.

## Typography

Primary web typeface: **Inter**.

Typography relies on strong hierarchy and negative tracking rather than multiple font families.

- Display: `clamp(3.35rem, 7.2vw, 6.6rem)`
- Section H2: `clamp(2.45rem, 4.8vw, 4.4rem)`
- H3: approximately `28–34px`
- Body XL: `18–20px`
- Body: `15–17px`
- Micro/eyebrow: `10–12px`

Headlines use tight tracking (`-0.04em` to `-0.075em`). Eyebrows use deliberate positive tracking (`0.14em` to `0.20em`).

## Grid and layout

- Maximum primary container: approximately `1344px`.
- Desktop side padding: up to `64px`.
- Tablet: approximately `32px`.
- Mobile: `20px`.
- Mobile master width for visual review: `390px`.
- Desktop master width for visual review: `1440px`.

## Spacing

Spacing scale:

- 8
- 12
- 16
- 24
- 32
- 48
- 64
- 88
- 112

Default marketing section padding should normally land between 64–104px depending on viewport. Large whitespace is intentional only when it improves hierarchy; it must not create empty scroll length by default.

## Radius system

- input / compact control: `12px`
- small card: `16px`
- card: `20px`
- product panel: `24px`
- hero/product frame: `28–32px`
- buttons: pill where appropriate

Avoid inventing arbitrary radii per component.

## Navigation

Every product landing should share the same conceptual shell:

- VOLTA / product lockup left;
- 2–3 relevant anchors on desktop;
- one visually dominant CTA right;
- mobile CTA plus compact menu;
- minimum 44px interactive touch target when practical.

Navigation labels adapt to product needs, but spacing, hierarchy and behavior stay consistent.

## Buttons

Use three conceptual variants only:

1. Primary green
2. Dark / ink
3. Ghost / bordered

One viewport should have one obvious primary action. Secondary actions must not visually compete with it.

## Cards

**No card unless it represents an object.**

Good card candidates:

- product;
- reservation;
- plan;
- project;
- order;
- real testimonial when available.

Abstract principles and narrative copy should usually use typography, rules, spacing or editorial composition instead of another generic SaaS card.

## Dark sections

Dark is not the default technology aesthetic. It should signal something:

- active product experience;
- operation/system state;
- premium editorial moment;
- decisive brand principle;
- final contrast.

A dark section that does not gain meaning from being dark should probably be light.

## Motion

Allowed:

- small fade/translate entrance;
- state transition;
- cart/count update;
- progress;
- confirmation;
- subtle hover feedback.

Avoid:

- perpetual floating objects;
- decorative parallax;
- breathing glows;
- long scroll choreography;
- motion that delays reading.

Respect `prefers-reduced-motion` globally.

## Mobile rules

- Design mobile independently at 390px before considering the layout finished.
- Keep H1 generally below 56px unless a specific composition proves otherwise.
- Primary CTA may become full-width when it improves clarity.
- Product frames fit within page gutters.
- Do not preserve desktop multi-column complexity if it hurts reading order.
- Horizontal scrolling requires a functional reason.
- Navigation must remain readable and touch-friendly.

## Accessibility

- WCAG AA contrast minimum.
- Visible keyboard focus.
- Semantic heading order.
- Touch-friendly controls.
- Do not communicate state through color alone.
- Decorative Product Moments use `aria-hidden` when equivalent meaning is already available in semantic content.
- Respect reduced motion.

## Performance

Target public experience:

- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

Prefer HTML/CSS/SVG Product Moments to large video or client-heavy visualizations. Client JavaScript should exist because the user needs interaction, not because the landing wants motion.

## Analytics

Corporate tracks only the narrow product-selection question through Vercel Analytics:

- event: `Product selected`;
- product key;
- explicit placement.

Do not attach personal data or free text.

Product landings may extend the funnel with product-specific activation events when there is a named measurement question.

## Corporate reference implementation

VOLTA Corporate Web 2.0 intentionally contains exactly five primary sections:

1. Hero ecosystem chooser
2. Four compact product moments
3. Three-step VOLTA process
4. Why VOLTA principles
5. Final CTA

The source verifier fails if this section count changes without deliberately updating the guardrail.

## Acceptance checklist for future landings

A landing is ready when:

- the product is understandable in under ten seconds;
- the H1 is outcome-oriented;
- hero has at most two CTAs;
- page has at most seven primary sections;
- product is shown before long explanation;
- visible feature groups remain short;
- mobile has been intentionally designed;
- green is semantically purposeful;
- dark surfaces are purposeful;
- motion communicates state or causality;
- there is no unsupported social proof;
- final CTA is unmistakable;
- relevant lint/build/verification checks pass.

## Decision rule

Before adding any block, ask:

1. Does it add new information?
2. Does it reduce a real objection?
3. Does it make the product easier to understand?
4. Does it add verified trust?
5. Does it help the visitor decide or act?

If the answer is no to all five, the block does not belong on the landing.
