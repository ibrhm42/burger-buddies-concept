---
document_id: KOS-RES-UX-001
title: "KitchenOS Comparative Restaurant UX Research"
product: "KitchenOS"
version: "1.0.0"
status: "foundational-approved"
authority: "reference"
owner: "Ibrahim"
applies_to: "KitchenOS UX architecture and module specifications"
last_updated: "2026-07-24"
depends_on:
  - KOS-GOV-001
  - KOS-UX-001
change_policy: "Research changes require source-register updates and explicit disposition into normative requirements."
---

# KitchenOS Comparative Restaurant UX Research

## 1. Objective

This research identifies proven interaction patterns used by major restaurant software products. It does not declare any vendor universally best, and it does not authorize copying proprietary interfaces. KitchenOS should synthesize tested workflow structures, validate them with real restaurant roles, and create an original design system.

## 2. Method

Research used official product pages, official help centers, standards, and public training material from Toast, Square, Oracle Simphony, Lightspeed, OpenTable, Deliverect, MarketMan, MarginEdge, 7shifts, and Restaurant365.

For each workflow, the study evaluates:

- primary user and working environment;
- dominant task;
- information that must remain glanceable;
- commitment point;
- likely error or interruption;
- recovery requirement;
- platform and input constraints;
- patterns KitchenOS should adopt;
- patterns KitchenOS should avoid.

## 3. Research synthesis

### 3.1 No universal restaurant workspace exists

Restaurant work differs by service model and role. Lightspeed explicitly distinguishes Quick Service from Table Service, while Oracle supports multiple property and revenue-center configurations. KitchenOS should therefore use shared domain primitives but role- and service-mode-specific workspaces.

**Adopt:** common data model, different task architecture.

**Avoid:** a single dashboard with modules merely hidden by permission.

### 3.2 Operations begin with work requiring attention

Order aggregation, kitchen production, receiving, scheduling, and finance all become usable when exceptions and next actions are primary.

Examples:

- Deliverect centralizes incoming order actions and store availability.
- Toast and Square organize KDS work by ticket age, routing, and completion.
- Restaurant365 emphasizes financial and operational variance across locations.
- MarginEdge emphasizes invoices requiring capture, review, approval, or payment.

**Adopt:** queue, age, risk, assignment, exception, recovery.

**Avoid:** decorative KPI-first homepages for frontline roles.

### 3.3 Commitment states must be explicit

Restaurant work contains many draft-to-commit boundaries:

- cart to submitted order;
- submitted to accepted order;
- draft schedule to published schedule;
- counted stock to approved count;
- received invoice to posted liability;
- open check to captured payment;
- table assignment to seated party;
- kitchen ticket to ready order.

7shifts’ draft/publish distinction is particularly instructive. KitchenOS should visually and semantically distinguish preparation from commitment.

**Adopt:** draft, review, submit, received, accepted, completed, failed.

**Avoid:** optimistic confirmation for payments, restaurant acceptance, fiscal submission, or irreversible completion.

### 3.4 Physical-space workflows require spatial interfaces

Host and table-service work depends on dining-room geometry, sections, table combinations, accessibility, server load, and turn time. OpenTable’s floor-plan-centric model demonstrates why a generic reservation list is insufficient.

**Adopt:** spatial floor plan plus synchronized reservation/waitlist rail.

**Avoid:** forcing all seating work into a table or calendar.

### 3.5 Kitchen interfaces are distance-readable production controls

KDS screens operate in heat, noise, motion, and time pressure. Square and Toast emphasize station routing, timers, alerts, and expeditor oversight.

**Adopt:** large type, limited ticket anatomy, strong age/status, modifier and allergen emphasis, minimal inner scrolling, touch/glove tolerance, recoverable bump.

**Avoid:** tiny controls, nested cards, hover-dependent actions, color-only aging.

### 3.6 Mobile back-office design should focus on capture

MarketMan and MarginEdge show that mobile inventory and receiving are valuable because work happens in storage rooms, walk-ins, loading areas, and kitchens.

**Adopt on mobile:** scan, search, count, photograph, annotate, save, flag.

**Keep desktop-first:** configuration, comparison, approvals, reconciliation, complex reporting.

### 3.7 Multi-location work requires visible scope and inheritance

Deliverect, Restaurant365, MarketMan, Oracle, and 7shifts all expose location-specific or consolidated concepts.

**Adopt:** persistent tenant/brand/location/business-date context; central values with explicit local overrides; clear publication scope.

**Avoid:** silent location switching or ambiguous “all locations” edits.

### 3.8 Availability and capacity are operational controls

Restaurants need to pause channels, 86 items, change preparation time, pace reservations, and constrain large parties. These controls are operational, time-scoped, and potentially high-impact.

**Adopt:** visible scope, start/end, reason, automatic expiry, audit history.

**Avoid:** permanent hidden changes made from transient peak-hour controls.

### 3.9 Historical truth must survive current configuration

Menu, pricing, tax, recipe, employee, and accounting changes must not rewrite past transactions.

**Adopt:** snapshots and event timelines in order, payment, inventory, and finance detail views.

**Avoid:** displaying historical records through only current master-data labels.

## 4. Role-native workspace archetypes

### 4.1 Customer storefront

**Primary job:** choose accurately and submit with confidence.

**Recommended anatomy:**

- restaurant/location/service state;
- search and category navigation;
- visual menu cards;
- product configuration;
- persistent cart summary;
- fulfilment and time selection;
- minimal customer form;
- payment or approved handoff;
- truthful confirmation and tracking.

**UX principles:** guest checkout, early availability validation, immediate price updates, recoverable cart, explicit scheduled-order rules, optional account creation after value.

### 4.2 QSR cashier POS

**Primary job:** complete accurate checks quickly.

**Recommended anatomy:**

- context strip for location/revenue center/service mode/offline state;
- product/category grid and search;
- persistent check panel;
- contextual modifier surface;
- large quantity/keypad controls;
- clear tender flow;
- held-check access.

**Critical rules:** prevent duplicate payment, make change due clear, distinguish local/offline/synchronized, reset safely for next customer.

### 4.3 Server handheld

**Primary job:** manage assigned tables and send accurate courses without losing draft work.

**Recommended anatomy:** my section, table state, guest/seat hierarchy, item entry, hold/fire/send state, kitchen progress, settlement.

**Critical rules:** connection-loss draft preservation, explicit sent/acknowledged state, allergy acknowledgement, safe transfer and split preview.

### 4.4 Host and waitlist

**Primary job:** manage dining-room flow and guest expectations.

**Recommended anatomy:** floor plan, reservation/waitlist rail, shift summary, party detail, table/server capacity.

**Critical rules:** drag alternative, estimate labels, delivery status for messages, table-combination state, server load, accessibility needs, privacy-scoped notes.

### 4.5 Order Hub operator

**Primary job:** resolve every incoming order or exception.

**Recommended anatomy:** actionable queue, ticket list, detail pane, status timeline, busy/capacity controls, exception queue, integration health.

**Critical rules:** rejection reason, scoped channel pause, manual fallback audit, no unsafe auto-accept, visible payment and mapping state.

### 4.6 Kitchen worker

**Primary job:** prepare assigned work in the correct sequence.

**Recommended anatomy:** station tickets with age, target, priority, quantities, modifiers, exclusions, allergens, hold/fire, and source/fulfilment.

**Critical rules:** distance readability, glove-friendly targets, configurable sound, recoverable bump, no color-only timing.

### 4.7 Expeditor

**Primary job:** coordinate station completion and release complete orders.

**Recommended anatomy:** order-level progress across stations, missing/late components, packing/plating, recall, delay communication, ready control.

**Critical rule:** readiness cannot falsely claim completion of missing required items without an authorized audited override.

### 4.8 Branch manager

**Primary job:** keep the current service healthy.

**Recommended anatomy:** exceptions requiring attention—unaccepted orders, connector failures, stockouts, kitchen delays, staffing issues, cash/shift variance, guest escalation.

**Avoid:** leading with long-term analytics while current service is failing.

### 4.9 Inventory counter

**Primary job:** count physical stock accurately in storage sequence.

**Recommended anatomy:** location/session, ordered count sheet, scan/search, unit-aware input, calculator, continuous save, issue flags, variance review, submit.

**Critical rules:** blind count option, base/count units, offline save, multi-user assignment/locking, recount and approval separation.

### 4.10 Receiver

**Primary job:** record what physically arrived and identify discrepancies.

**Recommended anatomy:** PO/vendor, expected lines, received quantity, substitution/damage/temperature, image/invoice capture, partial receipt, discrepancy and credit, post action.

### 4.11 Purchaser

**Primary job:** convert needs into controlled supplier commitments.

**Recommended anatomy:** suggestions with basis, par and forecast, supplier comparison, budget, cutoff, approval threshold, acknowledgement.

**Critical rule:** recommendations remain explainable and editable; no silent substitution.

### 4.12 Scheduler

**Primary job:** produce a feasible, compliant, cost-aware published schedule.

**Recommended anatomy:** location/department, forecast, availability/time off, draft schedule, conflicts, labor cost, publish scope, notification options.

**Critical rules:** draft invisibility to employees, independent publication scope, visible overtime/availability/compliance conflicts.

### 4.13 Employee

**Primary job:** understand and act on personal work commitments.

**Recommended anatomy:** next shift, weekly schedule, clock state, break, time off, availability, swaps, announcements, tasks.

**Critical rule:** no access to other employees’ sensitive pay or scheduling data beyond authorized scope.

### 4.14 Finance and accounting

**Primary job:** reconcile exceptions and close periods with evidence.

**Recommended anatomy:** close checklist, unresolved sales/payment/bank/AP/payroll/tax exceptions, drillable journal/source evidence, approval and lock states.

**Avoid:** dashboard-only financial UX without transactional traceability.

### 4.15 Multi-location executive

**Primary job:** identify locations requiring intervention and compare trustworthy metrics.

**Recommended anatomy:** portfolio exceptions, standardized metrics, freshness/coverage, location drill-down, period comparison, approved benchmark definitions.

**Critical rule:** consolidated numbers show scope, currency, timezone, source coverage, and refresh status.

### 4.16 Platform support agent

**Primary job:** diagnose and safely resolve tenant problems.

**Recommended anatomy:** tenant/location context, health, recent changes, jobs/integrations, audit, support case, controlled impersonation, repair action.

**Critical rules:** reason, approval, time limit, banner, audit, least privilege, no raw secret exposure.

## 5. Cross-workspace design system requirements

### Context

Every operational screen must make meaningful context visible: tenant, brand, location, business date, service mode, channel, connection/freshness, and support/acting state.

### Status

Use text and icon plus color. Define semantic states consistently across modules while allowing tenant branding only outside safety-critical semantics.

### Density

- storefront: comfortable and visual;
- POS: touch-dense;
- Order Hub: queue-dense with detail pane;
- KDS: distance-readable;
- finance: information-dense and drillable;
- mobile operations: one dominant task.

### Feedback

Every critical action must show whether it is local, queued, submitted, received, accepted, completed, failed, stale, or awaiting approval.

### Recovery

Errors must preserve recoverable work and provide retry, edit, alternate route, escalation, or explicit non-recoverability.

### Accessibility

Target WCAG 2.2 AA for web. Provide keyboard and non-drag alternatives, visible focus, reflow, zoom, reduced motion, screen-reader labels, and non-color status.

## 6. Validation programme

Research-derived patterns are hypotheses until validated in KitchenOS.

For each operational workspace:

1. recruit at least three practitioners from the target role during pilot development;
2. test representative normal, peak, interruption, failure, and recovery scenarios;
3. measure task completion, error, time, assistance, and confidence;
4. document workflow-specific findings;
5. close severe findings before release;
6. preserve evidence linked to requirement IDs;
7. repeat after major interaction-model changes.

## 7. AI-agent implementation rules

An AI agent implementing UX must:

- read `AI-AGENT-START-HERE.md`, governance, domain, architecture, security, this research, and `09-ux-architecture-and-role-workflows.md`;
- name the target role, service mode, platform, scenario, and requirement IDs;
- distinguish research evidence from KitchenOS decisions;
- never claim a pattern is “best tested UX” solely because a vendor uses it;
- produce normal, empty, loading, permission-denied, offline, stale, failure, and recovery states;
- avoid generic dashboard templates and excessive nested cards;
- provide accessibility and keyboard/touch contracts;
- create acceptance evidence and update the traceability matrix;
- stop and request a decision when domain ownership, commitment state, or failure behavior is undefined.

## 8. Final research position

KitchenOS should combine:

- Toast and Square’s production-focused POS/KDS patterns;
- Lightspeed’s service-mode differentiation;
- Oracle’s enterprise hierarchy and operational rigor;
- OpenTable’s spatial host and guest-context patterns;
- Deliverect’s queue-first order and centralized menu workflows;
- MarketMan and MarginEdge’s mobile physical-work capture;
- 7shifts’ explicit draft/publish and role-scoped workforce model;
- Restaurant365’s exception-driven back-office and multi-location perspective.

The resulting product must remain original, simpler where possible, and validated with KitchenOS users rather than treated as a visual collage of competitors.
