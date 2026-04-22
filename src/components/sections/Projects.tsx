import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// SVG tokens
const BOX  = "#0a0a08";
const STR  = "#d4cfc0";
const LINE = "#9a9188";
const T1   = "#ede6d3";
const T2   = "#d4cfc0";
const T3   = "#9a9188";
const AF   = "rgba(217,119,6,0.18)";
const AS   = "#d97706";
const AT   = "#fbbf24";
const DASH = "3,3";

function DiagramSentinel() {
  const agents = [
    "prompt-injection",
    "insecure-output",
    "model-dos",
    "sensitive-disc",
    "plugin-abuse",
    "excessive-agency",
  ];
  return (
    <svg viewBox="0 0 520 310" className="w-full" aria-hidden="true">
      {/* TARGET.LLM */}
      <rect x="18" y="58" width="108" height="54" rx="3" fill={BOX} stroke={STR} strokeWidth="1"/>
      <text x="28" y="82" fontSize="11" fill={T1} fontFamily="monospace" letterSpacing="0.04em" fontWeight="600">TARGET.LLM</text>
      <text x="28" y="100" fontSize="10" fill={T3} fontFamily="monospace">black-box</text>

      {/* 6 attack agents */}
      {agents.map((name, i) => (
        <g key={name}>
          <path d={`M 126 85 C 152 85 146 ${72 + i * 34} 170 ${72 + i * 34}`} stroke={LINE} strokeWidth="0.9" fill="none"/>
          <rect x="170" y={60 + i * 34} width="152" height="26" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
          <text x="180" y={60 + i * 34 + 17} fontSize="10" fill={T2} fontFamily="monospace" letterSpacing="0.03em">{name}</text>
        </g>
      ))}

      {/* agents → HITL */}
      {agents.map((_, i) => (
        <path key={i} d={`M 322 ${73 + i * 34} C 350 ${73 + i * 34} 354 148 374 148`} stroke={LINE} strokeWidth="0.9" fill="none"/>
      ))}

      {/* HITL GATE */}
      <rect x="374" y="118" width="132" height="60" rx="3" fill={AF} stroke={AS} strokeWidth="1.2"/>
      <text x="386" y="143" fontSize="11" fill={AT} fontFamily="monospace" letterSpacing="0.04em" fontWeight="700">HITL GATE</text>
      <text x="386" y="163" fontSize="10" fill={AS} fontFamily="monospace">approve · block</text>

      {/* SSE */}
      <path d="M 440 178 L 440 208" stroke={AS} strokeWidth="1.2" fill="none" strokeDasharray={DASH}/>
      <rect x="374" y="208" width="132" height="38" rx="2" fill={BOX} stroke={STR} strokeWidth="0.9"/>
      <text x="386" y="232" fontSize="10" fill={T2} fontFamily="monospace">SSE → next.js</text>

      {/* OBSERVABILITY */}
      <path d="M 260 256 L 260 272" stroke={AS} strokeWidth="0.9" fill="none" strokeDasharray={DASH}/>
      <rect x="18" y="272" width="484" height="30" rx="2" fill={BOX} stroke={STR} strokeWidth="0.9"/>
      <text x="30" y="289" fontSize="11" fill={T1} fontFamily="monospace" fontWeight="700" letterSpacing="0.04em">OBSERVABILITY</text>
      <text x="30" y="289" fontSize="9.5" fill={T3} fontFamily="monospace" dy="13">langfuse · prometheus · ragas · postgres eval history</text>
    </svg>
  );
}

function DiagramARIA() {
  return (
    <svg viewBox="0 0 520 230" className="w-full" aria-hidden="true">
      {/* user query → planner */}
      <rect x="18" y="58" width="76" height="34" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="28" y="80" fontSize="10" fill={T2} fontFamily="monospace">user query</text>
      <path d="M 94 75 L 114 75" stroke={LINE} strokeWidth="0.9" fill="none"/>

      <rect x="114" y="58" width="76" height="34" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="124" y="80" fontSize="10" fill={T2} fontFamily="monospace">planner</text>
      <path d="M 190 75 L 210 75" stroke={LINE} strokeWidth="0.9" fill="none"/>

      {/* HITL */}
      <rect x="210" y="50" width="100" height="42" rx="3" fill={AF} stroke={AS} strokeWidth="1.2"/>
      <text x="222" y="69" fontSize="10" fill={AT} fontFamily="monospace" fontWeight="700">HITL GATE</text>
      <text x="222" y="85" fontSize="9.5" fill={AS} fontFamily="monospace">approve · redirect</text>

      {/* → retriever + search */}
      <path d="M 310 71 L 330 71" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <path d="M 330 71 L 330 50 L 350 50" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <path d="M 330 71 L 330 100 L 350 100" stroke={LINE} strokeWidth="0.9" fill="none"/>

      <rect x="350" y="36" width="158" height="30" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="362" y="50" fontSize="10" fill={T2} fontFamily="monospace">retriever</text>
      <text x="362" y="63" fontSize="9" fill={T3} fontFamily="monospace">BM25 + qdrant</text>

      <rect x="350" y="88" width="158" height="30" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="362" y="102" fontSize="10" fill={T2} fontFamily="monospace">search agent</text>
      <text x="362" y="115" fontSize="9" fill={T3} fontFamily="monospace">tavily</text>

      {/* loop back */}
      <path d="M 508 51 L 516 51 L 516 103 L 508 103" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <path d="M 516 77 L 516 172 L 94 172 L 94 156" stroke={LINE} strokeWidth="0.9" fill="none" strokeDasharray={DASH}/>

      {/* verifier → critic → answer */}
      <rect x="18" y="140" width="92" height="30" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="28" y="160" fontSize="10" fill={T2} fontFamily="monospace">verifier</text>
      <path d="M 110 155 L 130 155" stroke={LINE} strokeWidth="0.9" fill="none"/>

      <rect x="130" y="140" width="110" height="30" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="140" y="153" fontSize="10" fill={T2} fontFamily="monospace">critic</text>
      <text x="140" y="166" fontSize="9" fill={T3} fontFamily="monospace">ragas ≥ 0.85</text>
      <path d="M 240 155 L 260 155" stroke={LINE} strokeWidth="0.9" fill="none"/>

      <rect x="260" y="140" width="126" height="30" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="270" y="153" fontSize="10" fill={T2} fontFamily="monospace">cited answer</text>
      <text x="270" y="166" fontSize="9" fill={T3} fontFamily="monospace">source-grounded</text>

      <text x="18" y="215" fontSize="9.5" fill={T3} fontFamily="monospace">↺ critic re-runs if faithfulness &lt; 0.85</text>
    </svg>
  );
}

function DiagramITSM() {
  return (
    <svg viewBox="0 0 520 200" className="w-full" aria-hidden="true">
      {/* jira / servicenow */}
      <rect x="18" y="64" width="94" height="44" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="28" y="83" fontSize="10" fill={T2} fontFamily="monospace">jira</text>
      <text x="28" y="98" fontSize="10" fill={T3} fontFamily="monospace">servicenow</text>

      <path d="M 112 86 L 132 86" stroke={LINE} strokeWidth="0.9" fill="none"/>

      {/* evaluator */}
      <rect x="132" y="56" width="118" height="56" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="144" y="76" fontSize="11" fill={T1} fontFamily="monospace" fontWeight="700">evaluator</text>
      <text x="144" y="92" fontSize="9" fill={T3} fontFamily="monospace">hierarchical scoring</text>
      <text x="144" y="105" fontSize="9" fill={T3} fontFamily="monospace">+ explainable verdicts</text>

      {/* branch paths */}
      <path d="M 250 84 L 272 84" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <path d="M 272 84 L 272 52 L 292 52" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <path d="M 272 84 L 272 84 L 292 84" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <path d="M 272 84 L 272 116 L 292 116" stroke={LINE} strokeWidth="0.9" fill="none"/>

      {/* scoring criteria */}
      {([["completeness", 40], ["accuracy", 72], ["actionability", 104]] as [string, number][]).map(([name, y]) => (
        <g key={name}>
          <rect x="292" y={y} width="120" height="26" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
          <text x="302" y={y + 17} fontSize="10" fill={T2} fontFamily="monospace">{name}</text>
        </g>
      ))}

      {/* → LoRA */}
      <path d="M 412 52 L 432 52 L 432 130 L 412 130" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <path d="M 432 91 L 452 91" stroke={LINE} strokeWidth="0.9" fill="none"/>

      <rect x="452" y="72" width="52" height="38" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="462" y="88" fontSize="10" fill={T2} fontFamily="monospace">LoRA</text>
      <text x="462" y="102" fontSize="9" fill={T3} fontFamily="monospace">ollama</text>

      <text x="18" y="180" fontSize="9.5" fill={T3} fontFamily="monospace">fine-tuned on domain itsm tickets · ollama</text>
    </svg>
  );
}

function DiagramTriage() {
  const nodes = [
    { label: "alert", sub: "incoming", x: 18 },
    { label: "detector", sub: "", x: 128 },
    { label: "classifier", sub: "", x: 238 },
    { label: "router", sub: "", x: 348 },
  ];
  return (
    <svg viewBox="0 0 520 185" className="w-full" aria-hidden="true">
      {nodes.map((n, i) => (
        <g key={n.label}>
          <rect x={n.x} y="58" width="100" height={n.sub ? 38 : 30} rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
          <text x={n.x + 12} y={n.sub ? 75 : 79} fontSize="10" fill={T2} fontFamily="monospace">{n.label}</text>
          {n.sub && <text x={n.x + 12} y="91" fontSize="9" fill={T3} fontFamily="monospace">{n.sub}</text>}
          {i < nodes.length - 1 && (
            <path d={`M ${n.x + 100} 74 L ${n.x + 110} 74`} stroke={LINE} strokeWidth="0.9" fill="none"/>
          )}
        </g>
      ))}

      {/* router → resolve / escalate */}
      <path d="M 448 74 L 466 74" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <path d="M 466 74 L 466 52 L 480 52" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <path d="M 466 74 L 466 104 L 480 104" stroke={LINE} strokeWidth="0.9" fill="none"/>

      <rect x="480" y="38" width="34" height="28" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="486" y="56" fontSize="9" fill={T2} fontFamily="monospace">resolve</text>

      <rect x="480" y="90" width="34" height="28" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="484" y="108" fontSize="9" fill={T2} fontFamily="monospace">escalate</text>

      <text x="18" y="170" fontSize="9.5" fill={T3} fontFamily="monospace">mcp tool calls · cmdb correlation · servicenow ticket</text>
    </svg>
  );
}

function DiagramOSS() {
  return (
    <svg viewBox="0 0 520 175" className="w-full" aria-hidden="true">
      {/* github actions */}
      <rect x="18" y="60" width="122" height="36" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="28" y="75" fontSize="10" fill={T2} fontFamily="monospace">github actions</text>
      <text x="28" y="89" fontSize="9" fill={T3} fontFamily="monospace">cron schedule</text>

      <path d="M 140 78 L 160 78" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <path d="M 160 78 L 160 52 L 180 52" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <path d="M 160 78 L 160 112 L 180 112" stroke={LINE} strokeWidth="0.9" fill="none"/>

      {/* PR monitor */}
      <rect x="180" y="38" width="146" height="28" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="190" y="57" fontSize="10" fill={T2} fontFamily="monospace">PR monitor agent</text>
      <path d="M 326 52 L 346 52" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <rect x="346" y="38" width="104" height="28" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="356" y="57" fontSize="10" fill={T2} fontFamily="monospace">email report</text>

      {/* issue fixer */}
      <rect x="180" y="98" width="146" height="28" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="190" y="117" fontSize="10" fill={T2} fontFamily="monospace">issue fixer agent</text>
      <path d="M 326 112 L 346 112" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <rect x="346" y="98" width="78" height="28" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="356" y="117" fontSize="10" fill={T2} fontFamily="monospace">test suite</text>
      <path d="M 424 112 L 444 112" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <rect x="444" y="98" width="62" height="28" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="452" y="117" fontSize="10" fill={T2} fontFamily="monospace">draft PR</text>

      <text x="18" y="160" fontSize="9.5" fill={T3} fontFamily="monospace">anthropic tool use · subprocess · zero local infra</text>
    </svg>
  );
}

function DiagramGraphRAG() {
  return (
    <svg viewBox="0 0 520 205" className="w-full" aria-hidden="true">
      {/* input */}
      <rect x="18" y="62" width="106" height="42" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="28" y="79" fontSize="10" fill={T2} fontFamily="monospace">docs · images</text>
      <text x="28" y="95" fontSize="9" fill={T3} fontFamily="monospace">urls (depth-5)</text>

      <path d="M 124 83 L 144 83" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <path d="M 144 83 L 144 58 L 164 58" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <path d="M 144 83 L 144 112 L 164 112" stroke={LINE} strokeWidth="0.9" fill="none"/>

      {/* entity extraction */}
      <rect x="164" y="44" width="158" height="30" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="174" y="57" fontSize="10" fill={T2} fontFamily="monospace">entity extraction</text>
      <text x="174" y="70" fontSize="9" fill={T3} fontFamily="monospace">→ neo4j graph</text>

      {/* embeddings */}
      <rect x="164" y="98" width="158" height="30" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="174" y="111" fontSize="10" fill={T2} fontFamily="monospace">multimodal embeddings</text>
      <text x="174" y="124" fontSize="9" fill={T3} fontFamily="monospace">→ qdrant vectors</text>

      {/* merge → hybrid query */}
      <path d="M 322 59 L 342 59 L 342 113 L 322 113" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <path d="M 342 86 L 362 86" stroke={LINE} strokeWidth="0.9" fill="none"/>

      <rect x="362" y="72" width="118" height="30" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="372" y="85" fontSize="10" fill={T2} fontFamily="monospace">hybrid query</text>
      <text x="372" y="98" fontSize="9" fill={T3} fontFamily="monospace">graph + vector</text>

      <path d="M 480 87 L 500 87" stroke={LINE} strokeWidth="0.9" fill="none"/>
      <rect x="500" y="74" width="16" height="26" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="503" y="91" fontSize="9" fill={T2} fontFamily="monospace">↗</text>

      {/* bottom bar */}
      <rect x="18" y="158" width="484" height="26" rx="2" fill={BOX} stroke={STR} strokeWidth="0.8"/>
      <text x="28" y="174" fontSize="9.5" fill={T3} fontFamily="monospace">graphrag outperforms dense-only on entity-heavy queries · citation-traced Q&amp;A</text>
    </svg>
  );
}

const diagrams: Record<string, () => React.ReactElement> = {
  "01": DiagramSentinel,
  "02": DiagramARIA,
  "03": DiagramITSM,
  "04": DiagramTriage,
  "05": DiagramOSS,
  "06": DiagramGraphRAG,
};

const projects = [
  {
    index: "01",
    title: "LLM Security Sentinel",
    sub: "a six-agent red-team platform.",
    label: "Agentic AI Security · Flagship",
    tags: ["FastAPI","LangGraph","Next.js","OWASP LLM Top 10","SSE","PostgreSQL","Prometheus","Langfuse"],
    tagline: '"OWASP LLM Top-10 coverage with a human-in-the-loop approval gate and live SSE dashboard."',
    meat: "Architected a <b>production-grade LLM red-team platform</b> orchestrating <b>6 OWASP attack agents</b> (Prompt Injection, Model DoS, Excessive Agency…) with a human-in-the-loop approval gate and real-time SSE streaming to a Next.js live dashboard. Universal format-detection adapter supporting <b>8 endpoint schemas</b> with multi-LLM provider switching (OpenAI, Gemini Flash).",
    stats: [{ value: "6", label: "Attack Agents" }, { value: "8", label: "Endpoint Schemas" }, { value: "live", label: "SSE Dashboard" }],
    link: "https://github.com/manjunathgujjar",
  },
  {
    index: "02",
    title: "ARIA",
    sub: "autonomous research & intelligence agents.",
    label: "Multi-Agent RAG Platform",
    tags: ["LangGraph","FastAPI","BM25","Qdrant","Redis","Ragas","WebSocket","Langfuse"],
    tagline: '"Faithfulness > 0.91 · sub-10ms Redis cache · CI-gated Ragas eval pipeline."',
    meat: "Built a <b>5-agent research platform</b> (Planner, Retriever, Search, Verifier, Critic) with a HITL approval gate and CI-gated Ragas evaluation achieving <b>faithfulness > 0.91</b> on 50 golden questions. Hybrid retrieval (<b>BM25 + Qdrant</b>) with cross-encoder reranking and <b>sub-10ms Redis semantic cache</b>; Langfuse traces every retrieval score and prompt across all agents.",
    stats: [{ value: "0.91", label: "Faithfulness" }, { value: "<10ms", label: "Cache Latency" }, { value: "50", label: "Golden Q&A" }],
    link: "https://github.com/manjunathgujjar",
  },
  {
    index: "03",
    title: "Agentic ITSM Evaluator",
    sub: "ticket quality scoring at enterprise scale.",
    label: "Enterprise AI Automation",
    tags: ["FastAPI","LangGraph","Ollama","LoRA","PostgreSQL","Redis","Docker","Kubernetes"],
    tagline: '"70% throughput · 55% less variability · LoRA fine-tuned Ollama classifier."',
    meat: "Designed an <b>LLM-powered ITSM ticket quality evaluator</b> scoring completeness, accuracy, and actionability with hierarchical logic and explainable verdicts; fine-tuned Llama 3 via Ollama with <b>LoRA on domain-specific ticket data</b>. Multi-tenant FastAPI backend improved review throughput by <b>70%</b> and reduced assessment variability by <b>55%</b>.",
    stats: [{ value: "70%", label: "Throughput Gain" }, { value: "55%", label: "Less Variability" }, { value: "LoRA", label: "Fine-tuned" }],
    link: "https://github.com/manjunathgujjar",
  },
  {
    index: "04",
    title: "Agentic Incident Triage",
    sub: "cloud-native autonomous alert pipeline.",
    label: "Cloud-Native Agentic Platform",
    tags: ["Azure AI Foundry","LangGraph","FastAPI","MCP","ServiceNow","CMDB","Redis","OAuth2"],
    tagline: '"Autonomous alert-to-ticket pipeline with CMDB correlation and runbook execution."',
    meat: "Built a <b>cloud-native incident triage platform</b> on Azure AI Foundry where agents (Detector, Classifier, Router, Resolver) process incoming alerts, correlate against <b>CMDB topology</b>, and auto-resolve known patterns with full audit trails. Agents invoke enterprise tools via <b>MCP-governed tool calls</b> to query alert history, run playbooks, and create ServiceNow tickets autonomously.",
    stats: [{ value: "MCP", label: "Tool Calls" }, { value: "CMDB", label: "Correlated" }, { value: "audit", label: "All Decisions" }],
    link: "https://github.com/manjunathgujjar",
  },
  {
    index: "05",
    title: "OSS Automation Agents",
    sub: "pr monitor + issue fixer on github actions.",
    label: "Developer Tooling · Anthropic API",
    tags: ["Anthropic API","Python","GitHub Actions","Tool Use","Subprocess","CI/CD"],
    tagline: '"Two autonomous agents on GitHub Actions: PR monitor + bug fixer, zero local infra."',
    meat: "Built two <b>agentic workers on GitHub Actions</b> cron using the Anthropic Messages API with native tool use — a <b>PR Monitor agent</b> that digests CI/review activity into structured email reports, and an <b>Issue Fixer agent</b> that writes fixes, runs the test suite, and opens a draft PR autonomously. Bare-metal agent loop with no framework overhead.",
    stats: [{ value: "2", label: "Agents" }, { value: "0", label: "Local Infra" }, { value: "API", label: "Anthropic" }],
    link: "https://github.com/manjunathgujjar/oss-automation",
  },
  {
    index: "06",
    title: "GraphRAG Knowledge Platform",
    sub: "entity graph + hybrid retrieval pipeline.",
    label: "Full-Stack Research Application",
    tags: ["Neo4j","GraphRAG","Ollama","DeepSeek","Hybrid Retrieval","Multimodal Embeddings"],
    tagline: '"Graph-augmented retrieval outperforms dense-only baseline on entity-heavy queries."',
    meat: "Built an AI platform ingesting documents, images, and recursive links (depth-5), extracting entities and relationships into a <b>Neo4j knowledge graph</b>. Implemented <b>GraphRAG with multimodal embeddings</b> and hybrid retrieval (graph traversal + vector search); benchmarked against dense-only baseline with measurable accuracy gains on <b>entity-heavy queries</b> and citation-traced Q&A.",
    stats: [{ value: "depth-5", label: "Crawl" }, { value: "Neo4j", label: "Graph DB" }, { value: "hybrid", label: "Retrieval" }],
    link: "https://github.com/manjunathgujjar",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-black py-36 px-4 sm:px-10 md:px-14">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex justify-between items-end mb-14">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#8a8477] mb-3">
              § 04 <span className="text-amber-500 mx-1.5">·</span> Selected Work
            </p>
            <h2
              className="font-fraunces font-light text-[#ede6d3] leading-none tracking-[-0.025em]"
              style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
            >
              Things I've <em className="italic text-amber-500">shipped</em>.
            </h2>
          </div>
          <span className="font-mono text-xs text-[#8a8477] tracking-[0.08em] hidden md:block pb-1">
            06 projects · 2021—2026
          </span>
        </div>

        {/* Project list */}
        <div className="flex flex-col">
          {projects.map((project, idx) => {
            const Diagram = diagrams[project.index];
            const isReverse = idx % 2 === 1;
            return (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="group border-t border-white/[0.07] py-10 md:py-14 last:border-b last:border-white/[0.07]"
                style={{
                  display: "grid",
                  gridTemplateColumns: isReverse ? "1fr 1.2fr" : "1.2fr 1fr",
                  gap: "40px",
                  alignItems: "stretch",
                }}
              >
                {/* Diagram panel */}
                <div
                  className={`${isReverse ? "order-2" : "order-1"} bg-[#0f0f0f] border border-white/[0.07] rounded overflow-hidden flex items-center justify-center p-6 md:p-8`}
                  style={{ minHeight: "320px" }}
                >
                  <Diagram />
                </div>

                {/* Content panel */}
                <div className={`${isReverse ? "order-1" : "order-2"} flex flex-col gap-[18px] py-3`}>
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[11px] text-[#8a8477] tracking-[0.1em] uppercase">
                      {project.index} · {project.label}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-[#9a9188] group-hover:bg-amber-600 group-hover:border-amber-600 group-hover:text-black group-hover:-rotate-[8deg] transition-all duration-200"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div>
                    <h3
                      className="font-fraunces font-normal text-[#ede6d3] leading-none tracking-[-0.02em]"
                      style={{ fontSize: "clamp(28px, 2.8vw, 42px)" }}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="block font-fraunces italic font-light text-[#c7c0ae] mt-2"
                      style={{ fontSize: "clamp(16px, 1.4vw, 24px)" }}
                    >
                      {project.sub}
                    </span>
                  </div>

                  <p className="font-fraunces italic text-[16px] text-amber-500/80 max-w-[46ch] leading-snug">
                    {project.tagline}
                  </p>

                  <p
                    className="text-[14.5px] leading-relaxed text-[#c7c0ae] max-w-[52ch] [&_b]:text-[#E1E0CC] [&_b]:font-medium"
                    dangerouslySetInnerHTML={{ __html: project.meat }}
                  />

                  <div className="flex gap-8 pt-1">
                    {project.stats.map((s) => (
                      <div key={s.label}>
                        <span className="font-fraunces font-light text-[#ede6d3] text-[26px] leading-none block">
                          {s.value}
                        </span>
                        <span className="font-mono text-[10px] text-[#8a8477] tracking-[0.1em] uppercase mt-1.5 block">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1">
                    {project.tags.map((tag, i) => (
                      <span key={tag} className="font-mono text-[11px] text-[#8a8477] tracking-[0.04em]">
                        {i > 0 && <span className="mr-4 text-white/10">·</span>}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
