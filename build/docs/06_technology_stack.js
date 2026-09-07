module.exports = {
  outName: "06_Technology_Stack_and_Tools.docx",
  meta: {
    series: "PROPOSAL PACKAGE  |  DOCUMENT 06",
    title: "Technology Stack and Tools",
    subtitle: "Every software product and service proposed for the project, what it does, why it was chosen, what it costs, and the alternatives",
    shortTitle: "Technology Stack and Tools",
    docNo: "06 of 15",
    audience: "Client IT, procurement, delivery team; also a reference for the presenter",
  },
  body: `
# 1. Selection principles

- **Open standards and open source where it matters for portability**: PostgreSQL, containers, Terraform, OpenTelemetry. The client can move providers.
- **Managed services during pilot to keep cost and operations minimal**, replaced by in-region or self-hosted equivalents at enterprise tier without changing application code.
- **Best-in-class AI components, but always behind the gateway** so no single vendor is load-bearing.
- **Multilingual support is a hard requirement** for every component that touches text. English is the business language in both operating markets; Bahasa Malaysia, Filipino and Chinese may also appear, and the actual mix is confirmed at discovery. No component is chosen that would have to be replaced if a further language is added.
- Prices below are list prices as published in 2026 and are indicative; they change, and enterprise agreements differ. The Cost and Pricing Model workbook (Document 05) holds the live numbers.

# 2. Stack at a glance

%widths 22,30,48
| Layer | Pilot choice | Enterprise / sovereign choice |
|---|---|---|
| Web front end | Next.js on Vercel | Next.js in containers behind the client's load balancer |
| Core API | Node.js (TypeScript) | Same, containerised |
| Intelligence service | Python, FastAPI | Same, containerised, GPU node pool for self-hosted models |
| Database | PostgreSQL with pgvector (Supabase) | Managed PostgreSQL in region (AWS RDS, Azure Database for PostgreSQL) or self-managed |
| Object storage | Supabase Storage | S3 / Azure Blob in region, or MinIO on premises |
| Queue | PostgreSQL-backed queue | Redis (managed) with workers |
| Identity | Supabase Auth with OIDC to client IdP | Microsoft Entra ID / Okta; Keycloak if self-hosted |
| Model gateway | LiteLLM | LiteLLM (high availability) |
| Language models | Claude Opus 5 and Claude Sonnet 5 via Anthropic API or AWS Bedrock | Same via Bedrock / Foundry in region, plus Qwen 3.5 / GLM-5 / Gemma 4 on vLLM for sovereign routing |
| Embeddings | Voyage AI voyage-3.5 | Same, or BGE-M3 self-hosted |
| Re-ranking | Voyage rerank-2.5 | Same, or bge-reranker-v2-m3 self-hosted |
| Document parsing | Docling (open source) | Docling |
| OCR (scanned pages) | Azure AI Document Intelligence (Malaysia West / Southeast Asia) | Same, or Tesseract / PaddleOCR self-hosted |
| Observability | Langfuse, Sentry | Langfuse self-hosted, Grafana stack, SIEM export |
| Infrastructure as code | Terraform | Terraform, policy as code |
| CI/CD | GitHub Actions | GitHub Actions or Azure DevOps |
| Security tooling | ClamAV, cloud KMS, Cloudflare or cloud WAF | Same plus HSM-backed keys, SIEM |

# 3. Component by component

## 3.1 Language models (the "reasoning engine")

%widths 24,76
| Item | Detail |
|---|---|
| What it does | Reads retrieved passages and writes answers; extracts claims into structured rows; adjudicates whether two textual terms conflict; checks that each answer sentence is supported; drafts outreach text on request. |
| Primary choice | **Claude Opus 5** (model id claude-opus-5) for answer synthesis, contradiction adjudication and grounding checks; **Claude Sonnet 5** (claude-sonnet-5) for bulk claim extraction and routine lookups. Both have a 1 million token context window, which lets the extraction pass read long contracts whole. |
| List price (Anthropic API, 2026) | Opus 5: USD 5 per million input tokens, USD 25 per million output tokens. Sonnet 5: USD 2 / USD 10. Haiku 4.5 (USD 1 / USD 5) is available for simple classification steps. Prompt caching and batch processing cut ingestion costs materially (batch is 50% off). |
| Access routes | Anthropic API direct (pilot); **Amazon Bedrock** from the AWS Asia Pacific regions (Malaysia ap-southeast-5, Singapore ap-southeast-1) using cross-region inference; **Microsoft Foundry** (billed through the Microsoft marketplace). Route is a gateway setting. |
| Why | Strong performance on long, structured documents and on instruction-following for citations and refusals; enterprise terms; multiple access routes reachable from Southeast Asia. |
| Alternatives | OpenAI GPT-5 family via Azure OpenAI (also reachable from the Southeast Asia regions); Google Gemini via Vertex AI. All are supported by the gateway; a switch is configuration. |
| Sovereign option | Open-weight models served in region with vLLM: Qwen 3.5, GLM-5, Gemma 4, DeepSeek V4 (licence review needed per model). Quality is evaluated against the golden set before switching. |

## 3.2 Model gateway: LiteLLM

Open-source proxy that exposes one internal endpoint for all model calls. It gives per-team keys, spend limits, request logging, retries, fallbacks and **routing rules by tag** (for example: documents classified "restricted" go only to the in-region model). It removes vendor lock-in and makes the residency pattern a configuration change. Free to self-host; enterprise support available.

## 3.3 Embeddings and re-ranking

%widths 24,76
| Item | Detail |
|---|---|
| What they do | Embeddings turn text into vectors so meaning-based search works across languages ("contract value" finds "قيمة العقد"). The re-ranker reads the question and each candidate passage together and orders them by relevance, which sharply improves the quality of what the model sees. |
| Choice | **Voyage AI voyage-3.5** (multilingual; USD 0.02 per million tokens; 200 million free tokens per account) and **Voyage rerank-2.5**. Voyage is now part of MongoDB; the API remains standalone. |
| Alternatives | Cohere Embed v4 and Rerank 3.5 (multilingual); OpenAI text-embedding-3-large; self-hosted **BGE-M3** and **bge-reranker-v2-m3** (open source, multilingual, no data leaves the environment). |

## 3.4 Document parsing and OCR

%widths 24,76
| Item | Detail |
|---|---|
| Docling | Open-source parser (IBM) that converts PDF, DOCX, PPTX, XLSX and HTML into structured text with tables and reading order preserved; runs locally, no data leaves the environment; free. |
| Azure AI Document Intelligence | Cloud OCR and layout analysis, available in Azure Malaysia West and Southeast Asia for in-region processing, with broad language coverage including Bahasa Malaysia, Filipino and Chinese. Priced per page (roughly USD 1.50 per 1,000 pages for read/layout tiers; check current list). Used only for scanned pages. |
| Alternatives | Google Document AI; AWS Textract; self-hosted Tesseract or PaddleOCR (free, lower accuracy on poor scans); LlamaParse or Unstructured (managed parsing APIs). |

## 3.5 Database: PostgreSQL with pgvector

One database for records, full-text search and vectors. pgvector provides approximate nearest-neighbour search (HNSW) sufficient to millions of chunks; PostgreSQL full-text search handles exact numbers, names and non-English terms; row-level security enforces per-user access inside the database. Supabase provides a managed PostgreSQL with storage and auth for the pilot (**Pro plan USD 25 per month plus usage**); enterprise tier uses the client's cloud provider's managed PostgreSQL in region. If the corpus grows past what pgvector handles comfortably, Qdrant or OpenSearch can be added behind the same retrieval interface.

## 3.6 Web application and hosting

Next.js (React, TypeScript) for a fast, accessible, right-to-left-capable interface. Vercel hosts it during pilot (**Pro plan USD 20 per seat per month**); at enterprise tier the same application runs in containers inside the client's cloud. Tailwind CSS and a component library for consistent design; Playwright for end-to-end tests.

## 3.7 Identity and access

Single sign-on through the client's identity provider (Microsoft Entra ID is the most common in groups of this size; Okta and Google Workspace are also supported) using OpenID Connect. Multi-factor authentication is enforced by the provider. Roles and per-document access are managed in the application. Keycloak is the self-hosted alternative for the sovereign pattern.

## 3.8 Messaging channels for approved outreach

%widths 28,72
| Channel | Tool |
|---|---|
| Email, Microsoft 365 | Microsoft Graph API (send-as the approver, replies land in the normal mailbox); requires admin consent |
| Email, Google Workspace | Gmail API |
| WhatsApp | WhatsApp Business Platform (Meta Cloud API) with approved message templates; per-conversation pricing; heavily used for business relationships in Malaysia and the Philippines, and worth configuring early for that reason |
| SMS | Twilio or a regional provider (Unifonic) |
| Internal reminders | Email digest, Microsoft Teams or Slack webhook, in-app |

## 3.9 Observability and evaluation

- **Langfuse** (open source): traces every AI call with prompt, retrieved passages, answer, tokens and cost; supports evaluation datasets and scoring. Self-hostable, so traces stay in the environment.
- **OpenTelemetry + Grafana or Sentry**: application metrics, logs, errors, alerts.
- **Promptfoo / Ragas**: evaluation harness for the golden question set; runs in CI.

## 3.10 Infrastructure, security and delivery tooling

%widths 28,72
| Purpose | Tool |
|---|---|
| Infrastructure as code | Terraform (HashiCorp), modules per environment |
| Containers | Docker; AWS ECS/Fargate, Azure Container Apps, or Kubernetes at scale |
| CI/CD | GitHub Actions: unit tests, evaluation gate, dependency and container scanning, deploy |
| Secrets | AWS Secrets Manager / Azure Key Vault; no secrets in code |
| Anti-malware | ClamAV in the ingestion path |
| Edge protection | Cloudflare WAF or the cloud provider's WAF; rate limiting |
| Backups | Provider-managed point-in-time recovery; cross-region copies |
| Source control and work tracking | GitHub (client-owned organisation), Linear or Jira, Notion or Confluence |
| Design | Figma |

# 4. Licensing and ownership

- All custom code is delivered under the client's ownership (see Document 14).
- Open-source components are used under permissive or copyleft licences that permit internal use without disclosure (PostgreSQL, Apache-2.0, MIT). Where a component is AGPL (for example some CRM products we considered but did not select), we note it; our custom CRM avoids AGPL dependencies.
- Commercial services (Anthropic, AWS, Azure, Voyage, Vercel, Supabase, Meta WhatsApp) are contracted in the client's name so the client controls the relationship and the data.

# 5. What we considered and did not choose for the core

%widths 26,74
| Option | Reason not chosen as the core |
|---|---|
| Off-the-shelf CRM (HubSpot Starter USD 20 per seat per month; Attio ~USD 34; Salesforce) as the System 2 core | Strong products, but the mandatory human-approval gate, the per-category pipeline semantics, in-region hosting and the shared entity model with System 1 would all be customisations on someone else's platform, with per-seat fees and data held wherever that vendor holds it rather than in a region the client chooses. Remains a valid choice if the client later wants a 500-seat sales organisation; our data model exports cleanly to them. |
| Twenty CRM (open source) as the System 2 core | Attractive and self-hostable, but AGPL-licensed and still thin on approval workflow and reporting; we may reuse its interface patterns. |
| Microsoft Copilot / SharePoint Q&A | Useful for general search, but it cannot enforce closed-domain answers with a grounding check, has no claims ledger, and cannot express decision checklists. |
| LangChain / LlamaIndex as the application framework | Helpful libraries; we use them selectively for parsers and evaluation, but keep the pipeline code explicit so behaviour is inspectable and auditable. |
| Dedicated vector database from day one (Pinecone, Weaviate) | Not needed at pilot scale; pgvector keeps one system of record. Qdrant is the upgrade path if needed. |
`,
};
