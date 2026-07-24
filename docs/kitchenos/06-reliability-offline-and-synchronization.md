---
document_id: KOS-REL-001
title: "KitchenOS Reliability, Offline, and Synchronization Architecture"
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
  - KOS-ARCH-001
change_policy: "Changes require an explicit decision record and updates to affected dependent documents."
---

# KitchenOS Reliability, Offline, and Synchronization Architecture

## Principles

`KOS-REL-001` — Critical workflows MUST define normal, degraded, offline, recovery, and irrecoverable states.

`KOS-REL-002` — Failures MUST be visible to responsible users and operations.

`KOS-REL-003` — Retries MUST be safe.

`KOS-REL-004` — UI MUST not claim success until the authoritative boundary confirms the relevant state.

`KOS-REL-005` — Recovery MUST be tested.

## Proposed SLOs

| Journey | Pilot | Mature |
|---|---:|---:|
| Storefront monthly availability | 99.5% | 99.95% |
| Order submission availability | 99.5% | 99.95% |
| Order Hub/KDS | 99.5% | 99.95% |
| Admin/dashboard | 99.0% | 99.9% |
| p95 storefront read | <800 ms | <400 ms |
| p95 order command excluding provider | <1.5 s | <750 ms |
| accepted event to KDS | <3 s | <1 s |

These are design targets, not contractual until approved in a service plan.

## Criticality

- Tier 0: identity/tenancy, orders, payments, fiscal, POS local transaction.
- Tier 1: KDS, menu availability, delivery, stock movements.
- Tier 2: reports, campaigns, analytics, exports.
- Tier 3: convenience/experimental AI.

Tier 2/3 failures SHOULD not block Tier 0.

## Idempotency

Retriable commands require key, tenant/operation scope, request fingerprint, persisted result, uniqueness, operation-appropriate expiry, and conflict if same key has different payload.

Required for order, payment/refund, fiscal, external POS, import finalization, webhook processing, and harmful duplicate notifications.

## Outbox/inbox

State and outbox event SHOULD commit atomically. Dispatcher claims safely, publishes, records attempts, backs off, dead-letters, exposes lag.

Consumer persists event/provider ID before or atomically with effect.

`KOS-REL-MSG-001` — Do not claim exactly-once across distributed systems; use at-least-once with idempotent effects.

## Retry classification

Transient, rate-limited, auth/config, permanent validation, unknown. Use exponential backoff/jitter, provider limits, circuit breaker, max age, dead letter, operator replay, no endless hidden retries.

## Degraded modes

- Payment down: alternative tender only if tenant policy permits.
- WhatsApp unavailable: Order Hub or explicit unavailable state.
- External POS down: queue/manual confirmation per approved fallback.
- Analytics down: ordering continues.
- Image storage down: text/menu fallback.
- KDS offline: printer/alternate station.
- Fiscal down: jurisdiction-approved queue only.

Each fallback specifies responsible actor and safe customer promise.

## Offline levels

### Level 1 — resilient web
Cached shell, allowed last-known data, local draft/cart, connectivity banner, no false completion.

### Level 2 — offline-capable operations
Local active order cache, queued reversible status updates, conflict detection, sync state, restart recovery, supervisor queue.

### Level 3 — offline-first POS

```text
POS UI
→ local command handler
→ local transactional DB
→ printer/device adapters
→ durable outbox
→ sync agent
→ cloud inbox
```

Requires encrypted DB, atomic check/payment-cash state, local sequence, device identity, receipt policy, business date, durable outbox, idempotent replay, acknowledgment, visible sync, backup/recovery, revocation.

## Conflict policy

- Safe merge: non-financial preferences.
- Deterministic policy: authoritative/versioned operational state.
- Manual resolution: committed price, duplicate external order, payment/cash/fiscal mismatch, stock count overlap, published schedule conflict.

Conflict UI shows both values, provenance, timestamps, consequence.

## Clock/order

Server time is authoritative; device time is observed metadata. Use aggregate version/sequence. Business date follows location rules. Test DST.

## Backup/recovery

Define backup frequency, retention, encryption, restore tests, RPO/RTO. Proposed mature Tier 0: RPO ≤5 min, RTO ≤60 min, quarterly DR, monthly representative restore, enterprise tenant restore.

## Capacity tests

Lunch/dinner burst, promotion spike, mass menu publish, provider retry storm, large modifiers, KDS fan-out, fiscal outage/recovery, campaigns, multi-unit reporting.

## Operational UX

Critical screens show connectivity, freshness, pending count, failures, retry/fallback, last sync, and whether local/queued/received/accepted/completed.

## Evidence

Before pilot: network kill, crash during order, duplicate submit, provider timeout, webhook replay, queue backlog, restore, restart, stale menu, KDS disconnect, telemetry.

Before enterprise GA: DR, load/soak, failover where sold, runbook drill, reconciliation.
