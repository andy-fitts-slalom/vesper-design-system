# Integration and migration sequence

## A portable shared package

The three applications are independent Git repositories and Vercel projects. Install the checked-in release tarball locally, then keep it in each repository's `vendor/` directory. npm records `file:vendor/vesper-ui-3.0.0.tgz` and integrity in the lockfile. A clean clone can install without a parent folder or private registry. Regenerate a new numbered release when shared source changes; do not modify installed node_modules.

The package ships Vue SFC/TypeScript sources for the projects' existing Vite Vue plugin to compile. It is not a precompiled UMD/browser bundle. All three projects already have Vue 3.5 and Vite Vue support. The token/CSS layer has no framework runtime dependency. No backend, network fonts, analytics or remote asset request is introduced.

## Order of work

1. Record Git status and baseline checks in the target project; preserve unrelated changes.
2. Read its brief, handoff and the inventory. Capture existing key screens before changing styles.
3. Install the vendored tarball and add fonts/tokens after framework CSS and before app styles.
4. Set theme/mode on html, add vs-root on body, update global body background and font explicitly.
5. Standardize the parent masthead, then typography/spacing/surfaces, then controls, status and overlays, then charts.
6. Replace hard-coded presentation values with tokens in application CSS. Retain application layout selectors; remove conflicting rules after equivalent coverage exists.
7. Adapt chart canvas/SVG values via the JS export. Preserve library lifecycle, resize/disposal and keyboard alternatives.
8. Check focus, empty/error/recovery, all supported routes and mobile reading. Update exact screenshots and handoff evidence.
9. Run the existing domain and browser checks; do not relax assertions to accommodate behavior regressions.

## Watchlight: Vuetify + ECharts

```ts
import 'vuetify/styles'
import '@vesper/ui/fonts.css'
import '@vesper/ui/styles.css'
import './style.css'
import { vesperVuetifyTheme, vesperVuetifyDefaults } from '@vesper/ui/vuetify'
// Merge into existing createVuetify; preserve registered components, icons, directives.
const theme = {
  defaultTheme: 'vesper',
  themes: { vesper: vesperVuetifyTheme('dark') }
}
const defaults = vesperVuetifyDefaults
```

Set `data-vs-theme="dark" data-vs-mode="operations"` on html. Keep `.v-application` font family synchronized with `var(--vs-font-ui)`; replace old focus rules and make sure VSelect focused borders/outline remain visible. Defaults are a starting config, not a wrapper; existing explicit component props may override them. Remove blanket hideDetails for fields that need error/helper text. In compact icon actions ensure 44px targets, 48px on phone.

```ts
import { tokens } from '@vesper/ui'
import { vesperChartStyle } from '@vesper/ui/charts'
const chartStyle = vesperChartStyle('dark')
const seriesColor = tokens.themes.dark.action
// Apply textStyle.fontFamily, tooltip, axisLabel.color/fontSize,
// splitLine.lineStyle.color and series itemStyle/lineStyle/areaStyle.
```

ECharts does not consume CSS var strings as reliable canvas colors; use resolved JS values. Preserve `animation:false`, ResizeObserver cleanup, legends/text summaries and selection computations. If theme switching is ever added, redraw charts and synchronize Vuetify theme explicitly; the current product remains dark by default.

## Frame: semantic HTML + D3/Vue SVG

Set `data-vs-theme="paper" data-vs-mode="editorial"` on html. Replace existing @fontsource imports with packaged fonts to avoid duplicates. Keep all four sections and print rules. Use `.vs-display` for large editorial moments and native layout styles with semantic variables elsewhere.

```ts
import { vesperChartStyle } from '@vesper/ui/charts'
const chartStyle = vesperChartStyle('paper')
const campaignColors: Record<string, string> = {
  signal: chartStyle.colors[0]!, frame: chartStyle.colors[1]!, folio: chartStyle.colors[2]!
}
```

Use one project-local mapping in both `VolumeChart.vue` and story rate/highlight styling. Keep D3 scales and Vue owning SVG. Each bar retains a campaign name and number; selection does not remove other bars. Use named controls, aria-pressed and a real native dialog. Do not create a shared campaign data module between P301 and P302: similar names do not imply shared records.

## Verbatim: Ionic Vue

```ts
import '@ionic/vue/css/core.css'
import '@vesper/ui/fonts.css'
import '@vesper/ui/styles.css'
import '@vesper/ui/ionic.css'
import './style.css'
```

Set `data-vs-theme="light" data-vs-mode="mobile"` on html. Remove duplicated font imports and old :root Ionic color values. Generated Ionic colors include RGB, contrast, tint and shade values. Preserve IonicVue setup, router, IonApp, IonRouterOutlet, IonPage, IonContent and view-entry focus management. Do not introduce a second scrolling page shell or replace the Ionic router with a plain SPA wrapper.

Use shared primitives for native controls inside the current template where appropriate. Shadow-DOM Ionic controls require their documented CSS properties/parts if introduced later; generic descendant selectors do not penetrate shadow roots. The current app mostly uses native HTML controls within the Ionic shell.

## Styling example for root and framework overlay

```css
body { margin: 0; background: var(--vs-bg); color: var(--vs-text); font-family: var(--vs-font-ui); }
.v-application { font-family: var(--vs-font-ui); }
/* Use local selectors for product layout; shared CSS remains opt-in. */
```

Set body class="vs-root" in index.html. A component rendered outside a local app subtree still receives foundation and focus styles because body contains it. Test framework overlays rather than assuming CSS covers their inner selectors.

## Assets and notices

Import `@vesper/ui/brand/vesper-mark.svg?url` for custom logo placement. For a favicon, copy the shipped SVG into the project's public directory with provenance documented; update the index.html link. Keep shipped font license files in the app's public licenses path as its existing notice process expects. Remove an old font dependency only after confirming nothing else imports it. Review P303's generated runtime-license notice if dependencies change.
