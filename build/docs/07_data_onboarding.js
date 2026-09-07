module.exports = {
  outName: "07_Data_Onboarding_and_Integration_Guide.docx",
  meta: {
    series: "PROPOSAL PACKAGE  |  DOCUMENT 07",
    title: "Data Onboarding and Integration Guide",
    subtitle: "How the client plugs real documents, contacts and systems into the platform later, without rebuilding anything",
    shortTitle: "Data Onboarding and Integration",
    docNo: "07 of 15",
    audience: "Client IT and operations, product owner, delivery team",
  },
  body: `
# 1. The commitment

> The demo will run on sample data. When the client is ready, real data enters through **configuration, import templates and connectors**. No code changes are needed to add fields, stages, categories, decision types, document folders or mailboxes.

# 2. Five mechanisms that make this true

## 2.1 Schema-first data model with custom fields

Every core record (organisation, person, relationship, document, claim, follow-up, outreach request) has a fixed set of well-understood columns plus a "custom fields" area. An administrator defines a new field (name, type, validation, which category it applies to) in the interface; it appears in forms, imports, filters and reports immediately.

## 2.2 Configuration-driven business rules

%widths 30,70
| Configurable item | Examples |
|---|---|
| Categories | Investor, partner/counterparty, customer/member; sub-types such as sovereign fund, family office, bank, EPC contractor |
| Pipelines and stages per category | GCC relationship pipeline, for the market the group is entering: introduction through an intermediary; first meeting; NDA; qualification; active discussion; term sheet or MoU; regulatory or board approval; signed; dormant. Each stage has SLA days and exit criteria. |
| Decision types and evidence checklists | "Approve contract" needs signed contract, board minute, budget line, legal opinion. "Investor commitment" needs KYC file, subscription agreement, source-of-funds letter. |
| Approval policies | Who approves outreach per category; minimum approvers; escalation time; restricted recipients |
| Classification and routing | Which document folders are "restricted"; which model handles which classification |
| Reminder policies | Days before due, digest time, escalation to manager |

## 2.3 Import templates with preview

For contacts, organisations, relationships, historical interactions and a document manifest. Process: download template (CSV/XLSX) -> fill or map columns from an export -> upload -> validation preview (duplicates, missing required fields, unknown stages) -> confirm -> import log. Re-imports update rather than duplicate, keyed by external id or email.

## 2.4 Connectors

%widths 30,70
| Source | What is synced |
|---|---|
| SharePoint / OneDrive | Selected libraries and folders; new and changed files; permissions mirrored to document access lists |
| Google Drive | Selected folders or shared drives |
| Microsoft 365 or Gmail mailbox | Selected folders for ingestion (for example "Investor correspondence"); send-as for approved outreach |
| Existing CRM (HubSpot, Salesforce, Dynamics, Zoho) | One-time export via template, or scheduled API sync for contacts and activities |
| ERP or finance system | Counterparty master data and contract references via export or API |
| Document management system | Metadata and files via API or export |

## 2.5 Demo data is removable

All sample records carry an "is_demo" marker. One administrator action deletes demo records and their derived data (chunks, claims, findings) while keeping configuration, users and connectors. The corpus and pipelines are then empty and ready.

# 3. Onboarding sequence for real data

1. **Confirm data protection sign-off** (Document 08): lawful basis, classification rules, residency pattern.
2. **Configure** categories, pipelines, decision types, approval policies, fields (half a day with the product owner).
3. **Connect identity** so real users log in with single sign-on.
4. **Import contacts and relationships** from the client's spreadsheet or CRM export using the templates; review the validation report; resolve duplicates using the merge tool.
5. **Point connectors at document folders**, starting with one well-organised library; watch ingestion status; review classification.
6. **Review first findings** with management: confirm real contradictions, dismiss false ones, adjust tolerances.
7. **Run the golden question set** on the real corpus; compare to targets; tune.
8. **Connect the mailbox** for approved outreach; send a first approved message to an internal test recipient; verify audit entry.
9. **Switch on reminders** and dashboards for pilot users.
10. **Remove demo data.**

# 4. Data quality rules built in

- De-duplication of organisations by legal name, registration number and aliases; of persons by email and phone; merge with history preserved.
- Document version detection by checksum, filename pattern and metadata; administrators confirm "supersedes" links so that superseded values are not flagged as contradictions.
- Mandatory fields per category (configurable). Consent status required before outreach to a person.
- Where a person or organisation has a name in more than one language or script, both are stored side by side and search matches either.

# 5. Getting data out

The client is never locked in: full export of every table to CSV or Parquet, all documents with their metadata, and all audit events. The API exposes every record. Database backups are in standard PostgreSQL format.

# 6. What the client should prepare (checklist)

- List of document sources (folders, libraries, mailboxes) and who owns each.
- Current contact lists or CRM export, even if messy; the import preview will show what needs cleaning.
- The stages relationship managers actually use today, per category.
- The five to ten decisions management makes most often, and what evidence they expect to see.
- A person who can approve identity and mailbox connections in the IT tenant.
`,
};
