# CLAUDE.md

## Project Identity

You are working on **Burger Buddies Ordering Concept**, an unofficial, mobile-first ordering prototype created by Ibrahim as a sales demonstration for Burger Buddies.

This is not an official Burger Buddies website. Burger Buddies has not commissioned or endorsed the project.

The concept demonstrates how customers could browse a structured menu, customize products, prepare an order, and send a complete message through the restaurant's existing WhatsApp workflow.

Read this file and `docs/BURGER_BUDDIES_CONCEPT_PROJECT.md` before planning or editing.

---

## Operating Rules

### 1. Understand before editing

Before making meaningful changes:

1. Inspect the repository.
2. Read the project documentation.
3. Inspect the supplied references.
4. Identify the route, component, state, and data changes required.
5. State assumptions when information is missing.
6. Prefer a small, coherent implementation over an oversized abstraction.

Do not rewrite working architecture without a clear reason.

### 2. Plan first for large tasks

For work involving multiple routes, providers, data structures, or architectural changes:

- First provide a concise implementation plan.
- Name the files likely to change.
- Identify risks.
- Do not begin implementation until the plan is accepted when the user explicitly requests a planning pass.

For small, isolated fixes, proceed directly.

### 3. Protect the sales-demo boundary

This is a functional concept, not a free production platform.

Do not add any of the following unless explicitly requested:

- Database
- Authentication
- Admin dashboard
- Online payment
- Live order tracking
- POS integration
- Inventory synchronization
- Kitchen display system
- Rider management
- Loyalty system
- Coupon engine
- Production analytics
- Multi-tenant architecture
- Complex API layer

Use local typed data for the concept.

### 4. Never misrepresent the project

Do not write copy that suggests:

- Burger Buddies hired Ibrahim.
- Burger Buddies approved the concept.
- The app is the official Burger Buddies website.
- Demo prices are verified.
- Delivery times are guaranteed.
- Sales improvements are proven.
- Testimonials or performance results exist.

Keep a discreet disclaimer visible:

> Unofficial ordering concept created for demonstration purposes. Burger Buddies has not commissioned or endorsed this prototype.

### 5. Protect against accidental WhatsApp orders

The app must support:

```env
NEXT_PUBLIC_DEMO_MODE=true
NEXT_PUBLIC_WHATSAPP_NUMBER=923XXXXXXXXX
```

When demo mode is enabled:

- The primary checkout action opens an in-app message preview.
- Do not automatically open the restaurant's WhatsApp.
- Do not send any message.
- Any external test link must use a configured test number.
- Never hard-code a restaurant phone number into interactive logic without explicit approval.

Even outside demo mode, the app may only open a prefilled WhatsApp conversation. It must never send automatically.

---

## Required Product Scope

The four primary routes are:

```text
/
 /menu
 /menu/[productSlug]
 /cart
```

The primary journey is:

1. Select branch.
2. Browse menu.
3. Search or filter products.
4. Open a product.
5. Select required options and optional extras.
6. Change quantity.
7. Add to cart.
8. Choose delivery or pickup.
9. Enter customer details.
10. Preview the formatted WhatsApp order.
11. Continue to WhatsApp only when allowed.

Do not add onboarding, authentication, or unnecessary intermediate screens.

---

## Technical Requirements

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Server Components by default
- Client Components only where interaction requires them
- React Context for branch and cart state
- `localStorage` for cart persistence
- `next/image`
- Accessible semantic HTML
- Vercel-compatible deployment

Prefer:

- Small focused components
- Clear domain types
- Pure utility functions
- Predictable state transitions
- Explicit validation
- Minimal dependencies

Avoid:

- Redux for this concept
- A generic state framework without need
- API routes without a real server requirement
- Premature generic modifier engines
- Over-engineered design systems
- `any`
- Silent error handling
- Hydration hacks that conceal state problems
- Massive client-side page components

---

## Rendering Rules

Use Server Components for:

- Static page shells
- Static catalog data loading
- Metadata
- Non-interactive sections
- Product route lookup where practical

Use Client Components for:

- Branch selection
- Cart state
- Search
- Category filtering
- Product options
- Quantity controls
- Customer form
- `localStorage`
- Dialogs and bottom sheets
- Toasts
- WhatsApp preview

Keep client boundaries as low in the tree as practical.

Do not mark entire pages with `"use client"` only to support one small interactive control.

---

## Data Rules

Store concept data under:

```text
src/data/
├── branches.ts
├── categories.ts
├── products.ts
└── promotions.ts
```

Store shared types under:

```text
src/types/
```

Use prices as numbers in PKR.

Format prices through a shared utility.

Do not duplicate product or branch definitions across components.

Cart items must store a snapshot of:

- Product name
- Product image
- Base price
- Selected options
- Option prices
- Quantity
- Instructions
- Unit price
- Line total

This prevents cart rendering from depending on mutable UI state.

---

## State Rules

### BranchProvider

It should:

- Expose the selected branch.
- Allow branch changes.
- Provide the configured WhatsApp destination.
- Use a safe default.
- Avoid reading browser storage during server rendering.
- Avoid hydration mismatch.

### CartProvider

It should:

- Add configured products.
- Update quantities.
- Remove items.
- Clear cart.
- Calculate totals.
- Persist to `localStorage`.
- Restore safely after hydration.
- Keep customized items distinguishable.
- Avoid duplicate side effects in development.
- Handle malformed saved data defensively.

Do not store derived totals independently when they can be calculated.

---

## Form and Validation Rules

For delivery:

- Full name required
- Phone number required
- Address required
- Landmark optional
- Order notes optional

For pickup:

- Full name required
- Phone number required
- Pickup note optional

Use clear inline validation.

Do not rely on placeholder text as the field label.

Do not permit WhatsApp preview when required data is invalid.

Phone validation should be helpful rather than excessively rigid. Support common Pakistani mobile formatting and normalize before use.

---

## WhatsApp Message Rules

The message must include:

- Greeting
- Branch
- Order type
- Product quantities
- Selected options
- Special instructions
- Subtotal
- Delivery-charge note
- Customer name
- Customer phone
- Address for delivery
- Landmark when supplied
- Final confirmation request

Use a pure utility function to generate the message.

Use another utility to create a safely encoded click-to-chat URL.

Do not build the message directly inside a page component.

Do not include unsupported promises.

---

## Visual Direction

The existing Burger Buddies identity is energetic, dark, orange, red, flame-inspired, and food-led.

Translate that into a cleaner ordering interface.

The product should feel:

- Bold
- Appetizing
- Modern
- Fast
- Local
- Practical
- Easy to scan

It should not feel:

- Like a generic SaaS template
- Like a luxury restaurant
- Like a generic AI restaurant landing page
- Overloaded with gradients
- Overloaded with glassmorphism
- Overloaded with rounded cards
- Visually noisy on every section

### Color roles

- Near-black page background
- Charcoal surfaces
- Orange primary actions
- Restrained red promotional accents
- Warm off-white primary text
- Muted warm-gray secondary text
- Green only for WhatsApp actions

### Typography

Prefer:

- Condensed display font for major headings
- Highly readable sans-serif for body and interface text
- `next/font`

Suggested pairing:

- Oswald
- Inter

### Layout

- Mobile-first
- Intentional desktop adaptation
- Strong spacing hierarchy
- Moderate radii
- Minimum practical tap targets
- Sticky actions only when useful
- No horizontal page overflow

### Motion

- Restrained
- Fast
- Functional
- Reduced-motion aware

Avoid decorative motion that slows the ordering journey.

---

## Reference Asset Rules

References may include:

- Facebook profile screenshots
- Instagram profile screenshots
- Individual product posts
- Logo
- Storefront
- Interior
- Offer graphics
- Branch details

Use references to understand:

- Brand style
- Product naming
- Colors
- Promotional tone
- Branch presence
- Food imagery

Do not treat social profile screenshots as website layouts.

Do not stretch low-resolution screenshots into product hero images.

Prefer focused product images.

When an asset is missing, use a clearly temporary placeholder and record it rather than hiding the problem.

---

## Component Guidance

Likely shared components include:

```text
AppHeader
DesktopHeader
MobileBottomNav
BranchSelector
HeroSection
DealCard
CategoryTabs
CategoryCard
ProductCard
ProductGrid
ProductOptionGroup
QuantitySelector
PriceDisplay
CartItem
OrderTypeSelector
CustomerDetailsForm
OrderSummary
WhatsAppPreviewDialog
EmptyState
ConceptDisclaimer
```

This is guidance, not a requirement to create every component immediately.

Avoid components that only wrap a single element without adding behavior, semantics, or repeated styling.

---

## Error and Empty States

Handle at least:

- Invalid product slug
- Product unavailable
- Empty cart
- Empty search result
- Missing image
- Malformed saved cart data
- Missing branch configuration
- Invalid checkout form
- Missing WhatsApp number
- Demo mode enabled

Errors should be clear to the user and useful during development.

Do not fail silently.

---

## Accessibility Rules

- Use semantic elements.
- Maintain logical heading order.
- Label every form control.
- Provide visible focus styles.
- Support keyboard use.
- Manage dialog focus.
- Use descriptive alt text.
- Do not use color alone for state.
- Respect reduced motion.
- Keep text readable on dark backgrounds.
- Do not shrink disclaimers into unreadable text.

---

## Responsive Test Targets

Always review:

- 360px
- 390px
- 430px
- Tablet width
- Desktop width

Check:

- No overflow
- Product cards
- Category scrolling
- Sticky buttons
- Form usability
- Bottom navigation
- Cart summary
- Dialog sizing
- Long product names
- Long addresses
- Mobile keyboard impact

Desktop must not be a stretched mobile screen.

---

## Code Quality

### TypeScript

- Keep strict typing.
- Avoid `any`.
- Narrow unknown data.
- Use discriminated unions where they improve clarity.
- Export domain types from stable locations.
- Do not create duplicate near-identical types.

### React

- Keep render functions readable.
- Extract repeated logic.
- Avoid unnecessary effects.
- Avoid storing derived state.
- Memoize only when there is a measured or clear reason.
- Use stable keys.
- Do not use array indexes as keys for mutable lists.

### Styling

- Prefer Tailwind utilities and shared tokens.
- Avoid large unstructured blocks of repeated classes.
- Use CSS variables for core theme values where useful.
- Do not hard-code the same brand values throughout the app.

### Utilities

Keep separate pure functions for:

- Currency formatting
- Cart totals
- Option totals
- Phone normalization
- WhatsApp message generation
- WhatsApp URL generation
- Cart item identity

---

## Verification Commands

Before completing a meaningful implementation task, run the relevant checks.

Expected commands:

```bash
npm run lint
npm run build
```

If a type-check script exists:

```bash
npm run typecheck
```

If tests are added:

```bash
npm test
```

Do not claim checks passed unless they were actually run and passed.

When a command fails:

1. Report the failure.
2. Identify the likely cause.
3. Fix issues within the task scope.
4. Re-run the check.
5. Report any remaining issue honestly.

---

## Completion Report

After implementation work, summarize:

1. What changed
2. Files added or modified
3. Important decisions
4. Assumptions
5. Validation performed
6. Remaining risks or placeholders
7. Suggested next step

Keep the report factual.

Do not claim visual perfection without reviewing the rendered result.

---

## Definition of Done

The concept is ready for a sales demonstration when:

- All four routes work.
- Branch selection works.
- Search and category filtering work.
- Product customization works.
- Price updates are correct.
- Cart state persists.
- Cart items can be updated and removed.
- Checkout form validation works.
- WhatsApp preview is readable.
- Demo mode prevents accidental contact.
- Mobile and desktop layouts are intentional.
- The disclaimer is present.
- No false claims are included.
- Lint and production build pass.
- The complete journey can be demonstrated in under one minute.
