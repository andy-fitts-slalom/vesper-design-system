# Local design guidance applied

The user requested use of applicable skills from `/Users/mfittand/Projects/agent-skills/skills` during authoring. The UI Skills router favored the available local guidance; no remote catalog or additional installation was required. Product Design context guidance had already grounded the work in the three existing products.

Applied sources:

- `emil-design-eng/SKILL.md`: control feedback, restrained motion, touch hover behavior, coherent defaults and interactive documentation.
- `output-html/SKILL.md`: a local visual reference with relative assets, clear purpose/date/status, navigable sections and durable Markdown decisions.

## Craft review

| Before | After | Why |
| --- | --- | --- |
| Shared buttons had hover feedback only | Immediate pointer press scale, without keyboard animation | Confirm input without delaying routine work |
| Hover styles could persist after touch | Hover styling gated to hover-capable fine pointers | Avoid a misleading selected appearance on phones |
| Reference anchors used smooth scrolling | Immediate anchor navigation | Keep keyboard wayfinding predictable and avoid unnecessary motion |
| Some reference labels used 10–11px | Labels raised to 12px | Align the visual reference with the readability contract |
| Branding decisions could live in the visual reference alone | Brand, components, inventory and migration decisions recorded in Markdown | Preserve an editable, durable source for future project refactors |
| An external sibling import would couple deployments | A versioned, locally vendored npm release | Every project can install from its own checkout |

Version 2 introduces an original V-and-star SVG mark and the Asteroid City-inspired palette while retaining locally served, licensed typefaces. No additional animation library, spring gesture system, glass surface treatment or unrelated native-app convention was introduced. These applications emphasize evidence and frequent task completion.

The reference is kept under `preview/` as runnable package documentation. Its root README is the durable wrapper and links the full locally packaged artifact. Fonts, mark, CSS and JavaScript are local; no CDN, telemetry or external font dependency is used. Nothing is saved to the personal vault or agent memory.
