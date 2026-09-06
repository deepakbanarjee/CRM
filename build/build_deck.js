const pptxgen = require("pptxgenjs");
const path = require("path");

const NAVY = "1E2761", TEAL = "1C7293", GOLD = "C9A227", ICE = "EEF2FA", GREY = "5A6270", LIGHT = "F7F8FB", WHITE = "FFFFFF", RED = "B23A48", GREEN = "2E7D5B";
const D = path.join(__dirname, "..", "proposal", "diagrams");
const FONT_H = "Cambria", FONT_B = "Calibri";

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10 x 5.625
pres.author = "Proposal team";
pres.title = "AI Executive Intelligence Assistant and CRM + Follow-up System";

let slideNo = 0;
function base(dark = false) {
  const s = pres.addSlide();
  slideNo++;
  s.background = { color: dark ? NAVY : WHITE };
  if (!dark) {
    s.addText(String(slideNo), { x: 9.3, y: 5.2, w: 0.5, h: 0.3, fontSize: 9, color: GREY, fontFace: FONT_B, align: "right", isTextBox: true, margin: 0 });
    s.addText("Confidential  |  First-meeting proposal", { x: 0.5, y: 5.2, w: 5, h: 0.3, fontSize: 9, color: GREY, fontFace: FONT_B, isTextBox: true, margin: 0 });
  }
  return s;
}
function title(s, text, sub) {
  s.addText(text, { x: 0.5, y: 0.35, w: 9, h: 0.6, fontSize: 24, bold: true, color: NAVY, fontFace: FONT_H, isTextBox: true, margin: 0 });
  if (sub) s.addText(sub, { x: 0.5, y: 0.92, w: 9, h: 0.35, fontSize: 13, color: GREY, fontFace: FONT_B, isTextBox: true, margin: 0 });
}
function card(s, x, y, w, h, head, body, fill = LIGHT, headColor = NAVY, bodyColor = "333333", fs = 11) {
  s.addShape(pres.ShapeType.roundRect, { x, y, w, h, fill: { color: fill }, line: { color: fill }, rectRadius: 0.08, shadow: { type: "outer", blur: 4, offset: 1.5, angle: 90, color: "000000", opacity: 0.12 } });
  s.addText(head, { x: x + 0.15, y: y + 0.1, w: w - 0.3, h: 0.55, fontSize: 12.5, bold: true, color: headColor, fontFace: FONT_B, isTextBox: true, margin: 0, valign: "top" });
  s.addText(body, { x: x + 0.15, y: y + 0.68, w: w - 0.3, h: h - 0.78, fontSize: fs, color: bodyColor, fontFace: FONT_B, isTextBox: true, margin: 0, valign: "top" });
}
function circleNum(s, x, y, n, color = TEAL) {
  s.addShape(pres.ShapeType.ellipse, { x, y, w: 0.42, h: 0.42, fill: { color }, line: { color } });
  s.addText(String(n), { x, y, w: 0.42, h: 0.42, fontSize: 13, bold: true, color: WHITE, fontFace: FONT_B, align: "center", valign: "middle", isTextBox: true, margin: 0 });
}
function bullets(items, fs = 12, color = "333333") {
  return items.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < items.length - 1, fontSize: fs, color, fontFace: FONT_B, paraSpaceAfter: 6 } }));
}
function img(s, file, x, y, w, h) {
  s.addImage({ path: path.join(D, file), x, y, w, h, sizing: { type: "contain", w, h } });
}

// ---------------------------------------------------------------- 1 Title
{
  const s = base(true);
  s.addText("PROPOSAL FOR A FIRST DISCUSSION", { x: 0.7, y: 1.2, w: 8.6, h: 0.4, fontSize: 12, bold: true, color: GOLD, fontFace: FONT_B, charSpacing: 4, isTextBox: true, margin: 0 });
  s.addText("AI Executive Intelligence Assistant\nand CRM + Follow-up System", { x: 0.7, y: 1.65, w: 8.6, h: 1.5, fontSize: 30, bold: true, color: WHITE, fontFace: FONT_H, isTextBox: true, margin: 0, valign: "top" });
  s.addText("A closed-domain, evidence-first assistant for management decisions, and a relationship system where no message leaves without a human's approval. Built separately, connected at the top, ready for your real data.", { x: 0.7, y: 3.4, w: 8.2, h: 0.9, fontSize: 14, color: "CADCFC", fontFace: FONT_B, isTextBox: true, margin: 0, valign: "top" });
  s.addText("September 2026  |  Confidential", { x: 0.7, y: 4.8, w: 6, h: 0.3, fontSize: 11, color: "9AA7C7", fontFace: FONT_B, isTextBox: true, margin: 0 });
  s.addNotes("Open by thanking them and stating the purpose: we read the brief carefully; today we present our plan, are candid about the decisions they will need to make, and agree the next step. Say clearly that this is the first-level meeting: plan and approach. The detailed design, security deep-dive and final commercials come in the second session. Aim to finish in 45 minutes and leave 15 for questions.");
}

// ---------------------------------------------------------------- 2 Agenda
{
  const s = base();
  title(s, "What we will cover", "Sixty minutes: your brief, our approach, the decisions ahead, next steps");
  const items = [
    ["Your brief, played back", "The four things System 1 must do, the five things System 2 must do, and the cross-cutting asks."],
    ["Our approach", "One shared platform, two independently usable products; how each requirement is met."],
    ["Data, security and residency", "Where data lives, who sees what, and the honest position on AI processing in the GCC."],
    ["Plugging in real data later", "Configuration, import templates and connectors: no rebuild."],
    ["Timeline and commercial model", "Demo at week 8-9, production at week 20; run-cost tiers; pricing structure; you own everything."],
    ["Needs, gaps and next steps", "Inputs from you and the decisions that make the project succeed."],
  ];
  items.forEach(([h, b], i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.5 + col * 4.65, y = 1.45 + row * 1.2;
    circleNum(s, x, y + 0.05, i + 1);
    s.addText(h, { x: x + 0.55, y: y, w: 3.9, h: 0.35, fontSize: 14, bold: true, color: NAVY, fontFace: FONT_B, isTextBox: true, margin: 0 });
    s.addText(b, { x: x + 0.55, y: y + 0.35, w: 3.9, h: 0.7, fontSize: 11, color: "444444", fontFace: FONT_B, isTextBox: true, margin: 0, valign: "top" });
  });
  s.addNotes("Walk the agenda in 30 seconds. Signal that section 3 (data and residency) is where you will be most candid, because it is the section where GCC clients most often get vague answers from vendors.");
}

// ---------------------------------------------------------------- 3 Brief: System 1
{
  const s = base();
  title(s, "Your brief, as we understood it: System 1", "AI Executive Intelligence Assistant: a closed-domain question-answering tool with a verification layer, not a general chatbot");
  const reqs = [
    ["Retrieve", "Specific information from documents on request. Controlled access, not the open internet."],
    ["Flag contradictions", "When two documents state different figures, dates or terms for the same thing."],
    ["Track missing information", "Gaps where a decision needs a document or data point not yet provided."],
    ["Answer in plain language", "Management questions answered only from the loaded document set."],
  ];
  reqs.forEach(([h, b], i) => card(s, 0.5 + i * 2.3, 1.5, 2.15, 2.1, h, b, i % 2 ? ICE : LIGHT));
  s.addShape(pres.ShapeType.roundRect, { x: 0.5, y: 3.85, w: 9, h: 1.05, fill: { color: NAVY }, line: { color: NAVY }, rectRadius: 0.06 });
  s.addText([
    { text: "Corpus: ", options: { bold: true, color: GOLD } }, { text: "contracts, approvals, financial models, correspondence.   ", options: { color: WHITE } },
    { text: "Users: ", options: { bold: true, color: GOLD } }, { text: "management.   ", options: { color: WHITE } },
    { text: "Character: ", options: { bold: true, color: GOLD } }, { text: "a closed-domain RAG system with a verification and audit layer on top.", options: { color: WHITE } },
  ], { x: 0.75, y: 3.95, w: 8.5, h: 0.85, fontSize: 13, fontFace: FONT_B, isTextBox: true, margin: 0, valign: "middle" });
  s.addNotes("Read the four requirements back in the client's own words. Then ask: have we understood this correctly? Listen for anything new, for example additional document types, other user groups, or Arabic. Note it visibly. Do not move on until they confirm.");
}

// ---------------------------------------------------------------- 4 Brief: System 2
{
  const s = base();
  title(s, "Your brief, as we understood it: System 2", "CRM + Follow-up System across investors, partners/counterparties and customers/members, with a GCC-specific pipeline");
  const reqs = [
    ["Records and stages", "Contact and relationship records with stage and status tracking: initial contact, qualification, active discussion, dormant."],
    ["Follow-ups", "Scheduling and reminders so relationships do not slip."],
    ["Human approval on all outreach", "Every email or message passes a person before sending. No fully automated outbound communication."],
    ["Basic reporting", "Who has been contacted, what stage they are at, what is overdue."],
  ];
  reqs.forEach(([h, b], i) => card(s, 0.5 + i * 2.3, 1.5, 2.15, 2.0, h, b, i === 2 ? "FBF3DC" : (i % 2 ? ICE : LIGHT), i === 2 ? "8A6D0B" : NAVY));
  s.addText("Cross-cutting asks", { x: 0.5, y: 3.7, w: 4, h: 0.3, fontSize: 13, bold: true, color: TEAL, fontFace: FONT_B, isTextBox: true, margin: 0 });
  s.addText(bullets(["Proposed build approach and tools for each system (same platform or different)", "A structure that accepts real data later without a rebuild", "Timeline to a working structure and demo", "Cost or pricing model"], 12), { x: 0.5, y: 4.0, w: 9, h: 1.1, isTextBox: true, margin: 0, valign: "top" });
  s.addNotes("Emphasise that we took the human-approval requirement as a hard design constraint, not a feature toggle: there is no automated sending path in the system. Confirm the three categories and ask what is specific about their GCC pipeline (intermediaries, majlis meetings, regulatory steps), which we will configure rather than hard-code.");
}

// ---------------------------------------------------------------- 5 Our answer
{
  const s = base(true);
  s.addText("Our answer in one line", { x: 0.7, y: 0.5, w: 8.6, h: 0.5, fontSize: 14, bold: true, color: GOLD, fontFace: FONT_B, charSpacing: 2, isTextBox: true, margin: 0 });
  s.addText("Build both systems on one shared platform, deliver them as separately usable products, and make real data a configuration step, not a rebuild.", { x: 0.7, y: 0.95, w: 8.6, h: 1.5, fontSize: 21, bold: true, color: WHITE, fontFace: FONT_H, isTextBox: true, margin: 0, valign: "top" });
  const p = [
    ["Evidence first", "Answers only from your documents, cited to the page, refused when unsupported."],
    ["Human in control", "No outbound message without a named approver. Reminders go to staff, never to contacts."],
    ["Yours from day one", "You own the code, the cloud accounts and the data. AI vendors are swappable behind a gateway."],
  ];
  p.forEach(([h, b], i) => {
    const x = 0.7 + i * 2.95;
    s.addShape(pres.ShapeType.roundRect, { x, y: 2.65, w: 2.75, h: 1.85, fill: { color: "273479" }, line: { color: "3A4A9A" }, rectRadius: 0.08 });
    s.addText(h, { x: x + 0.2, y: 2.8, w: 2.4, h: 0.4, fontSize: 15, bold: true, color: GOLD, fontFace: FONT_B, isTextBox: true, margin: 0 });
    s.addText(b, { x: x + 0.2, y: 3.2, w: 2.4, h: 1.2, fontSize: 12, color: "E6EAF7", fontFace: FONT_B, isTextBox: true, margin: 0, valign: "top" });
  });
  s.addText("Working, integrated demo at week 8-9.  Production at week 20.  Pilot run cost from roughly USD 150-400 per month.", { x: 0.7, y: 4.75, w: 8.6, h: 0.4, fontSize: 12, color: "CADCFC", fontFace: FONT_B, isTextBox: true, margin: 0 });
  s.addNotes("This is the slide to memorise. Say the one-liner, then the three principles as phrases: evidence first; human in control; yours from day one. Give the two dates and the pilot run-cost range. Do not go into build fees here; that comes on slide 16.");
}

// ---------------------------------------------------------------- 6 Platform
{
  const s = base();
  title(s, "One platform, two products, connected at the top", "Each system is developed and usable on its own; they share identity, entities, documents, the AI gateway and one audit trail");
  img(s, "01_platform_overview.png", 0.5, 1.3, 9, 3.8);
  s.addNotes("Explain top to bottom. Users log in once. The shared platform layer is built once and gives both systems the same identity, the same list of organisations and people, one document store, one AI gateway (this is the anti-lock-in point), workflow, an immutable audit log, and monitoring. System 1 and System 2 each stand alone. The gold arrow is the connection: the same investor appears in a contract and in the pipeline, so findings from documents can appear on the relationship page. The bottom row is how real data arrives later.");
}

// ---------------------------------------------------------------- 7 System 1 pipeline
{
  const s = base();
  title(s, "System 1: shows its work, checks its homework", "Retrieval-augmented generation with citations, a grounding check and refusal when the documents do not contain the answer");
  img(s, "02_eia_pipeline.png", 0.5, 1.3, 9, 3.8);
  s.addNotes("Two flows. Ingestion happens once per document: scan, classify, parse including OCR for scans in Arabic and English, chunk with page references, index, and extract claims. Answering happens per question: apply the user's permissions first, retrieve by keyword and by meaning, re-rank, draft an answer with citations, then the gold box: an independent grounding check that removes any sentence the sources do not support. If nothing survives, the assistant says the documents do not contain the answer. Everything is logged. Phrase: 'it shows its work, and a second check marks its homework'.");
}

// ---------------------------------------------------------------- 8 Claims ledger
{
  const s = base();
  title(s, "Contradictions need structure, not just search", "A claims ledger extracts every figure, date and term with its source, then compares like with like across the whole document set");
  img(s, "03_claims_ledger.png", 0.5, 1.3, 9, 3.8);
  s.addNotes("This is the differentiator. Walk the example: the contract says AED 12.5m, the board memo says 11.8m, the financial model says 12.5m. Each becomes a row: entity, attribute, value, unit, page, exact quote. Comparing rows about the same entity and attribute finds the conflict, and the flag shows both quotes. Decision checklists (bottom) are configured once per decision type; the system marks evidence as present, missing or contradicted. Mention version handling: a superseded draft is not reported as a contradiction of the final.");
}

// ---------------------------------------------------------------- 9 CRM pipelines
{
  const s = base();
  title(s, "System 2: pipelines per category", "Three categories with a GCC-specific path. Stages, SLAs and exit criteria are configuration; relationship managers see a board, leadership sees the whole picture");
  const stages = ["Introduction", "First meeting / majlis", "NDA", "Qualification", "Active discussion", "Term sheet / MoU", "Regulatory / board approval", "Signed"];
  const w = 1.12, x0 = 0.5;
  stages.forEach((t, i) => {
    s.addShape(pres.ShapeType.chevron, { x: x0 + i * (w - 0.02), y: 1.45, w: w + 0.1, h: 0.75, fill: { color: i < 4 ? TEAL : NAVY }, line: { color: WHITE, width: 1 } });
    s.addText(t, { x: x0 + i * (w - 0.02) + 0.3, y: 1.45, w: w - 0.36, h: 0.75, fontSize: 7.5, bold: true, color: WHITE, fontFace: FONT_B, align: "center", valign: "middle", isTextBox: true, margin: 0 });
  });
  s.addText("Example GCC investor pipeline (configurable). A 'Dormant' status can be applied at any stage and is reported separately.", { x: 0.5, y: 2.25, w: 9, h: 0.3, fontSize: 10, italic: true, color: GREY, fontFace: FONT_B, isTextBox: true, margin: 0 });
  const cats = [
    ["Investors", "Sovereign and institutional funds, family offices, banks. Stages above. Fields: ticket size, mandate, KYC status, source of introduction."],
    ["Partners / counterparties", "Suppliers, EPC contractors, JV partners, regulators. Stages: contact, qualification, negotiation, contracted, active, dormant. Links to contracts in System 1."],
    ["Customers / members", "Clients and membership relationships. Stages: lead, onboarding, active, at risk, churned. Consent and preferred channel tracked."],
  ];
  cats.forEach(([h, b], i) => card(s, 0.5 + i * 3.05, 2.65, 2.9, 1.65, h, b, i % 2 ? ICE : LIGHT, NAVY, "333333", 10.5));
  s.addText(bullets(["Follow-ups with due dates, owners and reminders to staff; overdue and stale relationships surface on the dashboard", "Full history: stage changes, meetings, calls, messages, attachments; attachments can feed System 1"], 11), { x: 0.5, y: 4.4, w: 9, h: 0.7, isTextBox: true, margin: 0, valign: "top" });
  s.addNotes("Show the chevrons as an example, not a prescription. Ask them what their real stages are; that becomes configuration in discovery. Point out the three category cards and that fields differ per category. Emphasise: reminders go to their staff, never to the contact.");
}

// ---------------------------------------------------------------- 10 Approval gate
{
  const s = base();
  title(s, "Nothing leaves without a human's name on it", "The approval gate is enforced in the database, not just the screen: drafter cannot approve, and there is no scheduled-send path in the code");
  img(s, "04_crm_approval_flow.png", 0.5, 1.3, 9, 3.8);
  s.addNotes("Walk left to right: trigger, draft (human or AI-assisted from the relationship history), review queue with risk flags, decision by a named approver who is not the drafter, send through the client's own mailbox under the approver's authority, and record. The red box is the guarantee: no auto-send, no AI sending on its own, no bulk blasts without per-message approval. If asked whether staff can bypass it: not through the system; sending requires an approval record from a different user, enforced in the database.");
}

// ---------------------------------------------------------------- 11 Residency
{
  const s = base();
  title(s, "Data residency is a policy setting, not a rebuild", "Data at rest in a GCC region from day one; AI processing routed by classification; a fully sovereign option designed in");
  img(s, "05_residency_patterns.png", 0.5, 1.3, 9, 3.8);
  s.addNotes("Be precise here. Data at rest: your cloud account, a GCC region (AWS UAE or Bahrain, Azure UAE North, Google Cloud Dammam), or on premises. Data in processing: with Pattern A, only the passages needed for a question go to the model, encrypted, under enterprise terms that prohibit training. As of early 2026, Claude on AWS in the Middle East regions uses cross-region inference, so processing may transit outside the region; a fully in-country frontier endpoint was not confirmed and we will re-verify at discovery. Pattern B routes restricted and personal-data documents to an in-region model. Pattern C runs everything in country on open-weight models at higher cost. Recommendation: start on A for the demo, design for B, keep C as the upgrade path.");
}

// ---------------------------------------------------------------- 12 Security & trust
{
  const s = base();
  title(s, "Security, audit and AI governance", "Designed so every action is attributable and every answer is checkable");
  const rows = [
    ["Single sign-on and roles", "Your identity provider, multi-factor authentication, roles scoped by category or business unit."],
    ["Access before retrieval", "Per-document access lists are applied inside the search; the model never sees a passage the user cannot open."],
    ["Immutable audit trail", "Every view, question, answer, finding, approval and send is logged with hash chaining; exportable to your SIEM."],
    ["No training on your data", "Enterprise terms with providers; zero or limited retention where offered; self-hosting removes third parties entirely."],
    ["Measured accuracy", "A golden question set agreed with you; every release scored on faithfulness, citations, extraction precision and correct refusals."],
    ["Compliance by design", "Consent and lawful basis per contact; residency per jurisdiction; retention and deletion; supports Saudi PDPL, UAE PDPL, DIFC and ADGM regimes."],
  ];
  rows.forEach(([h, b], i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.5 + col * 4.65, y = 1.4 + row * 1.2;
    s.addShape(pres.ShapeType.ellipse, { x, y: y + 0.05, w: 0.5, h: 0.5, fill: { color: i % 2 ? GOLD : TEAL }, line: { color: WHITE } });
    s.addText(["S", "A", "L", "N", "M", "C"][i], { x, y: y + 0.05, w: 0.5, h: 0.5, fontSize: 14, bold: true, color: WHITE, fontFace: FONT_B, align: "center", valign: "middle", isTextBox: true, margin: 0 });
    s.addText(h, { x: x + 0.65, y, w: 3.8, h: 0.32, fontSize: 13, bold: true, color: NAVY, fontFace: FONT_B, isTextBox: true, margin: 0 });
    s.addText(b, { x: x + 0.65, y: y + 0.32, w: 3.8, h: 0.8, fontSize: 10.5, color: "444444", fontFace: FONT_B, isTextBox: true, margin: 0, valign: "top" });
  });
  s.addNotes("Do not read all six. Pick the two the audience cares about: for a CISO, access-before-retrieval and the audit chain; for legal, compliance by design. Avoid the phrase 'certified compliant'; say 'designed to support compliance, your legal team confirms the lawful basis and we implement and evidence it'.");
}

// ---------------------------------------------------------------- 13 Real data later
{
  const s = base();
  title(s, "Plugging in real data later, without a rebuild", "Five mechanisms make this a commitment we can keep");
  const m = [
    ["1. Schema-first with custom fields", "Every record has well-understood columns plus custom fields an administrator adds in the interface."],
    ["2. Configuration-driven rules", "Categories, pipelines, stages, decision checklists, approval policies and routing are settings, not code."],
    ["3. Import templates with preview", "CSV/XLSX for contacts, organisations, relationships, history; validation preview; re-import updates, never duplicates."],
    ["4. Connectors and API", "SharePoint/OneDrive, Google Drive, Microsoft 365 and Gmail mailboxes, WhatsApp Business; API and webhooks for ERP and existing CRM."],
    ["5. Demo data is removable", "Every demo record is flagged; one administrative action removes it all and leaves configuration and users intact."],
  ];
  m.forEach(([h, b], i) => {
    const col = i % 3, row = Math.floor(i / 3);
    card(s, 0.5 + col * 3.05, 1.4 + row * 1.8, 2.9, 1.65, h, b, i % 2 ? ICE : LIGHT, NAVY, "333333", 10.5);
  });
  s.addShape(pres.ShapeType.roundRect, { x: 3.55, y: 3.2, w: 5.95, h: 1.65, fill: { color: NAVY }, line: { color: NAVY }, rectRadius: 0.08 });
  s.addText("Onboarding sequence: data protection sign-off, configure, connect identity, import contacts, point connectors at one document library, review first findings with management, run the golden question set, connect the mailbox, switch on reminders, remove demo data.", { x: 3.75, y: 3.3, w: 5.55, h: 1.45, fontSize: 11.5, color: WHITE, fontFace: FONT_B, isTextBox: true, margin: 0, valign: "middle" });
  s.addNotes("This answers their explicit question about plugging in real data later. The strongest line: demo data is flagged and removed with one action; configuration stays. Mention that the data model exports cleanly to Salesforce or HubSpot if they ever want that, so there is no lock-in to us either.");
}

// ---------------------------------------------------------------- 14 Timeline
{
  const s = base();
  title(s, "Timeline: demo week 8-9, production week 20", "Working structure at week 6. Team of 3-4 plus part-time specialists; weekly client decisions; sample documents by end of week 1");
  img(s, "07_timeline.png", 0.4, 1.3, 9.2, 3.0);
  s.addText(bullets(["Discovery fixes residency, identity, decision types and pipelines: the decisions that are expensive to change later", "Milestone reviews at weeks 2, 6, 9, 15 and 20 with written acceptance; go / no-go for the pilot at week 9; optional clickable prototype at week 4"], 10.5), { x: 0.5, y: 4.35, w: 9, h: 0.8, isTextBox: true, margin: 0, valign: "top" });
  s.addNotes("Give the three dates. Explain why discovery is not compressible: residency and identity decisions are expensive to change later, and the golden question set built in discovery is how they will hold us to accuracy targets. Offer the week-4 prototype if they want an early look. Note dependencies on them: sample documents by end of week 1, identity provider access by week 2.");
}

// ---------------------------------------------------------------- 15 Scaling
{
  const s = base();
  title(s, "From pilot to group-scale platform", "Same code base at every tier; what changes is hosting footprint, model deployment, connectors, support and compliance evidence");
  img(s, "06_scaling_ladder.png", 0.5, 1.3, 9, 3.8);
  s.addNotes("Explain the tiers as run cost, separate from build fees. Tier 0 pilot: managed cloud services and a frontier model via API, hundreds of dollars a month. Tier 1 departmental: single sign-on, backups, monitoring, connectors, low thousands. Tier 2 enterprise or sovereign: in-region GPUs and self-hosted models, high availability, compliance evidence, tens of thousands. Tier 3 group scale: multi-entity tenancy, dedicated GPU capacity, 24/7 operations, ERP and board-portal integration, six figures a month. The point: they start small and the architecture does not change.");
}

// ---------------------------------------------------------------- 16 Commercial model
{
  const s = base();
  title(s, "Commercial model", "Fixed price where scope is known, milestones for the rest, a managed service after go-live, and you own everything");
  const rows = [
    ["Component", "Basis", "Timing"],
    ["Phase 0 Discovery", "Fixed fee", "Weeks 0-2"],
    ["Phases 1-2 to integrated demo", "Fixed fee, paid 40 / 30 / 30 on signature, week 6 and week 9", "Weeks 1-9"],
    ["Phase 3 Pilot on real data", "Fixed fee for defined scope; rate card for additions", "Weeks 9-15"],
    ["Phase 4 Production go-live", "Fixed fee on acceptance", "Weeks 15-20"],
    ["Managed service", "Annual platform fee plus support tier; cloud and AI usage passed through at cost from your accounts", "From go-live"],
  ];
  s.addTable(rows.map((r, ri) => r.map((c) => ({ text: c, options: { bold: ri === 0, color: ri === 0 ? WHITE : "333333", fill: { color: ri === 0 ? NAVY : (ri % 2 ? LIGHT : WHITE) }, fontSize: 11, fontFace: FONT_B, valign: "middle" } }))), { x: 0.5, y: 1.4, w: 5.9, colW: [1.9, 2.9, 1.1], border: { type: "solid", color: "D5DAE6", pt: 0.75 }, rowH: 0.42 });
  s.addShape(pres.ShapeType.roundRect, { x: 6.65, y: 1.4, w: 2.85, h: 3.6, fill: { color: NAVY }, line: { color: NAVY }, rectRadius: 0.08 });
  s.addText("You own", { x: 6.85, y: 1.55, w: 2.5, h: 0.4, fontSize: 16, bold: true, color: GOLD, fontFace: FONT_B, isTextBox: true, margin: 0 });
  s.addText(bullets(["All source code and configuration", "The cloud and AI provider accounts", "All data, exportable in standard formats", "The relationship with every vendor"], 12, WHITE), { x: 6.85, y: 2.0, w: 2.5, h: 1.8, isTextBox: true, margin: 0, valign: "top" });
  s.addText("Fees are set from role effort and an agreed blended rate; every assumption is in the cost workbook we will walk through in the detailed session.", { x: 6.85, y: 4.05, w: 2.5, h: 0.9, fontSize: 10, color: "CADCFC", fontFace: FONT_B, isTextBox: true, margin: 0, valign: "top" });
  s.addNotes("Present the structure, not a single number. If pressed for a figure, give the pilot run-cost range and say build fees follow discovery and are shown transparently in the workbook (role effort times an agreed rate). Stress the ownership box: this is the answer to 'what if you disappear'.");
}

// ---------------------------------------------------------------- 17 Needs and gaps
{
  const s = base();
  title(s, "What we need, and what the brief did not cover", "Decisions that make the project succeed, best taken in discovery");
  s.addText("What we need to start", { x: 0.5, y: 1.35, w: 4.3, h: 0.35, fontSize: 14, bold: true, color: TEAL, fontFace: FONT_B, isTextBox: true, margin: 0 });
  s.addText(bullets(["A named sponsor and a product owner who can decide weekly", "50-200 sample documents under NDA: mixed formats, both languages, some scanned", "The five to ten decisions management makes most often, and the evidence expected for each", "Jurisdiction, data classification rules and preferred cloud provider", "Identity provider and mailbox platform details"], 11.5), { x: 0.5, y: 1.75, w: 4.3, h: 3.2, isTextBox: true, margin: 0, valign: "top" });
  s.addText("Not in the brief: decide early", { x: 5.2, y: 1.35, w: 4.3, h: 0.35, fontSize: 14, bold: true, color: GOLD, fontFace: FONT_B, isTextBox: true, margin: 0 });
  s.addText(bullets(["Arabic-language documents and interface (we assume yes)", "Document version control: drafts vs finals", "Who adjudicates a flagged contradiction", "Consent and lawful basis for investor personal data under GCC data protection laws", "Integration with existing systems: ERP, document management, existing CRM", "Accuracy acceptance criteria; support and disaster-recovery expectations"], 11.5), { x: 5.2, y: 1.75, w: 4.3, h: 3.2, isTextBox: true, margin: 0, valign: "top" });
  s.addNotes("Frame the right-hand column as 'decisions that make the project succeed', not as criticism of the brief. Each has a recommended default in our gaps document. Ask directly for the left-hand items, especially the sample documents and the sponsor.");
}

// ---------------------------------------------------------------- 18 Next steps
{
  const s = base(true);
  s.addText("Proposed next steps", { x: 0.7, y: 0.6, w: 8.6, h: 0.6, fontSize: 30, bold: true, color: WHITE, fontFace: FONT_H, isTextBox: true, margin: 0 });
  const steps = [
    ["This week", "Mutual NDA; you name the sponsor and product owner; we send the full proposal pack."],
    ["Within two weeks", "Detailed session with our architect: design, security and residency deep-dive, commercial model walk-through, sample documents reviewed together."],
    ["On agreement", "Two-week discovery starts; environments created in your cloud account; golden question set built; working structure at week 6; integrated demo at week 8-9."],
  ];
  steps.forEach(([h, b], i) => {
    const y = 1.5 + i * 1.05;
    circleNum(s, 0.7, y + 0.05, i + 1, GOLD);
    s.addText(h, { x: 1.3, y, w: 8, h: 0.35, fontSize: 16, bold: true, color: GOLD, fontFace: FONT_B, isTextBox: true, margin: 0 });
    s.addText(b, { x: 1.3, y: y + 0.36, w: 8, h: 0.6, fontSize: 13, color: "E6EAF7", fontFace: FONT_B, isTextBox: true, margin: 0, valign: "top" });
  });
  s.addText("Thank you.", { x: 0.7, y: 4.75, w: 8, h: 0.4, fontSize: 14, color: "CADCFC", fontFace: FONT_B, isTextBox: true, margin: 0 });
  s.addNotes("Ask explicitly for the three outcomes: NDA and sample documents, named sponsor and product owner, and a date for the detailed session. Confirm the date before leaving the room. Send the follow-up note within 24 hours.");
}

const out = path.join(__dirname, "..", "proposal", "02_First_Meeting_Presentation.pptx");
pres.writeFile({ fileName: out }).then(() => console.log("wrote", out));
