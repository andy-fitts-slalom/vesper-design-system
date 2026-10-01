# Ownership and releases

`src/tokens.json` owns foundation values. `src/styles/` owns framework-neutral visual recipes. `src/vue/` owns small presentation primitives. `src/adapters/` owns framework translation. Applications own layout composition, labels, routes, state, datasets, metrics, approvals and domain actions.

Version 2.0.0 changes the package name, export names, CSS namespace and identity; it is a breaking migration from @meridian/ui 1.0.0. Patch: compatible visual/bug repair. Minor: additive token/component/variant. Major: removed or renamed export/prop/token, default change that alters layout semantics, or incompatible CSS contract. Record changed roles, affected products, validation and migration steps in CHANGELOG.md.

Run `npm run check`, review all themes and phone rendering, check Vue/adapters in the consumer fixture, and run `npm run pack:release`. For a changed release, bump package.json and src/tokens.json together first. Keep the released tarball immutable. Copy the new tarball to each consumer and update its lockfile intentionally. Compare release checksums when diagnosing drift.

The canonical shared source is the public [andy-fitts-slalom/vesper-design-system repository](https://github.com/andy-fitts-slalom/vesper-design-system). Keep its history and tagged releases as the source of truth. The three application repositories remain independent and consume versioned tarballs; do not replace those dependencies with sibling paths or application cross-imports.

Product-specific additions stay local until two products demonstrably need the same presentation contract. Never move eligibility, campaign metrics, fixed-clock rules or persistence into the design package to reduce superficial duplication. Cross-project shared branding and presentation are explicitly requested; case-study business data/code remain independent.

The release contains licensed fonts and an original Vesper SVG mark. `licenses/` ships full OFL font notices; original code uses the accompanying MIT license. Fonts are unmodified, locally served Latin subsets. Add scripts/subsets only when product content requires them, with the same licensing diligence.
