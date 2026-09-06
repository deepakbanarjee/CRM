# Proposal Package: AI Executive Intelligence Assistant and CRM + Follow-up System

First-meeting edition, September 2026. Sixteen documents plus diagrams. Every Word document is also provided as a PDF.

## Which documents go to the client, and when

| Stage | Hand over |
|---|---|
| Before the meeting, in reply to their brief | 16 One-Page Reply |
| First meeting (in the room) | 02 deck (presented); 01 Executive Summary (printed leave-behind) |
| After NDA, before the detailed session | 01, 03, 04, 05, 06, 07, 08, 09, 13, 15 |
| Detailed session and negotiation | 14 Draft Statement of Work; 05 workbook walked through together |
| Never to the client (presenter's copies) | 10 Q&A Playbook; 11 Presenter Briefing; 12 Demo Script and Runbook |

## The documents

| # | File | Purpose | Audience |
|---|---|---|---|
| 01 | `01_Executive_Summary.docx` / `.pdf` | Two-page overview: request, answer, what we build, why it is safe, timeline, commercial model, inputs needed, gaps | Client sponsor |
| 02 | `02_First_Meeting_Presentation.pptx` | 18-slide first-meeting deck with speaker notes on every slide | Presented to the client |
| 03 | `03_Solution_Architecture_High_and_Low_Level.docx` / `.pdf` | Part A high-level plan (sections 2-6); Part B low-level design: components, data model, pipelines, APIs, environments, evaluation, safety controls | Client CTO / IT, delivery team |
| 04 | `04_Implementation_Roadmap_and_Timeline.docx` / `.pdf` | Phases 0-5, deliverables, exit criteria, staffing, dependencies, governance, acceptance criteria, compression options | Sponsor, PMO, delivery team |
| 05 | `05_Cost_and_Pricing_Model.xlsx` | Live formulas: assumptions and unit prices, rate card, monthly run cost by tier (pilot to group scale), build effort and fees by phase, milestone schedule, three pricing options, three-year TCO | Sponsor, procurement, presenter |
| 06 | `06_Technology_Stack_and_Tools.docx` / `.pdf` | Every product and service: what it does, why chosen, price, alternatives; what was considered and not chosen | Client IT, procurement, presenter |
| 07 | `07_Data_Onboarding_and_Integration_Guide.docx` / `.pdf` | How real documents, contacts and systems plug in later without a rebuild | Client IT and operations |
| 08 | `08_Security_Privacy_and_Governance.docx` / `.pdf` | Security architecture, audit, data residency patterns, GCC data protection landscape (KSA, UAE, DIFC, ADGM, Qatar, Bahrain, Oman, Kuwait), AI governance, responsibilities | Client CISO, legal, compliance |
| 09 | `09_Risk_Register.xlsx` | 22 scored risks with mitigations, owners, triggers; scoring guide | Sponsor, PMO |
| 10 | `10_Client_Questions_and_Answers_Playbook.docx` / `.pdf` | 30+ anticipated questions with short answers, reasoning, and what not to say | Presenter only |
| 11 | `11_Presenter_Briefing_Concepts_and_Glossary.docx` / `.pdf` | Every concept explained from first principles; numbers to remember; phrases that land; glossary | Presenter only |
| 12 | `12_Demo_Script_and_Meeting_Runbook.docx` / `.pdf` | Minute-by-minute first-meeting runbook; week 8-9 demo storyline with seeded contradictions and gaps; follow-up note template | Presenter, delivery team |
| 13 | `13_Gaps_Assumptions_and_Clarifying_Questions.docx` / `.pdf` | 20 gaps in the brief with assumptions and recommendations; 12 discovery questions; assumptions behind timeline and cost | Sponsor, product owner |
| 14 | `14_Draft_Statement_of_Work.docx` / `.pdf` | Scope, milestones, commercial model, responsibilities, IP, data protection, warranties, change control, termination | Sponsor, procurement, legal |
| 15 | `15_Requirements_Traceability_Matrix.xlsx` | Every requirement in the brief traced to design, component, phase, acceptance test and demo step | Client IT, delivery team |
| 16 | `16_One_Page_Reply_to_Brief.docx` / `.pdf` | One-page written reply to the client's brief: our reading of the requirement, what we would add beyond the stated minimum, short answers to their four questions, and the information we need from them | Client sponsor, sent ahead of the meeting |
| - | `diagrams/*.png` | Eight diagrams used across the documents and the deck | Reuse in any material |

## Reading order for the presenter

1. `11_Presenter_Briefing` (60 minutes)
2. `01_Executive_Summary` and the deck with speaker notes (45 minutes)
3. `10_Client_Q&A_Playbook`, saying the short answers aloud (45 minutes)
4. `03_Solution_Architecture` Part A only, to recognise each diagram (30 minutes)
5. `12_Demo_Script`, section 2, on the morning of the meeting (15 minutes)

## Before sending anything to the client

- Fill the `[Client contact name]`, `[Your name, your company]` and `[Date]` placeholders in document 16 before sending it.
- Replace `[Client legal entity]`, `[Supplier legal entity]` and the governing-law placeholder in document 14.
- Set the blended rate and support tier on the `Rate_Card` sheet of document 05 so fees reflect your delivery model; the defaults are an average of an indicative rate card.
- Re-verify the 2026 list prices and the GCC model-availability statements in documents 06 and 08; both change quickly.
- Add your company name, logo and contact details to the cover pages and the deck title slide.

## Rebuilding the package

Sources are in `build/`. Diagrams: `python3 build/diagrams.py`. Word documents: `node build/build_docs.js` then `python3 build/finalize_docx.py proposal/*.docx` (updates tables of contents and writes PDFs; needs LibreOffice with Writer). Deck: `node build/build_deck.js`. Workbooks: `python3 build/build_cost_model.py`, `python3 build/build_risk_and_rtm.py`, then recalculate with LibreOffice.
