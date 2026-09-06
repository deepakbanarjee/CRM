module.exports = {
  outName: "14_Draft_Statement_of_Work.docx",
  meta: {
    series: "PROPOSAL PACKAGE  |  DOCUMENT 14",
    title: "Draft Statement of Work",
    subtitle: "Scope, deliverables, milestones, commercial model, responsibilities and terms for Phases 0-4, for discussion at the detailed session",
    shortTitle: "Draft Statement of Work",
    docNo: "14 of 15",
    audience: "Client sponsor, procurement and legal; to be finalised after the detailed session",
  },
  body: `
!! This is a draft for discussion. Fees are placeholders linked to the Cost and Pricing Model workbook (Document 05) and will be finalised after discovery. Nothing in this draft is an offer capable of acceptance.

# 1. Parties and purpose

This Statement of Work ("SOW") is between [Client legal entity] ("Client") and [Supplier legal entity] ("Supplier") for the design, build, pilot and production release of (a) an AI Executive Intelligence Assistant and (b) a CRM + Follow-up System, together with the shared platform layer that connects them (the "Platform"), as described in the Solution Architecture (Document 03).

# 2. Scope

## 2.1 In scope

- Phase 0 Discovery; Phase 1 Foundation and working structure; Phase 2 Verification layer and approval gate, culminating in the integrated working demo; Phase 3 Pilot with real data; Phase 4 Production hardening and go-live, as defined in the Implementation Roadmap (Document 04).
- Deployment in the Client's cloud account in a GCC region under deployment Pattern A or B.
- English and Arabic language support.
- Up to three connectors (for example SharePoint or OneDrive, Microsoft 365 mailbox, CSV/XLSX import).
- Training for pilot users and administrators; documentation and hand-over package.

## 2.2 Out of scope (available as change orders or Phase 5)

- Sovereign deployment (Pattern C) with in-region GPU hosting.
- Integration with ERP, existing CRM, document management, board portal or e-signature systems beyond export-based import.
- WhatsApp Business channel (optional add-on).
- Native mobile applications.
- Migration of historical documents beyond the pilot corpus limits.

# 3. Deliverables and milestones

%widths 8,30,30,32
| M | Milestone | Deliverables | Acceptance |
|---|---|---|---|
| M0 | Discovery complete (week 2) | Scope note; decision-type catalogue; pipeline definitions; residency decision record; golden question set v0; environments | Sponsor signs scope note |
| M1 | Working structure (week 6) | Platform layer; System 1 ingestion and cited Q&A; System 2 records, pipelines, follow-ups, import | Demonstration and criteria in Document 04 section 2 |
| M2 | Integrated working demo (week 9) | Claims ledger; findings; decision checklists; approval workflow; reports; integration | Demo per Document 12; seeded-issue criteria met; go / no-go |
| M3 | Pilot exit (week 15) | Real-data pilot; evaluation report; tuned system; trained users | Accuracy targets met; sponsor sign-off |
| M4 | Production go-live (week 20) | Hardened production; penetration test report; DR test; runbooks; hand-over | Production acceptance signed |

# 4. Commercial model

## 4.1 Structure

%widths 30,70
| Component | Basis |
|---|---|
| Phase 0 Discovery | Fixed fee, payable on M0 |
| Phases 1-2 (to integrated demo) | Fixed fee, 40% on signature, 30% on M1, 30% on M2 |
| Phase 3 Pilot | Fixed fee for the defined scope, payable on M3; time and materials for scope additions at agreed rates |
| Phase 4 Production | Fixed fee payable on M4 |
| Managed service (from go-live) | Annual platform fee plus support tier (Standard, Business, Enterprise), invoiced quarterly in advance; cloud and AI usage passed through at cost from the Client's own accounts |
| Change orders | Rate card in the workbook; written approval before work starts |

## 4.2 Fee schedule (placeholders)

The fee amounts are calculated in the Cost and Pricing Model workbook from role effort and the agreed blended rate, and will be inserted here after discovery. Indicative structure: Discovery [X]; Build to demo [Y]; Pilot [Z]; Production [W]; Managed service [V] per year.

## 4.3 Pass-through costs

Cloud hosting, AI model usage, OCR, embeddings, messaging and any third-party licences are contracted in the Client's name and paid by the Client directly, with Supplier providing monthly usage reporting and budget alerts.

# 5. Responsibilities

%widths 50,50
| Client | Supplier |
|---|---|
| Executive sponsor and product owner with decision authority | Named engagement lead and delivery team |
| Provision of sample and pilot data under NDA; data protection sign-off | Design, build, test, deploy and document the Platform |
| Cloud account, identity provider access, mailbox admin consent | Infrastructure as code, security controls, monitoring |
| Pilot users and champions; timely feedback | Training, evaluation reporting, weekly status |
| Legal confirmation of lawful basis and transfer mechanisms | Implementation of privacy and residency controls |

# 6. Intellectual property and ownership

- All custom source code, configuration, documentation and data produced under this SOW are owned by the Client on payment of the applicable milestone.
- Supplier retains ownership of pre-existing tools and know-how and grants the Client a perpetual, royalty-free licence to any that are embedded in the deliverables.
- Open-source components remain under their respective licences; a licence inventory is delivered at M4.
- The Client owns all cloud, AI provider and third-party service accounts.

# 7. Data protection and confidentiality

- Mutual NDA precedes any exchange of documents.
- A data processing agreement governs Supplier access to Client data; access is least-privilege, logged and revocable.
- Supplier will not use Client data to train models or for any purpose other than delivering this SOW.
- Data residency pattern as recorded at M0; changes by written agreement.

# 8. Warranties, service levels and support

- Deliverables will conform to the acceptance criteria for 90 days after each milestone; defects fixed at no charge.
- From go-live, service levels per the selected support tier (response and resolution targets by severity; availability target; reporting).
- Security incident notification to the Client within the hours defined in the support tier.

# 9. Change control, assumptions and dependencies

- Changes to scope, timeline or fees require a signed change order.
- Assumptions in Document 13 section 4 apply; if an assumption fails, the parties agree an adjustment through change control.
- Delays caused by late Client inputs extend the timeline correspondingly.

# 10. Term, termination and hand-over

- Either party may terminate for uncured material breach on 30 days' notice; the Client may terminate for convenience at any milestone boundary, paying for work completed.
- On termination or expiry, Supplier delivers all code, documentation, data exports and credentials, and provides up to 20 days of transition assistance at the rate card.

# 11. Governing law and dispute resolution

[To be agreed: for example DIFC Courts or the Saudi Center for Commercial Arbitration, depending on the Client's jurisdiction.]

# 12. Signatures

For the Client: ______________________  Name, title, date

For the Supplier: ______________________  Name, title, date
`,
};
