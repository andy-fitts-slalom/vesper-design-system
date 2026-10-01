# Cross-project UI inventory

Inspected September 30, 2026: each project's AGENTS.md, BRIEF.md, README, continuation notes, entrypoints, styles, Vue templates, chart components, behavior code and test names. Checked existing desktop screenshots for P301/P302 and the P303 phone library screenshot. These screenshots are repository evidence, not a fresh live audit of the applications.

## Source map

| Project | Principal UI / styling / behavior sources |
| --- | --- |
| P301 | `src/App.vue`, `src/style.css`, `src/main.ts`, `src/components/SignalChart.vue`, `src/icons.ts`, `src/domain.ts`, `tests/domain.test.ts`, `tests/triage.spec.ts` |
| P302 | `src/App.vue`, `src/style.css`, `src/main.ts`, `src/components/VolumeChart.vue`, `src/data/metrics.ts`, `tests/metrics.test.ts`, `tests/story.spec.ts` |
| P303 | `src/Workspace.vue`, `src/App.vue`, `src/style.css`, `src/main.ts`, `src/state.ts`, `src/domain/eligibility.ts`, `tests/eligibility.test.ts`, `tests/browser.spec.ts` |

Paths in this inventory are relative to the named project. Business data is deliberately not copied into this package.

## Coverage matrix

“CSS recipe” means shared styling with behavior/markup owned by the application. “Native” means retain the existing framework/HTML behavior. Do not assume every row ships as a Vue component.

| Element | P301 | P302 | P303 | Shared implementation / contract |
| --- | --- | --- | --- | --- |
| Company mark and masthead | waveform + parent text | M + parent text | quote + product text | `VesperBrand`; established M asset, shared lockup |
| Product title and intro | queue title/dek | editorial hero/dek | library/detail headline | `.vs-title`, `.vs-display`, `.vs-prose` |
| Fictional / snapshot label | fixed timestamp, local workspace | invented dataset/window | demo info, intended-use disclosure | eyebrow / badge; app supplies precise copy |
| Skip link / main landmark | queue focus | story anchor | per-page IDs | `.vs-skip`, native landmarks |
| Primary / secondary / quiet / destructive actions | review, save, reset, close | toggle, download, reset | copy, request, reset | `VesperButton` or equivalent Vuetify variants |
| Navigation | queue/detail context | four chapter anchors | library / requests / demo | `.vs-tabs`; real anchors/RouterLink, no fake tab roles |
| Filters and labeled selectors | brand, region, severity, status | campaign, evidence campaign | audience, region, topic | `VesperField`, `.vs-input`; Vuetify VSelect remains native |
| Search | absent | evidence query | statement text/topic | labeled search input; no search feature added to P301 |
| Selected scope and clear/reset | filter caption | selected campaign note | intended-use panel, result counts | surface, text and polite announcements |
| Multi-select status selector | status array | — | — | native Vuetify semantics, selected count + clear action |
| Segmented choice | — | published / distinct | — | `.vs-segmented`, buttons with aria-pressed |
| KPI / metric cards | four distinct/scoped measures | rates and numerators | ready / total count | `VesperMetric` or CSS recipe; explicit unit/time/denominator |
| Issue table / small-screen cards | primary work queue | — | — | `.vs-table`, operations recipe; keep native table semantics on desktop |
| Campaign comparison table | — | end-of-story summary | — | labeled scroll region + caption/headers |
| Linked content cards | — | campaign introductions | statement / request cards | `.vs-surface` with one genuine link, no nested actions in links |
| Status and severity badges | critical/high/normal, new/ack/resolved | included/not included, unavailable | ready/draft/withdrawn/expired/replaced/restricted | `VesperBadge`; independent axes and visible text |
| Deadline and overdue | relative age, due now, overdue | — | effective/expiry metadata | semantic warning/danger; app keeps clock logic |
| Owner / avatar | initials, unassigned, picker | — | approver metadata | text/avatar recipe; no shared identity directory |
| Callout / explanation | urgent/unassigned, severity reasoning | marginal notes, caveats | approval/use restrictions | `VesperNotice`, no announcement for static text |
| Hourly line / brand bars | ECharts canvas | — | — | `vesperChartStyle('dark')`; text equivalents remain |
| Volume bars | — | D3 scales + Vue SVG | — | chart roles and stable series mapping |
| Inclusion strip / rates | — | numerator/denominator marks | — | chart roles; visible labels and zero/null distinction |
| Highlighted selection | selected issue | campaign outline/underline | active page/version | outline/weight + aria state; never color alone |
| Evidence dialog / issue detail | Vuetify side dialog/full phone | native HTML dialog | routed detail | native container + `.vs-dialog` skin / detail recipe |
| Evidence groups and excerpts | original + syndicated, out of scope | article, priority and message labels | exact approved wording | structured app content; shared labels, quote, surfaces |
| Details / disclosure | supporting groups | syndication, methodology | version history | native details or existing markup; no new accordion library |
| Ownership / status controls | assignment, ack, resolve/reopen, undo | — | — | button recipes; domain transitions stay in P301 |
| Activity timeline | local ordered history | — | local request history | list + metadata recipe; no new event bus |
| Exact statement block | — | evidence quotation | canonical copy source | `.vs-quote`; never mutate text or whitespace for clipboard |
| Approval metadata / version history | — | — | scope, dates, status, replacements | definition list + independent status badges |
| Sticky copy action / safe area | — | — | disabled/enabled copy bar | `.vs-action-bar`; active IonContent scroll container |
| Textarea and validation | — | — | update request, read-only manual copy | `VesperField`, `.vs-input`, explicit error connection |
| Clipboard fallback | — | — | exact read-only wording selected | app behavior, info notice; no fallback for ineligible wording |
| Data download and failure | — | JSON export/retry | — | real button + alert; keep file data unchanged |
| Empty results and recovery | empty filter combination | empty evidence search | empty library/requests, missing route | `VesperEmpty`; specific recovery action |
| Unavailable data | — | null denominator demonstration | unavailable wording | neutral explanatory state; never show false zero/approval |
| Toast / status feedback | snackbar, dismiss | selection/download feedback | copy/request notices | existing live region or `VesperNotice`; one announcement |
| Storage/corrupt-state recovery | retry, seed fallback | — | session-only requests | persistent notice with a specific next action |
| Reset confirmation | Vuetify dialog | reversible story reset | inline confirmation | preserve existing safety and focus model |
| Reduced motion / print | reduced motion | reduced motion and print reading | reduced motion / safe area | token policy + app-specific print and route behavior |

## Design changes by project

P301 currently uses a system/Inter stack and blue-black dark grays. Move to hosted DM Sans and Vesper dark tokens; retain a queue-first dense layout and the existing Vuetify components. The ECharts colors and typography in `SignalChart.vue` require explicit adapter wiring, because canvas does not inherit CSS variables.

P302 already has the selected type families and a paper/green palette. Standardize the masthead, semantic control states, focus, token names and chart roles while retaining the editorial composition. Replace duplicated campaign hex colors in both CSS and `VolumeChart.vue` from one local ID mapping to shared categorical tokens. Raise tiny labels for readability.

P303 already has the chosen type families, green/cream palette and generous controls. Standardize the parent branding, approval/status colors, field errors, cards and safe-area action pattern. Preserve Ionic page caching and focus handling. The existing scope filters and copy eligibility are inseparable from safe use, so styling must never imply an ineligible version is ready.

## Boundaries

No authentication screens, billing forms, notifications inbox, date picker, skeleton feed, live connection badge, dark-mode preference control or new analytics feature was found or is required. The package supports themes without adding a theme switch to each product. The reference site's switch exists to inspect tokens only. Loading/busy styling is available for actual asynchronous actions; do not fabricate server activity.
