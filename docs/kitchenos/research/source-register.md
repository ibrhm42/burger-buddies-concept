---
document_id: KOS-RES-SOURCES-001
title: "KitchenOS Official Research Source Register"
product: "KitchenOS"
version: "1.0.0"
status: "foundational-approved"
authority: "reference"
owner: "Ibrahim"
applies_to: "KitchenOS product, UX, architecture, and module specifications"
last_updated: "2026-07-24"
depends_on:
  - KOS-GOV-001
change_policy: "Sources may be added with provenance, retrieval date, relevance, and limitations. Requirements still require approval in normative documents."
---

# KitchenOS Official Research Source Register

## Purpose

This register records first-party and standards sources used to derive KitchenOS product and UX principles. It is evidence, not permission to copy proprietary layouts, text, assets, icons, or trade dress.

## Research-use rules

1. Prefer official product documentation, official help centers, standards, and vendor product pages.
2. Record what a source supports and what it does not prove.
3. Derive interaction principles and workflow expectations; do not clone screens.
4. Marketing claims are treated as vendor claims unless independently validated.
5. A source describing a feature does not prove usability, accessibility, reliability, or fit for KitchenOS.
6. Time-sensitive claims must be rechecked before implementation or commercial use.
7. Research IDs are stable and may be referenced from normative requirements.

## Restaurant commerce, POS, and kitchen

### UX-001 — Toast Kitchen Display System

- Source: https://pos.toasttab.com/hardware/kitchen-display-system
- Owner: Toast
- Retrieved: 2026-07-24
- Supports: real-time POS-to-kitchen flow, station/menu/service-model configuration, order-ready notifications, durable high-volume kitchen hardware.
- KitchenOS use: timed ticket queues, station ownership, expeditor separation, service-model configuration.
- Limitation: product marketing; not an independent usability study.

### UX-002 — Square Kitchen Display System

- Source: https://squareup.com/ca/en/point-of-sale/restaurants/kitchen-display-system
- Owner: Block/Square
- Retrieved: 2026-07-24
- Supports: consolidated order sources, ticket detail, timers, alerts, station routing, expeditor mode, preparation-time reporting.
- KitchenOS use: glanceable ticket anatomy, timed aging, station and expeditor workflows.
- Limitation: feature description rather than comparative evaluation.

### UX-003 — Oracle Simphony documentation

- Sources:
  - https://docs.oracle.com/en/industries/food-beverage/simphony/19.8/simmu/c_preface.htm
  - https://docs.oracle.com/en/industries/food-beverage/simphony/19.6/kdscu/c_preface.htm
  - https://docs.oracle.com/en/industries/food-beverage/simphony/19.4/simcg/c_simphony_intro.htm
- Owner: Oracle
- Retrieved: 2026-07-24
- Supports: enterprise and multi-property POS, workstation operators, KDS, peripherals, credit-card interfaces, reporting, centralized configuration.
- KitchenOS use: enterprise hierarchy, role-specific workstation design, device integration, operational resilience.
- Limitation: broad enterprise product; KitchenOS must avoid inheriting unnecessary complexity.

### UX-004 — Toast connected restaurant platform

- Sources:
  - https://pos.toasttab.com/how-toast-works
  - https://pos.toasttab.com/products
  - https://pos.toasttab.com/products/online-ordering
- Owner: Toast
- Retrieved: 2026-07-24
- Supports: connected POS, online ordering, kitchen, delivery, scheduling, payroll, accounting, supplier, marketing, and multi-location capabilities.
- KitchenOS use: modular product packaging and shared restaurant core.
- Limitation: platform breadth is not a release-order recommendation.

### UX-005 — Lightspeed Quick Service mode

- Source: https://resto-support.lightspeedhq.com/hc/en-us/articles/360039212374-About-Quick-Service-mode
- Owner: Lightspeed
- Retrieved: 2026-07-24
- Supports: distinct quick-service and table-service modes; quick service removes steps and features inappropriate to pay-at-order workflows.
- KitchenOS use: service-mode-specific POS workspaces; avoid one universal cashier screen.
- Limitation: based on one vendor’s product model.

### UX-006 — OpenTable table management

- Sources:
  - https://www.opentable.com/restaurant-solutions/products/table-management/
  - https://www.opentable.com/restaurant-solutions/plans/core/
- Owner: OpenTable
- Retrieved: 2026-07-24
- Supports: customizable floor plans, table assignment, shift overview, waitlist, server sections, guest notes, turn-time context, mobile floor plan.
- KitchenOS use: spatial host workspace, visible dining-room capacity, shift preparation.
- Limitation: vendor claims and selected workflows; local validation required.

### UX-007 — OpenTable waitlist and availability

- Sources:
  - https://www.opentable.com/restaurant-solutions/products/features/opentable-waitlist/
  - https://www.opentable.com/restaurant-solutions/products/features/availability-controls/
- Owner: OpenTable
- Retrieved: 2026-07-24
- Supports: remote and in-house waitlist in one list, SMS readiness, wait estimates, availability pacing, party-size and table-type controls.
- KitchenOS use: combined host queue, explicit wait estimates, pacing and pause controls.
- Limitation: predictions must be labelled estimates.

### UX-008 — OpenTable guest relationship workflows

- Sources:
  - https://www.opentable.com/restaurant-solutions/our-solutions/
  - https://www.opentable.com/restaurant-solutions/plans/pro/
- Owner: OpenTable
- Retrieved: 2026-07-24
- Supports: guest database, tags, notes, spend context, pre-shift reports, messaging, post-dining surveys.
- KitchenOS use: role-scoped guest context and privacy-aware service personalization.
- Limitation: sensitive guest notes require explicit access and retention controls.

### UX-009 — Deliverect store/order management

- Sources:
  - https://www.deliverect.com/en/delivery-manager-app
  - https://www.deliverect.com/en/deliverect-restaurants
- Owner: Deliverect
- Retrieved: 2026-07-24
- Supports: unified orders, accept/cancel, preparation-time changes, standardized status flow, store availability, multi-location/channel operations.
- KitchenOS use: queue-first Order Hub, channel controls, standardized order status.
- Limitation: POS/channel behavior differs by connector.

### UX-010 — Deliverect menu management

- Sources:
  - https://www.deliverect.com/en-us/menu-stock-management
  - https://help.deliverect.com/en/articles/8625178-using-the-menus-page
  - https://help.deliverect.com/en/articles/7978991-add-or-edit-menu-availability
- Owner: Deliverect
- Retrieved: 2026-07-24
- Supports: central menus, groups, preview, duplicate, publish, availability schedules, history, archive, location/channel variation, item deactivation.
- KitchenOS use: draft/publish workflow, source-of-truth clarity, menu history, scoped publication.
- Limitation: channel support and propagation delay vary.

### UX-011 — Toast online ordering and kiosk

- Sources:
  - https://pos.toasttab.com/products/online-ordering
  - https://pos.toasttab.com/hardware/restaurant-kiosk
- Owner: Toast
- Retrieved: 2026-07-24
- Supports: branded menus, location selection, tracking, fulfilment options, ordering rules, upsells, integrated POS/kitchen routing.
- KitchenOS use: guest checkout, configurable storefront, explicit fulfilment, non-blocking upsells, truthful order handoff.
- Limitation: commercial performance claims are not KitchenOS guarantees.

## Inventory, purchasing, finance, and workforce

### UX-012 — MarketMan platform

- Source: https://www.marketman.com/platform
- Owner: MarketMan
- Retrieved: 2026-07-24
- Supports: mobile inventory counts, receiving, ordering, recipe costing, purchase orders, AP, vendor management, commissary, multi-unit reporting.
- KitchenOS use: mobile capture/count; desktop configuration, comparison, and reconciliation.
- Limitation: feature availability may vary by plan.

### UX-013 — MarginEdge mobile and AP

- Sources:
  - https://www.marginedge.com/mobile
  - https://www.marginedge.com/ap-automation
  - https://www.marginedge.com/for-multi-units
- Owner: MarginEdge
- Retrieved: 2026-07-24
- Supports: mobile invoice capture, approval, payment, inventory count, waste recording, multi-location comparison, approval rules.
- KitchenOS use: capture-first mobile workflows, exception/approval queues, progressive detail.
- Limitation: digitization turnaround and human review are vendor-specific.

### UX-014 — 7shifts schedule publishing

- Sources:
  - https://kb.7shifts.com/hc/en-us/articles/31134884076563-Build-and-Publish-Your-First-Schedule
  - https://kb.7shifts.com/hc/en-us/articles/4417514210067-Publish-a-Schedule
- Owner: 7shifts
- Retrieved: 2026-07-24
- Supports: draft versus published schedules, independent publication by location/department, notification choices, permission-scoped access.
- KitchenOS use: explicit draft/publish state and scoped commitment.
- Limitation: KitchenOS must define its own labor-law and notification rules.

### UX-015 — 7shifts role and employee model

- Sources:
  - https://kb.7shifts.com/hc/en-us/articles/53059862558099-What-is-7shifts
  - https://kb.7shifts.com/hc/en-us/articles/33383119814163-Manage-availability-and-time-off-requests-Getting-Started-for-Managers
  - https://kb.7shifts.com/hc/en-us/articles/4417514452115-The-Optimal-Labor-Tool
- Owner: 7shifts
- Retrieved: 2026-07-24
- Supports: owner/admin, manager, and employee role differences; availability and time-off separation; labor recommendations with prerequisites.
- KitchenOS use: role-native workforce views, prerequisite disclosure, recommendations distinct from commitments.
- Limitation: forecasting results depend on sufficient trustworthy data.

### UX-016 — Restaurant365 back office

- Sources:
  - https://www.restaurant365.com/
  - https://www.restaurant365.com/pricing/
  - https://www.restaurant365.com/operations/
- Owner: Restaurant365
- Retrieved: 2026-07-24
- Supports: connected accounting, inventory, purchasing, workforce, payroll, reporting, POS/vendor/bank integrations, multi-location views.
- KitchenOS use: exception-driven finance and operations, close/reconciliation state, location and consolidated visibility.
- Limitation: vendor outcome claims are not adopted as KitchenOS evidence.

## Accessibility and platform standards

### STD-001 — WCAG 2.2

- Source: https://www.w3.org/TR/WCAG22/
- Owner: W3C
- Retrieved: 2026-07-24
- Supports: target accessibility requirements for web interfaces.
- KitchenOS use: WCAG 2.2 AA target, including alternatives to drag-only interactions, visible focus, reflow, keyboard operation, and non-color-only status.

### STD-002 — WAI-ARIA Authoring Practices

- Source: https://www.w3.org/WAI/ARIA/apg/
- Owner: W3C
- Retrieved: 2026-07-24
- Supports: established accessible interaction patterns for dialogs, grids, menus, tabs, comboboxes, and related widgets.
- KitchenOS use: component interaction contracts.

### STD-003 — Progressive Web Apps

- Source: https://web.dev/learn/pwa/
- Owner: Google/web.dev
- Retrieved: 2026-07-24
- Supports: installability, service workers, caching, app-like web behavior.
- KitchenOS use: web/PWA platform strategy.
- Limitation: PWA capabilities differ by OS/browser and do not prove offline-first POS suitability.

## Required update practice

Before implementing a major workflow, the agent must:

1. re-open the relevant official sources;
2. record source retrieval date;
3. identify changed product behavior;
4. state which principles are adopted, rejected, or unverified;
5. link resulting decisions and requirement IDs;
6. avoid unsupported claims such as “best,” “tested,” or “industry standard” unless evidence supports them.
