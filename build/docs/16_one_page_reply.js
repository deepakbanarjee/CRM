module.exports = {
  outName: "16_Reply_to_Brief.docx",
  toc: false,
  cover: false,
  compact: false,
  header: false,
  meta: {
    series: "IN RESPONSE TO YOUR BRIEF",
    title: "AI Executive Intelligence Assistant, and CRM + Follow-up",
    subtitle: "How we would approach both systems, what we would add beyond the minimum, and the few things we would need from you",
    shortTitle: "Reply to brief",
    classification: "Confidential",
  },
  body: `
Thanks for sending this through. It is a clearer brief than most, and the two systems fit together more naturally than they might first appear, so we have sketched out how we would build them. Nothing below is fixed; treat it as a starting point rather than a proposal you need to react to.

## How we are reading it

The interesting thing about the first system is that answering questions is not really the hard part. Plenty of tools can search a folder. The hard part is being trustworthy enough that your management will act on what it says. So we would build it as a **closed-domain** system: it answers only from documents you have loaded, cites the document and page for every answer, and when the answer genuinely is not there, says so instead of guessing. That last behaviour matters more than it sounds.

The second system is the opposite shape. Its records and pipelines are conventional, deliberately so. What makes it unusual is your requirement that nothing goes out without a person approving it, which we have treated as a design constraint rather than a feature: nothing reaches a contact without a named person approving it, and reminders go only to your own staff.

We would put both on **one shared platform** so each is usable alone but they share a single login, one list of organisations and people, one document store and one audit trail. The investor named in a contract is then the same record as the investor in your pipeline, and you never maintain two contact lists. Everything runs in your own cloud account in a GCC region, with a gateway that can route sensitive documents to a model inside the country, so residency stays a setting you control. You own the code, the accounts and the data throughout.

## What we would add beyond the minimum

Your brief describes the minimum well. Here is where we would go a little further, and why.

%widths 27,73
| What you asked for | What we would add to it |
|---|---|
| Retrieve information; controlled access | Permissions applied **inside** the search rather than after it, so the system never even reads a passage the user may not open. Every answer cites its document and page. |
| Flag contradictions | A structured **claims ledger**. Figures, dates and terms are extracted into comparable records alongside the sentence it came from, so conflicts surface across your whole document set, not just whatever a search returned. Superseded drafts are recognised, so an old version is not flagged against the final. |
| Track missing information | Configurable **decision checklists**. You define once what evidence each decision needs; the system reports what is present, missing or contradicted, and spots documents referenced but never supplied. |
| Answer in plain language | An independent **grounding check** reads the drafted answer back against its sources and deletes any sentence they do not support. If nothing survives, it declines. Arabic and English throughout, including scans. |
| Contact and relationship records | A shared entity registry, so anything found in the documents can surface on the matching relationship. Pipelines and stages are configurable per category, including a GCC-specific path. |
| Follow-ups and reminders | Overdue and dormant relationships surfaced to management, so nothing goes quiet unnoticed. Reminders go to your staff only, never to the contact. |
| Human approval on outreach | The gate enforced in the database rather than the interface, with a four-eyes rule so the drafter cannot approve their own message, risk flags at submission, and a full version history. |
| Basic reporting | An immutable, hash-chained audit trail of every question, answer, approval and send, exportable if internal audit or a regulator ever asks. |

## Your four questions

- **Build approach and tools.** One platform, two products, on standard components, with AI models reached through a gateway so no single vendor is load-bearing and you can change your mind later without a rewrite.
- **Plugging in real data later.** By configuration rather than code: custom fields, configurable stages and checklists, import templates with a validation preview, and connectors for SharePoint, Drive and mailboxes. Demo data is flagged separately so it clears in a single action once real data arrives.
- **Timeline.** A working structure of both systems at around week 6, and an integrated demo, including contradiction detection and the approval queue, at week 8 to 9. A pilot on your real documents from week 9, and production at around week 20, assuming sample documents and system access arrive in the first two weeks. If it helps to see something sooner, we can show a clickable version on sample documents at week 4.
- **Cost.** A fixed fee for a short discovery, then milestone-based fixed fees through demo, pilot and production, followed by an annual managed service. Cloud and AI usage is contracted in your name and passed through at cost. During the pilot that running cost comes to a few hundred dollars a month, separate from the build fees, which tends to surprise people.

## What would help us most from you

None of it is urgent, and we can start without any of it, but these are what would let us give you real numbers rather than ranges.

1. **A handful of sample documents.** Fifty to two hundred under NDA, mixed formats, both languages, ideally your worst scans rather than your tidiest files. This is the most useful single input, because it sets a realistic accuracy baseline instead of an optimistic one.
2. **The decisions you make most often.** Five to ten of them, and what evidence you would expect to see for each. This is what the missing-information tracker is built around.
3. **Where the data may live.** Which countries are in scope, and whether document text may be processed outside the country if stored in-region and encrypted. This genuinely changes both design and cost, so it is worth settling early.
4. **A few platform details.** Your cloud provider and preferred region, the identity provider your staff log in with, and the mailbox approved messages should be sent from.
5. **How you work today.** The pipeline stages your relationship managers actually use, who should approve outreach per category, anything specific about your GCC relationships, and any existing CRM we should work alongside.

We have the full plan ready: architecture, timeline, and a cost model with every assumption visible. Happy to walk you through it whenever suits, with no obligation attached, or to answer anything above in writing.
`,
};
