module.exports = {
  outName: "10_Client_Questions_and_Answers_Playbook.docx",
  meta: {
    series: "PROPOSAL PACKAGE  |  DOCUMENT 10",
    title: "Client Questions and Answers Playbook",
    subtitle: "Anticipated questions from the client, with recommended answers, the reasoning behind them, and what not to say",
    shortTitle: "Client Q&A Playbook",
    docNo: "10 of 15",
    audience: "Presenter only. Do not distribute to the client.",
    classification: "Internal - presenter's copy",
  },
  body: `
# How to use this playbook

Each question has a **short answer** (say this first), **the reasoning** (if they probe), and where useful a **do not say** note. If a question is outside this playbook, use the three fall-backs at the end. Keep answers honest; the client will respect "we will confirm that in discovery" far more than a guess.

# A. Understanding and approach

## A1. "Is this just ChatGPT on our documents?"

**Short answer:** No. A general chatbot answers from the whole internet and from memory, and it will guess. This system answers only from your loaded documents, cites the page for every statement, runs a second check that each sentence is supported, and says "not in the documents" when that is the truth. On top of that it keeps a structured ledger of every figure, date and term so it can spot contradictions across documents, which a chat interface cannot do reliably.

**Reasoning:** The value for management is trust. The verification layer (grounding check, claims ledger, decision checklists, audit log) is the product; the chat box is the interface.

## A2. "Why two systems and not one product?"

**Short answer:** They serve different jobs and different users, so each is built and can be used on its own. They share one foundation: login, the list of organisations and people, documents, audit and the AI gateway. That is what "individually developed, interconnected at the top level" means in practice.

## A3. "Why not buy Salesforce or HubSpot for the CRM?"

**Short answer:** You can, and your data will export to them cleanly if you ever want that. We are not recommending it as the core for three reasons: your mandatory human-approval gate is not how those products work by default; your data would sit outside the GCC; and the shared entity model with the intelligence assistant is much simpler on one platform. For the scope you described, a purpose-built CRM is smaller, cheaper to run, and fully under your control.

**Do not say:** that those products are bad. They are excellent for large sales organisations.

## A4. "Why not just use Microsoft Copilot on SharePoint?"

**Short answer:** Copilot is good for general search and drafting. It does not enforce closed-domain answers with a grounding check, has no claims ledger for contradictions, cannot express decision checklists for missing evidence, and its audit trail is not designed for management decisions. We can coexist with it; the assistant can read the same SharePoint libraries.

## A5. "What does RAG mean?"

**Short answer:** Retrieval-Augmented Generation. First find the relevant passages in your documents, then have the model write an answer using only those passages, and show them as citations. "Retrieval" is the search step; "generation" is the writing step. The key design point is that the model is never asked to remember your business; it is asked to read.

# B. Accuracy and trust

## B1. "How accurate will it be?"

**Short answer:** We measure rather than promise. During discovery we agree 100-200 real questions with known answers. We target above 95% of answer sentences supported by cited sources, above 95% precision on extracted numbers, and above 90% of seeded contradictions detected, all measured on your real documents in the pilot. Every answer shows its sources, so a wrong answer is visible, not hidden.

**Do not say:** "100%". No language-model system is perfect; the design makes errors visible and rare.

## B2. "What happens when the documents do not contain the answer?"

**Short answer:** It says so, and lists the closest documents it found. It is built to refuse rather than guess. That behaviour is one of the things we test in every release.

## B3. "Can it hallucinate?"

**Short answer:** Language models can produce unsupported statements. That is why there is a second, independent check that compares every sentence of the draft answer to the cited passages and removes anything unsupported. If nothing survives, the assistant declines. Combined with citations and the audit log, hallucination becomes a measurable, controlled error rate rather than a hidden risk.

## B4. "How does it know two documents contradict each other?"

**Short answer:** When a document is loaded we extract its facts into a table: which entity, which attribute (contract value, effective date, term), what value, what unit, which page, and the exact quote. We then compare rows about the same entity and attribute across documents. Numbers outside a tolerance, different dates, or terms an adjudication pass judges incompatible become flags, with both quotes shown. We also record document versions, so a superseded draft is not reported as a contradiction of the final.

## B5. "How does it know what is missing?"

**Short answer:** You tell it once what evidence each type of decision needs; for example "approving a contract needs the signed contract, a board minute, a budget line and a legal opinion". The system checks the loaded documents against that list and shows what is present, what is missing and what is contradicted. It also flags references to documents that are not there, such as "see Annex B" when there is no Annex B.

## B6. "What about Arabic documents?"

**Short answer:** Supported end to end: Arabic OCR for scans, multilingual embeddings so an English question finds an Arabic clause, answers in the user's language, and a right-to-left interface. We report accuracy separately per language in the pilot.

## B7. "What about scanned PDFs and Excel models?"

**Short answer:** Scans go through OCR with layout analysis. Excel is parsed cell by cell with sheet and cell references, so a citation can say "Financial model, sheet Inputs, cell C14". Complex or poorly scanned documents are flagged for human review of the extraction.

# C. Security, data and residency

## C1. "Where will our data be stored?"

**Short answer:** In your own cloud account, in a GCC region you choose (UAE, Bahrain or Saudi Arabia are all available from the major providers), or on your premises. You own the accounts; we operate inside them.

## C2. "Does our data go to the AI company?"

**Short answer:** With the recommended set-up, documents are stored in your region and only the passages needed to answer a question are sent to the model, encrypted, under enterprise terms that prohibit training on your data. If some documents must never leave the country, we route those to a model hosted inside the country. That routing is a policy setting, not a rebuild.

**Reasoning:** Be precise. As of early 2026 the frontier models available from AWS Middle East regions use cross-region inference; a fully in-country frontier endpoint was not confirmed. Say we will re-verify at discovery because availability changes quickly.

## C3. "Can it be fully offline or sovereign?"

**Short answer:** Yes. Pattern C runs everything, including the model, on GPUs inside the country. It costs more to run and the open-weight models are a step behind the frontier, so we evaluate them against your question set before switching. We recommend designing for it from day one and deciding after the pilot.

## C4. "Who can see what?"

**Short answer:** Access follows your existing permissions: single sign-on, roles, and per-document access lists mirrored from SharePoint or set on upload. The filter is applied before retrieval, so the model never sees a passage the user cannot open. Every view and question is logged.

## C5. "Is it compliant with PDPL?"

**Short answer:** It is designed to support compliance with the Saudi PDPL, the UAE federal law and the DIFC and ADGM regimes: lawful basis and consent per contact, residency by policy, data-subject request support, retention rules, audit trail, and cross-border transfer controls. Your legal team confirms the lawful basis and transfer mechanism; we implement and evidence it.

**Do not say:** "It is certified compliant". Compliance is a property of your organisation's processing, which the software supports.

## C6. "Can the AI send emails by itself?"

**Short answer:** No, by design. There is no automated sending path in the code. A message is sent only when a named approver, who is not the drafter, approves it; the send happens under that person's authority through your own mailbox, and it is logged. Reminders go to your staff, never to contacts.

## C7. "Will you train models on our data?"

**Short answer:** No. Neither we nor the providers we contract on your behalf train on your data. Where a provider offers zero or limited retention, we select it. The sovereign pattern removes third parties entirely.

# D. Delivery, timeline and cost

## D1. "How long until we see something working?"

**Short answer:** A working structure of both systems at week 6, and an integrated demo with contradiction detection, gap tracking and the approval queue at week 8-9. If you want an earlier look, a clickable prototype on sample documents at week 4. Production go-live at week 20 after a pilot on your real data.

## D2. "What will it cost?"

**Short answer:** Two parts. Running cost, which starts at a few hundred dollars per month for a pilot and scales by tier; and build cost, which we price fixed for discovery and the demo, then by milestone for pilot and production, with an annual managed service after go-live. The workbook in the pack shows every assumption and lets us adjust together.

**Reasoning:** Present tiers, not a single number. Emphasise that the client owns everything at every tier.

## D3. "Why should we pay for discovery?"

**Short answer:** Because the two decisions that cost the most to get wrong, data residency and identity, are made there, and because the golden question set we build in discovery is how you will hold us to accuracy targets. It is two weeks and a small fixed fee.

## D4. "What if you disappear?"

**Short answer:** You own the code, the cloud accounts and the data from day one; everything is documented and built on standard components (PostgreSQL, containers, Terraform). Any competent team can take it over. We will also provide a hand-over package and, if you want it, escrow.

## D5. "Can we start smaller?"

**Short answer:** Yes. The smallest sensible start is discovery plus the System 1 working structure on one document set, or discovery plus the CRM for one category. The platform layer is built either way, so nothing is thrown away.

## D6. "How do we get our real data in later?"

**Short answer:** Through configuration, import templates and connectors. Fields, stages, categories and checklists are set up in the interface; contacts come in through a template with a validation preview; documents come from SharePoint, Drive or a mailbox connector. Demo data is flagged and deleted with one action. No code changes.

# E. Scale and future

## E1. "How does this scale to the whole group?"

**Short answer:** Same code, bigger footprint. Departmental tier adds single sign-on, backups and connectors. Enterprise tier adds in-region GPUs, high availability and compliance evidence. Group scale adds multi-entity tenancy, dedicated model capacity, 24/7 operations and integration with ERP, document management and board portals. Costs scale with usage, not with a rewrite.

## E2. "What can we add later?"

**Short answer:** Board-pack drafting from the corpus; investor coverage and relationship-health analytics; e-signature and document management integration; WhatsApp channel with the same approval gate; a compliance tracker on the same platform; mobile app.

## E3. "Which AI vendor are you tying us to?"

**Short answer:** None. All model calls go through a gateway. We start with Claude because it performs well on long structured documents and is reachable from GCC cloud regions, but switching to another provider or to an in-country open model is a configuration change validated against your question set.

# F. Difficult or sceptical questions

## F1. "Our documents are messy; will this actually work?"

**Short answer:** Messy is normal; the pilot exists to prove it on your formats. We ask for a sample early precisely to find the ugly cases: scans, mixed languages, spreadsheets with merged cells. Where extraction confidence is low, the system says so and routes to a person rather than pretending.

## F2. "Who is accountable when it is wrong?"

**Short answer:** People remain accountable; the system is designed to make that possible. Every answer shows its sources so the reader can check in seconds. Every finding has an owner. Every send has an approver. The audit log shows the chain. We measure error rates and report them monthly.

## F3. "Can staff bypass the approval gate?"

**Short answer:** Not through the system. Sending requires an approval record from a different user, enforced in the database, not just the interface. Staff could of course send from their own mailbox outside the system; the governance answer to that is policy and the reporting that shows what was sent through the approved route.

## F4. "Why not wait for the technology to mature?"

**Short answer:** The parts that create value here, structured extraction, citations, access control and workflow, are mature engineering. Model quality improves every few months and the gateway lets you adopt improvements without rebuilding. Waiting delays the benefit; starting with a pilot bounds the risk.

# Three fall-backs for questions not covered

1. "That depends on a choice we will make together in discovery; the options are X and Y, and our default recommendation is X."
2. "I want to give you a precise answer rather than a quick one; we will include it in the detailed proposal."
3. "Here is how we would find out: [describe the test or the pilot measurement]."
`,
};
