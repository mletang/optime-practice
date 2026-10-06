# OpTime Practice Studio

Mobile-friendly study and timed-exam practice based on February 2026 OR100, OR350, and CLN251/252 course concepts.

- 60 original questions: 16 OR100, 24 OR350, 20 CLN251/252.
- Single-answer and select-all questions, shuffled questions/choices, flags, and a question navigator.
- Study mode gives explanations after checking each answer. Exam mode withholds feedback until submission and uses a wall-clock deadline.
- Automatic local save/resume, course breakdowns, missed-question retry, recent scores, and JSON results download.
- Every rationale identifies the With Answers companion and PDF page(s). The source PDFs are not hosted here.

This independent resource is not affiliated with Epic and does not reproduce an official exam. The question count, topic distribution, configurable time limits, and exact-match scoring are practice settings, not a verified current exam blueprint. It does not predict an official passing result.

## Run and maintain

Open `index.html`, or serve this directory with `python -m http.server 8765`. The standalone HTML contains its question bank, CSS, and JavaScript; Google Fonts is optional and system fonts are fallbacks.

Edit `build_bank.py` to maintain questions, then run `python build_bank.py` and `python build.py`. Run `node --test test.cjs` to check question integrity, selection, scoring, option mapping, and deadline calculations.

Publish the standalone `index.html` in the root of a GitHub repository and enable Pages from the `main` branch root. Pages hosting is generally public. No PDFs, training logins, patient examples from the guides, source extracts, or personal study history belong in the repository.

Local progress is browser/device-specific and limited to 30 recent score summaries plus the latest session. Clearing browser storage clears it. The timer continues away from the tab; an expired saved session submits on reopening. Study answers lock after checking. Select-all is one point only for an exact set; unanswered is incorrect. All questions are one point.
