# VOLTA Corporate — Local Web Design Contract

**Scope:** this repository's active presentation.  
**Last reviewed:** 2026-09-06.  
**Authority:** implementation guidance beneath `VOLTA-VIS-001`, `VOLTA-DSN-001` and `VOLTA-BRD-001`.

The stable filename is retained for existing agent links. This is not a company-wide design system or a parallel source of foundational tokens.

## Composition

The homepage has five content chapters plus header/footer: introduction and goal routing, available products, company approach, development initiatives, and getting started. Each chapter adds distinct understanding. Do not revive the retired animated Flow rail or add repetitive closing sections.

Use spacious light surfaces with a purposeful dark company chapter. The Shift appears through offset planes, controlled edges and resolved visual hierarchy, not ambient glow. Green is emphasis, not wallpaper. Preserve the approved headline and interim logo.

## Typography and tokens

Instrument Sans Variable is the corporate family, loaded with `next/font` and swap/fallback behavior. Semantic typography uses scale, weight and reading measure rather than numerous typefaces. A serif in Portfolio's illustrative content is product-expression content, not a second corporate font.

`globals.css` owns the primitive-to-semantic color relationships, including `#00E878`, neutral anchors, action foreground/background, focus and muted text. Bright green pairs with dark foreground. The active shell no longer uses the legacy Inter/`#12E89A` baseline.

Control radius is 10px; ordinary and feature surfaces use 16px/24px. Prefer space, borders and alignment over heavy shadows. Product illustrations may use restrained depth where it explains grouping.

## Product stories

Audience, concrete outcome, explanatory copy, three relevant capabilities and one real action. Product cards have a reason to exist; company principles do not need cards.

Product Moments are lightweight, clearly labeled **illustrations** of verified flows. They are not screenshots, real customer work or interactive demos. Do not add focusable decorative controls. Keep equivalent product meaning in the semantic story.

Development initiatives live outside the available-product grid and have explicit labels. Native disclosures provide optional nuance without creating fake sign-up or launch actions.

## Responsive interaction

Desktop and mobile are intentional compositions. Mobile navigation has readable links, a minimum 46px trigger, expanded/controls semantics, Escape and focus return, outside-click/selection dismissal and resize recovery. It is a non-modal disclosure, not a dialog.

Preserve the skip link, logical heading hierarchy, anchor clearance beneath the sticky header, visible focus and meaningful touch targets. Check 320px reflow rather than masking content overflow. Essential product understanding must not depend on miniature illustrative text.

## Motion and resilience

Hover movement is small and fast. Reduced motion removes unnecessary movement and smooth scrolling. Forced-color modes retain controls and hierarchy. No autoplay, heavy animation library, scroll hijacking or client-only hero rendering.

## Acceptance

Run the source/lint/build checks and real browser verification described in [SYSTEM](SYSTEM.md). Inspect representative desktop/mobile screenshots, contrast, disclosure states, outgoing links and social-preview rendering. A passing build is not proof of a good visual experience.

Aesthetic changes do not prove increased conversion. Preserve that distinction in [EVIDENCE](EVIDENCE.md).
