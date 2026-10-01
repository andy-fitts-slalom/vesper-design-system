# Vesper UI verification

## 3.0.0 — 2026-10-01

- `npm run check`: five token, contrast, export and Ionic checks passed.
- `npm_config_cache=/private/tmp/vesper-npm-cache npm run pack:release`: produced `releases/vesper-ui-3.0.0.tgz` (176.1 kB, 31 files), SHA-256 `2f3898d1d9214f9aeeb7cbe16ae7b285ab8e0b9e5c658849aadd5d51db4ecd38`.
- `node scripts/check-consumer.mjs ../p301-dashboard/node_modules`: Vue type check, client build, SSR build and semantic render passed from the packed release.
- Chrome preview at `http://127.0.0.1:4386/preview/index.html`: inspected the salt-flat canvas, Barlow Condensed hierarchy, three product specimens and paper palette.
- The three independent consumers installed the checked-in tarball and built successfully; application test details are recorded in their own verification documents.
- The background WebP is 35.9 kB at 2048 × 1152, with its generated source PNG retained under `design/`. Existing historical verification remains below.

## Historical 2.0 record

# Vesper 2.0 verification — September 30, 2026

## Shared package

- `npm run check` passed: five groups covering supported text/action/status contrast, focus and control boundaries, token generation, exports/assets, and Ionic color definitions.
- `npm_config_cache=/private/tmp/vesper-npm-cache npm run pack:release` produced `releases/vesper-ui-2.0.0.tgz` (95.1 kB, 27 package files). The alternate cache avoided an existing permission error in the user's npm cache; no user cache ownership was changed.
- `node scripts/check-consumer.mjs ../p301-dashboard/node_modules` passed Vue type checking, Vite production client and SSR builds, and semantic SSR checks from the actual release tarball. This does not run any app's domain workflows.
- SHA-256: `09608c3a9a83ef41aef49059a83054688f3faa92e8f1a7d8592d2eb363594d6f`.
- The local reference loaded at `http://127.0.0.1:4386/preview/index.html` in Chrome. The Vesper mark, typography, paper hero, three product specimens, and semantic palette rendered; desktop header and product-expression section were visually inspected. Mobile and 200% zoom checks remain for the individual app migrations.

## Repository and deployment state

The existing Meridian refactor commits for Watchlight and Frame were fast-forwarded onto `main` and pushed. Verbatim's refactor was already on `main`. Each merged refactor branch was removed locally and remotely after ancestry checks; each GitHub repository now has only `main`. The three GitHub repositories were renamed to `watchlight`, `frame`, and `verbatim`, with local origins updated.

Vercel project names are Watchlight, Frame and Verbatim. The user explicitly approved creating and deploying Watchlight after an initial automatic approval review block. Vercel reports a Ready production deployment from `main` at `https://watchlight-rouge.vercel.app/`, sourced from commit `74e0edb`; the live page opened in Chrome with the Watchlight/Vesper title, queue and expected initial metrics (15 open, 8 unassigned, 3 overdue, 72 coverage items). Frame and Verbatim retain the existing production domains `beyond-the-headline-count.vercel.app` and `ready-to-say.vercel.app`. Adding new domains was separately blocked by automatic approval review because it changes production routing; that remains unapproved.

## Review requirements

The supplied Protogen learner instructions were read in full. All three repositories currently have nonempty `AGENTS.md`, `BRIEF.md`, `README.md`, and `LICENSE`, organized docs, and descriptive multi-commit history. Watchlight's live-site gap is resolved. At the initial audit, Frame and Verbatim opened at their old production domains with former parent/product names. Their individual sessions may have since published newer builds; each should recheck its current page and source commit. Each prompt now calls for verifying core flows against its brief, preserved planning evidence, industry fit, responsive and edge states, and the deployed URL. Password protection is recommended in the document, not mandatory.

The Vesper package's automated checks cover specified token combinations only. They do not certify complete accessibility, screen readers, Safari/Firefox, a physical phone's virtual keyboard, or the eventual deployed application screens. Those checks belong in each project session after migration.
