# Codex Start Prompt

Copy the prompt below into Codex for the first handover task.

---

You are taking over implementation of the Burger Buddies Ordering Concept.

Read `AGENTS.md` and every file in the required reading order before making application changes.

Inspect the approved visual reference:

`public/references/ui/premium-dark-ordering-reference.svg`

The reference is the visual north star for polish, dark surface hierarchy, spacing, food-image prominence, rounded controls, mobile navigation, product-detail composition, and cart presentation.

It is not a layout to copy literally. Build an original, single-brand Burger Buddies ordering experience.

Important adaptations:

- This is Burger Buddies, not a multi-restaurant marketplace.
- Mirpurkhas is the primary demonstrated branch.
- Use Pakistani rupees.
- Use Burger Buddies products and branding.
- Final checkout prepares a structured WhatsApp order.
- Do not include marketplace restaurant names, ratings, distance, guaranteed delivery time, profile, payments, order history, or voucher functionality.
- Do not invent business claims, current prices, opening hours, delivery areas, or delivery speed.
- Preserve demo-mode safeguards and the unofficial-concept disclaimer.

Do not begin broad implementation immediately.

First complete Phase 0 from `docs/design-handoff/implementation-plan.md` and report:

1. Current repository and application structure.
2. The visual characteristics you extracted from the approved reference.
3. How the reference will be adapted to Burger Buddies.
4. Missing or weak assets that may affect quality.
5. Proposed Next.js route, component, provider, data, and utility architecture.
6. Exact files you expect to add or modify in Phase 1.
7. Visual and technical risks.
8. Any conflict you found among repository documents and how the source-of-truth hierarchy resolves it.
9. The screenshot and review plan.
10. A concise Phase 1 implementation plan.

Do not change application files until the Phase 0 interpretation has been reviewed and approved.

When implementation begins, follow the phase gates. Establish the design system and static visual composition before adding complex cart and checkout behavior. Render and inspect the UI at the required viewport sizes before claiming polish.

---

## Suggested Phase 1 continuation prompt

After approving the Phase 0 report:

```text
Proceed with Phase 1 only.

Implement the approved premium-dark design foundation described in the handoff:

- semantic theme tokens
- Hanken Grotesk interface typography and restrained display accent
- global shell
- mobile and desktop headers
- mobile bottom navigation
- branch selector primitive
- search and category controls
- button and icon-button variants
- promotion card
- discovery and menu product-card variants
- quantity selector
- form controls
- dialog/bottom-sheet primitive
- empty-state and disclaimer components

Create a focused component-review surface only if it helps rendered visual review.
Do not implement the complete app logic yet.

Run the app, capture the design foundation at 390 × 844 and 1440 × 1000, inspect the rendered result, correct high-impact visual issues, run lint/build where applicable, and report the results.
```

## Suggested static-screen continuation prompt

```text
Proceed with Phase 2 only.

Using the approved design foundation, build static but responsive visual compositions for:

- homepage
- menu
- representative configurable product detail
- cart with items and customer details
- WhatsApp preview
- branch selector
- empty cart
- no search results
- required-option validation

Use typed local demo content, but do not add complex cart persistence or checkout behavior yet.

Capture and review the primary routes at 390 × 844 and 1440 × 1000. Correct composition, food-image treatment, spacing, typography, surface hierarchy, action prominence, and desktop adaptation before reporting completion.
```
