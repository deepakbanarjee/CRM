# ABLife AI & CRM — Shared Project Memory

**Purpose:** This is the mandatory continuity and control record for ChatGPT, Claude, Antigravity, human reviewers, contractors, and any other agent working in this repository.

> **MANDATORY:** READ THIS FILE IN FULL BEFORE STARTING ANY TASK IN THIS REPOSITORY. After every material task, update the Change Log with what changed, verification performed, open decisions/blockers, and the next safe action.

Last updated: 2026-09-11  
Repository: `deepakbanarjee/CRM`  
Current approved/base branch: `claude/ai-executive-intelligence-plan-kcgdni`  
Current document-review branch: `docs/v0.2-scalability-governance`

---

## 1. Current project state

This repository is currently a **proposal/document-generation repository, not a running CRM or Evidence Assistant application**. Do not assume production application code exists unless a later approved change explicitly adds and documents it.

The project direction is governed by:

1. recorded Management/Board approvals and decisions;
2. the latest approved ABLife ownership/governance/operations/centralization model;
3. the latest approved ABLife AI & CRM 90-Day Pilot Plan;
4. approved PRD sections/change requests/project decisions;
5. latest consultant-approved/revised project documents;
6. older proposal-package material;
7. technical recommendations and temporary assumptions.

If authoritative sources conflict, do not silently reconcile them. Record **DECISION REQUIRED** and identify the required decision authority.

### Current execution status

**Allowed now:** requirements engineering, governance mapping, repository/document audit, architecture definition, infrastructure planning, security/privacy design, existing-system/CRM fit-gap discovery, vendor evaluation, cost modelling, test design, schedule design, decision/question registers, PRD preparation, controlled document revision and review.

**On hold:** application coding, production schema implementation, live-data ingestion, live-contact migration, production integrations and deployment.

**Reason:** no application coding may begin until the Master PRD, applicable architecture/governance requirements and the relevant section/gate are approved in writing.

### Current controlled planning documents

Version `v0.2` is a **controlled draft for review, not an approved implementation baseline**:

- `project-docs/controlled/v0.2/ABLife_90_Day_Pilot_Architecture_Plan_v0.2.md`
- `project-docs/controlled/v0.2/ABLife_90_Day_Pilot_Full_Stack_Technology_Plan_v0.2.md`
- `project-docs/controlled/v0.2/ABLife_90_Day_Pilot_Development_Stage_by_Stage_v0.2.md`

Versioning policy, change log and binary artifact hashes are maintained under `project-docs/controlled/`.

---

## 2. HARD RULES — DO NOT BREAK

### HR-01 — Read memory first
Every agent must read `PROJECT_MEMORY.md` before any work. Read `HANDOFF.md` only as historical context where relevant. `PROJECT_MEMORY.md` is the current coordination entry point.

### HR-02 — No coding before approval
Do not add or materially modify application code, database schemas, live integrations, deployment infrastructure or production configuration until the Master PRD and applicable section/gate are approved in writing.

### HR-03 — Section-by-section authorization
Delivery follows:

`DEFINE → REVIEW → APPROVE → BUILD/CONFIGURE → TEST → UAT → ACCEPT → RELEASE`

Dependent work proceeds only after exit criteria are met. Independent work may run in parallel only if the approved delivery plan permits it.

### HR-04 — No assumptions disguised as requirements
Use these classifications where material:

- **CONFIRMED REQUIREMENT**
- **DERIVED REQUIREMENT**
- **DECISION REQUIRED**
- **RECOMMENDATION**

Never convert a recommendation, consultant observation, temporary assumption or older proposal statement into an approved requirement without approval.

### HR-05 — Do not hallucinate missing implementation details
If an approved source or repository evidence does not prove a technical, legal, commercial, organizational or workflow detail, mark it `TBD`, `UNKNOWN` or `DECISION REQUIRED`.

### HR-06 — Preserve the two-pilot boundary
Treat these as separate and independently gateable products:

1. **Evidence & Executive Intelligence Assistant**
2. **Human-Approved Strategic Relationship CRM**

They may share approved identity, policy, security, audit, workflow/approval foundations and interfaces, but must not become one inseparable product.

### HR-07 — Human approval for sensitive outbound
No autonomous external sending in the pilot. Sensitive outbound must use the approved human workflow. A draft author must not self-approve sensitive outbound where prohibited by the approved plan.

### HR-08 — Legal entities are not departments
ABLife Holding and subsidiaries must not be modelled as one flat company without explicit approval. Distinguish:

- visibility;
- operational responsibility;
- legal authority;
- data ownership/control;
- relationship ownership;
- contracting responsibility.

One does not imply another.

### HR-09 — Least privilege and separation of duties
Do not assume administrators, Group roles, central functions, contractors or AI agents have unrestricted access. Scope access by approved identity/role/entity/function/project/matter/action and record privileged access.

### HR-10 — Plug-and-play architecture
External providers should be isolated behind documented interfaces/adapters wherever technically practical. Provider configuration must be externalized. Do not hard-wire vendor-specific business logic unless an approved exception is documented.

Each stateful external component should document, where applicable:

- interface and configuration contract;
- authentication;
- health/failure behaviour;
- timeout/retry/idempotency rules;
- audit behaviour;
- export method;
- migration and rollback procedure;
- replacement/contract tests;
- expected service impact during replacement.

Do not promise universal zero-downtime replacement unless the approved architecture and tests prove it.

### HR-11 — No vendor or custom-stack preselection
Reference technologies and diagrams are candidates, not approved purchases or implementation decisions. Stage 1 must first discover ABLife's existing corporate systems, especially the current CRM/contact system, then compare configure/reuse vs extension/hybrid vs custom development.

### HR-12 — Reuse before purchase/build
Before recommending a new identity, email, calendar, document repository, CRM, cloud/security product or infrastructure service, inventory what ABLife already uses and assess fit, data terms, governance, exportability, security and cost.

### HR-13 — Production/live data remains gated
Do not put production data in developer logs, synthetic/test environments, contractor-owned storage, personal tools or unapproved services. Live contacts and production document ingestion require the applicable written gate approval.

### HR-14 — Evidence Assistant must fail safely
The Evidence Assistant must not fill evidence gaps with unstated assumptions. It must preserve source status/version, apply authorization before model exposure, surface absence/conflict and leave legal/factual resolution to authorized humans.

### HR-15 — Generated documents: edit controlled sources and regenerate
For generated proposal artifacts, update the authoritative editable source first, regenerate derived outputs, recalculate workbooks where required, render/inspect outputs and verify regressions before committing. Do not patch only a generated output if its source will overwrite it later.

### HR-16 — Preserve known wording corrections
Do not regress previously corrected overclaims. In particular:

- use **tamper-evident**, not tamper-proof, unless stronger properties are proven;
- do not claim there is no automated sending path when internal staff reminders may be automated;
- do not claim every sentence is cited when the supported behavior is answer-level citation;
- do not claim every figure/date is detected when extraction cannot guarantee it.

### HR-17 — Verify before write
Before editing an existing repository file:

1. fetch/read the current version;
2. check whether another agent changed it;
3. identify the authoritative source/decision for the change;
4. make the smallest justified change;
5. re-fetch/inspect after writing;
6. run/build/render/test as applicable;
7. record the material work in this memory.

No broad search/replace across client documents without source-by-source verification.

### HR-18 — Consultant feedback authorization status
The 2026-09-10 consultant feedback was initially information-only. **On 2026-09-11 the user explicitly authorized updating the three planning documents (Architecture, Full-Stack Technology, Development Stage-by-Stage) using that feedback plus the approved scalability/replication/customization direction. That later instruction supersedes the prior hold for those three documents only.**

The separate **Full-Stack Development Subscription Cost Plan remains outside this v0.2 update** and should not be revised from the screenshot alone unless the user or consultant supplies/approves the revised basis.

### HR-19 — Third-party/contractor access is controlled
Contractors, AI agents and support personnel do not receive default production-data, document, credential, environment or repository access. Access must be approved, named, minimum-necessary, logged, environment-specific and revocable. Temporary elevated access should be time-bound where practical.

### HR-20 — Update memory after material work
After every material task, record:

- date/time;
- agent/tool;
- branch;
- files changed;
- source/reason;
- verification performed;
- decisions created/closed;
- remaining blockers;
- next safe action.

### HR-21 — Version control for all documents and repository work
From 2026-09-11 onward, all material documents and repository work must use version control.

- Never silently overwrite a controlled baseline.
- Use dedicated review branches for material changes.
- Controlled documents must carry a version and status.
- Maintain a change log and artifact integrity record.
- Use readable/diffable source formats in Git where binary document diffs are inadequate.
- Exact distributed binary artifacts must be identifiable by version/hash where practical.
- Material changes must be visibly identifiable during review (v0.2 uses yellow highlights in DOCX and `[V0.2 CHANGE]` markers in Markdown).
- A newer repository version is not an approved baseline merely because it exists.
- Merge/adoption into the approved baseline occurs only after the required review/approval.

---

## 3. Architecture principles currently agreed for design review

These are design constraints/recommendations reflected in the v0.2 controlled drafts; they do not authorize coding or procurement.

1. **Two independently gateable products** on shared approved governance/security foundations.
2. **One core platform / one codebase where custom development is approved**, rather than separate code forks by subsidiary or jurisdiction.
3. **Control Plane vs Data Plane separation**: configuration/policy/deployment profiles are separate from business data.
4. **Configuration-driven customization** for legal-entity hierarchy, roles, workflows, approvals, feature flags, provider registry, branding/localization and deployment profiles.
5. **Existing CRM first**: discovery and fit-gap precede any custom CRM decision.
6. **CRM abstraction/adapters** where an existing or future CRM is integrated.
7. **Provider plugin/integration registry** with stable internal contracts.
8. **ABLife-owned/controlled environments** preferred for source repository, cloud/provider accounts, CI/CD, secrets, databases, storage, backups, monitoring and root/recovery credentials.
9. **No-document-sharing operating mode**: authoritative documents remain inside approved ABLife boundaries; developers/support normally use synthetic/redacted fixtures and sanitized diagnostics.
10. **Controlled third-party support access**, with rapid revocation/offboarding and secret rotation where appropriate.
11. **Deployment profiles/packs** to support CRM-only, Evidence-only, combined, no-document-sharing and future approved entity/jurisdiction profiles without code forks.
12. **Logical data partitioning first**, with a path to stronger physical isolation only when legal/residency/scale evidence justifies it.
13. **AI/model abstraction** through a model gateway/orchestrator rather than direct vendor-specific calls from domain modules.
14. **Workflow and approval policies as configuration/data**, not scattered hard-coded conditions.
15. **Modular monolith first for an approved custom/hybrid pilot**, with explicit module boundaries and event-ready contracts; do not introduce premature microservices/event infrastructure.
16. **Infrastructure-as-Code and versioned configuration** for repeatable environments after implementation authorization.
17. **Data export/vendor exit, backup/recovery and provider migration** must be testable before scale.
18. **Minimum-necessary infrastructure** for the 90-day pilot; no premature group-scale, Kubernetes, GPU fleet or sovereign build without an approved requirement.

---

## 4. Development process currently agreed

### Pre-Day-1 mobilization — v0.2 recommendation
Before the 90-day operational clock, establish:

- development/configuration partner selection criteria;
- NDA/confidentiality, IP, data/access, security, subcontractor and exit/handover terms;
- ABLife-owned/controlled repository/environment/account model;
- named third-party access and revocation model;
- no-document-sharing development/support model;
- acceptance/UAT/defect/support responsibilities;
- the authority/event that formally declares Day 1.

The exact contractual Day-1 rule remains a **DECISION REQUIRED** item.

### Pre-development
No application coding. Produce and approve:

- Requirements Register;
- Governance Gap Register;
- Decision & Discovery Register;
- RACI / decision-rights matrix;
- legal-entity model;
- data model;
- access/approval matrices;
- architecture plan;
- infrastructure bill of materials;
- security/privacy design;
- existing CRM/system fit-gap;
- vendor evaluation;
- test/acceptance strategy;
- cost model;
- detailed task schedule;
- Master PRD.

### After approval
Each independently approved section follows the controlled lifecycle and must meet its definition of done, tests, UAT and acceptance before dependent sections proceed.

Stage 2 must implement the approved **configure vs hybrid vs custom** path; capability sections do not automatically imply custom build.

---

## 5. Current v0.2 document-control status

Branch: `docs/v0.2-scalability-governance`

Controlled policy files:

- `project-docs/controlled/DOCUMENT_VERSIONING.md`
- `project-docs/controlled/CHANGELOG.md`
- `project-docs/controlled/ARTIFACT_MANIFEST.md`

Controlled v0.2 sources:

- Architecture Plan v0.2
- Full-Stack Technology Plan v0.2
- Development Stage-by-Stage Plan v0.2

Exact distributed DOCX artifact hashes and render-QA status are recorded in `ARTIFACT_MANIFEST.md`.

**Status:** DRAFT FOR REVIEW. No application coding authorization, no production-data authorization and no procurement authorization is implied.

---

## 6. Important unresolved decisions

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
- What identity, email, calendar, document repository, CRM, cloud and security systems already exist?
- Which existing CRM/contact system is assessed first and what fit-gap criteria determine configure vs hybrid vs custom?
- What jurisdictions, residency requirements, retention periods and prohibited data categories apply?
- What is the Management-confirmed flagship project and authorized evidence set?
- What are the real document/contact/user volumes and languages?
- Who resolves each category of evidence conflict?
- Who approves each outbound topic/category and through which channels?
- What constitutes a critical failure?
- What are the approval SLA and sign-off authorities for PRD sections?
- Is custom/hybrid development during the pilot approved, or must an established-platform configuration be selected?
- Which components must be hot-swappable versus replaceable through controlled migration?
- What downtime/recovery objectives apply by component?
- Who selects/contracts the third-party developer and what capability/security/handover criteria apply?
- What event formally starts Day 1 of the 90-day clock?
- What third-party access is permitted by environment, and what exceptional production-document support path is allowed?
- Which deployment profiles are required for the pilot?

---

## 7. Agent operating protocol

### Before starting any task
1. Read this file in full.
2. Read the relevant current source document(s) and current GitHub file(s).
3. Confirm the task is permitted under the current gate/status.
4. Identify the exact requirements/decisions supporting the task.
5. Check the active branch and current file version.
6. If authority is missing, stop and raise a question rather than assume.

### Before committing any material change
1. Re-fetch the file to detect concurrent-agent changes.
2. Make only the justified change.
3. Verify syntax/build/render/tests as applicable.
4. Inspect generated artifacts where applicable.
5. Recheck alignment with all hard rules.
6. Update version/change records.
7. Update this memory.

---

## 8. Change Log

### 2026-09-10 — ChatGPT — project governance/memory initialization

- **Branch:** `claude/ai-executive-intelligence-plan-kcgdni`
- **Files changed:** `PROJECT_MEMORY.md` created.
- **Reason:** user required persistent shared repo memory for ChatGPT, Claude, Antigravity and reviewers.
- **Verification:** repository metadata, README and historical HANDOFF were checked; repository confirmed as proposal/document-generation package, not running application.
- **Scope intentionally not changed:** no product/application code or client planning document was modified.
- **Blockers:** Master PRD not approved; no coding authorization.

### 2026-09-11 — ChatGPT — v0.2 controlled planning-document update

- **Branch:** `docs/v0.2-scalability-governance`, created from commit `f75482817a21504a34b6ec6a81d67d9d1156ef64`.
- **User authorization:** user explicitly required version control for all documents/work and instructed the three shared planning documents to be updated using the consultant feedback plus the newly defined scalable/replicable/customizable architecture direction, with changes clearly highlighted.
- **Controlled files added:**
  - `project-docs/controlled/DOCUMENT_VERSIONING.md`
  - `project-docs/controlled/CHANGELOG.md`
  - `project-docs/controlled/ARTIFACT_MANIFEST.md`
  - `project-docs/controlled/v0.2/ABLife_90_Day_Pilot_Architecture_Plan_v0.2.md`
  - `project-docs/controlled/v0.2/ABLife_90_Day_Pilot_Full_Stack_Technology_Plan_v0.2.md`
  - `project-docs/controlled/v0.2/ABLife_90_Day_Pilot_Development_Stage_by_Stage_v0.2.md`
- **Material architecture changes:** control-plane/data-plane model; one-core-platform/configuration approach; existing-CRM-first decision; CRM/provider adapters; ABLife-owned environments; no-document-sharing mode; controlled third-party access; credential revocation; deployment profiles/packs; scalable data partitioning; modular-monolith/event-ready scale path; IaC/versioned configuration.
- **Material technology-plan changes:** custom stack explicitly conditional; existing-system fit-gap first; ABLife ownership/handover; third-party/no-document-sharing controls; control plane; deployment profiles; developer-independence requirements.
- **Material development-plan changes:** pre-Day-1 developer selection/contracting/ownership/access controls; configurable 90-day start trigger; third-party vs ABLife responsibilities; existing-CRM-first discovery; configure/hybrid/custom Stage 2 split; measurable acceptance targets; P00 baseline; new clarification questions.
- **Change marking:** v0.2 DOCX uses yellow highlights for material changes; Markdown companions use `[V0.2 CHANGE]` markers.
- **Binary artifact verification:** exact v0.1/v0.2 DOCX SHA-256 hashes recorded in `ARTIFACT_MANIFEST.md`.
- **Render QA:** Architecture v0.2 — 14 pages inspected, no trailing blank page; Full-Stack v0.2 — 14 pages inspected; Development v0.2 — 16 pages inspected. No clipping/overlap defects observed in the reviewed render set.
- **Scope intentionally not changed:** no application source code, production schema, live integration or deployment configuration changed. The separate Full-Stack Development Subscription Cost Plan was not included in this v0.2 update.
- **Current status:** v0.2 documents are controlled drafts for review, not approved implementation baselines.
- **Remaining blockers:** Master PRD/gate approval; existing CRM/system inventory; legal-entity/access decisions; third-party contracting/access decisions; Day-1 trigger; vendor/residency/privacy/security decisions.
- **Next safe action:** review the v0.2 branch and documents; resolve comments/decisions; merge/adopt only after the required approval. No application coding before that approval.
