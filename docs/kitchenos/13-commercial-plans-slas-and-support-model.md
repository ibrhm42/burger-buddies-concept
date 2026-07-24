---
document_id: KOS-COM-001
title: "KitchenOS Commercial Plans, SLAs, and Support Model"
product: "KitchenOS"
version: "1.0.0"
status: "foundational-approved"
authority: "normative"
owner: "Ibrahim"
applies_to: "KitchenOS commercial packaging, onboarding, support, service levels, and offboarding"
last_updated: "2026-07-24"
depends_on:
  - KOS-GOV-001
  - KOS-ARCH-001
  - KOS-TENANT-001
  - KOS-SEC-001
  - KOS-REL-001
  - KOS-OPS-001
change_policy: "Commercial commitments require approved entitlement, capacity, legal, support, and operational review."
---

# KitchenOS Commercial Plans, SLAs, and Support Model

## 1. Purpose

This document defines how KitchenOS capabilities are packaged, sold, provisioned, supported, measured, changed, and retired. It prevents sales commitments from exceeding implemented and supportable product behavior.

## 2. Commercial principles

`KOS-COM-001` — KitchenOS MUST sell entitlements to verified capabilities, not roadmap promises presented as current functionality.

`KOS-COM-002` — Every plan, add-on, limit, SLA, support promise, and professional-service commitment MUST map to an owned implementation and operational control.

`KOS-COM-003` — Restaurant data, domains, payment accounts, messaging accounts, and hardware ownership MUST be explicit in the contract and onboarding record.

`KOS-COM-004` — Usage limits MUST be enforceable and observable before being sold.

`KOS-COM-005` — A feature flag MUST NOT substitute for billing entitlement or authorization.

`KOS-COM-006` — No plan may promise unlimited support, unlimited customization, lifetime hosting, or lifetime maintenance.

`KOS-COM-007` — External-provider fees and availability MUST be disclosed separately where they are not controlled by KitchenOS.

`KOS-COM-008` — SLA credits MUST be the defined remedy for service-level failure unless the contract explicitly provides otherwise.

## 3. Commercial unit model

KitchenOS may charge through a combination of:

- platform subscription;
- per active location;
- per enabled module;
- per device for KDS/POS/kiosk where support cost requires;
- usage-based messaging, AI, maps, storage, or delivery;
- payment processing or gateway fees where legally and commercially supported;
- one-time onboarding;
- menu/data migration;
- hardware and installation;
- connector implementation;
- professional services;
- premium support;
- training;
- enterprise environment or data-residency requirements.

Every billable dimension must define:

- metering source;
- calculation period;
- rounding;
- included allowance;
- overage behavior;
- alert thresholds;
- dispute process;
- suspension behavior;
- data retention after nonpayment.

## 4. Recommended product packages

### 4.1 KitchenOS Web

Intended for independent restaurants requiring a branded direct-ordering presence.

Core entitlement candidates:

- one restaurant brand;
- one location;
- branded storefront;
- menu and modifiers;
- pickup and delivery configuration;
- promotions;
- WhatsApp handoff;
- platform subdomain;
- standard support;
- basic usage reporting.

Optional add-ons:

- custom domain;
- extra locations;
- managed menu updates;
- advanced branding;
- additional messaging channels.

### 4.2 KitchenOS Orders

Adds operational order management:

- durable orders;
- Order Hub;
- accept/reject;
- preparation time;
- status workflow;
- notification events;
- order history;
- exception queue;
- basic operational analytics.

### 4.3 KitchenOS Kitchen

Adds:

- KDS stations;
- expeditor;
- timers and aging;
- routing;
- recall;
- order-ready display;
- kitchen performance reporting.

Device entitlements and supported hardware must be explicit.

### 4.4 KitchenOS POS

Adds native or approved POS capability:

- cashier;
- checks;
- tender;
- receipts;
- shift and cash controls;
- offline transaction capability;
- supported peripherals.

POS plans require stricter onboarding, supported-hardware lists, operational readiness, and support coverage.

### 4.5 KitchenOS Stock

Adds inventory, recipes, purchasing, receiving, waste, transfers, and food-cost reporting.

### 4.6 KitchenOS Team

Adds scheduling, attendance, availability, time off, tasks, and optional payroll integration.

### 4.7 KitchenOS Guests

Adds CRM, loyalty, campaigns, memberships, gift cards, and feedback, subject to privacy and consent requirements.

### 4.8 KitchenOS Finance

Adds reconciliation, accounting workflows, period close, and financial reporting. Country-specific statutory accounting or tax claims require separate approval.

### 4.9 KitchenOS Connect

Adds officially supported connectors. Each connector has its own scope, mapping, limits, support boundary, and setup fee.

### 4.10 KitchenOS Enterprise

Potential entitlements:

- multi-brand and multi-region;
- advanced identity/SSO;
- custom retention or residency;
- central menu and procurement;
- franchise controls;
- consolidated reporting;
- higher API limits;
- sandbox;
- premium support;
- contract SLA;
- dedicated onboarding and customer-success plan.

Enterprise does not imply all modules are included unless explicitly contracted.

## 5. Entitlement model

Entitlements must be represented as structured policy, not scattered boolean checks.

Each entitlement defines:

- product family;
- feature code;
- tenant/location scope;
- quantity or usage limit;
- effective start/end;
- trial state;
- source contract/order;
- dependency entitlements;
- downgrade behavior;
- data-access behavior after expiry.

Agents MUST implement authorization independently from navigation visibility.

## 6. Subscription lifecycle

Canonical states:

```text
prospect
→ trial_pending
→ trial_active
→ active
→ past_due
→ grace_period
→ restricted
→ suspended
→ cancelled
→ retention_hold
→ export_available
→ deleted_or_anonymized
```

Transitions require auditable reason and source.

Rules:

- Past-due state must not immediately destroy restaurant operations or data.
- Restrictions must be predictable and contractually disclosed.
- Critical data export must remain available for the defined period.
- POS and order data should become read-only before removal where feasible.
- Re-activation must restore only supported retained state.
- Cancellation does not cancel third-party contracts owned by the customer.

## 7. Trials and pilots

A trial or pilot record must specify:

- tenant and locations;
- modules;
- dates;
- data ownership;
- permitted production use;
- support level;
- success criteria;
- conversion terms;
- offboarding plan;
- responsibility for third-party costs.

A pilot involving live orders, payments, POS, payroll, or fiscal functions requires production-grade controls for the enabled scope.

## 8. Onboarding model

### 8.1 Discovery

Capture:

- legal/business structure;
- brands and locations;
- service modes;
- ordering channels;
- menu complexity;
- tax and service charges;
- payment methods;
- staff roles;
- existing POS and integrations;
- devices and network;
- data migration;
- support contacts;
- launch constraints;
- compliance requirements.

### 8.2 Readiness assessment

Classify:

- standard;
- standard with configuration;
- professional services required;
- connector feasibility required;
- unsupported;
- legal/compliance review required.

### 8.3 Configuration and migration

Required evidence:

- signed scope;
- source-data owner;
- validated import counts;
- rejected-record report;
- menu/price/tax approval;
- user/role approval;
- integration mapping approval;
- domain and provider ownership;
- backup of imported source where permitted.

### 8.4 Training

Training must be role-specific:

- owner/admin;
- branch manager;
- cashier/server;
- kitchen;
- inventory/purchasing;
- finance;
- support contact.

Training completion does not waive usability defects.

### 8.5 Launch

Launch checklist:

- production configuration approved;
- users and roles verified;
- devices healthy;
- connectivity/offline behavior tested;
- printers/payment/connectors tested;
- order/payment reconciliation tested;
- rollback/fallback agreed;
- support contacts active;
- monitoring and alerts enabled;
- change freeze communicated;
- launch owner named.

## 9. Support tiers

### Standard

- business-hours support in defined timezone;
- knowledge base and ticketing;
- production incident intake;
- target response by severity;
- no guaranteed dedicated engineer;
- configuration guidance within plan.

### Priority

- extended support hours;
- faster response targets;
- named customer-success contact;
- launch planning;
- periodic health review;
- priority escalation.

### Enterprise

- contracted support window, potentially 24/7 for critical incidents;
- named technical and commercial contacts;
- incident bridge for Severity 1;
- scheduled service reviews;
- architecture/integration review;
- agreed escalation matrix;
- optional dedicated environment or residency services.

Support tier does not expand product functionality.

## 10. Severity model

### Severity 1 — Critical

Examples:

- widespread inability to take or process orders;
- duplicate or incorrect payment capture risk;
- active cross-tenant data exposure;
- production fiscal or financial integrity failure;
- all critical POS terminals unusable with no fallback;
- confirmed material security incident.

Criteria: major production impact, no reasonable workaround.

### Severity 2 — High

Examples:

- major module unavailable for one or more locations;
- connector failure causing manual fallback;
- serious degradation during service;
- important data delayed or inconsistent but recoverable;
- partial POS/KDS outage with workaround.

### Severity 3 — Normal

Examples:

- isolated functional defect;
- report discrepancy not affecting transactional truth;
- configuration issue;
- degraded noncritical workflow.

### Severity 4 — Low/Request

Examples:

- how-to question;
- cosmetic issue;
- feature request;
- planned configuration change.

Severity is based on verified impact, not customer label alone. KitchenOS may upgrade or downgrade with explanation.

## 11. Response and restoration targets

Exact targets belong in the signed plan/SLA. A starting policy may define:

| Severity | Standard initial response | Priority | Enterprise |
|---|---:|---:|---:|
| S1 | 2 business hours | 30 minutes during coverage | 15 minutes, 24/7 if contracted |
| S2 | 4 business hours | 2 hours | 1 hour |
| S3 | 1 business day | 8 business hours | 4 business hours |
| S4 | 2 business days | 1 business day | 1 business day |

These are response targets, not guaranteed resolution times.

For S1/S2, communications should include:

- acknowledgement;
- impact/scope;
- workaround if available;
- next update time;
- mitigation/restoration;
- reconciliation requirements;
- post-incident review eligibility.

## 12. Availability SLA

An SLA must define:

- measured service;
- production region/environment;
- measurement interval;
- included requests;
- excluded planned maintenance;
- customer-caused or provider-caused exclusions;
- force majeure treatment;
- third-party connector treatment;
- method of calculation;
- claim window;
- credit schedule;
- maximum credit.

Potential service boundaries should be separate:

- storefront/API;
- Order Hub;
- cloud POS services;
- payments orchestration;
- notifications;
- external connectors;
- reporting freshness.

Do not present one platform availability percentage as proof every connector, provider, device, or local network is available.

## 13. Maintenance and change communication

Define:

- routine maintenance window;
- emergency maintenance;
- notice period;
- expected impact;
- customer action;
- version/deprecation schedule;
- release notes;
- status page.

Critical restaurant service periods should be considered by region and tenant. Planned maintenance should avoid peak periods where feasible.

## 14. Professional services

Separate from subscription:

- discovery;
- menu migration;
- data cleanup;
- custom reports;
- domain setup;
- hardware installation;
- staff training;
- integration feasibility;
- connector implementation;
- change management;
- workflow consulting;
- bespoke migration;
- on-site launch support.

Each engagement needs scope, assumptions, exclusions, client responsibilities, milestones, acceptance, payment stages, and change control.

Custom work should become core product only through approved product governance.

## 15. Connector support boundary

For each connector disclose:

- vendor and supported versions;
- data direction;
- supported entities/actions;
- sync frequency;
- expected delay;
- authentication owner;
- mapping owner;
- fallback;
- vendor fees;
- sandbox availability;
- incident responsibility;
- deprecation policy.

KitchenOS is not responsible for undocumented vendor behavior it cannot control, but it remains responsible for truthful status, safe retry, and supported fallback within KitchenOS.

## 16. Hardware support

Maintain a supported-device matrix:

- model;
- OS/firmware;
- peripheral;
- driver/service;
- minimum network;
- tested KitchenOS version;
- support status;
- end-of-support date.

Customer-owned unsupported hardware must be identified before launch. Hardware replacement and warranty terms are separate from SaaS availability.

## 17. Customer responsibilities

Contracts should require customers to:

- maintain authorized contacts;
- protect credentials;
- use supported devices/browsers;
- maintain local network and power unless contracted otherwise;
- provide correct menu, prices, taxes, policies, and business data;
- obtain lawful customer/staff consent;
- manage third-party accounts they own;
- promptly report suspected incidents;
- avoid unauthorized access or reverse engineering;
- complete required upgrades where support depends on them.

Customer responsibility does not excuse KitchenOS defects unrelated to that responsibility.

## 18. Data ownership and portability

Default principle:

- tenant owns its restaurant and customer business data;
- KitchenOS owns platform software, schemas, derived anonymous benchmarks subject to contract/law, and operational metadata necessary to provide the service;
- third-party ownership follows provider agreements.

Export specification must define:

- entities included;
- format;
- attachments/media;
- historical records;
- audit data availability;
- encryption;
- delivery method;
- time window;
- cost for nonstandard exports.

## 19. Offboarding

```text
notice
→ scope confirmation
→ final billing
→ access transition
→ export
→ connector/domain/provider transition
→ read-only period
→ retention hold
→ deletion/anonymization
→ certificate/evidence
```

Offboarding must address:

- custom domains;
- DNS;
- restaurant subdomains;
- messaging numbers/accounts;
- payment providers;
- external POS credentials;
- hardware;
- unresolved orders/refunds;
- financial-period close;
- employee/customer data;
- support case archive.

## 20. Plan change and downgrade

Downgrade behavior must be defined before sale.

Examples:

- excess locations become read-only or require selection;
- advanced reports become inaccessible but underlying data is retained per policy;
- connector stops new sync only after warning and safe reconciliation;
- custom domain may require migration period;
- POS cannot be abruptly disabled during open shifts;
- historical orders remain exportable.

## 21. Fair-use and abuse

Define abuse handling for:

- excessive automated traffic;
- spam or unlawful messaging;
- credential sharing;
- fraudulent orders;
- malicious files;
- unsupported scraping;
- attempted tenant escape;
- payment misuse;
- illegal content.

Restriction or suspension must preserve evidence and follow security/legal escalation.

## 22. Service review

Enterprise and priority customers may receive periodic review covering:

- availability and incidents;
- support trends;
- module adoption;
- integration health;
- device health;
- security actions;
- usage/capacity;
- roadmap feedback clearly separated from commitments;
- training gaps;
- renewal risks.

## 23. Commercial evidence gate

Before a plan or feature is published, evidence must prove:

- entitlement exists;
- billing/metering works;
- documentation exists;
- onboarding supports it;
- support can diagnose it;
- monitoring exists;
- limits are enforced;
- downgrade/offboarding behavior exists;
- legal/compliance language is approved;
- implementation status is truthful.

## 24. AI-agent rules

AI agents MUST:

- cite affected entitlement and requirement IDs;
- avoid inventing prices, SLAs, legal commitments, or supported connectors;
- distinguish proposal from approved commercial policy;
- implement metering and authorization separately;
- produce downgrade, past-due, suspension, and export tests;
- preserve auditability;
- stop when commercial behavior conflicts with safety, domain integrity, or higher-authority requirements.
