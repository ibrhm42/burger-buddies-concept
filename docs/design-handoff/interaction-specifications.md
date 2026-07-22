# Interaction Specifications

## 1. Principles

Interactions should feel immediate, clear, and restrained.

- Preserve familiar web behavior.
- Use motion to explain state changes, not decorate them.
- Keep the primary order path short.
- Avoid blocking modals for routine actions.
- Always expose a recovery path.
- Respect keyboard and reduced-motion preferences.

## 2. Branch selection

Trigger:

- tapping/clicking the branch control in the header

Mobile behavior:

- open bottom sheet
- move focus into sheet
- show current branch as selected
- close on explicit close, escape, or safe backdrop interaction
- return focus to trigger

Desktop behavior:

- centered dialog or anchored popover

Phase-one rule:

- Mirpurkhas is the functional default
- do not fabricate additional branch details
- changing branch should not silently discard cart items; either retain them when menu is shared or ask for confirmation if branch-specific data is introduced later

## 3. Search

- Update results as the user types.
- Search product name and concise description.
- Trim leading/trailing whitespace.
- Match case-insensitively.
- Show a clear button when search is non-empty.
- Preserve selected category unless the product set becomes confusing; the initial implementation may combine search and category filters.
- No-results state offers **Clear search** or **View all products**.

Do not debounce local data unless required for UX consistency.

## 4. Category filtering

- Selecting a category updates visible products immediately.
- Selected state is visually strong and programmatically conveyed.
- **Popular** may represent a curated flag rather than a product category.
- Category selection should remain available during route navigation where helpful, but persistence across refresh is optional.

## 5. Product opening

- Configurable products navigate to `/menu/[productSlug]`.
- Simple products may quick-add from menu only when a default configuration is unambiguous.
- Product card action labels must explain behavior: **Add** or **Customize**.

## 6. Product options

### Single-choice group

- Use radio semantics.
- Selecting one option replaces the previous selection.
- Required groups block add-to-cart until completed.

### Multiple-choice group

- Use checkbox semantics.
- Respect configured maximum selections.
- If a maximum is reached, disable or explain unavailable additional choices.

### Price updates

- Update configured unit price immediately.
- Update sticky action total using quantity.
- Price adjustments are displayed beside options.
- Never mutate the original product data object.

### Validation

On add attempt with missing required choices:

- show error near the first invalid group
- move focus or scroll that group into view
- keep prior valid selections
- do not show a generic toast as the only error

## 7. Quantity

- Minimum 1 on product details.
- Cart quantity may reach zero only through an explicit remove interaction, not repeated minus clicks unless a confirmation pattern is intentionally designed.
- Suggested demo maximum: 10.
- Plus/minus controls update totals immediately.
- Disabled states remain visually and semantically clear.

## 8. Special instructions

- Optional.
- Suggested maximum: 180 characters.
- Preserve line breaks where practical in the preview.
- Trim excessive whitespace before message generation.
- Do not treat instructions as product options for price calculation.

## 9. Add to cart

When valid:

1. Create a cart-item snapshot.
2. Generate a stable unique identity for the configuration.
3. Add or merge only when product and selected configuration are equivalent.
4. Show lightweight confirmation.
5. Update cart badge and sticky cart summary.

Recommended confirmation:

- short toast: **Added to your order**
- optional **View Cart** action

Do not redirect automatically unless the user taps View Cart.

## 10. Cart persistence

- Store versioned cart data in `localStorage`.
- Restore only after client hydration.
- Validate the parsed shape defensively.
- On invalid data, clear or migrate safely and continue without crashing.
- Do not let storage restoration visibly replace server content with a jarring layout shift; use a small hydration-ready strategy.

## 11. Cart editing

### Quantity

- updates line total and subtotal immediately

### Remove

- removes item immediately or with a short undo toast
- avoid a confirmation dialog for ordinary removal unless accidental loss becomes a demonstrated problem

### Edit choices

- open the product route with existing configuration or an edit-specific route/state
- preserve the cart item identifier
- saving replaces the existing line instead of creating an unintended duplicate

### Clear cart

- explicit text action
- confirm only because it affects all items

## 12. Delivery and pickup

Use a segmented control.

Delivery:

- requires full name, phone, and address
- landmark optional
- delivery fee remains “To be confirmed”

Pickup:

- requires full name and phone
- hides address and landmark
- message clearly says Pickup

Switching modes:

- preserve entered fields in local form state where reasonable
- hidden delivery fields are not validated for pickup

## 13. Customer form validation

### Full name

- required
- trim whitespace
- reasonable minimum length

### Phone

Accept common Pakistani patterns such as:

- `03XXXXXXXXX`
- `+923XXXXXXXXX`
- `923XXXXXXXXX`
- spaces or hyphens for display input

Normalize through a shared utility before external use.

### Address

- required for delivery
- support multiline text

### Landmark and notes

- optional
- length-limited

Submission behavior:

- validate all required fields
- focus the first invalid field
- announce errors accessibly
- do not open preview when invalid

## 14. WhatsApp message preview

Trigger:

- **Preview WhatsApp Order**

Behavior:

1. Validate cart, branch, mode, and form.
2. Generate message through a pure utility.
3. Open preview dialog/sheet.
4. Show full readable message.
5. Show demo-mode notice.
6. Allow the customer to go back and edit.

The preview should include:

- greeting
- branch
- order type
- each item and quantity
- selected options
- special instructions
- subtotal
- delivery-charge note
- customer details
- address/landmark when delivery
- confirmation request

## 15. Continue to WhatsApp

Environment:

```env
NEXT_PUBLIC_DEMO_MODE=true
NEXT_PUBLIC_WHATSAPP_NUMBER=923XXXXXXXXX
```

Demo mode:

- preview works
- external action is disabled or clearly points only to the configured test number
- restaurant is never contacted automatically

Non-demo mode:

- button creates a safely encoded click-to-chat URL
- user deliberately opens WhatsApp
- no automatic message send

Missing number:

- disable continuation
- explain that a test destination has not been configured

## 16. Dialog and sheet behavior

- Escape closes when safe.
- Backdrop click closes only when it will not lose meaningful unsaved input; preview may close safely, forms should preserve state.
- Trap focus while open.
- Restore focus on close.
- Internal content scrolls when tall.
- Body scroll is locked while open.

## 17. Navigation behavior

Mobile destinations:

- Home → `/`
- Menu → `/menu`
- Deals → `/menu?category=deals` or equivalent
- Cart → `/cart`

Use normal links for route navigation. Do not simulate routes through local component state.

Browser back should work naturally from product details and cart.

## 18. Motion

Recommended timings:

- press/hover: 120ms
- selected category or quantity feedback: 180–220ms
- toast: 220ms entrance
- sheet/dialog: 280–320ms

Reduce or remove nonessential transitions when reduced motion is requested.

## 19. Error and recovery states

Required:

- invalid product slug → not-found experience with Menu action
- unavailable product → disable add and suggest menu
- empty cart → Browse Menu action
- no results → clear filters
- malformed saved cart → recover silently with optional development logging
- missing WhatsApp number → safe explanatory state
- missing image → branded neutral placeholder without broken layout

## 20. Analytics

No production analytics is required. Do not add tracking without explicit approval.
