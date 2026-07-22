# Dependency Advisory Record

**Audit date:** 2026-07-22

**Command:** `npm audit --omit=dev`

**Result:** 3 production dependency findings: 1 moderate and 2 high. These findings are unresolved.

## Current audit graph

The npm count represents two published advisories across three affected dependency nodes: the vulnerable packages themselves and `next`, which depends on both.

| Audit finding | Installed version | Source in this repository | Severity | Affected scenario |
|---|---:|---|---|---|
| `postcss` / [GHSA-qx2v-qp2m-jg93](https://github.com/advisories/GHSA-qx2v-qp2m-jg93) | `8.4.31` | Bundled below `next@16.2.10` at `node_modules/next/node_modules/postcss` | Moderate | XSS is possible when attacker-controlled CSS is parsed, stringified, and embedded in an HTML `<style>` context without escaping `</style>`. Versions below `8.5.10` are affected. |
| `sharp` / [GHSA-f88m-g3jw-g9cj](https://github.com/advisories/GHSA-f88m-g3jw-g9cj) | `0.34.5` | Dependency of `next@16.2.10` | High | Upstream libvips vulnerabilities affect applications that process untrusted image input. Versions below `0.35.0` are affected. |
| `next` aggregate dependency node | `16.2.10` | Direct production dependency | High in npm's dependency count | npm flags `next` because it depends on both vulnerable transitive packages above. This is not a third distinct advisory. |

The top-level Tailwind toolchain uses `postcss@8.5.22`; the reported PostCSS copy is the separate version nested under Next.js.

## Current prototype exposure

Exposure is limited, not eliminated:

- The app parses only repository-authored CSS. It does not accept, transform, or embed user-supplied CSS.
- Images are repository-local static references. There is no upload feature, remote image URL input, image-processing API, backend, or untrusted media pipeline.
- There are no API routes, authentication routes, admin routes, or server-side customer-data stores.
- The release remains a local, unofficial demonstration and has not been deployed.

These constraints reduce the reachable attack surface but do not make the dependency findings fixed.

## Why the automatic force fix was rejected

`npm audit fix --force` proposes installing `next@9.3.3`. That is a major breaking downgrade from the repository's required `next@16.2.10`, would violate the approved architecture, and would not be a responsible release fix. No force fix, override, direct dependency mutation, or canary/preview framework version has been introduced.

## Required future review

Before any public deployment or after a compatible stable Next.js release becomes available:

1. Verify the target stable Next.js release independently against its release notes and installed dependency graph.
2. Confirm it includes `postcss >= 8.5.10` and `sharp >= 0.35.0`, or otherwise resolves the same advisories through supported dependencies.
3. Upgrade Next.js and its paired ESLint package together without using `--force`.
4. Run the full route journey, viewport review, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, `npm run check`, and `npm audit --omit=dev`.
5. Update this record with the new versions and exact audit result. Do not mark the findings fixed until the installed graph and audit prove it.
