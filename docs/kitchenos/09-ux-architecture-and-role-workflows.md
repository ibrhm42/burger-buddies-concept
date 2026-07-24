---
document_id: KOS-UX-001
title: "KitchenOS UX Architecture and Role Workflows"
product: "KitchenOS"
version: "1.0.0"
status: "foundational-approved"
authority: "normative-research-grounded"
owner: "Ibrahim"
applies_to: "All KitchenOS interfaces"
last_updated: "2026-07-24"
depends_on:
  - KOS-GOV-001
  - KOS-DOM-001
  - KOS-ARCH-001
  - KOS-TENANT-001
change_policy: "Changes require an explicit decision record and updates to affected dependent documents."
---

# KitchenOS UX Architecture and Role Workflows

## 1. Research objective and use

KitchenOS should adopt proven restaurant interaction patterns while remaining an original product.

Official product research covered Toast, Square, Oracle Simphony, Lightspeed, OpenTable, SevenRooms, TouchBistro, Otter, Deliverect, Olo, MarketMan, MarginEdge, 7shifts, Restaurant365, and Moneypex. Evidence is recorded in `research/source-register.md`.

No proprietary screen, wording, icon set, layout, or asset may be copied. Research derives principles and workflow expectations; KitchenOS must validate its own implementation.

## 2. Research conclusions

### Service mode shapes POS

Lightspeed separates Quick Service from Table Service and removes inappropriate steps/features for pay-at-order [UX-005]. Oracle supports table service, quick service, fast casual, bar, drive-through, concessions, and retail [UX-003].

**Decision:** Cashier workspaces must be service-mode specific. A basic takeaway counter should not carry table maps, course firing, and bar-tab complexity.

### KDS is a timed production queue

Toast and Square emphasize real-time POS-to-kitchen flow, station routing, ticket layouts, timers, alerts, and expeditor oversight [UX-001][UX-002].

**Decision:** age, priority, source, fulfilment, modifiers, allergens, and station ownership are glanceable first-class information.

### Order aggregation is queue-first

Otter presents incoming orders as a stacked chronological queue with simple advancement; Deliverect centralizes channels, order state, menus, and stock [UX-009][UX-010].

**Decision:** Order Hub starts with work needing attention, not analytics.

### Host work is spatial

OpenTable, SevenRooms, and TouchBistro use floor plans, table states, reservations/waitlist, assignment, sections, guest notes, and turn context [UX-006][UX-007][UX-008].

**Decision:** seating cannot be reduced to a generic reservation table.

### Physical back-office work is mobile

MarketMan and MarginEdge emphasize mobile inventory, receiving, invoice capture, waste, and approval [UX-012][UX-013].

**Decision:** capture/count is mobile-first; configuration/reconciliation is desktop-first.

### Workforce uses draft/publish and scoped visibility

7shifts distinguishes draft/published schedules, publishes by location/department, and exposes live roster states [UX-014][UX-015].

**Decision:** schedule edits must not silently become employee commitments.

### Enterprise back office is exception-driven

Restaurant365 connects finance, inventory, workforce, and payroll with location/consolidated visibility [UX-016].

**Decision:** owners/finance teams need exceptions, variance, and close state more than decorative KPI cards.

## 3. Universal requirements

`KOS-UX-001` — Each primary role MUST have a role-native landing workspace.

`KOS-UX-002` — Operational workspaces MUST prioritize next action, age, risk, and exception.

`KOS-UX-003` — Status MUST use text/icon plus color; color alone is prohibited.

`KOS-UX-004` — Financial, destructive, or guest-commitment actions MUST show consequence and require appropriate confirmation/approval.

`KOS-UX-005` — Interfaces MUST distinguish local, queued, submitted, received, accepted, completed, failed, and stale.

`KOS-UX-006` — Frequent tasks MUST be directly reachable; configuration uses progressive disclosure.

`KOS-UX-007` — Location, business date, service mode, and channel context remain visible when they affect meaning.

`KOS-UX-008` — Desktop is not a stretched phone; mobile is not a compressed desktop grid.

`KOS-UX-009` — Drag interactions MUST have accessible alternatives per WCAG 2.2 [STD-001].

`KOS-UX-010` — Web surfaces target WCAG 2.2 AA [STD-001].

`KOS-UX-011` — Optimistic UI MUST NOT be used when it could falsely claim payment, order acceptance, fiscal submission, or irreversible completion.

`KOS-UX-012` — Every failed critical action MUST offer recovery, escalation, or an explicit explanation that recovery is unavailable.

## 4. Information architecture

### Global groups

- Today
- Orders
- Kitchen
- Menu
- Guests
- Tables / Reservations
- Delivery
- Stock / Purchasing
- Team
- Finance
- Insights
- Integrations
- Settings

Navigation is entitlement/permission aware. Hidden navigation is not authorization.

### Persistent context

For multi-location roles show:

- tenant/brand;
- location or all locations;
- business date/range;
- service mode;
- connection/freshness;
- acting-as/support state.

Context switching must disclose unsaved work and location-specific consequences.

## 5. Visual and interaction system

### Density by workspace

- Storefront: comfortable and visual.
- POS: touch-dense and fast.
- Order Hub: queue-dense with detail pane.
- KDS: distance-readable and glanceable.
- Finance/analytics: information-dense and drillable.
- Mobile operations: one dominant task per screen.

### Surfaces

Use a small elevation vocabulary: workspace, primary panel/ticket, selected/focused surface, transient overlay. Avoid nested cards and decorative glass effects.

### Operational semantics

Theme colors may vary, but semantic states remain stable and accessible: neutral/new, attention, warning/aging, critical/failed, success/completed, offline/stale, selected/focus. Every semantic color has text/icon.

### Motion

Fast, functional, reduced-motion aware. Motion may reinforce state/location but must not delay service or carry meaning alone.

## 6. Shared workflow components

- context bar;
- command/search palette;
- filters with active count;
- queue/list;
- detail pane;
- event timeline;
- status/age;
- exception banner;
- availability control;
- item/modifier tree;
- quantity/keypad;
- approval sheet;
- audit drawer;
- sync/offline indicator;
- empty/no-work state;
- recovery action;
- floor-plan canvas;
- schedule grid;
- count sheet;
- reconciliation table.

Each component defines keyboard, touch, loading, error, empty, offline, stale, and permission-denied behavior.

## 7. Customer ordering

### Journey

```text
Open restaurant
→ resolve location/service availability
→ browse/search
→ configure item
→ cart
→ fulfilment/time
→ customer/contact
→ payment or approved handoff
→ submit
→ truthful confirmation
→ tracking/reorder
```

### Requirements

- Guest checkout by default.
- Validate location/fulfilment early.
- Required modifiers clearly grouped.
- Price updates immediately and accessibly.
- Unavailable items/options not selectable.
- Preserve cart/input through recoverable failure.
- Ask only necessary customer fields.
- Account creation optional/post-value.
- Order confirmation states exact status.
- Scheduled constraints explicit.
- No guaranteed timing until authoritative acceptance/capacity.
- Support keyboard, screen reader, zoom, reflow, orientation.

### Closed state

Show reason, next availability where configured, scheduled ordering availability, whether browsing remains available, and accurate alternate locations only.

## 8. QSR cashier POS

### Layout

- location/revenue center/service mode;
- category/product grid and search;
- persistent check;
- order type/customer context;
- connectivity/device state;
- primary action/tender.

### Flow

```text
new check
→ fulfilment/service
→ items
→ modifiers
→ review
→ tender
→ receipt
→ next check
```

### Requirements

- programmable grid and fast search;
- contextual modifier sheet;
- persistent totals/check;
- large keypad/touch controls;
- quick repeat/common modifier actions;
- visible held checks;
- immediate 86 state;
- payment screen separates due/tender/change/status;
- manager approval in context;
- persistent offline state;
- duplicate payment prevention;
- clear reset for next order.

### Mode differences

- QSR: pay at order, minimal steps.
- Table: tables/seats/courses/check lifecycle.
- Bar: tabs, repeated items, preauth where supported.
- Drive-through: lane/vehicle/handoff.
- Retail-like: barcode/quantity/return.

## 9. Server/tableside

```text
my section
→ table
→ seats/check/notes
→ course/items
→ hold/fire/send
→ monitor kitchen
→ requests
→ split/settle
→ close table
```

- Section/table state is glanceable.
- Table/seat/course/check hierarchy explicit.
- Allergy alert requires acknowledgement.
- Draft survives connection loss.
- Items show local draft, sent, acknowledged.
- Splits preview by seat/item/amount.
- Transfer identifies destination and audit.

## 10. Host, reservation, waitlist

### Workspace

Floor plan + reservation/waitlist rail + shift summary + party detail + table/server capacity.

### Flow

```text
review shift
→ reservation/walk-in
→ quote wait or assign
→ seat
→ monitor
→ notify
→ clear/turn
```

- Spatial floor plan.
- Non-drag assignment alternative.
- Party size/accessibility needs.
- Sensitive guest notes only to authorized staff.
- Predicted turn labeled estimate.
- Recommendations explain constraints.
- Wait quote adjustable.
- message delivery status visible;
- server load/section included;
- no-show/cancel reason/policy;
- temporary closures/merged tables.

## 11. Order Hub

### Layout

Primary queue by state/urgency, ticket list, detail panel, channel pause/busy/capacity controls, exception queue.

### Flow

```text
new alert
→ inspect availability/payment
→ accept/reject
→ prep estimate
→ route
→ monitor
→ resolve change/failure
→ complete
```

Ticket shows channel/reference, payment, fulfilment/time, customer note, modifiers, mapping/integration health. Rejection requires reason. Bulk actions only when safe. Channel pause has scope/duration. Manual fallback is recorded. Timeline is chronological. Auto-accept is prohibited when prerequisites are uncertain.

## 12. Kitchen worker

Ticket card:

- order number/source/fulfilment;
- age/target;
- priority;
- quantity/items;
- modifier emphasis;
- removals/substitutions;
- allergens;
- course/hold/fire;
- station.

Actions: start, item complete, ticket complete/bump, recall, hold, escalate unavailable, transfer station, full order.

Requirements: glove-friendly targets, distance readability, minimal inner scrolling, oldest/late priority, configurable sound, no color-only timing, recover accidental bump, station and expeditor views separate.

## 13. Expeditor

See all station progress, missing/late components, packing/plating, ready control, ticket recall, delay communication. Ready is blocked if required items incomplete unless authorized override is audited.

## 14. Branch manager

Today workspace prioritizes orders awaiting action, failed connectors, unavailable menu items, kitchen delay, late/absent/overtime staff, cash/shift exceptions, stock risk, guest escalation.

Manager can pause channel, change capacity/prep time, 86 item, approve refund/void, reassign, resolve punch, handle delivery, acknowledge alert.

## 15. Inventory counter

```text
choose location/session
→ follow storage sequence
→ scan/search
→ enter unit quantity
→ continuous save
→ flag unknown/damaged
→ review variance
→ submit
```

Configurable storage order, visible count/base units, calculator, partial/offline save, multi-user assignment/locking, blind count, recount, photo/note, submit/approve separation.

## 16. Receiver and purchaser

Receiver: identify PO/vendor, capture delivery, compare quantities, substitutions/damage/temperature where required, attach invoice, partial receipt, discrepancy/credit, post receipt.

Purchaser: suggestion basis visible, budget/par/cutoff, supplier comparison, thresholds, acknowledgement. No silent substitution.

## 17. Scheduler/manager

```text
location/department
→ forecast/availability/time off
→ draft
→ resolve conflicts
→ labor cost
→ publish
→ notify
```

- Draft/published distinct.
- Draft invisible to employees.
- Publish by location/department.
- Warn overtime/availability/compliance/coverage.
- Copy/template shows date/location.
- Employee scope enforced.
- Mobile live roster emphasizes on/break/late/upcoming/out.
- Changes traceable.

## 18. Employee

Mobile-first: next shift, week, availability, time off, swap, clock/break, announcements/tasks, pay/tips where enabled. Every request shows submitted/approved/rejected/pending.

## 19. Finance/accountant

Workspace: close checklist, unreconciled sales/payments, unmatched invoices, cash variance, fiscal exceptions, period status, entity/location filters.

```text
receive events
→ validate mapping
→ reconcile
→ investigate
→ post
→ review
→ close
```

Dense keyboard-operable tables; drill to source; batch preview/totals; approval/separation; period locks; audit/export.

## 20. Owner/enterprise

Exceptions first, comparable location KPIs, freshness, trend/target, drill-down. Navigation supports enterprise → brand → region → location → transaction. No mixed currency or inconsistent metrics.

## 21. Integration administrator

Connector catalog, capability matrix, credentials, mappings, sandbox test, last sync, failures, webhooks, replay consequence, version/deprecation, support ownership. Activation blocked until mandatory mappings/tests pass.

## 22. KitchenOS support

Tenant search with reason, health, deployments/incidents, connector/device, scoped impersonation, audit, failed-job replay. Repair through domain commands, not unrestricted DB editing.

## 23. Platform allocation

| Workflow | Primary | Secondary |
|---|---|---|
| Customer ordering | responsive web | PWA/native later |
| Owner/manager | web | PWA/mobile |
| Order Hub | tablet/desktop PWA | Android |
| KDS | landscape display | Android/Windows shell |
| POS | Windows native | Android POS later |
| Waiter | Android handheld | iOS later |
| Host | tablet | desktop |
| Inventory count | Android/mobile web | iOS |
| Purchasing/finance | desktop web | mobile approval |
| Driver | Android | iOS later |
| Operator console | desktop web | limited mobile |

## 24. Accessibility

Target WCAG 2.2 AA [STD-001]: semantics, keyboard, visible/unobscured focus, target size, drag alternatives, reflow/zoom, labels/errors, consistent help, accessible authentication, no color-only meaning, reduced motion, async announcements, high-contrast operational modes.

Operational targets SHOULD normally be at least 44×44 CSS pixels; WCAG 2.2 minimum/spacing rules are the conformance floor.

## 25. Usability evidence

Each critical workflow requires real/qualified role participants, novice/experienced users, peak-service simulation, error/recovery/offline scenarios, accessibility review, real device/environment, time-on-task, completion, critical-error rate, assistance, and requirement-linked evidence.

KitchenOS MUST NOT claim “best tested UX” because it resembles a market leader. Its own implementation must be tested.
