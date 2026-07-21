# Content Inventory — Burger Buddies Ordering Concept

**Status:** Working inventory; verification required  
**Purpose:** Track available references, proposed demo content, missing assets, and truthfulness constraints  
**Last updated:** 2026-07-21

## 1. Inventory rules

Every piece of business-specific content must be classified as one of:

- **Verified:** clearly supported by a current official source.
- **Reference-supported:** visible in supplied screenshots or posts, but may still require freshness verification.
- **Demo:** created only to demonstrate the product and labelled accordingly.
- **Unknown:** must not be presented as fact.

Do not silently upgrade demo or old reference content into verified business information.

## 2. Supplied profile references

The following screenshots were supplied for initial research:

```text
public/references/profiles/facebook-cafe.png
public/references/profiles/facebook-mirpurkhas.png
public/references/profiles/instagram-grid.png
```

Expected source material corresponds to:

- Burger Buddies Cafe Facebook profile
- Burger Buddies Mirpurkhas Facebook profile
- Burger Buddies Instagram profile grid

These are context references, not final interface assets.

### What they may support

- Brand name and logo treatment
- Dark, orange, red, and flame-oriented visual identity
- Product and promotion naming
- Social-media ordering calls to action
- Mirpurkhas branch presence
- General tone and food categories

### What they do not safely establish alone

- Current complete menu
- Current prices
- Current opening hours
- Current delivery charges
- Current delivery areas
- Branch ownership structure
- Product availability
- Official website requirements

## 3. Recommended asset structure

```text
public/
├── brand/
│   ├── logo.png
│   └── wordmark.png
├── products/
├── promotions/
└── references/
    ├── profiles/
    ├── products/
    ├── business-info/
    └── storefront/
```

## 4. Brand assets

| Asset | Status | Intended use | Action |
|---|---|---|---|
| Burger Buddies logo | Reference-supported | Header, footer, favicon exploration | Obtain the clearest available version and verify cropping |
| Burger Buddies wordmark | Unknown as separate asset | Desktop header and hero | Extract only when quality is sufficient or recreate as text without claiming an official file |
| Brand colors | Reference-supported | Theme tokens | Sample from logo, then refine for accessibility |
| Flame motif | Reference-supported | Restrained decorative accent | Recreate as a simple original shape; do not copy full poster artwork |
| Favicon/app icon | Demo | Browser metadata | Derive from concept logo treatment and label internally as demo |

## 5. Existing profile screenshots

Use the supplied profile screenshots to inspect:

- Logo placement
- Color balance
- Promotional energy
- Product categories
- Repeated visual motifs
- Branch/contact presentation

Do not use them directly as:

- Hero images
- Product thumbnails
- Background textures
- Final menu assets

## 6. Product asset needs

Collect focused references for 8–12 demo products.

### Candidate products visible or previously identified from references

| Product | Evidence status | Concept role | Asset needed |
|---|---|---|---|
| Al-Arabi Burger | Reference-supported | Featured customizable product | Clear individual product image/post |
| Triple Crunch | Reference-supported | Featured burger/deal | Clear image and current naming verification |
| Beef Burger | Reference-supported | Burger category | Focused image |
| Chicken Tikka Pizza | Reference-supported | Pizza category | Focused image |
| Arabian Delight Pizza | Reference-supported | Pizza category | Focused image |
| Creamy Delight Pizza | Reference-supported | Pizza category | Focused image |
| Deep Dish Pizza | Reference-supported | Featured pizza | Focused image |
| Pizza Fries | Reference-supported | Sides category | Focused image |
| Pasta | Reference-supported, exact variant unknown | Pasta category | Exact name and image |
| Combo Platter | Reference-supported, exact contents unknown | Deals category | Current contents and image |

Do not invent ingredients as factual product descriptions. Short demo descriptions may be written, but should avoid precise unsupported recipes.

## 7. Demo menu categories

Proposed categories:

- Popular
- Burgers
- Pizza
- Deals
- Pasta
- Sides
- Drinks

**Status:** Demo taxonomy based on observed product range. Confirm against the current menu before production use.

## 8. Price inventory

Current prices are not treated as verified unless captured from a recent official post or menu.

### Concept policy

- Store prices as numeric PKR values for functionality.
- Clearly mark them as demo data where shown.
- Include a global or local note: “Concept prices for demonstration only.”
- Never imply final pricing accuracy.
- The WhatsApp message should ask staff to confirm final price.

### Required verification before a sales demonstration

- Confirm whether visible prices are recent enough to use.
- Prefer a small set of current reference-supported prices.
- Otherwise use internally consistent demo prices and explicit labels.

## 9. Branch inventory

### Mirpurkhas

- **Status:** Reference-supported branch presence
- **Role:** Default demonstrated branch
- **Required before final demo:** verify display name, address, order number, opening hours, and pickup availability

### Other branch names

Other locations may appear in references, but should not be configured as fully working branches without current verified details.

For the concept, other branches may be:

- Omitted
- Shown as “Coming to the concept later”
- Displayed in a non-interactive reference list

Do not create plausible phone numbers or addresses.

## 10. Contact information

A Mirpurkhas number appears in the supplied social references, but it must be verified before use as business data.

### Safety policy

- Do not commit a live restaurant number into interactive checkout logic by default.
- Use `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- Keep `NEXT_PUBLIC_DEMO_MODE=true` during development and sales demonstrations.
- Use Ibrahim's test number only when he explicitly configures it locally.
- Never expose a secret; public environment variables are visible in the browser.

## 11. Business information to collect

Create focused screenshots or notes for:

- Current Mirpurkhas phone/WhatsApp number
- Current address
- Google Maps listing
- Opening hours
- Delivery area
- Delivery fee policy
- Pickup policy
- Payment methods
- Branch list
- Current menu
- Current offers

Store screenshots under:

```text
public/references/business-info/
```

Use descriptive filenames with capture dates when possible:

```text
mirpurkhas-contact-2026-07-21.png
mirpurkhas-hours-2026-07-21.png
mirpurkhas-delivery-info-2026-07-21.png
```

## 12. Promotion inventory

Collect two or three current promotional posts suitable for homepage deal cards.

For each promotion record:

- Name
- Included products
- Price
- Branch applicability
- Start/end date when stated
- Source screenshot
- Verification date

Expired or undated promotions must not be presented as current. They may be recreated as clearly labelled demo promotions.

## 13. Interface copy inventory

### Homepage

Proposed demo copy:

- Heading: **Big flavour. Delivered fresh.**
- Primary CTA: **Order Now**
- Secondary CTA: **View Menu**
- Branch label: **Delivering from Mirpurkhas**

Status: Demo copy, not an official slogan.

### Menu

- Search placeholder: **Search burgers, pizzas and deals**
- Empty state: **No items match your search. Try another category or search term.**
- Unavailable state: **Currently unavailable**
- Price label where necessary: **Demo price**

### Product details

- Required group label: **Choose one**
- Extras label: **Add extras**
- Notes label: **Special instructions**
- Notes placeholder: **No onions, extra sauce, less spicy…**
- CTA: **Add to Cart**

### Cart

- Page title: **Your Order**
- Fulfilment choices: **Delivery**, **Pickup**
- CTA in demo mode: **Preview WhatsApp Order**
- External CTA: **Continue to WhatsApp**
- Fee note: **Delivery charges and final availability are confirmed on WhatsApp.**

## 14. WhatsApp message content

The generated preview needs:

- Greeting
- Branch
- Order type
- Products and quantities
- Selected options
- Instructions
- Estimated subtotal
- Delivery-charge note
- Customer name and phone
- Address and landmark for delivery
- Confirmation request

Copy should be professional, concise, and easy to scan. Avoid decorative emoji overload.

## 15. Legal and attribution content

Required disclaimer:

> Unofficial ordering concept created for demonstration purposes. Burger Buddies has not commissioned or endorsed this prototype.

Place it discreetly but readably in the footer and, where helpful, in the WhatsApp preview or demo information area.

Do not use:

- “Official”
- “Our customers” when referring to Burger Buddies customers
- “We deliver” as though Ibrahim operates the restaurant
- Testimonials
- Fabricated ratings
- Fabricated order counts
- Fabricated delivery times

## 16. Placeholder policy

Allowed temporary placeholders:

- Neutral food placeholder image
- “Demo price”
- “Address to be verified” in internal development states
- Local test WhatsApp number through environment configuration

Not allowed in the polished sales demo:

- Lorem ipsum
- Broken images
- `Product 1`
- Fake reviews
- Random phone numbers
- Unlabelled guessed prices
- Generic branch addresses

## 17. Content verification checklist

Before deployment:

- [ ] Logo quality reviewed
- [ ] Product names checked against references
- [ ] Product images have clear usage context
- [ ] Prices verified or labelled demo
- [ ] Mirpurkhas branch details verified or withheld
- [ ] Live number not hard-coded
- [ ] Promotions verified or labelled demo
- [ ] Ingredient claims removed unless supported
- [ ] Opening hours verified or omitted
- [ ] Delivery fee presented as unconfirmed
- [ ] Unofficial-concept disclaimer present
- [ ] No endorsement language present

## 18. Remaining content requests

Highest priority additions:

1. Clear Burger Buddies logo
2. Individual Al-Arabi Burger post/image
3. Triple Crunch post/image
4. Two current pizza posts
5. One current deal post
6. Current Mirpurkhas contact screenshot
7. Current address or Maps screenshot
8. Any current menu image
9. Storefront photo
10. Opening-hours or delivery-information post
