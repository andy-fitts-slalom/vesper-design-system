# Component and behavior contracts

## Foundations

Use `--vs-*` semantic tokens. Source primitive palette, themes, spacing/type and layout values are in `src/tokens.json`; generated JS and CSS agree. Themes are `paper`, `light`, `dark`. Modes are `operations`, `editorial`, `mobile`. Set both on `<html>` so dialogs teleported to body inherit the same theme. Modes do not silently change theme. Breakpoint values (480, 700, 1100) are also exported for JS; CSS media queries use the corresponding fixed widths because native custom properties cannot be used as media-query thresholds.

Spacing: 4/8/12/16/20/24/32/40/48/64/80/96px. Default targets: 44px; mobile/coarse pointer: 48px. A 36px compact token exists for non-touch desktop toolbars with sufficient spacing; use it only after inspecting actual keyboard and pointer usability. Informational badges are not controls. Fields maintain 16px input text.

Hover styling is limited to fine pointers that support hover. Pointer press has an immediate 0.97 scale response; keyboard focus disables transition, and reduced motion removes the press transform. Do not animate keyboard-driven filtering, tabbing or queue updates.

Base control states: resting, hover, keyboard focus, pressed/selected, disabled, busy and error where meaningful. Selected state has aria-pressed/current or native selection semantics. Disabled controls use native `disabled`, with an adjacent explanation when the action is central. Never use opacity alone for readable disabled reasons. Busy buttons retain their meaningful text and set aria-busy; application code guards reentry and announces completion.

## Implemented Vue API

| Export | Props / slots | Responsibilities |
| --- | --- | --- |
| `VesperBrand` | product?, href? | Decorative mark + company words. Optional anchor. Wrap in RouterLink without href for client routing; never nest links. |
| `VesperButton` | variant = primary; type = button; disabled?; busy?; default slot | Native button; forwards attributes and event listeners. Use a styled native anchor for navigation. Icon-only actions require aria-label. |
| `VesperBadge` | tone = neutral; default slot | Tone: neutral/success/warning/danger/info. Visible status text required. No live-region role by default. |
| `VesperNotice` | title; tone = info; announcement = off/polite/assertive; default + actions slots | Static callout by default. Use polite for action results, assertive for immediate blocking failure. Keep persistent recovery visible. |
| `VesperMetric` | label; value; note | Definition-list metric + explicit scope/unit note. Pass formatted strings for percentages; pass “Unavailable” for absent data. No built-in computation or delta. |
| `VesperEmpty` | title; description; default slot | Explanatory empty state + app-supplied recovery buttons. No fake illustrations. |
| `VesperField` | label; id?; hint?; error?; required?; scoped slot | Generates label and hint/error IDs. Slot gives id, describedby, invalid, required; consumer MUST bind all to the actual input/select/textarea. Does not own values or validation. |

```vue
<VesperField label="Reason" hint="Saved only in this browser" :error="error" required
  v-slot="{ id, describedby, invalid, required }">
  <textarea :id="id" class="vs-input" v-model="reason"
    :aria-describedby="describedby" :aria-invalid="invalid" :required="required" />
</VesperField>
```

Prefer framework-native fields and overlays when their existing focus and semantics are already correct. Do not wrap a Vuetify field in a second competing label.

## App-owned recipes

**Navigation:** `.vs-tabs` styles ordinary page links. Use RouterLink for P303 and real chapter anchors for P302. Do not add role=tab/tablist unless implementing the complete arrow-key tab interaction. Story section headings need scroll offsets under sticky navigation.

**Tables and responsive queues:** `.vs-table-region` holds `.vs-table` with a caption and scoped headers. If it scrolls, provide a visible hint, region label, focusability and focus outline. At phone sizes P301 retains its working stacked presentation; avoid duplicate interactive desktop/mobile copies in the accessibility tree. Content height is natural, never a fixed clipped row.

**Cards:** link the actual title or full card where there are no nested controls. `.vs-surface` is only a visual container. Preserve metadata, status and recovery at narrow widths; do not truncate evidence necessary for a decision.

**Modal evidence:** P301 keeps VDialog, P302 keeps native dialog.showModal(). Provide an accessible title, close button, Escape, contained focus and return focus to the opener. `.vs-dialog` supplies styling only; it does not implement a modal. Use a full-width presentation at phone sizes with body scrolling contained by the framework/native dialog. Routed P303 detail is a page, not a modal.

**Confirmation:** preserve cancel, explicit affected-data copy and a specific confirm label. Resetting stored state requires the existing confirmation. Reversible P302 story selection reset may remain immediate. Do not turn primary styling alone into permission to perform a domain action.

**Feedback:** maintain one live region per result. Copy success and saved-local request are polite; actual storage failure may be assertive. Render static restrictions as ordinary content. Keep a dismiss action where present. Do not place disappearing snackbars over the phone copy action.

**Exact wording:** `.vs-quote` preserves whitespace and uses readable text. The canonical data value is the copy source, never DOM innerText. The manual field is readonly and appears only for eligible wording after clipboard failure. A “Ready” badge represents the full eligibility result for the current audience and region, not merely `status === approved`.

**Sticky action:** `.vs-action-bar` belongs inside the active Ionic scroll container, includes bottom safe-area padding and must not obscure the final content or focused fields. Test virtual-keyboard behavior on a physical phone separately; desktop browser emulation cannot establish that.

**Timeline and metadata:** use ordered lists for P301 activity and definition lists for approval metadata. Keep visible actors, dates and local-only context. No shared domain component is supplied because these records have different meanings.

## Status translation

Keep a project-local label/tone map; do not embed domain rules into the package.

| Domain state | Tone | Distinguishing text |
| --- | --- | --- |
| Critical / overdue | danger | Critical / 1h overdue, with the actual reason nearby |
| High / unassigned / needs review | warning | High / Unassigned / Acknowledged; ownership remains independent |
| Normal / new | neutral or info | Normal / New |
| Resolved | success | Resolved; retain record and reopen action |
| Message included | info or neutral | Included, with numerator and campaign context |
| Message absent | neutral | Not included; never automatically an error |
| Rate unavailable | neutral | Unavailable · no priority placements |
| Eligible statement | success | Ready for this use |
| Draft / future / restricted | warning | Draft · not approved / Not yet effective / Not for this use |
| Expired / withdrawn | danger | Expired / Withdrawn |
| Replaced | neutral | Replaced, with eligible replacement link |
| Saved request | info | Saved locally · demo; never “Sent” |

## Charts and evidence

Use `vesperChartStyle(theme)` for colors, axes, text and tooltip styling. Series identity belongs to the application. P302 maps signal→0, frame→1, folio→2 in both comparisons; selection underlines or outlines that campaign while preserving every comparison. Pair color with names and values. Lines use provided dash/symbol options if multiple series share a plot; accessible text/table remains required.

P301 uses one action-colored series for each supporting chart. Chart labels use at least 12px effective display size; SVG viewBox scaling must be considered on phone widths. Axes state units and the time window; grid lines remain subordinate. Keep null separate from a valid observed zero. Tooltips supplement visible values/text; essential data never depends on hover. Reduced motion disables transitions, not explanatory content. A chart adapter changes presentation only: it must not recalculate counts, denominators or eligibility.

## Verification checklist

Check keyboard-only navigation, tab order, focus visibility/return, native disabled semantics, labels/error linkage, long content, 320px/390px phones, 768px, 1440px, 200% zoom, reduced motion and empty/error/blocked states. Contrast tests in this package cover specified token pairs, not arbitrary app compositions. Run app accessibility/browser suites after adoption. Automated checks do not certify complete accessibility, screen-reader behavior or physical-phone keyboard/safe-area behavior.
