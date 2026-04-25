# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Serving the website

```bash
cd website && python3 -m http.server 8080
```

Open http://localhost:8080 in a browser. The site works fully offline — no build step, no bundler, no dependencies.

## Project structure

```
Math/
├── docs/                  # Source PDF (European Schools curriculum)
├── syllabus/              # Extracted markdown syllabi for S1, S2, S3
└── website/               # The static site (all deliverable files)
    ├── styles.css         # Single shared stylesheet for all pages
    ├── index.html         # Dashboard / landing page
    ├── *.html             # Topic pages (numbers, algebra, geometry, set-theory)
    ├── learning-objectives.html
    ├── assessment.html
    ├── resources.html
    └── exercises-*.html   # Interactive exercise pages (one per topic)
```

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

## Nav dropdown

The "Exercises ▾" dropdown is implemented with pure CSS (`:hover` on `.nav-dropdown`). Every HTML page must include the same dropdown `<li>` block after the Resources nav item — there is no shared template or include system.

## Exercise page pattern

Exercise pages (`exercises-*.html`) use a JS-driven quiz engine defined inline in a `<script>` tag at the bottom of each file. Questions are declared as an array of objects:

```js
{ id, part, type: 'mcq'|'fill', text, options[], correct, explanation }  // MCQ
{ id, part, type: 'fill', text, answer[], explanation }                   // fill-in
```

`renderWorksheet()` reads this array and builds the DOM. `checkMCQ()` / `checkFill()` handle answers and call `updateScoreBar()`. All state is held in the module-level `wsState` object `{ qId: boolean }`. The worksheet CSS lives in `styles.css` under the `/* ===== WORKSHEET ===== */` section.

## Adding a new exercise page

1. Copy `exercises-numbers.html` as a template.
2. Update `<title>`, header text, and the `:root` accent variables.
3. Replace the `WS_QUESTIONS` array with the new topic's questions.
4. Add the page to the dropdown `<ul class="dropdown-menu">` in **every** HTML file (all pages share the same nav block — there is no templating).

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

`exercises-numbers.html` is complete: 51 questions across 6 parts (Natural Numbers & Integers, Integers & Number Line, Fractions & Decimals, Operations & BODMAS, Primes/Factors/Divisibility, Real-World Applications).

`exercises-algebra.html`, `exercises-geometry.html`, and `exercises-set-theory.html` are stubs (Coming Soon) — each needs ~50 questions following the exercise page pattern above, scoped strictly to the S1 syllabus boundaries listed above.

S2 and S3 syllabi are available in `syllabus/` for future expansion.
