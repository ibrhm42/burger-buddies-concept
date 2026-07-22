# Burger Buddies Ordering Experience — Release Candidate

**Candidate date:** 2026-07-22

**Release type:** Safe local demonstration candidate

**Public deployment:** Not authorized

**Indexing:** Globally disabled with `noindex, nofollow`

## Unofficial concept statement

This is an unofficial ordering concept created by Ibrahim for demonstration purposes. Burger Buddies has not commissioned or endorsed the prototype. It must not be presented as an official service, current menu, or live ordering channel.

## Candidate scope

The candidate demonstrates a single-brand, Mirpurkhas-first ordering journey:

1. Open the homepage and confirm the demonstrated Mirpurkhas branch.
2. Browse or search the typed local menu and choose a category.
3. Open a product, complete required choices, add optional extras, and adjust quantity.
4. Add the configured item to a persistent local cart.
5. Edit, remove, clear, or update item quantities.
6. Choose delivery or pickup and enter customer details.
7. Validate the form and review a structured in-app WhatsApp message.
8. In the default release configuration, stop safely with external WhatsApp continuation disabled.

## Included routes

| Route | Purpose |
|---|---|
| `/` | Homepage discovery, branch presentation, promotion concept, categories, and featured products |
| `/menu` | Searchable and category-filterable menu with empty and unavailable states |
| `/menu/[productSlug]` | Product detail, configuration, concept pricing, quantity, add, and edit behavior |
| `/cart` | Persistent cart, delivery/pickup details, validation, and WhatsApp preview |
| Unknown route | Branded page-not-found recovery to home or menu |
| Unknown product slug | Branded product-not-found recovery to home or menu |

The temporary `/design-review` route and its review-only code are removed. There are no API, authentication, admin, payment, or internal test routes.

## Demo-mode behavior and WhatsApp safety

The safe release defaults are:

```env
NEXT_PUBLIC_DEMO_MODE=true
NEXT_PUBLIC_WHATSAPP_NUMBER=923XXXXXXXXX
```

- Missing demo-mode configuration defaults to demo mode.
- `923XXXXXXXXX` is invalid and cannot become a destination.
- Missing or invalid destinations cannot generate a click-to-chat URL.
- Submitting valid customer details opens the in-app message preview only.
- Opening the preview never launches an external application.
- The disabled action reads “WhatsApp unavailable in demo mode.”
- No message is sent automatically under any configuration.
- A future external continuation would require a valid, explicitly configured number, demo mode disabled, and a separate deliberate click.

No live number is committed or configured by this candidate.

## Environment and local startup

Requirements:

- Node.js 20 or newer
- npm

```bash
npm install
cp .env.example .env.local
npm run dev
```

Windows PowerShell:

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

Local production mode:

```bash
npm run build
npm run start
```

## Verification commands

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run check
git diff --check
npm audit --omit=dev
```

The dependency audit is not expected to be clean and must be reported separately. See [dependency-advisories.md](./dependency-advisories.md).

## Content and data safeguards

- Mirpurkhas is the only configured branch.
- No restaurant phone number, address, hours, delivery area, or delivery time is presented as verified structured data.
- Customer fields begin empty; no real customer data is prefilled or persisted.
- Prices are typed concept values and are labelled as demonstration data.
- Final price, availability, charges, and timing are explicitly left for confirmation.
- Unavailable items cannot be added to the cart.
- Invalid cart and branch storage fall back safely without crashing.

## Known limitations

- Product prices and availability are not verified current business information.
- The promotion is labelled as a concept selection, not an active offer.
- Product imagery uses temporary crops from supplied social posts. Source files contain promotional typography and sometimes historical contact, location, price, or offer text; crop settings keep that content out of the intended UI composition, but the assets require replacement before official use. See [asset-inventory.md](./asset-inventory.md).
- Dependency findings remain unresolved and are documented rather than hidden.
- There is no backend, database, inventory source, online payment, account system, live tracking, order dispatch, or automatic message sending.
- Public hosting, provider setup, analytics, a live WhatsApp destination, and search indexing are not configured.

## Deployment prerequisites

Public deployment is outside this candidate and requires explicit approval. Before any deployment:

1. Reconfirm that the concept may be shared publicly and that `noindex, nofollow` should remain in place.
2. Review product names, concept prices, promotion copy, branch policy, and temporary imagery with the appropriate owner; do not silently present them as current facts.
3. Replace or approve all temporary social-post crops and verify rights for public use.
4. Reassess the dependency advisories against a compatible stable Next.js release.
5. Keep demo mode enabled unless a separately approved test destination and deliberate external-continuation test plan exist.
6. Run the complete route, functional, accessibility, viewport, build, and audit verification on the exact deployment candidate.
7. Obtain explicit approval before creating or changing any Vercel project, environment variable, DNS record, analytics configuration, or external provider resource.

## Release evidence

The acceptance reconciliation is tracked in [acceptance-status.md](./acceptance-status.md). Historical design decisions and responsive specifications remain under `docs/design-handoff/`.
