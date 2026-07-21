# Acceptance Criteria — Burger Buddies Ordering Concept

**Status:** Implementation and review checklist  
**Applies to:** First deployable sales prototype  
**Last updated:** 2026-07-21

## 1. Release standard

The concept is accepted only when the primary ordering journey is functional, safe to demonstrate, visually coherent, responsive, accessible at a practical baseline, and honest about its unofficial status and demo data.

A visually attractive homepage alone is not an accepted deliverable.

## 2. Required routes

### AC-ROUTE-001 — Homepage

**Given** the application is running  
**When** a user opens `/`  
**Then** the homepage renders without an error and provides a clear route into ordering.

### AC-ROUTE-002 — Menu

**Given** the application is running  
**When** a user opens `/menu`  
**Then** the menu renders searchable and filterable products.

### AC-ROUTE-003 — Product details

**Given** a valid product slug  
**When** a user opens `/menu/[productSlug]`  
**Then** the product and configuration options render correctly.

### AC-ROUTE-004 — Cart

**Given** the application is running  
**When** a user opens `/cart`  
**Then** the cart renders either its items or a useful empty state.

### AC-ROUTE-005 — Invalid product

**Given** an unknown product slug  
**When** the product route is opened  
**Then** the app shows an intentional not-found experience and does not crash.

## 3. Homepage

### AC-HOME-001 — Brand and purpose

The first viewport clearly communicates Burger Buddies-inspired branding, food ordering, and a primary **Order Now** action.

### AC-HOME-002 — Branch context

Mirpurkhas is visible as the selected or default demonstrated branch.

### AC-HOME-003 — Branch selector

A user can open and close the branch selector using pointer and keyboard controls.

### AC-HOME-004 — Primary navigation

The **Order Now** and **View Menu** actions navigate to `/menu`.

### AC-HOME-005 — Featured content

The page includes at least one featured deal or promotion area and at least one product or category section.

### AC-HOME-006 — Cart visibility

The current cart quantity is visible through the header or mobile navigation after items are added.

### AC-HOME-007 — Disclaimer

The unofficial-concept disclaimer is present and readable.

## 4. Menu

### AC-MENU-001 — Product rendering

The menu shows 8–12 realistic concept products using typed local data.

### AC-MENU-002 — Search

Entering a search term filters products by relevant name or description content without a full page reload.

### AC-MENU-003 — Category filter

Selecting a category updates the visible products and clearly indicates the selected category.

### AC-MENU-004 — Mobile category navigation

Category controls remain usable at 360px and may scroll horizontally without causing page-level horizontal overflow.

### AC-MENU-005 — Empty result

A search or category combination with no results shows a useful empty state and a clear recovery action.

### AC-MENU-006 — Availability

Unavailable products are visually and textually identified and cannot be added as though available.

### AC-MENU-007 — Product action

A customizable product opens its product-detail route. A deliberately simple quick-add product may be added directly.

### AC-MENU-008 — Price honesty

Unverified concept prices are identified as demo prices through a page-level or item-level message.

## 5. Product configuration

### AC-PRODUCT-001 — Required choices

A product with a required option cannot be added until a valid choice is selected.

### AC-PRODUCT-002 — Optional extras

A user can select and deselect optional extras.

### AC-PRODUCT-003 — Dynamic unit price

Selected price adjustments are reflected in the displayed unit price.

### AC-PRODUCT-004 — Quantity

Quantity can be increased and decreased, cannot fall below 1, and is capped at a reasonable demo maximum.

### AC-PRODUCT-005 — Dynamic total

The add-to-cart total equals configured unit price multiplied by quantity.

### AC-PRODUCT-006 — Instructions

Special instructions can be entered, are length-limited, and are retained in the cart item.

### AC-PRODUCT-007 — Validation feedback

Missing required selections produce specific, nearby feedback rather than silent failure.

### AC-PRODUCT-008 — Add to cart

A valid configured product is added with its product snapshot, selected options, quantity, instructions, unit price, and line total.

### AC-PRODUCT-009 — Confirmation

After adding, the user receives clear feedback and can continue to the menu or cart.

### AC-PRODUCT-010 — Sticky action

On mobile, the primary add action remains accessible without covering essential content.

## 6. Cart behavior

### AC-CART-001 — Item display

Each cart item displays product name, quantity, selected options, instructions when present, unit price, and line total.

### AC-CART-002 — Quantity update

A user can change item quantity and totals update correctly.

### AC-CART-003 — Remove item

A user can remove an item and the cart count and subtotal update.

### AC-CART-004 — Customized item identity

Items with materially different configurations remain separate cart lines.

### AC-CART-005 — Persistence

Cart contents survive a browser refresh after client hydration.

### AC-CART-006 — Malformed storage

Malformed or stale saved cart data is handled defensively and does not crash the app.

### AC-CART-007 — Empty state

An empty cart provides a clear action back to the menu.

### AC-CART-008 — Subtotal

The subtotal equals the sum of all line totals and is formatted in PKR.

## 7. Branch state

### AC-BRANCH-001 — Default

The application has a safe Mirpurkhas demo default or requests branch selection before checkout.

### AC-BRANCH-002 — Persistence

A selected branch remains available while navigating between routes and after refresh where implemented.

### AC-BRANCH-003 — Safe configuration

The WhatsApp destination comes from branch/environment configuration and is not duplicated across page components.

### AC-BRANCH-004 — Missing configuration

A missing WhatsApp number produces a clear safe error and does not create a broken external link.

## 8. Checkout form

### AC-FORM-001 — Order type

A user can choose delivery or pickup and the visible fields adapt accordingly.

### AC-FORM-002 — Name

Full name is required and receives inline validation.

### AC-FORM-003 — Phone

Phone is required, accepts common Pakistani mobile formatting, and is normalized safely.

### AC-FORM-004 — Delivery address

Address is required only for delivery.

### AC-FORM-005 — Landmark

Landmark is optional and included in the preview when provided.

### AC-FORM-006 — Notes

Order notes are optional and length-limited.

### AC-FORM-007 — Invalid submit

The WhatsApp preview cannot open while required data is invalid.

### AC-FORM-008 — Error focus

On invalid submission, focus or clear guidance moves the user to the first relevant error.

## 9. WhatsApp preview and link

### AC-WA-001 — Pure generation

WhatsApp message generation is implemented in a reusable pure utility, not directly embedded as page JSX logic.

### AC-WA-002 — Required content

The preview contains branch, order type, products, quantities, options, instructions, subtotal, fee note, customer information, and confirmation request.

### AC-WA-003 — Readability

The message uses line breaks and grouping that remain readable in the in-app preview and encoded WhatsApp link.

### AC-WA-004 — URL encoding

Special characters, spaces, and line breaks are safely encoded in the click-to-chat URL.

### AC-WA-005 — No automatic send

The app never sends a WhatsApp message automatically.

### AC-WA-006 — Demo mode

With `NEXT_PUBLIC_DEMO_MODE=true`, the primary action opens an in-app preview and does not automatically contact Burger Buddies.

### AC-WA-007 — External continuation

When external continuation is enabled, it uses only the configured number and requires a deliberate user action.

### AC-WA-008 — Missing number

If no safe number is configured, the external continuation action is disabled with a useful explanation.

## 10. Visual and responsive quality

### AC-UI-001 — Brand specificity

The interface uses a controlled dark, orange, red, and food-led direction consistent with supplied references and does not look like a generic SaaS template.

### AC-UI-002 — Mobile widths

All primary routes are reviewed at 360px, 390px, and 430px.

### AC-UI-003 — No overflow

No route has unintended page-level horizontal overflow.

### AC-UI-004 — Desktop composition

Desktop uses an intentional header, content width, grid, and spacing rather than merely stretching the mobile layout.

### AC-UI-005 — Images

Product images preserve aspect ratio, do not visibly stretch, and use useful alternative text.

### AC-UI-006 — Primary actions

Primary actions are easy to locate and remain practical at mobile widths.

### AC-UI-007 — Long content

Long product names, option labels, addresses, and instructions wrap without breaking the layout.

### AC-UI-008 — Demo data clarity

Demo prices and unofficial status are visible without overwhelming the ordering experience.

## 11. Accessibility baseline

### AC-A11Y-001 — Semantics

Pages use appropriate landmarks, headings, buttons, links, labels, and lists.

### AC-A11Y-002 — Keyboard

All primary interactions can be completed using a keyboard.

### AC-A11Y-003 — Focus

Interactive elements have visible focus states.

### AC-A11Y-004 — Dialog focus

Branch and WhatsApp preview dialogs manage focus and return it to the triggering control when closed.

### AC-A11Y-005 — Form labels

Every form input has a programmatically associated label.

### AC-A11Y-006 — Error association

Validation errors are associated with their fields and are not communicated by color alone.

### AC-A11Y-007 — Motion

The app respects reduced-motion preferences.

### AC-A11Y-008 — Contrast

Text and controls remain readable on dark surfaces.

## 12. Content integrity

### AC-CONTENT-001 — No official claim

No page describes the concept as official or commissioned.

### AC-CONTENT-002 — No fabricated results

No testimonials, order counts, conversion claims, delivery guarantees, or business results are invented.

### AC-CONTENT-003 — Unverified details

Unverified prices, hours, addresses, delivery areas, and policies are labelled, omitted, or presented as demo data.

### AC-CONTENT-004 — Product evidence

Business-specific product names are supported by supplied references or clearly marked as demo content.

### AC-CONTENT-005 — Disclaimer

The required unofficial-concept disclaimer appears in a readable location.

## 13. Engineering quality

### AC-ENG-001 — TypeScript

Strict TypeScript remains enabled and implementation code does not rely on `any` without an explicitly documented necessity.

### AC-ENG-002 — Client boundaries

Server Components are used by default; client boundaries are limited to interactive areas.

### AC-ENG-003 — Shared data

Products, categories, branches, and promotions use centralized typed data rather than duplicated component constants.

### AC-ENG-004 — Shared utilities

Currency, totals, phone normalization, message generation, and WhatsApp URL generation use shared utilities.

### AC-ENG-005 — Error handling

Expected missing or malformed data produces intentional errors or empty states rather than silent failure.

### AC-ENG-006 — Dependencies

No heavy dependency is added when platform or existing project capabilities are sufficient.

### AC-ENG-007 — Environment example

An `.env.example` documents demo mode and WhatsApp configuration without exposing secrets or unintended live values.

## 14. Verification gates

The following must pass before the concept is considered ready:

```bash
npm run lint
npm run build
```

When configured:

```bash
npm run typecheck
npm test
```

Do not report a command as passing unless it was actually executed successfully.

## 15. Manual demonstration test

A reviewer must be able to perform this flow in 40–60 seconds:

1. Open homepage.
2. Confirm Mirpurkhas branch.
3. Open menu.
4. Search or select a category.
5. Open Al-Arabi Burger or another featured configurable product.
6. Select a required option and extra.
7. Change quantity.
8. Add to cart.
9. Choose delivery.
10. Enter valid customer details.
11. Preview the WhatsApp order.
12. Confirm no restaurant contact occurs in demo mode.

## 16. Release blockers

The concept must not be presented when any of these are true:

- Main ordering journey is broken.
- Live restaurant contact can occur accidentally.
- Cart total is incorrect.
- Required product options can be bypassed.
- Product or branch pages crash on refresh.
- Mobile layout has significant overflow.
- Placeholder or broken imagery dominates key screens.
- Demo prices appear verified when they are not.
- The app claims official endorsement.
- Production build fails.

## 17. Definition of done

The first concept release is done when all critical acceptance criteria pass, the primary demo flow works in under one minute, the app is deployed to a reviewable URL, and remaining non-blocking content assumptions are documented clearly.
