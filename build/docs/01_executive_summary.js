module.exports = {
  outName: "01_Executive_Summary.docx",
  toc: false,
  meta: {
    series: "PROPOSAL PACKAGE  |  DOCUMENT 01",
    title: "Executive Summary",
    subtitle: "AI Executive Intelligence Assistant and CRM + Follow-up System: proposed approach, timeline and commercial model",
    shortTitle: "Executive Summary",
    docNo: "01 of 15",
    audience: "Client executive sponsor and steering committee",
  },
  body: `
# The request in one paragraph

Management needs two internal systems. The first is an **AI Executive Intelligence Assistant**: a closed-domain question-answering tool over the group's own contracts, approvals, financial models and correspondence, with a verification layer that flags contradictions between documents and tracks information that is still missing before a decision can be taken. The second is a **CRM + Follow-up System** for investors, partners and counterparties, and customers and members, including a GCC-specific relationship pipeline, with follow-up reminders, reporting, and a strict rule that no outbound message leaves the system without human approval.

# Our answer in one page

> **Build both systems on one shared platform layer, deliver them as separately usable products, and design every part so real data plugs in later by configuration, not by rebuilding.**
> Working, integrated demo in **8 to 9 weeks**. Production-ready release at **week 20**. Run cost from roughly **USD 150-400 per month** during the pilot, scaling by tier to enterprise and sovereign deployments without changing the code base.

## What we will build

%widths 22,78
| Layer | What it delivers |
|---|---|
| Shared platform | Single sign-on and roles, a shared registry of organisations and people, a document store, a swappable AI model gateway, workflow and event bus, an immutable audit log, and monitoring. Built once, used by both systems and by anything the group adds later. |
| System 1: Executive Intelligence Assistant | Secure ingestion of Arabic and English documents (including scanned PDFs and spreadsheets); retrieval with document-and-page citations; a **claims ledger** that extracts every figure, date and term and compares them across documents to flag contradictions; configurable decision checklists that list the evidence still missing; plain-language answers grounded only in the loaded documents, with refusal when the documents do not support an answer. |
| System 2: CRM + Follow-up | Contact and relationship records for the three categories with configurable pipelines and stages (including a GCC relationship pipeline); follow-up scheduling and reminders; a human-approval queue that every email or message must pass through before sending; dashboards for who was contacted, current stage, and what is overdue. |

## Why this approach is the safe one

- **It is not a chatbot.** A general assistant answers from the open internet and from memory. This system answers only from the client's loaded document set, cites the page, and declines when evidence is absent. That is what makes it usable for management decisions.
- **Contradictions need structure, not just search.** We extract facts into a structured ledger and compare like with like. Search alone would miss most conflicts.
- **Human control is designed in.** Outreach cannot be sent by the system on its own. Every send carries an approver's name and is logged.
- **Data stays in the client's hands.** The client owns the cloud accounts, the code and the data. Deployment options range from managed cloud in a GCC region to fully sovereign in-country hosting, and the choice is a configuration setting.
- **No lock-in to any AI vendor.** The model gateway lets the client switch between frontier models (for example Claude) and in-region open-weight models without application changes.

## Timeline and commercial model

%widths 28,32,40
| Milestone | When | Commercial treatment |
|---|---|---|
| Discovery, data samples, access set-up | Weeks 0-2 | Fixed fee |
| Working structure of both systems, sample data | Week 6 | Milestone payment |
| Integrated working demo (contradiction flags, gap tracker, approval queue, reports) | Week 8-9 | Milestone payment; go / no-go for pilot |
| Pilot with real data, evaluation against agreed accuracy targets | Weeks 9-15 | Milestone payment |
| Production hardening, security review, go-live | Weeks 15-20 | Milestone payment; managed service begins |

Pricing options are detailed in the Cost and Pricing Model workbook: fixed price for discovery and demo, milestone-based fixed fees for pilot and production, and an annual managed service (platform fee, pass-through cloud and AI costs, and a support tier). The client owns all source code and infrastructure accounts from day one.

## What we need from the client to start

1. A named executive sponsor and one product owner who can make decisions weekly.
2. A representative sample of 50-200 documents (mixed types, both languages, some scanned) under NDA, and the list of decision types management cares about most.
3. Confirmation of jurisdiction(s), data classification rules and preferred cloud provider, so the residency pattern can be fixed early.
4. Identity provider details (for single sign-on) and the mailbox platform used for outreach.

## Items the brief did not cover, which we recommend deciding early

Arabic-language handling; document version control; who adjudicates a flagged contradiction; consent and lawful basis for storing investor personal data under GCC data protection laws; integration with existing systems (ERP, document management, existing CRM); accuracy acceptance criteria; support and disaster-recovery expectations. Each is addressed with a recommendation in Document 13, Gaps, Assumptions and Clarifying Questions.
`,
};
