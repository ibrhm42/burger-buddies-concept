# Codex Implementation Plan

## 1. Objective

Implement a polished, responsive, single-brand Burger Buddies ordering demo in Next.js using the Emmanuel Aziabunam reference as the visual north star and the design-handoff documents as the complete adaptation specification.

The work must remain a sales prototype, not expand into a production restaurant platform.

## 2. Required routes

```text
/
/menu
/menu/[productSlug]
/cart
```

Required supporting states:

- branch selector
- WhatsApp order preview
- empty cart
- no search results
- unavailable product
- required-option validation
- missing WhatsApp destination

## 3. Phase 0 — repository audit

Codex must:

1. Read `AGENTS.md` and every document listed in its required reading order.
2. Inspect the reference SVG and existing Burger Buddies assets.
3. Inspect current app structure and package versions.
4. Review Next.js 16 documentation in `node_modules/next/dist/docs/` for APIs used.
5. Report:
   - current repository state
   - missing assets
   - intended architecture
   - likely files to add/change
   - risks and assumptions

### Gate

Do not begin broad implementation until the interpretation and plan are coherent.

## 4. Phase 1 — foundation

### Technical foundation

Create or confirm:

- strict domain types
- semantic theme variables
- fonts using `next/font`
- application metadata
- page shell
- providers boundary
- reusable layout primitives
- `.env.example` handling

### Suggested folders

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── menu/
│   │   ├── page.tsx
│   │   └── [productSlug]/page.tsx
│   └── cart/page.tsx
├── components/
│   ├── brand/
│   ├── cart/
│   ├── checkout/
│   ├── layout/
│   ├── menu/
│   ├── product/
│   └── ui/
├── context/
├── data/
├── hooks/
├── lib/
└── types/
```

### Design foundation components

Implement:

- AppHeader
- DesktopHeader
- MobileBottomNav
- BranchSelector
- SearchBar
- CategoryTabs
- PromotionCard
- ProductCard variants
- QuantitySelector
- form controls
- dialog/bottom-sheet primitive
- EmptyState
- ConceptDisclaimer

### Gate

Render a small component review surface or initial homepage shell. Verify tokens, typography, radii, and surface hierarchy before building all routes.

## 5. Phase 2 — static visual screens

Use typed local static data, but focus first on composition.

### Homepage

Implement:

- compact header
- branch context
- hero
- promotion
- categories
- best sellers
- delivery/pickup reassurance
- disclaimer
- bottom navigation

### Menu

Implement:

- shared header
- search
- categories
- optional promotion
- product cards
- empty-result state
- non-functional initial sticky cart composition if needed for visual review

### Product details

Implement:

- image hero
- overlapping information/configuration panel
- required and optional option-group visual states
- quantity
- instructions
- sticky Add to Cart action

### Cart

Implement:

- cart rows
- order type
- customer form
- totals
- sticky preview action
- empty state

### WhatsApp preview

Implement:

- dialog/sheet composition
- message card
- demo-mode notice
- edit and continuation actions

### Gate

Capture screenshots at 390 × 844 and 1440 × 1000. Correct visual hierarchy before adding complex state.

## 6. Phase 3 — domain data

Create typed models for:

- Branch
- Category
- Product
- ProductOptionGroup
- ProductOption
- Promotion
- CartItem
- CustomerDetails
- Fulfilment type

Create local data files:

```text
src/data/branches.ts
src/data/categories.ts
src/data/products.ts
src/data/promotions.ts
```

Requirements:

- 8–12 demo products
- PKR numeric prices
- configurable and simple products
- at least one unavailable product for state coverage
- labels or page note indicating demo prices

## 7. Phase 4 — branch and cart state

### BranchProvider

- safe Mirpurkhas default
- branch selection action
- persistence only where useful
- WhatsApp destination resolved from configuration
- safe missing-number behavior

### CartProvider

- add configured item
- merge equivalent configuration only
- update quantity
- edit/replace item
- remove item
- clear cart
- item count and subtotal
- versioned localStorage persistence
- defensive restoration after hydration

### Gate

Test cart add/update/remove/persistence manually and through focused tests if added.

## 8. Phase 5 — menu behavior

Implement:

- local search
- category filtering
- Popular curated filter
- quick-add for genuinely simple items
- Customize navigation for configured items
- no-results recovery
- unavailable handling
- sticky cart summary when non-empty

## 9. Phase 6 — product configuration

Implement:

- product slug resolution
- not-found route behavior
- required single-choice options
- optional multiple choices
- max-selection support
- quantity bounds
- special-instructions limit
- dynamic unit and line totals
- focused validation
- added-to-cart feedback
- edit-existing-item support if feasible within scope

## 10. Phase 7 — checkout and WhatsApp

Implement:

- delivery/pickup segmented control
- conditional fields
- Pakistani phone normalization
- inline validation and first-error focus
- pure message generator
- pure click-to-chat URL generator
- preview dialog/sheet
- demo-mode protection
- safe missing-number handling

The app must never send a message automatically.

## 11. Phase 8 — responsive completion

Review and correct:

- 360 × 800
- 390 × 844
- 430 × 932
- 768 × 1024
- 1440 × 1000

Required desktop compositions:

- desktop header
- split homepage hero
- product grid
- two-column product details
- two-column cart and summary
- centered dialogs

## 12. Phase 9 — accessibility and resilience

Verify:

- semantic landmarks and headings
- keyboard navigation
- visible focus
- dialog focus trap/return
- field labels and error associations
- reduced-motion support
- contrast
- long content
- missing images
- invalid saved data
- empty and error states

## 13. Phase 10 — release checks

Run:

```bash
npm run lint
npm run build
```

Add and run typecheck/tests when configured.

Then complete the manual 40–60 second demonstration:

1. Open home.
2. Confirm Mirpurkhas.
3. Open menu.
4. Find a product.
5. Customize it.
6. Add to cart.
7. Choose delivery.
8. Enter customer details.
9. Preview WhatsApp order.
10. Confirm demo mode prevents accidental contact.

## 14. Scope exclusions

Do not add during this implementation:

- authentication
- database
- API backend
- admin dashboard
- online payment
- order tracking
- POS integration
- inventory
- loyalty
- coupons
- rider management
- analytics tracking

## 15. Commit strategy

Prefer focused commits by phase, for example:

```text
feat: establish premium dark design system
feat: build Burger Buddies discovery and menu screens
feat: add product customization and cart state
feat: add WhatsApp checkout preview
fix: complete responsive and accessibility pass
```

Do not mix unrelated refactoring with visual implementation.

## 16. Completion reporting

At the end of each phase, report:

- files changed
- behavior implemented
- visual screenshots reviewed
- tests/checks run
- deviations from the handoff
- remaining placeholders
- next phase recommendation
