"""Generate all diagrams for the proposal package as PNG files."""
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch, Rectangle
import os

OUT = "/home/user/CRM/proposal/diagrams"
os.makedirs(OUT, exist_ok=True)

NAVY = "#1E2761"
TEAL = "#1C7293"
GOLD = "#C9A227"
ICE = "#EEF2FA"
GREY = "#5A6270"
LIGHT = "#F7F8FB"
WHITE = "#FFFFFF"
RED = "#B23A48"
GREEN = "#2E7D5B"

plt.rcParams["font.family"] = "DejaVu Sans"


def box(ax, x, y, w, h, text, fc=NAVY, ec=None, tc=WHITE, fs=10, bold=True, radius=0.02, lw=1.2):
    p = FancyBboxPatch((x, y), w, h, boxstyle=f"round,pad=0,rounding_size={radius}",
                       fc=fc, ec=ec or fc, lw=lw)
    ax.add_patch(p)
    ax.text(x + w / 2, y + h / 2, text, ha="center", va="center", color=tc,
            fontsize=fs, fontweight="bold" if bold else "normal", wrap=True)


def arrow(ax, x1, y1, x2, y2, color=GREY, lw=1.6, style="-|>", ms=14, cs="arc3,rad=0"):
    a = FancyArrowPatch((x1, y1), (x2, y2), arrowstyle=style, mutation_scale=ms,
                        color=color, lw=lw, connectionstyle=cs)
    ax.add_patch(a)


def canvas(w=13, h=7.3):
    fig, ax = plt.subplots(figsize=(w, h), dpi=200)
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis("off")
    fig.patch.set_facecolor(WHITE)
    return fig, ax


def save(fig, name):
    fig.savefig(os.path.join(OUT, name), bbox_inches="tight", facecolor=WHITE, pad_inches=0.15)
    plt.close(fig)
    print("wrote", name)


# ---------------------------------------------------------------- 1. Platform overview
fig, ax = canvas()
ax.text(0.5, 0.965, "Top-level architecture: two systems, one shared platform layer",
        ha="center", va="center", fontsize=14, fontweight="bold", color=NAVY)

# users row
box(ax, 0.06, 0.84, 0.20, 0.07, "Management / Executives", fc=ICE, tc=NAVY, fs=9.5)
box(ax, 0.30, 0.84, 0.20, 0.07, "Relationship Managers", fc=ICE, tc=NAVY, fs=9.5)
box(ax, 0.54, 0.84, 0.20, 0.07, "Approvers / Compliance", fc=ICE, tc=NAVY, fs=9.5)
box(ax, 0.78, 0.84, 0.16, 0.07, "Administrators", fc=ICE, tc=NAVY, fs=9.5)

# shared platform layer
ax.add_patch(Rectangle((0.04, 0.60), 0.92, 0.19, fc=LIGHT, ec=TEAL, lw=1.5))
ax.text(0.06, 0.765, "SHARED PLATFORM LAYER (built once, used by every system)", fontsize=10,
        fontweight="bold", color=TEAL, va="center")
pl = ["Single Sign-On\n& Roles", "Entity Registry\n(people, orgs)", "Document\nStore",
      "Model Gateway\n(swappable AI)", "Event Bus\n& Workflows", "Audit Log\n(immutable)", "Monitoring\n& Alerts"]
xw = 0.92 / len(pl)
for i, t in enumerate(pl):
    box(ax, 0.04 + i * xw + 0.008, 0.625, xw - 0.016, 0.11, t, fc=TEAL, fs=8.8)

# systems
ax.add_patch(Rectangle((0.04, 0.16), 0.44, 0.40, fc=WHITE, ec=NAVY, lw=1.5))
ax.text(0.26, 0.525, "SYSTEM 1  -  AI Executive Intelligence Assistant", ha="center",
        fontsize=10.5, fontweight="bold", color=NAVY)
s1 = ["Secure document ingestion\n(parse, OCR, multilingual)",
      "Retrieval with citations\n(hybrid search + re-ranking)",
      "Claims ledger: contradiction\n& missing-information detection",
      "Plain-language Q&A grounded\nonly in the loaded document set"]
for i, t in enumerate(s1):
    box(ax, 0.06, 0.44 - i * 0.087, 0.40, 0.07, t, fc=NAVY, fs=8.8)

ax.add_patch(Rectangle((0.52, 0.16), 0.44, 0.40, fc=WHITE, ec=NAVY, lw=1.5))
ax.text(0.74, 0.525, "SYSTEM 2  -  CRM + Follow-up System", ha="center",
        fontsize=10.5, fontweight="bold", color=NAVY)
s2 = ["Contacts & relationships across investors,\npartners/counterparties, customers/members",
      "Configurable pipelines & stages\n(incl. a GCC pipeline for market entry)",
      "Follow-up scheduling, reminders, overdue tracking",
      "Human-approval gate on every outbound message\n(no fully automated outreach)"]
for i, t in enumerate(s2):
    box(ax, 0.54, 0.44 - i * 0.087, 0.40, 0.07, t, fc=NAVY, fs=8.8)

# data sources
ax.add_patch(Rectangle((0.04, 0.03), 0.92, 0.10, fc=ICE, ec=ICE))
ax.text(0.06, 0.105, "DATA SOURCES (plug in later without rebuild)", fontsize=9.5, fontweight="bold", color=NAVY, va="center")
ds = ["SharePoint / OneDrive / Google Drive", "Email (Microsoft 365 / Google)", "CSV / Excel imports",
      "Existing CRM / ERP exports", "APIs & webhooks"]
for i, t in enumerate(ds):
    col, row = i % 3, i // 3
    ax.text(0.06 + col * 0.30, 0.075 - row * 0.035, "•  " + t, fontsize=8.6, color=NAVY, va="center")

# arrows
for x in (0.16, 0.40, 0.64, 0.86):
    arrow(ax, x, 0.84, x, 0.795)
arrow(ax, 0.26, 0.60, 0.26, 0.565)
arrow(ax, 0.74, 0.60, 0.74, 0.565)
arrow(ax, 0.26, 0.13, 0.26, 0.16)
arrow(ax, 0.74, 0.13, 0.74, 0.16)
arrow(ax, 0.48, 0.36, 0.52, 0.36, color=GOLD, lw=2.2, style="<|-|>")
ax.text(0.50, 0.395, "shared\nentities", ha="center", fontsize=7.8, color=GOLD, fontweight="bold")
save(fig, "01_platform_overview.png")

# ---------------------------------------------------------------- 2. EIA pipeline
fig, ax = canvas(13, 6.2)
ax.text(0.5, 0.96, "System 1: how a document becomes a trusted, cited answer", ha="center",
        fontsize=14, fontweight="bold", color=NAVY)
ax.text(0.03, 0.845, "INGESTION (happens once per document)", fontsize=10, fontweight="bold", color=TEAL)
steps = ["1. Upload or\nconnector sync", "2. Virus scan &\nclassification", "3. Parse & OCR\ntables, scans,\nmultilingual",
         "4. Chunk with\npage references", "5. Embed &\nindex", "6. Extract claims\nfacts, figures,\ndates, terms"]
n = len(steps)
w = 0.14
gap = (0.94 - n * w) / (n - 1)
for i, t in enumerate(steps):
    x = 0.03 + i * (w + gap)
    box(ax, x, 0.66, w, 0.14, t, fc=NAVY, fs=8.4)
    if i < n - 1:
        arrow(ax, x + w, 0.73, x + w + gap, 0.73)
box(ax, 0.03, 0.50, 0.94, 0.10,
    "STORAGE: Postgres + pgvector (chunks, embeddings, claims ledger, access-control tags, versions)  |  object storage for originals",
    fc=ICE, tc=NAVY, fs=9.2)
ax.text(0.03, 0.42, "ANSWERING (happens on every question)", fontsize=10, fontweight="bold", color=TEAL)
q = ["1. Question +\nuser permissions", "2. Hybrid retrieval\nkeyword +\nsemantic", "3. Re-rank top\npassages",
     "4. Draft answer\nwith citations", "5. Grounding check\nis every sentence\nsupported?", "6. Deliver or\ndecline;\naudit log"]
for i, t in enumerate(q):
    x = 0.03 + i * (w + gap)
    fc = GOLD if i == 4 else TEAL
    box(ax, x, 0.22, w, 0.14, t, fc=fc, fs=8.4)
    if i < n - 1:
        arrow(ax, x + w, 0.29, x + w + gap, 0.29)
arrow(ax, 0.50, 0.50, 0.50, 0.40, color=GREY)
ax.text(0.03, 0.10, "Design rules: the model may only answer from retrieved passages; every answer carries document + page citations; "
        "unsupported answers are refused, not guessed;\nevery query, passage, answer and user is logged to an immutable audit trail.",
        fontsize=9, color=GREY, va="center")
save(fig, "02_eia_pipeline.png")

# ---------------------------------------------------------------- 3. Claims ledger
fig, ax = canvas(13, 6.6)
ax.text(0.5, 0.96, "Contradiction and gap detection: the claims ledger", ha="center",
        fontsize=14, fontweight="bold", color=NAVY)
docs = [("Contract v2.pdf\n(p.14)", "Contract value\n= MYR 12.5m"), ("Board approval.docx\n(p.2)", "Contract value\n= MYR 11.8m"),
        ("Financial model.xlsx\n(Sheet: Inputs)", "Contract value\n= MYR 12.5m")]
for i, (d, c) in enumerate(docs):
    y = 0.72 - i * 0.22
    box(ax, 0.03, y, 0.20, 0.15, d, fc=ICE, tc=NAVY, fs=9)
    arrow(ax, 0.23, y + 0.075, 0.29, y + 0.075)
    box(ax, 0.29, y, 0.20, 0.15, "extracted claim\n" + c, fc=TEAL, fs=8.8)
    arrow(ax, 0.49, y + 0.075, 0.55, 0.60, cs="arc3,rad=0.0")
box(ax, 0.55, 0.50, 0.22, 0.24, "CLAIMS LEDGER\nentity + attribute + value\n+ unit + date + source + page\n+ quoted text", fc=NAVY, fs=9)
arrow(ax, 0.77, 0.66, 0.80, 0.66)
box(ax, 0.80, 0.58, 0.19, 0.16, "CONTRADICTION FLAG\n12.5m vs 11.8m\n2 documents agree,\n1 differs", fc=RED, fs=8.5)
arrow(ax, 0.77, 0.56, 0.80, 0.44)
box(ax, 0.80, 0.34, 0.19, 0.16, "GAP FLAG\n'Approve payment' needs\na signed invoice:\nnot in document set", fc=GOLD, fs=8.5)
box(ax, 0.55, 0.22, 0.22, 0.20, "DECISION CHECKLISTS\n(configurable, no code)\ne.g. 'Approve contract' needs:\nsigned contract, board minute,\nbudget line, legal opinion", fc=ICE, tc=NAVY, fs=8.6)
arrow(ax, 0.66, 0.42, 0.66, 0.50)
ax.text(0.03, 0.08, "Why this matters: plain chatbots cannot reliably spot conflicts because they see only a few passages at a time. "
        "A structured ledger compares every figure, date and term\nacross all documents, records versions (v1 vs v2 is not a contradiction), "
        "and routes each flag to a named owner for resolution.", fontsize=9, color=GREY, va="center")
save(fig, "03_claims_ledger.png")

# ---------------------------------------------------------------- 4. CRM approval flow
fig, ax = canvas(13, 6.2)
ax.text(0.5, 0.96, "System 2: human-approval gate on all outbound communication", ha="center",
        fontsize=14, fontweight="bold", color=NAVY)
flow = [("Trigger", "Follow-up due,\nstage change, or\nmanual request", ICE, NAVY),
        ("Draft", "Manager writes, or\nAI proposes a draft\nfrom CRM context", TEAL, WHITE),
        ("Review queue", "Named approver sees\ndraft, recipient, history,\nrisk flags", NAVY, WHITE),
        ("Decision", "Approve / Edit /\nReject (with reason)\nfour-eyes rule", GOLD, WHITE),
        ("Send", "Sent through connected\nmailbox (M365 / Gmail /\nWhatsApp Business)", TEAL, WHITE),
        ("Record", "Message, approver,\ntimestamp, version\nlogged to audit trail", NAVY, WHITE)]
n = len(flow)
w = 0.145
gap = (0.94 - n * w) / (n - 1)
for i, (h, t, fc, tc) in enumerate(flow):
    x = 0.03 + i * (w + gap)
    ax.text(x + w / 2, 0.80, h.upper(), ha="center", fontsize=9.5, fontweight="bold", color=NAVY)
    box(ax, x, 0.56, w, 0.20, t, fc=fc, tc=tc, fs=8.0, bold=False)
    if i < n - 1:
        arrow(ax, x + w, 0.66, x + w + gap, 0.66)
# reject loop
xd = 0.03 + 3 * (w + gap) + w / 2
xr = 0.03 + 1 * (w + gap) + w / 2
ax.plot([xd, xd, xr], [0.56, 0.47, 0.47], color=RED, lw=1.6)
arrow(ax, xr, 0.47, xr, 0.555, color=RED, lw=1.6)
ax.text((xd + xr) / 2, 0.435, "rejected: back to drafter with comments", ha="center", fontsize=8.5, color=RED)
# bottom: what the system never does
box(ax, 0.03, 0.16, 0.45, 0.20, "NEVER: no scheduled auto-send, no AI sending on its own,\nno bulk blasts without per-message approval.\n"
    "Every send has a human name attached.", fc=LIGHT, ec=RED, tc=RED, fs=9, lw=1.5)
box(ax, 0.52, 0.16, 0.45, 0.20, "ALWAYS: reminders to the human, not to the contact.\nOverdue and stale relationships surface on the dashboard.\n"
    "Approvers can be per category (investor vs customer).", fc=LIGHT, ec=GREEN, tc=GREEN, fs=9, lw=1.5)
save(fig, "04_crm_approval_flow.png")

# ---------------------------------------------------------------- 5. Residency options
fig, ax = canvas(13, 6.4)
ax.text(0.5, 0.96, "Where the data and the AI model live: three deployment patterns", ha="center",
        fontsize=14, fontweight="bold", color=NAVY)
opts = [("PATTERN A  -  Cloud, managed AI",
         "Documents & database stored in Malaysia\n(AWS ap-southeast-5 / Azure Malaysia West)\nor Singapore. No major provider has a full\nregion in the Philippines.\nAI inference via a frontier model API\n(Claude via AWS Bedrock cross-region,\nAnthropic API, Microsoft Foundry).\n\n"
         "Fastest, cheapest, highest AI quality.\nPrompts may be processed outside the\ncountry in transit (encrypted, not stored\nby the provider under enterprise terms).",
         TEAL),
        ("PATTERN B  -  Hybrid by classification",
         "Same as A for internal / non-sensitive\ndocuments. Documents tagged 'restricted'\nor containing personal data are routed\nonly to an in-region model.\n\n"
         "Our recommended target state.\nRequires a document classification\nstep at ingestion (we build it in).",
         NAVY),
        ("PATTERN C  -  Fully sovereign",
         "Everything, including the AI model, runs\non GPUs inside the country (cloud region\nor private data centre). Open-weight models\n(e.g. Qwen 3.5, GLM-5, Gemma 4) served\nwith vLLM.\n\n"
         "Highest control and compliance.\nHigher fixed cost; model quality slightly\nbehind frontier APIs; needs GPU ops.",
         GOLD)]
for i, (h, t, c) in enumerate(opts):
    x = 0.03 + i * 0.32
    box(ax, x, 0.72, 0.30, 0.10, h, fc=c, fs=10)
    ax.add_patch(Rectangle((x, 0.20), 0.30, 0.50, fc=LIGHT, ec=c, lw=1.5))
    ax.text(x + 0.015, 0.68, t, fontsize=8.6, color=NAVY, va="top", ha="left", linespacing=1.35)
ax.text(0.5, 0.10, "The model gateway makes the pattern a configuration choice, not a rebuild: the same application code talks to any model.\n"
        "Recommendation: start on Pattern A for the demo, design for B, keep C as a documented upgrade path.",
        ha="center", fontsize=9.5, color=GREY, va="center")
save(fig, "05_residency_patterns.png")

# ---------------------------------------------------------------- 6. Scaling ladder
fig, ax = canvas(13, 6.6)
ax.text(0.5, 0.96, "From bare-minimum pilot to group-scale platform", ha="center",
        fontsize=14, fontweight="bold", color=NAVY)
tiers = [("TIER 0\nPilot / Demo", "≈ USD 150-400 / month run cost\n5-10 users, ≤ 2,000 documents\nManaged cloud, single region\nFrontier model via API",
          ICE, NAVY),
         ("TIER 1\nDepartmental", "≈ USD 1.5k-5k / month\n20-75 users, ≤ 50k documents\nSSO, backups, monitoring, SLAs\nConnectors to M365 / Drive", TEAL, WHITE),
         ("TIER 2\nEnterprise / Sovereign", "≈ USD 15k-60k / month\n100-500 users, millions of pages\nIn-region GPUs, self-hosted models\nISO 27001 / SOC 2 aligned ops, DR", NAVY, WHITE),
         ("TIER 3\nGroup-scale", "USD 100k+ / month\nMulti-entity, multi-country tenants\nDedicated GPU clusters, 24/7 ops\nERP / DMS / board portal links", GOLD, WHITE)]
for i, (h, t, fc, tc) in enumerate(tiers):
    x = 0.03 + i * 0.24
    yb = 0.16 + i * 0.07
    hh = 0.50
    box(ax, x, yb, 0.22, hh, "", fc=fc)
    ax.text(x + 0.11, yb + hh - 0.05, h, ha="center", va="top", fontsize=10.5, fontweight="bold", color=tc)
    ax.text(x + 0.012, yb + hh - 0.19, t, ha="left", va="top", fontsize=8.2, color=tc, linespacing=1.45)
    if i < 3:
        arrow(ax, x + 0.22, yb + 0.04, x + 0.24, yb + 0.04 + 0.07, color=GREY, lw=1.4)
ax.text(0.5, 0.08, "Same code base at every tier. What changes: hosting footprint, model deployment pattern, "
        "number of connectors, support model and compliance evidence.\nRun cost excludes build effort and licences for third-party enterprise tools; see the Cost & Pricing Model workbook.",
        ha="center", fontsize=9, color=GREY, va="center")
save(fig, "06_scaling_ladder.png")

# ---------------------------------------------------------------- 7. Timeline
fig, ax = plt.subplots(figsize=(14, 6.4), dpi=200)
fig.patch.set_facecolor(WHITE)
phases = [
    ("Phase 0  Discovery & setup", 0, 2, ICE, NAVY),
    ("Phase 1  Platform foundation (SSO, registry, audit, gateway)", 1, 4, TEAL, WHITE),
    ("Phase 1  System 1: ingestion + cited Q&A", 2, 6, NAVY, WHITE),
    ("Phase 1  System 2: CRM records, pipelines, follow-ups", 2, 6, NAVY, WHITE),
    ("Phase 2  Claims ledger: contradictions + gaps", 5, 9, NAVY, WHITE),
    ("Phase 2  Approval-gated outreach + reporting", 5, 9, NAVY, WHITE),
    ("MILESTONE  Integrated working demo", 8, 9, GOLD, WHITE),
    ("Phase 3  Pilot with real data, evaluation, tuning", 9, 15, TEAL, WHITE),
    ("Phase 4  Production hardening, security review, go-live", 15, 20, TEAL, WHITE),
    ("Phase 5  Scale-out roadmap (connectors, sovereign option, integrations)", 20, 26, ICE, NAVY),
]
names = []
for i, (name, s0, e, fc, tc) in enumerate(reversed(phases)):
    ax.barh(i, e - s0, left=s0, color=fc, edgecolor=WHITE, height=0.7)
    ax.text(e + 0.2, i, f"wk {s0}-{e}", va="center", ha="left", fontsize=8, color=GREY)
    names.append(name)
ax.set_yticks(range(len(names)))
ax.set_yticklabels(names, fontsize=8.8, color=NAVY)
ax.tick_params(axis="y", length=0)
ax.set_xlim(0, 27.5)
ax.set_xticks(range(0, 27, 2))
ax.set_xlabel("Weeks from kick-off", fontsize=10, color=GREY)
ax.set_title("Indicative delivery timeline (team of 3-4; demo at week 8-9, production at week 20)", fontsize=13,
             fontweight="bold", color=NAVY, pad=12)
for spine in ("top", "right", "left"):
    ax.spines[spine].set_visible(False)
ax.axvline(9, color=GOLD, lw=1.5, ls="--")
ax.axvline(20, color=TEAL, lw=1.5, ls="--")
ax.grid(axis="x", color="#E3E6EE", lw=0.8)
ax.set_axisbelow(True)
fig.tight_layout()
save(fig, "07_timeline.png")

# ---------------------------------------------------------------- 8. Data model (simplified ERD)
fig, ax = canvas(13, 6.6)
ax.text(0.5, 0.96, "Shared data model (simplified): why real data plugs in without a rebuild", ha="center",
        fontsize=14, fontweight="bold", color=NAVY)
ents = {
    "Organisation": (0.40, 0.60, "id, legal name, type (investor /\npartner / customer / regulator),\ncountry, category, custom fields"),
    "Person": (0.40, 0.25, "id, name, org_id, role, emails,\nphones, preferred language,\nconsent status, custom fields"),
    "Relationship": (0.70, 0.60, "org_id or person_id, category,\npipeline_id, stage, owner,\nlast_touch, next_follow_up"),
    "Interaction": (0.70, 0.25, "relationship_id, type (meeting,\ncall, email, message), date,\nnotes, attachments"),
    "Outreach Request": (0.10, 0.25, "draft, channel, recipient,\nstatus (draft/pending/approved/\nrejected/sent), approver_id"),
    "Document": (0.10, 0.60, "id, title, version, source,\nclassification, org_ids, acl,\nchecksum, ingested_at"),
    "Claim": (0.10, 0.85, "document_id, page, entity,\nattribute, value, unit, date,\nquote, confidence"),
    "Decision Checklist": (0.70, 0.85, "decision type, required\nevidence items, satisfied_by\n(claim / document), gaps"),
}
for name, (x, y, f) in ents.items():
    box(ax, x, y, 0.22, 0.075, name, fc=NAVY, fs=9.5)
    box(ax, x, y - 0.115, 0.22, 0.115, f, fc=LIGHT, ec=NAVY, tc=NAVY, fs=7.6, bold=False)
links = [((0.51, 0.60 - 0.115), (0.51, 0.325)), ((0.62, 0.635), (0.70, 0.635)), ((0.62, 0.285), (0.70, 0.285)),
         ((0.81, 0.60 - 0.115), (0.81, 0.325)), ((0.32, 0.285), (0.40, 0.285)), ((0.32, 0.635), (0.40, 0.635)),
         ((0.21, 0.85 - 0.115), (0.21, 0.675)), ((0.32, 0.87), (0.70, 0.87))]
for (x1, y1), (x2, y2) in links:
    arrow(ax, x1, y1, x2, y2, color=GREY, style="-", lw=1.4)
ax.text(0.5, 0.05, "Every table carries: tenant_id, created_by, created_at, updated_at, is_demo (so demo data can be wiped in one command), "
        "and a JSON 'custom fields' column\nso client-specific attributes are added by configuration. Imports map client columns to these fields through a template, not code.",
        ha="center", fontsize=8.8, color=GREY, va="center")
save(fig, "08_data_model.png")
print("done")
