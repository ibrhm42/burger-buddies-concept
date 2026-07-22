# Release Asset Inventory

**Reviewed:** 2026-07-22

**Status:** Temporary concept imagery; replacement required before any official or production use.

## Usage rules

All live product images are crops of supplied Burger Buddies social-post references. They are useful for a local visual demonstration, but they are not final-quality product photography and should not be treated as current menu, offer, price, contact, or location evidence.

The interface uses `object-fit` positioning and scale to emphasize food and keep embedded footer information outside the visible card crop. The underlying files still contain promotional artwork and, in several cases, phone, location, social-handle, delivery, or old price text. Those source-file details are not used as structured application data and must not be relied on.

## Images currently rendered by product data

| Repository path | Product or surface | Reference match | Embedded typography in source | Temporary | Recommended replacement |
|---|---|---|---|---|---|
| `public/references/products/al-arabi-burger.jpg` | Al-Arabi Burger | Exact named reference | Product name, call to order, phone, location, slogan | Yes | Rights-cleared, text-free Al-Arabi Burger photograph with a clean background and consistent card/detail crops. |
| `public/references/products/beef-burger.jpg` | Beef Burger; homepage promotion card | Exact named reference | Product name, phone, location, logos | Yes | Rights-cleared, text-free Beef Burger photograph plus a separate purpose-made promotional composition if still needed. |
| `public/references/products/beef-burger-2.jpg` | Triple Crunch | Closest available burger crop; not an exact Triple Crunch reference | “Beef Burger,” home-delivery claim, order CTA, phone, location | Yes | Exact Triple Crunch photograph with verified naming and no operational copy. |
| `public/references/products/crown-pizza.jpg` | Crown Pizza | Exact named reference | Product name, slogan, order CTA, phone, location | Yes | Text-free Crown Pizza photograph showing the full product clearly. |
| `public/references/products/chicken-tikka-pizza.jpg` | Chicken Tikka Pizza | Exact named reference | Product-name treatment, order CTA, phone, location, brand ring text | Yes | Text-free Chicken Tikka Pizza photograph with a consistent angle and background. |
| `public/references/products/creamy-delight-pizza.jpg` | Arabian Delight Pizza | Closest available pizza crop; source is Creamy Delight, not Arabian Delight | Creamy Delight name, slogan, order CTA, phone, location | Yes | Exact Arabian Delight Pizza reference after product name and image are verified. |
| `public/references/products/deep-dish.jpg` | Deep Dish Pizza | Exact named reference | Product name, promotional/struck price, phone, location | Yes | Text-free Deep Dish Pizza photograph without historical price or contact information. |
| `public/references/products/pizza-fries.jpg` | Pizza Fries | Exact named reference | Product name, order CTA, phone, location | Yes | Text-free Pizza Fries photograph with the full serving visible. |
| `public/references/products/pasta.jpg` | Pasta | Closest available pasta crop; exact variant is uncertain and source says Fettuccine Alfredo | Variant name, order CTA, phone, location | Yes | Verified photograph and exact customer-facing name for the intended pasta variant. |
| `public/references/products/crispy-broast.jpg` | Crispy Broast unavailable state | Exact named reference | Product name, order CTA, phone, location | Yes | Text-free product photograph if the item and availability are later verified. |
| `public/references/products/deal-5.jpg` | Combo Platter | Closest available sharing/deal crop; not an exact Combo Platter reference | Historical deal number, old price, contents, beverage label, social handles | Yes | Exact Combo Platter photograph after contents and naming are verified; no historical deal or price text. |

## Other rendered brand assets

| Repository path | Usage | Status | Follow-up |
|---|---|---|---|
| `public/references/brand/logo.jpg` | Header brand mark | Reference-supported social crop | Obtain a clean, rights-cleared logo export with transparent or intentional background treatment. |
| `src/app/icon.jpg` | Browser icon and metadata | Provisional concept icon | Replace only with an approved official-quality icon if public deployment is authorized. |

## Release limitation

Image replacement is intentionally deferred. No images were generated, downloaded, reauthored, or imported during release cleanup. A future asset pass should obtain clean, product-specific, text-free, rights-cleared photographs and verify each product name before public use.
