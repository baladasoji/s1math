/* ── Card-Flip Worksheet Engine ─────────────────────────────────────────────
   Call loadAndInit(topicSlug) from the page's DOMContentLoaded handler.
   Questions are fetched from the API; falls back to local WS_QUESTIONS if offline.
   ─────────────────────────────────────────────────────────────────────────── */

const API_BASE = 'https://9kzpj7v8g6.execute-api.eu-north-1.amazonaws.com/prod';

async function loadAndInit(topicSlug) {
    showLoading();
    try {
        const params   = new URLSearchParams(window.location.search);
        const subtopic = params.get('subtopic');
        let url = `${API_BASE}/questions/${topicSlug}`;
        if (subtopic) url += `?subtopic=${encodeURIComponent(subtopic)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`API returned ${res.status}`);
        const questions = await res.json();
        init(questions, topicSlug);
    } catch (err) {
        console.warn('API unavailable, falling back to local data:', err.message);
        if (typeof WS_QUESTIONS !== 'undefined' && WS_QUESTIONS.length) {
            const params   = new URLSearchParams(window.location.search);
            const subtopic = params.get('subtopic');
            const filtered = subtopic
                ? WS_QUESTIONS.filter(q => q.subtopic === subtopic)
                : WS_QUESTIONS;
            init(filtered.length ? filtered : WS_QUESTIONS, topicSlug);
        } else {
            showError();
        }
    }
}

function showLoading() {
    document.getElementById('ws-card').innerHTML =
        '<div class="ws-card ws-loading"><p>Loading questions…</p></div>';
}

function showError() {
    document.getElementById('ws-card').innerHTML =
        '<div class="ws-card ws-summary"><h3>⚠️ Could not load questions</h3>'
      + '<p>Check your connection and reload the page.</p></div>';
}

const wsState = {
    questions:    [],
    index:        0,
    answers:      {},   // { qId: true|false }
    selectedMCQ:  {},   // { qId: selectedIndex } — for re-rendering wrong highlights
    fillInputs:   {},   // { qId: rawString }     — for re-rendering fill answers
    topicSlug:    '',
};

// ── Public API ───────────────────────────────────────────────────────────────

function init(questions, topicSlug) {
    wsState.questions   = questions;
    wsState.index       = 0;
    wsState.answers     = {};
    wsState.selectedMCQ = {};
    wsState.fillInputs  = {};
    wsState.topicSlug   = topicSlug || '';
    renderCard(0);
}

function goNext() {
    const { questions, index, answers } = wsState;
    if (answers[questions[index].questionId] === undefined) return;
    if (index === questions.length - 1) { showSummary(); return; }
    wsState.index = index + 1;
    renderCard(wsState.index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goPrev() {
    if (wsState.index === 0) return;
    wsState.index--;
    renderCard(wsState.index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetWorksheet() {
    wsState.index       = 0;
    wsState.answers     = {};
    wsState.selectedMCQ = {};
    wsState.fillInputs  = {};
    renderCard(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Rendering ────────────────────────────────────────────────────────────────

function renderCard(index) {
    const { questions, answers } = wsState;
    const q      = questions[index];
    const total  = questions.length;
    const done   = answers[q.questionId] !== undefined;
    const isLast = index === total - 1;

    // Progress bar reflects how many questions are answered (not position)
    const answeredCount = Object.keys(answers).length;
    document.getElementById('ws-progress').style.width = (answeredCount / total * 100) + '%';
    document.getElementById('ws-counter').textContent  = `Q ${index + 1} of ${total}`;

    // Score
    const correct = Object.values(answers).filter(Boolean).length;
    document.getElementById('ws-score').textContent = `${correct} / ${total} correct`;

    // Nav buttons
    document.getElementById('ws-prev').disabled = index === 0;
    const nextBtn = document.getElementById('ws-next');
    nextBtn.disabled    = !done;
    nextBtn.textContent = isLast ? 'Finish ✓' : 'Next →';

    // Part label shown when the part changes
    const prevPart  = index > 0 ? questions[index - 1].part : null;
    const partLabel = prevPart !== q.part
        ? `<div class="ws-part-label">${q.part}</div>`
        : '';

    const card = document.getElementById('ws-card');
    card.innerHTML = partLabel + (q.type === 'mcq'
        ? buildMCQCard(q, done)
        : buildFillCard(q, done));

    // Re-attach event listeners after innerHTML replacement
    if (q.type === 'mcq' && !done) {
        card.querySelectorAll('.ws-option').forEach(btn => {
            btn.addEventListener('click', () => selectMCQ(q.questionId, btn.dataset.key));
        });
    } else if (q.type === 'fill' && !done) {
        const input    = document.getElementById(q.questionId + '-input');
        const checkBtn = document.getElementById(q.questionId + '-check');
        checkBtn.addEventListener('click', () => submitFill(q.questionId));
        input.addEventListener('keydown', e => { if (e.key === 'Enter') submitFill(q.questionId); });
        input.focus();
    }
}

function buildMCQCard(q, done) {
    const isCorrect = wsState.answers[q.questionId];
    const userKey   = wsState.selectedMCQ[q.questionId];
    const cardCls   = done ? (isCorrect ? 'ws-card ws-card-correct' : 'ws-card ws-card-wrong') : 'ws-card';

    const options = q.options.map(opt => {
        let cls = 'ws-option';
        if (done) {
            if (opt.key === q.correctKey)              cls += ' ws-correct';
            else if (opt.key === userKey && !isCorrect) cls += ' ws-wrong';
            cls += ' ws-option-disabled';
        }
        return `<button class="${cls}" data-key="${opt.key}" ${done ? 'disabled' : ''}>`
             + `<span class="ws-option-key">${opt.key}</span> ${opt.text}</button>`;
    }).join('');

    return `<div class="${cardCls}">
        <p class="ws-q-text">${q.text}</p>
        <div class="ws-options">${options}</div>
        ${done ? feedbackHTML(isCorrect, q.explanation) : ''}
    </div>`;
}

function buildFillCard(q, done) {
    const isCorrect = wsState.answers[q.questionId];
    const savedVal  = wsState.fillInputs[q.questionId] || '';
    const cardCls   = done ? (isCorrect ? 'ws-card ws-card-correct' : 'ws-card ws-card-wrong') : 'ws-card';
    const inputCls  = done ? (isCorrect ? 'ws-input ws-input-correct' : 'ws-input ws-input-wrong') : 'ws-input';

    return `<div class="${cardCls}">
        <p class="ws-q-text">${q.text}</p>
        <div class="ws-fill-wrap">
            <input class="${inputCls}" id="${q.questionId}-input" type="text"
                   placeholder="Your answer…"
                   value="${done ? savedVal : ''}"
                   ${done ? 'disabled' : ''}>
            <button class="ws-submit-btn" id="${q.questionId}-check" ${done ? 'disabled' : ''}>Check</button>
        </div>
        ${done ? feedbackHTML(isCorrect, q.explanation) : ''}
    </div>`;
}

function feedbackHTML(isCorrect, explanation) {
    return `<div class="ws-feedback ${isCorrect ? 'ws-feedback-correct' : 'ws-feedback-wrong'}">
        <strong>${isCorrect ? '✓ Correct!' : '✗ Not quite.'}</strong> ${explanation}
    </div>`;
}

// ── Answer handlers ──────────────────────────────────────────────────────────

function selectMCQ(questionId, selectedKey) {
    if (wsState.answers[questionId] !== undefined) return;
    const q = wsState.questions.find(q => q.questionId === questionId);
    wsState.answers[questionId]     = selectedKey === q.correctKey;
    wsState.selectedMCQ[questionId] = selectedKey;
    renderCard(wsState.index);
    scrollToFeedback();
}

function submitFill(questionId) {
    if (wsState.answers[questionId] !== undefined) return;
    const input = document.getElementById(questionId + '-input');
    const raw   = input.value.trim();
    if (!raw) return;
    const q    = wsState.questions.find(q => q.questionId === questionId);
    const norm = raw.toLowerCase().replace(/\s+/g, '');
    wsState.answers[questionId]    = q.acceptedAnswers.some(a => a.toLowerCase().replace(/\s+/g, '') === norm);
    wsState.fillInputs[questionId] = raw;
    renderCard(wsState.index);
    scrollToFeedback();
}

function scrollToFeedback() {
    const fb = document.querySelector('.ws-feedback');
    if (!fb) return;
    const navBar = document.querySelector('.ws-nav-bar');
    const navHeight = navBar ? navBar.offsetHeight : 0;
    const fbBottom = fb.getBoundingClientRect().bottom;
    const overflow = fbBottom - (window.innerHeight - navHeight - 8);
    if (overflow > 0) window.scrollBy({ top: overflow, behavior: 'smooth' });
}

// ── Summary screen ───────────────────────────────────────────────────────────

function showSummary() {
    const { questions, answers, topicSlug } = wsState;
    const total   = questions.length;
    const correct = Object.values(answers).filter(Boolean).length;
    const pct     = Math.round(correct / total * 100);

    let title, msg;
    if      (pct >= 80) { title = '🎉 Excellent work!';  msg = `You scored ${correct}/${total} (${pct}%). Outstanding!`; }
    else if (pct >= 60) { title = '👍 Good effort!';      msg = `You scored ${correct}/${total} (${pct}%). Review the ones you missed and try again.`; }
    else                { title = '📖 Keep practising!';  msg = `You scored ${correct}/${total} (${pct}%). Re-read the topic notes and have another go.`; }

    const backHref = topicSlug ? `../content/${topicSlug}.html` : '../content/index.html';

    document.getElementById('ws-card').innerHTML = `<div class="ws-card ws-summary">
        <h3>${title}</h3>
        <p>${msg}</p>
        <div class="ws-summary-actions">
            <button class="ws-btn-action" onclick="resetWorksheet()">↺ Try Again</button>
            <a class="ws-btn-action ws-btn-secondary" href="${backHref}">← Back to Topic</a>
            <a class="ws-btn-action ws-btn-secondary" href="index.html">All Exercises</a>
        </div>
    </div>`;

    document.getElementById('ws-prev').disabled = true;
    document.getElementById('ws-next').disabled = true;
    document.getElementById('ws-progress').style.width = '100%';
    document.getElementById('ws-counter').textContent  = 'Complete!';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
