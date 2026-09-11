# ABLife AI & CRM — Shared Project Memory

**Purpose:** This file is the shared continuity record for ChatGPT, Claude, Antigravity, human reviewers, and any other agent working in this repository.

**Mandatory agent rule:** READ THIS FILE IN FULL BEFORE STARTING ANY TASK IN THIS REPOSITORY. After completing a material task, update the change log at the end of this file with what changed, what was verified, what remains open, and any new decision required.

Last updated: 2026-09-10
Current repository: `deepakbanarjee/CRM`
Current working/default branch: `claude/ai-executive-intelligence-plan-kcgdni`

---

## 1. Current project state

This repository is currently a **proposal/document-generation repository, not a running CRM or Evidence Assistant application**. The existing `proposal/` and `build/` trees contain proposal artefacts and generators. Do not assume production application code exists unless a later commit explicitly adds and documents it.

The project direction is now governed by the ABLife 90-Day Pilot Plan, the ABLife ownership/governance structure, approved Management decisions, and the controlled PRD process developed from those sources.

### Current execution status

- **Allowed now:** requirements engineering, governance mapping, repository audit, architecture definition, infrastructure planning, security/privacy design, vendor evaluation, cost modelling, test design, schedule design, decision/question registers, PRD preparation, and review.
- **On hold:** product coding, production schema implementation, live-data ingestion, live-contact migration, production integrations, and deployment.
- **Reason:** no application coding is to begin until the Master PRD, relevant architecture, governance requirements, and the applicable section/gate are formally approved.

---

## 2. Source precedence

When sources conflict, do not silently choose one. Use the following precedence unless Management explicitly records a different order:

1. Recorded Management/Board decisions and formal approvals.
2. Latest approved ABLife ownership, governance, operations, and centralization model.
3. Latest approved ABLife AI & CRM 90-Day Pilot Plan.
4. Latest approved PRD section, change request, or written project decision.
5. Latest consultant-approved/revised project documents.
6. Older proposal-package documents already in this repository.
7. Technical recommendations and temporary assumptions.

If two higher-priority sources conflict, stop and create a **DECISION REQUIRED** item. Never resolve governance, authority, legal-entity ownership, privacy, or compliance conflicts by inference.

---

## 3. HARD RULES — DO NOT BREAK

### HR-01 — Read memory first
Every agent must read `PROJECT_MEMORY.md` before making any change. Read `HANDOFF.md` as historical context where relevant, but `PROJECT_MEMORY.md` is the current coordination entry point.

### HR-02 — No coding before approval
Do not add or materially modify application code, database schemas, live integrations, deployment infrastructure, or production configuration until the Master PRD and the applicable section/gate are approved in writing.

### HR-03 — Section-by-section authorization
Delivery follows:

`DEFINE → REVIEW → APPROVE → BUILD → TEST → UAT → ACCEPT → RELEASE`

Do not build a section merely because a prior section has finished. Dependent work moves only after its defined approval/exit criteria are met. Independent work may run in parallel only if the approved plan permits it.

### HR-04 — No assumptions disguised as requirements
Every material statement must be classified when needed as one of:

- **CONFIRMED REQUIREMENT**
- **DERIVED REQUIREMENT**
- **DECISION REQUIRED**
- **RECOMMENDATION**

Never silently convert a recommendation, consultant comment, temporary assumption, or older proposal statement into an approved requirement.

### HR-05 — Do not hallucinate missing implementation details
If the repository or approved source does not prove a technical, legal, commercial, organizational, or workflow detail, mark it `TBD`, `UNKNOWN`, or `DECISION REQUIRED`.

### HR-06 — Preserve the two-pilot boundary
Treat these as separate, independently gateable products:

1. **Evidence & Executive Intelligence Assistant**
2. **Human-Approved Strategic Relationship CRM**

Shared identity, security, governance, audit, and approved interfaces are allowed. Do not collapse them into one inseparable system.

### HR-07 — Human approval for sensitive outbound
No autonomous external sending. Sensitive outbound communication must retain the required human approval path. Draft authors must not self-approve sensitive outbound content where the approved plan prohibits it.

### HR-08 — Legal entities are not departments
ABLife Holding and the five subsidiaries must not be modelled as one flat company without explicit approval. Distinguish:

- visibility,
- operational responsibility,
- legal authority,
- data ownership,
- relationship ownership,
- contracting responsibility.

One does not imply another.

### HR-09 — Least privilege and separation of duties
Do not assume an administrator, Group role, or central function has unrestricted visibility or authority. Access must be explicitly mapped by approved role/entity/function/project/matter scope.

### HR-10 — Plug-and-play architecture
External providers should be isolated behind documented interfaces/adapters wherever technically practical. Provider configuration must be externalized. Do not hard-wire vendor-specific business logic unless an approved exception is documented.

Each stateful external component should have, where applicable:

- interface contract,
- configuration contract,
- authentication method,
- health/failure behaviour,
- timeout/retry rules,
- audit behaviour,
- export method,
- migration procedure,
- rollback procedure,
- replacement/contract tests,
- documented service impact during replacement.

Do not promise universal zero-downtime replacement unless the architecture and tests prove it.

### HR-11 — No vendor preselection without evidence
Do not present an illustrative/reference full-stack stack as an approved stack. Stage 1 must first discover existing corporate systems and compare configuration/reuse against custom/hybrid development. Any provider named before approval is a candidate or reference option only.

### HR-12 — Reuse before purchase/build
Before recommending a new identity, email, calendar, document repository, CRM, cloud, or security product, inventory what ABLife already uses and assess fitness, data terms, governance, exportability, and cost.

### HR-13 — Production/live data remains gated
Do not put production data into developer logs, synthetic/test environments, personal tools, or unapproved services. Live contacts and production document ingestion require the applicable documented gate approval.

### HR-14 — Evidence Assistant must fail safely
The Evidence Assistant must not fill evidence gaps with unstated assumptions. It must preserve source status/version, enforce access before model exposure, surface absence/conflict, and leave legal/factual resolution to authorized humans.

### HR-15 — Generated documents: edit sources, not only outputs
For proposal artefacts generated from `build/`, update the relevant source generator first, regenerate outputs, recalculate spreadsheets where required, render/inspect PDFs or images, and verify no regressions before committing. Do not patch only a generated `.docx`, `.pdf`, `.xlsx`, or image if the source generator would later overwrite the change.

### HR-16 — Preserve known wording corrections
Do not regress previously corrected overclaims. In particular:

- use **tamper-evident**, not tamper-proof, unless stronger properties are actually proven;
- do not claim there is no automated sending path if internal staff reminders are automated;
- do not claim every sentence is cited when the supported behaviour is answer-level citation;
- do not claim every figure/date is detected when extraction cannot guarantee that.

### HR-17 — Verify before write
Before editing any existing file:

1. fetch/read the current version from GitHub;
2. check whether another agent has changed it;
3. identify the authoritative source for the requested change;
4. make the smallest change needed;
5. re-fetch/inspect after writing;
6. validate affected generated artefacts/tests where applicable;
7. record the change in this memory.

Do not perform broad search-and-replace changes across client documents without source-by-source verification.

### HR-18 — Consultant feedback currently pending, not authoritative text
Consultant feedback received on 2026-09-10 is **for information only at this point**. The consultant will revise the affected documents and send updated versions. Do not pre-emptively rewrite those documents based only on the feedback screenshot. Record the feedback, wait for the revised source documents, then compare and update the repo from the authoritative revisions.

### HR-19 — Third-party/contractor access is controlled
Do not assume contractors, AI agents, or support personnel can access ABLife production data, credentials, environments, repositories, or documents. Any such access requires an approved operating model, minimum necessary privileges, revocation/offboarding, logging, and explicit ownership boundaries.

### HR-20 — Update memory after material work
After every material repository task, append to the Change Log:

- date/time,
- agent/tool,
- branch,
- files changed,
- reason/source,
- verification performed,
- decisions created/closed,
- remaining blockers,
- next safe action.

If nothing was changed, record nothing.

---

## 4. Architecture principles currently agreed

These are project-level constraints unless later superseded by approved documents:

1. Two logically separate pilots with shared governance/security controls.
2. Minimum-necessary infrastructure for the 90-day pilot; no premature group-scale or sovereign build.
3. External provider abstraction/adapter pattern where practical.
4. Configuration-driven provider selection; no unnecessary business-logic coupling.
5. Environment separation: Development, Test/UAT, Controlled Pilot at minimum once development is authorized.
6. Least privilege, MFA/SSO where available, audit logging, backup/recovery, secrets management, and controlled offboarding.
7. Evidence access filtering before AI/model exposure.
8. Human approval for sensitive outbound communications.
9. Data export and vendor-exit capability must be testable.
10. No custom/hybrid implementation should be treated as pre-approved merely because a reference stack diagram exists.

---

## 5. Development process currently agreed

### Pre-development
No coding. Produce and approve:

- Requirements Register
- Governance Gap Register
- Decision & Discovery Register
- RACI / decision-rights matrix
- Legal-entity model
- Data model
- Access/approval matrices
- Architecture plan
- Infrastructure bill of materials
- Security/privacy design
- Vendor evaluation
- Test strategy
- Cost model
- Detailed task schedule
- Master PRD

### After approval
Each independently approved section follows the controlled lifecycle and must meet its own definition of done, tests, UAT, and acceptance before dependent sections proceed.

---

## 6. Repository state and interpretation

Current repository evidence indicates this branch is a **proposal pack and generator system**, not the actual future application. Therefore:

- do not infer application frameworks/databases/authentication from proposal filenames;
- do not claim CRM/Evidence functionality exists because requirements are documented;
- do not estimate reuse of production application code until actual application code is present and audited;
- treat existing architecture/cost/technology documents as historical proposal inputs unless they match the latest approved plan.

---

## 7. Consultant feedback received — WAIT FOR REVISED DOCUMENTS

The user supplied consultant feedback on 2026-09-10 and explicitly instructed that no action be taken on the documents yet. The consultant will update them.

The feedback summary is recorded here only so future agents know revisions are pending:

1. **Full-Stack Development Subscription Cost Plan — major fix pending**
   - rename/reframe it;
   - remove ambiguity around the USD 1,500 allowance;
   - separate contractor costs from ABLife-owned subscriptions;
   - add missing total-cost categories.

2. **90-Day Pilot Full-Stack Technology Plan — important fix pending**
   - align with third-party outsourcing;
   - make existing-CRM discovery the first decision;
   - strengthen ABLife ownership/handover requirements;
   - avoid appearing to preselect a custom stack.

3. **90-Day Pilot Architecture Plan — important fix pending**
   - add a no-document-sharing operating model;
   - add third-party access restrictions;
   - strengthen ABLife-owned environments, credential revocation, and controlled support access;
   - remove the blank final page.

4. **90-Day Pilot Development Stage-by-Stage — minor/moderate fix pending**
   - add developer-selection and contracting steps;
   - adjust the 90-day starting point;
   - define measurable acceptance targets;
   - clarify third-party responsibilities.

**Action rule:** do not edit these four documents from this feedback alone. Wait for consultant-updated versions, then perform a controlled diff against repo/current project documents before adopting changes.

---

## 8. Important unresolved decisions

Keep these open until authoritative answers are provided:

- Which legal entities are in first-release/pilot scope?
- Can Holding itself own CRM relationships?
- Can one contact/organization relate to multiple subsidiaries, and what cross-subsidiary visibility is allowed?
- Which Group functions receive cross-entity access?
- Are Project Companies/SPVs in pilot scope?
- Which approval powers belong to Holding vs subsidiary Board/Company CEO?
- What role/access does Independent Internal Audit receive?
- Does Company Secretary require system access/workflow?
- Which entity is data controller/owner for each relationship category?
- Which entity contracts technology providers and pays/allocates costs?
- What identity, email, calendar, document repository, CRM, cloud, and security systems already exist?
- What jurisdictions, residency requirements, retention periods, and prohibited data categories apply?
- What is the Management-confirmed flagship project and authorized evidence set?
- What are the real document/contact/user volumes and languages?
- Who resolves each category of evidence conflict?
- Who approves each outbound topic/category and through which channels?
- What constitutes a critical failure?
- What are the approval SLA and sign-off authorities for PRD sections?
- Is custom/hybrid development during the pilot approved, or must an established-platform configuration be selected?
- Which components must be hot-swappable versus replaceable through controlled migration?
- What downtime/recovery objectives apply by component?

---

## 9. Agent operating protocol

Before starting a task:

1. Read this file.
2. Read the relevant current source document(s) and current GitHub file(s).
3. Check whether the task is permitted under the current gate/status.
4. Identify exact requirements/decisions supporting the change.
5. If authority is missing, stop and raise a question rather than assume.

Before committing a change:

1. Confirm the file has not changed since it was fetched.
2. Make the minimum change.
3. Verify syntax/build/render/tests as applicable.
4. Inspect generated artefacts where applicable.
5. Recheck alignment with hard rules.
6. Update this memory.

---

## 10. Change Log

### 2026-09-10 — ChatGPT — project governance/memory initialization

- **Branch:** `claude/ai-executive-intelligence-plan-kcgdni`
- **Files created/updated:** `PROJECT_MEMORY.md` (created); additional entry-point pointers to be added separately.
- **Reason/source:** user instructed that ChatGPT, Claude, and Antigravity must share a persistent repo-based memory, read it before every task, record work, and follow hard rules.
- **Verification before change:** fetched current repository metadata, current `README.md`, current `HANDOFF.md`, and confirmed no existing `PROJECT_MEMORY.md` was present.
- **Scope intentionally NOT changed:** no proposal document, architecture document, cost document, development plan, generator, application code, data model, or deployment configuration was modified. Consultant feedback was recorded as pending only, per user instruction.
- **Current blockers:** consultant-revised documents not yet received; Master PRD not formally approved; no coding authorization.
- **Next safe action:** add repository entry-point instructions so all agents are directed to read this file before work; then wait for an explicit task or authoritative revised consultant documents.
