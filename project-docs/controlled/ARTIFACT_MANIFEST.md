# ABLife AI & CRM — Controlled Document Artifact Manifest

Date: 11 September 2026
Branch target: `docs/v0.2-scalability-governance`

The canonical diffable sources are the Markdown files committed under `project-docs/controlled/`. The reviewed DOCX artifacts are produced from the same controlled content and identified below by SHA-256 so exact releases can be verified even when the binary artifact is distributed outside Git.

| Version | Document | DOCX filename | Bytes | SHA-256 | Render QA |
|---|---|---|---:|---|---|
| v0.1 | Architecture Plan | `ABLife_90_Day_Pilot_Architecture_Plan.docx` | 347,556 | `c4e4a1d877f7d03eff70361b5cea9407e587acf94e9d6336edc923463784c7c0` | Prior baseline |
| v0.1 | Full-Stack Technology Plan | `ABLife_90_Day_Pilot_Full_Stack_Technology_Plan.docx` | 188,906 | `3c345ff2fb6c876a9d47a507bc662dda9f37b560d075fb3eb72fae1c2effdfbc` | Prior baseline |
| v0.1 | Development Stage-by-Stage | `ABLife_90_Day_Pilot_Development_Stage_by_Stage.docx` | 48,495 | `02d23251bdb00aacc7d2e4f2dc369f9851bcb5af8b9fe8f1c1d3bc57c78589ee` | Prior baseline |
| v0.2 | Architecture Plan | `ABLife_90_Day_Pilot_Architecture_Plan_v0.2.docx` | 351,581 | `ffbc15fcfc9a67dc9c4e5fc62debb1f38cae6b6789a3a5695cf090f55916701a` | PASS — 14 pages visually inspected; no trailing blank page |
| v0.2 | Full-Stack Technology Plan | `ABLife_90_Day_Pilot_Full_Stack_Technology_Plan_v0.2.docx` | 192,237 | `d73ae0b8a5e8b37fc01a50d891cefe31827dee25bb737ed8d0ae2560d6b99b1a` | PASS — 14 pages visually inspected |
| v0.2 | Development Stage-by-Stage | `ABLife_90_Day_Pilot_Development_Stage_by_Stage_v0.2.docx` | 51,632 | `b0fd60f71a63e3d1306486747176854700785644697959dc57e932a6c58e9e1f` | PASS — 16 pages visually inspected |

## Change marking
The v0.2 DOCX files use yellow highlighting for material additions/revisions. The v0.2 Markdown sources use **[V0.2 CHANGE]** markers for changed paragraphs/rows.

## Approval status
v0.2 is a controlled draft for review. It does not authorize application coding, production data use, procurement, or deployment.
