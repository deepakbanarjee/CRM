module.exports = {
  outName: "13_Gaps_Assumptions_and_Clarifying_Questions.docx",
  meta: {
    series: "PROPOSAL PACKAGE  |  DOCUMENT 13",
    title: "Gaps, Assumptions and Clarifying Questions",
    subtitle: "What the client's brief did not cover, the assumptions we have made to proceed, and the questions to settle in discovery",
    shortTitle: "Gaps, Assumptions and Questions",
    docNo: "13 of 15",
    audience: "Client sponsor and product owner; delivery team",
  },
  body: `
# 1. Why this document exists

The brief is clear about the four capabilities of the assistant and the five capabilities of the CRM. It is silent on a number of points that decide cost, timeline and compliance. Rather than guess silently, we list each gap, state the assumption we used to prepare this proposal, and give our recommendation. Settling these in the two-week discovery phase is the cheapest possible time to do it.

# 2. Gaps in the brief and our recommendations

%widths 5,25,35,35
| # | Gap | Assumption used in this proposal | Recommendation |
|---|---|---|---|
| 1 | **Languages.** The brief does not say which languages the corpus is in. English is the business language in Malaysia and the Philippines, but board minutes, older contracts and correspondence may be in Bahasa Malaysia, Filipino or Chinese. Arabic should not be assumed simply because a GCC entity is planned. | English throughout, with the system built so further languages are a configuration and evaluation exercise rather than a rebuild. | Confirm the actual mix and rough share per language; include a representative sample of non-English and scanned documents in the sample set. |
| 2 | **Jurisdiction and data residency.** Which entity owns which data, which country's laws apply, and whether data or AI processing may leave the country. Note that no major provider has a full cloud region in the Philippines. | Data at rest in Malaysia, with Singapore as the documented alternative for Philippine workloads; hybrid model routing by classification; sovereign option designed in; a GCC region added later as a setting. | Decide the pattern in discovery with legal; it drives cost tier and provider choice. Confirm specifically whether Philippine personal data may sit in Malaysia or Singapore. |
| 3 | **Users and roles.** How many people, which roles, which parts of the group. | 10-20 pilot users; up to 75 in the first production year; roles as listed in Document 03. | Provide an initial user list by role. |
| 4 | **Document volume, formats and sources.** Count, size, share of scans, where they live today. | Up to 5,000 documents in pilot; mix of PDF, Word, Excel, PowerPoint, email; some scans; SharePoint or shared drives. | Provide an inventory or a representative sample. |
| 5 | **Document versioning.** Drafts and finals coexist; without version links, a superseded value looks like a contradiction. | Version detection by checksum and naming, with administrator confirmation. | Agree naming conventions or confirm a document management system exists. |
| 6 | **Who adjudicates a contradiction.** The system can flag; a person must decide which document is right. | Findings have owners; resolution recorded; default owner is the document's business owner. | Name the roles who own findings per document type. |
| 7 | **Decision types.** Which decisions management wants gap-tracking for, and what evidence each needs. | Five to ten decision types catalogued in discovery. | Provide the list and examples of past decision packs. |
| 8 | **Identity provider.** Which SSO platform. | Microsoft Entra ID. | Confirm; provide tenant admin contact. |
| 9 | **Mailbox and messaging platform.** Where approved outreach should be sent from; whether WhatsApp is in scope. | Microsoft 365 for email; WhatsApp Business optional in Phase 2 or 5. | Confirm channels; WhatsApp requires Meta business verification lead time. |
| 10 | **Approval policy.** Who approves outreach, per category; escalation. | One approver per category with a compliance role for restricted recipients; escalation after 24 hours. | Define policy in discovery. |
| 11 | **Consent and lawful basis** for storing and contacting individuals under the Malaysian PDPA and the Philippine Data Privacy Act. | Existing relationships provide a lawful basis; consent captured going forward. | Legal to confirm basis per jurisdiction; we implement the fields and flags. Also confirm whether one data protection officer can cover both operating entities. |
| 12 | **Existing systems.** Any existing CRM, ERP, document management, board portal, e-signature to integrate with. | None mandatory in pilot; export-based migration from any existing CRM. | List systems and whether integration is expected in the first year. |
| 13 | **Accuracy expectations and acceptance criteria.** The brief does not define "good enough". | Targets in Document 04 section 6. | Agree targets and the golden question set in discovery. |
| 14 | **Retention, legal hold and deletion.** How long data is kept; whether anything must never be deleted. | Retention policies configurable; default retain while relationship active plus a period set by the client. | Provide retention schedule if one exists. |
| 15 | **Availability, support and disaster recovery** expectations. | Business-hours support in pilot; SLA options from production. | Choose a tier when moving to production. |
| 16 | **Mobile access.** Whether executives need a phone experience. | Responsive web application usable on phones; native app not included. | Confirm; native app is a Phase 5 option. |
| 17 | **Reporting depth.** "Basic reporting" is requested; management may want more. | Dashboards and exports listed in Document 03; BI tool connection possible. | Provide the three reports you look at most. |
| 18 | **Change management and training.** Adoption by relationship managers is the usual failure point for CRMs. | Role-based training and a pilot champion in each team included. | Nominate champions. |
| 19 | **Ownership of accounts and IP.** Who signs up for cloud and AI services. | Client-owned accounts; we operate under delegated access; client owns code. | Confirm procurement can open accounts within two weeks. |
| 20 | **Budget envelope and procurement route.** Whether this runs as a pilot purchase or a formal tender. | Pilot purchase with milestone payments. | Advise on procurement constraints early. |

# 3. Clarifying questions for discovery (ask in this order)

1. Which entities and jurisdictions are in scope for the first release, and which laws does your legal team consider applicable?
2. May document text be processed by an AI provider outside the country if stored in-region and encrypted, for non-personal, non-restricted documents? If not, sovereign hosting is required from the start.
3. Which cloud provider do you already use or prefer, and in which region is your existing account?
4. Which identity provider do staff log in with?
5. Where do the documents live today, and roughly how many are scans?
6. Which five to ten decisions should the gap tracker cover first, and what evidence do you expect for each?
7. Who should own contradiction findings for contracts, for financial models, and for correspondence?
8. Which pipeline stages do relationship managers use today for investors, partners and customers, and how does a GCC relationship differ from one in Malaysia or the Philippines (intermediaries, longer trust-building, regulatory steps)?
9. Which channels are used for outreach (email, WhatsApp, calls), and who should approve messages per category?
10. Is there an existing contact list or CRM export we can look at?
11. What does success look like at the end of the pilot, in numbers?
12. Who will be the sponsor, the product owner and the pilot users?

# 4. Assumptions underlying the timeline and cost

- Client decisions are available within five working days of being requested.
- Sample documents arrive by the end of week 1 and real pilot data by week 9.
- One identity provider and one mailbox platform.
- Up to three connectors in scope for production (for example SharePoint, Microsoft 365 mailbox, CSV import).
- Pilot corpus up to 5,000 documents or 150,000 pages.
- Pattern A or B for the pilot; Pattern C priced separately.
- English as the primary language, with further languages confirmed at discovery.
- No integration with ERP or existing CRM beyond export-based import in the first release.
- The client holds the contracts with cloud and AI providers; usage costs are passed through at cost.
`,
};
