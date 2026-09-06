module.exports = {
  outName: "12_Demo_Script_and_Meeting_Runbook.docx",
  meta: {
    series: "PROPOSAL PACKAGE  |  DOCUMENT 12",
    title: "Demo Script and Meeting Runbook",
    subtitle: "Minute-by-minute plan for the first meeting, the storyline for the week 8-9 demo, and the seeded scenario that proves each requirement",
    shortTitle: "Demo Script and Meeting Runbook",
    docNo: "12 of 15",
    audience: "Presenter and delivery team",
    classification: "Internal - presenter's copy",
  },
  body: `
# 1. First meeting: objective and outcome

**Objective:** earn the right to a detailed presentation. Not to close a contract.

**Outcome we want:** the client agrees to (a) share sample documents under NDA, (b) name a sponsor and product owner, and (c) schedule the detailed session. Ask for these three things explicitly at the end.

# 2. Meeting runbook (60 minutes)

%widths 12,28,60
| Time | Segment | What to do and say |
|---|---|---|
| 0-3 min | Open | Thank them. State the purpose: "We read your brief carefully; today we want to show you our plan, be candid about the choices you will need to make, and agree the next step." |
| 3-8 min | Play back the brief | Restate the four things System 1 must do and the five things System 2 must do (deck slides 3-4). Ask: "Have we understood it correctly?" Listen. Note anything new. |
| 8-16 min | The approach | Slides 5-7: one platform, two products; System 1 pipeline; the claims ledger. Use the phrase "contradictions need structure, not just search". |
| 16-22 min | System 2 | Slides 8-9: pipelines and the approval gate. "Nothing leaves the building without a human's name on it." |
| 22-28 min | Data and trust | Slides 10-11: residency patterns; security and audit. Be candid about cross-region inference and the sovereign option. |
| 28-34 min | Plug in real data later | Slide 12: configuration, imports, connectors, demo data removable. |
| 34-42 min | Timeline and commercial model | Slides 13-15: phases, demo at week 8-9, tiers of run cost, pricing structure, client owns everything. |
| 42-46 min | What we need and what you may have missed | Slides 16-17: inputs from the client; the gaps list. Frame the gaps as "decisions that make the project succeed", not criticism. |
| 46-56 min | Questions | Use the Q&A playbook. If a question needs the technical team, say so and log it. |
| 56-60 min | Close | Ask for the three outcomes. Confirm the date of the detailed session. Send the follow-up note within 24 hours. |

**Materials to bring:** the deck (Document 02); printed Executive Summary (Document 01) for each attendee; this runbook; the Q&A playbook (do not hand out). Leave-behind: Executive Summary only. The full pack follows after NDA.

# 3. Week 8-9 integrated demo storyline

## 3.1 Seeded scenario

A fictional group, "Al Noor Holdings", is deciding whether to approve a supply contract with "Gulf Precision Industries" and is also progressing an investment discussion with "Marwa Capital". The demo corpus (about 60 documents in English and Arabic, some scanned) contains **deliberate contradictions and gaps**:

%widths 8,52,40
| # | Seeded issue | What the demo shows |
|---|---|---|
| 1 | Contract value AED 12.5m in Contract v2; AED 11.8m in the board approval memo | Contradiction flag with both quotes and pages; answer to "what is the contract value?" shows the conflict inline |
| 2 | Effective date 1 March in the contract; 15 March in the finance model's inputs | Date contradiction; explanation of tolerance rules |
| 3 | Contract v1 has a 24-month term; Contract v2 has 36 months, marked as superseding | No contradiction flagged (version handling); the answer cites v2 |
| 4 | Contract refers to "Annex B: performance bond" which is not in the corpus | Dangling-reference gap |
| 5 | Decision "Approve supply contract" requires a legal opinion; none loaded | Checklist gap listed on the decision page |
| 6 | Arabic-language board minute (scanned) records the approved amount | Arabic OCR, cross-language retrieval, cited answer in English |
| 7 | Marwa Capital MoU date in CRM (12 March) differs from the signed MoU (14 March) | Cross-system finding shown on the relationship page |
| 8 | A question with no answer in the corpus: "What is the CEO's salary?" | Refusal with closest documents listed |

## 3.2 Demo flow (25 minutes)

1. **Login with single sign-on** as an executive. Show the home page: open findings count, decisions with gaps, recent questions.
2. **Ask in plain language:** "What is the value and term of the Gulf Precision supply contract?" Show the answer, citations, page viewer, and the inline contradiction note.
3. **Open the finding.** Show both quotes side by side; assign an owner; add a resolution note; show it disappears from "open".
4. **Open the decision "Approve supply contract".** Show present, missing and contradicted evidence; the Annex B dangling reference.
5. **Ask in Arabic** or ask about the Arabic minute; show cross-language retrieval and citation of a scanned page.
6. **Ask an unanswerable question.** Show the refusal.
7. **Switch to the CRM.** Show the investor pipeline board (GCC stages), the Marwa Capital relationship page with history, follow-ups, and the finding from System 1 about the MoU date.
8. **Compose an outreach.** Request an AI-assisted draft; show the risk flags; submit; log in as an approver (different user); show that the drafter cannot approve; approve; show the message sent through the connected mailbox and the audit entry.
9. **Reports.** Who was contacted this month; pipeline by stage; overdue follow-ups; approval turnaround.
10. **Admin.** Show adding a custom field and a new stage without code; show the import preview; show the "remove demo data" action (do not run it).
11. **Audit log.** Filter to the session; show the chain.

## 3.3 Success criteria for the demo

- Every seeded issue in the table above is demonstrated.
- No question in the flow takes longer than 15 seconds to answer.
- The approval gate blocks self-approval in front of the client.
- The client can ask an unscripted question of the corpus and see a cited or refused answer.

# 4. Follow-up note template (send within 24 hours of the first meeting)

Subject: Follow-up: AI Executive Intelligence Assistant and CRM proposal

Thank you for your time today. As discussed:

- We will send the full proposal pack on receipt of the NDA.
- Next step: detailed session on [date], with our architect, covering the design, security and the commercial model in depth.
- To prepare, we would appreciate: (1) 50-200 sample documents, (2) the names of the sponsor and product owner, (3) your preferred jurisdiction and cloud provider if already decided.
- Open points you raised that we will answer in writing: [list].
`,
};
