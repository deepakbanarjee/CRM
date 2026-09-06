# AI Executive Intelligence Assistant and CRM + Follow-up System

Proposal package for a first-level client meeting, covering two interconnected systems on one shared platform:

- **System 1: AI Executive Intelligence Assistant.** Closed-domain retrieval over corporate documents with a verification layer: cited answers, contradiction detection through a claims ledger, missing-information tracking through decision checklists, and refusal when the documents do not contain the answer.
- **System 2: CRM + Follow-up System.** Relationship records and configurable pipelines for investors, partners/counterparties and customers/members (including a GCC-specific pipeline), follow-up reminders, reporting, and a human-approval gate on every outbound message.

## Contents

- `proposal/` - the fifteen client-facing and presenter documents (Word, PowerPoint, Excel, PDF) and the diagrams. Start with `proposal/00_Package_Index.md`.
- `build/` - the generator scripts that produce every document from source, so the package can be regenerated after edits.

## Regenerating

```bash
cd build && npm install            # docx, pptxgenjs
pip install openpyxl matplotlib pillow pymupdf
python3 diagrams.py
node build_docs.js
python3 finalize_docx.py ../proposal/*.docx    # needs LibreOffice Writer + python3-uno
node build_deck.js
python3 build_cost_model.py && python3 build_risk_and_rtm.py
```

Recalculate the workbooks with LibreOffice after building (the `xlsx` skill's `recalc.py`, or open and save in Excel).
