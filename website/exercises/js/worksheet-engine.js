/* ── Card-Flip Worksheet Engine ─────────────────────────────────────────────
   Call init(questionsArray, topicSlug) from the page's DOMContentLoaded handler.
   ─────────────────────────────────────────────────────────────────────────── */

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
    if (answers[questions[index].id] === undefined) return;
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
    const done   = answers[q.id] !== undefined;
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
        card.querySelectorAll('.ws-option').forEach((btn, j) => {
            btn.addEventListener('click', () => selectMCQ(q.id, j));
        });
    } else if (q.type === 'fill' && !done) {
        const input    = document.getElementById(q.id + '-input');
        const checkBtn = document.getElementById(q.id + '-check');
        checkBtn.addEventListener('click', () => submitFill(q.id));
        input.addEventListener('keydown', e => { if (e.key === 'Enter') submitFill(q.id); });
        input.focus();
    }
}

function buildMCQCard(q, done) {
    const isCorrect = wsState.answers[q.id];
    const userPick  = wsState.selectedMCQ[q.id];
    const cardCls   = done ? (isCorrect ? 'ws-card ws-card-correct' : 'ws-card ws-card-wrong') : 'ws-card';

    const options = q.options.map((opt, j) => {
        let cls = 'ws-option';
        if (done) {
            if (j === q.correct)                    cls += ' ws-correct';
            else if (j === userPick && !isCorrect)  cls += ' ws-wrong';
            cls += ' ws-option-disabled';
        }
        return `<button class="${cls}" ${done ? 'disabled' : ''}>${opt}</button>`;
    }).join('');

    return `<div class="${cardCls}">
        <p class="ws-q-text">${q.text}</p>
        <div class="ws-options">${options}</div>
        ${done ? feedbackHTML(isCorrect, q.explanation) : ''}
    </div>`;
}

function buildFillCard(q, done) {
    const isCorrect = wsState.answers[q.id];
    const savedVal  = wsState.fillInputs[q.id] || '';
    const cardCls   = done ? (isCorrect ? 'ws-card ws-card-correct' : 'ws-card ws-card-wrong') : 'ws-card';
    const inputCls  = done ? (isCorrect ? 'ws-input ws-input-correct' : 'ws-input ws-input-wrong') : 'ws-input';

    return `<div class="${cardCls}">
        <p class="ws-q-text">${q.text}</p>
        <div class="ws-fill-wrap">
            <input class="${inputCls}" id="${q.id}-input" type="text"
                   placeholder="Your answer…"
                   value="${done ? savedVal : ''}"
                   ${done ? 'disabled' : ''}>
            <button class="ws-submit-btn" id="${q.id}-check" ${done ? 'disabled' : ''}>Check</button>
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

function selectMCQ(qId, selectedIndex) {
    if (wsState.answers[qId] !== undefined) return;
    const q = wsState.questions.find(q => q.id === qId);
    wsState.answers[qId]     = selectedIndex === q.correct;
    wsState.selectedMCQ[qId] = selectedIndex;
    renderCard(wsState.index);
}

function submitFill(qId) {
    if (wsState.answers[qId] !== undefined) return;
    const input = document.getElementById(qId + '-input');
    const raw   = input.value.trim();
    if (!raw) return;
    const q    = wsState.questions.find(q => q.id === qId);
    const norm = raw.toLowerCase().replace(/\s+/g, '');
    wsState.answers[qId]    = q.answer.some(a => a.toLowerCase().replace(/\s+/g, '') === norm);
    wsState.fillInputs[qId] = raw;
    renderCard(wsState.index);
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
