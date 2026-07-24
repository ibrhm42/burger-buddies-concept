---
document_id: KOS-SEC-001
title: "KitchenOS Security, Privacy, and Threat Model"
product: "KitchenOS"
version: "1.0.0"
status: "foundational-approved"
authority: "normative"
owner: "Ibrahim"
applies_to: "KitchenOS target product"
last_updated: "2026-07-24"
depends_on:
  - KOS-GOV-001
  - KOS-ARCH-001
  - KOS-TENANT-001
change_policy: "Changes require an explicit decision record and updates to affected dependent documents."
---

# KitchenOS Security, Privacy, and Threat Model

## Security objectives

Protect confidentiality of tenant, guest, staff, finance, and credentials; integrity of orders/payments/fiscal/stock/shifts/audit; availability of ordering/POS; tenant isolation; traceability; safe external integration.

KitchenOS SHOULD use OWASP ASVS 5.0 [STD-002], OWASP API Security Top 10 [STD-003], and NIST SSDF [STD-006] as reference baselines.

## Data classification

- **Public:** published menus/location/marketing.
- **Internal:** operational settings and non-sensitive documentation.
- **Confidential:** orders, contact details, staff profiles, supplier pricing, tenant config, notes.
- **Restricted:** auth secrets, API credentials, payment tokens, fiscal credentials, payroll, sensitive guest notes, security events.

`KOS-SEC-DATA-001` — Restricted data MUST be encrypted in transit/at rest and excluded from ordinary logs.

`KOS-SEC-DATA-002` — Classification MUST propagate to exports/events/analytics.

## Trust boundaries

Public browser; authenticated web/mobile; registered POS/KDS; edge/local DB; cloud; operator console; payment/messaging/POS/delivery/fiscal providers; analytics; object storage; CI/CD.

## Threat scenarios and controls

### Tenant escape
Object IDs, filters, exports, cache, search.

Controls: row policies, scoped repositories, object authorization, negative tests, tenant-aware cache/storage, audit/anomaly.

### Privilege escalation
Low-privilege user attempts refunds, exports, price publication, role changes.

Controls: deny-by-default, scope, step-up, separation of duties, server enforcement, approval/audit.

### Account takeover
MFA, secure recovery, breach checks, session rotation/revocation, device/session visibility, risk alerts.

### Webhook spoof/replay
Signature, timestamp, nonce/event ID, raw body, idempotency, secret rotation.

### Duplicate order/payment/fiscal effect
Idempotency, unique constraints, inbox/outbox, external mapping, reconciliation, exception queue.

### Refund/discount/void abuse
Permission/amount thresholds, reasons, manager approval, immutable audit, anomaly reporting.

### Malicious files/imports
Type/size restrictions, malware scan, image re-encoding, CSV formula neutralization, isolated processing, signed URLs.

### Unsafe external API consumption
Schema validation, egress allowlist, timeouts, resource limits, SSRF controls, circuit breakers, provider inventory.

### Offline device theft/tamper
Encrypted local store, protected device credential, least data, remote revoke, signed updates, auto-lock, audit.

### Insider/support abuse
Just-in-time access, ticket/reason, restricted impersonation, dual-approved break-glass, immutable logs, review.

### Denial of service/business-flow abuse
Tenant/user/IP rate limits, queue capacity, bot protection, order abuse rules, circuit breakers, cost alerts.

## Privacy engineering

`KOS-PRIV-001` — Each personal field MUST have purpose, lawful basis where applicable, retention, access role, deletion behavior.

`KOS-PRIV-002` — Marketing consent MUST be separate from service communication.

`KOS-PRIV-003` — Allergy/preferences MUST not be exposed beyond need.

`KOS-PRIV-004` — Free-form notes SHOULD be minimized and controlled.

`KOS-PRIV-005` — Export/deletion workflows MUST include downstream systems or disclose exceptions.

Capabilities: notices, preference center, access/export, correction, deletion/anonymization, retention, processor register, breach response, regional transfers, purpose limitation/minimization consistent with GDPR principles where applicable [STD-007].

## Payment boundary

Minimize PCI scope: provider-hosted fields/SDKs, no CVV, avoid raw PAN, tokenization, separate secrets, provider references only, responsibility matrix. Any cardholder-data module requires assessment against PCI DSS 4.0.1 [STD-005].

## Secrets

Managed storage, environment scope, never committed/logged, rotation, owner/review, production separation, least privilege.

## Audit

Capture actor/effective actor, tenant/location, action, target, semantic before/after, reason, time, source/device, correlation, approval, result. High-risk logs SHOULD be tamper-evident and protected.

## Secure development

Threat model, dependency/license review, secret scan, static analysis, review, security tests, infrastructure review, SBOM, build provenance, vulnerability SLA, penetration test before high-risk GA, incident feedback.

## Module gates

- Storefront: validation, abuse, privacy, redirects, tenancy.
- Orders/KDS: idempotency, state auth, event integrity, resilience.
- POS: device identity, local encryption, signed updates, cash/refund permissions.
- Finance: immutable journal, separation, exports, close locks.
- Connect: credentials, webhook verification, SSRF, mapping isolation, replay.

## Incident classes

- SEV-1: cross-tenant exposure, payment/fiscal corruption, broad outage, active compromise.
- SEV-2: major tenant outage, material integrity issue, connector-wide failure.
- SEV-3: localized degradation with workaround.
- SEV-4: minor defect.

## Risk acceptance

Requires owner, scope, severity, compensating controls, expiry, re-review. AI agents cannot accept risk.
