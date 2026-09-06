module.exports = {
  outName: "16_One_Page_Reply_to_Brief.docx",
  toc: false,
  cover: false,
  compact: true,
  meta: {
    series: "RESPONSE TO REQUIREMENTS BRIEF",
    title: "AI Executive Intelligence Assistant and CRM",
    subtitle: "Our reading of your requirement, what we would add to it, and what we need from you",
    shortTitle: "Response to brief",
    to: "[Client contact name and title]",
    from: "[Your name, your company]",
    date: "[Date]",
    re: "Your two-system requirement brief; request for a first meeting",
    classification: "Confidential",
  },
  body: `
Thank you for the brief. We read System 1 as a **closed-domain retrieval system with a verification layer**, not a chatbot, and System 2 as a **relationship system whose defining constraint is that nothing is sent without human approval**. We propose building both on one shared platform, so each is usable on its own but they share one login, one list of organisations and people, one document store and one audit trail. Deployment is in your own cloud account in a GCC region; you own the code, the accounts and the data.

## What we would add beyond the stated minimum

%widths 27,73
| Your requirement | What we would add |
|---|---|
| Retrieve information; controlled access | Permissions applied inside the search, so the system never reads a passage the user may not open. Every answer cites document and page. |
| Flag contradictions | A structured **claims ledger**: every figure, date and term extracted with its source quote, so conflicts surface across the whole document set, not just a search result. Superseded drafts are not falsely flagged. |
| Track missing information | Configurable **decision checklists**: define once what evidence each decision requires; the system reports what is present, missing or contradicted, and flags documents referenced but never supplied. |
| Answer in plain language | An independent **grounding check** deletes any sentence its cited source does not support, so the system declines rather than guesses. Arabic and English, including scans. |
| Records and stage tracking | A shared entity registry, so a counterparty in a contract is the same record as the relationship in your pipeline. Configurable pipelines per category, including a GCC path. |
| Follow-ups and reminders | Overdue and dormant relationships surfaced to management. Reminders go to your staff only, never to the contact. |
| Human approval on outreach | Enforced in the database, not the interface, with a four-eyes rule, risk flags at submission, and full version history of every edit. |
| Basic reporting | An immutable, hash-chained audit trail of every question, answer, approval and send, exportable for audit or regulator review. |
| Where the AI runs | A model gateway that routes sensitive documents to an in-country model without changing the application, so residency is a setting, not a rebuild. |


## Your four questions, in brief

- **Approach and tools.** One platform, two products, on standard components, with AI models behind a gateway so no vendor is load-bearing.
- **Accepting real data later.** By configuration, not code: custom fields, configurable stages and checklists, import templates with validation preview, and connectors for SharePoint, Drive and mailboxes.
- **Timeline.** Working structure at week 6; integrated demo, including contradiction detection and the approval queue, at week 8 to 9; pilot from week 9; production at week 20.
- **Cost.** Fixed fee for discovery, then milestone fixed fees to demo, pilot and production, and an annual managed service. Cloud and AI usage is contracted in your name and passed through at cost; pilot running cost is a few hundred dollars per month.

## What we need from you

1. **Sample documents:** 50 to 200 under NDA, mixed formats, both languages, including your worst scans. This sets our accuracy baseline.
2. **Decision types:** the five to ten decisions management makes most often and the evidence each requires; this defines the gap tracker.
3. **Jurisdiction and data policy:** which countries are in scope, and whether document text may be processed outside the country if stored in-region and encrypted.
4. **Platform details:** cloud provider and region, identity provider for staff login, and the mailbox platform for approved outreach.
5. **Ways of working:** pipeline stages and approval policy per category, anything specific to your GCC path, and existing systems to integrate with.

Items 1 to 3 most affect scope and price; the rest can be settled in discovery. We would welcome a first meeting to present the plan.
`,
};
