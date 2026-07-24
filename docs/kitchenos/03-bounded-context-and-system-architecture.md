---
document_id: KOS-ARCH-001
title: "KitchenOS Bounded Context and System Architecture"
product: "KitchenOS"
version: "1.0.0"
status: "foundational-approved"
authority: "normative"
owner: "Ibrahim"
applies_to: "KitchenOS target product"
last_updated: "2026-07-24"
depends_on:
  - KOS-GOV-001
  - KOS-DOM-001
change_policy: "Changes require an explicit decision record and updates to affected dependent documents."
---

# KitchenOS Bounded Context and System Architecture

## Objective

Support rapid development without a coupled system where menu, order, stock, payment, workforce, and finance rules mutate each other unpredictably.

## Initial stance

`KOS-ARCH-001` — KitchenOS SHOULD begin as a modular monolith with independent domain modules, explicit contracts, and strong test boundaries.

`KOS-ARCH-002` — Microservice extraction requires independent scale, regulatory/data isolation, blast-radius reduction, different runtime/offline needs, independent ownership, or release cadence.

`KOS-ARCH-003` — Shared database does not permit cross-module table writes.

## Bounded contexts

| Context | Owns |
|---|---|
| Platform Control Plane | tenants, plans, entitlements, onboarding, domains, flags, operator controls |
| Identity and Access | users, memberships, roles, grants, sessions, MFA, SSO, support access |
| Organization and Locations | groups, entities, brands, locations, revenue centers, service modes |
| Catalog | products, variants, options, menus, media, allergens, publication |
| Pricing and Promotions | prices, discounts, coupons, eligibility, calculation versions |
| Ordering | carts where stored, orders, lines, state, fulfilment, timeline |
| Payments | intents, authorization, capture, tender, refund, dispute, reconciliation |
| Kitchen Operations | routing, tickets, stations, timers, bump/recall, expeditor |
| Table and Guest Service | floor plans, tables, reservations, waitlists, seating, turns |
| Delivery | zones, dispatch, courier/driver, tracking, exceptions, proof |
| Inventory and Production | stock, units, recipes, movements, counts, waste, batches |
| Purchasing and Suppliers | vendors, requisitions, POs, receiving, credits, procurement |
| Workforce | employees, assignments, schedules, publication, attendance, tips |
| Guests and Engagement | profiles, consent, loyalty, gift cards, campaigns, feedback |
| Finance | journal/ledger, reconciliation, periods, statements, royalties |
| Insights | metrics, analytical models, forecasts, governed AI |
| Integrations | connectors, connections, mappings, webhook/sync health, sandbox |
| Device and Edge | device registration, config, local identity, printers, edge sync |

## Dependency direction

```text
UI / Transport
→ Application commands and queries
→ Domain model
→ Port interfaces
→ Infrastructure adapters
```

Provider SDKs belong in adapters, not domain code.

## Contract types

- Command: state-changing request.
- Query: read request.
- Domain event: internal fact.
- Integration event: stable externally consumable fact.
- Projection: workflow-specific read model.
- Policy: reaction across aggregates.
- Saga/process manager: durable multi-step workflow with compensation.

## Data ownership

`KOS-ARCH-DATA-001` — Only owning module may write its tables.

`KOS-ARCH-DATA-002` — Reporting uses approved projections/replicas/interfaces, not ad hoc joins that bypass meaning.

`KOS-ARCH-DATA-003` — Cross-context references store IDs and required snapshots, not live object graphs.

`KOS-ARCH-DATA-004` — Migrations MUST be forward-compatible during rolling deployment where versions coexist.

## Sync versus async

Use synchronous calls for immediate authoritative validation/response. Use async events/jobs for provider calls, retries, independent consumers, long processing, notifications/reporting, and isolation from non-critical failures.

## Event envelope

Every integration event MUST contain event ID/type/version, occurred time, producer, tenant, correlation/causation IDs, actor where appropriate, aggregate ID/version, classification, payload. Consumers MUST be idempotent.

## Role-native read models

Purpose-built projections include order queue, KDS station, host floor, manager exception dashboard, count sheet, workforce roster, finance close, and enterprise benchmark. A generic entity table is not an acceptable operational UI.

## Multi-region

Initial release MAY be single region. Enterprise expansion must define home region, residency, replication, failover, latency, support access, and analytics export.

## AI boundary

AI features MUST use governed projections, show freshness, link evidence, distinguish recommendation/action, require approval for consequential changes, record model/version where material, and prevent cross-tenant context leakage.

## Fitness functions

CI SHOULD check prohibited cross-module imports, unscoped DB access, contract/event compatibility, dependency cycles, tenant ID presence, provider SDK leakage, migration safety, and dependency license/security policy.

## Extraction gate

A module may be extracted only when interfaces/ownership are stable, migration/observability/operations exist, latency/failure are modeled, contract tests pass, and rollback is possible.
