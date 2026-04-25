# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Serving the sites locally

Two separate static sites — serve them on different ports:

```bash
# Curriculum content site
cd website/content && python3 -m http.server 8081
# open http://localhost:8081

# Exercise / practice site
cd website/exercises && python3 -m http.server 8082
# open http://localhost:8082
```

Both sites work fully offline — no build step, no bundler, no dependencies.

## Project structure

```
s1math/
├── docs/                       # Source PDF (European Schools curriculum)
├── syllabus/                   # Extracted markdown syllabi for S1, S2, S3
├── api/                        # (Phase 3) Python Lambda + migration scripts
└── website/
    ├── content/                # Curriculum site → deploys to S3 bucket A
    │   ├── styles.css
    │   ├── index.html          # Dashboard
    │   ├── numbers.html        # Topic pages
    │   ├── algebra.html
    │   ├── geometry.html
    │   ├── set-theory.html
    │   ├── learning-objectives.html
    │   ├── assessment.html
    │   └── resources.html
    └── exercises/              # Practice site → deploys to S3 bucket B
        ├── styles.css
        ├── index.html          # Topic selector landing page
        ├── exercises-*.html    # One per topic
        ├── js/
        │   └── worksheet-engine.js   # Card-flip quiz engine
        └── data/
            └── questions-*.js        # Question banks (401 questions total)
```

Cross-site links use relative paths (`../content/` and `../exercises/`) for local dev; in production these become full S3/CloudFront URLs.

## CSS architecture

All styling lives in `styles.css`. Per-page accent colours are set via CSS custom properties in a one-liner `<style>` tag inside each page's `<head>`:

```html
<style>:root { --accent: #ff6b6b; --accent-subtle: #fff5f5; --accent-subtle-2: #ffe8e8; --accent-border-light: #ff9999; --accent-bg: #f9f9f9; }</style>
```

Accent colours by topic:
| Topic | `--accent` |
|-------|-----------|
| Numbers | `#ff6b6b` |
| Algebra | `#f093fb` |
| Geometry | `#4facfe` |
| Set Theory | `#43e97b` |
| Assessment / Resources / Learning Objectives | `#667eea` (default in `:root`) |

Component classes that use `var(--accent)`: `.page-intro`, `.content-section h3`, `.subsection`, `.example-box`, `.context-box`, `.grid-item`, and all `.ws-*` worksheet classes.

## Nav

Every HTML page shares the same nav block (no templating). It includes:
- A hamburger button (`#nav-toggle`, `.nav-hamburger`) visible only on mobile (`≤768px`)
- A `<ul>` that gains class `nav-open` when the hamburger is clicked
- The "Exercises ▾" `<li class="nav-dropdown">` which uses **CSS `:hover`** on desktop and a JS **tap toggle** (`.dropdown-open`) on mobile (`window.innerWidth <= 768`)

The mobile nav JS lives in an inline `<script>` before `</body>` in every HTML file. When adding or modifying nav items, update **all 12 HTML files** manually (no include system).

## Exercise page architecture

Questions live in `exercises/data/questions-{topic}.js` as a global `WS_QUESTIONS` array. The shared quiz engine is `exercises/js/worksheet-engine.js`. Exercise pages load both scripts and call `init(WS_QUESTIONS, topicSlug)` on `DOMContentLoaded`.

Question object shape:
```js
{ id, part, type: 'mcq'|'fill', text, options[], correct, explanation }  // MCQ
{ id, part, type: 'fill', text, answer[], explanation }                   // fill-in
```

Engine public API: `init(questions, topicSlug)`, `goNext()`, `goPrev()`, `resetWorksheet()`. Internal state is `wsState = { questions, index, answers, selectedMCQ, fillInputs, topicSlug }`. CSS for the card UI is in `exercises/styles.css` under `/* ===== CARD-FLIP EXERCISE UI ===== */`.

The card-flip UI shows one question at a time with a sticky progress header (Q n of N + fill bar) and a sticky bottom nav bar (← Prev | score | Next →). Answers are recorded in `wsState.answers` and the card re-renders to show feedback in place.

## Adding a new exercise page

1. Copy `exercises/exercises-numbers.html` as a template.
2. Update `<title>`, header text, and the `:root` accent variables.
3. Create `exercises/data/questions-{topic}.js` with the `WS_QUESTIONS` array.
4. Update `init(WS_QUESTIONS, 'topic-slug')` to pass the correct slug (matches the content page filename, e.g. `'set-theory'`).
5. Add a link to the new page in `exercises/index.html` and in the nav `<ul>` of all other exercise pages.

## Curriculum source

`syllabus/S1_Mathematics_Syllabus.md` is the authoritative reference for what content belongs in Numbers, Algebra, Geometry, and Set Theory for S1. S2 and S3 syllabi are available for future expansion.

---

## Syllabus alignment

All four topic pages have been audited and aligned strictly to `syllabus/S1_Mathematics_Syllabus.md`. Do not add content that is not explicitly listed in the S1 syllabus for each topic. Key scope boundaries:

- **Numbers**: naturals, integers, absolute value, number line, coordinate plane (integer coords only), ordering/transitivity, fractions as ratios, equivalent fractions, simplify, terminating decimal conversion, ordering fractions/decimals, BODMAS, integer/decimal arithmetic, divisibility rules (2/3/5/10), prime factorisation, HCF/LCM.
- **Algebra**: arithmetic sequences only (no geometric), pictorial sequences, nth term T(n), tables of values, plotting (n, T(n)), collecting like terms, solving linear equations up to ax+b = cx+d. No quadratics, no functions, no factoring/expanding.
- **Geometry**: 3D shapes (views, classification, nets), 2D shapes (triangles/quadrilaterals/regular polygons to decagon/circle), triangle construction (SSS/SAS/SSA/ASA), compass directions, perimeter/area of squares and rectangles only, metric/imperial units, volume of cuboid by counting unit cubes. No transformations, no congruence/similarity proofs, no coordinate geometry.
- **Set Theory**: sets, ∈/∉/∩/∪/⊂, universal set, empty set, complement, Venn diagrams. No set difference, no Cartesian product, no relations/functions, no logic/proofs.

## Project status

All S1 topic pages (`numbers.html`, `algebra.html`, `geometry.html`, `set-theory.html`) are complete and syllabus-aligned.

`exercises-numbers.html` is complete: 100 questions (80 MCQ, 20 fill-in) across 6 parts — Natural Numbers & Integers (18), Integers & Number Line (14), Fractions & Decimals (18), Operations & BODMAS (14), Primes/Factors/Divisibility (20), Real-World Applications (16).

`exercises-algebra.html`, `exercises-geometry.html`, and `exercises-set-theory.html` are stubs (Coming Soon) — each needs ~50 questions following the exercise page pattern above, scoped strictly to the S1 syllabus boundaries listed above.

S2 and S3 syllabi are available in `syllabus/` for future expansion.
