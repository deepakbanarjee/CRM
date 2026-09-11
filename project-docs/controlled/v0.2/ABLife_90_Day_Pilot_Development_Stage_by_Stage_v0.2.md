ABLife AI & CRM 90-Day Pilot

Stage-by-Stage Development and Controlled Delivery Plan

**[V0.2 CHANGE]** Version 0.2 | 11 September 2026

**[V0.2 CHANGE]** CHANGE-MARKING LEGEND: Yellow-highlighted text identifies material additions or revisions introduced in Version 0.2. Unhighlighted text is carried forward from Version 0.1.

Status: DRAFT FOR MANAGEMENT REVIEW — NO CODING AUTHORIZED

| Purpose: Explain, in practical development terms, what will be done at each stage of the 90-day pilot, what will be delivered, what must be approved before moving forward, and what is explicitly not allowed until approval. |
| --- |

Source basis: ABLife AI & CRM 90-Day Pilot Plan v2.0; ABLife Ownership/Governance/Operations charts; approved project constraints communicated for this PRD process.

## 1. Executive Development Approach

The development programme will not begin with coding. The first objective is to convert the pilot plan and governance model into an approved, traceable Product Requirements Document (PRD), architecture, data model, access model, test plan, cost model, and detailed delivery schedule. Only after the relevant section is approved will implementation begin.

| Mandatory delivery rule: DEFINE → REVIEW → APPROVE → BUILD/CONFIGURE → TEST → UAT → ACCEPT → RELEASE. Dependent work does not move forward until the current section has met its exit criteria. |
| --- |

- The Evidence & Executive Intelligence Assistant and Strategic Relationship CRM remain logically separate and are independently gateable.
- No production data, live contact migration, external AI-assisted outbound activity, or later-stage deployment occurs without the applicable written gate approval.
- The current pilot plan prefers configuring established platforms during the first 90 days. Custom or hybrid development is therefore a decision to be confirmed in Stage 1, not assumed.
- Where development is approved, external providers will be isolated behind documented adapters/interfaces so they can be changed with minimal impact on core business logic.
- No application code will be changed in the current GitHub repository until the PRD, architecture and applicable implementation section are approved.

### **[V0.2 CHANGE]** 1.1 Version 0.2 Change Summary

- **[V0.2 CHANGE]** Added a pre-Day-1 mobilization stage for developer/vendor selection, contracting, access model, ABLife ownership and handover obligations.
- **[V0.2 CHANGE]** Clarified that the 90-day clock begins only when Management declares Day 1 after required mobilization prerequisites are complete; the exact contractual start rule remains subject to approval.
- **[V0.2 CHANGE]** Made existing-CRM/system discovery the first technology decision in Stage 1.
- **[V0.2 CHANGE]** Added third-party responsibility boundaries, no-document-sharing development/support controls and ABLife-owned environment requirements.
- **[V0.2 CHANGE]** Added measurable pilot acceptance targets from the 90-Day Pilot Plan and a requirement to validate sample sizes/critical-failure definitions before binding use.
- **[V0.2 CHANGE]** Added scalability/replication work: control-plane configuration, deployment profiles and reusable workflow/approval packs where custom/hybrid development is approved.

## 2. What “Development” Means in This Pilot

| Activity | Before PRD Approval | After Relevant Approval |
| --- | --- | --- |
| Requirements analysis | Allowed | Continues under change control |
| Governance / legal-entity modelling | Allowed | Implemented after approval |
| Architecture and interface design | Allowed | Implemented after approval |
| Vendor evaluation / proof of capability | Allowed if authorized | Configured/contracted if approved |
| Wireframes / process mock-ups | Allowed | Refined into released screens |
| Database schema design | Allowed | Schema implementation only after approval |
| Application coding | NOT ALLOWED | Allowed section by section |
| Live data ingestion | NOT ALLOWED | Only after Stage 2 exit and specific approval |
| Live contact migration | NOT ALLOWED | Stage 3 only after approval |
| Autonomous external sending | NOT ALLOWED | Remains prohibited in pilot |

### **[V0.2 CHANGE]** 2.1 Pre-Day-1 Mobilization - Developer Selection, Contracting and Ownership Setup

**[V0.2 CHANGE]** RECOMMENDED CONTROL: The 90-day operational clock should not start simply because a proposal is signed. Management should declare Day 1 after the required mobilization prerequisites below are complete. The exact commercial/start-date treatment is a DECISION REQUIRED item for the final SOW.

- **[V0.2 CHANGE]** Select the development/configuration partner using capability, security, handover, availability, conflict and cost criteria.
- **[V0.2 CHANGE]** Execute NDA/confidentiality, IP ownership/licensing, data-processing/access, security, subcontractor and exit/handover terms before privileged access is granted.
- **[V0.2 CHANGE]** Establish ABLife-owned/controlled source repository and approved environment/account ownership before implementation access.
- **[V0.2 CHANGE]** Define third-party access by environment, named user, privilege, approval, logging, expiry/revocation and emergency elevation.
- **[V0.2 CHANGE]** Agree the no-document-sharing development/support model: synthetic/redacted fixtures by default; exceptional production-content access only when specifically approved.
- **[V0.2 CHANGE]** Agree section approval, UAT, defect severity, support, response time and acceptance evidence responsibilities.
- **[V0.2 CHANGE]** Confirm who can authorize Day 1 of the 90-day pilot.

## 3. Stage Overview

| Stage | Timing | Primary Job to Be Done | Exit Decision |
| --- | --- | --- | --- |
| Gate 0 — Authorization | Days 1–5 | Confirm authority, boundaries, owners, decision rights and budget-control method. | Authorize Stage 1 design only. |
| Stage 1 — Design & Evidence Control | Weeks 1–2 | Complete PRD, governance, architecture, data/access models, vendor evaluation, test plan, cost and detailed schedule. | Approve or hold Stage 2 implementation. |
| Stage 2 — Safe Prototype | Weeks 3–4 | Configure/build only approved sections in isolated non-production using sample/synthetic data; prove controls. | Approve or hold controlled live pilot. |
| Stage 3 — Controlled Live Pilot | Weeks 5–8 | Operate limited real evidence and verified contacts with human approval and weekly review. | Approve or hold audit/exit stage. |
| Stage 4 — Audit & Decision | Weeks 9–12 | Measure controls, value, accuracy, export/recovery and operational readiness. | STOP / REMEDIATE / EXTEND / SCALE. |
| **[V0.2 CHANGE]** Mobilization — before Day 1 | Before 90-day clock | Select/contract delivery partner; establish ABLife ownership, access controls, handover terms and readiness. | Management declares Day 1 / HOLD. |

### **[V0.2 CHANGE]** 3.1 Third-Party / ABLife Responsibility Boundary

- **[V0.2 CHANGE]** ABLife responsibilities: approve scope/gates; own or control repositories/environments/data; nominate owners/approvers; provide approved source systems and test users; approve exceptional production access; accept/reject sections.
- **[V0.2 CHANGE]** Third-party responsibilities: implement only approved scope; use named minimum-necessary access; protect credentials; work from synthetic/sanitized data unless specifically approved; maintain traceability, tests, documentation and handover artifacts; promptly report incidents/uncertainty.
- **[V0.2 CHANGE]** Shared responsibilities: resolve decisions, maintain the risk/decision registers, review test evidence, manage changes and verify exit/handover.

## 4. Gate 0 — Authorization (Days 1–5)

### Job to be done

Establish who has authority to sponsor, decide, approve, fund and stop the pilot before any implementation activity begins.

### Development activities

- Create the formal pilot charter and scope boundary.
- Confirm sponsor, accountable owners, Management lead, document owners, relationship leads, technical/security owner and reviewers.
- Create the Decision & Discovery Register and initial risk register.
- Confirm how section-by-section approval will work, including approval authority and target review turnaround.
- Record the temporary position for unresolved items; temporary assumptions must have an authority, expiry and operational limitation.
- Authorize vendor/platform evaluation and security/privacy assessment, but not live deployment.

### Deliverables

| ID | Deliverable |
| --- | --- |
| G0-01 | Pilot Charter |
| G0-02 | Stakeholder / RACI baseline |
| G0-03 | Decision & Discovery Register |
| G0-04 | Initial Risk Register |
| G0-05 | Approval and change-control process |
| G0-06 | Budget-control framework |
| G0-07 | Stage 1 authorization record |

| Gate 0 stop condition: No coding, production ingestion or live-contact activity. Exit only when written authorization to perform Stage 1 design is recorded. |
| --- |

## 5. Stage 1 — Design and Evidence Control (Weeks 1–2)

This is the most important design stage. The objective is to remove ambiguity before implementation. Stage 1 should return a fully costed and testable Stage 2 proposal.

### 5.1 Workstream A — Current-State Discovery

- **[V0.2 CHANGE]** FIRST TECHNOLOGY DECISION: identify and assess the current CRM/contact-management system before selecting or designing any custom CRM implementation. Record fit-gap against approved relationship, workflow, approval, audit, export and access requirements.
- Inventory current identity/SSO, email, calendar, document repositories, CRM/spreadsheets, cloud/security tooling and existing integrations.
- Inventory pilot users, contact volumes, document volumes, file types, scan/OCR requirements, languages and current data-quality issues.
- Identify the authoritative system of record for documents and for relationship/contact data.

### 5.2 Workstream B — Governance and Access Design

- Translate Holding Company, subsidiaries, Project Companies/SPVs, projects/assets, central functions and subsidiary functions into the system model.
- Define which users can view, create, edit, approve, export and communicate for each legal entity, matter/project and relationship.
- Define separation of duties for administrator, document owner, reviewer, relationship owner, approver, auditor and read-only roles.
- Map Holding vs subsidiary decision authority without assuming that visibility equals legal authority.

### 5.3 Workstream C — CRM Process and Data Design

- Validate actual investor/family office, partner/counterparty and Travel/member stages with business users.
- Define contact, organization, relationship, owner, backup owner, stage, status, next action, meeting, communication, restriction, NDA, approval and retention fields.
- Define duplicate handling, dormant relationship rules, owner reassignment and configurable follow-up cadence.
- Define outbound approval workflow and restricted-topic/attachment rules.

### 5.4 Workstream D — Evidence Assistant Design

- Define the document register and mandatory metadata before AI retrieval is allowed.
- Define citation rules for PDF, DOCX, XLSX and image/OCR evidence.
- Define document-status priority, conflict/variance handling, missing-evidence workflow and source-access filtering.
- Create the Management-approved test-question set and define what constitutes a critical failure.

### 5.5 Workstream E — Technical Architecture

- Select the target pattern: configured established platforms, approved custom solution, or controlled hybrid.
- Design Development, Test/UAT and Controlled Pilot environments.
- Define the adapter/interface architecture for identity, email, calendar, AI, OCR, document storage, search and other external providers.
- Define secrets, encryption, audit logging, monitoring, backup/recovery, export and incident-management controls.
- Define provider replacement, migration and rollback requirements without making an unsupported universal zero-downtime promise.
- **[V0.2 CHANGE]** Where custom/hybrid development is being considered, define the control-plane configuration model for entity hierarchy, workflows, approvals, feature flags, deployment profiles and provider registry.
- **[V0.2 CHANGE]** Define how one core codebase can be replicated through configuration/deployment packs rather than separate subsidiary or jurisdiction forks.
- **[V0.2 CHANGE]** Define ABLife-owned environment, repository, root credential, backup, monitoring and handover requirements before contractor implementation access.

### 5.6 Stage 1 Deliverables

| ID | Deliverable | Approval / Use |
| --- | --- | --- |
| S1-01 | Master PRD | Product/Management baseline |
| S1-02 | Requirements Traceability Matrix | Maps requirement → design → test |
| S1-03 | Governance and Legal-Entity Model | Defines organizational scope |
| S1-04 | Role / Access / Approval Matrix | Security and authority baseline |
| S1-05 | CRM Data and Process Model | CRM implementation baseline |
| S1-06 | Evidence / Document Model | Evidence implementation baseline |
| S1-07 | Logical and Deployment Architecture | Technology baseline |
| S1-08 | Technology / Vendor Decision Matrix | Configure vs custom/hybrid decision |
| S1-09 | Security / Privacy Design | Live-data precondition |
| S1-10 | Test and Acceptance Plan | Stage gates |
| S1-11 | Infrastructure Bill of Materials | Procurement/provisioning |
| S1-12 | Detailed Task Schedule | Task-level timeline and dependencies |
| S1-13 | Stage 2 Costed Implementation Proposal | Authorization request |

| Stage 1 exit: Architecture, data, privacy/security, cost, test criteria and pilot design must be approved. Until that approval, application coding remains on hold. |
| --- |

## 6. Stage 2 — Safe Prototype (Weeks 3–4)

Stage 2 begins only after the applicable Stage 1 approval. The objective is to prove the design in a non-production environment using sample/sanitized documents and synthetic CRM contacts.

### **[V0.2 CHANGE]** 6.0 Stage 2 Path Split - Configure, Hybrid or Custom

**[V0.2 CHANGE]** Stage 2 work depends on the Stage 1 fit-gap decision. Path A configures the existing/selected platform; Path B adds only approved hybrid extensions; Path C implements custom modules only where separately justified and approved. The micro-sections below describe required capabilities, not an automatic mandate to custom-build each capability.

### 6.1 Development sequence — approved micro-sections

| Section | What we will develop/configure | Primary acceptance test |
| --- | --- | --- |
| P01 Shared foundation | Environment configuration, deployment controls, configuration management, secrets and feature flags. | Environment can be deployed/reverted without production data. |
| P02 Identity & policy | Authentication, role/entity/matter scope and least-privilege enforcement. | Unauthorized user cannot view restricted record/document. |
| P03 Organization model | Holding, subsidiary, project/SPV and user/entity associations. | Entity boundaries match approved governance model. |
| P04 Audit foundation | Audit events for login, access, create/update, export, approval, configuration and deletion. | Required event trail is complete and reviewable. |
| P05 CRM core | Synthetic organizations, contacts, relationships, owner/backup owner and basic data validation. | Required fields enforced. |
| P06 Pipelines & follow-up | Approved pipeline stages, status, next action, due date, dormancy and reassignment. | Workflow behaves as approved. |
| P07 Approval engine | Relationship-lead and additional Management/legal approvals where required. | Author cannot self-approve sensitive outbound. |
| P08 Communication gateway | No-send/synthetic delivery path, restricted-topic/attachment checks and audit capture. | Restricted test message is blocked/escalated. |
| P09 Document registry | Metadata, version, status, classification, entity/project linkage and access roles. | Unclassified evidence cannot support executive answer. |
| P10 Retrieval & citations | Authorized retrieval, source ranking, explicit absence response and citations. | Citation and access tests meet agreed threshold. |
| P11 Conflict workflow | Candidate variance/conflict issue with both sources and human owner. | No autonomous adjudication. |
| P12 Missing evidence | Requirement, owner, due date, dependency, blocked decision and final evidence link. | Gap can be tracked to resolution. |
| P13 Security/adversarial | Prompt injection, hidden/manipulated content, export, backup/recovery and access tests. | No unresolved critical security/access defect. |
| **[V0.2 CHANGE]** P00 Existing-platform/configuration baseline | Implement the Stage 1 configure/hybrid/custom decision; establish control-plane/configuration baseline and adapter boundary before domain customization. | Selected path can be deployed in non-production, exported/handed over, and disabled/reverted without production data. |

### 6.2 How each section is shipped

1. Specification reviewed against the PRD and traceability matrix.
2. Section approval recorded before implementation.
3. Implementation/configuration completed only for the approved scope.
4. Automated/functional/security tests executed as applicable.
5. Section demonstration completed.
6. UAT outcome recorded.
7. Section accepted or returned for remediation.
8. Accepted section is versioned/frozen before dependent work proceeds.

| Stage 2 exit: No critical security/access defect and prototype performance meets the Stage 1-approved threshold. Management receives a visible non-production demonstration before controlled live use. |
| --- |

### **[V0.2 CHANGE]** 6.3 Measurable Pilot Acceptance Targets (to be validated in Stage 1)

**[V0.2 CHANGE]** The 90-Day Pilot Plan proposes the following targets. Stage 1 must still approve the test-set size, sampling method and definition of critical failure before these become binding contractual acceptance criteria.

- **[V0.2 CHANGE]** Evidence: 100% of pilot documents have required metadata/classification.
- **[V0.2 CHANGE]** Evidence: 100% of factual answers show a source or explicit absence response.
- **[V0.2 CHANGE]** Evidence: citation-location accuracy target >=95%.
- **[V0.2 CHANGE]** Evidence: answer/support classification target >=90%.
- **[V0.2 CHANGE]** Evidence: 100% of defined unauthorized-access tests are denied.
- **[V0.2 CHANGE]** Evidence: 100% of identified conflicts retain source evidence and a human owner.
- **[V0.2 CHANGE]** Security/privacy: zero unresolved critical findings at the relevant exit gate.
- **[V0.2 CHANGE]** CRM: 100% of pilot contacts carry owner, source, category, stage, next action and data-status fields required by the approved model.
- **[V0.2 CHANGE]** CRM: 100% of restricted-topic test messages are blocked or escalated.
- **[V0.2 CHANGE]** CRM: 100% of sensitive outbound pilot messages carry required approval and attachment audit.
- **[V0.2 CHANGE]** CRM: zero autonomous external sends.
- **[V0.2 CHANGE]** CRM: active relationships with a current next action target >=90%.

## 7. Stage 3 — Controlled Live Pilot (Weeks 5–8)

Stage 3 introduces a limited amount of approved real information. This is not group-wide production deployment.

### 7.1 Week-by-week operating plan

| Week | Development / Configuration | Controlled Operations | Review |
| --- | --- | --- | --- |
| Week 5 | Provision approved pilot environment; enable approved identity, document and CRM modules. | Onboard small approved user group; load only approved flagship evidence and verified contacts. | Daily issue triage during initial activation. |
| Week 6 | Remediate approved defects; tune retrieval, workflow and access rules without widening scope. | Run real Q&A, relationship follow-up and internal draft/approval workflows. | Weekly accuracy, access and adoption review. |
| Week 7 | Complete approved adapter/integration refinements; test graceful failure of non-critical services. | Continue controlled use; review conflicts, missing evidence and overdue actions. | Security/privacy/data-quality checkpoint. |
| Week 8 | Stabilize release candidate; freeze material feature changes unless approved as remediation. | Collect final Stage 3 evidence and user feedback. | Formal Stage 3 exit review. |

### 7.2 Controls that remain mandatory

- No autonomous external sends.
- Sensitive answers and outbound drafts remain subject to human review.
- Live contacts must be verified and have appropriate permission/source records.
- Approved corporate channels only.
- Every material approval and send must be auditable.
- Weekly review of errors, conflicts, missing evidence, adoption and feedback.
- Stop conditions apply immediately to the affected pilot.

| Stage 3 exit: Stable operation, traceable approvals, acceptable error rate and no unresolved high-risk incident. |
| --- |

## 8. Stage 4 — Audit, Handover and Management Decision (Weeks 9–12)

Stage 4 is not primarily a feature-development phase. Its job is to prove the controls, operational readiness, portability and value of each pilot before any scale decision.

### 8.1 Development / technical work

- Remediate only approved findings required to complete the pilot safely.
- Freeze feature scope so evaluation results are comparable.
- Complete export, backup/restore and vendor-exit tests.
- Validate offboarding and access revocation.
- Run provider adapter/contract tests where practical without destabilizing the live pilot.
- Finalize operational procedures, administrator guidance and user training materials.

### 8.2 Audit dimensions

| Area | What is measured |
| --- | --- |
| Accuracy | Evidence answer/support classification, citation accuracy, conflict handling and missing-evidence behaviour. |
| CRM discipline | Record completeness, owner coverage, next actions, approval history and restricted-message control. |
| Security | Access denial, secrets, logs, incidents, export restrictions and unresolved findings. |
| Privacy | Purpose, controller/owner, minimization, retention/deletion, transfers and rights/incident procedures. |
| Operations | Availability, issue resolution, backup/restore, user support and offboarding. |
| Portability | Export completeness, usable data formats, provider replacement/exit procedure. |
| Value | Management usefulness, reduced search/follow-up effort, adoption and operational friction. |
| Cost | Actual build/configuration effort, licences, AI/cloud usage, migration and support implications. |

### 8.3 Final management options

| Decision | Meaning |
| --- | --- |
| STOP | Pilot does not justify continuation; preserve/export records and close safely. |
| REMEDIATE | Resolve defined deficiencies before further live use. |
| EXTEND | Continue controlled pilot for a defined period/use case without group-wide scale. |
| SCALE | Prepare separately approved Phase 3/group-scale architecture and commercial plan. |

## 9. Environment and Infrastructure by Stage

| Stage | Environment | Data allowed | Core infrastructure |
| --- | --- | --- | --- |
| Gate 0 | Project/document controls only | No application data | Git/source/document control; registers; planning tools. |
| Stage 1 | Design/vendor evaluation | Sample metadata if approved | Architecture and vendor evaluation; no production environment required. |
| Stage 2 | Isolated non-production | Synthetic/sanitized + approved sample docs | App/config platform, test DB, test storage, search, AI, optional OCR, test identity, audit, monitoring, secrets, backup. |
| Stage 3 | Controlled pilot | Approved flagship evidence + limited verified contacts | Production-class pilot identity/access, database/storage, retrieval, CRM, corporate integrations, audit, backup, monitoring. |
| Stage 4 | Same controlled pilot | Same approved scope | Plus export/restore/exit test capability and finalized operational tooling. |

## 10. Definition of Done for Every Development Section

- Requirement IDs and source are identified.
- Dependencies and decisions are resolved or explicitly recorded.
- Design/specification is approved.
- Implementation/configuration is complete only for approved scope.
- Security/privacy implications are addressed.
- Automated or manual acceptance tests pass.
- Audit evidence is retained where applicable.
- Demo/UAT is completed.
- Approver records ACCEPTED, REMEDIATION REQUIRED or HOLD.
- Documentation, configuration and rollback information are updated.
- No unresolved critical defect remains.

## 11. Development Controls and Optimization

| Control / Optimization | Why it matters |
| --- | --- |
| Governance before schema | Prevents rebuilding the data model after entity/authority questions are answered. |
| Configure before custom-build | Aligns with the 90-day pilot plan and reduces implementation risk. |
| Contract-first adapters | Makes plug-and-play measurable rather than aspirational. |
| Synthetic test data first | Allows rapid safe testing before privacy/legal clearance for live data. |
| Acceptance tests written with requirements | Prevents late disagreement about whether a section is complete. |
| Independent section approvals | Limits blast radius and keeps Management in control of spend/scope. |
| Feature flags and rollback | Allows safe activation/deactivation of integrations and approved functions. |
| One Decision Register | Prevents undocumented verbal decisions becoming permanent architecture. |
| Freeze after acceptance | Reduces regression and uncontrolled scope changes. |
| Parallelize only independent work | Compresses time without creating hidden dependencies. |

## 12. Key Clarifications Required Before Development Authorization

| ID | Question | Development impact |
| --- | --- | --- |
| DEV-01 | Has Management approved custom/hybrid development during the 90-day pilot, or must the solution remain configured established platforms only? | Determines whether Stage 2 contains coding or configuration/integration only. |
| DEV-02 | Which legal entities are in the first release? | Controls data model, permissions, reporting and approvals. |
| DEV-03 | Can contacts/relationships span multiple subsidiaries and what cross-entity visibility is allowed? | Controls CRM relationship and authorization design. |
| DEV-04 | What existing CRM, identity, email, calendar and document systems must be reused? | Determines integration scope and licence needs. |
| DEV-05 | What is the confirmed flagship project and authorized evidence set? | Required before project-specific live ingestion. |
| DEV-06 | How many pilot users, contacts, documents/pages/scans and languages? | Determines capacity, cost and test scope. |
| DEV-07 | Who approves each section and what is the approval turnaround target? | Determines schedule and critical path. |
| DEV-08 | Which external components must be hot-swappable versus replaceable through controlled migration? | Determines adapter complexity and cost. |
| DEV-09 | What downtime/recovery objective is acceptable by component? | Determines HA/fallback design. |
| DEV-10 | Who owns privacy, security, incident response and independent review? | Required for Stage 2/3 authorization. |
| DEV-11 | What constitutes a critical failure? | Required to make acceptance thresholds binding. |
| DEV-12 | What is the Stage 2 budget ceiling and procurement authority? | Determines what can actually be provisioned/built. |
| **[V0.2 CHANGE]** DEV-13 | Who selects/contracts the third-party developer, and what minimum capability/security/handover criteria apply? | Required before implementation mobilization. |
| **[V0.2 CHANGE]** DEV-14 | What event formally starts Day 1 of the 90-day clock after mobilization? | Controls contractual schedule and delay attribution. |
| **[V0.2 CHANGE]** DEV-15 | Will all pilot environments, repositories and root credentials be ABLife-owned/controlled from the start? | Controls ownership, access and handover design. |
| **[V0.2 CHANGE]** DEV-16 | What third-party access is permitted in Dev, UAT and Controlled Pilot, and what exceptional production-document access process is allowed? | Controls no-document-sharing/support model. |
| **[V0.2 CHANGE]** DEV-17 | Which existing CRM/contact system is assessed first, and who approves the fit-gap outcome? | Determines configure/hybrid/custom path. |

## 13. Management Approval Statement — Recommended

| Recommended decision: Approve Gate 0 and Stage 1 requirements, governance, architecture, cost and detailed planning work. Keep application coding, live data, live contacts and production integration on hold until the Stage 1 design package and the relevant development sections receive written approval. Thereafter, implementation will proceed section by section under DEFINE → REVIEW → APPROVE → BUILD/CONFIGURE → TEST → UAT → ACCEPT → RELEASE. |
| --- |

## 14. Source Alignment

This plan operationalizes the approved 90-day stage gates and governance model, while adding the agreed plug-and-play, no-coding-before-approval, and section-by-section delivery controls. Items not determined by the source documents remain explicit decisions rather than assumptions.

## **[V0.2 CHANGE]** 14. Version History

| Version | Date | Status | Material changes |
| --- | --- | --- | --- |
| 0.1 | 9 Sep 2026 | Initial controlled draft | Initial stage-by-stage delivery baseline. |
| **[V0.2 CHANGE]** 0.2 | 11 Sep 2026 | Controlled update for review | Added pre-Day-1 developer selection/contracting and start control; third-party/ABLife responsibilities; existing-CRM-first decision; configure/hybrid/custom Stage 2 split; measurable acceptance targets; ABLife-owned environment and scalable configuration/deployment-pack requirements. |
