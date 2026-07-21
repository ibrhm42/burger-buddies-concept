# Product Brief — Burger Buddies Ordering Concept

**Status:** Approved foundation for concept implementation  
**Owner:** Ibrahim  
**Product type:** Unofficial sales prototype  
**Primary launch context:** Mirpurkhas, Sindh, Pakistan  
**Last updated:** 2026-07-21

## 1. Product statement

Burger Buddies Ordering Concept is a real, deployable, mobile-first Next.js application that demonstrates how Burger Buddies could make its existing WhatsApp ordering process easier for customers and staff.

The prototype does not replace WhatsApp. It structures the customer journey before WhatsApp by allowing a customer to choose a branch, browse products, configure an item, prepare a cart, enter order details, and preview a complete WhatsApp message.

This is an unsolicited concept prepared by Ibrahim for a sales conversation. It must never be presented as an official Burger Buddies website or as commissioned client work.

## 2. Problem

Burger Buddies appears to promote products through Instagram and Facebook while taking orders through WhatsApp. That workflow is familiar and low-friction, but it can require customers to reconstruct a menu from posts and send incomplete order information.

Likely friction includes:

- Product discovery spread across social posts.
- Deals and menu information becoming buried over time.
- Repeated requests for menus, prices, locations, and delivery details.
- Incomplete WhatsApp orders requiring follow-up questions.
- Confusion between branches and contact numbers.
- Difficulty maintaining a consistent ordering journey as the brand expands.

These are hypotheses for the concept and discovery conversation, not verified operational claims.

## 3. Opportunity

Create one branded destination that turns social-media attention into a structured order while keeping Burger Buddies' existing WhatsApp workflow intact.

### Core value proposition

> Customers prepare a clear, complete order before they contact the restaurant on WhatsApp.

### Potential business value

- Faster menu discovery.
- More complete incoming orders.
- Less repetitive conversation for order-taking staff.
- Clearer routing by branch.
- Better presentation of current products and promotions.
- A stronger digital foundation for future ordering features.

No numerical sales, conversion, time-saving, or error-reduction claims may be made without evidence.

## 4. Target users

### Primary user

A mobile customer in Mirpurkhas who discovers Burger Buddies through social media and wants delivery or pickup.

### Secondary user

A Burger Buddies staff member receiving orders through WhatsApp.

### Sales-demo audience

- Owner
- Branch manager
- Operations manager
- Marketing manager
- Person responsible for WhatsApp orders

## 5. Product goals

1. Demonstrate the full ordering journey in 40–60 seconds.
2. Make menu discovery substantially clearer than scrolling through social posts.
3. Collect product options, quantity, fulfilment type, customer details, and address before WhatsApp.
4. Generate a readable, structured WhatsApp order preview.
5. Look recognizably inspired by Burger Buddies without copying its social layouts.
6. Work well on mobile and remain polished on desktop.
7. Stay safe in demonstrations and prevent accidental restaurant contact.
8. Remain small enough to function as a sales concept rather than unpaid production work.

## 6. Product scope

### Primary routes

- `/` — homepage and branch entry
- `/menu` — search, category filtering, and product discovery
- `/menu/[productSlug]` — product configuration
- `/cart` — order details and WhatsApp preview

### Core capabilities

- Branch selection, with Mirpurkhas as the demonstrated branch.
- Featured products and promotions.
- Menu search.
- Category filtering.
- Product details.
- Required single-choice options.
- Optional extras.
- Quantity selection.
- Special instructions.
- Cart add, update, remove, and clear actions.
- Browser persistence for branch and cart state.
- Delivery and pickup modes.
- Customer details validation.
- Structured WhatsApp message preview.
- Optional click-to-chat continuation outside demo mode.
- Unofficial-concept disclaimer.

## 7. Primary user journey

1. Customer opens the homepage.
2. Customer confirms Mirpurkhas as the selected branch.
3. Customer taps **Order Now**.
4. Customer searches or browses a category.
5. Customer opens a featured product.
6. Customer chooses a required option and optional extras.
7. Customer changes quantity and adds instructions.
8. Customer adds the configured item to the cart.
9. Customer reviews the cart and chooses delivery or pickup.
10. Customer enters contact and fulfilment details.
11. Customer previews a formatted WhatsApp order.
12. When allowed by configuration, the customer continues to WhatsApp.

## 8. Screen requirements

### Homepage

Must communicate the brand, selected branch, featured deals, categories, popular items, and the fastest path to ordering.

### Menu

Must provide search, horizontally scrollable categories on mobile, a promotion area, readable product cards, availability states, and a clear cart entry point.

### Product details

Must display the product, options, extras, quantity, instructions, dynamic price, validation, and a sticky add-to-cart action on mobile.

### Cart and WhatsApp checkout

Must display configured items, quantities, customer details, delivery or pickup selection, estimated subtotal, delivery-charge disclaimer, validation, and an in-app WhatsApp message preview.

## 9. WhatsApp handoff

The generated message must contain:

- Greeting
- Branch
- Order type
- Product quantities
- Selected product options
- Special instructions
- Estimated subtotal
- Delivery-charge note
- Customer name and phone
- Address for delivery
- Landmark when provided
- Request to confirm availability, final price, delivery charge, and timing

The app must not send messages automatically.

## 10. Demo safety

The application must support:

```env
NEXT_PUBLIC_DEMO_MODE=true
NEXT_PUBLIC_WHATSAPP_NUMBER=923XXXXXXXXX
```

When demo mode is enabled:

- Checkout opens an in-app preview first.
- The restaurant's WhatsApp must not open automatically.
- No message is sent.
- Any external test action uses only the configured test number.
- The interface clearly describes the message as a preview.

## 11. Technical direction

- Next.js App Router
- TypeScript with strict typing
- Tailwind CSS
- Server Components by default
- Client Components only for interaction
- Local typed data
- React Context for cart and branch state
- `localStorage` persistence
- `next/image`
- Accessible semantic HTML
- Vercel-compatible deployment
- Minimal dependencies

## 12. Explicit non-goals

Do not add unless separately approved:

- Authentication or customer accounts
- Database
- Production admin dashboard
- Online payments
- Live order tracking
- POS integration
- Inventory integration
- Kitchen display system
- Rider management
- Loyalty or coupon engine
- Production analytics
- Multi-tenant platform architecture

## 13. Content and truthfulness rules

- Use real product names only when supported by supplied references.
- Treat all unverified prices as demo data and label them accordingly.
- Do not invent delivery times, opening hours, branch policies, awards, testimonials, or business results.
- Do not imply that Burger Buddies commissioned or endorsed the work.
- Include a discreet disclaimer in the product.

Recommended disclaimer:

> Unofficial ordering concept created for demonstration purposes. Burger Buddies has not commissioned or endorsed this prototype.

## 14. Success criteria

The concept succeeds when:

- A realistic order can be prepared in under one minute.
- All four routes are functional.
- Search, filtering, configuration, cart, validation, and preview work.
- Cart state survives refresh.
- Demo mode prevents accidental contact.
- The visual design feels specific to Burger Buddies.
- Mobile and desktop layouts are intentional.
- No false claims are present.
- Lint, type checking, and production build pass.

## 15. Open discovery questions

Before proposing production implementation, verify:

- Decision-maker and branch ownership structure
- Current Mirpurkhas order number
- Menu and price consistency between branches
- Delivery areas and charges
- Pickup availability
- Opening hours
- Item availability rules
- Existing POS or order-management tools
- Who would maintain menu content
- Whether phase one should remain WhatsApp-first
