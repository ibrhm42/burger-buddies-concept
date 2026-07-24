---
document_id: KOS-AGENT-001
title: "KitchenOS AI Agent Operating Contract"
product: "KitchenOS"
version: "1.0.0"
status: "foundational-approved"
authority: "normative"
owner: "Ibrahim"
applies_to: "KitchenOS target product"
last_updated: "2026-07-24"
depends_on:
  - KOS-DOC-INDEX
  - KOS-GOV-001
change_policy: "Changes require an explicit decision record and updates to affected dependent documents."
---

# KitchenOS AI Agent Operating Contract

## Audience

This document governs implementation and documentation work performed by Codex, Claude, or another AI agent. It is intended to reduce hallucinated requirements, architecture drift, accidental scope expansion, false completion claims, and unsafe autonomous changes.

## First decision: product boundary

### Boundary A — Burger Buddies concept maintenance

Use the current demo rules. Preserve unofficial status, demo-safe WhatsApp behavior, truthful concept data, and the current release boundary.

### Boundary B — KitchenOS product work

Read this directory in the required order and identify the target release, bounded context, module, actors, requirement IDs, data classifications, security implications, migration impact, and required evidence.

An agent MUST NOT infer Boundary B merely because KitchenOS documents exist.

## Mandatory task header

Every substantial KitchenOS plan MUST state:

```yaml
task_id:
target_release:
bounded_contexts:
modules:
actors:
requirements:
data_classes:
public_contract_changes:
migration_required:
security_review_required:
offline_impact:
compliance_impact:
explicit_non_goals:
```

Missing information MUST be listed as an assumption or blocker; it MUST NOT be silently invented.

## Required workflow

### 1. Repository reality check

Inspect branch/commit, worktree, package versions, existing architecture, migrations, tests, and deployment constraints. Distinguish current capability from target documentation.

### 2. Requirement interpretation

Report requirements implemented, deferred, contradictions, decisions required, sources of truth, and operational risks.

### 3. Change plan

Name files, domain changes, migrations, API/event changes, UI workflows, tests, documentation updates, and rollback. Divide large tasks into reviewable phases.

### 4. Implementation rules

Agents MUST preserve tenant isolation, use explicit domain types and state transitions, make retried commands idempotent, preserve financial/order history, instrument critical paths, fail visibly, and avoid unsupported compliance claims.

### 5. Verification

Run applicable gates from `11-quality-verification-and-release-gates.md`. A check not executed MUST be reported as **not executed**, never assumed passing.

### 6. Completion report

Report requirement IDs, files, migrations, tests/results, rendered UX reviewed, security and tenant evidence, telemetry, remaining risks, deferred work, and exact commit SHA.

## Prohibited behavior

`KOS-AGENT-001` — MUST NOT claim enterprise readiness from compilation alone.

`KOS-AGENT-002` — MUST NOT create a domain synonym when a canonical term exists.

`KOS-AGENT-003` — MUST NOT bypass tenant-scoping helpers with unscoped queries.

`KOS-AGENT-004` — MUST NOT invent tax, payroll, privacy, food-safety, or fiscal rules.

`KOS-AGENT-005` — MUST NOT copy proprietary competitor UI screens or assets.

`KOS-AGENT-006` — MUST NOT implement undocumented third-party endpoints.

`KOS-AGENT-007` — MUST NOT mark an external order accepted merely because a request was sent.

`KOS-AGENT-008` — MUST NOT mutate posted financial events; use reversal or adjustment entries.

`KOS-AGENT-009` — MUST NOT auto-resolve conflicts affecting money, tax, stock, or customer commitments without an approved deterministic rule.

`KOS-AGENT-010` — MUST NOT add a dependency without recording purpose, maintenance, license, security posture, and removal path.

`KOS-AGENT-011` — MUST NOT combine an unrelated visual change with cross-cutting architecture changes.

`KOS-AGENT-012` — MUST NOT delete historical audit records to simplify a migration.

## Context-budget protocol

For long tasks load governance, task-relevant domain/architecture docs, the module spec, the role workflow, then relevant code/tests. Research is evidence, not a substitute for normative requirements.

## Traceability

Code, tests, ADRs, and reports SHOULD reference stable IDs such as:

```text
KOS-ORDER-INV-004
KOS-TENANT-ISO-003
KOS-UX-KDS-012
KOS-API-IDEMP-003
```

## Honest completion terms

- **documented** — approved specification exists;
- **implemented** — production code exists;
- **verified** — required evidence passes;
- **pilot-ready** — constrained operational/support gates pass;
- **production-ready** — release, security, backup, monitoring, and runbooks pass;
- **enterprise-ready** — enterprise scale, tenancy, recovery, audit, compliance, and support evidence pass.
