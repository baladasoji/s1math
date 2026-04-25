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
├── api/                        # Python Lambda + migration scripts
│   ├── src/handler.py          # Lambda handler
│   ├── migrate_questions.py    # One-time DynamoDB seed script
│   ├── pyproject.toml          # uv-managed deps (boto3)
│   └── uv.lock
├── template.yaml               # AWS SAM template (DynamoDB + Lambda + API GW)
├── samconfig.toml              # SAM deploy defaults (stack: EuropeanMath, eu-north-1)
└── website/
    ├── content/                # Curriculum site → s3://s1math.dasoji.net
    │   ├── styles.css
    │   ├── index.html          # Dashboard
    │   └── *.html              # Topic + support pages
    └── exercises/              # Practice site → s3://exercises.s1math.dasoji.net
        ├── styles.css
        ├── index.html          # Topic selector landing page
        ├── exercises-*.html    # One per topic
        ├── js/
        │   └── worksheet-engine.js   # Card-flip quiz engine
        └── data/
            └── questions-*.js        # Local fallback question banks
```

Cross-site links use relative paths (`../content/` and `../exercises/`) for local dev; in production these become full S3 URLs.

## API

Live endpoint: `https://9kzpj7v8g6.execute-api.eu-north-1.amazonaws.com/prod`

Route: `GET /questions/{topic}` — returns all questions for a topic as JSON.  
Optional query params: `?subtopic=integers` and/or `?difficulty=foundation`.

The exercise site fetches from this API on page load (`loadAndInit` in `worksheet-engine.js`). The local `data/questions-*.js` files are a fallback if the API is unreachable.

**To redeploy the API** after changing `template.yaml` or `api/src/handler.py`:
```bash
sam build && sam deploy
```

**To re-seed DynamoDB** after changing question files:
```bash
uv run --project api python3 api/migrate_questions.py --region eu-north-1
# dry-run first: add --dry-run
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

## Nav

Both sites share the same hamburger-toggle pattern — no templating, so nav changes require editing every HTML file manually.

**Content site nav** (8 files): Dashboard | Numbers | Algebra | Geometry | Set Theory | Competences | Assessment | Resources | Practice Exercises →  
**Exercise site nav** (5 files): ← Back to Content | 🔢 Numbers | 📐 Algebra | 🎨 Geometry | ⚡ Set Theory

The hamburger button (`#nav-toggle`, `.nav-hamburger`) is visible only on mobile (≤768px). Clicking it toggles `.nav-open` on the `<ul>`. Mobile nav JS is inlined before `</body>` in every HTML file.

## Exercise page architecture

Questions are fetched at runtime from the API and stored in DynamoDB. The local `data/questions-*.js` files mirror DynamoDB and serve as an offline fallback only — DynamoDB is the source of truth.

**Question object shape (DynamoDB / API / JS files):**
```js
// MCQ
{
    topic, questionId,          // PK + SK  e.g. "numbers", "S1#numbers#001"
    grade, subtopic, part, partOrder, difficulty,
    type: 'mcq',
    text,
    options: [{ key: 'A', text: '...' }, ...],   // always A–D
    correctKey: 'C',            // key of the correct option
    explanation,
}

// Fill-in
{
    topic, questionId, grade, subtopic, part, partOrder, difficulty,
    type: 'fill',
    text,
    acceptedAnswers: ['12', 'twelve'],   // any match is correct (normalised)
    explanation,
}
```

**DynamoDB table:** `s1math-questions` — PK `topic`, SK `questionId` (`S1#topic#NNN`).  
**GSIs:** `grade-topic-index` (all questions for a grade), `subtopic-difficulty-index` (by concept + difficulty).

**Engine public API** (`exercises/js/worksheet-engine.js`):
- `loadAndInit(topicSlug)` — fetches from API, falls back to `WS_QUESTIONS` global, calls `init()`
- `init(questions, topicSlug)` — sets state, renders first card
- `goNext()`, `goPrev()`, `resetWorksheet()`

Internal state: `wsState = { questions, index, answers, selectedMCQ, fillInputs, topicSlug }`.  
CSS for the card UI is in `exercises/styles.css` under `/* ===== CARD-FLIP EXERCISE UI ===== */`.

## Adding a new exercise page

1. Copy `exercises/exercises-numbers.html` as a template.
2. Update `<title>`, header text, and the `:root` accent variables.
3. Create `exercises/data/questions-{topic}.js` with the `WS_QUESTIONS` array using the schema above.
4. Update `loadAndInit('topic-slug')` to pass the correct slug (matches the content page filename, e.g. `'set-theory'`).
5. Add a link to the new page in `exercises/index.html` and in the nav `<ul>` of all other exercise pages.
6. Run `migrate_questions.py` to seed the new questions into DynamoDB.

## Curriculum source

`syllabus/S1_Mathematics_Syllabus.md` is the authoritative reference for what content belongs in Numbers, Algebra, Geometry, and Set Theory for S1. S2 and S3 syllabi are available for future expansion.

---

## Syllabus alignment

All four topic pages have been audited and aligned strictly to `syllabus/S1_Mathematics_Syllabus.md`. Do not add content that is not explicitly listed in the S1 syllabus for each topic. Key scope boundaries:

- **Numbers**: naturals, integers, absolute value, number line, coordinate plane (integer coords only), ordering/transitivity, fractions as ratios, equivalent fractions, simplify, terminating decimal conversion, ordering fractions/decimals, BODMAS, integer/decimal arithmetic, divisibility rules (2/3/5/10), prime factorisation, HCF/LCM.
- **Algebra**: arithmetic sequences only (no geometric), pictorial sequences, nth term T(n), tables of values, plotting (n, T(n)), collecting like terms, solving linear equations up to ax+b = cx+d. No quadratics, no functions, no factoring/expanding.
- **Geometry**: 3D shapes (views, classification, nets), 2D shapes (triangles/quadrilaterals/regular polygons to decagon/circle), triangle construction (SSS/SAS/SSA/ASA), compass directions, perimeter/area of squares and rectangles only, metric/imperial units, volume of cuboid by counting unit cubes. No transformations, no congruence/similarity proofs, no coordinate geometry.
- **Set Theory**: sets, ∈/∉/∩/∪/⊂, universal set, empty set, complement, Venn diagrams. No set difference, no Cartesian product, no relations/functions, no logic/proofs.

## Roadmap

### ✅ Phase 1 — Repo split (complete)
Reorganised `website/` into `website/content/` (curriculum site) and `website/exercises/` (practice site), each independently deployable to its own S3 bucket. Content nav replaced the Exercises dropdown with a single "Practice Exercises →" link. Exercise nav simplified to topic switcher + Back to Content. New `exercises/index.html` topic-selector landing page added.

### ✅ Phase 2 — Card-flip exercise UI (complete)
Replaced the all-on-one-page worksheet with a mobile-first card-flip engine (`exercises/js/worksheet-engine.js`). One question per screen, sticky progress header (Q n of N + fill bar), sticky bottom Prev/Next nav bar, inline feedback, summary screen on completion. Engine API: `init(questions, topicSlug)`.

### ✅ Phase 3 — AWS infrastructure (complete)
DynamoDB table `s1math-questions` (PK: `topic`, SK: `questionId`), Python Lambda, and HTTP API Gateway route `GET /questions/{topic}`. Deployed via SAM (stack: `EuropeanMath`, region: `eu-north-1`). CORS open for all origins.

### ✅ Phase 4 — Question migration (complete)
`api/migrate_questions.py` uses Node.js to evaluate the `questions-*.js` files and batch-writes all 401 questions to DynamoDB. Re-runnable — PutItem overwrites.

### ✅ Phase 5 — Wire exercises to API (complete)
`worksheet-engine.js` fetches questions from API Gateway via `loadAndInit(topicSlug)`, with fallback to local `WS_QUESTIONS` if offline. Local data script tags removed from exercise pages.

---

## Content status

All S1 topic pages (`numbers.html`, `algebra.html`, `geometry.html`, `set-theory.html`) are complete and syllabus-aligned.

`exercises-numbers.html` is complete: 101 questions (MCQ + fill-in) across 6 parts.

`exercises-algebra.html`, `exercises-geometry.html`, and `exercises-set-theory.html` have 100 questions each in DynamoDB but the question content should be reviewed for syllabus alignment and difficulty distribution.

S2 and S3 syllabi are available in `syllabus/` for future expansion.
