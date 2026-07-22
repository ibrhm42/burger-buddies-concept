# Burger Buddies Ordering Concept

An unofficial, mobile-first Next.js demonstration of a smoother Burger Buddies menu and WhatsApp ordering experience for Mirpurkhas.

Burger Buddies has not commissioned or endorsed this prototype. The project is a sales concept created by Ibrahim.

## Product idea

The app lets a customer:

1. Confirm the Mirpurkhas branch.
2. Browse and search a structured menu.
3. Customize a product.
4. Add items to a persistent cart.
5. Enter delivery or pickup details.
6. Preview a complete WhatsApp order.
7. Continue to WhatsApp through an explicit safe action.

## Approved visual direction

The implementation uses a premium dark, food-led ordering design inspired by Emmanuel Aziabunam's **Food Delivery App — Dark UI Ordering Experience**.

Repository references:

```text
public/references/ui/premium-dark-ordering-reference.svg
public/references/ui/reference-source.md
```

The SVG is a repository-safe visual synopsis. `reference-source.md` contains the original source link and adaptation rules. The reference is a visual north star, not a screen to clone.

## Codex handover

Codex must begin with [`AGENTS.md`](./AGENTS.md).

The complete design handoff begins at:

[`docs/design-handoff/README.md`](./docs/design-handoff/README.md)

The handoff includes:

- source-of-truth rules
- reference analysis
- design decision log
- design tokens
- component specifications
- responsive behavior
- interaction specifications
- content map
- implementation phases
- rendered visual-QA checklist
- a ready-to-use Codex start prompt

## Core routes

```text
/
/menu
/menu/[productSlug]
/cart
```

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- local typed menu data
- React Context for branch and cart state
- `localStorage` persistence
- WhatsApp click-to-chat handoff

## Safe environment setup

Copy the example file:

```bash
cp .env.example .env.local
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

The safe default is:

```env
NEXT_PUBLIC_DEMO_MODE=true
NEXT_PUBLIC_WHATSAPP_NUMBER=923XXXXXXXXX
```

Keep demo mode enabled during development and sales demonstrations. Do not configure the restaurant's live number unless that behavior is intentionally approved.

## Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

Additional typecheck or test scripts may be added during implementation.

## Scope boundary

The first concept does not include:

- authentication
- database
- production admin dashboard
- online payment
- live tracking
- POS or inventory integration
- loyalty or coupon systems

The goal is a polished, convincing ordering demonstration—not a free production platform.

## Required disclaimer

> Unofficial ordering concept created for demonstration purposes. Burger Buddies has not commissioned or endorsed this prototype.
