# Agency Agents — trimmed roster

**Source:** [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents), commit
`6d29a9b08785a0e49ffc9818bbdd381164c2df5f` (cloned 2026-09-09).
**License:** MIT.
**Trim date:** 2026-09-09.
**Result:** 46 agents kept out of 279 shipped by that commit (the project has grown past the 273
some earlier documentation cites — `divisions.json` lists 18 divisions and 279 agent files were
installed and counted directly from disk before trimming).

Full reinstall of all 279, if ever needed:

```bash
git clone --depth 1 https://github.com/msitarzewski/agency-agents.git /tmp/agency-agents-src
CLAUDE_CONFIG_DIR=<repo>/.claude /tmp/agency-agents-src/scripts/install.sh --tool claude-code
```

## What this repo actually is

Read `README.md` and `HANDOFF.md` before trusting the summary below — they're the ground truth.

**This is not a CRM application.** There is no server, no database, no deployed anything. The
repo is a document-generation pipeline: Node.js (`docx`, `pptxgenjs`, `mammoth`) and Python
(`openpyxl`, `matplotlib`, `pymupdf`, `markitdown`) scripts in `build/` that compile markdown-lite
source into an eighteen-document **sales proposal package** — Word docs, a PowerPoint deck, three
Excel workbooks with live formulas, PDFs, and a Playwright-rendered HTML infographic — living in
`proposal/`. The package pitches two systems a prospective client asked for: a closed-domain RAG
tool with a citation/contradiction-detection layer ("AI Executive Intelligence Assistant"), and a
CRM with human-approval-gated outreach for investor/partner/customer relationship pipelines,
including a GCC-market pipeline. Neither system has been built; this repo produces the pitch for
building them. The user is a solo, non-engineer founder about to present this to the client; a
sibling project of theirs, Printosky, is the only piece of *evidence* cited in the pack that they
can ship real software.

That shape — content-heavy, code-light, single-founder, one big client deliverable — drove every
keep/cut decision below far more than the nominal "JavaScript project" label does.

## Division-by-division reasoning

**engineering (64 → 16 kept).** Cut almost everything that assumes a running, deployed, tested
application: no DevOps, no live database, no mobile, no embedded/IoT, no WordPress/Drupal/China
stacks, no smart contracts, no SRE/incident response — there is nothing in production to operate
or attack. What's kept maps to two things: the actual build scripts, and the technical content
those scripts produce prose about. `engineering-universal-document-compiler` and
`engineering-pdf-engine-architect` are near-literal descriptions of `build/lib/docx_helpers.js`
and `build/visual/render.js` (a markdown-lite-to-document AST compiler; a Playwright HTML→PDF
pipeline with page-geometry concerns). `engineering-data-visualization-engineer` matches
`build/diagrams.py`. `engineering-rag-pipeline-engineer`, `engineering-knowledge-graph-engineer`
and `engineering-search-relevance-engineer` match the *content* of Document 03 — the claims ledger,
contradiction detection and retrieval design are exactly their specialties, even though no code
implements them yet; the proposal has to be technically credible on these points or it fails.
`engineering-privacy-engineer` and `engineering-identity-access-engineer` map to Document 08's
rewrite (PDPA/DPA data handling, the SSO/access-control gap `HANDOFF.md` §7 flags as genuinely
unproven). `engineering-software-architect` and `engineering-backend-architect` are for Document
03's high/low-level design. `engineering-prompt-engineer` and `engineering-ai-engineer` cover the
RAG system's refusal/citation prompting and general AI-feature framing. `engineering-data-engineer`
matches Document 07 (how real client data plugs in later). `engineering-technical-writer` and
`engineering-code-reviewer` / `engineering-codebase-onboarding-engineer` are for the docs and the
build scripts themselves.

**specialized (59 → 12 kept).** This division is a grab-bag of vertical personas (healthcare,
legal, real estate, hospitality, French/Korean market navigators, FedRAMP, civil engineering) —
none of that is this client's business. Kept only what maps to a real document or a real fact
already recorded in `HANDOFF.md`: `specialized-document-generator` is the single most literal
match in the whole roster (its description is "PDF, PPTX, DOCX, XLSX generation from code" — that
*is* `build/`). `specialized-cultural-intelligence-strategist` earns its place for a documented
reason, not a guess — the pack's biggest recorded failure was assuming a GCC/Arabic client when
the company is actually Philippines/Malaysia; an agent whose job is catching exactly that class of
geographic/cultural mismatch is directly responsive to the repo's own incident history.
`business-strategist`, `change-management-consultant`, `specialized-pricing-analyst` and
`data-privacy-officer` match the strategy, adoption, cost-model and PDPA/DPA content respectively.
`legal-document-review` matches Document 14 (the draft SOW). `specialized-workflow-architect`
matches the CRM pipeline/approval-flow design work. `corporate-training-designer` matches Document
11, which literally is presenter training material. `agents-orchestrator` and
`specialized-master-plan-architect` match the stated delivery model — `HANDOFF.md` §7 says
delivery will be "Claude and Claude agents with a human reviewer," which means coordinating many
of *these* agents across eighteen documents and red-teaming the resulting plan is real, current
work, not speculation. `specialized-chief-of-staff` fits the user's actual situation: a solo
founder juggling an eighteen-document package with no team to delegate to.

**sales (9 → 4 kept).** This is a sales proposal repo, so this division is close to the center of
the work, but only the pre-sale, first-meeting slice applies — there is no existing account to
expand, no outbound cadence to run, no rep bench to coach. `sales-proposal-strategist` ("RFP
response, win themes, narrative structure") is close to a mission statement for `proposal/`.
`sales-discovery-coach` matches Document 13's structured gap/assumption/clarifying-question work.
`sales-deal-strategist` matches win-strategy framing for a first client meeting.
`sales-engineer` matches Document 12, the demo script and seeded demo scenario. Cut
account-strategist (post-sale), coach (no reps), outbound-strategist (this is an inbound RFP
response, not prospecting) and offer/lead-gen (no funnel exists).

**project-management (7 → 3 kept), product (5 → 1), finance (5 → 1), research (1 → 1), design
(10 → 2), support (6 → 2), security (12 → 1), testing (9 → 3).** Same rule throughout: keep an
agent only where a specific document or a specific line in `HANDOFF.md` names the need.
`project-management-project-shepherd` and `project-manager-senior` match Document 04's phased
roadmap; `project-management-meeting-notes-specialist` matches the client-meeting-heavy nature of
the engagement. `product-manager` is the one generalist kept for shaping what's actually being
pitched (Document 15's requirements traceability). `finance-financial-analyst` matches Document
05's 173-formula cost model; FP&A, bookkeeping, tax and investment-research agents were cut as
redundant or simply not present in this repo's work. `research-synthesist` is a precise match —
`HANDOFF.md` documents in-session legal research (Malaysia PDPA amendments, Philippines NPC Model
Contractual Clauses) that is exactly "turning a scattered pile of sources into a structured map of
what the evidence supports." `design-brand-guardian` and `design-visual-storyteller` match the
explicit shared palette (`HANDOFF.md` §9) and the visual infographic/deck work; UI/UX agents for
software interfaces were cut because no software interface exists yet. `support-
executive-summary-generator` matches Document 01 almost by name; `support-legal-compliance-
checker` backs Document 08 and 14. `security-architect` is the one security agent kept — for
writing about the *proposed* systems' trust boundaries in Document 08 — everything else in that
division (pentesting, SOC2/PCI auditing, incident response, blockchain, threat intel) assumes a
live attack surface this repo doesn't have. `testing-reality-checker` and `testing-evidence-
collector` are a direct match for a QA habit `HANDOFF.md` §6 states explicitly: every document in
the pack was rendered to PNG and visually checked, with page counts tracked as a change signal —
that's evidence-based, screenshot-based verification of documents instead of software.
`testing-tool-evaluator` matches Document 06 (tool/stack selection with alternatives).

**Cut entirely: academic (6), game-development (21), gis (13), healthcare (3), marketing (36),
paid-media (7), spatial-computing (6).** Zero footprint in this repo. There is no game, no map, no
patient data, and — this is the one that's easy to get wrong by pattern-matching on "proposal
pack, needs marketing" — no marketing function at all: this is a single B2B proposal for one
named prospective client, not a campaign, a social presence, or an SEO surface. All 36 marketing
agents are platform-growth specialists (TikTok, Xiaohongshu, Baidu, paid social, app store
optimization); none of that applies to a first-meeting client pitch.

## The 46, by division

| Division | Kept | Of |
|---|---|---|
| engineering | 16 | 64 |
| specialized | 12 | 59 |
| sales | 4 | 9 |
| project-management | 3 | 7 |
| testing | 3 | 9 |
| design | 2 | 10 |
| support | 2 | 6 |
| finance | 1 | 5 |
| product | 1 | 5 |
| research | 1 | 1 |
| security | 1 | 12 |
| academic, game-development, gis, healthcare, marketing, paid-media, spatial-computing | 0 | 92 |

## Re-curating later

If the repo's purpose changes — real client data lands, System 1 or System 2 actually gets built,
the engagement moves past the first meeting — re-run the install command above for the full 279
and re-derive this list against what's true then. Don't restore agents from the cut list on the
assumption they'll eventually be needed; add them back only once a real file or workflow needs
them, the same standard this trim used.
