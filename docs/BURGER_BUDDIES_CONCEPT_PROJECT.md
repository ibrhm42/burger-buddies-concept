# Burger Buddies Ordering Concept

**Document type:** Project brief and implementation specification  
**Status:** Draft for concept development  
**Project owner:** Ibrahim  
**Product type:** Unofficial sales concept  
**Primary market:** Mirpurkhas, Sindh, Pakistan  
**Planned stack:** Next.js, TypeScript, Tailwind CSS  
**Last updated:** 2026-07-21

---

## 1. Project Summary

This project is a polished, functional, mobile-first ordering concept for Burger Buddies, a delivery-focused fast-food restaurant with an active social-media presence and WhatsApp-based ordering.

The concept is being created as a sales and demonstration asset. It is not an official Burger Buddies product, and it must not imply that Burger Buddies commissioned, approved, or currently uses it.

The app will demonstrate how customers could:

1. Select a branch.
2. Browse a structured menu.
3. Search and filter products.
4. Customize a product.
5. Add products to a cart.
6. Enter delivery or pickup details.
7. Preview a complete WhatsApp order.
8. Continue to WhatsApp only when demo settings allow it.

The concept should look close enough to a real commercial product to be persuasive, while remaining intentionally limited in scope.

---

## 2. Business Opportunity

Burger Buddies currently appears to attract customers primarily through Instagram and Facebook and receives orders through WhatsApp.

This creates several likely customer and operational problems:

- Customers may need to scroll through many posts to find products and prices.
- Menu items, deals, branch details, and contact numbers may be scattered.
- Customers may send incomplete orders through WhatsApp.
- Staff may need to repeatedly ask for item choices, quantities, address, landmarks, and delivery details.
- Separate branch pages and phone numbers may create confusion.
- Promotions become buried as new social posts are published.
- Social media provides visibility, but not a structured ordering journey.

The proposed concept does not replace WhatsApp. It improves the steps that happen before WhatsApp.

### Core value proposition

> Let customers prepare a complete order before opening WhatsApp.

### Intended business outcomes

- Easier menu discovery
- Faster customer decision-making
- Better-structured WhatsApp orders
- Fewer repetitive questions for staff
- Reduced order-entry mistakes
- Clearer branch routing
- Stronger brand credibility
- A scalable foundation for future online ordering

---

## 3. Project Goals

### Primary goal

Create a deployable sales prototype that demonstrates a complete ordering journey in less than one minute.

### Secondary goals

- Preserve Burger Buddies' recognizable visual identity.
- Show the value of structured ordering without requiring a backend.
- Make the experience usable on common mobile widths.
- Make the desktop version suitable for presentation on a laptop.
- Keep all content and menu data easy to replace.
- Prevent accidental orders from being sent to the restaurant during development or demonstrations.

### Non-goals

This concept will not include:

- Authentication
- Customer accounts
- A database
- A production admin dashboard
- Live order tracking
- A kitchen display system
- Online card payments
- Inventory synchronization
- POS integration
- Real-time availability
- Production analytics
- Rider management
- Loyalty points
- Coupon infrastructure
- Multi-tenant architecture

These may be proposed later as separate phases if the prospect expresses interest.

---

## 4. Target Users

### Primary user

A mobile customer in Mirpurkhas who discovers Burger Buddies through social media and wants to place a delivery or pickup order.

### Secondary user

A Burger Buddies staff member who currently receives orders through WhatsApp.

### Demonstration audience

- Owner
- Branch manager
- Marketing manager
- Operations manager
- Person responsible for WhatsApp orders

---

## 5. Primary User Journey

The prototype should demonstrate this exact flow:

1. Customer opens the homepage.
2. Customer confirms or selects the Mirpurkhas branch.
3. Customer taps **Order Now**.
4. Customer browses the menu.
5. Customer searches or filters by category.
6. Customer opens a featured product.
7. Customer selects required options and optional extras.
8. Customer changes the quantity.
9. Customer adds the configured product to the cart.
10. Customer reviews the cart.
11. Customer chooses delivery or pickup.
12. Customer enters contact and delivery details.
13. Customer taps **Preview WhatsApp Order**.
14. The app displays the formatted WhatsApp message.
15. In non-demo mode, the user may continue to WhatsApp.

The complete flow should be demonstrable in approximately 40–60 seconds.

---

## 6. Core Screens

The concept contains four primary screens.

### 6.1 Homepage

**Route:** `/`

#### Purpose

- Establish the Burger Buddies brand.
- Communicate the ordering proposition.
- Confirm the selected branch.
- Surface deals and popular menu categories.
- Move the customer into the menu quickly.

#### Required sections

- Header
- Burger Buddies logo or wordmark
- Branch selector
- Hero section
- Primary **Order Now** CTA
- Secondary **View Menu** CTA
- Featured deals
- Popular categories
- Best sellers
- Delivery or pickup information
- Branch summary
- Social links
- Unofficial concept disclaimer
- Mobile bottom navigation

#### Required interactions

- Open branch selector
- Select Mirpurkhas
- Navigate to menu
- Open a featured product
- Open cart
- Reflect cart item count

---

### 6.2 Menu

**Route:** `/menu`

#### Purpose

Replace social-media scrolling with clear, structured product discovery.

#### Required elements

- Selected branch indicator
- Search input
- Horizontally scrollable category tabs
- Promotional banner
- Product grid or product list
- Product image
- Product name
- Short description
- Price
- Availability state
- Add or customize action
- Cart badge
- Empty search state

#### Suggested demo categories

- Popular
- Burgers
- Pizza
- Deals
- Pasta
- Sides
- Drinks

#### Suggested demo products

Use real names visible in the supplied Burger Buddies references where possible:

- Al-Arabi Burger
- Triple Crunch
- Beef Burger
- Chicken Tikka Pizza
- Arabian Delight Pizza
- Creamy Delight Pizza
- Deep Dish Pizza
- Pizza Fries
- Pasta
- Combo Platter

Only 8–12 products are required for the concept.

#### Required interactions

- Search by product name or description
- Filter by category
- Open product details
- Quick-add simple products
- Show unavailable items clearly
- Preserve selected branch
- Update cart count

---

### 6.3 Product Details

**Route:** `/menu/[productSlug]`

#### Purpose

Demonstrate how the app collects product choices before the WhatsApp conversation begins.

#### Required elements

- Product image
- Product name
- Description
- Base price
- Required option groups
- Optional extras
- Quantity selector
- Special instructions
- Dynamic price
- Sticky **Add to Cart** CTA

#### Example configuration

**Product:** Al-Arabi Burger

**Required option group:**
- Burger only
- Make it a meal

**Optional extras:**
- Extra cheese
- Extra sauce
- Jalapeños

**Quantity:**
- Decrease
- Current quantity
- Increase

**Special instructions:**
- Free-text field with a short character limit

#### Validation rules

- Required selections must be completed.
- Quantity cannot be lower than 1.
- Maximum quantity should be capped to a reasonable demo value.
- Invalid combinations should not be added.
- Price updates must be derived from selected options and quantity.

#### Required interactions

- Select one required option
- Select one or more extras
- Change quantity
- Enter instructions
- Add configured item to cart
- Show a lightweight confirmation
- Continue to cart or menu

---

### 6.4 Cart and WhatsApp Checkout

**Route:** `/cart`

#### Purpose

Show how a complete, structured order can be prepared before opening WhatsApp.

#### Required sections

- Selected branch
- Cart items
- Selected options
- Quantity controls
- Edit action
- Remove action
- Delivery or pickup selection
- Customer details
- Order notes
- Cost summary
- Delivery-fee disclaimer
- WhatsApp message preview
- Continue-to-WhatsApp action when allowed

#### Customer fields

For delivery:

- Full name
- Phone number
- Address
- Nearby landmark
- Optional order notes

For pickup:

- Full name
- Phone number
- Optional pickup note

#### Validation

- Full name is required.
- A valid-looking Pakistani mobile number is required.
- Address is required for delivery.
- The cart cannot be empty.
- The branch must be selected.
- WhatsApp preview must not open with invalid form data.

#### Price handling

Because production delivery rules are not known:

- Display a subtotal.
- Label the displayed total as an estimate.
- State that final availability, price, and delivery charges are confirmed on WhatsApp.
- Do not invent tax or delivery policies.

---

## 7. WhatsApp Message Format

The generated message should be easy for both the customer and staff to scan.

Example:

```text
Assalamualaikum Burger Buddies,

I would like to place a new order.

Branch: Mirpurkhas
Order type: Delivery

2 × Al-Arabi Burger Meal
- Extra cheese
- Extra sauce
- Special instructions: No onions

1 × Large Chicken Tikka Pizza

Subtotal: Rs. 2,350
Delivery charges: To be confirmed
Estimated total: Rs. 2,350

Customer: Ibrahim
Phone: 03XX-XXXXXXX
Address: Satellite Town, Mirpurkhas
Landmark: Near ______

Please confirm availability, final price, and delivery time.
```

### Formatting requirements

- Group order items clearly.
- Include selected options.
- Include quantities.
- Include special instructions.
- Include branch.
- Include delivery or pickup type.
- Include customer information.
- Include the estimated subtotal.
- Encode the message safely for a WhatsApp URL.
- Avoid excessive emojis.
- Avoid unsupported claims such as guaranteed delivery time.

---

## 8. Demo Safety

The app must support a safe demonstration mode.

### Environment variables

```env
NEXT_PUBLIC_DEMO_MODE=true
NEXT_PUBLIC_WHATSAPP_NUMBER=923XXXXXXXXX
```

### Behaviour in demo mode

- The main checkout button opens an in-app WhatsApp preview.
- The app must not automatically open the restaurant's WhatsApp number.
- The app must clearly label the message as a preview.
- Any external WhatsApp action should use a configured test number.
- The production restaurant number must not be committed to source control unless intentionally approved.

### Behaviour outside demo mode

- The app may generate a WhatsApp click-to-chat URL.
- The destination number must come from branch configuration.
- The user should review the generated message before continuing.
- The app must not send a message automatically.

---

## 9. Technical Architecture

### Required stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Context for branch and cart state
- `localStorage` for cart persistence
- `next/image`
- Lucide React or another lightweight icon source
- ESLint
- Vercel-compatible deployment

### Rendering strategy

Use Server Components by default.

Use Client Components only where required for:

- Cart state
- Branch state
- Search
- Category filtering
- Product options
- Quantity controls
- Form state
- `localStorage`
- Modal or bottom-sheet interactions
- WhatsApp preview

### State providers

#### BranchProvider

Responsibilities:

- Store selected branch
- Change branch
- Expose branch contact configuration
- Persist branch where useful
- Provide a safe default

#### CartProvider

Responsibilities:

- Add item
- Update item
- Remove item
- Update quantity
- Clear cart
- Calculate subtotal
- Persist cart
- Restore cart after hydration
- Avoid hydration mismatches
- Support customized item identities

### Data storage

Use local typed data files:

```text
src/data/
├── branches.ts
├── categories.ts
├── products.ts
└── promotions.ts
```

No API routes are required for the concept.

---

## 10. Data Models

### Branch

```ts
export type Branch = {
  id: string;
  slug: string;
  name: string;
  city: string;
  address: string;
  phoneDisplay: string;
  whatsappNumber: string;
  openingHours?: string;
  available: boolean;
};
```

### Category

```ts
export type Category = {
  id: string;
  slug: string;
  name: string;
  image?: string;
  featured?: boolean;
};
```

### Product

```ts
export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  categoryId: string;
  image: string;
  basePrice: number;
  featured?: boolean;
  popular?: boolean;
  available: boolean;
  optionGroups?: ProductOptionGroup[];
};
```

### Product option group

```ts
export type ProductOptionGroup = {
  id: string;
  name: string;
  required: boolean;
  selectionType: "single" | "multiple";
  minSelections?: number;
  maxSelections?: number;
  options: ProductOption[];
};
```

### Product option

```ts
export type ProductOption = {
  id: string;
  name: string;
  priceAdjustment: number;
};
```

### Cart item

```ts
export type CartItem = {
  id: string;
  productId: string;
  productSlug: string;
  productName: string;
  productImage: string;
  basePrice: number;
  selectedOptions: Array<{
    groupId: string;
    groupName: string;
    optionId: string;
    optionName: string;
    priceAdjustment: number;
  }>;
  quantity: number;
  specialInstructions?: string;
  unitPrice: number;
  lineTotal: number;
};
```

A configured cart item should use a stable unique identifier derived from the product and selected configuration, or an intentionally generated ID.

---

## 11. Visual Direction

### Brand qualities observed from supplied references

- Near-black and charcoal surfaces
- Orange and red highlights
- Flame-inspired identity
- Bold promotional typography
- High-energy fast-food graphics
- Strong use of food photography
- Youthful, local, accessible positioning

### Intended product style

The app should refine the existing brand into a cleaner ordering interface.

It should feel:

- Bold
- Energetic
- Appetizing
- Modern
- Local
- Practical
- Easy to scan
- Purpose-built for ordering

It should not feel:

- Corporate
- Luxury
- Minimal to the point of losing personality
- Like a generic SaaS dashboard
- Like a generic AI-generated restaurant template
- Overloaded with decorative effects

### Color guidance

Use sampled values from the supplied logo and references where possible.

Suggested token roles:

- `background`: near-black
- `surface`: dark charcoal
- `surface-elevated`: slightly lighter charcoal
- `primary`: Burger Buddies orange
- `primary-hover`: deeper orange
- `promotion`: controlled red
- `text-primary`: warm off-white
- `text-secondary`: muted warm gray
- `border`: low-contrast neutral
- `whatsapp`: green, reserved for WhatsApp actions

Avoid using WhatsApp green as a general brand color.

### Typography

Recommended direction:

- Condensed display face for major headings
- Highly readable sans-serif for body and interface text

Possible pairing:

- Oswald for headings
- Inter for body and interface text

Use `next/font` when possible.

### Shape and spacing

- Moderate corner radii
- Strong hierarchy
- Consistent spacing scale
- Avoid excessive pill-shaped components
- Avoid placing every section inside a card
- Keep mobile tap targets at least approximately 44px
- Use sticky actions only when they improve ordering

### Motion

- Short, restrained transitions
- 150–300ms for common UI feedback
- Bottom-sheet motion for branch selection
- Lightweight cart feedback
- Respect reduced-motion preferences
- Do not use distracting parallax or cinematic transitions

---

## 12. Responsive Behaviour

### Primary mobile targets

- 360px
- 390px
- 430px

### Tablet and desktop

Desktop must be intentionally designed rather than a stretched mobile layout.

Expected desktop adaptations:

- Wider content container
- Desktop header
- Multi-column product grid
- Better use of whitespace
- Sticky cart or order summary where appropriate
- Centered page shell
- Comfortable maximum line lengths

### Minimum requirements

- No horizontal page overflow
- Category tabs may scroll horizontally
- Product names must wrap safely
- Buttons must remain usable at narrow widths
- Sticky controls must not cover content
- Forms must remain readable with mobile keyboards

---

## 13. Accessibility Requirements

- Use semantic HTML.
- Every interactive control must be keyboard accessible.
- Form fields must have labels.
- Errors must be associated with fields.
- Focus states must be visible.
- Dialogs and bottom sheets must manage focus correctly.
- Images must have useful alt text.
- Decorative images should use empty alt text.
- Color must not be the only indicator of state.
- Text and controls should maintain reasonable contrast.
- Respect `prefers-reduced-motion`.
- Avoid tiny text in disclaimers or prices.

---

## 14. Content Rules

### Allowed

- Product names visible in supplied Burger Buddies references
- Concept descriptions written for demonstration
- Clearly labelled demo prices
- Supplied brand imagery used privately for the sales concept
- A discreet unofficial-concept notice

### Not allowed

- Fabricated testimonials
- Fabricated sales figures
- Claims that the restaurant commissioned the app
- Claims of guaranteed delivery times
- Unverified opening hours presented as fact
- Unverified branch details presented as final
- Invented awards or quality certifications
- Public presentation as completed client work
- Misleading “official website” language

### Disclaimer

Display a discreet message such as:

> Unofficial ordering concept created for demonstration purposes. Burger Buddies has not commissioned or endorsed this prototype.

The disclaimer should be visible without dominating the experience.

---

## 15. Source Assets and References

Recommended repository structure:

```text
public/
├── brand/
│   ├── logo.png
│   └── wordmark.png
├── products/
├── promotions/
└── references/
    ├── profiles/
    │   ├── facebook-cafe.png
    │   ├── facebook-mirpurkhas.png
    │   └── instagram-grid.png
    ├── products/
    ├── business-info/
    └── storefront/
```

### Reference usage

Profile screenshots are used to understand:

- Brand identity
- Product naming
- Marketing tone
- Branch presence
- Contact presentation
- Food photography
- Promotional patterns

They are not website layout references and should not be copied directly.

### Image caution

Full social profile screenshots are useful for context but poor as product assets.

Prefer:

- Individual product posts
- Clear food photographs
- Clean logo files
- Storefront and interior photos
- Focused screenshots of offers
- Focused screenshots of branch information

---

## 16. Recommended Project Structure

```text
burger-buddies-concept/
├── public/
│   ├── brand/
│   ├── products/
│   ├── promotions/
│   └── references/
├── docs/
│   └── BURGER_BUDDIES_CONCEPT_PROJECT.md
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── menu/
│   │   │   ├── page.tsx
│   │   │   └── [productSlug]/
│   │   │       └── page.tsx
│   │   └── cart/
│   │       └── page.tsx
│   ├── components/
│   │   ├── brand/
│   │   ├── cart/
│   │   ├── layout/
│   │   ├── menu/
│   │   ├── navigation/
│   │   └── ui/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   └── types/
├── CLAUDE.md
├── README.md
└── .env.example
```

---

## 17. Implementation Phases

### Phase 1: Repository foundation

- Create Next.js project
- Configure strict TypeScript
- Configure Tailwind
- Add fonts
- Add project documentation
- Add references
- Add `.env.example`
- Add base metadata
- Add disclaimer
- Establish theme tokens

### Phase 2: Data and state

- Define types
- Create branch data
- Create category data
- Create product data
- Create promotion data
- Implement BranchProvider
- Implement CartProvider
- Implement local persistence
- Add utility functions
- Add currency formatting
- Add WhatsApp formatting

### Phase 3: Shared UI

- Header
- Mobile bottom navigation
- Branch selector
- Product card
- Category tabs
- Quantity selector
- Price display
- Empty states
- Dialog or bottom sheet
- Form fields
- Buttons
- Toast or inline feedback

### Phase 4: Homepage

- Hero
- Featured deals
- Categories
- Best sellers
- Branch summary
- Responsive layout
- Navigation interactions

### Phase 5: Menu

- Search
- Category filtering
- Product rendering
- Empty state
- Quick-add behavior
- Desktop grid
- Mobile product layout

### Phase 6: Product details

- Dynamic route
- Product lookup
- Invalid slug handling
- Option selection
- Validation
- Dynamic price
- Quantity
- Instructions
- Add to cart

### Phase 7: Cart and checkout

- Cart rendering
- Update and remove
- Delivery or pickup
- Customer form
- Validation
- Summary
- Message generation
- Preview modal
- Safe WhatsApp continuation

### Phase 8: Quality and deployment

- Mobile review
- Desktop review
- Accessibility review
- Empty states
- Error states
- Lint
- Type check
- Production build
- Vercel deployment
- Demo walkthrough
- Content verification

---

## 18. Acceptance Criteria

### General

- The project builds successfully.
- There are no TypeScript errors.
- There are no blocking lint errors.
- The four primary routes work.
- The interface is responsive.
- The concept disclaimer is present.
- No production backend is required.
- No restaurant message is sent automatically.

### Homepage

- Mirpurkhas is selected by default or clearly requested.
- Branch selector works.
- Order Now navigates to the menu.
- Featured content uses real or clearly marked demo products.
- Cart count is visible.

### Menu

- Search works.
- Category filtering works.
- Product cards are readable on mobile.
- Products can open details.
- Simple items can be quick-added where intended.
- Empty results are handled.

### Product details

- Invalid product slugs are handled.
- Required choices are enforced.
- Extras affect the price.
- Quantity affects the price.
- The configured product can be added to the cart.
- Special instructions are retained.

### Cart

- Cart persists after refresh.
- Quantity can be changed.
- Items can be removed.
- Configured options are displayed.
- Delivery and pickup states work.
- Form validation works.
- An empty cart state is provided.
- The WhatsApp preview is readable.
- Message encoding is correct.
- Demo mode is safe.

### Responsive

- No page overflow at 360px.
- Layout works at 390px and 430px.
- Desktop layout is intentional.
- Sticky controls do not cover content.
- Forms remain usable on small screens.

---

## 19. Quality Checklist

Before showing the concept:

- Verify branch name and phone details.
- Verify product names.
- Replace obvious placeholder imagery.
- Label unverified prices as demo data.
- Test the complete flow on a real phone.
- Test Chrome desktop.
- Test cart persistence.
- Test refresh on every route.
- Test a direct product URL.
- Test an invalid product URL.
- Test an empty cart.
- Test a no-result search.
- Test long product names.
- Test the WhatsApp preview.
- Test demo mode.
- Run lint.
- Run type checking.
- Run a production build.
- Confirm the deployed Vercel URL.
- Prepare a 40–60 second demonstration script.

---

## 20. Presentation Strategy

Do not begin the meeting by discussing technology.

Begin with the current ordering problem:

> Customers discover products through social media, then move to WhatsApp and manually reconstruct their order.

Then demonstrate:

1. Select branch.
2. Browse menu.
3. Customize product.
4. Add to cart.
5. Enter details.
6. Preview a complete WhatsApp order.

Close with:

> This keeps your current WhatsApp workflow, but makes the customer prepare a clearer and more complete order before contacting your staff.

Do not present the concept as free completed work. Present it as evidence of what Ibrahim can build for them.

---

## 21. Open Questions

The following information should be verified before a production proposal:

- Who is the decision-maker?
- Is each branch independently operated?
- Does every branch use the same menu?
- Are prices shared across branches?
- Which branch number receives Mirpurkhas orders?
- What delivery areas are supported?
- How are delivery charges calculated?
- Are delivery and pickup both available?
- What are the actual opening hours?
- Are any items unavailable on certain days?
- Who would update menu items and prices?
- Do they already use a POS or internal ordering system?
- Would orders remain on WhatsApp in phase one?
- Would they want an admin dashboard later?
- Would they want orders routed by branch?

---

## 22. Definition of Done

The concept is ready when:

- The four-screen ordering journey is complete.
- A realistic order can be prepared in under one minute.
- The app looks like Burger Buddies without copying social layouts.
- Product customization works.
- Cart persistence works.
- Customer validation works.
- The WhatsApp message is clear.
- Demo mode prevents accidental restaurant contact.
- Mobile and desktop layouts are polished.
- The app is deployed.
- The app does not imply official endorsement.
- The concept is strong enough to support a short sales meeting without requiring explanation of unfinished areas.
