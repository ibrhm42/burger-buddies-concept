# Component Specifications

**Status:** Required implementation guidance  
**Goal:** Give Codex enough visual and behavioral detail to build an original Burger Buddies UI that remains faithful to the approved reference.

## 1. App shell

### Mobile

- Near-black page background.
- Content begins below a compact safe-area-aware header.
- Mobile bottom navigation is fixed or sticky at the bottom.
- Route content includes enough bottom padding to avoid overlap with bottom navigation and sticky actions.
- Sticky product/cart actions sit above the bottom navigation or replace it where appropriate.

### Desktop

- Full-width top header.
- Centered content container up to `--content-max`.
- No mobile phone-frame simulation.
- Bottom navigation is removed.

## 2. AppHeader

### Required content

- Burger Buddies logo/mark
- branch context
- cart control and badge
- optional back control on inner routes

### Home/menu mobile variant

- Left: logo in 40–44px circular or compact container.
- Center: small label “Delivering from” and stronger “Mirpurkhas” row with chevron.
- Right: 44–48px rounded cart icon control with badge.
- Height around 64–72px excluding safe area.

### Inner-route variant

- Left: circular back button.
- Center: route title or compact product context.
- Right: cart or clear/overflow action only when useful.

### Desktop variant

- Logo and wordmark at left.
- Navigation: Home, Menu, Deals.
- Branch selector near center/right.
- Cart button with count and estimated subtotal at far right when non-empty.

## 3. MobileBottomNav

Destinations:

- Home
- Menu
- Deals
- Cart

Rules:

- Use icon plus short text label.
- Selected destination uses primary orange.
- Unselected items use muted text.
- Cart shows item count.
- Approximately 68–76px plus safe-area inset.
- Avoid large floating center actions.
- Hide on desktop.

## 4. BranchSelector

### Mobile

Use a bottom sheet:

- rounded top corners
- drag handle optional
- title: **Choose your branch**
- current branch clearly selected
- address/availability only when verified
- confirm action when selection changes

### Desktop

Use a centered dialog or anchored popover with the same content.

### Phase-one content

Mirpurkhas is the only guaranteed functional branch. Do not fabricate other branch details. Other branches may be omitted or clearly marked as unavailable in the concept.

## 5. SearchBar

- Full-width dark filled surface.
- Search icon at left.
- Placeholder: **Search burgers, pizzas and deals**.
- Clear button appears when text exists.
- Filter icon may be included only if it opens useful controls.
- Height about 48–52px.
- Rounded `radius-lg` or pill depending on composition.
- Visible keyboard focus.

## 6. CategoryTabs

Categories:

- Popular
- Burgers
- Pizza
- Deals
- Pasta
- Sides
- Drinks

Mobile:

- horizontal overflow with hidden scrollbar or visually restrained scrollbar
- selected item uses primary fill with inverse text
- unselected item uses surface fill and subtle border
- 40–44px minimum height

Desktop:

- may remain a horizontal row or become a compact side filter only when justified
- do not create a complex filter panel for this small concept

## 7. PromotionCard

Purpose: one strong promotional accent within dark discovery screens.

Required anatomy:

- offer label/headline
- concise supporting copy
- action
- clean food crop
- optional concept/demo indicator

Visual rules:

- bright orange/yellow or restrained red surface
- dark inverse text
- `radius-xl`
- food image bleeds from right/bottom edge
- avoid embedding an entire social post
- keep height compact on mobile

Do not use an unverified offer as though current. Clearly label concept promotions.

## 8. CategoryCard

Use only on homepage when visual category discovery adds value.

- compact image/icon
- category label
- selected/pressed feedback
- dark surface with subtle border
- not required on dedicated menu if tabs already suffice

## 9. ProductCard — discovery variant

Use for homepage best sellers.

### Mobile

- image-dominant vertical card
- width allows partial next-card visibility in a horizontal rail or two-column layout
- 4:3 or 1:1 image
- product name
- demo price
- optional concise descriptor
- favorite icon only if implemented consistently; otherwise omit
- clear add/customize action

### Desktop

- grid card with 4:3 image
- title and price prominent
- description limited to two lines
- action remains visible without hover

## 10. ProductCard — menu variant

### Mobile

Preferred efficient horizontal card:

- image around 104–112px square
- content column with product name, two-line description, demo price
- right/bottom action: **Add** or **Customize**
- unavailable state replaces action
- card surface uses restrained border and moderate radius

### Desktop

May become a vertical grid card while preserving the same information hierarchy.

### Action rules

- Simple item: **Add** quick-adds default configuration.
- Configurable item: **Customize** opens product details.
- Do not show a plus icon alone when customization is required.

## 11. ProductHero

- Large image-first region.
- Mobile hero fills most of the width and approximately 38–48% of initial viewport height.
- Use controlled crop and optional bottom gradient.
- Back button overlays top-left.
- Share/favorite controls are optional, not required for scope.
- No text-heavy promotional artwork as the final image.

Desktop:

- image occupies left column and stays visually dominant
- may include thumbnail rail only if multiple useful images exist

## 12. ProductInfoPanel

Mobile:

- overlaps product hero with `radius-2xl` top corners
- charcoal surface
- begins with product name, concise description, and base/demo price
- contains option groups with clear spacing
- extends naturally to page bottom

Desktop:

- separate right-side configuration panel
- may be sticky within viewport
- max readable width approximately 520px

## 13. ProductOptionGroup

Required anatomy:

- group title
- “Required” marker where applicable
- optional instruction such as “Choose one”
- option rows
- visible price adjustments
- nearby validation message

Single-choice rows:

- radio semantics
- selected border and soft primary background

Multiple-choice rows:

- checkbox semantics
- enforce max selections if configured

Do not hide required status in helper text.

## 14. QuantitySelector

- minus button
- numeric quantity
- plus button
- 44px practical target per button
- bright primary plus control inspired by the reference
- dark minus control
- disabled minimum state
- maximum demo quantity enforced

Variants:

- compact cart row
- standard product-detail control

## 15. SpecialInstructionsField

- visible label
- optional helper text
- multiline dark input
- character limit
- placeholder: **No onions, extra sauce, less spicy…**
- preserve entered value in cart item

## 16. StickyProductAction

Mobile:

- fixed/sticky bottom surface above safe area
- configured total at left
- **Add to Cart** button at right
- dark elevated container with primary action
- does not cover option content

Desktop:

- button may remain within sticky configuration panel rather than viewport-fixed

## 17. AddedToCartFeedback

Use one of:

- compact toast with **View Cart** action
- inline confirmation near sticky action
- sticky cart summary appearing after add

Avoid blocking modal confirmation for every add.

## 18. StickyCartSummary

Appears on menu when cart is non-empty.

Mobile content:

- item count and estimated subtotal
- **View Cart** action
- dark elevated surface
- primary accent for action
- positioned above bottom navigation

Example:

```text
2 items · Rs. 1,300            View Cart
```

## 19. CartItem

Required anatomy:

- thumbnail
- product name
- selected options summary
- instructions when present
- unit or line price
- quantity selector
- edit action
- remove action

Mobile:

- compact horizontal row
- configuration text may clamp after essential lines

Desktop:

- roomier row with clear columns

Do not hide removal behind an ambiguous overflow menu.

## 20. OrderTypeSelector

Segmented control:

- Delivery
- Pickup

Selected state uses primary accent or strong surface contrast.

Behavior:

- Delivery shows address and landmark fields.
- Pickup hides address fields and updates helper copy.
- Selection is included in WhatsApp message.

## 21. CustomerDetailsForm

Fields:

- Full name
- Phone number
- Address for delivery
- Nearby landmark optional
- Order notes optional

Visual treatment:

- labels above inputs
- dark filled fields
- `radius-lg`
- inline helper/error text
- avoid placeholder-only labels

Form should feel integrated into the cart summary, not like a generic white checkout page.

## 22. OrderSummary

Show:

- subtotal
- delivery fee: **To be confirmed**
- estimated total
- concept-price note

Use strong separation before final total.

Do not invent taxes or delivery fees.

## 23. StickyCheckoutAction

Mobile:

- estimated total at left
- **Preview WhatsApp Order** at right
- uses primary orange, not WhatsApp green

Desktop:

- stays within sticky summary column

## 24. WhatsAppPreviewDialog

Mobile:

- bottom sheet or full-height dialog
- dark outer container
- title: **Review WhatsApp order**
- demo-mode badge/notice
- light or pale-green message-preview card for readability
- edit/back action
- external continuation action

Desktop:

- centered modal with maximum readable width

Actions:

- **Back to edit**
- **Continue to WhatsApp** only when allowed

WhatsApp green is reserved for the continuation action and related icon.

## 25. EmptyState

Required variants:

- empty cart
- no search results
- missing product
- missing WhatsApp configuration

Each state includes:

- concise heading
- useful explanation
- one clear recovery action
- no decorative illustration required unless it adds real value

## 26. ConceptDisclaimer

Text:

> Unofficial ordering concept created for demonstration purposes. Burger Buddies has not commissioned or endorsed this prototype.

Placement:

- readable footer area
- optionally repeated in preview/demo information
- visually secondary but not hidden by extremely low contrast

## 27. Loading behavior

Prefer immediate local-data rendering. If route or image loading states are needed:

- use dark skeleton surfaces matching final proportions
- avoid generic spinning indicators as the primary loading experience
- prevent layout shift

## 28. Component implementation rule

Components should expose meaningful variants through typed props. Do not create a universal component system that obscures product-specific behavior. Reuse should improve consistency without turning the four-screen demo into a framework project.
