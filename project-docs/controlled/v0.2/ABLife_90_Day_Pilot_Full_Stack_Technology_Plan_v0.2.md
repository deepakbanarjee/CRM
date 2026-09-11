| ABLife / Acasys Group |
| --- |

# ABLife AI & CRM 90-Day Pilot - Full-Stack Technology Plan

Reference technology stack, development tooling, software services, environment model and vendor-replacement strategy.

| STATUS: DRAFT REFERENCE STACK - FINAL PRODUCTS SUBJECT TO STAGE 1 APPROVAL |
| --- |

| Document purpose | Management-ready design baseline; not authorization to code or procure production infrastructure. |
| --- | --- |
| Source basis | ABLife AI & CRM 90-Day Pilot Plan v2.0; ABLife Ownership/Governance/Operations/Centralization Charts; current GitHub repository audit; approved user project constraints. |
| Control principle | Confirmed requirements, derived requirements, recommendations, and decisions required are kept separate. |
| Delivery rule | No application coding until the Master PRD and applicable section/gate are formally approved. |

**[V0.2 CHANGE]** Version 0.2 | 11 September 2026

**[V0.2 CHANGE]** CHANGE-MARKING LEGEND: Yellow-highlighted text identifies material additions or revisions introduced in Version 0.2. Unhighlighted text is carried forward from Version 0.1.

PRIVATE & CONFIDENTIAL - INTERNAL MANAGEMENT USE ONLY

## 1. Executive Summary

**[V0.2 CHANGE]** This document defines a technology decision framework for the 90-day pilot, not a preselected custom stack. Version 0.2 makes existing-system discovery - especially existing CRM capability - the first technical decision, assumes third-party delivery must operate inside ABLife-controlled boundaries, strengthens ownership and handover requirements, and adds the control-plane/configuration model required for scalable, repeatable and customizable deployments.

| Repository finding: The connected CRM GitHub repository is currently a proposal/document-generation package, not running CRM or Evidence Assistant software. No production application stack should be assumed to exist or be reusable. |
| --- |

| Stack rule: Use existing corporate identity, email/calendar and document systems where they satisfy approved requirements. Do not buy duplicates before inventory and fit-gap review. |
| --- |

### **[V0.2 CHANGE]** 1.1 Version 0.2 Change Summary

- **[V0.2 CHANGE]** Existing CRM/system discovery is now the first technology decision before any custom CRM stack is considered.
- **[V0.2 CHANGE]** Reference technologies are conditional examples only; no vendor or custom stack is approved by this document.
- **[V0.2 CHANGE]** Third-party developers work through controlled, revocable access to ABLife-owned/controlled repositories and environments.
- **[V0.2 CHANGE]** A no-document-sharing support model is added for sensitive evidence workflows.
- **[V0.2 CHANGE]** A configuration/control plane, provider registry, deployment profiles and reusable policy/workflow packs are added for scalability and replication.
- **[V0.2 CHANGE]** Handover now requires ABLife control of code, infrastructure definitions, configuration, credentials, data, backups, monitoring and operating documentation.

## **[V0.2 CHANGE]** 2. Stage 1 Technology Decision Sequence - Existing Systems First

| Path | When used | Technology approach | Status |
| --- | --- | --- | --- |
| Path A - Configuration-first | Default 90-day position unless changed by approval | Established CRM + approved document repository/retrieval platform + shared corporate identity/security; minimal custom integration | Pilot-plan default |
| Path B - Custom/hybrid modular application | Only if Stage 1 shows configuration cannot meet control/value requirements and Management approves custom work | Portable web/API services, provider adapters, PostgreSQL-compatible data layer, evidence service, approval service, controlled integrations | Reference stack in this document |

| Decision required: Stage 1 must explicitly choose Path A, Path B, or a controlled hybrid. The full-stack recommendations below do not override the Pilot Plan. |
| --- |

**[V0.2 CHANGE]** The technology decision must follow this order:

1. **[V0.2 CHANGE]** Inventory current CRM/contact systems, identity, email/calendar, document repository, cloud/security tooling and contractual constraints.
2. **[V0.2 CHANGE]** Run fit-gap assessment against approved CRM, Evidence, governance, access, approval, audit, portability and privacy requirements.
3. **[V0.2 CHANGE]** Reuse/configure existing systems where they meet requirements safely.
4. **[V0.2 CHANGE]** Add approved extensions/adapters only for proven gaps.
5. **[V0.2 CHANGE]** Consider a custom/hybrid module only where the gap cannot be closed acceptably and Management approves the additional lifecycle cost.

## 3. Technology Selection Criteria

- Exportability and vendor exit before convenience.
- Standards-based interfaces: HTTP/REST, OIDC/SAML, SMTP/API adapters, SQL/PostgreSQL, object/document APIs.
- Strong TypeScript/Python ecosystems and automated testing support.
- Portable deployment through containers where custom services are approved.
- Managed services for the pilot where they reduce operational risk without creating unacceptable lock-in.
- Data region, retention, training terms, subprocessors and auditability evaluated before vendor selection.
- Minimum number of infrastructure services necessary to prove the pilot.
- No dedicated GPU fleet unless Stage 1 proves a self-hosting requirement.
- AI orchestration kept thin so model/provider replacement does not require rewriting domain logic.
- **[V0.2 CHANGE]** ABLife ownership/control of repositories, environments, root credentials, backups, audit data and exit artifacts.
- **[V0.2 CHANGE]** Configuration-driven workflows, legal-entity scopes, approval policies and feature flags so replication does not require code forks.
- **[V0.2 CHANGE]** Third-party support must function without routine access to production documents or unrestricted production credentials.

## **[V0.2 CHANGE]** 4. Conditional Reference Stack - Custom/Hybrid Path Only (Not Preselected)

**[V0.2 CHANGE]** IMPORTANT: This section is a reference implementation pattern only. It becomes relevant only after the existing-system fit-gap and Stage 1 approval authorize custom/hybrid development. It is not an approved purchasing list or a commitment to these technologies.

| Layer | Reference choice | Why | Replaceable alternatives | Status |
| --- | --- | --- | --- | --- |
| Web frontend | Next.js + React + TypeScript | Mature enterprise web stack, server/client rendering, strong routing/forms/testing | React/Vite, Angular | Recommendation |
| UI system | Accessible component library + ABLife design tokens | Consistent controls, fast pilot delivery, accessibility | MUI, Radix/shadcn, Ant Design | Recommendation |
| Core application API | NestJS + TypeScript | Modular services, validation, dependency injection, testability, shared types with frontend | FastAPI, ASP.NET Core, Spring Boot | Recommendation |
| Evidence/AI service | Python + FastAPI | Best ecosystem for document parsing, retrieval, evaluation and AI tooling | Node/TypeScript service | Recommendation |
| Relational database | PostgreSQL 16+ compatible managed service | Portable SQL system, transactions, JSON support, row-level controls, broad hosting options | Azure SQL / MySQL only if enterprise constraints require | Recommendation |
| Vector/search pilot | PostgreSQL full-text + pgvector where sufficient | Minimizes extra infrastructure and keeps index rebuildable | OpenSearch, Qdrant, Pinecone, other managed vector service | Recommendation / validate performance |
| Background jobs | Database-backed job queue or lightweight worker service | Avoids another mandatory service during pilot; supports ingestion, notifications, retries | Redis/BullMQ, Celery/Redis, Temporal | Recommendation |
| Documents | Existing approved DMS via adapter; object storage for derived artefacts only | Preserves authoritative repository and avoids uncontrolled copies | SharePoint, Google Drive, S3-compatible, Azure Blob | Decision after inventory |
| Identity | OIDC/SAML against corporate IdP | Standards-based SSO/MFA; no local password architecture by default | Entra ID, Google Identity, Okta, Auth0 | Decision after inventory |
| AI model | Enterprise model API behind ModelProvider interface | No application lock-in; provider evaluated on data terms/region/security/quality | Multiple approved providers | Decision |
| OCR | OCRProvider adapter | Only scans need OCR; page/confidence metadata normalized | Azure Document Intelligence, Google Document AI, AWS Textract, other | Conditional |
| Email/calendar | Provider adapters to existing corporate suite | Preserves approved corporate channel and mailbox/calendar ownership | Microsoft Graph, Google APIs | Decision after inventory |
| Deployment | Docker containers + managed container/serverless platform | Portable runtime and controlled environment promotion | Azure Container Apps, AWS ECS/Fargate, Cloud Run, Kubernetes later | Recommendation |
| Infrastructure as code | OpenTofu/Terraform-compatible definitions | Repeatable environments and provider portability | Cloud-native IaC | Recommendation |
| CI/CD | GitHub Actions | Existing source-control context, review gates, automated tests/deployments | Azure DevOps/GitLab CI | Recommendation |
| Observability | OpenTelemetry instrumentation + approved log/trace backend | Vendor-neutral telemetry collection | Sentry, Azure Monitor, CloudWatch, Datadog, Grafana stack | Recommendation |
| Secrets | Managed cloud secret store/KMS | No secrets in source/config files | Key Vault, Secrets Manager, Secret Manager | Decision with hosting provider |
| Feature flags | Config/DB-backed flags initially | Safe section-by-section activation without another SaaS dependency | Unleash, LaunchDarkly | Recommendation |
| **[V0.2 CHANGE]** Control plane / configuration | Versioned internal configuration service/model | Entity hierarchy, workflows, approvals, feature flags, deployment profiles and provider registry without code forks | Equivalent configuration store or platform-native configuration | Recommendation |
| **[V0.2 CHANGE]** Event interface | In-process/domain-event contract for pilot; external broker only if later justified | Decouples reporting/integrations and preserves scale path without premature microservices | Managed queue/event bus later if evidence requires | Recommendation |

### **[V0.2 CHANGE]** 4.1 Control Plane, Deployment Profiles and Reusable Packs

**[V0.2 CHANGE]** The custom/hybrid path must avoid separate source-code forks for subsidiaries or markets. A versioned control plane should hold organization/entity configuration, workflow and approval policies, feature flags, provider selections, branding/localization and deployment profiles. Reusable deployment packs combine the common platform with approved entity/jurisdiction/use-case configuration.

## 5. Frontend Plan

| Area | Plan | Key requirements |
| --- | --- | --- |
| Application shell | Responsive web application; role-aware navigation | No restricted module metadata leaked to unauthorized users |
| Executive Evidence UI | Question input, cited answer, status/version badges, confidence/limitations, conflict/missing-evidence callouts | Every factual answer cites authorized source or states absence |
| CRM workspace | Organizations, contacts, relationship owner, pipeline, next action, tasks, communication/approval history | Entity scope and ownership visible; controlled actions |
| Approval inbox | Pending approvals, reasons, attachments, restricted-topic indicators, approve/reject/comment | No self-approval for sensitive outbound |
| Admin/configuration | Role/entity mappings, adapter configuration references, feature flags, controlled lookup values | Privileged role only; changes audited |
| Accessibility | Keyboard navigation, semantic labels, contrast, focus states | Target WCAG-aligned implementation; exact compliance level to be approved |
| Internationalization | Language-ready UI strings | Actual pilot languages remain a discovery decision |

## 6. Backend and Domain-Service Plan

| Service/module | Responsibilities | Important boundaries |
| --- | --- | --- |
| API gateway / BFF | Session/user context, request validation, rate limits, route to domain services | No business authorization solely in the browser |
| Identity/policy service | Normalize IdP claims; evaluate role/entity/project/action policy | Fail closed; audit sensitive denials/actions |
| Organization service | Holding/subsidiary/project/SPV master references | Does not invent legal authority; values come from approved configuration |
| CRM service | Contacts, organizations, relationships, pipelines, tasks, dormancy, reassignment | CRM remains operational without generative AI |
| Approval service | Approval requests, approver routing, second-level review, rejection/expiry | Reusable across CRM and Evidence workflows |
| Communication service | Prepare approved message payload, provider send, idempotency, provider status | Provider adapter only; no autonomous sensitive send |
| Document registry | Document metadata, status, permissions, checksum, source reference | Unclassified content cannot support executive answers |
| Ingestion service | Parse/OCR, normalize locators, chunk/index, retry/error queue | Original source preserved; derived data rebuildable |
| Retrieval service | Authorized search/filter/rerank/context assembly | Access filtering before model |
| AI/model gateway | Model calls, version/usage metadata, structured outputs | Provider-specific SDK hidden behind interface |
| Citation/answer service | Validate source locators, status/version, absence/conflict rules | Blocks unsupported answer state |
| Conflict service | Candidate variance/conflict issues, owner/resolution workflow | AI cannot close legal/factual issue autonomously |
| Missing-evidence service | Requirement/evidence gap, owner, due date, blocked decision | Management control only; not automatic readiness certification |
| Audit service | Material event capture and export | Independent from user-editable business history |
| **[V0.2 CHANGE]** Control-plane/configuration service | Versioned entity profiles, workflow/approval policies, provider registry, deployment profiles, feature flags | Privileged changes only; configuration audited; no business data embedded in templates |

## 7. Database and Data Model Plan

The relational model should be normalized enough to maintain clear legal-entity/relationship ownership while allowing future reporting. Exact schema is a Stage 1 PRD output, not finalized here.

| Domain | Indicative core tables/entities | Notes |
| --- | --- | --- |
| Organization/governance | legal_entity, business_unit/function, project, project_company, user_role_scope | Exact Holding/subsidiary/SPV relationships require Management confirmation |
| CRM | organization, contact, relationship, pipeline, stage_history, task, meeting, communication, permission, nda_status, restriction | One contact may potentially have multiple relationships; cross-entity visibility unresolved |
| Approvals | approval_request, approval_step, approver, decision, attachment_reference | Immutable material decision history recommended |
| Documents | document, version, source_location, classification, access_scope, checksum, review_date, approval_authority | Authoritative source remains external DMS where possible |
| Retrieval | chunk, locator, index_reference, embedding_reference | Derived/rebuildable; ACL metadata required |
| Evidence control | conflict_issue, conflict_source, missing_requirement, evidence_link, resolution | Human ownership/resolution |
| Audit | audit_event, actor, action, target, entity_scope, correlation_id, timestamp, outcome | Retention/export rules TBD |

| Database portability: Use standard PostgreSQL features wherever practical. Provider-specific extensions must be documented, isolated, and justified. A provider migration still requires controlled export/import and validation. |
| --- |

## 8. Evidence / AI Software Stack

| Capability | Recommended implementation approach | Vendor lock-in control |
| --- | --- | --- |
| PDF extraction | Native PDF text/structure extraction before OCR | Parser abstraction; preserve page and source coordinates |
| DOCX extraction | Heading/paragraph/table-aware extraction with generated version-specific locators | File-type extractor interface |
| XLSX extraction | Workbook/sheet/cell-range extraction preserving displayed values and formulas where supported | File-type extractor interface |
| OCR | Use only for scanned/image content; capture page/confidence metadata | OCRProvider adapter + normalized output |
| Chunking | Structure-aware chunks with source locators and ACL metadata | Internal chunk schema independent of AI provider |
| Embedding | EmbeddingProvider interface; model/version recorded | Index can be rebuilt if provider/model changes |
| Search | Keyword + semantic retrieval with metadata filters | RetrievalStore interface; PostgreSQL/pgvector acceptable for pilot if tests pass |
| Reranking | Optional reranker if test evidence shows benefit | Reranker interface; not hard-coded |
| LLM inference | ModelProvider interface with structured response schema | No direct model calls from UI/domain modules |
| Answer validation | Source/citation check, missing-evidence and conflict policy enforcement | Internal deterministic controls separate from LLM |
| Evaluation | Golden test set, citation-location accuracy, unauthorized-access tests, adversarial documents | Provider changes require regression suite before activation |

| AI boundary: The model may draft, summarize, compare and identify candidate conflicts from authorized evidence. It does not independently determine legal, title, tax, regulatory, valuation or investment-readiness conclusions. |
| --- |

### **[V0.2 CHANGE]** 8.1 No-Document-Sharing Development and Support Mode

**[V0.2 CHANGE]** The preferred evidence-development model keeps authoritative documents in the approved ABLife repository/runtime boundary. Developers should normally work with synthetic/redacted fixtures. Production support should rely on sanitized logs, metadata, metrics and reproducible test cases; any exceptional content access requires explicit approval and is time-bound and logged.

## 9. CRM Software Stack

| Capability | Custom/hybrid implementation | Configuration-first equivalent |
| --- | --- | --- |
| Contacts/organizations | Core CRM service + relational model | Established CRM standard objects |
| Relationship categories | Configurable relationship type and entity scope | Multiple pipelines/objects/tags |
| Pipelines/stages | Configuration-driven state model | CRM pipelines/workflows |
| Tasks/reminders | Task service and scheduled internal notifications | CRM tasks/automation |
| Approvals | Shared approval service with no-self-approval rules | CRM workflow/approval extension if it meets requirements |
| Communication | Corporate provider adapter + idempotent send/audit | Native corporate mail integration with approval control |
| Reporting | SQL/materialized views or app reporting | CRM dashboards/reports |
| Audit | Central application audit + provider IDs | Native audit plus exported central audit if necessary |

## 10. Integration Stack and Adapter Contract

Every external provider adapter should expose a small internal contract and convert vendor-specific errors/data into a stable application format. This is the mechanism that makes the system plug-and-play rather than merely calling multiple vendors.

| Adapter | Minimum contract | Test before activation |
| --- | --- | --- |
| Identity | authenticate/claims mapping, user disable/offboard signal, group/role mapping | Valid user, disabled user, missing claim, unauthorized entity, session expiry |
| Email | send approved payload, attachment refs, idempotency key, message ID/status | Success, timeout, provider error, retry, duplicate prevention, audit correlation |
| Calendar | read/create/update approved event, external event ID | Time-zone, duplicate, revoked permission, update conflict |
| AI model | model ID, context, structured output, token/usage metadata, timeout | Golden QA, citation support, restricted prompt, timeout/failure |
| OCR | file/page input, text/layout/confidence/page locators | Searchable PDF bypass, scan success, low confidence, malformed file |
| DMS | fetch authorized version, metadata/ACL reference, checksum/export | Version change, revoked access, missing file, large file |
| Search | index, delete, query+filters, return locators/scores | ACL filter, rebuild, deleted source, empty result |

### **[V0.2 CHANGE]** 10.1 ABLife Ownership and Third-Party Delivery Model

**[V0.2 CHANGE]** Third-party development is an operating model, not an ownership transfer. ABLife should own or control the source repository, cloud tenant/account used for the pilot, CI/CD configuration, secrets store, databases/storage, backups, monitoring and production/pilot administrator credentials. Contractors receive the minimum access required to perform approved tasks.

- **[V0.2 CHANGE]** No routine sharing of ABLife production documents with contractors; use synthetic fixtures and sanitized diagnostics for development/support.
- **[V0.2 CHANGE]** Named third-party accounts, MFA, environment-specific roles, access logging and rapid revocation are required.
- **[V0.2 CHANGE]** Root/owner credentials and recovery paths remain under ABLife control.

## 11. Development Toolchain

| Area | Reference tool/approach | Purpose |
| --- | --- | --- |
| Source control | GitHub repositories / protected branches | Code review, traceability, releases |
| Work tracking | GitHub Issues/Projects initially | Requirements->story->task traceability and section approvals |
| Code quality | ESLint/Prettier for TypeScript; Ruff/Black for Python | Consistent code and CI checks |
| Unit tests | Vitest/Jest for TS; pytest for Python | Domain logic and parser/retrieval tests |
| API tests | Automated integration tests against isolated services | Request validation, auth, policies, failure paths |
| Browser/E2E | Playwright | Critical user journeys and approval workflows |
| Contract tests | Provider adapter contract suite | Safe provider replacement |
| Security scanning | Dependency/SAST/secret scanning in CI | Prevent known vulnerabilities/secrets entering builds |
| Containers | Docker | Portable local/test/hosted runtime |
| IaC | OpenTofu/Terraform-compatible | Repeatable infrastructure and environment isolation |
| API documentation | OpenAPI generated from backend definitions | Stable integration contracts |
| Telemetry | OpenTelemetry SDKs | Portable traces/metrics/log correlation |

### **[V0.2 CHANGE]** 11.1 Handover and Developer-Independence Requirements

- **[V0.2 CHANGE]** Repository history, build/deploy instructions, infrastructure-as-code, database migrations, configuration schemas, adapter contracts and test suites must be complete enough for a replacement team to continue operation.
- **[V0.2 CHANGE]** ABLife must retain access to all data exports, backups, monitoring, provider accounts or transferable contracts, and all environment/recovery documentation.
- **[V0.2 CHANGE]** Contractor offboarding must include account revocation, affected-secret rotation, open-issue handover, build/deployment verification and confirmation that no ABLife production data remains in contractor-controlled locations.

## 12. Environment, Branching and Release Plan

| Concern | Plan |
| --- | --- |
| Branches | Short-lived feature branches or trunk-based development with protected main; exact workflow set before coding |
| Pull requests | Required for material changes; requirement/task ID included; automated checks must pass |
| Environments | Dev -> Test/UAT -> Controlled Pilot. Production/group-scale remains a separate post-pilot decision |
| Configuration | Environment variables/configuration service; secrets only through secret manager references |
| Feature flags | Every section can be enabled/disabled without redeploying unrelated features where practical |
| Database migrations | Versioned forward migrations + backup/rollback plan; tested in non-production first |
| Deployment | Automated CI/CD after approval; manual approval gate for controlled-pilot releases |
| Release artifacts | Versioned container/app build, migration version, config version, test evidence and change record |
| Rollback | Previous compatible application version retained; database rollback strategy documented per migration |

## 13. Testing Stack and Quality Gates

| Test layer | What must be proven | Release effect |
| --- | --- | --- |
| Unit | Domain rules, stage transitions, self-approval denial, policy functions, parsers | Blocks merge on failure |
| Integration | Database, queue/jobs, adapters, audit correlation | Blocks environment promotion |
| Contract | Alternative provider implements same internal contract | Required before provider change |
| E2E | Executive Q&A, CRM relationship, approval, controlled send, offboarding | Required for section acceptance |
| Evidence quality | Citation location, answer/support classification, absence/conflict handling | Required for Stage 2/3 gates |
| Authorization | Defined unauthorized cases denied and cannot influence retrieval | Critical gate; any leakage is stop condition |
| Adversarial | Prompt injection, hidden text, malicious documents, corrupted files | Required before live evidence use |
| Backup/recovery | Restore database/configuration and validate integrity | Required before Stage 4 exit |
| Security assessment | Threat-model checks and independent penetration test if approved/required | Critical findings block live/scale |

## 14. Minimum Hardware / Runtime Profile

| No dedicated AI hardware required: If the pilot uses approved enterprise AI APIs, there is no current requirement for local GPU servers. Dedicated sovereign/self-hosted inference is outside the baseline and must be separately sized and approved. |
| --- |

| Item | Reference minimum for planning | Status / caveat |
| --- | --- | --- |
| End-user device | Existing supported corporate laptop/desktop with modern browser | Reuse existing; corporate endpoint/security policy applies |
| Developer workstation | 4+ CPU cores, 16 GB RAM, SSD; 32 GB recommended when running multiple containers | Reference recommendation, not a Pilot Plan requirement |
| Local server | Not required for shared-cloud/custom-hybrid pilot | Only if residency/security decision requires it |
| GPU | Not required | Only for separately approved self-hosted models |
| Development storage | Sufficient encrypted local/remote storage for source code and synthetic fixtures; no production document corpus | Exact GB depends on test fixtures |
| Pilot hosting | Managed web/API runtime + relational DB + search/index + secret store + audit/monitoring + backups | Capacity sized after user/document/query volumes |
| Scanner | Conditional | Only where paper evidence must be digitized |

## 15. Software / Service Procurement Map

| Capability | Need to buy now? | First action |
| --- | --- | --- |
| Git/source control | No - existing GitHub connection available | Confirm organizational ownership/repository strategy before development |
| Identity | No | Inventory current corporate IdP and licensing |
| Email/calendar | No | Inventory current corporate suite and integration permissions |
| Document repository | No | Identify authoritative repository and access model |
| CRM product | No | Run Stage 1 fit-gap evaluation against requirements |
| Managed PostgreSQL | No before architecture approval | Price approved region/tier after volumes and residency are known |
| AI provider | No before provider/security review | Evaluate enterprise terms, region, retention/training, quality and cost |
| OCR | No before document sample analysis | Estimate scanned-page volume and languages |
| Monitoring/security services | No blanket purchase | Reuse existing corporate tooling where it meets requirements |
| Dedicated GPU/sovereign infrastructure | No | Only scope if data-classification/legal requirement makes it necessary |

## 16. Stage-by-Stage Full-Stack Activation

| Stage | What is active | What remains disabled |
| --- | --- | --- |
| Gate 0 | Documentation, repository/issue tracking, decision register | Application code, live data, vendor production provisioning |
| Stage 1 | Architecture prototypes/vendor trials if specifically authorized; no production ingestion | Live contacts, project ingestion, AI-assisted outbound, product coding until PRD/section approval |
| Stage 2 | Dev/Test stack, synthetic CRM, limited approved non-sensitive documents, model/search/OCR test integrations, full audit tests | Live contact sending and unrestricted production data |
| Stage 3 | Controlled pilot stack, approved corporate IdP, verified contacts, approved flagship evidence, corporate email/calendar adapters, human approvals | Autonomous external sends, excluded investment/financial workflows, group-wide scale |
| Stage 4 | Same controlled stack plus export/restore/provider-exit tests and management reporting | Scale until separate decision |

## 17. Key Clarifications Before Final Stack Approval

| ID | Question |
| --- | --- |
| STACK-001 | What corporate identity, email/calendar and document platforms already exist? |
| STACK-002 | Is there an existing CRM or contact spreadsheet, and what record volume/quality exists? |
| STACK-003 | Which countries/entities and hosting regions are in first-release scope? |
| STACK-004 | What document count, page volume, scan percentage and languages must be supported? |
| STACK-005 | How many pilot users, contacts, concurrent users and expected Q&A volume? |
| STACK-006 | Which AI providers are acceptable for enterprise evaluation, and may data be processed by their APIs? |
| STACK-007 | Must any data remain within a specific country/tenant/private network? |
| STACK-008 | Is the custom/hybrid stack approved after Stage 1, or will the first 90 days remain configuration-first? |
| STACK-009 | Which external services require immediate provider failover versus controlled replaceability? |
| STACK-010 | What downtime, RPO and RTO targets apply to identity, database, search and communication? |
| STACK-011 | Which channels are included in pilot outbound: email only, or approved messaging as well? |
| STACK-012 | Is an independent penetration test required before Stage 3 or only before scale? |
| STACK-013 | What internal monitoring/SIEM/backup tooling should be reused? |
| STACK-014 | Who administers production/pilot infrastructure after handover? |
| **[V0.2 CHANGE]** STACK-015 | Who owns the GitHub organization/repository and the pilot cloud/provider accounts at handover? |
| **[V0.2 CHANGE]** STACK-016 | What access may third-party developers receive in Dev, UAT and Controlled Pilot, and who approves temporary elevation? |
| **[V0.2 CHANGE]** STACK-017 | Must the Evidence pilot operate with no document sharing to the development vendor, and what exceptional support path is permitted? |
| **[V0.2 CHANGE]** STACK-018 | What existing CRM must be assessed first, and what objective fit-gap criteria determine configure vs hybrid vs custom? |
| **[V0.2 CHANGE]** STACK-019 | Which configuration/deployment profiles are required in the pilot: CRM-only, Evidence-only, combined, no-document-sharing, or others? |

## 18. Recommended Full-Stack Approval

| Recommended Management position: Approve this as the reference technology plan for Stage 1 evaluation only. Require the team to return with the selected Path A/Path B architecture, vendor comparison, confirmed existing-system reuse, security/privacy review, runtime cost, task-level schedule and section-by-section implementation scope before coding. |
| --- |

Source basis: Pilot Plan: architecture/vendor evaluation, established-platform default, access/security controls, Stage 1 design outputs, Stage 2 isolated prototype, Stage 3 controlled live use and Stage 4 export/recovery/exit tests. Governance Charts: legal-entity and centralized-vs-subsidiary responsibility model.

## **[V0.2 CHANGE]** 19. Version History

| Version | Date | Status | Material changes |
| --- | --- | --- | --- |
| 0.1 | 9 Sep 2026 | Initial controlled draft | Initial reference stack and delivery-path baseline. |
| **[V0.2 CHANGE]** 0.2 | 11 Sep 2026 | Controlled update for review | Changed to existing-systems-first decision framework; made custom stack explicitly conditional; added ABLife ownership, third-party access/no-document-sharing model, control plane, reusable deployment profiles, event-ready scale path and handover requirements. |
