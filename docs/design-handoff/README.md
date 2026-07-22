# Burger Buddies Codex Design Handoff

**Status:** Approved implementation handoff  
**Owner:** Ibrahim  
**Approved visual direction:** Premium Dark Ordering  
**Primary visual reference:** Emmanuel Aziabunam dark food-delivery concept  
**Implementation agent:** Codex  
**Last updated:** 2026-07-22

## Purpose

This directory translates one approved visual reference into a complete, original Burger Buddies ordering product that Codex can implement without inventing major UX or visual decisions.

The reference shows a polished dark homepage, product-detail screen, and cart. It does not show the complete Burger Buddies flow. These documents define the missing menu, product customization, checkout form, WhatsApp preview, branch selector, empty states, validation, responsive behavior, content rules, and visual-QA process.

## Read in this order

1. [`DESIGN-SOURCE-OF-TRUTH.md`](./DESIGN-SOURCE-OF-TRUTH.md) — authority, approved direction, and what may or may not be copied.
2. [`reference-analysis.md`](./reference-analysis.md) — detailed extraction of the reference's visual and UX language.
3. [`design-tokens.md`](./design-tokens.md) — colors, typography, spacing, radii, shadows, motion, and layout tokens.
4. [`component-specifications.md`](./component-specifications.md) — required component anatomy and variants.
5. [`responsive-behavior.md`](./responsive-behavior.md) — mobile, tablet, and desktop transformations.
6. [`interaction-specifications.md`](./interaction-specifications.md) — branch, search, product options, cart, form, dialog, and WhatsApp behavior.
7. [`content-map.md`](./content-map.md) — page content, labels, sample data, and prohibited claims.
8. [`implementation-plan.md`](./implementation-plan.md) — phased Codex execution and phase gates.
9. [`visual-qa-checklist.md`](./visual-qa-checklist.md) — mandatory rendered review and acceptance checklist.
10. [`CODEX-START-PROMPT.md`](./CODEX-START-PROMPT.md) — first prompt to run in Codex.

## Reference asset

The approved visual reference is stored at:

```text
public/references/ui/premium-dark-ordering-reference.svg
```

It is an SVG wrapper containing the supplied reference image. Treat it as a visual north star, not production artwork.

## Product summary

The demo is a single-brand, direct-ordering website for Burger Buddies. It is not a marketplace.

Primary routes:

```text
/
/menu
/menu/[productSlug]
/cart
```

Primary journey:

```text
Confirm branch → browse/search → customize → cart → customer details → WhatsApp preview
```

## Core implementation principle

> The reference owns visual intent. The handoff owns Burger Buddies adaptation. Codex owns implementation quality.

## Non-negotiable constraints

- Mobile-first but intentionally adapted for desktop.
- Burger Buddies identity, products, Mirpurkhas context, and PKR prices.
- WhatsApp remains the final handoff.
- Demo mode prevents accidental restaurant contact.
- No marketplace ratings, distance, delivery-time guarantees, profiles, payments, or order history.
- No invented operational claims.
- No production backend, authentication, admin dashboard, or payment system.
- Rendered screenshot review is required before visual-completion claims.

## Definition of a successful handoff

Codex should be able to answer all of these questions from the repository:

- What should every screen look and feel like?
- What must be different from the reference?
- What components and states are required?
- How should layouts transform across breakpoints?
- What interactions and validation rules apply?
- What content is verified, demo, or prohibited?
- What order should implementation follow?
- How will visual quality be judged?
