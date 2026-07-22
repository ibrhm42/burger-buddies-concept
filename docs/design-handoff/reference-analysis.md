# Approved Reference Analysis

## 1. Reference overview

The approved image presents three coordinated mobile screens:

1. Discovery/home
2. Product details
3. Cart

Its strongest quality is not any single decorative choice. It is the consistency between food photography, dark surfaces, rounded controls, compact typography, and persistent actions.

The Burger Buddies app should reproduce that level of coherence while using original layouts and Burger Buddies content.

## 2. Overall visual character

### Background and depth

- The base is almost black rather than pure black.
- Major panels use warmer, lighter charcoal surfaces.
- Elevation is communicated mostly by tonal contrast and edge separation, not dramatic shadows.
- Bright food photography creates much of the visual contrast.

### Accent usage

- A yellow-amber accent appears on selected states, quantity-add controls, promotional areas, and primary actions.
- The accent is used selectively, so it remains meaningful.
- Burger Buddies should shift this accent toward a deeper brand orange while retaining the same restraint.

### Typography

- Typography is modern, rounded, and highly readable.
- Headings are bold but not poster-like.
- Supporting copy is muted and compact.
- Prices and totals receive stronger emphasis than descriptions.
- The system relies more on weight and contrast than many font sizes.

### Shape language

- Search bars and buttons are strongly rounded.
- Cards and large surfaces use generous radii.
- Small content groups use restrained borders rather than every item becoming a floating card.
- Circular icon controls are used for back, favorite, filter, quantity, and overflow actions.

### Density

- The design is compact, but labels and controls still have room to breathe.
- Related controls are grouped tightly.
- Page-level sections have clearer separation.
- The Burger Buddies implementation should avoid both cramped social-poster density and oversized marketing whitespace.

## 3. Discovery/home screen

### Header

The reference uses:

- compact identity/avatar at left
- centered location context
- cart/action control at right

Burger Buddies adaptation:

- Burger Buddies logo at left
- “Delivering from” and “Mirpurkhas” with a chevron
- cart button with live item badge

The header should remain visually compact and usable as the customer moves through ordering.

### Search and filter

The search field and filter action share one row and appear as one utility zone.

Burger Buddies adaptation:

- search placeholder: “Search burgers, pizzas and deals”
- filter opens category/availability controls only if useful
- category tabs remain visible below for fast direct access

Search should feel like a core ordering tool, not a decorative input.

### Promotion

The reference uses one bright yellow promotional card within the dark screen.

Burger Buddies adaptation:

- one high-contrast orange/yellow deal panel
- use clean food imagery
- use only a reference-supported deal or clearly label it as a concept promotion
- keep the panel compact enough that menu discovery remains visible

The promotion is an accent, not the entire homepage.

### Categories

The reference shows rounded category pills with small images.

Burger Buddies adaptation:

- Popular
- Burgers
- Pizza
- Deals
- Pasta
- Sides
- Drinks

Selected category uses the main orange accent. Unselected categories use charcoal surfaces and warm neutral text.

### Product discovery cards

The reference uses image-dominant product cards with restrained metadata.

Burger Buddies adaptation:

- strong clean food image
- product name
- concise description or product type
- demo price in PKR
- add or customize action
- no marketplace restaurant name, rating, or delivery time

Use at least two card variants:

- visual discovery card for homepage/best sellers
- efficient horizontal or compact menu card for menu browsing

### Bottom navigation

The reference bottom navigation feels native and persistent.

Burger Buddies destinations:

- Home
- Menu
- Deals
- Cart

Do not include Profile, Payments, or Orders.

The cart destination shows a count when non-empty.

## 4. Product-detail screen

### Hero image

The reference uses a large edge-to-edge food image occupying roughly the upper half of the screen.

Burger Buddies adaptation:

- use the cleanest available Burger Buddies-style product image
- maintain strong crop and texture
- overlay compact back and optional favorite/share controls only if they add value
- do not embed promotional poster text in the image

The food should be the emotional peak of the journey.

### Overlapping information surface

A rounded charcoal panel overlaps the hero image and continues to the bottom.

Burger Buddies adaptation:

- product identity summary
- short description
- availability/demo-price note
- required choice groups
- optional extras
- quantity
- special instructions

The product page must remain easy to scan despite more controls than the reference.

### Reference metrics row

The source shows price, distance, and delivery time.

Burger Buddies should not copy these metrics.

Replace with useful direct-ordering information such as:

- base price
- selected meal/size state
- current configured unit total

If a product has no meaningful summary metrics, omit the row rather than inventing content.

### Sticky action

The reference has price at left and a bright Add to Cart button at right.

Burger Buddies adaptation:

- configured total at left
- **Add to Cart** at right
- remains visible above device safe area
- shows validation feedback before adding when required choices are missing

## 5. Cart screen

### Header

The reference uses a simple back button, centered title, and overflow action.

Burger Buddies adaptation:

- back to menu
- title: **Your Order**
- optional clear-cart control, preferably explicit rather than hidden in overflow

### Cart rows

The source uses compact horizontal rows:

- image
- product name and metadata
- price
- quantity control

Burger Buddies adaptation additionally shows:

- selected product options
- special instructions when present
- edit action
- remove action

Do not overload each row. Long configuration details may collapse behind a clear “Edit choices” action while essential selections remain visible.

### Quantity control

The reference uses circular dark minus and bright plus controls.

Burger Buddies adaptation should preserve:

- strong active plus control
- clear disabled/minimum state
- practical tap targets
- immediate total updates

### Summary panel

The reference creates a large elevated charcoal panel for voucher and totals.

Burger Buddies adaptation:

- delivery/pickup selector
- customer details form
- subtotal
- delivery-charge confirmation note
- estimated total
- WhatsApp preview action

Do not add a voucher field in phase one.

### Sticky checkout

Use a bottom action area with:

- estimated total at left
- **Preview WhatsApp Order** at right

WhatsApp green should appear only in the preview/continuation stage, not as the general checkout accent.

## 6. Screens missing from the reference

### Dedicated menu

Derive it from the home screen's search, categories, and product-card language:

- compact shared header
- search
- horizontal categories
- optional promotion
- efficient product list/grid
- sticky cart summary when items exist

### Branch selector

Use a rounded bottom sheet on mobile and centered dialog on desktop:

- current branch
- available branch list
- disabled/unverified branches omitted or clearly marked
- confirm change

Mirpurkhas is the only fully demonstrated branch unless more data is verified.

### Checkout form

Extend the cart summary panel rather than creating a separate unrelated style:

- segmented delivery/pickup control
- dark filled inputs
- warm labels
- clear inline validation
- address only for delivery

### WhatsApp preview

Use a modal or bottom sheet:

- dark outer surface
- light message preview for readable contrast
- structured order content
- demo-mode notice
- secondary close/edit action
- green **Continue to WhatsApp** only when configured and allowed

## 7. Desktop interpretation

The reference is mobile-only. Desktop must preserve its language without simulating a giant phone.

Recommended transformations:

- full-width desktop header with logo, branch, navigation, and cart
- centered max-width container
- hero split between content and food image
- product grid with image-dominant cards
- product details as two columns: image gallery and configuration panel
- cart as item column plus sticky summary/form column
- mobile bottom navigation removed at desktop breakpoint

## 8. High-risk implementation mistakes

- Using pure black everywhere and losing surface hierarchy.
- Making Burger Buddies orange so dominant that every control competes.
- Copying yellow exactly and losing brand connection.
- Adding ratings, distance, or delivery time merely because the reference has them.
- Building every element as a rounded card.
- Using generic ecommerce product cards.
- Using promotional social screenshots instead of clean food imagery.
- Scaling the mobile UI directly to desktop.
- Implementing function before visual composition and never correcting the layout.
- Using WhatsApp green as the general brand accent.

## 9. Interpretation summary

The final product should communicate:

> A polished, direct Burger Buddies ordering app with premium dark surfaces, dominant food photography, compact controls, clear pricing, and a familiar WhatsApp handoff.

The reference provides the quality bar. Burger Buddies branding and this handoff provide the actual product.
