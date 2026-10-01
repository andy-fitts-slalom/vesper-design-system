# Vesper UI · 3.0.0

A shared brand and UI system for **Vesper**, the fictional parent of Watchlight, Frame, and Verbatim. Version 3 adopts a cool salt-flat canvas, petrol accents, and condensed sans display type. Each application installs its own portable copy of the package.

Start with the [visual reference](preview/index.html), [brand identity](docs/BRAND.md), [project inventory](docs/INVENTORY.md), [review readiness](docs/REVIEW-READINESS.md), and [component contracts](docs/COMPONENTS.md). The source of truth for values is `src/tokens.json`; build outputs must not be edited by hand.

## Included

- One parent identity using an original V-and-star Vesper mark, with a common Vue brand lockup.
- Paper, light and dark semantic themes; operations, editorial and mobile layout modes.
- Locally hosted DM Sans 400/500/600/700 and Barlow Condensed 600/700, with font licenses.
- Generated CSS variables, typed JavaScript tokens, framework-neutral CSS recipes and seven Vue 3 primitives.
- Vuetify, Ionic and ECharts/D3 styling adapters; existing frameworks remain in place.
- A responsive reference site with a theme switch, live control states, form validation and evidence dialog.
- A versioned npm tarball for independent repository/CI deployment.
- Three ready-to-run refactoring prompts, with domain safeguards and acceptance checks.

## Review and build

Node 22.12+; the token build and tests have no install step or dependencies.

```sh
cd vesper-design-system
npm run check
npm run preview
# Open http://127.0.0.1:4386
npm run pack:release
node scripts/check-consumer.mjs ../p301-dashboard/node_modules
```

The preview is plain HTML using the actual distributed CSS, fonts and brand mark. It is a reference catalog, not a replacement application or a Vue component demo. Vue primitives and adapters are separately type/build checked in the verification fixture described in `docs/VERIFICATION.md`.

## Install in any one project

Run these commands **from that project's root** after following its prompt. This distribution keeps deployments independent; no sibling repository is needed by `npm ci`.

```sh
mkdir -p vendor
cp ../vesper-design-system/releases/vesper-ui-3.0.0.tgz vendor/
npm install ./vendor/vesper-ui-3.0.0.tgz
```

Retain `vendor/vesper-ui-3.0.0.tgz`, package.json and the updated lockfile together. Do not use `file:../vesper-design-system`, a development symlink, an unpublished registry dependency, or cross-project application imports. If this project is moved elsewhere, copy the tarball and docs into the checkout before continuing.

```ts
// Import after framework core styles, before local application styles.
import '@vesper/ui/fonts.css'
import '@vesper/ui/styles.css'
import { tokens } from '@vesper/ui'
import { VesperBrand, VesperButton, VesperField } from '@vesper/ui/vue'
```

```html
<!-- Set attributes on html so portaled overlays inherit tokens too. -->
<html lang="en" data-vs-theme="dark" data-vs-mode="operations">
```

Add `vs-root` on body or a root that also contains framework overlays. For Ionic, body/root and active IonPage inherit the same tokens. The stylesheet intentionally does not reset body, existing headings or framework controls. Read `docs/INTEGRATION.md` for exact import order, framework configuration and recipes.

## Start a refactor

Open a separate chat in each existing project, then paste that project's complete prompt:

- [Watchlight](prompts/p301-dashboard.md)
- [Frame](prompts/p302-data-story.md)
- [Verbatim](prompts/p303-mobile.md)

The shared source is maintained in the public [vesper-design-system GitHub repository](https://github.com/andy-fitts-slalom/vesper-design-system). Each application upgrade remains independently installable using the release tarball. Existing application repositories have been renamed to match the products. See `docs/GOVERNANCE.md` for source ownership and release guidance.
