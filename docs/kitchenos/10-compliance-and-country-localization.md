---
document_id: KOS-COMP-001
title: "KitchenOS Compliance and Country Localization"
product: "KitchenOS"
version: "1.0.0"
status: "foundational-approved"
authority: "normative"
owner: "Ibrahim"
applies_to: "KitchenOS target product"
last_updated: "2026-07-24"
depends_on:
  - KOS-GOV-001
  - KOS-SEC-001
  - KOS-DATA-001
change_policy: "Changes require an explicit decision record and updates to affected dependent documents."
---

# KitchenOS Compliance and Country Localization

## Purpose and legal boundary

This document defines compliance engineering. It is not legal, tax, payroll, or accounting advice. KitchenOS MUST use qualified counsel, accountants, tax specialists, payment providers, and authorities before claiming support.

## Capability profile

```yaml
country:
region_or_province:
module:
service_mode:
legal_entity_type:
tax_registration:
payment_scope:
fiscal_integration:
data_residency:
status: unsupported|research|pilot|verified
evidence:
version:
review_date:
```

`KOS-COMP-001` — “Compliant” without jurisdiction, module, version, and evidence is prohibited.

## Compliance families

### Fiscal/tax
Rates/categories, inclusive/exclusive pricing, exemptions, service/delivery charges, invoice content/number, real-time reporting, QR/signature, refunds/credit notes, outage queue, retention, audit export.

### Payments
PCI DSS, provider contracts, surcharges/tips, refunds/chargebacks, settlement, stored value/gift cards, money-transmission risk.

### Privacy
Notices, controller/processor roles, lawful basis, consent, marketing, retention, rights, transfers, subprocessors, breach notification.

### Employment/payroll
Wage/overtime, breaks, scheduling notice, tips, deductions, retention, leave, classification.

### Accessibility/consumer
WCAG 2.2 AA target, clear pricing, cancellation/refund disclosure, no dark patterns, accessible support.

### Food safety
Allergens, temperature, traceability, recall, sanitation, expiry, HACCP-style controls where required.

## Pakistan baseline

### FBR
FBR publishes POS legal provisions and integration resources; restaurant POS integration is an active official domain [LOC-PK-FBR-001][LOC-PK-FBR-002]. KitchenOS MUST NOT infer every restaurant has the same obligation. Eligibility and required process must be confirmed.

### SRB
SRB publishes POS registration, guides, invoice verification, and technical documents for cloud/offline integration [LOC-PK-SRB-001].

For Sindh investigate service classification, registration, invoice fields, authentication, protocol, outage queue, credit/refund, testing/certification.

### PRA/other authorities
Research official sources for each release. Third-party marketing is not sufficient evidence.

### Pakistan localization
PKR, phone/address formats, Urdu where contracted, FBR/SRB/PRA profiles, cash/card/wallet/COD, local business date/receipt, hosting/data requirements where applicable.

## Global onboarding checklist

1. legal/tax owner;
2. fiscal rules;
3. payment providers;
4. privacy;
5. employment/payroll;
6. consumer terms;
7. accessibility;
8. language/currency/timezone;
9. residency/transfers;
10. incident contacts;
11. evidence/certification;
12. support training.

## GDPR-oriented profile

For applicable EU/EEA processing, reflect lawfulness, transparency, purpose limitation, minimization, accuracy, retention limitation, and security [STD-007].

Potential capabilities: controller/processor config, DPA, consent/preference, access/export, erasure/anonymization, portability, retention, subprocessor disclosure, breach workflow, regional transfer.

## PCI profile

For hosted/tokenized payment, document responsibility scope, integration, no CVV, token controls, vulnerability management, access/log/incident.

If raw card data enters KitchenOS, release is blocked pending formal PCI architecture/assessment against current PCI DSS [STD-005].

## Localization architecture

Localize language, dates, business date, currency/rounding, numbers, tax labels, address/phone, receipt, name order, RTL, pluralization, units, allergens/dietary language.

Do not concatenate translated fragments. Use full keys and role-reviewed terminology.

## Configuration versus code

Compliance config is allowed only where law permits and interpretation is validated. Changes require effective date, version, applicability, migration, regression, notice, contingency.

## Evidence register

Store official source, technical spec, authority communication, certification, test results, expert sign-off, supported/unsupported scenarios, version/date.

## Release gate

No regulated pilot until requirements mapped, expert assigned, test environment used, outage behavior tested, audit evidence generated, support runbook exists, and marketing approved.

## Continuous monitoring

Authorities, payment standards, privacy rules, and technical specs change. Maintain monitored sources and scheduled review; agent memory is not a source.
