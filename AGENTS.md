# Vesper UI

Read README.md, docs/BRAND.md, docs/COMPONENTS.md and docs/GOVERNANCE.md before changing the system. This package owns shared presentation only. Keep all three applications' data, routes, state, metrics and eligibility local to their own repositories.

Edit src/tokens.json rather than generated dist files. Run npm run check after changing runtime source, then pack a new version and verify it with scripts/check-consumer.mjs using an existing compatible Vue/Vite node_modules path. Inspect the preview when visual styles change. Record actual results in docs/VERIFICATION.md.

Do not replace framework-native controls just to maximize component reuse. Preserve local fonts/licenses and the original Vesper mark source. Keep typed exports and CSS roles compatible or bump the release version. Do not publish, push or deploy without user authorization.
