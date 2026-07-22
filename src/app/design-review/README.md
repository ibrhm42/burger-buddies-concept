# Temporary design-review route

`/design-review` exists only to support rendered review of the Phase 1 design
foundation. It is intentionally absent from customer-facing navigation and its
route metadata is `noindex, nofollow`.

Before final release, remove this directory and
`src/components/review/design-foundation-review.tsx`, then verify the route no
longer appears in the production build output.
