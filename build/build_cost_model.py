"""Cost and Pricing Model workbook (Document 05). All calculations are live formulas."""
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
from openpyxl.comments import Comment

OUT = "/home/user/CRM/proposal/05_Cost_and_Pricing_Model.xlsx"
FONT = "Arial"
NAVY = "1E2761"; TEAL = "1C7293"; ICE = "EEF2FA"; YELLOW = "FFFF00"
BLUE = Font(name=FONT, size=10, color="0000FF")
BLACK = Font(name=FONT, size=10, color="000000")
GREEN = Font(name=FONT, size=10, color="008000")
BOLD = Font(name=FONT, size=10, bold=True)
HDR = Font(name=FONT, size=10, bold=True, color="FFFFFF")
TITLE = Font(name=FONT, size=14, bold=True, color=NAVY)
SUB = Font(name=FONT, size=10, italic=True, color="5A6270")
thin = Side(style="thin", color="C9CFDD")
BORDER = Border(top=thin, bottom=thin, left=thin, right=thin)
USD = '"$"#,##0;("$"#,##0);"-"'
USD2 = '"$"#,##0.00;("$"#,##0.00);"-"'
NUM = '#,##0;(#,##0);"-"'
PCT = '0.0%'

wb = Workbook()


def sheet(name, title, subtitle, widths):
    ws = wb.create_sheet(name)
    ws["A1"] = title; ws["A1"].font = TITLE
    ws["A2"] = subtitle; ws["A2"].font = SUB
    for i, w in enumerate(widths, start=1):
        ws.column_dimensions[get_column_letter(i)].width = w
    ws.sheet_view.showGridLines = False
    ws.page_setup.orientation = 'landscape'
    ws.sheet_properties.pageSetUpPr.fitToPage = True
    ws.page_setup.fitToWidth = 1
    ws.page_setup.fitToHeight = 0
    return ws


def header(ws, row, labels, col=1):
    for i, l in enumerate(labels):
        c = ws.cell(row=row, column=col + i, value=l)
        c.font = HDR; c.fill = PatternFill("solid", fgColor=NAVY); c.alignment = Alignment(wrap_text=True, vertical="center"); c.border = BORDER
    ws.row_dimensions[row].height = 30


def put(ws, ref, value, font=BLACK, fmt=None, fill=None, bold=False, comment=None, wrap=False):
    c = ws[ref]
    c.value = value
    c.font = Font(name=FONT, size=10, bold=bold or font.bold, color=font.color)
    if fmt: c.number_format = fmt
    if fill: c.fill = PatternFill("solid", fgColor=fill)
    if comment: c.comment = Comment(comment, "Proposal team")
    c.border = BORDER
    c.alignment = Alignment(wrap_text=wrap, vertical="center")
    return c


# ------------------------------------------------------------------ README
wb.remove(wb.active)
ws = sheet("README", "Cost and Pricing Model", "Document 05 of the proposal package. Every number on the calculation sheets is a formula driven by the Assumptions sheet.", [4, 110])
rows = [
    "HOW TO USE",
    "1. Change only BLUE cells on the Assumptions and Rate_Card sheets. Black cells are formulas; green cells link to other sheets.",
    "2. Yellow-filled cells are the key commercial levers to agree with the client: blended rate, support tier, and the deployment pattern per tier.",
    "3. Run_Cost_by_Tier shows monthly operating cost for four tiers (pilot to group scale). Build_Effort shows role effort and fees per phase. Pricing_Options shows the three commercial structures. TCO_3yr adds them up.",
    "4. Prices are 2026 list prices from public pricing pages (see Sources column and comments). They change; confirm before quoting.",
    "",
    "COLOUR LEGEND",
    "Blue text = input you may change.   Black text = formula.   Green text = link from another sheet.   Yellow fill = key assumption to agree with the client.",
    "",
    "SHEETS",
    "Assumptions: volumes, prices, and unit costs.   Rate_Card: roles and rates.   Run_Cost_by_Tier: monthly run cost.   Build_Effort: fees by phase.   Pricing_Options: commercial structures.   TCO_3yr: three-year view.",
    "",
    "IMPORTANT",
    "Run cost excludes build fees. Build fees exclude cloud and AI usage, which are passed through at cost from the client's own accounts. All figures in USD, excluding VAT.",
]
for i, r in enumerate(rows, start=4):
    ws.cell(row=i, column=2, value=r).font = BOLD if r.isupper() else BLACK
    ws.cell(row=i, column=2).alignment = Alignment(wrap_text=True)

# ------------------------------------------------------------------ Assumptions
ws = sheet("Assumptions", "Assumptions and unit prices", "Blue = inputs. Tier columns: 0 Pilot, 1 Departmental, 2 Enterprise/Sovereign, 3 Group-scale.", [46, 14, 14, 14, 14, 12, 60])
header(ws, 4, ["Volume driver", "Tier 0 Pilot", "Tier 1 Dept", "Tier 2 Enterprise", "Tier 3 Group", "Unit", "Notes / source"])
vol = [
    ("Named users", 10, 50, 300, 1500, "users", "Client to confirm in discovery"),
    ("Documents in corpus (cumulative)", 2000, 25000, 250000, 1500000, "docs", "Indicative; pilot limit 5,000 in SOW"),
    ("Average pages per document", 20, 20, 20, 20, "pages", "Contracts and reports; spreadsheets counted by sheet"),
    ("Tokens per page", 600, 600, 600, 600, "tokens", "Roughly 450 words per page"),
    ("Share of pages that are scans needing OCR", 0.3, 0.3, 0.3, 0.3, "%", "Assumption pending sight of the corpus; older contracts and board papers are often scanned. Confirm at discovery"),
    ("New documents per month (share of corpus)", 0.05, 0.05, 0.05, 0.05, "%", "Ongoing ingestion after initial load"),
    ("Questions per user per working day", 5, 5, 4, 3, "questions", "Executives ask fewer, analysts more"),
    ("Working days per month", 22, 22, 22, 22, "days", ""),
    ("Input tokens per question (retrieved passages + prompt)", 12000, 12000, 12000, 12000, "tokens", "8-12 passages of 400-600 tokens plus instructions"),
    ("Output tokens per question (answer + citations + grounding pass)", 1500, 1500, 1500, 1500, "tokens", "Includes the second grounding pass"),
    ("Share of questions answered by Opus 5 (rest Sonnet 5)", 0.4, 0.4, 0.4, 0.4, "%", "Complex questions and contradiction adjudication"),
    ("Extraction tokens per page (claims pass, Sonnet 5)", 900, 900, 900, 900, "tokens", "Input page tokens + structured output"),
    ("Prompt-cache and batch discount on ingestion", 0.4, 0.4, 0.4, 0.4, "%", "Batch API 50% off; caching on shared prefixes"),
    ("Outreach messages per month (CRM)", 200, 1500, 8000, 40000, "messages", "Email mostly; WhatsApp priced separately"),
    ("Share of AI-assisted drafts", 0.5, 0.5, 0.5, 0.5, "%", ""),
    ("Tokens per AI-assisted draft (in + out)", 4000, 4000, 4000, 4000, "tokens", "Sonnet 5"),
    ("Deployment pattern (A cloud, B hybrid, C sovereign)", "A", "B", "C", "C", "pattern", "Key lever: C adds GPU cost and removes most API cost"),
    ("Share of AI processing routed in-region under pattern B", 0, 0.3, 1, 1, "%", "Set to 1 for pattern C"),
    ("GPU nodes for in-region models (0 if pattern A)", 0, 1, 4, 20, "nodes", "Each node ~ 1x H100-class 80GB; two for HA at tier 2+"),
]
for i, (label, t0, t1, t2, t3, unit, note) in enumerate(vol, start=5):
    put(ws, f"A{i}", label)
    for j, v in enumerate([t0, t1, t2, t3]):
        fmt = PCT if unit == "%" else (None if isinstance(v, str) else NUM)
        put(ws, f"{get_column_letter(2 + j)}{i}", v, BLUE, fmt, YELLOW if "pattern" in unit or "GPU" in label else None)
    put(ws, f"F{i}", unit); put(ws, f"G{i}", note, wrap=True)
VOL_ROW = {label: 5 + i for i, (label, *_) in enumerate(vol)}

r = 5 + len(vol) + 1
header(ws, r, ["Unit price (2026 list)", "Price", "", "", "", "Unit", "Source"])
prices = [
    ("Claude Opus 5 input", 5, "USD / M tokens", "Anthropic pricing, 2026 (claude-opus-5)"),
    ("Claude Opus 5 output", 25, "USD / M tokens", "Anthropic pricing, 2026"),
    ("Claude Sonnet 5 input", 2, "USD / M tokens", "Anthropic pricing, 2026 (claude-sonnet-5)"),
    ("Claude Sonnet 5 output", 10, "USD / M tokens", "Anthropic pricing, 2026"),
    ("Voyage voyage-3.5 embeddings", 0.02, "USD / M tokens", "Voyage AI pricing page, 2026; first 200M tokens free"),
    ("Voyage rerank-2.5", 0.05, "USD / M tokens", "Voyage AI pricing page, 2026; verify current rate"),
    ("OCR (Azure AI Document Intelligence, read/layout)", 1.5, "USD / 1,000 pages", "Azure pricing, Malaysia West / Southeast Asia; verify current rate"),
    ("Supabase Pro (pilot database, storage, auth)", 25, "USD / month", "supabase.com/pricing, 2026, plus usage"),
    ("Vercel Pro (pilot web hosting)", 20, "USD / seat / month", "vercel.com/pricing, 2026"),
    ("Managed PostgreSQL in region, tier 1", 400, "USD / month", "AWS RDS / Azure Database, mid-size instance with storage; estimate"),
    ("Managed PostgreSQL in region, tier 2 (HA)", 2500, "USD / month", "Multi-AZ, larger instance, PITR; estimate"),
    ("Managed PostgreSQL in region, tier 3 (HA, read replicas)", 9000, "USD / month", "Estimate"),
    ("Containers, load balancer, storage, networking, tier 1", 600, "USD / month", "ECS/Fargate or Container Apps; estimate"),
    ("Containers, load balancer, storage, networking, tier 2", 4000, "USD / month", "Kubernetes or managed containers, HA; estimate"),
    ("Containers, load balancer, storage, networking, tier 3", 18000, "USD / month", "Multi-tenant, DR region; estimate"),
    ("GPU node (H100-class 80GB) in-region, on-demand", 4.5, "USD / hour", "Hyperscaler Southeast Asia region on-demand; reserved pricing 30-50% lower; verify"),
    ("Hours per month", 730, "hours", ""),
    ("Observability, security tooling, backups, tier 1", 300, "USD / month", "Langfuse cloud or self-host, Sentry, WAF; estimate"),
    ("Observability, security tooling, backups, tier 2", 2000, "USD / month", "Plus SIEM export, KMS, pen-test amortised; estimate"),
    ("Observability, security tooling, backups, tier 3", 8000, "USD / month", "Estimate"),
    ("Email sending (Graph/Gmail) per message", 0, "USD", "Included in the client's Microsoft 365 / Google licences"),
    ("WhatsApp Business conversation (utility)", 0.03, "USD / conversation", "Meta per-conversation pricing varies by country; verify"),
    ("Share of outreach via WhatsApp", 0.1, "%", "Assumption"),
]
PRICE_ROW = {}
for i, (label, price, unit, src) in enumerate(prices, start=r + 1):
    put(ws, f"A{i}", label)
    put(ws, f"B{i}", price, BLUE, PCT if unit == "%" else USD2 if price < 100 else USD)
    put(ws, f"F{i}", unit); put(ws, f"G{i}", src, wrap=True)
    PRICE_ROW[label] = i


def P(label):
    return f"Assumptions!$B${PRICE_ROW[label]}"


def V(label, tier_col):
    return f"Assumptions!{tier_col}${VOL_ROW[label]}"


# ------------------------------------------------------------------ Rate card
ws = sheet("Rate_Card", "Rate card and blended rate", "Blue = inputs. Rates are indicative ranges by delivery location; set the yellow blended rate for the quote.", [40, 16, 16, 16, 60])
header(ws, 4, ["Role", "Weekly rate (USD)", "Daily rate (USD)", "Hourly rate (USD)", "Guidance"])
roles = [
    ("Engagement lead / solution architect", 6000, "Senior; sets architecture and quality gate"),
    ("AI engineer (Python)", 4500, "Retrieval, extraction, evaluation"),
    ("Full-stack engineer (TypeScript)", 4000, "Web app, Core API, CRM workflow"),
    ("QA and evaluation analyst", 2500, "Golden set, tests, acceptance"),
    ("Project manager", 3000, "Plan, risks, client reporting"),
    ("UX designer", 3000, "Interface, multilingual layout"),
    ("Security and DevOps specialist", 4500, "IaC, hardening, pen-test coordination"),
]
for i, (role, wk, g) in enumerate(roles, start=5):
    put(ws, f"A{i}", role); put(ws, f"B{i}", wk, BLUE, USD)
    put(ws, f"C{i}", f"=B{i}/5", BLACK, USD); put(ws, f"D{i}", f"=B{i}/40", BLACK, USD); put(ws, f"E{i}", g, wrap=True)
RATE_ROW = {role: 5 + i for i, (role, *_) in enumerate(roles)}
r = 5 + len(roles) + 1
put(ws, f"A{r}", "Blended weekly rate used for fees (set this)", bold=True)
put(ws, f"B{r}", f"=AVERAGE(B5:B{4 + len(roles)})", BLACK, USD, YELLOW, comment="Default is the simple average of the rate card. Override with an agreed blended rate (type a number over the formula) if the client prefers a single rate.")
BLENDED = f"Rate_Card!$B${r}"
put(ws, f"E{r}", "Indicative market ranges per person-week (2026): South Asia 1,000-2,000; Southeast Asia 1,500-3,000; Eastern Europe 2,500-4,500; GCC / UK / US 5,000-9,000. Set rates to match your delivery model.", wrap=True)
ws.row_dimensions[r].height = 45
put(ws, f"A{r + 1}", "Managed service: support tier as share of annual platform fee", bold=True)
put(ws, f"B{r + 1}", 0.2, BLUE, PCT, YELLOW, comment="Standard 15%, Business 20%, Enterprise 30% of the annual platform fee.")
SUPPORT_PCT = f"Rate_Card!$B${r + 1}"
put(ws, f"A{r + 2}", "Managed service: annual platform fee as share of build fees (M0-M4)", bold=True)
put(ws, f"B{r + 2}", 0.18, BLUE, PCT, YELLOW, comment="Covers upgrades, model changes, evaluation re-runs, minor enhancements. Typical range 15-22% of build.")
PLATFORM_PCT = f"Rate_Card!$B${r + 2}"

# ------------------------------------------------------------------ Run cost by tier
ws = sheet("Run_Cost_by_Tier", "Monthly run cost by tier (USD)", "All cells are formulas. Initial ingestion is a one-off shown separately; monthly figures include ongoing ingestion of new documents.", [56, 16, 16, 16, 16, 50])
header(ws, 4, ["Line", "Tier 0 Pilot", "Tier 1 Dept", "Tier 2 Enterprise", "Tier 3 Group", "How it is calculated"])
cols = ["B", "C", "D", "E"]
lines = []


def add(label, formulas, fmt=USD, how="", bold=False):
    lines.append((label, formulas, fmt, how, bold))


# helper expressions per tier column
def pages(c): return f"({V('Documents in corpus (cumulative)', c)}*{V('Average pages per document', c)})"
def tokens_corpus(c): return f"({pages(c)}*{V('Tokens per page', c)})"
def q_month(c): return f"({V('Named users', c)}*{V('Questions per user per working day', c)}*{V('Working days per month', c)})"
def api_share(c): return f"(1-{V('Share of AI processing routed in-region under pattern B', c)})"

add("Corpus pages", [pages(c) for c in cols], NUM, "documents x pages per document")
add("Questions per month", [q_month(c) for c in cols], NUM, "users x questions per day x working days")
add("ONE-OFF: initial ingestion, embeddings", [f"={tokens_corpus(c)}/1000000*{P('Voyage voyage-3.5 embeddings')}" for c in cols], USD, "corpus tokens x embedding price (first 200M tokens free, not netted)")
add("ONE-OFF: initial ingestion, OCR of scanned pages", [f"={pages(c)}*{V('Share of pages that are scans needing OCR', c)}/1000*{P('OCR (Azure AI Document Intelligence, read/layout)')}" for c in cols], USD, "scanned pages x OCR price per 1,000")
add("ONE-OFF: initial ingestion, claims extraction (Sonnet 5, batch)", [f"={pages(c)}*{V('Extraction tokens per page (claims pass, Sonnet 5)', c)}/1000000*({P('Claude Sonnet 5 input')}*0.75+{P('Claude Sonnet 5 output')}*0.25)*(1-{V('Prompt-cache and batch discount on ingestion', c)})*{api_share(c)}" for c in cols], USD, "pages x extraction tokens x blended Sonnet price x (1 - discount) x share via API")
add("ONE-OFF: initial ingestion total", [f"=SUM({c}7:{c}9)" for c in cols], USD, "", True)
add("Monthly: ongoing ingestion (share of corpus per month)", [f"={c}10*{V('New documents per month (share of corpus)', c)}" for c in cols], USD, "one-off total x monthly new-document share")
add("Monthly: question answering, Opus 5 share", [f"={c}6*{V('Share of questions answered by Opus 5 (rest Sonnet 5)', c)}*({V('Input tokens per question (retrieved passages + prompt)', c)}*{P('Claude Opus 5 input')}+{V('Output tokens per question (answer + citations + grounding pass)', c)}*{P('Claude Opus 5 output')})/1000000*{api_share(c)}" for c in cols], USD, "questions x Opus share x (in tokens x price + out tokens x price)")
add("Monthly: question answering, Sonnet 5 share", [f"={c}6*(1-{V('Share of questions answered by Opus 5 (rest Sonnet 5)', c)})*({V('Input tokens per question (retrieved passages + prompt)', c)}*{P('Claude Sonnet 5 input')}+{V('Output tokens per question (answer + citations + grounding pass)', c)}*{P('Claude Sonnet 5 output')})/1000000*{api_share(c)}" for c in cols], USD, "as above for Sonnet")
add("Monthly: re-ranking", [f"={c}6*40*500/1000000*{P('Voyage rerank-2.5')}" for c in cols], USD, "questions x 40 candidates x 500 tokens x rerank price")
add("Monthly: CRM AI-assisted drafts (Sonnet 5)", [f"={V('Outreach messages per month (CRM)', c)}*{V('Share of AI-assisted drafts', c)}*{V('Tokens per AI-assisted draft (in + out)', c)}/1000000*({P('Claude Sonnet 5 input')}*0.6+{P('Claude Sonnet 5 output')}*0.4)*{api_share(c)}" for c in cols], USD, "messages x AI share x tokens x blended price")
add("Monthly: WhatsApp conversations", [f"={V('Outreach messages per month (CRM)', c)}*{P('Share of outreach via WhatsApp')}*{P('WhatsApp Business conversation (utility)')}" for c in cols], USD, "messages x WhatsApp share x per-conversation price")
add("Monthly: AI and messaging subtotal", [f"=SUM({c}11:{c}16)" for c in cols], USD, "", True)
add("Monthly: database and storage", [f"={P('Supabase Pro (pilot database, storage, auth)')}", f"={P('Managed PostgreSQL in region, tier 1')}", f"={P('Managed PostgreSQL in region, tier 2 (HA)')}", f"={P('Managed PostgreSQL in region, tier 3 (HA, read replicas)')}"], USD, "Supabase Pro at pilot; managed PostgreSQL in region above")
add("Monthly: application hosting", [f"={P('Vercel Pro (pilot web hosting)')}*2+60", f"={P('Containers, load balancer, storage, networking, tier 1')}", f"={P('Containers, load balancer, storage, networking, tier 2')}", f"={P('Containers, load balancer, storage, networking, tier 3')}"], USD, "Vercel Pro (2 seats) + small container at pilot; containers in region above")
add("Monthly: in-region GPU nodes (patterns B/C)", [f"={V('GPU nodes for in-region models (0 if pattern A)', c)}*{P('GPU node (H100-class 80GB) in-region, on-demand')}*{P('Hours per month')}" for c in cols], USD, "nodes x hourly price x hours; reserved pricing can cut this 30-50%")
add("Monthly: observability, security tooling, backups", ["=40", f"={P('Observability, security tooling, backups, tier 1')}", f"={P('Observability, security tooling, backups, tier 2')}", f"={P('Observability, security tooling, backups, tier 3')}"], USD, "Sentry/Langfuse free tiers at pilot")
add("Monthly: infrastructure subtotal", [f"=SUM({c}18:{c}21)" for c in cols], USD, "", True)
add("MONTHLY RUN COST TOTAL", [f"={c}17+{c}22" for c in cols], USD, "AI and messaging + infrastructure", True)
add("Annual run cost", [f"={c}23*12" for c in cols], USD, "", True)
add("Run cost per named user per month", [f"=IF({V('Named users', c)}=0,0,{c}23/{V('Named users', c)})" for c in cols], USD2, "guards against zero users")

for i, (label, formulas, fmt, how, bold) in enumerate(lines, start=5):
    put(ws, f"A{i}", label, bold=bold, fill=ICE if bold else None)
    for c, f in zip(cols, formulas):
        put(ws, f"{c}{i}", f if str(f).startswith("=") else f"={f}", BLACK, fmt, ICE if bold else None, bold=bold)
    put(ws, f"F{i}", how, wrap=True)
r = 5 + len(lines) + 1
put(ws, f"A{r}", "Note: one-off ingestion (row 10) is paid once at load and again only for re-indexing; it is excluded from the monthly total. Pilot totals sit within the USD 150-400 per month range quoted in the deck when the volume drivers are at the Tier 0 defaults.", wrap=True)
ws.merge_cells(f"A{r}:F{r}"); ws.row_dimensions[r].height = 40

# ------------------------------------------------------------------ Build effort
ws = sheet("Build_Effort", "Build effort and fees by phase", "Blue = person-weeks per role per phase (inputs). Fees = person-weeks x blended weekly rate from Rate_Card.", [40, 12, 12, 12, 12, 12, 14, 16])
phases = ["Phase 0 Discovery", "Phase 1 Foundation", "Phase 2 Verification + approval", "Phase 3 Pilot", "Phase 4 Production"]
header(ws, 4, ["Role"] + phases + ["Total weeks", "Fee (USD)"])
effort = {
    "Engagement lead / solution architect": [1.0, 2.5, 2.0, 2.5, 2.0],
    "AI engineer (Python)": [1.0, 5.0, 4.0, 6.0, 3.0],
    "Full-stack engineer (TypeScript)": [0.5, 5.0, 4.0, 5.0, 3.0],
    "Second engineer (AI or full-stack)": [0.0, 1.0, 4.0, 4.0, 3.0],
    "QA and evaluation analyst": [0.5, 1.5, 2.0, 3.0, 2.0],
    "Project manager": [0.6, 1.5, 1.2, 1.8, 1.5],
    "UX designer": [0.4, 1.2, 0.6, 0.4, 0.2],
    "Security and DevOps specialist": [0.4, 0.8, 0.6, 0.8, 2.0],
}
for i, (role, weeks) in enumerate(effort.items(), start=5):
    put(ws, f"A{i}", role)
    for j, w in enumerate(weeks):
        put(ws, f"{get_column_letter(2 + j)}{i}", w, BLUE, "0.0")
    put(ws, f"G{i}", f"=SUM(B{i}:F{i})", BLACK, "0.0")
    put(ws, f"H{i}", f"=G{i}*{BLENDED}", BLACK, USD)
last = 4 + len(effort)
tr = last + 1
put(ws, f"A{tr}", "Total person-weeks", bold=True, fill=ICE)
for j in range(len(phases) + 1):
    col = get_column_letter(2 + j)
    put(ws, f"{col}{tr}", f"=SUM({col}5:{col}{last})", BLACK, "0.0", ICE, bold=True)
put(ws, f"H{tr}", f"=SUM(H5:H{last})", BLACK, USD, ICE, bold=True)
put(ws, f"A{tr + 1}", "Fee per phase (USD)", bold=True, fill=ICE)
for j in range(len(phases)):
    col = get_column_letter(2 + j)
    put(ws, f"{col}{tr + 1}", f"={col}{tr}*{BLENDED}", BLACK, USD, ICE, bold=True)
put(ws, f"G{tr + 1}", "", fill=ICE); put(ws, f"H{tr + 1}", f"=SUM(B{tr + 1}:F{tr + 1})", BLACK, USD, ICE, bold=True)
put(ws, f"A{tr + 2}", "Contingency on build (share)", bold=True)
put(ws, f"B{tr + 2}", 0.1, BLUE, PCT, YELLOW, comment="Applied to fixed-price phases to cover scope discovery. 10-15% is typical.")
put(ws, f"A{tr + 3}", "Total build fees including contingency (M0-M4)", bold=True, fill=ICE)
put(ws, f"H{tr + 3}", f"=H{tr + 1}*(1+B{tr + 2})", BLACK, USD, ICE, bold=True)
BUILD_TOTAL = f"Build_Effort!$H${tr + 3}"
PHASE_FEE = {k: f"Build_Effort!${get_column_letter(2 + j)}${tr + 1}*(1+Build_Effort!$B${tr + 2})" for j, k in enumerate(phases)}
put(ws, f"A{tr + 5}", "Calendar duration by phase (weeks)", bold=True)
for j, wk in enumerate([2, 5, 4, 6, 5]):
    put(ws, f"{get_column_letter(2 + j)}{tr + 5}", wk, BLUE, "0")
put(ws, f"G{tr + 5}", f"=SUM(B{tr + 5}:F{tr + 5})", BLACK, "0"); put(ws, f"H{tr + 5}", "Phases overlap; elapsed timeline is 20 weeks", wrap=True)
put(ws, f"A{tr + 6}", "Average team size (FTE) by phase", bold=True)
for j in range(len(phases)):
    col = get_column_letter(2 + j)
    put(ws, f"{col}{tr + 6}", f"=IF({col}{tr + 5}=0,0,{col}{tr}/{col}{tr + 5})", BLACK, "0.0")
put(ws, f"A{tr + 8}", "Milestone payment schedule (from Pricing structure in Document 14)", bold=True)
header(ws, tr + 9, ["Milestone", "Basis", "", "", "", "", "", "Amount (USD)"])
ms = [
    ("M0 Discovery complete (week 2)", "100% of Phase 0", f"={PHASE_FEE['Phase 0 Discovery']}"),
    ("On signature of Phases 1-2", "40% of Phases 1-2", f"=0.4*({PHASE_FEE['Phase 1 Foundation']}+{PHASE_FEE['Phase 2 Verification + approval']})"),
    ("M1 Working structure (week 6)", "30% of Phases 1-2", f"=0.3*({PHASE_FEE['Phase 1 Foundation']}+{PHASE_FEE['Phase 2 Verification + approval']})"),
    ("M2 Integrated demo (week 9)", "30% of Phases 1-2", f"=0.3*({PHASE_FEE['Phase 1 Foundation']}+{PHASE_FEE['Phase 2 Verification + approval']})"),
    ("M3 Pilot exit (week 15)", "100% of Phase 3", f"={PHASE_FEE['Phase 3 Pilot']}"),
    ("M4 Production go-live (week 20)", "100% of Phase 4", f"={PHASE_FEE['Phase 4 Production']}"),
]
for i, (m, b, f) in enumerate(ms, start=tr + 10):
    put(ws, f"A{i}", m); put(ws, f"B{i}", b); ws.merge_cells(f"B{i}:G{i}"); put(ws, f"H{i}", f, BLACK, USD)
put(ws, f"A{tr + 16}", "Total (equals build fees incl. contingency)", bold=True, fill=ICE)
put(ws, f"H{tr + 16}", f"=SUM(H{tr + 10}:H{tr + 15})", BLACK, USD, ICE, bold=True)
put(ws, f"A{tr + 17}", "Check: difference to build total (should be 0)")
put(ws, f"H{tr + 17}", f"=ROUND(H{tr + 16}-{BUILD_TOTAL},2)", BLACK, USD)

# ------------------------------------------------------------------ Pricing options
ws = sheet("Pricing_Options", "Commercial structures", "Three ways to contract the same scope. Figures link to Build_Effort, Rate_Card and Run_Cost_by_Tier.", [52, 18, 18, 18, 50])
header(ws, 4, ["Option A: Fixed price by milestone (recommended)", "USD", "", "", "Notes"])
put(ws, "A5", "Build fees, M0-M4, including contingency"); put(ws, "B5", f"={BUILD_TOTAL}", GREEN, USD)
put(ws, "A6", "Annual managed service: platform fee"); put(ws, "B6", f"=B5*{PLATFORM_PCT}", BLACK, USD); put(ws, "E6", "Share of build fees per year; covers upgrades, model changes, evaluation re-runs, minor enhancements", wrap=True)
put(ws, "A7", "Annual managed service: support tier"); put(ws, "B7", f"=B6*{SUPPORT_PCT}", BLACK, USD); put(ws, "E7", "Standard 15%, Business 20%, Enterprise 30% of platform fee (set on Rate_Card)", wrap=True)
put(ws, "A8", "Annual managed service total (excluding pass-through cloud and AI)", bold=True, fill=ICE); put(ws, "B8", "=B6+B7", BLACK, USD, ICE, bold=True)
put(ws, "A9", "Pass-through run cost, year 1, at the selected tier (see TCO_3yr)"); put(ws, "B9", "=TCO_3yr!C8", GREEN, USD)

header(ws, 11, ["Option B: Time and materials with monthly cap", "USD", "", "", "Notes"])
put(ws, "A12", "Blended weekly rate"); put(ws, "B12", f"={BLENDED}", GREEN, USD)
put(ws, "A13", "Planned person-weeks (from Build_Effort)"); put(ws, "B13", f"=Build_Effort!G{tr}", GREEN, "0.0")
put(ws, "A14", "Monthly cap (person-weeks x rate / months)"); put(ws, "B14", f"=B12*B13/5", BLACK, USD); put(ws, "E14", "Assumes 20 weeks = 5 months; client pays actuals up to the cap", wrap=True)
put(ws, "A15", "Expected total at plan (no contingency needed)"); put(ws, "B15", "=B12*B13", BLACK, USD)
put(ws, "A16", "Suitable when scope is expected to evolve during the pilot; risk sits with the client, so the rate is typically 5-10% lower than fixed-price equivalents.", wrap=True); ws.merge_cells("A16:E16"); ws.row_dimensions[16].height = 32

header(ws, 18, ["Option C: Subscription (build amortised into an annual fee)", "USD", "", "", "Notes"])
put(ws, "A19", "Contract term (years)"); put(ws, "B19", 3, BLUE, "0")
put(ws, "A20", "Financing uplift on amortised build"); put(ws, "B20", 0.12, BLUE, PCT); put(ws, "E20", "Compensates for deferred payment and cancellation risk", wrap=True)
put(ws, "A21", "Annual subscription = build x (1+uplift) / term + managed service", bold=True, fill=ICE); put(ws, "B21", "=B5*(1+B20)/B19+B8", BLACK, USD, ICE, bold=True)
put(ws, "A22", "Lower entry cost for the client; total over the term is higher than Option A. Code ownership can still transfer at end of term or on early buy-out.", wrap=True); ws.merge_cells("A22:E22"); ws.row_dimensions[22].height = 32

header(ws, 24, ["Smaller starting scopes (fixed price)", "USD", "", "", "Notes"])
put(ws, "A25", "Discovery only (Phase 0)"); put(ws, "B25", f"={PHASE_FEE['Phase 0 Discovery']}", BLACK, USD)
put(ws, "A26", "Discovery + System 1 working structure only"); put(ws, "B26", f"={PHASE_FEE['Phase 0 Discovery']}+0.55*{PHASE_FEE['Phase 1 Foundation']}", BLACK, USD); put(ws, "E26", "Platform layer plus assistant; CRM deferred. 55% of Phase 1 effort.", wrap=True)
put(ws, "A27", "Discovery + CRM for one category only"); put(ws, "B27", f"={PHASE_FEE['Phase 0 Discovery']}+0.5*{PHASE_FEE['Phase 1 Foundation']}", BLACK, USD); put(ws, "E27", "Platform layer plus CRM; assistant deferred. 50% of Phase 1 effort.", wrap=True)
put(ws, "A28", "Clickable prototype at week 4 (add-on to Phase 1)"); put(ws, "B28", f"=1.5*{BLENDED}", BLACK, USD); put(ws, "E28", "About 1.5 person-weeks of demo preparation", wrap=True)

# ------------------------------------------------------------------ TCO 3yr
ws = sheet("TCO_3yr", "Three-year total cost of ownership", "Choose the tier path in the blue cells. Build fees in year 1; managed service and run cost every year; optional Phase 5 scale-out budget.", [46, 16, 16, 16, 16, 40])
header(ws, 4, ["Item", "Tier in year", "Year 1", "Year 2", "Year 3", "Notes"])
put(ws, "A5", "Tier operated in each year (0-3)"); put(ws, "B5", "")
put(ws, "C5", 1, BLUE, "0", YELLOW); put(ws, "D5", 2, BLUE, "0", YELLOW); put(ws, "E5", 2, BLUE, "0", YELLOW); put(ws, "F5", "Typical path: pilot then departmental in year 1, enterprise from year 2", wrap=True)
put(ws, "A6", "Build fees (M0-M4)"); put(ws, "C6", f"={BUILD_TOTAL}", GREEN, USD); put(ws, "D6", 0, BLACK, USD); put(ws, "E6", 0, BLACK, USD)
put(ws, "A7", "Managed service (platform fee + support)"); put(ws, "C7", "=Pricing_Options!B8*0.5", GREEN, USD); put(ws, "D7", "=Pricing_Options!B8", GREEN, USD); put(ws, "E7", "=Pricing_Options!B8", GREEN, USD); put(ws, "F7", "Half year in year 1 (go-live at week 20)", wrap=True)
put(ws, "A8", "Run cost (pass-through cloud and AI) at the year's tier")
for col in ["C", "D", "E"]:
    put(ws, f"{col}8", f"=INDEX(Run_Cost_by_Tier!$B$24:$E$24,1,{col}5+1)", BLACK, USD)
put(ws, "F8", "INDEX into annual run cost by tier", wrap=True)
put(ws, "A9", "One-off initial ingestion at the year's tier (re-index on tier change)")
put(ws, "C9", "=INDEX(Run_Cost_by_Tier!$B$10:$E$10,1,C5+1)", BLACK, USD)
put(ws, "D9", "=IF(D5<>C5,INDEX(Run_Cost_by_Tier!$B$10:$E$10,1,D5+1),0)", BLACK, USD)
put(ws, "E9", "=IF(E5<>D5,INDEX(Run_Cost_by_Tier!$B$10:$E$10,1,E5+1),0)", BLACK, USD)
put(ws, "A10", "Phase 5 scale-out budget (connectors, sovereign switch, integrations)"); put(ws, "C10", 0, BLUE, USD); put(ws, "D10", f"=8*{BLENDED}", BLUE, USD); put(ws, "E10", f"=6*{BLENDED}", BLUE, USD); put(ws, "F10", "Person-weeks x blended rate; adjust to roadmap", wrap=True)
put(ws, "A11", "TOTAL PER YEAR", bold=True, fill=ICE)
for col in ["C", "D", "E"]:
    put(ws, f"{col}11", f"=SUM({col}6:{col}10)", BLACK, USD, ICE, bold=True)
put(ws, "A12", "THREE-YEAR TOTAL", bold=True, fill=ICE); put(ws, "C12", "=SUM(C11:E11)", BLACK, USD, ICE, bold=True)
put(ws, "A14", "Reading the result: the client sees a single build investment in year 1, a predictable managed-service fee, and run costs that scale with the tier they choose. Build fees do not recur when moving up a tier; only run cost and, if chosen, Phase 5 work change.", wrap=True)
ws.merge_cells("A14:F14"); ws.row_dimensions[14].height = 45

wb.save(OUT)
print("wrote", OUT)
