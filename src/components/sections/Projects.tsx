import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "../ui/WordsPullUpMultiStyle";

const projects = [
  {
    index: "01",
    title: "LLM Security Sentinel",
    type: "Agentic AI Security Platform",
    flagship: true,
    tags: ["FastAPI", "LangGraph", "Next.js", "OWASP LLM Top 10", "SSE", "PostgreSQL", "Prometheus", "Langfuse", "OpenAI", "Gemini"],
    bullets: [
      "Architected a production-grade LLM red-team platform orchestrating 6 OWASP LLM Top 10 attack agents (Prompt Injection, Insecure Output Handling, Model DoS, Sensitive Disclosure, Plugin Abuse, Excessive Agency) with a human-in-the-loop approval gate and real-time SSE event streaming to a Next.js live dashboard.",
      "Engineered a universal format-detection adapter supporting 8 endpoint schemas (JSON variants, OpenAI-compatible, form-encoded) with multi-LLM provider switching (OpenAI, Gemini Flash), enabling black-box security testing of any LLM endpoint; validated live against a real internet target.",
    ],
    highlight: "6-agent OWASP LLM Top 10 red-team platform with live SSE dashboard.",
    arch: ["Target URL", "Target Analyser", "STRIDE Modeller", "HITL Gate ⏸", "[6 Attack Agents]", "Aggregator", "PDF + JSON Report"],
    link: "https://github.com/manjunathgujjar",
  },
  {
    index: "02",
    title: "ARIA – Autonomous Research & Intelligence Agents",
    type: "Multi-Agent RAG Platform",
    flagship: false,
    tags: ["LangGraph", "FastAPI", "BM25", "Qdrant", "Redis", "Ragas", "WebSocket", "Railway", "Vercel", "Langfuse"],
    bullets: [
      "Built a multi-agent research platform coordinating 5 specialized agents (Planner, Retriever, Search, Verifier, Critic) with a human-in-the-loop approval gate, real-time WebSocket activity stream, and CI-gated Ragas evaluation pipeline achieving faithfulness > 0.91 on a 50-question golden dataset.",
      "Implemented production-grade hybrid retrieval (BM25 + Qdrant vector search) with cross-encoder reranking, citation enforcement, and a semantic Redis cache achieving sub-10ms hit latency; Langfuse tracing covers every retrieval score, prompt, and token across all agents.",
    ],
    highlight: "Faithfulness > 0.91 · sub-10ms Redis cache · CI-gated Ragas eval pipeline.",
    arch: ["Query", "Planner", "HITL Gate ⏸", "[BM25 + Qdrant | Tavily Search]", "Verifier", "Critic (Ragas ≥ 0.85)", "Cited Answer"],
    link: "https://github.com/manjunathgujjar",
  },
  {
    index: "03",
    title: "Agentic ITSM Ticket Quality Evaluator",
    type: "Enterprise AI Automation",
    flagship: false,
    tags: ["FastAPI", "LangGraph", "Ollama", "LoRA", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Jira", "ServiceNow", "Multi-tenant"],
    bullets: [
      "Designed and productionized an LLM-powered ITSM ticket quality evaluator scoring completeness, accuracy, and actionability using hierarchical scoring logic with explainable verdicts; fine-tuned a Llama 3 model via Ollama with LoRA on domain-specific ticket data to improve classification accuracy and reduce general-purpose LLM inference cost.",
      "Built a modular multi-tenant backend (FastAPI, PostgreSQL, Redis vector search, Docker/Kubernetes) with evaluation criteria co-designed through PM, SRE, and Customer Success workshops; improved review throughput by 70% and reduced assessment variability by 55%.",
    ],
    highlight: "70% throughput · 55% less variability · LoRA fine-tuned Ollama classifier.",
    arch: ["Jira / ServiceNow", "Quality Evaluator", "[Completeness · Accuracy · Actionability]", "LoRA Classifier", "Score + Verdict"],
    link: "https://github.com/manjunathgujjar",
  },
  {
    index: "04",
    title: "Agentic Incident Triage Automation",
    type: "Cloud-Native Agentic Platform",
    flagship: false,
    tags: ["Azure AI Foundry", "LangGraph", "FastAPI", "MCP", "ServiceNow", "CMDB", "Redis", "Multi-Agent", "On-Premises", "OAuth2"],
    bullets: [
      "Built a cloud-native incident triage platform on Azure AI Foundry, deployed on-premises, where a pipeline of specialized agents (Detector, Classifier, Router, Resolver) processes incoming alerts, correlates against CMDB topology, and auto-resolves known incident patterns with full audit trails and operator override support.",
      "Agents invoke enterprise tools via MCP-governed API calls to query alert history, retrieve service topology, execute runbooks, and create or update ServiceNow tickets autonomously, cutting mean time to acknowledge and freeing L1 engineers from routine triage loops.",
    ],
    highlight: "Autonomous alert-to-ticket pipeline with CMDB correlation and runbook execution.",
    arch: ["Alert", "Detector", "Classifier", "Router", "[Auto-Resolve | Escalate]", "CMDB Correlation", "ServiceNow Ticket"],
    link: "https://github.com/manjunathgujjar",
  },
  {
    index: "05",
    title: "OSS Contribution Automation Agents",
    type: "Developer Tooling · Anthropic API",
    flagship: false,
    tags: ["Anthropic API", "Python", "GitHub Actions", "Tool Use", "Agentic AI", "Subprocess", "CI/CD"],
    bullets: [
      "Built two agentic workers on GitHub Actions cron using the Anthropic Messages API with native tool use: a PR Monitor agent that digests CI/review activity into structured email reports, and an Issue Fixer agent that detects open bugs, writes fixes, runs the test suite, and opens a draft PR autonomously, with zero local infrastructure.",
      "Implemented a bare-metal agent loop (tool call → subprocess → result feed-back) with no framework overhead; demonstrates the core agentic pattern at its simplest using client.messages.create() with tool definitions and real subprocess execution.",
    ],
    highlight: "Two autonomous agents on GitHub Actions: PR monitor + bug fixer.",
    arch: ["GitHub Actions Cron", "[PR Monitor → Email Report]", "[Issue Fixer → Test Suite → Draft PR]"],
    link: "https://github.com/manjunathgujjar/oss-automation",
  },
  {
    index: "06",
    title: "AI-Driven Knowledge Graph & GraphRAG Platform",
    type: "Full-Stack Research Application",
    flagship: false,
    tags: ["Neo4j", "GraphRAG", "RAG", "Ollama", "DeepSeek", "Hybrid Retrieval", "Multimodal Embeddings", "Python"],
    bullets: [
      "Built an AI platform that ingests documents, images, and recursive links (depth-5), extracting entities and relationships into a Neo4j knowledge graph for structured semantic retrieval.",
      "Implemented GraphRAG with multimodal embeddings and hybrid retrieval (graph traversal + vector search), enabling citation-traced Q&A; benchmarked graph-augmented retrieval against dense-only baseline, demonstrating measurable accuracy gains on entity-heavy queries.",
    ],
    highlight: "GraphRAG vs. dense-only benchmarked: graph augmentation outperforms on entity-heavy queries.",
    arch: ["Docs · Images · URLs (depth-5)", "[Entity Extraction → Neo4j]", "[Embeddings → Qdrant]", "Hybrid Query", "Cited Answer"],
    link: "https://github.com/manjunathgujjar",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-black py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <WordsPullUpMultiStyle
            className="text-3xl sm:text-5xl font-medium tracking-tight text-left justify-start"
            segments={[
              { text: "Selected Projects", className: "text-[#E1E0CC] font-medium" },
            ]}
          />
        </div>

        <div className="flex flex-col gap-1">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className={`group bg-[#0f0f0f] hover:bg-[#141414] rounded-2xl p-8 transition-colors duration-300 ${
                project.flagship
                  ? "border border-white/15 hover:border-white/25 ring-1 ring-white/5"
                  : "border border-white/5 hover:border-white/10"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary/40 text-xs tracking-widest uppercase font-medium">
                      {project.type}
                    </span>
                    <span className="text-gray-600 text-xs">({project.index})</span>
                    {project.flagship && (
                      <span className="text-[10px] tracking-widest uppercase text-amber-400/60 border border-amber-400/20 bg-amber-400/5 rounded-full px-2 py-0.5">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-[#E1E0CC] text-xl md:text-2xl font-medium leading-snug">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300"
                >
                  <ArrowUpRight className="text-primary/40 group-hover:text-primary w-4 h-4 transition-colors duration-300" />
                </a>
              </div>

              {/* Highlight callout */}
              <div className="bg-white/3 border border-white/6 rounded-xl px-4 py-3 mb-5">
                <p className="text-primary/70 text-sm font-serif italic">{project.highlight}</p>
              </div>

              {/* Architecture flow */}
              <div className="mb-5 overflow-x-auto">
                <p className="text-gray-700 text-[9px] tracking-widest uppercase mb-2">Pipeline</p>
                <div className="flex items-center gap-1 flex-nowrap min-w-max">
                  {project.arch.map((step, i) => (
                    <Fragment key={i}>
                      {i > 0 && <span className="text-gray-700 text-xs mx-0.5">→</span>}
                      <span className={`text-[10px] font-mono px-2 py-1 rounded border whitespace-nowrap ${
                        step.includes("HITL") || step.includes("⏸")
                          ? "bg-amber-500/8 border-amber-500/15 text-amber-400/60"
                          : step.startsWith("[") && step.endsWith("]")
                          ? "bg-white/[0.03] border-white/[0.08] text-gray-400"
                          : "bg-white/[0.02] border-white/[0.06] text-gray-500"
                      }`}>
                        {step}
                      </span>
                    </Fragment>
                  ))}
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-6">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex gap-3 text-primary/55 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/5 border border-white/8 text-gray-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
