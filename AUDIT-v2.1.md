# Unera Admin Portal design system: v2.1 audit and changes

28 Oct 2026. Audited from the 26 Oct build.

## What I checked

The tokens, the 10 components, the guideline cards, the portal and the shared DataTable. For each one: token references, hard-coded colours, text contrast (WCAG 2.2 AA), and whether it renders when served on its own.

## What I found

| # | Finding | Size |
|---|---|---|
| 1 | The component cards needed `_ds_bundle.js`, which the export didn't include. Both cards were blank outside Claude Design | 2 cards |
| 2 | `--text-tertiary` (`#8a979b`) was 2.7:1 on the canvas and 3.0:1 on white. It's used for timestamps and table meta, text operators read all day | 6 pairs |
| 3 | Money-down (`#ab5770`) was 4.3:1 on the canvas | 3 pairs |
| 4 | The portal hard-coded most colours instead of using its own tokens | 844 uses |
| 5 | DataTable doesn't load the tokens at all | 57 hex |

## What changed in v2.1

- **Bundle rebuilt** from `components/` with `tools/bundle.mjs`. Both cards render.
- **Tertiary text** changed to `#636f73` (4.6:1 on the canvas). It now differs from secondary text by size and weight more than by colour. `--n-500` keeps the old grey for icons and rules.
- **Money-down** changed to `#a5536b`.
- **Colours point at tokens.** 559 hex values in the portal became `var(--token)`. Text written in the old tertiary grey or old money-down red now follows the fixed tokens. Screenshots of the portal and cards match v2.0 in layout.

## Still open (v3)

- Icons drawn in `--n-500` on the canvas are 2.7:1, under the 3:1 needed for meaningful icons. They need `--n-600`, or an aria label plus a darker stroke.
- Link DataTable to `styles.css`.
- `UNERA-Admin-Portal-offline.html` is the old single-file export. Rebuild it from the v2.1 portal before sharing.
