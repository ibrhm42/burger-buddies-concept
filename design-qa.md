# Phase 2 Static Routes — Visual QA

final result: passed

## Scope

- Approved visual reference: `public/references/ui/premium-dark-ordering-reference.webp`
- Approved in-repository synopsis: `public/references/ui/premium-dark-ordering-reference.svg`
- Customer routes: `/`, `/menu`, `/menu/al-arabi-burger`, and `/cart`
- Controlled review states:
  - `/menu?state=no-results`
  - `/menu/al-arabi-burger?state=required`
  - `/cart?state=empty`
  - `/cart?preview=whatsapp`
  - Mirpurkhas branch selector opened from the route header
  - unavailable Crispy Broast item near the end of the menu
- Viewports: 360 × 800, 390 × 844, 430 × 932, 768 × 1024, and 1440 × 1000 CSS pixels
- Phase boundary: static visual composition only; no providers, persistence, product calculations, checkout validation, or WhatsApp URL generation

## Final primary screenshots

- Menu, 390 × 844: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\menu-390x844.png`
- Menu, 1440 × 1000: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\menu-1440x1000.png`
- Product, 390 × 844: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\product-390x844.png`
- Product, 1440 × 1000: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\product-1440x1000.png`
- Cart, 390 × 844: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\cart-390x844.png`
- Cart, 1440 × 1000: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\cart-1440x1000.png`

## Final state screenshots

- No results, 390 × 844: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\no-results-390x844.png`
- Empty cart, 390 × 844: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\empty-cart-390x844.png`
- Required-option validation, 390 × 844: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\required-validation-390x844.png`
- WhatsApp preview, 390 × 844: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\whatsapp-preview-390x844.png`
- Branch selector, 390 × 844: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\branch-selector-390x844.png`
- Unavailable product, 390 × 844: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\unavailable-product-390x844.png`

## Responsive spot checks

- Menu overflow check, 360 × 800: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\menu-360x800.png`
- Product spot check, 430 × 932: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\product-430x932.png`
- Cart/customer-details spot check, 768 × 1024: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\cart-768x1024.png`

## Direct reference comparisons

- Discovery reference vs menu: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\reference-vs-menu-390x844.png`
- Product reference vs product detail: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\reference-vs-product-390x844.png`
- Cart reference vs Burger Buddies cart: `C:\Users\ibrah\.codex\visualizations\2026\07\22\019f894e-862b-7e61-9348-d02c007fd9a7\phase-2\reference-vs-cart-390x844.png`

## Fidelity assessment

### Menu

- Preserves the compact brand/branch/cart header, early search, horizontal category rail, dense food-led cards, layered dark surfaces, and fixed mobile navigation from the approved foundation.
- Uses 11 Burger Buddies-supported product names, explicit concept prices, clear Add/Customize actions, an unavailable state, and one compact demo-price disclosure.
- Mobile cards remain efficient horizontal rows; desktop moves to a four-column image-led grid without losing visible prices or actions.
- The fixed demo-cart summary remains above the bottom navigation and does not cover the first card’s actionable content.

### Product detail

- The temporary Al-Arabi food crop occupies most of the opening viewport, with back/favourite/share controls layered above it.
- The charcoal configuration panel overlaps the hero on mobile and becomes a readable right-side column on desktop.
- Required/optional groups, selection contrast, quantity, instructions, configured total, and sticky Add to Cart composition preserve the reference’s hierarchy without marketplace metrics.
- The required-option state uses `aria-invalid`, a visible red outline, and the nearby message `Choose one option before adding this item.`

### Cart and WhatsApp preview

- Cart rows preserve the reference’s compact image/name/configuration/quantity rhythm while replacing marketplace metadata with order choices and instructions.
- Desktop uses a sticky summary column; mobile keeps the estimated total and orange preview action visible.
- Delivery charge is presented only as `Confirmed on WhatsApp`; there is no voucher, payment, tax, or invented fee.
- The WhatsApp preview uses a mobile sheet/desktop dialog, a high-contrast message card, demo-mode explanation, and a disabled green continuation control.
- No `wa.me` or WhatsApp external link exists in the rendered page.

## Responsive and overflow results

- 360 × 800 menu: `innerWidth` 360; document `scrollWidth` equals `clientWidth` at 345.
- 390 × 844 menu/product/cart: `innerWidth` 390; document `scrollWidth` equals `clientWidth` at 375 for all three routes.
- 430 × 932 product: `innerWidth` 430; document `scrollWidth` equals `clientWidth` at 415.
- 768 × 1024 cart: `innerWidth` 768; document `scrollWidth` equals `clientWidth` at 753.
- 1440 × 1000 menu/product/cart: `innerWidth` 1440; document `scrollWidth` equals `clientWidth` at 1425 for all three routes.
- The client-width differences are the visible browser scrollbar, not document overflow.

## Accessibility and interaction review

- Pages use semantic headings, main regions, sections, articles, navigation labels, forms, and definition lists.
- Customer fields have persistent labels and helper copy; no customer information is prefilled.
- Static choice groups expose radio/checkbox semantics and selected state without introducing Phase 3 state architecture.
- Search remains labelled and read-only; filter and deferred actions are visibly disabled or marked inert.
- Dialogs use native `<dialog>`, move focus inside, close with the labelled close action, and return focus to the preview trigger.
- Branch selection remains a keyboard-reachable dialog trigger with a single Mirpurkhas presentation.
- Global focus-visible styling, practical mobile targets, reduced-motion handling, and dark-surface contrast are preserved from Phase 1.
- Browser console review returned no warnings or errors.

## Content and WhatsApp safety

- All visible prices are demo/concept prices in Pakistani rupees.
- The required unofficial-concept disclaimer remains readable.
- No opening hours, current prices, address, phone number, delivery time, delivery area, delivery charge, rating, review, award, discount, or guaranteed promotion is introduced as business truth.
- `923XXXXXXXXX` is explicitly described as invalid/unconfigured and never produces an external WhatsApp link.
- The preview does not send a message or leave the application.

## Temporary imagery used

The following existing social-post crops are used only as Phase 2 visual-review assets:

- `al-arabi-burger.jpg`
- `beef-burger.jpg`
- `beef-burger-2.jpg`
- `crown-pizza.jpg`
- `chicken-tikka-pizza.jpg`
- `creamy-delight-pizza.jpg`
- `deep-dish.jpg`
- `pizza-fries.jpg`
- `pasta.jpg`
- `crispy-broast.jpg`
- `deal-5.jpg`

The crops were tightened to keep embedded phone/address/price text out of visible card regions. They remain poster art, not final-quality product photography. Triple Crunch, Arabian Delight Pizza, and Combo Platter use the closest available temporary crops rather than verified product-specific photography. No food imagery was generated or added.

## Known limitations and deferred work

- Some source-poster typography remains visible where removing it would make the food subject unrecognizable; every such image is labelled or documented as temporary.
- Search, filtering, category selection, quick add, option selection, quantity changes, calculations, cart updates, form validation, persistence, phone normalization, WhatsApp message generation, and external continuation remain deferred to Phase 3.
- The customer routes use controlled query parameters only to expose static review states.
- `/design-review` remains temporary, noindex, absent from customer navigation, and must be removed before final release together with `src/components/review/design-foundation-review.tsx`.

No actionable P0, P1, or P2 visual-QA finding remains within the approved Phase 2 scope.
