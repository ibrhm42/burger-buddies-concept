# Responsive Behavior

## 1. Breakpoint intent

Responsive behavior must be designed deliberately rather than left to automatic wrapping.

Required review sizes:

- 360 × 800
- 390 × 844
- 430 × 932
- 768 × 1024
- 1440 × 1000

Suggested implementation ranges:

```text
mobile: below 640px
tablet: 640–1023px
desktop: 1024px and above
wide: 1280px and above
```

## 2. Global shell

### Mobile

- 16px horizontal gutter.
- Compact top header.
- Fixed or sticky bottom navigation.
- Page content includes enough bottom padding for navigation and route actions.
- Full-width sections with limited nested containers.

### Tablet

- 24px gutter.
- Mobile header may remain until desktop navigation fits comfortably.
- Product layouts expand to two or three columns.
- Bottom navigation may remain in portrait when useful.

### Desktop

- 32px outer gutter.
- Centered maximum-width container.
- Full desktop header.
- No mobile bottom navigation.
- Larger section gaps while preserving compact card density.

## 3. Header

### Mobile

- Logo left, branch center, cart right.
- Branch label may use two lines.
- Hide nonessential actions.
- Long branch text truncates safely.

### Tablet

- Increase breathing room.
- Keep branch context prominent.
- Add navigation links only when they do not crowd the header.

### Desktop

- Logo and wordmark left.
- Home, Menu, and Deals navigation near the center.
- Branch selector and cart at right.
- Constrain the header content to the main maximum width.

## 4. Homepage hero

### Mobile

- Single-column or carefully layered composition.
- First viewport shows branding, branch, food, headline, and Order Now action.
- Avoid a hero so tall that all ordering content disappears below the fold.
- Food may bleed to edges; text requires a controlled gradient or protected area.

### Tablet

- Move toward a two-column split.
- Copy receives roughly 45–50% width.
- Food remains the dominant visual element.

### Desktop

- Two-column hero.
- Copy around 40–45%; image around 55–60%.
- Heading maximum around 64px.
- Menu or deal content should remain discoverable without excessive scrolling.

## 5. Homepage categories and products

### Mobile

- Category rail scrolls horizontally.
- Best sellers use a horizontal rail or two-column cards only when labels and actions stay readable.
- Partial next-card visibility may indicate scrolling.

### Tablet

- Categories can wrap or remain a rail.
- Product grid expands to two or three columns.

### Desktop

- Categories appear in one controlled row.
- Product grid uses three or four columns.
- Cards retain image prominence and do not become excessively wide.

## 6. Menu page

### Mobile

- Header, search, categories, optional promotion, then product list.
- Prefer efficient horizontal product cards.
- Sticky cart summary appears above bottom navigation when the cart is non-empty.
- Category tabs do not cause page-level horizontal overflow.

### Tablet

- Use a two-column grid or wider list depending on rendered quality.
- Search and category controls may become one structured toolbar.

### Desktop

- Search and category toolbar spans the content area.
- Product grid uses three or four columns.
- Use a sidebar only if the horizontal controls become genuinely difficult; do not add complexity by default.
- Cart access remains in the header rather than a desktop bottom bar.

## 7. Product details

### Mobile

- Large top hero image.
- Information panel overlaps the image with rounded top corners.
- Options stack vertically.
- Sticky Add to Cart action remains visible above the safe area.
- Content padding accounts for the sticky action.

### Tablet

- Portrait may retain the stacked composition.
- Landscape may use two columns.
- The action may remain inside a sticky option panel.

### Desktop

- Two-column composition.
- Image region approximately 50–58% width.
- Configuration region approximately 42–50% with a readable maximum width.
- Configuration may be sticky within the viewport.

## 8. Cart and checkout

### Mobile

- Cart items appear first.
- Delivery/pickup and customer form follow.
- Sticky action shows estimated total and Preview WhatsApp Order.
- Fields remain reachable when the mobile keyboard is visible.

### Tablet

- Portrait may stay stacked.
- Landscape may use two columns.

### Desktop

- Two-column composition.
- Cart list around 60–65%.
- Sticky summary/form around 35–40%.
- Summary width approximately 380–440px.

## 9. Dialogs and sheets

### Mobile

- Branch selection and WhatsApp preview use bottom sheets or near-full-height dialogs.
- Maximum height around 88–94vh with internal scrolling.
- Rounded top corners and safe-area padding.

### Desktop

- Use centered dialogs.
- Branch selector around 420–520px wide.
- WhatsApp preview around 520–680px depending on message length.

## 10. Bottom navigation and route actions

- Bottom navigation and route sticky actions must never overlap.
- Product and cart actions may sit above or replace bottom navigation.
- Use safe-area insets.
- Verify behavior with narrow viewports and form inputs.

## 11. Typography scaling

- Mobile hero: about 36–44px depending on line length.
- Desktop hero: about 52–64px.
- Page titles: 24–32px.
- Product names: 16–22px depending on context.
- Body and field text: at least 14–16px.
- Prices must not become visually weaker than descriptions.

Use `clamp()` where it improves smooth scaling.

## 12. Image behavior

- Preserve aspect ratios.
- Use object positioning to keep food centered and appetizing.
- Mobile and desktop may need different crops.
- Use `next/image` and predefined aspect-ratio containers.
- Prevent layout shift.

## 13. Long-content resilience

Test:

- two- and three-line product names
- long option labels
- long customer names
- multi-line addresses
- long instructions
- four-digit PKR prices
- cart counts above nine

Controls must remain reachable and the page must not overflow horizontally.

## 14. Viewport-specific acceptance

### 360px

- No page-level horizontal overflow.
- Search and filter controls fit.
- Quantity controls remain usable.
- Sticky actions do not cover content.
- Bottom-navigation labels remain readable.

### 390px

- Primary visual target.
- Composition should most closely reflect the approved reference's polish and density.

### 430px

- Avoid awkward empty gutters or excessively stretched cards.

### 768px

- Layout feels intentionally tablet-sized rather than merely wide mobile.

### 1440px

- Use maximum-width constraints.
- Header, grids, product details, and cart feel native to desktop.
- Avoid oversized cards and large unused fields.
