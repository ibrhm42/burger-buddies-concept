# AGENTS.md

## Project identity

You are implementing **Burger Buddies Ordering Concept**, an unofficial, mobile-first Next.js sales prototype created by Ibrahim for Burger Buddies in Mirpurkhas, Pakistan.

This is not an official Burger Buddies product. Burger Buddies has not commissioned or endorsed it. The app must never imply otherwise.

The concept demonstrates a direct-ordering journey that keeps WhatsApp as the final handoff:

1. Confirm the Mirpurkhas branch.
2. Browse and search the menu.
3. Configure products.
4. Add items to a persistent cart.
5. Enter delivery or pickup details.
6. Preview a complete WhatsApp order.
7. Continue to WhatsApp only through an explicit, safe action.

## Required reading order

Before planning or changing application code, read these files in order:

1. `docs/design-handoff/README.md`
2. `docs/design-handoff/DESIGN-SOURCE-OF-TRUTH.md`
3. `docs/design-handoff/decision-log.md`
4. `docs/design-handoff/reference-analysis.md`
5. `docs/design-handoff/design-tokens.md`
6. `docs/design-handoff/component-specifications.md`
7. `docs/design-handoff/responsive-behavior.md`
8. `docs/design-handoff/interaction-specifications.md`
9. `docs/design-handoff/content-map.md`
10. `docs/design-handoff/implementation-plan.md`
11. `docs/design-handoff/visual-qa-checklist.md`
12. `docs/product-brief.md`
13. `docs/acceptance-criteria.md`
14. `docs/content-inventory.md`
15. `docs/visual-direction.md`
16. `docs/BURGER_BUDDIES_CONCEPT_PROJECT.md`

Inspect the in-repository visual synopsis at:

`public/references/ui/premium-dark-ordering-reference.svg`

Also read:

`public/references/ui/reference-source.md`

When web access is available, inspect the linked original Emmanuel Aziabunam Dribbble work. If the original user-supplied screenshot is available in the active Codex workspace, use it as the highest-fidelity visual reference.

## Design source-of-truth precedence

When sources disagree, follow this order:

1. The original user-supplied Emmanuel Aziabunam reference screenshot, when available, for visual quality, density, proportions, surface hierarchy, food-image prominence, mobile polish, product-detail composition, and cart presentation.
2. The source link and in-repository synopsis under `public/references/ui/`.
3. `docs/design-handoff/*` for Burger Buddies adaptation, missing screens, tokens, responsive behavior, interactions, and implementation decisions.
4. `docs/product-brief.md` and `docs/acceptance-criteria.md` for functional behavior and release requirements.
5. `docs/content-inventory.md` for evidence status and truthfulness.
6. Existing application code only where it does not conflict with the approved handoff.

Do not copy the reference literally. Reinterpret its visual principles as an original, single-brand Burger Buddies ordering experience.

## Next.js version rule

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This repository uses Next.js `16.2.10`. APIs, conventions, and file structure may differ from training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing code that depends on framework behavior. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Mandatory workflow

### Phase 0 — audit and interpretation

Before implementation:

- Inspect the repository and reference assets.
- Read all required documents.
- Produce a concise design-interpretation report in the task response.
- Identify missing assets, assumptions, and implementation risks.
- Confirm the planned file structure and phase order.

Do not begin a large implementation from a vague prompt.

### Phase 1 — design foundation

Implement and review:

- fonts and theme tokens
- page shell
- mobile and desktop headers
- mobile bottom navigation
- buttons and icon buttons
- search and category controls
- product-card variants
- quantity controls
- form controls
- dialogs and bottom sheets
- loading, empty, unavailable, and validation states

Create a temporary internal component showcase only when it materially improves visual review. Remove it before final release unless explicitly retained.

### Phase 2 — static visual routes

Build the approved visual composition with typed local content before complex state:

- `/`
- `/menu`
- `/menu/[productSlug]`
- `/cart`

Also establish the branch selector and WhatsApp preview states.

### Phase 3 — product functionality

Add:

- typed branch, category, product, option, promotion, and cart models
- search and category filtering
- required and optional product choices
- dynamic pricing
- cart add, edit, remove, clear, and quantity updates
- `localStorage` persistence with safe hydration
- delivery/pickup form behavior
- Pakistani phone normalization
- WhatsApp message generation
- safe click-to-chat URL generation
- demo-mode safeguards

### Phase 4 — rendered visual QA

For every primary route, render and inspect at least:

- 360 × 800
- 390 × 844
- 430 × 932
- 768 × 1024
- 1440 × 1000

Compare the implementation against the approved reference and handoff. Correct high-impact differences in composition, typography, spacing, image crop, card proportions, sticky actions, navigation, and desktop adaptation.

Do not claim the UI is polished based only on code inspection.

### Phase 5 — verification and release

Run the applicable checks:

```bash
npm run lint
npm run build
```

If added:

```bash
npm run typecheck
npm test
```

Do not claim a check passed unless it was actually executed successfully.

## Technical rules

Use:

- Next.js App Router
- TypeScript with strict typing
- Tailwind CSS
- Server Components by default
- Client Components only where interaction requires them
- local typed data rather than a backend
- React Context for branch and cart state
- `localStorage` for persistence
- `next/image`
- semantic HTML
- Vercel-compatible deployment

Prefer:

- small focused components
- low client boundaries
- pure utilities
- semantic tokens
- predictable state transitions
- minimal dependencies
- accessible native behavior

Avoid:

- Redux or another global-state dependency without a demonstrated need
- authentication
- database or API infrastructure
- production admin tools
- online payment
- live tracking
- POS, inventory, rider, loyalty, or coupon systems
- generic shadcn defaults as the final visual identity
- `any`
- duplicated business data
- silent failures
- giant client-side page components
- premature abstractions

## Visual rules

The design should feel:

- premium dark
- food-led
- compact but comfortable
- modern and polished
- direct and easy to scan
- clearly Burger Buddies

Use:

- near-black backgrounds
- layered charcoal surfaces
- warm Burger Buddies orange for primary actions
- restrained red for promotions
- warm off-white text
- muted neutral secondary text
- WhatsApp green only for WhatsApp-specific actions
- strong product photography
- rounded but controlled forms and cards
- clear price and action hierarchy

Do not use:

- generic marketplace branding
- restaurant ratings, distance, or delivery-time claims copied from the reference
- profile, payment, or order-history navigation
- excessive gradients or glassmorphism
- excessive card nesting
- tiny prices or hidden actions
- social-post screenshots as final product cards
- unlabelled guessed prices

## Content and truthfulness

- Use Pakistani rupees.
- Mirpurkhas is the primary demonstrated branch.
- Treat unverified prices as demo data.
- Do not invent delivery times, ratings, reviews, opening hours, awards, sales results, or operational claims.
- Do not imply endorsement or a client relationship.
- Keep the disclaimer readable:

> Unofficial ordering concept created for demonstration purposes. Burger Buddies has not commissioned or endorsed this prototype.

## WhatsApp safety

Support:

```env
NEXT_PUBLIC_DEMO_MODE=true
NEXT_PUBLIC_WHATSAPP_NUMBER=923XXXXXXXXX
```

When demo mode is enabled:

- the checkout action opens an in-app preview first
- the restaurant is not contacted automatically
- no message is sent
- any external action uses only the explicitly configured number
- a missing number disables external continuation safely

Even outside demo mode, the app may only open a prefilled conversation after deliberate user action. It must never send automatically.

## Accessibility baseline

- Use semantic landmarks and headings.
- Label every form control.
- Provide visible focus states.
- Support keyboard use.
- Manage dialog focus and focus return.
- Associate validation errors with fields.
- Do not use color alone for state.
- Respect `prefers-reduced-motion`.
- Maintain readable contrast on dark surfaces.

## Completion report

After each meaningful implementation phase, report:

1. What changed
2. Files added or modified
3. Visual decisions made
4. Assumptions and placeholders
5. Screens and breakpoints reviewed
6. Commands executed and results
7. Remaining risks or deviations
8. Recommended next step

Keep the report factual. Do not call a screen visually complete without inspecting the rendered result.
