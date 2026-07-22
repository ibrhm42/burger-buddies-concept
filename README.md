# Burger Buddies Ordering Experience — Unofficial Concept

An unofficial, mobile-first Next.js ordering demonstration for Burger Buddies in Mirpurkhas. It shows a structured menu-to-cart journey and prepares a WhatsApp order for deliberate review.

> Burger Buddies has not commissioned or endorsed this prototype. It is concept work created by Ibrahim for demonstration purposes.

## Release-candidate status

The local release candidate includes:

- a premium dark, food-led Burger Buddies interface
- homepage discovery and a searchable, filterable menu
- configurable product details with required choices and dynamic concept pricing
- a persistent cart with edit, quantity, remove, and clear behavior
- delivery and pickup customer-detail validation
- a structured in-app WhatsApp order preview
- safe demo defaults that prevent external WhatsApp continuation
- intentional empty, unavailable, validation, and not-found experiences

No backend, account system, payment flow, or live restaurant integration is included.

## Customer routes

```text
/
/menu
/menu/[productSlug]
/cart
```

Unknown routes and product slugs use branded recovery pages. The former `/design-review` surface has been removed and is not part of the release output.

## Safe local setup

Requirements:

- Node.js 20 or newer
- npm

Install dependencies and copy the safe environment example:

```bash
npm install
cp .env.example .env.local
```

Windows PowerShell:

```powershell
npm install
Copy-Item .env.example .env.local
```

The committed example intentionally uses:

```env
NEXT_PUBLIC_DEMO_MODE=true
NEXT_PUBLIC_WHATSAPP_NUMBER=923XXXXXXXXX
```

`923XXXXXXXXX` is invalid by design. With the default configuration, checkout opens only the in-app preview, creates no external WhatsApp URL, and cannot contact a restaurant. Do not add a live destination without explicit approval and a separate safety review.

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

For a local production build:

```bash
npm run build
npm run start
```

## Verification

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run check
npm audit --omit=dev
```

The dependency audit is intentionally reported separately from implementation checks. See [Dependency advisories](./docs/release/dependency-advisories.md) for the current unresolved findings.

## Release documentation

- [Release-candidate notes](./docs/release/RELEASE-CANDIDATE.md)
- [Acceptance status](./docs/release/acceptance-status.md)
- [Asset inventory](./docs/release/asset-inventory.md)
- [Dependency advisories](./docs/release/dependency-advisories.md)
- [Design handoff](./docs/design-handoff/README.md)

The design-handoff documents remain the historical and architectural source for the approved visual direction.

## Known limitations

- All menu prices are concept data and are not verified current prices.
- Availability, final price, delivery charges, and timing require confirmation outside this prototype.
- Mirpurkhas is the only demonstrated branch; no address, opening hours, delivery area, or live restaurant number is presented as verified data.
- Product imagery is temporarily cropped from supplied social posts. It includes embedded promotional typography in the source files and is not final-quality product photography.
- The production dependency audit has unresolved transitive findings documented in the release advisory record.
- Public deployment, indexing, analytics, and live WhatsApp configuration are not authorized. Global metadata is `noindex, nofollow`.

## Scope boundary

This concept deliberately excludes authentication, a database, APIs, online payment, live tracking, admin tools, POS or inventory integration, loyalty, vouchers, and production provider configuration.

The goal is a safe, reviewable ordering demonstration—not an official or production Burger Buddies service.
