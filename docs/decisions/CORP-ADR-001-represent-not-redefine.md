# CORP-ADR-001 — Corporate represents, not redefines, VOLTA

- **Status:** ACCEPTED
- **Class:** Product / governance

## Context

A fast-moving ecosystem risks maintaining contradictory product definitions in marketing code, product repos and conversations.

## Decision

The corporate site is a presentation/routing layer. Global doctrine is sourced from `volta-os`; product capabilities and state are sourced from each Product OS/current implementation.

## Consequences

- Corporate changes should check authoritative sources before changing strategic claims.
- Product repos remain independently operable.
- The corporate site may summarize, but should not silently create product commitments.
