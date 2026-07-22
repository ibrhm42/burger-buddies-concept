# Design Tokens

**Status:** Approved starting tokens for Codex implementation  
**Intent:** Reproduce the premium dark visual language while adapting it to Burger Buddies.

These values are implementation targets, not immutable brand assets. Codex may make small accessibility or rendering adjustments and must document them.

## 1. Color tokens

Use semantic CSS variables. Avoid scattering raw hex values through components.

```css
:root {
  --bb-bg: #10100f;
  --bb-bg-deep: #090909;
  --bb-surface: #1a1a18;
  --bb-surface-2: #242321;
  --bb-surface-3: #302f2c;
  --bb-input: #2b2a27;
  --bb-border: #3c3a35;
  --bb-border-soft: #2d2c29;

  --bb-text: #f7f3ea;
  --bb-text-muted: #aaa59b;
  --bb-text-subtle: #77736c;
  --bb-text-inverse: #17130c;

  --bb-primary: #ff9f0a;
  --bb-primary-hover: #ffad2e;
  --bb-primary-active: #e88900;
  --bb-primary-soft: #3a2910;

  --bb-promo: #e24632;
  --bb-promo-soft: #3a1713;

  --bb-whatsapp: #25d366;
  --bb-whatsapp-hover: #1fbd59;
  --bb-success: #54c06d;
  --bb-warning: #f2b94b;
  --bb-danger: #ef5a4c;

  --bb-overlay: rgb(0 0 0 / 72%);
  --bb-image-overlay: linear-gradient(180deg, transparent 35%, rgb(0 0 0 / 78%) 100%);
}
```

### Color usage rules

- `--bb-bg` is the default page background.
- `--bb-surface` is the normal panel/card surface.
- `--bb-surface-2` is elevated content, active input groups, and summary panels.
- `--bb-surface-3` is used sparingly for selected or highly elevated regions.
- `--bb-primary` is the main action and selected-state color.
- `--bb-promo` is reserved for offers and brand emphasis, not ordinary errors.
- `--bb-whatsapp` is used only for WhatsApp-specific continuation or status.
- Do not use pure white for large areas.
- Do not use pure black for all surfaces.

## 2. Typography

### Font families

Use `next/font`.

Preferred:

- **Interface and body:** Hanken Grotesk
- **Optional promotional display accent:** Bebas Neue

Fallback:

```css
--font-ui: "Hanken Grotesk", "Inter", system-ui, sans-serif;
--font-display: "Bebas Neue", "Arial Narrow", sans-serif;
```

### Usage

- Use Hanken Grotesk for navigation, forms, product names, descriptions, prices, buttons, and totals.
- Use Bebas Neue only for selected homepage promotional headings where the Burger Buddies brand benefits from extra energy.
- Product and checkout screens should remain primarily Hanken Grotesk.
- Do not use condensed type for long labels or body copy.

### Type scale

```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-md: 1.125rem;     /* 18px */
--text-lg: 1.25rem;      /* 20px */
--text-xl: 1.5rem;       /* 24px */
--text-2xl: 1.875rem;    /* 30px */
--text-3xl: 2.25rem;     /* 36px */
--text-4xl: 3rem;        /* 48px */
--text-5xl: 4rem;        /* 64px desktop promotional maximum */
```

### Weight guidance

- 400: descriptions and helper text
- 500: labels and secondary actions
- 600: product names, tabs, buttons
- 700: prices, totals, page titles
- Display font: use its native strong weight

### Line height

- compact UI: 1.2–1.3
- body and descriptions: 1.45–1.55
- display headings: 0.95–1.05

## 3. Spacing scale

Use a 4px foundation.

```css
--space-1: 0.25rem;  /* 4 */
--space-2: 0.5rem;   /* 8 */
--space-3: 0.75rem;  /* 12 */
--space-4: 1rem;     /* 16 */
--space-5: 1.25rem;  /* 20 */
--space-6: 1.5rem;   /* 24 */
--space-8: 2rem;     /* 32 */
--space-10: 2.5rem;  /* 40 */
--space-12: 3rem;    /* 48 */
--space-16: 4rem;    /* 64 */
--space-20: 5rem;    /* 80 */
```

### Spacing rules

- 12–16px for dense control groups.
- 16–20px internal mobile card padding.
- 24–32px between major mobile sections.
- 48–80px between major desktop sections.
- Preserve safe-area padding around sticky bottom actions.

## 4. Radius scale

The approved reference uses rounded, tactile forms. Use generous radii deliberately, not indiscriminately.

```css
--radius-sm: 0.625rem;   /* 10px */
--radius-md: 0.875rem;   /* 14px */
--radius-lg: 1.25rem;    /* 20px */
--radius-xl: 1.75rem;    /* 28px */
--radius-2xl: 2.25rem;   /* 36px */
--radius-pill: 999px;
```

Recommended mapping:

- inputs: `radius-lg`
- product cards: `radius-lg` or `radius-xl`
- promo panel: `radius-xl`
- bottom sheet: `radius-2xl` on top corners
- circular icon buttons: `radius-pill`
- primary buttons: `radius-pill`
- cart summary: `radius-xl`

Do not nest multiple large-radius surfaces without clear hierarchy.

## 5. Borders

Default border:

```css
border: 1px solid var(--bb-border-soft);
```

Use stronger border only for:

- focused form fields
- selected option groups
- selected category pills
- critical summary separation

Focus ring:

```css
outline: 2px solid var(--bb-primary);
outline-offset: 2px;
```

## 6. Shadows

Prefer tonal elevation. Use shadows sparingly.

```css
--shadow-sm: 0 6px 18px rgb(0 0 0 / 18%);
--shadow-md: 0 14px 36px rgb(0 0 0 / 30%);
--shadow-sticky: 0 -10px 30px rgb(0 0 0 / 32%);
```

Use:

- `shadow-sm` for floating header/cart controls
- `shadow-md` for dialogs and bottom sheets
- `shadow-sticky` for fixed bottom action areas

Avoid glowing orange shadows around every CTA.

## 7. Layout tokens

```css
--mobile-gutter: 1rem;
--tablet-gutter: 1.5rem;
--desktop-gutter: 2rem;
--content-max: 80rem;       /* 1280px */
--content-readable: 42rem;  /* forms and copy */
--header-mobile: 4.5rem;
--bottom-nav-height: 4.75rem;
--sticky-action-height: 5.25rem;
```

## 8. Image ratios

- Homepage feature card: 4:3 or 1:1 depending on composition.
- Menu horizontal card image: 112 × 112 mobile target.
- Menu grid card image: 4:3.
- Product detail hero: 4:3 mobile crop; desktop column may use 1:1 or 4:5.
- Cart thumbnail: 84 × 84 mobile.
- Promotion art: preserve food crop; avoid text-heavy social artwork.

Use `object-fit: cover` with meaningful `object-position` adjustments.

## 9. Icon sizing

- inline icon: 16–18px
- button icon: 20px
- primary circular icon control: 22–24px
- bottom navigation icon: 22–24px
- minimum interactive container: approximately 44 × 44px

Use one icon system consistently. Lucide is acceptable.

## 10. Motion tokens

```css
--duration-fast: 120ms;
--duration-normal: 220ms;
--duration-slow: 320ms;
--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
--ease-exit: cubic-bezier(0.4, 0, 1, 1);
```

Recommended:

- hover/press: fast
- category and quantity feedback: normal
- bottom sheet/dialog: slow
- route transitions: avoid unless simple and reliable

Respect `prefers-reduced-motion`.

## 11. State tokens

### Disabled

- opacity around 0.45–0.55
- no hover transformation
- cursor and semantics must indicate disabled

### Unavailable product

- image desaturated slightly
- “Currently unavailable” text badge
- add action disabled
- do not rely on opacity alone

### Error

- danger border and helper text
- preserve warm text contrast
- focus first invalid field on submit

### Selected option

- primary border
- subtle primary-soft background
- check/radio indicator using primary color

## 12. Desktop-specific visual limits

- Hero headline maximum around 64px.
- Main content maximum width 1280px.
- Product grids should not exceed four columns for standard cards.
- Product detail configuration column should remain readable at roughly 420–520px.
- Cart summary should remain approximately 360–440px wide.

## 13. Token implementation requirement

Codex should define these as CSS variables in the global theme layer and map Tailwind utilities/components to semantic roles. Raw brand values should not be repeated throughout route files.
