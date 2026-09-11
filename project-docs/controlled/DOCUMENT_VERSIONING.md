# ABLife AI & CRM — Document Versioning Policy

Effective: 11 September 2026

## Rule
All project documents and material repository work are version-controlled. No controlled document is silently overwritten without a version record.

## Version convention
- **v0.x** — controlled draft before formal approval.
- **v1.0** — first formally approved baseline.
- **v1.x** — approved baseline revisions that do not constitute a new major programme baseline.
- **v2.0+** — major approved baseline changes.

## Controlled-document workflow
1. Read `PROJECT_MEMORY.md` before any work.
2. Fetch/read the current repository version before editing.
3. Identify the approved source, decision, consultant revision, or user instruction supporting the change.
4. Create the next version; do not erase the previous controlled version.
5. Make changes in the editable source and regenerate derived artefacts where applicable.
6. Mark material draft changes visibly during review. For the v0.2 documents created on 11 September 2026, yellow highlight indicates material additions or revisions relative to v0.1.
7. Render/inspect DOCX files before release.
8. Record material changes in the document Version History and repository changelog.
9. Commit changes to a dedicated branch and review before merge into the approved baseline.
10. After a material task, update `PROJECT_MEMORY.md` with what changed, verification, blockers, and the next safe action.

## Repository layout for the three controlled planning documents
The prior v0.1 DOCX baseline supplied in this chat is recorded in the artifact manifest by filename, size and SHA-256 hash.

`project-docs/controlled/v0.2/` is the first repository-controlled content baseline under this policy and contains the updated review sources.

Readable Markdown sources are committed so Git diffs remain meaningful even though distributed DOCX artifacts are binary. Exact distributed DOCX artifacts are tracked by SHA-256 in `ARTIFACT_MANIFEST.md`.

## Approval rule
A newer draft is not an approved baseline merely because it exists in the repository. Approval status must be stated in the document and recorded through the agreed project gate/decision process.
