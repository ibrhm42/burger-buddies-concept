# Visual Direction — Burger Buddies Ordering Concept

**Status:** Design foundation  
**Applies to:** Homepage, menu, product details, cart, dialogs, and responsive states  
**Last updated:** 2026-07-21

## 1. Design objective

Translate Burger Buddies' existing high-energy social identity into a polished ordering product that is bold, appetizing, fast, and easy to scan.

The interface should feel recognizably connected to the brand while being calmer and more structured than a promotional social-media post. Marketing can shout; checkout should know when to use its indoor voice.

## 2. Reference interpretation

The supplied social profiles suggest these brand characteristics:

- Near-black and charcoal backgrounds
- Orange and red accents
- Flame-inspired visual language
- Bold promotional headings
- Strong food imagery
- Energetic, youthful fast-food personality
- Direct calls to order through WhatsApp

These references inform visual identity and content. They are not layouts to copy.

## 3. Experience principles

### Appetite first

Use strong food photography and meaningful product presentation. Food should remain the visual focal point, not decorative effects.

### Fast comprehension

Customers should immediately understand the selected branch, product name, price, choices, cart status, and next action.

### Controlled energy

Use energetic typography and promotional accents selectively. Avoid making every section equally loud.

### Mobile confidence

The mobile experience is the primary product. It should feel native to one-handed ordering, not like a desktop site squeezed into a phone.

### Practical trust

Clear details, predictable controls, readable totals, and transparent demo labels matter more than flashy animation.

## 4. Desired personality

The interface should feel:

- Bold
- Appetizing
- Modern
- Energetic
- Friendly
- Local
- Practical
- Fast
- Purpose-built

It should not feel:

- Corporate
- Luxury fine dining
- Sterile minimalism
- Generic SaaS
- Generic AI restaurant template
- Overdecorated
- Cartoonish
- Like an Instagram poster converted directly into a webpage

## 5. Color system

Final values should be sampled and refined from approved logo assets. Until exact brand values are verified, use semantic tokens rather than scattering hard-coded colors.

Suggested roles:

```css
--color-bg: /* near black */;
--color-surface: /* dark charcoal */;
--color-surface-elevated: /* lighter charcoal */;
--color-primary: /* Burger Buddies orange */;
--color-primary-hover: /* deeper orange */;
--color-promotion: /* restrained red */;
--color-text-primary: /* warm off-white */;
--color-text-secondary: /* warm muted gray */;
--color-border: /* low-contrast neutral */;
--color-success: /* status green */;
--color-whatsapp: /* WhatsApp green */;
```

### Usage rules

- Orange is the main brand action color.
- Red is reserved for offers, urgency, or promotional emphasis.
- WhatsApp green is reserved for WhatsApp-specific controls.
- Near-black and charcoal create the foundation.
- Warm off-white is preferred over harsh pure white.
- Do not use color alone to communicate availability or validation.
- Maintain readable contrast for text and controls.

### Avoid

- Rainbow category colors without a system
- Large neon gradients
- Green primary CTAs outside WhatsApp
- Red for ordinary navigation
- Pure black on every surface with no depth separation

## 6. Typography

### Recommended pairing

- **Display/headings:** Oswald
- **Body/interface:** Inter

Use `next/font` where practical.

### Hierarchy

- Display headings may be condensed, bold, and energetic.
- Product names should be strong but highly readable.
- Body copy should use a neutral sans-serif.
- Prices should have clear numerical hierarchy.
- Labels, descriptions, and disclaimers must not become tiny.

### Copy styling

- Use sentence case for most interface labels.
- Reserve uppercase for compact promotional labels and small badges.
- Avoid long all-uppercase paragraphs.
- Keep buttons direct: **Order Now**, **Add to Cart**, **Preview WhatsApp Order**.

## 7. Layout system

### Mobile targets

Design and verify at:

- 360px
- 390px
- 430px

### Desktop behavior

Desktop should be intentionally composed with:

- Centered maximum-width container
- Desktop navigation
- Wider hero composition
- Multi-column menu grid
- Thoughtful whitespace
- Sticky order summary where useful

Do not merely stretch mobile cards across the viewport.

### Spacing

Use a consistent spacing scale. Prioritize:

- Clear separation between page sections
- Compact spacing inside dense ordering controls
- Comfortable space around primary actions
- Safe bottom padding around mobile sticky actions and navigation

### Grid

- Product cards may use one column on narrow mobile where descriptions matter.
- Two-column compact cards are acceptable when image and text remain readable.
- Desktop menu should use a responsive multi-column grid.
- Category tabs may scroll horizontally on mobile.

## 8. Shape language

- Use moderate radii.
- Product imagery can use stronger cropping and slightly larger radii.
- Do not make every container a floating rounded card.
- Avoid excessive pill shapes.
- Use borders and subtle surface contrast before heavy shadows.
- Flame-inspired shapes may appear as controlled background accents, not as constant decoration.

## 9. Photography and imagery

### Preferred assets

- Clean logo or wordmark
- Isolated or well-cropped product photos
- Individual product posts with usable food imagery
- Storefront or branch imagery
- Focused promotional artwork

### Treatment

- Keep aspect ratios consistent within component families.
- Use `next/image` and meaningful sizing.
- Preserve food color and texture.
- Use dark or neutral backdrops that support the brand.
- Apply restrained overlays only when necessary for text legibility.

### Avoid

- Stretching full social screenshots into hero images
- Inconsistent low-resolution crops
- Fake AI food images presented as real Burger Buddies products without disclosure
- Heavy filters that make food look unnatural
- Text embedded in images when live HTML text is possible

## 10. Component visual guidance

### Header

- Keep selected branch visible.
- Make cart status clear.
- Use a compact header on mobile and a fuller navigation structure on desktop.

### Hero

- One dominant message and one primary CTA.
- Lead with food.
- Keep promotional copy concise.
- Avoid a carousel for the first concept unless content demands it.

### Deal cards

- Strong image, deal name, concise supporting information, and direct action.
- Use red sparingly for promotional emphasis.

### Category controls

- Easy to tap.
- Clear selected state.
- Horizontal scrolling on mobile.
- Icons or images only when they improve recognition.

### Product cards

Must clearly show:

- Product image
- Name
- Short description
- Price or demo-price label
- Availability
- Add or customize action

Avoid hiding essential details behind hover.

### Product options

- Required groups must be clearly labelled.
- Radio and checkbox states must be obvious.
- Price adjustments should be visible.
- Error states should appear near the affected group.

### Cart

- Keep item configuration readable.
- Quantity and removal controls must not compete with the total.
- Use a sticky summary only when it does not obscure content.

### WhatsApp preview

- Use WhatsApp green only for the external continuation action.
- The preview itself should remain within the product's dark visual system.
- Clearly label demo mode.

## 11. Navigation

### Mobile

Use a compact bottom navigation for key destinations such as:

- Home
- Menu
- Offers or featured content
- Cart

The active route must be clear. Bottom navigation must not cover sticky product or checkout actions.

### Desktop

Use a conventional top navigation with branch and cart context visible.

## 12. Interaction and motion

Use motion to explain state changes, not to decorate the page.

Recommended:

- 150–300ms transitions
- Bottom-sheet motion for branch selection
- Subtle cart confirmation
- Clear dialog entrance and exit
- Immediate selection feedback

Required:

- Respect `prefers-reduced-motion`.
- Preserve keyboard and focus behavior.
- Avoid delayed navigation or slow reveal sequences.

Avoid:

- Parallax
- Autoplay video backgrounds
- Long page-entry animations
- Bouncing controls
- Continuous flame animations

## 13. Accessibility

- Maintain readable contrast on dark surfaces.
- Use visible focus states.
- Keep practical tap targets around 44px where possible.
- Do not rely on color alone.
- Use semantic labels for icons.
- Avoid text over complex images without a protective overlay.
- Support keyboard interaction in dialogs and option groups.
- Keep error messages specific and associated with fields.

## 14. Content tone

Use concise, customer-facing language.

Preferred:

- “Choose your branch”
- “Make it a meal”
- “Add special instructions”
- “Delivery charges confirmed on WhatsApp”
- “Preview WhatsApp Order”

Avoid:

- Technical terminology
- Internal implementation language
- Unverified claims such as “fastest delivery”
- Excessive exclamation marks
- Generic filler such as “culinary excellence redefined”

## 15. Visual anti-pattern checklist

Reject a design direction when it includes several of these:

- Giant gradient hero unrelated to the brand
- Glassmorphism on most components
- Excessive card nesting
- Random emoji as primary icons
- Oversized headings that push food and ordering below the fold
- Every section using a different accent treatment
- Tiny prices or hard-to-find add buttons
- Desktop layout that looks like an enlarged phone
- WhatsApp green used throughout the brand
- Social screenshots used as final product imagery

## 16. Review checklist

Before approval, review:

- Does the first viewport clearly show brand, branch, food, and order action?
- Is the selected branch visible throughout the journey?
- Can products be scanned quickly?
- Are required options and price adjustments obvious?
- Does the cart remain readable with long configurations?
- Is WhatsApp clearly the final handoff rather than the whole browsing experience?
- Does the design feel specific to Burger Buddies?
- Does it remain usable without animation?
- Does it work at 360px and desktop widths?
- Are unverified prices and unofficial status handled honestly?
