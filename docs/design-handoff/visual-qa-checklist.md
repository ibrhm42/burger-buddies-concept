# Visual QA Checklist

## 1. Rule

A screen is not visually complete until it has been rendered, captured, and inspected. Code review alone is insufficient.

## 2. Required viewport captures

Capture every primary route at:

- 360 × 800
- 390 × 844
- 430 × 932
- 768 × 1024
- 1440 × 1000

Primary routes:

- `/`
- `/menu`
- one representative `/menu/[productSlug]`
- `/cart` with items
- `/cart` empty

Also capture:

- branch selector
- no-results menu
- required-option error
- WhatsApp preview

## 3. Reference comparison priorities

Compare high-impact qualities in this order:

1. Overall composition
2. Food-image prominence and crop
3. Dark surface hierarchy
4. Typography scale and weight
5. Primary-action visibility
6. Card and control proportions
7. Spacing rhythm
8. Navigation and sticky-action placement
9. Price and total hierarchy
10. Fine decorative detail

Do not spend time chasing one-pixel differences while major composition is wrong.

## 4. Global visual checks

- [ ] Background is near-black, not flat pure black everywhere.
- [ ] Multiple charcoal levels create clear depth.
- [ ] Primary orange is selective and meaningful.
- [ ] Red is limited to promotion/brand emphasis.
- [ ] WhatsApp green appears only in WhatsApp-specific areas.
- [ ] Warm text is readable and not harsh pure white everywhere.
- [ ] Typography feels modern and polished.
- [ ] Large-radius controls match the reference language without every element becoming a card.
- [ ] Food imagery dominates more than decoration.
- [ ] No generic SaaS or marketplace visual language remains.
- [ ] No unapproved ratings, distance, or delivery-time content appears.

## 5. Header

- [ ] Burger Buddies logo is clear and not distorted.
- [ ] Mirpurkhas context is visible.
- [ ] Cart control is easy to find.
- [ ] Cart badge handles two digits.
- [ ] Header fits at 360px.
- [ ] Desktop header feels intentionally composed.
- [ ] Inner-route back control has a practical target.

## 6. Homepage

- [ ] First viewport communicates brand, food, branch, and Order Now.
- [ ] Hero does not push all ordering content below the fold.
- [ ] Food crop is appetizing and not covered awkwardly by text.
- [ ] Promotional panel has strong contrast but does not dominate the whole page.
- [ ] Categories are clearly interactive.
- [ ] Best-seller cards have consistent image ratios.
- [ ] Product prices and actions remain visible.
- [ ] Disclaimer is readable but secondary.
- [ ] Desktop hero uses a balanced split rather than stretched mobile stacking.

## 7. Menu

- [ ] Search is prominent and usable.
- [ ] Category tabs scroll without page overflow.
- [ ] Selected category is unmistakable.
- [ ] Product cards can be scanned quickly.
- [ ] Images are clean crops rather than social-poster screenshots.
- [ ] Names wrap safely.
- [ ] Descriptions clamp without cutting controls.
- [ ] Add versus Customize behavior is obvious.
- [ ] Unavailable state is clear without relying only on opacity.
- [ ] Sticky cart summary appears only when the cart has items.
- [ ] Sticky cart summary does not overlap bottom navigation.
- [ ] Desktop grid has appropriate card width and column count.

## 8. Product details

- [ ] Hero image is the visual focal point.
- [ ] Overlapping panel feels intentional.
- [ ] Product title, description, and price hierarchy are clear.
- [ ] Required groups are labelled.
- [ ] Selected options are obvious.
- [ ] Price adjustments remain readable.
- [ ] Quantity target sizes are practical.
- [ ] Special-instructions field fits without crowding.
- [ ] Sticky Add to Cart does not cover last form controls.
- [ ] Error state scrolls/focuses the invalid group.
- [ ] Desktop two-column layout remains balanced.

## 9. Cart and checkout

- [ ] Cart thumbnails are consistent.
- [ ] Product choices remain readable.
- [ ] Quantity controls do not collide with prices.
- [ ] Edit and Remove actions are discoverable.
- [ ] Delivery/pickup control has a strong selected state.
- [ ] Form labels and errors are clear.
- [ ] Total hierarchy is stronger than helper copy.
- [ ] “To be confirmed” delivery charge is visible.
- [ ] Sticky preview action does not cover content.
- [ ] Desktop summary column is sticky and appropriately sized.

## 10. WhatsApp preview

- [ ] Preview content is easy to scan.
- [ ] Message line breaks are preserved.
- [ ] Demo-mode notice is visible.
- [ ] Back/edit action is clear.
- [ ] Continue action uses WhatsApp green.
- [ ] Missing-number state is safe and understandable.
- [ ] Dialog fits at 360px and remains internally scrollable.
- [ ] Desktop dialog does not become excessively wide.

## 11. Responsive checks

### 360px

- [ ] No horizontal overflow.
- [ ] No truncated primary actions.
- [ ] Bottom navigation labels fit.
- [ ] Sticky actions account for safe area.

### 390px

- [ ] This receives the most detailed visual comparison to the approved reference.

### 430px

- [ ] Cards do not stretch awkwardly.
- [ ] Gutters remain balanced.

### 768px

- [ ] Layout feels tablet-specific.
- [ ] No oversized mobile components.

### 1440px

- [ ] Maximum width is controlled.
- [ ] Desktop navigation is active.
- [ ] Product and cart columns are intentional.
- [ ] No giant empty regions.

## 12. Accessibility visual checks

- [ ] Focus rings are visible on dark surfaces.
- [ ] Error colors maintain contrast.
- [ ] Disabled controls remain understandable.
- [ ] Text is not placed directly over complex imagery without protection.
- [ ] Touch targets are approximately 44px where practical.
- [ ] Reduced-motion mode does not break state communication.

## 13. Content-integrity checks

- [ ] All prices use Rs.
- [ ] Demo-price notice is visible.
- [ ] No guaranteed delivery times.
- [ ] No fabricated ratings or reviews.
- [ ] No marketplace brands copied from the reference.
- [ ] No “official” or endorsement claim.
- [ ] Disclaimer is present.
- [ ] Restaurant phone number is not unintentionally hard-coded.

## 14. Functional checks tied to visual state

- [ ] Cart badge updates.
- [ ] Sticky cart summary values update.
- [ ] Dynamic product total updates.
- [ ] Form errors appear near fields.
- [ ] Empty and unavailable states render intentionally.
- [ ] Refresh does not cause unacceptable cart layout flash.
- [ ] Dialog focus and scroll behavior are correct.

## 15. Release blockers

Do not present the demo when:

- the hero or product imagery looks like placeholder content
- mobile overflow is visible
- sticky actions collide
- the cart total is visually or functionally wrong
- the page looks like a generic starter template
- the desktop version is simply enlarged mobile
- demo mode could contact the restaurant accidentally
- build or lint fails

## 16. QA report format

For each review pass, record:

```text
Route:
Viewport:
Reference qualities checked:
High-impact deviations:
Fixes made:
Remaining deviations:
Approved / needs another pass:
```
