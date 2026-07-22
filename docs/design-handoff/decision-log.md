# Design Decision Log

## DD-001 — Premium Dark Ordering direction approved

**Decision:** Use a premium dark, food-led ordering experience rather than a poster-like or flame-heavy interface.

**Reason:** The demo must persuade the restaurant owner through polish, usability, and clear ordering value. The chosen direction feels more mature and credible while remaining compatible with Burger Buddies' black, orange, red, and flame-oriented identity.

## DD-002 — Emmanuel Aziabunam reference selected

**Decision:** Use the supplied Emmanuel Aziabunam mobile food-delivery image as the visual north star.

**Reason:** It demonstrates stronger spacing discipline, image treatment, surface hierarchy, product-detail composition, cart clarity, and mobile polish than the initial Stitch-generated screens.

**Constraint:** The final result must be original and adapted to Burger Buddies. It must not copy marketplace brands, ratings, delivery metrics, exact imagery, or exact composition.

## DD-003 — Stitch screens are no longer the primary target

**Decision:** Earlier Stitch-generated homepage/menu screens may be retained as secondary exploration history but do not control implementation.

**Reason:** Ibrahim explicitly prefers the Emmanuel reference.

**Implementation consequence:** When earlier visual documentation conflicts with `docs/design-handoff/` or the approved reference, follow the new handoff.

## DD-004 — Codex implements directly from the reference and handoff

**Decision:** Do not perform another full Stitch exploration before implementation.

**Reason:** The approved reference is sufficient to define the design language, while these handoff documents define the missing screens and responsive behavior.

## DD-005 — Static visual composition before complex functionality

**Decision:** Codex should first establish tokens, components, and static screen composition, then add state and ordering behavior.

**Reason:** Visual quality is commercially critical, and implementing all logic first can lock the application into weak composition that never receives a proper design pass.

## DD-006 — WhatsApp-first, not marketplace checkout

**Decision:** The experience prepares a structured order and hands it to WhatsApp.

**Reason:** This preserves Burger Buddies' current workflow and reduces operational resistance.

**Excluded reference concepts:** ratings, distance, delivery-time metrics, profiles, payments, order history, vouchers, and multi-restaurant discovery.

## DD-007 — Demo safety is mandatory

**Decision:** Development and presentation default to demo mode.

**Reason:** The concept must not accidentally send or open an order to the restaurant.

## DD-008 — Mobile reference, original desktop adaptation

**Decision:** The supplied image defines mobile quality, but desktop must be designed specifically rather than enlarged from mobile.

**Desktop patterns:** split hero, product grid, two-column product details, two-column cart/summary, centered dialogs, desktop header.
