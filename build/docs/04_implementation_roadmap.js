module.exports = {
  outName: "04_Implementation_Roadmap_and_Timeline.docx",
  meta: {
    series: "PROPOSAL PACKAGE  |  DOCUMENT 04",
    title: "Implementation Roadmap and Timeline",
    subtitle: "Phases, milestones, staffing, dependencies and acceptance criteria from kick-off to production and scale-out",
    shortTitle: "Implementation Roadmap",
    docNo: "04 of 15",
    audience: "Client sponsor, programme management office, delivery team",
  },
  body: `
# 1. Summary

> **Integrated working demo at week 8-9. Pilot on real data from week 9. Production go-live at week 20.**
> The plan assumes a core team of 3-4 people, weekly client decisions, and sample documents available by the end of week 1. If the client wants an earlier visual, a clickable prototype on sample documents can be shown at week 4.

![Indicative timeline|6.8](diagrams/07_timeline.png)

# 2. Phase plan

## Phase 0: Discovery and set-up (weeks 0-2)

%widths 25,75
| Item | Detail |
|---|---|
| Objectives | Fix scope, jurisdictions and residency pattern; obtain sample documents; define decision types and pipeline stages; create environments in the client's cloud account. |
| Activities | Kick-off workshop (half day); two working sessions with management on decision types and "questions we ask most"; one session with relationship managers on categories, stages and the GCC pipeline; identity provider and mailbox platform confirmation; data protection review with the client's legal or compliance contact; environment provisioning with infrastructure as code. |
| Deliverables | Signed-off scope note; decision-type catalogue (first 5-10 types) and evidence checklists; pipeline and stage definitions per category; residency and hosting decision record; golden question set v0 (50 questions); environment access. |
| Client inputs | Sponsor and product owner named; 50-200 sample documents under NDA (mixed formats, some Arabic, some scanned); sample contact list (can be anonymised); access to identity provider tenant. |
| Exit criteria | Scope note signed; environments reachable; sample corpus received. |

## Phase 1: Foundation and working structure (weeks 1-6)

%widths 25,75
| Item | Detail |
|---|---|
| Platform (weeks 1-4) | Single sign-on and roles; entity registry with import; document store; model gateway with routing policy; job queue; audit log; monitoring and AI tracing. |
| System 1 (weeks 2-6) | Ingestion pipeline for PDF, DOCX, XLSX, PPTX, email; OCR path for scans; chunking, embedding, hybrid retrieval, re-ranking; cited answers with grounding check and refusal; document browser with page viewer; basic admin. |
| System 2 (weeks 2-6) | Organisation, person and relationship records; three category pipelines with configurable stages; kanban and list views; follow-up tasks and reminders; interaction logging; CSV/XLSX import with mapping preview. |
| Deliverable at week 6 | "Working structure" review: both systems usable end-to-end on sample data. |
| Exit criteria | Golden set v0: retrieval hit rate above 85%, citation accuracy above 90% on sample corpus; all CRM record types and stage transitions demonstrated; import of a 500-row sample succeeds with validation report. |

## Phase 2: Verification layer and approval gate (weeks 5-9)

%widths 25,75
| Item | Detail |
|---|---|
| System 1 | Claims extraction with schema validation and normalisation; cross-document comparison and contradiction findings; decision checklists and gap findings; dangling-reference detection; findings workbench with owner assignment and resolution; findings surfaced inline in answers. |
| System 2 | Outreach request workflow with approval queue, four-eyes rule, escalation, versioning; mailbox connector for sending under approval (Microsoft 365 or Google); WhatsApp Business channel if in scope; dashboards: activity, pipeline by stage, overdue, dormant, approval turnaround; exports. |
| Integration | Shared entity links between claims and relationships; findings shown on relationship pages; CRM attachments pushed to the corpus. |
| Deliverable at week 8-9 | **Integrated working demo** using the demo script in Document 12, on a seeded corpus with known contradictions and gaps. |
| Exit criteria | Seeded contradictions detected at 90%+ with false-positive rate under 15%; checklist gaps computed correctly for all catalogued decision types; approval workflow blocks self-approval and unapproved sends in tests; reports reconcile to database counts. Client go / no-go for pilot. |

## Phase 3: Pilot with real data (weeks 9-15)

%widths 25,75
| Item | Detail |
|---|---|
| Activities | Load real documents through connectors and uploads; import real contacts and relationships; tune extraction prompts and tolerance rules on real formats; expand golden set to 150-200 questions; weekly evaluation report; train 10-20 pilot users; collect feedback; fix and improve in weekly releases. |
| Governance | Weekly steering call; findings review with management; data protection checkpoint before loading personal data. |
| Exit criteria | Agreed accuracy targets met on the real corpus (proposed: faithfulness above 95%, citation accuracy above 95%, numeric claim precision above 95%); pilot users rate usefulness 4/5 or higher; no severity-1 defects open. |

## Phase 4: Production hardening and go-live (weeks 15-20)

%widths 25,75
| Item | Detail |
|---|---|
| Activities | Security review and third-party penetration test; backup and disaster-recovery configuration with a restore test; performance test at target concurrency; runbooks and on-call; role-based training for all users; documentation hand-over; production cut-over. |
| Exit criteria | Penetration test findings of high severity closed; restore test passed; SLA and support model signed; production acceptance signed. |

## Phase 5: Scale-out roadmap (week 20 onwards)

Options, each scoped and priced separately once the base is live:

- Additional connectors (ERP, document management system, existing CRM, board portal, e-signature).
- Sovereign deployment (Pattern C): in-region GPU nodes, open-weight model evaluation against the golden set, switch via gateway.
- Multi-entity tenancy for subsidiaries and joint ventures with separate data boundaries.
- Advanced analytics: relationship health scoring, investor coverage maps, decision-cycle time.
- Board-pack and briefing generation from the corpus (drafts only, human-edited).
- Mobile application if browser access is insufficient.

# 3. Team and staffing

%widths 26,14,60
| Role | Allocation | Responsibilities |
|---|---|---|
| Engagement lead / solution architect | 40-50% | Scope, architecture decisions, client steering, quality gate |
| AI engineer (Python) | 100% | Ingestion, retrieval, claims ledger, evaluation, model gateway |
| Full-stack engineer (TypeScript) | 100% | Web application, Core API, CRM workflow, connectors, reporting |
| Second full-stack or AI engineer | 50-100% from week 5 | Approval workflow, integrations, throughput on Phase 2 |
| QA and evaluation analyst | 30-50% | Golden set, test automation, evaluation reports, user acceptance |
| Project manager / delivery coordinator | 30% | Plan, risks, client communications, weekly reporting |
| UX designer | 20% (weeks 1-8) | Interface design, Arabic layout, usability tests |
| Security and DevOps specialist | 20%, higher in Phase 4 | Infrastructure as code, hardening, penetration test coordination |

Client-side roles needed: executive sponsor (1 hour per week), product owner (4-6 hours per week), IT contact for identity and mailbox connection, legal or compliance contact for data protection, 10-20 pilot users in Phase 3.

# 4. Dependencies and lead times

%widths 40,25,35
| Dependency | Needed by | Owner |
|---|---|---|
| Sample documents under NDA | End of week 1 | Client |
| Cloud account or subscription in chosen region, with billing | End of week 1 | Client (we provision inside it) |
| Identity provider tenant access for single sign-on | Week 2 | Client IT |
| Decision-type catalogue and pipeline stages agreed | Week 2 | Joint |
| Mailbox platform admin consent (Graph or Google) | Week 5 | Client IT |
| Real documents and contacts for pilot | Week 9 | Client |
| Data protection sign-off for personal data | Before week 9 | Client legal / compliance |
| Penetration test vendor booking | Week 12 for week 16 test | Joint |

# 5. Governance and cadence

- **Weekly**: 45-minute steering call (sponsor, product owner, engagement lead): progress, decisions needed, risks.
- **Fortnightly**: demonstration of working software to the wider user group.
- **Milestone reviews**: weeks 2, 6, 9, 15, 20; each with a written acceptance note.
- **Change control**: scope changes recorded with impact on time and cost; approved by sponsor.
- **Reporting**: one-page weekly status (RAG, milestones, risks, decisions).

# 6. Acceptance criteria overview

%widths 30,70
| Area | Criterion |
|---|---|
| Retrieval | Golden-set hit rate (correct source in top results) above 90% at pilot exit |
| Answer faithfulness | 95%+ of answer sentences supported by cited passages (independent grounding check) |
| Refusal correctness | 90%+ of questions with no answer in the corpus are declined rather than guessed |
| Claims extraction | Numeric field precision 95%+, recall 90%+ on the labelled sample |
| Contradiction detection | 90%+ of seeded conflicts detected; under 15% false positives |
| Gap tracking | 100% of catalogued checklist items evaluated correctly on test decisions |
| Approval gate | Zero sends without an approval record from a different user (verified by automated tests and audit query) |
| Reporting | Dashboard figures reconcile to database counts; overdue list matches follow-up table |
| Performance | Answers in under 15 seconds for 95% of questions; ingestion throughput 500+ pages per hour on pilot infrastructure |
| Security | No high-severity findings open after penetration test; SSO and MFA enforced; audit chain verifies |

# 7. Options to compress the timeline

- **Clickable prototype at week 4**: assistant Q&A on sample documents and a CRM pipeline board with sample contacts; useful for an early executive preview. Contradiction detection and approval gate are not yet present.
- **Parallel teams**: a second engineer from week 2 rather than week 5 can bring the integrated demo forward by about one week at additional cost.
- **What we would not compress**: discovery (a wrong decision on residency or identity costs far more later) and the pilot on real data (accuracy targets must be measured on real formats).
`,
};
