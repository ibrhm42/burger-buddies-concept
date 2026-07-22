# Design Source of Truth

**Decision:** Use the Emmanuel Aziabunam premium dark food-ordering reference as the visual north star for the Burger Buddies concept.  
**Status:** Locked for implementation unless Ibrahim explicitly approves a change.

## 1. Authority order

When guidance conflicts, use this precedence:

1. `public/references/ui/premium-dark-ordering-reference.svg`
   - visual polish
   - spatial density
   - dark surface hierarchy
   - food-image prominence
   - card and control proportions
   - mobile navigation
   - product-detail composition
   - cart presentation
2. Files in `docs/design-handoff/`
   - Burger Buddies adaptation
   - screens missing from the reference
   - exact tokens
   - interactions
   - responsive transformations
   - QA and implementation phases
3. `docs/product-brief.md` and `docs/acceptance-criteria.md`
   - scope
   - functional behavior
   - release requirements
4. `docs/content-inventory.md`
   - evidence status
   - content verification
   - truthfulness
5. `docs/visual-direction.md`
   - broader brand principles where not superseded here

Existing starter code has no visual authority.

## 2. What is approved from the reference

The implementation should preserve these principles:

- Near-black app background with layered charcoal surfaces.
- Warm amber-orange primary actions against the dark UI.
- Food photography as the dominant visual element.
- Rounded, tactile mobile controls and panels.
- Compact layouts with deliberate breathing room.
- Strong contrast and clear price/action hierarchy.
- Location context near the top of discovery screens.
- Search and filtering presented as a unified utility row.
- Promotional content contained in a bright, high-contrast panel.
- Large product-detail hero image with an overlapping information surface.
- Sticky bottom price/action bar on product details.
- Compact horizontal cart rows with strong quantity controls.
- Elevated cart summary and sticky checkout action.
- Mobile bottom navigation that feels native and useful.

## 3. What must not be copied

The final app must not reproduce the reference one-for-one.

Do not copy:

- KFC, Domino's, El Padrino, or other marketplace brand names.
- Ratings, reviews, distance, or 20-minute delivery claims.
- Marketplace categories such as Stores or Groceries.
- Profile, Payments, Orders, or order-history navigation.
- Voucher functionality unless explicitly added later.
- Exact product photos as Burger Buddies products.
- Exact composition, text, iconography, or distinctive visual arrangement at a level that creates a clone.
- Dollar pricing.
- Copyright or authorship claims over the source design.

The result must be an original Burger Buddies direct-ordering product influenced by visual principles, not a replica.

## 4. Burger Buddies adaptation

The reference is a multi-restaurant marketplace. This concept is a single-brand direct-ordering experience.

Replace marketplace concepts with:

| Reference concept | Burger Buddies adaptation |
|---|---|
| Marketplace profile/avatar | Burger Buddies logo and selected branch |
| Generic location | “Delivering from Mirpurkhas” branch selector |
| Food / stores / groceries | Popular / Burgers / Pizza / Deals / Pasta / Sides / Drinks |
| Ratings and restaurant names | Product description, customization cue, and demo price |
| Distance and delivery time | Product choices, availability, and price adjustments |
| Checkout payment | Structured WhatsApp order preview |
| Orders / Payments / Profile nav | Home / Menu / Deals / Cart |
| Marketplace voucher | Omit from phase one |

## 5. Required original screens and states

The reference does not fully define these. The handoff does:

- Dedicated menu page
- Branch-selection bottom sheet/dialog
- Product option groups
- Extras and quantity states
- Special-instructions field
- Add-to-cart confirmation
- Sticky cart summary on menu
- Delivery/pickup selector
- Customer details form
- WhatsApp order preview
- Demo-mode notice
- Empty cart
- No search results
- Product unavailable
- Required-option validation
- Missing WhatsApp configuration
- Desktop and tablet layouts

## 6. Brand expression

The app should feel like Burger Buddies has upgraded from social-media ordering into a mature digital product.

Use:

- Burger Buddies logo and recognizable warm palette
- Deep orange as the main action color
- Red only for promotions, urgency, or brand accents
- Warm white text
- Strong burger, pizza, fries, and deal imagery
- Subtle flame/grill energy in secondary decoration

Do not turn the interface into a social poster. Ordering clarity has priority over decorative branding.

## 7. Product truthfulness

All business-specific content must be treated according to `docs/content-inventory.md`.

- Use PKR.
- Mark unverified prices as concept/demo data.
- Do not claim guaranteed delivery speed.
- Do not invent ratings, reviews, opening hours, delivery areas, or food-preparation methods.
- Do not say Burger Buddies commissioned or approved the work.

Required disclaimer:

> Unofficial ordering concept created for demonstration purposes. Burger Buddies has not commissioned or endorsed this prototype.

## 8. Visual completion standard

A route is not visually complete until:

1. It has been rendered at the required mobile and desktop sizes.
2. Screenshots have been inspected.
3. High-impact deviations from the reference language and handoff have been corrected.
4. Content and imagery no longer look like starter placeholders.
5. Sticky controls, navigation, and forms work at narrow widths.
6. Desktop looks intentionally designed rather than stretched.

## 9. Change control

Codex may make small implementation decisions when the handoff is silent, but must:

- preserve the approved design language
- state the decision in the completion report
- avoid changing core composition without approval
- request clarification when a decision materially changes the sales story or product scope

Only Ibrahim can approve a new visual direction or a departure from this source-of-truth hierarchy.
