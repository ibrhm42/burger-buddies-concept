---
document_id: KOS-TENANT-001
title: "KitchenOS Multi-Tenancy and Identity Architecture"
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

# KitchenOS Multi-Tenancy and Identity Architecture

## Baseline tenancy

Early/growth KitchenOS SHOULD use shared application, shared database cluster/schema, tenant key on every tenant-owned row, database row policies where supported, tenant-scoped repositories, and tenant-aware caches/queues/search/storage/analytics.

Higher-isolation enterprise tiers MAY use dedicated schema/database/cluster/region.

## Tenant resolution

Supported: authenticated membership, verified custom domain, KitchenOS subdomain, signed service context, registered device.

`KOS-TENANT-RES-001` — Hostnames MUST be normalized and matched only to verified active domains.

`KOS-TENANT-RES-002` — Client-supplied tenant ID MUST NOT be trusted without authorization.

`KOS-TENANT-RES-003` — Background jobs MUST carry immutable tenant context.

## Isolation

Every component isolates relational rows, object keys, cache keys, search, queues, customer-visible logs/traces, analytics, exports, backups, rate limits, and credentials.

`KOS-TENANT-ISO-001` — Unscoped repository methods for tenant-owned data are prohibited outside audited platform operations.

`KOS-TENANT-ISO-002` — Isolation tests MUST attempt horizontal access with valid identities and guessed IDs.

`KOS-TENANT-ISO-003` — Support tooling MUST enforce selected tenant context and persistent impersonation indication.

`KOS-TENANT-ISO-004` — Enterprise restore promises require tenant-level restore without overwriting unrelated tenants.

## Identity model

Separate person, user, external identity, membership, employee, permission role, job role, grant, session, and device identity. One person may have memberships in several tenants.

## Authentication

KitchenOS SHOULD align risk decisions with NIST SP 800-63-4 [STD-004].

- phishing-resistant MFA supported for privileged users;
- MFA required for platform administrators;
- recovery as secure as login;
- approved password hashing/breach checks;
- revocable/rotated sessions;
- step-up for sensitive actions;
- SSO/OIDC/SAML for contracted enterprise.

## Authorization

Use RBAC plus scope/attributes:

- tenant;
- organization/brand/location;
- department;
- module/action;
- data sensitivity;
- actor role;
- employment status;
- device trust;
- time/shift where justified;
- entitlement.

Example:

```text
permission: orders.refund
scope: location:KHI-01
limit: amount <= manager_refund_limit
condition: step_up_auth=true
```

## Default role templates

Owner, group admin, franchise admin, regional manager, branch manager, cashier, server, host, kitchen, expeditor, dispatcher, driver, inventory manager, purchaser, accountant, marketing, auditor.

Templates are editable without changing permission semantics.

## Separation of duties

Review combinations such as vendor creation/invoice approval, schedule creation/own timecard approval, refund/reconciliation, price change/publication, payout/credential changes, fiscal config/reversal, and support impersonation/audit deletion.

## Support impersonation

Requires support permission, ticket/reason, target, duration, persistent banner, prohibited high-risk actions by default, complete audit, optional tenant approval, and break-glass review.

## Device identity

POS/KDS devices need registered ID, tenant/location, certificate/credential, capability profile, version, health, revocation, last-seen, configuration version. User login does not replace device trust for offline POS.

## Lifecycle

Invite: authorized inviter, verified contact, clear scope, expiry, no reuse.

Join: identity verified, terms/privacy, MFA where privileged, session.

Change: audited scope/role, session re-evaluation.

Leave: membership disabled, sessions revoked, devices reviewed, historical employee records retained according to policy.

## Enterprise

SSO/SCIM, custom-role governance, IP/device policy, residency, customer-managed keys, delegated admin, access review, audit export, JIT provisioning, contractual assurance are plan-entitled and tested before sale.
