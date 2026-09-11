# ABLife AI & CRM — Controlled Document Change Log

## v0.2 — 11 September 2026

Status: **Controlled draft for review. No application coding authorization.**

This update applies to three planning documents:

1. ABLife 90-Day Pilot Architecture Plan
2. ABLife 90-Day Pilot Full-Stack Technology Plan
3. ABLife 90-Day Pilot Development Stage-by-Stage Plan

Material changes are highlighted in yellow inside each v0.2 DOCX. Readable Markdown companions use the marker **[V0.2 CHANGE]**.

### Architecture Plan
- Added one-core-platform / modular-products architecture for scalability and replication.
- Added Control Plane vs Data Plane separation.
- Added configuration-driven legal-entity, workflow, approval, feature, provider and deployment profiles.
- Made existing-CRM discovery the first CRM architecture decision and added a CRM abstraction boundary.
- Added provider plugin/integration registry.
- Added ABLife-owned/controlled environment model and named/revocable third-party access.
- Added no-document-sharing operating mode for Evidence development/support.
- Added deployment profiles and deployment packs to support CRM-only, Evidence-only, combined and future approved profiles.
- Added scalable logical data partitioning and path to stronger isolation when later justified.
- Added credential revocation / controlled support access model.
- Added modular-monolith-first / event-ready scale path and Infrastructure-as-Code requirement.
- Added formal v0.2 Version History and removed the prior blank trailing-page condition in the rendered output.

### Full-Stack Technology Plan
- Reframed the document from a reference stack that could be read as preselected to a Stage 1 technology decision framework.
- Made current CRM / current-system discovery the first technology decision.
- Explicitly made the custom/hybrid stack conditional and non-approved until fit-gap and Management approval.
- Added ABLife ownership/control requirements for repository, environments, root credentials, data, backups, monitoring and deployment artefacts.
- Added third-party delivery and no-document-sharing support controls.
- Added a control-plane/configuration service and event interface to the conditional stack.
- Added reusable deployment profiles/packs and configuration-driven replication.
- Added developer-independent handover/offboarding requirements.
- Added clarification questions covering ownership, third-party access, no-document-sharing, fit-gap approval and required deployment profiles.

### Development Stage-by-Stage Plan
- Added Pre-Day-1 mobilization for developer/vendor selection, contracting, ownership, access, no-document-sharing and acceptance responsibilities.
- Clarified that the 90-day clock begins only when Management declares Day 1 after mobilization readiness; final contractual start rule remains a decision item.
- Added explicit ABLife vs third-party responsibility boundaries.
- Made existing-CRM discovery the first technology decision in Stage 1.
- Added control-plane, reusable deployment packs and ABLife-owned environment/handover tasks to Stage 1.
- Added Stage 2 configure / hybrid / custom path split so capability sections are not interpreted as mandatory custom builds.
- Added P00 existing-platform/configuration baseline.
- Added measurable pilot acceptance targets from the 90-Day Pilot Plan, with the safeguard that Stage 1 must approve sampling/test-set size and critical-failure definitions before contractual use.
- Added new clarification questions covering developer selection, Day-1 trigger, environment ownership, third-party access and existing-CRM fit-gap approval.

## Items intentionally not changed
- The separate Full-Stack Development Subscription Cost Plan was not changed in this update because the user requested the three planning documents only.
- No application source code, production schema, live integration or deployment configuration was created or changed.
- Vendor selections remain TBD; reference technologies are not approved purchasing decisions.
