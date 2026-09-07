# CRM Proposal Pack — Context Handoff

_A self-contained briefing for a new session. Written 2026-09-07, updated the same day after the
Philippines/Malaysia correction was propagated through the whole pack. Read this before touching
anything in `proposal/`. Section 8 records what was changed and what is still open._

---

## 1. What this repo is

This is **not an application**. It is a **proposal package**: eighteen client-facing and
internal documents that pitch two systems to a prospective client, plus the scripts that
generate every one of them from source.

Nothing here is running software. The systems described in the documents have not been built.

The user is a solo founder pitching a large prospective client. They are not a software
engineer, have limited domain background, and will present without live access to Claude.
Delivery, when it happens, will be done by Claude and Claude agents with a human reviewer —
see section 7.

---

## 2. The client and their brief

The prospective client asked for **two internal systems**. Their exact asks, which the whole
pack is traceable to:

**System 1 — AI Executive Intelligence Assistant.** An internal tool for management to query
corporate and project documents (contracts, approvals, financial models, correspondence).
Four requirements:

1. Retrieve specific info on request — controlled access, not the open internet.
2. Flag contradictions — two documents stating different figures, dates or terms for the same thing.
3. Track missing information — gaps where a decision needs a document not yet provided.
4. Answer management questions in plain language, based only on the loaded document set.

Their own framing: _"a closed-domain RAG system with a verification/audit layer on top, not a
general chatbot."_

**System 2 — CRM + Follow-up System.** Relationships across three categories — investors,
partners/counterparties, customers/members — including a GCC-specific relationship pipeline.
Four requirements:

1. Contact and relationship records with stage/status tracking.
2. Follow-up scheduling and reminders.
3. **Any outreach must go through human approval before sending — no fully automated outbound.**
4. Basic reporting — who has been contacted, what stage, what is overdue.

**Four cross-cutting questions** they asked: build approach and tools; how to structure it so
real data plugs in later without a rebuild; timeline to a working structure/demo; cost or
pricing model.

---

## 3. ⚠️ THE CRITICAL CORRECTION — read this before editing anything

**The pack was written assuming the client is a GCC-based group. That is wrong.**

Late in the session the user corrected it: **the company operates mainly in the Philippines and
Malaysia, and is planning to start up in the GCC.** The GCC is an expansion market, not their
home jurisdiction.

What this invalidates across the pack:

| Wrong assumption, currently in the docs | Reality |
|---|---|
| Data at rest sits in a GCC cloud region | Their data is Philippines / Malaysia; GCC is future |
| Arabic is the second language | English is the business language in both markets; Bahasa Malaysia, Filipino, Chinese possible. **Arabic should not be assumed** |
| Applicable law is Saudi PDPL, UAE PDPL, DIFC, ADGM, Qatar, Bahrain, Oman, Kuwait | Applicable law is **Malaysia PDPA** and **Philippines Data Privacy Act 2012** |
| Residency discussion centres on AWS UAE/Bahrain, Azure UAE North | Should centre on Malaysia and Singapore regions |

**Verified facts to build the correction on** (researched in-session, 2026-09-07):

- **Malaysia has in-country cloud.** AWS launched a Malaysia region in 2024; Microsoft launched
  an Azure Malaysia region in 2025 and has announced a second ("Southeast Asia 3"). So
  "your data stays in Malaysia" is genuinely achievable.
- **The Philippines has no local region** from the major providers. Azure and Google both serve
  it from **Singapore**. The honest answer for Philippine data is Singapore, not in-country.
- **Malaysia PDPA amendments** took effect 2025: mandatory DPO for controllers *and* processors,
  breach notification to the Commissioner **within 72 hours**, Transfer Impact Assessments
  required for cross-border transfers, max fine raised to RM1,000,000.
- **Philippines DPA 2012**: cross-border transfer permitted with a comparable level of
  protection; NPC has issued **Model Contractual Clauses** (Advisory 2024-01, 30 May 2024);
  Privacy Impact Assessments expected for cross-border transfers.

**Two refinements found when the correction was applied** (both are now reflected in the pack):

- The NPC's model contractual clauses are **voluntary and encouraged, not mandatory**, and the
  NPC does not review agreements for conformity. Do not describe them as required.
- AWS runs a **Local Zone in Manila**, which is a latency extension of the Singapore region
  rather than a region in its own right. It is not a data-residency answer on its own, and
  saying so plainly is more credible than omitting it. Exact identifiers now used in the pack:
  AWS `ap-southeast-5` (opened August 2024) and Azure **Malaysia West** (GA 28 May 2025).

**The GCC relationship pipeline stays.** The client explicitly asked for it, and it makes sense
as the pipeline for a market they are entering. Where the *data* lives is a separate question
from what the *pipeline stages* are called. Do not delete the GCC pipeline.

**The correction has now been propagated through the whole pack** (see section 8). Documents 01, 03, 04, 06, 07, 08, 10, 11, 12, 13, 14, 16, 17, the deck, the three workbooks, the diagrams, the package index and the README were all updated and rebuilt.

---

## 4. What is in the repo

```
proposal/          18 documents + diagrams. The deliverable.
build/             Generators. Every document is built from source here.
  docs/*.js        One file per Word document (markdown-lite → docx)
  lib/docx_helpers.js   The docx builder: parser, tables, callouts, letterhead, compact mode
  build_docs.js    Runs all docs/*.js  →  proposal/*.docx
  build_deck.js    pptxgenjs → the 18-slide deck
  build_cost_model.py / build_risk_and_rtm.py   openpyxl → the three workbooks
  diagrams.py      matplotlib → the 8 PNG diagrams
  visual/reply.html + render.js   HTML → Playwright/Chromium → the visual PDF + PNGs
  finalize_docx.py Opens each .docx via LibreOffice UNO, refreshes the TOC, writes the PDF
bundles/           Download ZIPs. Gitignored — regenerate, don't commit.
```

### The eighteen documents

| # | File | What it is | Audience |
|---|---|---|---|
| 01 | Executive_Summary | 2-page overview | Client sponsor |
| 02 | First_Meeting_Presentation.pptx | 18 slides, speaker notes on every slide | Presented |
| 03 | Solution_Architecture | Part A high-level, Part B low-level (schemas, pipelines, APIs) | Client CTO |
| 04 | Implementation_Roadmap | Phases 0–5, staffing, dependencies, acceptance criteria | PMO |
| 05 | Cost_and_Pricing_Model.xlsx | **173 live formulas.** Run cost by tier, build effort, 3 pricing options, 3-yr TCO | Procurement |
| 06 | Technology_Stack_and_Tools | Every tool, why, price, alternatives | Client IT |
| 07 | Data_Onboarding_and_Integration | How real data plugs in later | Client ops |
| 08 | **Security_Privacy_and_Governance** | **⚠️ Entirely GCC-law based. Needs the biggest rewrite.** | CISO / legal |
| 09 | Risk_Register.xlsx | 22 scored risks | PMO |
| 10 | Client_Questions_and_Answers_Playbook | 30+ anticipated questions with answers | **Presenter only** |
| 11 | Presenter_Briefing_Concepts_and_Glossary | Concepts from first principles + glossary | **Presenter only** |
| 12 | Demo_Script_and_Meeting_Runbook | Minute-by-minute runbook; seeded demo scenario | **Presenter only** |
| 13 | Gaps_Assumptions_and_Clarifying_Questions | 20 gaps in the brief | Sponsor |
| 14 | Draft_Statement_of_Work | Scope, milestones, IP, warranties | Legal |
| 15 | Requirements_Traceability_Matrix.xlsx | Every requirement → design → test → demo step | Client IT |
| 16 | Reply_to_Brief | Warm 2-page prose reply, no placeholders | Sponsor |
| 17 | Visual_Reply_to_Brief (PDF + 2 PNGs) | Designed 2-page infographic version of 16 | Sponsor |
| 18 | **What_We_Will_Do_In_Plain_Words** | **Most current.** Plain-language walkthrough + questions | Sponsor |

---

## 5. How to rebuild (all of it verified working in-session)

```bash
cd build && npm install                       # docx, pptxgenjs, mammoth
pip install openpyxl matplotlib pillow pymupdf markitdown

python3 diagrams.py                           # → proposal/diagrams/*.png
node build_docs.js                            # → proposal/*.docx  (or: node build_docs.js 18_)
node build_deck.js                            # → proposal/02_*.pptx
python3 build_cost_model.py && python3 build_risk_and_rtm.py
NODE_PATH=$(npm root -g) node visual/render.js # → 17_Visual_* (Playwright is GLOBAL, not local)

cd ../proposal
python3 ../build/finalize_docx.py *.docx      # refresh TOCs + write PDFs
```

**Gotchas that cost time in-session:**

- **`finalize_docx.py` must be run from `proposal/`**, or LibreOffice resolves paths wrong and
  fails with "type detection failed". Two builds were lost to this.
- **Playwright is installed globally**, not in `build/node_modules`. Always prefix with
  `NODE_PATH=$(npm root -g)`.
- **LibreOffice needs `dangerouslyDisableSandbox: true`** on Bash calls in this environment.
- Recalculate workbooks with the `xlsx` skill's `recalc.py` after any openpyxl change; formulas
  have no cached values until then.
- The docx builder's markdown-lite supports: `#`/`##`/`###`, `**bold**`, `*italic*`, `` `code` ``,
  `- bullets`, `1. numbered`, `| tables |` with `%widths a,b` on the line above, `> callout`,
  `!! warning callout`, `![caption|widthInches](path.png)`, `---` for a page break.
- Per-document options in `docs/*.js`: `toc`, `cover`, `compact`, `header`, `landscape`.

---

## 6. What has already been fixed — do not redo these

**A pre-send audit corrected four overclaims** (commit `42860b3`). These are now correct
everywhere and must not regress:

| Was | Now | Why |
|---|---|---|
| "Tamper-proof audit trail" | "Tamper-evident" | A hash chain *detects* alteration; it does not prevent it |
| "No automated sending path anywhere in the code" | "Nothing reaches a **contact** without a named person approving it; reminders go to staff only" | Reminder digests to staff *are* automated sends. The original was literally false |
| "Every **sentence** cites a document and page" | "Every **answer** cites…" | Refusals and framing sentences carry no citation |
| "Every figure and date compared" | "Figures, dates and terms compared" | Extraction will not catch everything on poor scans |

Also added: the cost line now separates fixed build fees from pass-through running cost, and the
timeline carries its dependency on client inputs arriving in the first two weeks.

**Document 18 is fully current.** It has: the Arabic reference removed, SharePoint/Drive
genericised, the week-20 go-live commitment deliberately withheld ("We would rather not put a
date on go-live until we have the answers below"), and **29 clarifying questions added** — five
general ones up front, then "What we would need to know" under each of the twelve points.

---

## 7. Delivery capability — what is actually true

The user asked whether the 20-week plan is deliverable. The honest assessment, which should
inform any staffing or timeline edits:

**Evidenced.** The user runs **Printosky**, a production system for a print shop in Kerala
(see their separate `HANDOFF.md` if provided): Supabase + Vercel, Meta WhatsApp Cloud API,
Razorpay webhooks with HMAC verification and idempotency, a 6-step bot state machine, a ~110KB
docx formatting engine, an operator queue with real back-pressure, ~35 pytest files in CI.
That is a real shipped system and it substantially de-risks "can they build software."

**Genuinely unproven, and the real risk:**

1. **Retrieval / RAG.** Printosky has *no* embeddings, vector search or re-ranking. The entire
   System 1 answering stack is new.
2. **Cross-document reasoning.** Printosky is a transaction pipeline — one job at a time. The
   claims ledger's whole value is comparing *across* a corpus. No precedent.
3. **Enterprise SSO + per-document access control.** Printosky uses shop-staff PINs.
4. **Security posture.** Printosky's own docs list a `service_role` key on a shop PC, tokens in
   `localStorage`, no CSP. The proposal promises the opposite of all three.

**The recommendation made to the user:** keep the 20-week plan (it is gated by client inputs,
not coding speed), but contract **one senior engineer part-time from ~week 5** as reviewer,
technical-session attendee and on-call, and **book a third-party penetration test for week 16**.
Agents cannot be the party that signs a warranty or gets woken at 2am. The user has not yet said
whether they will do this. The roadmap and cost model still say "team of 3-4" and have **not**
been updated to reflect the AI-agent delivery model.

---

## 8. THE CORRECTION HAS BEEN PROPAGATED

The Philippines/Malaysia correction has been applied across the whole pack and every artefact
rebuilt. What was changed:

| Document | Change |
|---|---|
| 08 Security | Section 4 rewritten: Malaysia PDPA (2024 Amendment, in force 1 June 2025) and Philippines DPA 2012, with a third row for the GCC as a *future* jurisdiction. Section 3 reworked around AWS `ap-southeast-5` / Azure Malaysia West, with the Philippines' lack of a local region stated plainly. Compliance tiers, AI-governance rows and the incident-response row updated |
| 02 Deck | Slide 11 (residency) retitled and its speaker notes rewritten; compliance-by-design card, gaps slide, pipeline slide and the brief-back notes corrected |
| 16 / 17 Replies | Cloud-region and language lines corrected in both; 17 re-rendered. **16 was held to two pages** — it spills to three if the residency paragraph grows |
| 03 Architecture | Deployment patterns A/B, document store, hosting rows, OCR and language-detection steps, and the NFR languages row |
| 06 Stack | OCR service and region, Bedrock access routes, embedding alternatives, identity-provider norm, WhatsApp rationale, off-the-shelf CRM comparison |
| 01, 04, 07, 10, 11, 12, 13, 14 | Language assumptions, residency lines, the C5 compliance answer, glossary (PDPL/SDAIA/DIFC replaced with PDPA/NPC/DPO), demo scenario, gaps 1/2/11, SoW scope and governing-law placeholder |
| 05 Cost model | OCR-share justification, OCR and GPU region notes, three "Managed PostgreSQL in region" row labels **and the formulas referencing them by name**, rate-card market ranges. Recalculated: 173 formulas, 0 errors, total build unchanged at ~USD 352k |
| 09 / 15 Workbooks | Lawful-basis, model-availability, extraction-accuracy and multilingual-effort risks; RTM rows R4, C1, N1 |
| Diagrams | Residency panel A/B text, ingestion and pipeline labels, and the claims-ledger currency (AED to MYR) |
| Index / README | Document 08 summary line and the re-verification note |

**The GCC pipeline was kept everywhere**, reframed as the pipeline for a market being entered
rather than a home market. The demo scenario in document 12 now uses "Sinaran Holdings",
"Selangor Precision Industries" and a Gulf investor "Al Rayyan Capital", which exercises the GCC
pipeline honestly, with a scanned Bahasa Malaysia board minute in place of the Arabic one.

**Two deliberate survivals** of the old terms, both correct: document 08's "GCC (future)" row
names Saudi PDPL, SDAIA, DIFC and ADGM as forward-looking context, and document 13's gap 1 says
Arabic *should not be assumed*. A grep for those terms should find these two and nothing else.

### Still open

- **The three questions in the old section 8 were never put to the user.** The correction was
  applied on these assumptions, which the client should confirm: the GCC entity is **not** in
  the first release (so document 08 covers two jurisdictions plus a forward-looking third);
  English is the business language with Bahasa Malaysia, Filipino and Chinese as the likely
  others; and **staffing was left untouched** (see section 7 - the roadmap and cost model still
  say "team of 3-4" and do not reflect the AI-agent delivery model).
- Page counts: documents **10 (7 to 8)** and **13 (5 to 6)** each grew a page, from the added
  compliance answer and the rewritten gaps. Everything else is unchanged.
- The footer on every Word document still reads "NN **of 15**" although the pack is eighteen
  documents. Pre-existing, not touched, worth fixing before anything goes out.
- The placeholders in section 10 are still unfilled.

## 9. Conventions to preserve

- **Palette**, used across diagrams, deck, workbooks and the visual reply:
  navy `#1E2761`, teal `#1C7293`, gold `#C9A227`, ice `#EEF2FA`, grey `#5A6270`.
- **Voice:** plain, warm, no jargon without immediate explanation, no em-dashes, British-leaning
  spelling. The client's own brief was informal, so the replies are deliberately conversational.
- **Never claim more than is true.** The pack's credibility rests on the refusal principle it
  describes. See section 6 — that audit is the model for any new claim.
- **Presenter-only documents (10, 11, 12) must never go to the client.** The package index says
  so; keep it that way.
- **Verify rendered output.** Every document in this pack was rendered to PNG and visually
  checked before being called done. Page counts are tracked; a change that alters them is a
  signal, not noise.
- Commit messages end with the Co-Authored-By and Claude-Session trailers the session supplies.

---

## 10. State as of this handoff

- Branch `claude/document-correction-propagation-1db948`, pushed, working tree clean.
- All 18 documents build and render. Page counts: 01=3, 03=18, 04=7, 06=7, 07=5, 08=8, **10=8**,
  11=8, 12=5, **13=6**, 14=6, 16=2, 17=2, 18=4.
- **Build environment note:** this container ships LibreOffice *core* only. `finalize_docx.py`
  fails with "type detection failed" until `libreoffice-writer` is installed, and the xlsx
  `recalc.py` hangs until `libreoffice-calc` is installed. The old note blaming the working
  directory was a misdiagnosis; run `apt-get install -y libreoffice-writer libreoffice-calc`
  first. Playwright is still global, so `NODE_PATH=$(npm root -g)` is still required.
- Placeholders still to fill before anything goes out: `[Client legal entity]`,
  `[Supplier legal entity]` and governing law in document 14; the blended rate on the
  `Rate_Card` sheet of document 05 (currently an average of an indicative rate card, producing
  ~USD 352k total build — **not a real quote**).
- No pull request has been opened. The user has not asked for one.
