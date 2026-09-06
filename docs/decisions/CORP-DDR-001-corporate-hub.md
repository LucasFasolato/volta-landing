---
document_id: CORP-DDR-001
title: Corporate hub with clear product outcomes
document_type: record
status: Accepted
date: 2026-09-06
owner: VOLTA
scope: Corporate presentation and local implementation
---

# Corporate hub with clear product outcomes

## Context and authority

The founder requested a complete improvement of `volta-landing` as the central public home of VOLTA: clear, easy to understand, visual and consistent with the full Foundation and products. This authorizes the local hub redesign; it does not change company identity, product scope, lifecycle investment decisions or general-availability status.

The existing headline **Tu próximo paso, online.** remains. The current interim V + dot lockup remains. A new permanent slogan, logo or brand architecture is not approved here.

## Evidence

Normative sources: approved VOLTA Foundation, Principles, Strategy, Brand, Visual Foundation, Design, Product, Engineering, Security, Delivery, Agent and Documentation systems.

Product sources reviewed: `docs/PRODUCT.md` in `volta-store-template`, `volta-booking`, `volta-portfolio`, `volta-shield` and `volta-bridge`, plus `volta-foundation/registry/portfolio.yaml`.

Portfolio's newer `src/lib/config.ts`, `docs/auth-production-setup.md` and `docs/production-web-presence.md` establish `https://www.voltaportfolio.app` as its operational canonical URL. This supersedes the old destination in Corporate/registry presentation without changing portfolio classification.

The prior Corporate copy underrepresented the company, omitted current development context and retained pre-Foundation typography/colors. There is no user-study or conversion-uplift evidence attached to this redesign.

## Decision

Keep five primary chapters: company introduction and goal routing; three product stories; the company approach; a separate development/exploration chapter; and getting started.

Use Instrument Sans, semantic colors anchored on `#00E878`, spacious neutral composition and restrained Shift geometry. Use a purposeful dark chapter rather than making the whole identity neon-on-black. Recompose navigation and product stories for mobile.

Available product stories have an audience, concrete outcome, short supported capability list and one authoritative external action. Store closes the catalog journey through WhatsApp. Booking remains **En evolución**. Portfolio includes professional and technical/academic work.

Shield and Bridge are represented as **En desarrollo**, Automate as **En exploración**. No external availability CTA, fake waitlist, launch date, compliance claim or employment promise is added.

Illustrative product compositions explain real flow concepts. They are labeled examples, not screenshots or customer proof. Keep the page server-rendered and interactions narrow.

## Alternatives and consequences

A generic feature-card grid would flatten both product personality and maturity. A single abstract technology hero would be less concrete. A large animated ecosystem map would add runtime/interaction cost without demonstrated comprehension value.

The chosen design gives products distinct expression inside one company, preserves independent adoption and limits developer/visitor complexity. Copy still requires reconciliation after actual product changes. The development chapter should be reconsidered if visitors mistake it for availability.

## Verification and release

Require content-contract checks, lint, production build/TypeScript and actual browser verification of desktop/mobile composition, contrast, navigation, disclosures, product routing, analytics and metadata. Review screenshots; automated passing checks alone do not certify accessibility or design quality.

Use isolated work and consolidate one final production deployment. GitHub checks/PRs and Vercel/public-domain verification are the release evidence, not this record.
