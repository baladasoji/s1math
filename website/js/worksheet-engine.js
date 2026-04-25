/* ── Worksheet Engine ──────────────────────────────────────────────────────
   Reads the global WS_QUESTIONS array (set by the topic data file loaded
   before this script) and drives the interactive quiz UI.
   ───────────────────────────────────────────────────────────────────────── */

let wsState = {};

function renderWorksheet() {
    const container = document.getElementById('ws-questions');
    container.innerHTML = '';
    const totalEl = document.getElementById('ws-total');
    if (totalEl) totalEl.textContent = WS_QUESTIONS.length;
    let currentPart = '';

    WS_QUESTIONS.forEach((q, i) => {
        if (q.part !== currentPart) {
            currentPart = q.part;
            const ph = document.createElement('div');
            ph.className = 'ws-part-header';
            ph.innerHTML = `<h4>${q.part}</h4>`;
            container.appendChild(ph);
        }

        const card = document.createElement('div');
        card.className = 'ws-question';
        card.id = q.id;

        if (q.type === 'mcq') {
            card.innerHTML = `
                <p class="ws-q-number">Question ${i + 1} of ${WS_QUESTIONS.length}</p>
                <p class="ws-q-text">${q.text}</p>
                <div class="ws-options">
                    ${q.options.map((opt, j) => `
                        <button class="ws-option" data-index="${j}"
                                onclick="checkMCQ('${q.id}', ${j})">
                            ${opt}
                        </button>`).join('')}
                </div>
                <div class="ws-feedback" id="${q.id}-feedback"></div>`;
        } else {
            card.innerHTML = `
                <p class="ws-q-number">Question ${i + 1} of ${WS_QUESTIONS.length}</p>
                <p class="ws-q-text">${q.text}</p>
                <div class="ws-fill-wrap">
                    <input class="ws-input" id="${q.id}-input" type="text"
                           placeholder="Your answer…"
                           onkeydown="if(event.key==='Enter') checkFill('${q.id}')">
                    <button class="ws-submit-btn"
                            onclick="checkFill('${q.id}')">Check</button>
                </div>
                <div class="ws-feedback" id="${q.id}-feedback"></div>`;
        }

        container.appendChild(card);
    });
}

function checkMCQ(qId, selectedIndex) {
    if (wsState[qId] !== undefined) return;
    const q = WS_QUESTIONS.find(q => q.id === qId);
    const isCorrect = selectedIndex === q.correct;
    wsState[qId] = isCorrect;

    document.getElementById(qId).querySelectorAll('.ws-option').forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correct)                        btn.classList.add('ws-correct');
        else if (i === selectedIndex && !isCorrect)  btn.classList.add('ws-wrong');
    });
    showFeedback(qId, isCorrect, q.explanation);
    updateScoreBar();
}

function checkFill(qId) {
    if (wsState[qId] !== undefined) return;
    const q     = WS_QUESTIONS.find(q => q.id === qId);
    const input = document.getElementById(qId + '-input');
    const raw   = input.value.trim();
    if (!raw) return;

    const norm      = raw.toLowerCase().replace(/\s+/g, '');
    const isCorrect = q.answer.some(a => a.toLowerCase().replace(/\s+/g, '') === norm);
    wsState[qId] = isCorrect;

    input.disabled = true;
    document.querySelector(`#${qId} .ws-submit-btn`).disabled = true;
    input.classList.add(isCorrect ? 'ws-input-correct' : 'ws-input-wrong');
    showFeedback(qId, isCorrect, q.explanation);
    updateScoreBar();
}

function showFeedback(qId, isCorrect, explanation) {
    const fb = document.getElementById(qId + '-feedback');
    fb.className    = 'ws-feedback ' + (isCorrect ? 'ws-feedback-correct' : 'ws-feedback-wrong');
    fb.innerHTML    = `<strong>${isCorrect ? '✓ Correct!' : '✗ Not quite.'}</strong> ${explanation}`;
    fb.style.display = 'block';
}

function updateScoreBar() {
    const answered = Object.keys(wsState).length;
    const correct  = Object.values(wsState).filter(Boolean).length;
    const total    = WS_QUESTIONS.length;

    document.getElementById('ws-correct').textContent    = correct;
    const totalEl = document.getElementById('ws-total');
    if (totalEl) totalEl.textContent = total;
    document.getElementById('ws-progress').style.width   = (answered / total * 100) + '%';

    if (answered === total) {
        const pct = Math.round(correct / total * 100);
        let title, msg;
        if      (pct >= 80) { title = '🎉 Excellent work!';    msg = `You scored ${correct}/${total} (${pct}%). Outstanding understanding!`; }
        else if (pct >= 60) { title = '👍 Good effort!';        msg = `You scored ${correct}/${total} (${pct}%). Review the questions you missed and try again.`; }
        else                { title = '📖 Keep practising!';    msg = `You scored ${correct}/${total} (${pct}%). Re-read the topic notes and have another go.`; }

        document.getElementById('ws-final-title').textContent = title;
        document.getElementById('ws-final-msg').textContent   = msg;
        const fin = document.getElementById('ws-final');
        fin.style.display = 'block';
        fin.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function resetWorksheet() {
    wsState = {};
    document.getElementById('ws-correct').textContent  = '0';
    document.getElementById('ws-progress').style.width = '0%';
    document.getElementById('ws-final').style.display  = 'none';
    renderWorksheet();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', renderWorksheet);
