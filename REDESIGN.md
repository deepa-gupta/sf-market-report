# Market Intelligence v2

Preview locally from this branch with `python3 -m http.server 8000` and open `http://localhost:8000/index-v2.html`.

## Architecture
- site-v2.css: shared palette, typography and site navigation.
- report-v2.css: dashboard-specific layout and components.
- report-v2.js: period URL state, neighborhood search/ranking, sparklines and print behavior.
- *-v2.html: isolated previews; original production pages remain unchanged.

## Generator integration
The repository contains generated HTML but no generator source. In the upstream generator, move shared navigation and stylesheet links into its page templates; preserve the SLICE_DATA, activeSlice and SLICE_GRANULARITY contracts or update the dashboard adapter. Emit the neighborhood table and its actual reporting period. Generate fresh HTML on each data refresh. Do not copy a stale snapshot into production.

## Verification checklist
- Open every preview at 375, 768 and 1440 px.
- Check every period, URL reload, neighborhood tab, search, ranking, keyboard sort and print.
- Verify Chart.js loads, no console errors, no overflow and visible keyboard focus.
- Reconcile commentary figures with the source data and validate comparison windows.
- Confirm buyer/seller guide dates before publishing.
- Comp search remains the original page (large embedded dataset).
- Full property/price filters require appropriately granular source data; maps require verified neighborhood geometry.
- Run automated accessibility checks and manual keyboard/screen reader checks before deployment.

No browser verification or production deployment has been performed.
