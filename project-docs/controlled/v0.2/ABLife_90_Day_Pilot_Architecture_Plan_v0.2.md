| ABLife / Acasys Group |
| --- |

# ABLife AI & CRM 90-Day Pilot - Architecture Plan

Logical, security, data, integration and deployment architecture for the controlled pilot.

| STATUS: DRAFT FOR MANAGEMENT / STAGE 1 ARCHITECTURE REVIEW - NOT AUTHORIZATION TO CODE |
| --- |

| Document purpose | Management-ready design baseline; not authorization to code or procure production infrastructure. |
| --- | --- |
| Source basis | ABLife AI & CRM 90-Day Pilot Plan v2.0; ABLife Ownership/Governance/Operations/Centralization Charts; current GitHub repository audit; approved user project constraints. |
| Control principle | Confirmed requirements, derived requirements, recommendations, and decisions required are kept separate. |
| Delivery rule | No application coding until the Master PRD and applicable section/gate are formally approved. |

**[V0.2 CHANGE]** Version 0.2 | 11 September 2026

**[V0.2 CHANGE]** CHANGE-MARKING LEGEND: Yellow-highlighted text identifies material additions or revisions introduced in Version 0.2. Unhighlighted text is carried forward from Version 0.1.

PRIVATE & CONFIDENTIAL - INTERNAL MANAGEMENT USE ONLY

## 1. Executive Architecture Summary

**[V0.2 CHANGE]** The pilot architecture is designed as a reusable ABLife platform supporting two independently controlled products - the Evidence & Executive Intelligence Assistant and the Human-Approved Strategic Relationship CRM - on shared governance, identity, policy, approval, audit and integration foundations. Version 0.2 adds a configuration-driven control plane, ABLife-owned environment model, no-document-sharing support mode, existing-CRM-first decision path, and deployment-profile approach so the platform can scale, be replicated, and be customized without maintaining separate codebases.

| Architecture decision boundary: This document defines the target logical architecture and the decisions needed to approve it. It does not select final vendors, authorize production data, or authorize application coding. |
| --- |

- Evidence Assistant: controlled retrieval from approved internal evidence with source status, citations, conflict detection and missing-evidence tracking.
- CRM: relationship ownership, pipelines, next actions, approvals, restricted communication controls and auditable corporate sending.
- Shared controls: corporate identity, least privilege, separation of duties, audit, monitoring, backup/recovery and incident response.
- Plug-and-play: external services are isolated behind documented adapters/interfaces wherever technically reasonable.
- Governance-aware: Holding, subsidiary, project/SPV, function, role and authority are treated as distinct dimensions rather than a flat company hierarchy.
- Controlled delivery: architecture and every dependent product section must be approved before implementation begins.
- **[V0.2 CHANGE]** Configuration/control plane: legal entities, roles, workflows, approval policies, feature flags, provider selections and deployment profiles are treated as configuration rather than hard-coded business logic.
- **[V0.2 CHANGE]** ABLife ownership: cloud tenants/accounts, repositories, secrets, databases, backups, monitoring and operational runbooks should be owned or controlled by ABLife wherever the approved operating model permits.
- **[V0.2 CHANGE]** Third-party isolation: contractors/support personnel receive named, minimum-necessary, revocable access; production documents and credentials are not shared by default.
- **[V0.2 CHANGE]** Replication model: one core platform and codebase can be deployed with different entity, jurisdiction, workflow, branding and integration profiles.

Source basis: Pilot Plan Part A-B (two separate coordinated pilots, staged approval, security/privacy controls); Governance Charts pp. 1-3 (Holding, five legal subsidiaries, centralized functions and subsidiary-retained responsibilities).

## 2. Architecture Principles and Non-Negotiable Controls

| ID | Principle | Architecture consequence | Status |
| --- | --- | --- | --- |
| A-01 | Two-pilot separation | Evidence and CRM remain logically separate and independently gateable. | Confirmed |
| A-02 | Evidence before assertion | AI answers must be grounded in authorized evidence and expose source status. | Confirmed |
| A-03 | Human authority | Sensitive outbound communication and material resolutions remain human-approved. | Confirmed |
| A-04 | Least privilege | Access is restricted by role/matter/entity and tested for unauthorized denial. | Confirmed |
| A-05 | Legal-entity awareness | Holding/subsidiary/project context must be represented in access and ownership. | Derived |
| A-06 | Provider isolation | External providers connect through stable internal interfaces/adapters. | User constraint |
| A-07 | Portable data | ABLife data, metadata, contacts, audit and configuration must be exportable. | Confirmed |
| A-08 | No silent assumptions | Unresolved decisions remain explicit and cannot harden into architecture. | Confirmed |
| A-09 | Environment isolation | Development/test environments do not receive uncontrolled production data. | Confirmed |
| A-10 | Section-by-section delivery | Dependent modules move from define->approve->build->test->accept. | User constraint |

### **[V0.2 CHANGE]** 2.1 Version 0.2 Scalability, Replication and Customization Model

- **[V0.2 CHANGE]** The target architecture is one core platform with modular products and extensions, not one codebase per subsidiary or jurisdiction.
- **[V0.2 CHANGE]** Core platform capabilities: identity normalization, organization/legal-entity model, authorization policy, workflow, approval, audit, configuration and integration registry.
- **[V0.2 CHANGE]** Products: CRM and Evidence Assistant remain independently gateable modules.
- **[V0.2 CHANGE]** Extensions: investor, partner, Travel/member, GCC and future business-specific capabilities should be configuration/extension packages rather than permanent forks where practical.
- **[V0.2 CHANGE]** Deployment packs should combine a base platform version with an entity profile, jurisdiction/policy profile, enabled-feature profile, workflow/approval configuration and adapter configuration.

## 3. System Context and Logical Architecture

The recommended logical architecture is shown below. Vendor names are intentionally omitted because Stage 1 must evaluate provider terms, region, data use, security, export, cost and integration before selection.

| Important: The adapter layer is not a promise that every infrastructure component can be hot-swapped with zero downtime. AI/OCR/email adapters can often be changed with little service impact; primary database, identity or document-repository migrations may require a controlled cutover. |
| --- |

### **[V0.2 CHANGE]** 3.1 Control Plane and Data Plane Separation

**[V0.2 CHANGE]** Version 0.2 separates how a deployment behaves from the business information it stores. The Control Plane holds configuration and policy; the Data Plane holds operational records, documents/metadata, derived indexes and audit events. This allows an approved configuration template to be replicated without copying ABLife business data.

- **[V0.2 CHANGE]** Control Plane: entity hierarchy, role scopes, approval rules, workflow definitions, feature flags, provider registry, deployment profiles, branding/localization and policy settings.
- **[V0.2 CHANGE]** Data Plane: contacts, relationships, tasks, communications, document metadata, retrieval indexes, conflicts, missing-evidence items and audit events.
- **[V0.2 CHANGE]** Configuration changes are privileged, versioned and audited; business data is never embedded into deployment templates.

## 4. Governance and Authorization Architecture

A simple Admin/Manager/User model is insufficient for the ABLife structure. Authorization must be capable of evaluating who the user is, which legal entity/project the data belongs to, what function/role the user holds, and the action being attempted.

| Dimension | Examples | Architecture use |
| --- | --- | --- |
| Identity | Named user, service account | Authentication and audit attribution |
| Role | Administrator, document owner, reviewer, relationship owner, approver, auditor, read-only | Base permissions |
| Legal entity | Holding, Air Travel, Global, Hospitality, Property & Real Estate, Commercial | Data and workflow scope |
| Project / matter | Flagship project, SPV, transaction, counterparty | Matter-based restriction |
| Function | Finance, operations, commercial, people, legal/risk, procurement | Shared-function access where approved |
| Action | View, create, edit, approve, export, communicate, administer | Enforcement decision |
| Authority | Operational responsibility vs legal approval authority | Prevents visibility from being mistaken for authority |

| Decision required: Cross-subsidiary visibility, Group-function access, Holding vs subsidiary approval authority, Project Company/SPV treatment, Internal Audit access, and Company Secretary workflow must be formally resolved before permissions are implemented. |
| --- |

## 5. Evidence Assistant Architecture

The Evidence Assistant is a controlled evidence-processing system, not a general chatbot. Every item must be registered, classified and access-scoped before it can support executive answers.

| Component | Job to be done | Key controls |
| --- | --- | --- |
| Document register | Create canonical identity and metadata for every source | ID, title, entity, owner, version/date, status, confidentiality, permitted roles, checksum, project/counterparty, review/expiry, authority |
| Parser/OCR | Extract searchable content while preserving source locators | Use native extraction where possible; OCR only when required; flag low confidence |
| Index/search | Make authorized evidence retrievable | Index metadata and source locators; retain original content; provider behind RetrievalStore interface |
| Pre-retrieval filter | Prevent restricted material influencing unauthorized answers | Authorization applied before model context |
| Reranking/context | Select relevant authorized passages | Configurable retrieval, version precedence and source-status ranking |
| Model gateway | Produce analysis from approved context | Provider-neutral interface, model/prompt version recorded, no hidden provider logic in domain layer |
| Citation/answer validator | Attach source/status/version and enforce absence/conflict responses | No evidence -> explicit absence; material conflict -> management resolution required |
| Conflict tracker | Create candidate conflict/variance issues | Both sources retained, named owner, human resolution |
| Missing-evidence tracker | Track requirements and blocked decisions | Owner, requested from, due date, reviewer, dependency, final evidence link |

## 6. CRM Architecture

The CRM is a relationship-control system. Generative AI is not required for the CRM to operate. AI-assisted drafting is a later gated capability and cannot bypass evidence or approval controls.

| Domain | Core objects / services | Control objective |
| --- | --- | --- |
| Identity & organization | Contact, organization, introducer/source, jurisdiction | Reliable relationship identity and source |
| Relationship ownership | Category, purpose, owner, backup owner, entity scope | Every active relationship has accountable ownership |
| Pipeline | Investor/family office, strategic partner, Travel/member, GCC boundary | Separate progression rules and stage status |
| Actions | Tasks, due dates, reminders, dormancy, reassignment | Disciplined follow-up without autonomous external reminders |
| Interaction history | Meetings, notes, communications, material outcomes | Approved history and commitments |
| Restrictions | Permission/preference, NDA, conflict/restriction flags, data status | Prevent inappropriate engagement |
| Approval engine | Draft, reviewer, management/legal approval, attachment controls | Sensitive author cannot self-approve |
| Communication gateway | Corporate email/messaging adapter | Only approved messages reach contacts; final content/attachments/recipients/approvers/time logged |
| Reporting | Stage, owner, overdue, activity, control exceptions | Pilot management and acceptance evidence |

## 7. Shared Platform Services

| Service | Purpose | Architecture requirement |
| --- | --- | --- |
| Identity integration | Corporate sign-in and MFA | OIDC/SAML standard interface; no local password store unless specifically approved |
| Authorization/policy | Enforce least privilege and entity/matter scope | Central policy service/library used by both products |
| Approval service | Reusable human approval workflow | Separation of duties, escalation, recorded decision and approver |
| Audit service | Trace material system activity | Ingestion, view/query, export, approval, send, config and deletion events |
| Configuration/feature flags | Enable controlled releases and provider switching | Environment-specific config; no credentials in code |
| Secrets management | Protect credentials/API keys | Dedicated secret store/KMS integration |
| Notification service | Internal reminders and workflow notifications | No external send without explicit communication approval path |
| Monitoring/alerting | Detect failures and security/operational anomalies | Central metrics/logs/traces, health checks and incident escalation |
| Backup/recovery | Protect application data and metadata | Documented RPO/RTO after Stage 1; recovery test before exit |

## 8. Data Architecture

The pilot should separate authoritative source documents from application metadata and derived indexes. The exact physical services remain subject to vendor and residency approval.

| Data class | System of record / storage principle | Notes |
| --- | --- | --- |
| Corporate source documents | Existing approved document repository preferred | The Evidence Assistant should reference authoritative sources rather than create an uncontrolled document silo |
| Document metadata | Relational application database | Entity, version/status, confidentiality, permissions, source locator, checksum, review/expiry |
| CRM operational records | CRM/relational system of record | Contacts, organizations, relationships, stages, tasks, permissions, approvals, history |
| Search/vector index | Derived, rebuildable index | Must not become the legal record; access metadata must support pre-retrieval filtering |
| Audit events | Central audit store with retention/export | Must support investigation and pilot evidence |
| Configuration | Versioned configuration plus secret references | Separate secrets from configuration; changes auditable |
| Backups | Encrypted managed backup / recovery copy | Region, retention, RPO/RTO remain Stage 1 decisions |

| Derived design requirement: Relational application design should use stable application repositories/services so a managed PostgreSQL provider can be changed without rewriting domain logic. Database migration is a controlled migration, not necessarily a hot swap. |
| --- |

### **[V0.2 CHANGE]** 8.1 Scalable Data Partitioning and Isolation Strategy

**[V0.2 CHANGE]** Every business record should be attributable to an approved entity/project/matter scope so access and later scaling do not require a rewrite. The pilot may start with logical partitioning, while the architecture must preserve a path to stronger physical isolation if a later legal, residency or scale requirement justifies it.

- **[V0.2 CHANGE]** Recommended logical scope attributes: entity_id; project/project_company where relevant; owner; classification; access/policy reference; jurisdiction where required.
- **[V0.2 CHANGE]** Scale path: shared relational service with logical isolation -> partitioning/read replicas as evidence requires -> separate databases/environments only where approved isolation requirements justify the additional complexity.

## 9. Integration and Plug-and-Play Adapter Architecture

| Interface | Primary job | Contract requirements | Replacement expectation |
| --- | --- | --- | --- |
| IdentityProvider | Authenticate user / claims | OIDC/SAML claims mapping, MFA policy reference, logout, user disable | Controlled migration; may require user-session cutover |
| MailProvider | Send approved corporate messages | Recipients, approved content, attachments, approval ID, provider message ID, delivery status | Low-disruption adapter change after contract tests |
| CalendarProvider | Read/create approved meeting events | Time zones, organizer, attendees, external IDs | Low-disruption adapter change |
| ModelProvider | Inference for evidence/drafting | Model ID, prompt/context, token limits, timeout, usage, response metadata | Replaceable after evaluation/regression tests |
| EmbeddingProvider | Generate embeddings | Input, model/version, dimensions, batch limits | May require re-indexing on model change |
| OCRProvider | OCR/layout extraction | File/page input, confidence, page locators, error states | Replaceable; output normalizer required |
| DocumentRepository | Fetch/store authorized sources or derived files | File ID, version, ACL/metadata, checksum, export | Migration/cutover expected |
| RetrievalStore | Search/rerank authorized content | Query, filters, top-k, locators, score | Replaceable if index can be rebuilt |
| NotificationProvider | Internal alerts/reminders | User/channel, template, status | Low-disruption change |

### **[V0.2 CHANGE]** 9.1 Existing CRM Discovery and CRM Abstraction

**[V0.2 CHANGE]** Existing CRM discovery is the first CRM architecture decision. Stage 1 must determine whether ABLife already has a CRM or relationship system that can satisfy the pilot through configuration and approved extensions. Custom CRM services are only a conditional path if the fit-gap assessment and Management approval justify them.

- **[V0.2 CHANGE]** Mode A - Existing CRM: integrate through a CRM adapter and retain CRM-native capabilities where controls are adequate.
- **[V0.2 CHANGE]** Mode B - Hybrid: retain the existing CRM as system of record and add only missing ABLife governance/approval/evidence capabilities.
- **[V0.2 CHANGE]** Mode C - Custom CRM: only after explicit approval where existing/configurable platforms cannot meet the accepted requirements.

### **[V0.2 CHANGE]** 9.2 Provider Plugin / Integration Registry

**[V0.2 CHANGE]** Adapters should be registered as replaceable capabilities rather than scattered vendor-specific calls. The registry should identify provider type, enabled implementation, configuration reference, supported capabilities, health status, version and region/processing boundary where relevant.

## 10. Environment and Deployment Architecture

| Environment | Allowed data | Purpose | Minimum controls |
| --- | --- | --- | --- |
| Development | Synthetic only | Application work, unit tests, local/dev integration | No production secrets/data; isolated credentials; developer logging only |
| Test / UAT | Synthetic + specifically approved test evidence | Integration, security, access, acceptance and adversarial tests | Representative policies; separate secrets; audit enabled |
| Controlled Pilot | Approved live pilot data only | Limited users, flagship evidence, verified contacts and approved integrations | Production-class identity, least privilege, audit, backup, monitoring, incident process |
| Scale / production | Outside initial approval | Potential post-pilot scale architecture | Separate Management decision after Stage 4 |

Deployment pattern recommendation: package custom services as portable containers where a custom/hybrid path is approved, and use environment-specific infrastructure-as-code so hosting can move between approved providers with controlled migration effort.

### **[V0.2 CHANGE]** 10.1 ABLife-Owned Environments and Third-Party Access

**[V0.2 CHANGE]** The preferred operating model is for ABLife to own or control the cloud tenant/account, source repository, deployment pipeline, secrets store, databases, storage, backups and monitoring used for controlled pilot operation. Third-party developers receive named, least-privilege access rather than hosting the platform in contractor-owned infrastructure.

- **[V0.2 CHANGE]** Developer/support access is named, MFA-protected, environment-specific, logged, time-bound where practical, and revocable without moving the platform or data.
- **[V0.2 CHANGE]** Contractor departure/offboarding must support account revocation, affected-secret rotation and continued operation without dependence on contractor-controlled infrastructure.

### **[V0.2 CHANGE]** 10.2 No-Document-Sharing Operating Mode

**[V0.2 CHANGE]** The Evidence Assistant must support an operating mode in which authoritative ABLife documents remain inside the approved ABLife repository/environment and are not routinely copied to a third-party developer. Connectors retrieve only what the authorized runtime requires. Support is designed around synthetic fixtures, redacted diagnostics, metadata, metrics and error codes rather than production document access.

- **[V0.2 CHANGE]** Third parties do not receive source documents by default.
- **[V0.2 CHANGE]** Production-content access, if ever required for a support incident, must be specifically approved, minimum necessary, logged and revoked after the approved window.
- **[V0.2 CHANGE]** Diagnostic logging must avoid document bodies, sensitive CRM content and secrets.

### **[V0.2 CHANGE]** 10.3 Deployment Profiles and Deployment Packs

**[V0.2 CHANGE]** Replication should be driven by versioned deployment profiles rather than source-code forks. Profiles can enable CRM-only, Evidence-only, combined, no-document-sharing, or future jurisdiction/entity-specific operating modes while keeping the core codebase aligned.

## 11. Security Architecture

- Corporate SSO and MFA where available; no uncontrolled shared credentials.
- Least-privilege authorization evaluated before document retrieval and before sensitive actions.
- Separation of administration, document approval, outbound approval and audit authority.
- Encryption in transit and at rest; managed secret storage; no secrets in source code or client-side storage.
- Upload validation and malware scanning for untrusted files before processing.
- Security headers, CSP, dependency scanning, secret scanning and controlled CI/CD.
- Central audit trail for ingestion, viewing/querying, export, approval, sending, configuration and deletion.
- Incident triage, containment, notification, lessons learned and offboarding processes.
- Production data prohibited from development logs/test systems.
- Adversarial testing for prompt injection, hidden text, malicious documents and attempts to bypass access control.

### **[V0.2 CHANGE]** 11.1 Credential Revocation and Controlled Support Access

**[V0.2 CHANGE]** Privileged support access should use separate named identities and approved roles. Emergency or elevated access should be temporary where practical, fully logged, and followed by revocation/secret rotation where the incident warrants it. ABLife retains control of root/owner credentials and recovery mechanisms.

## 12. Resilience, Backup and Provider Failure

| Failure scenario | Required behaviour | Pilot decision / metric |
| --- | --- | --- |
| AI provider unavailable | CRM and non-AI functions continue; Evidence Assistant returns controlled service error | Timeout/retry/fallback policy TBD |
| OCR unavailable | Queue affected scans; existing searchable evidence remains available | Recovery window TBD |
| Email provider unavailable | Do not lose approval state or duplicate sends; approved message remains pending | Retry/idempotency policy required |
| Search/index unavailable | Do not generate ungrounded answers; return controlled unavailable state | Recovery objective TBD |
| Database unavailable | Application enters controlled unavailable/read-only mode depending design | RPO/RTO TBD |
| Identity unavailable | No bypass login; fail closed for protected functions | Emergency access policy TBD |
| Provider migration | Export, validate, migrate, regression test, cutover, rollback | Service impact documented before migration |

### **[V0.2 CHANGE]** 12.1 Scale Path - Modular Monolith First, Event-Ready Evolution

**[V0.2 CHANGE]** For the pilot, the recommended custom/hybrid implementation pattern is a modular monolith with explicit module boundaries, not an early microservices estate. This minimizes operational complexity while preserving later extraction of high-load modules if evidence justifies it.

- **[V0.2 CHANGE]** Module boundaries should exist for organization/policy, CRM, approvals, communication, document registry, ingestion, retrieval, AI orchestration and audit.
- **[V0.2 CHANGE]** Internal domain events should be defined for important state changes so reporting/integration consumers can be decoupled later without introducing heavyweight event infrastructure during the pilot.
- **[V0.2 CHANGE]** Infrastructure-as-code and versioned configuration are required for repeatable environment creation once implementation is authorized.

## 13. Architecture by 90-Day Stage

| Pilot stage | Architecture job to be done | Infrastructure posture | Exit evidence |
| --- | --- | --- | --- |
| Gate 0 - Days 1-5 | Confirm authority, scope, owners, boundaries and decision rights | Documentation/project controls only | Written authorization to design; no production ingestion |
| Stage 1 - Weeks 1-2 | Inventory current systems; finalize data/access models; evaluate vendors; approve architecture/security/cost/test plan | Design and vendor trials only unless separately authorized | Architecture, privacy/security, cost and pilot design approved |
| Stage 2 - Weeks 3-4 | Prove isolated prototype on approved non-production data | Dev + test/UAT environment, synthetic CRM, limited documents, AI/search/logging/backup | No critical access/security defect; agreed prototype accuracy |
| Stage 3 - Weeks 5-8 | Operate limited real pilot under human review | Controlled pilot environment and corporate integrations | Stable operation, traceable approvals, acceptable error rate, no unresolved high-risk incident |
| Stage 4 - Weeks 9-12 | Audit accuracy/security/privacy/value/cost; test export/recovery/exit | Same pilot environment plus exit/recovery exercises | Management records stop/remediate/extend/scale separately for both pilots |

## 14. Minimum Infrastructure Bill of Materials - Logical

| Capability | Required for pilot? | Reuse first? | Final product/vendor |
| --- | --- | --- | --- |
| Source control / CI | Yes | Existing GitHub can be reused | GitHub or approved equivalent |
| Corporate identity / MFA | Yes | Yes | TBD after inventory |
| Email / calendar | Stage 3 live CRM | Yes | TBD after inventory |
| Authoritative document repository | Yes | Yes | TBD after inventory |
| Relational application data store | Yes | N/A | PostgreSQL-compatible recommended; provider TBD |
| Search/vector index | Stage 2+ | N/A | TBD; provider behind interface |
| AI model service | Evidence Stage 2+ | N/A | TBD after provider/security review |
| OCR | Conditional | N/A | Only for scans/images; provider TBD |
| Secrets/KMS | Yes once implementation starts | Use hosting provider where suitable | TBD |
| Audit/monitoring | Yes | Use existing corporate platform where suitable | TBD |
| Backup/recovery | Yes | Use managed platform where suitable | TBD |
| Dedicated GPU/server fleet | No current requirement | No | Only if later Stage 1 evidence justifies self-hosting |

## 15. Architecture Decisions and Clarifications Required

| ID | Question | Architecture impact |
| --- | --- | --- |
| ARC-001 | Which legal entities are in the first pilot? | Determines data partitions, roles and approvals. |
| ARC-002 | Can one contact/relationship span multiple subsidiaries, and what history may be shared? | Determines CRM relationship and authorization model. |
| ARC-003 | Which Group functions may access cross-subsidiary data? | Determines policy rules. |
| ARC-004 | Are Project Companies/SPVs in Stage 1 scope? | Determines entity/project schema. |
| ARC-005 | Who approves Holding matters vs subsidiary matters? | Determines approval engine. |
| ARC-006 | What identity, email, calendar, DMS and CRM systems exist today? | Determines reuse and integrations. |
| ARC-007 | Which jurisdictions/data-residency rules apply to the first release? | Determines cloud/provider architecture. |
| ARC-008 | What is the flagship project and authorized evidence set? | Required before live evidence ingestion. |
| ARC-009 | What document/contact volumes and languages are in scope? | Determines capacity, OCR and test design. |
| ARC-010 | Is custom/hybrid development approved after Stage 1, or must the pilot remain configuration-first? | Determines whether this target architecture is implemented as custom services or mapped onto established platforms. |
| ARC-011 | Which external components require hot-swap capability versus controlled migration? | Determines portability engineering cost. |
| ARC-012 | What downtime/RPO/RTO is acceptable by component? | Determines resilience and hosting tier. |
| ARC-013 | Who owns privacy, security, incident response and independent audit? | Determines operational governance. |
| ARC-014 | What is the approval SLA for architecture and product sections? | Determines actual delivery timeline. |

## 16. Architecture Approval Criteria

- Legal-entity and access model approved or all unresolved items explicitly recorded with safe temporary constraints.
- Two-pilot logical separation preserved.
- No path allows unauthorized documents to influence AI answers.
- No path allows sensitive outbound communication to bypass human approval.
- External dependencies have documented interfaces, configuration, failure behaviour and exit strategy.
- Development, test/UAT and controlled-pilot data boundaries are explicit.
- Audit, backup, recovery, export and incident processes are testable.
- Vendor/data-region/privacy/security decisions are approved before production/live data.
- Stage 2 implementation scope, task schedule and cost are approved before coding begins.

| Recommended Management decision: Approve this document as the Stage 1 architecture baseline for detailed vendor/technology evaluation. Do not treat it as approval to code, load production data, or procure group-scale infrastructure. |
| --- |

## **[V0.2 CHANGE]** 17. Version History

| Version | Date | Status | Material changes |
| --- | --- | --- | --- |
| 0.1 | 9 Sep 2026 | Initial controlled draft | Initial pilot architecture baseline. |
| **[V0.2 CHANGE]** 0.2 | 11 Sep 2026 | Controlled update for review | Added scalable/replicable control-plane model; existing-CRM-first branch; ABLife-owned environments; no-document-sharing mode; controlled third-party access; deployment profiles/packs; scalable data partitioning; modular-monolith/event-ready scale path. |
