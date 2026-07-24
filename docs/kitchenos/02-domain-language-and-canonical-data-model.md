---
document_id: KOS-DOM-001
title: "KitchenOS Domain Language and Canonical Data Model"
product: "KitchenOS"
version: "1.0.0"
status: "foundational-approved"
authority: "normative"
owner: "Ibrahim"
applies_to: "KitchenOS target product"
last_updated: "2026-07-24"
depends_on:
  - KOS-GOV-001
change_policy: "Changes require an explicit decision record and updates to affected dependent documents."
---

# KitchenOS Domain Language and Canonical Data Model

## Purpose

Establish shared restaurant language so UI, APIs, storage, events, reports, and AI agents do not invent incompatible meanings.

## Organizational hierarchy

```text
Tenant
└── Organization / Restaurant Group
    ├── Legal Entity
    ├── Brand
    │   └── Concept
    ├── Region
    └── Location
        ├── Revenue Center
        ├── Fulfilment Area
        ├── Service Mode
        ├── Device
        └── Station
```

- **Tenant** — security/commercial isolation boundary.
- **Organization** — operational grouping inside a tenant.
- **Legal Entity** — contract, tax, and accounting responsibility.
- **Brand** — public restaurant identity.
- **Concept** — operational variation of a brand.
- **Location** — physical/virtual order-fulfilment site.
- **Revenue Center** — accounting/operational location subdivision.
- **Service Mode** — QSR, table service, bar, drive-through, delivery-only, catering, retail, etc.
- **Station** — kitchen/service/workforce assignment area.

`KOS-DOM-ORG-001` — Tenant, legal entity, brand, and location MUST be distinct identifiers.

`KOS-DOM-ORG-002` — Cross-location access MUST be explicit through membership scope.

## Catalog

```text
Catalog
├── Menu
│   ├── Section
│   ├── Category
│   └── Menu Item Reference
├── Product
│   ├── Variant
│   ├── Option Group
│   │   └── Option
│   ├── Recipe Reference
│   ├── Allergen
│   └── Media
├── Bundle / Combo
├── Price Rule
└── Availability Rule
```

- Product is canonical sellable identity.
- Menu item reference places a product in menu/channel context.
- Variant is a mutually selectable product form.
- Option group contains choices/constraints.
- Option is add-on, substitution, preparation choice, or component.
- Combo composes products under slot rules.
- Price rule determines current price; it is not historical paid price.
- Availability rule determines whether an item may be offered.

`KOS-DOM-CAT-001` — Orders MUST snapshot product display, tax classification, unit price, options, discounts, and fulfilment details.

`KOS-DOM-CAT-002` — Product updates MUST NOT rewrite historical order lines.

`KOS-DOM-CAT-003` — Channel pricing/availability SHOULD project canonical product identity rather than duplicate products.

## Orders and checks

- **Cart** — mutable pre-submission intent.
- **Order** — submitted commercial request.
- **Order line** — priced snapshot.
- **Fulfilment** — pickup, delivery, table, curbside, drive-through, catering.
- **Check** — POS service/billing container.
- **Service round** — items fired together.
- **Kitchen ticket** — production projection.
- **Order channel** — source.
- **Order destination** — receiving system/workflow.
- **External reference** — provider-specific ID.
- **Order event** — immutable timeline fact.

Canonical states:

```text
draft
awaiting_payment
submitted
awaiting_restaurant_confirmation
accepted
preparing
ready
out_for_delivery
ready_for_pickup
completed
```

Exceptions/terminal:

```text
rejected
cancelled
failed
partially_refunded
refunded
delivery_failed
no_show
```

`KOS-DOM-ORDER-001` — Transitions MUST use domain commands, not arbitrary field updates.

`KOS-DOM-ORDER-002` — Submitted MUST NOT be shown as accepted.

`KOS-DOM-ORDER-003` — Cancellation, rejection, and refund are separate.

`KOS-DOM-ORDER-004` — External creation MUST use idempotency and durable mapping.

`KOS-DOM-ORDER-005` — Price/tax/discount calculations MUST be reproducible from snapshots and calculation version.

## Money, payment, refund, tax

- Money: integer minor units + ISO currency.
- Payment intent: planned operation.
- Authorization: reserved funds.
- Capture: captured funds.
- Tender: cash/card/wallet/gift/store credit.
- Settlement: provider transfer/reconciliation.
- Refund: returned captured funds.
- Financial event: immutable ledger-affecting fact.
- Tax line: jurisdiction/rate/category/amount snapshot.
- Fiscal invoice: jurisdiction-defined invoice/evidence.

`KOS-DOM-FIN-001` — Floating-point money is prohibited.

`KOS-DOM-FIN-002` — Refund cannot exceed eligible captured value except through separate authorized goodwill process.

`KOS-DOM-FIN-003` — Posted financial events are reversed, not edited.

`KOS-DOM-FIN-004` — Provider status, KitchenOS status, and reconciliation status are separate.

## Inventory and purchasing

- Inventory item, unit, recipe, stock location, stock movement, count session, waste event, requisition, purchase order, goods receipt, transfer, production batch.

`KOS-DOM-STOCK-001` — Stock balance derives from or reconciles to movements; unlogged direct balance edits are prohibited.

`KOS-DOM-STOCK-002` — Unit conversions MUST be versioned/validated.

`KOS-DOM-STOCK-003` — Theoretical and actual usage remain separately reportable.

`KOS-DOM-STOCK-004` — Recipe changes MUST not break historical cost reconstruction.

## Workforce

- Person, user, employee, membership, assignment, job role, permission role, shift, punch, schedule publication, station assignment.

`KOS-DOM-WF-001` — Job roles MUST NOT automatically grant system permissions.

`KOS-DOM-WF-002` — Draft schedules remain invisible until published.

`KOS-DOM-WF-003` — Punch corrections retain original/corrected values, actor, reason, approval.

## Guests, reservations, and tables

- Guest, party, reservation, waitlist entry, visit, dining area, table, table assignment, server section, turn.

`KOS-DOM-GUEST-001` — Allergy/preference/free-form notes require sensitive-data controls and provenance.

`KOS-DOM-GUEST-002` — Reservation inventory and table state MUST remain distinct.

## Integration

- Connector, connection, mapping, sync job, webhook delivery, external event, dead-letter item, replay.

## Identity/time rules

- IDs MUST be opaque, stable, globally unique, non-semantic.
- External IDs MUST be provider/connection namespaced.
- Business date is separate from UTC timestamp.
- Store UTC; retain location timezone where interpretation depends on it.
- DST transitions must be tested.
- Historical references require archive/tombstone rather than destructive deletion where appropriate.

## Aggregate ownership

| Aggregate | Consistency boundary |
|---|---|
| Tenant | commercial/security configuration |
| Membership | actor access/scope |
| Menu publication | coherent menu version |
| Order | state/commercial snapshot |
| Payment | provider operation/status |
| Kitchen ticket | production progress |
| Count session | controlled physical count |
| Purchase order | supplier commitment |
| Schedule | draft/published plan |
| Reservation | capacity commitment |
| Subscription | entitlements/billing lifecycle |

Cross-aggregate workflows SHOULD use events and compensations rather than distributed transactions unless one bounded database transaction is safe.
