import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "../ui/WordsPullUpMultiStyle";

// Shared SVG token constants
const BOX    = "#222222";
const STROKE = "#444444";
const LINE   = "#555555";
const T1     = "#E1E0CC"; // cream — main labels
const T2     = "#b4b3a0"; // warm gray — secondary
const T3     = "#9ca3af"; // gray-400 — tertiary/sub
const DASH   = "2,2";

function DiagramSentinel() {
  const agents = ["prompt-injection","insecure-output","model-dos","sensitive-disc","plugin-abuse","excessive-agency"];
  return (
    <svg viewBox="0 0 340 222" className="w-full" aria-hidden="true">
      <rect x="4" y="74" width="62" height="42" rx="2" fill={BOX} stroke={STROKE} strokeWidth="1"/>
      <text x="35" y="89" fontSize="7" fill={T1} fontFamily="monospace" textAnchor="middle" fontWeight="600">TARGET.LLM</text>
      <text x="35" y="103" fontSize="6" fill={T3} fontFamily="monospace" textAnchor="middle">black-box</text>
      {agents.map((_, i) => (
        <line key={i} x1="66" y1="95" x2="106" y2={20 + i * 30} stroke={LINE} strokeWidth="0.75"/>
      ))}
      {agents.map((name, i) => (
        <g key={name}>
          <rect x="106" y={8 + i * 30} width="102" height="24" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
          <text x="157" y={8 + i * 30 + 15} fontSize="6.5" fill={T2} fontFamily="monospace" textAnchor="middle">{name}</text>
        </g>
      ))}
      {agents.map((_, i) => (
        <line key={i} x1="208" y1={20 + i * 30} x2="252" y2="97" stroke={LINE} strokeWidth="0.75"/>
      ))}
      <rect x="252" y="79" width="83" height="36" rx="2" fill="#120900" stroke="#78350f" strokeWidth="1" strokeOpacity="0.8"/>
      <text x="293" y="93" fontSize="7" fill="#fbbf24" fontFamily="monospace" textAnchor="middle" fontWeight="600">HITL GATE</text>
      <text x="293" y="105" fontSize="6" fill="#d97706" fontFamily="monospace" textAnchor="middle">approve · block</text>
      <rect x="252" y="127" width="83" height="24" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="293" y="141" fontSize="6.5" fill={T2} fontFamily="monospace" textAnchor="middle">SSE → next.js</text>
      <line x1="293" y1="115" x2="293" y2="127" stroke={LINE} strokeWidth="0.75" strokeDasharray={DASH}/>
      <rect x="4" y="192" width="330" height="27" rx="2" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="0.75"/>
      <text x="13" y="204" fontSize="7" fill={T1} fontFamily="monospace" fontWeight="600">OBSERVABILITY</text>
      <text x="13" y="214" fontSize="5.5" fill={T3} fontFamily="monospace">langfuse · prometheus · ragas · postgres eval history</text>
      <line x1="157" y1="182" x2="157" y2="192" stroke={LINE} strokeWidth="0.75" strokeDasharray={DASH}/>
    </svg>
  );
}

function DiagramARIA() {
  return (
    <svg viewBox="0 0 340 155" className="w-full" aria-hidden="true">
      <rect x="4" y="20" width="50" height="22" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="29" y="33" fontSize="6.5" fill={T2} fontFamily="monospace" textAnchor="middle">user query</text>
      <line x1="54" y1="31" x2="68" y2="31" stroke={LINE} strokeWidth="0.75"/>
      <rect x="68" y="20" width="52" height="22" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="94" y="33" fontSize="6.5" fill={T2} fontFamily="monospace" textAnchor="middle">planner</text>
      <line x1="120" y1="31" x2="134" y2="31" stroke={LINE} strokeWidth="0.75"/>
      <rect x="134" y="16" width="64" height="30" rx="2" fill="#120900" stroke="#78350f" strokeWidth="1" strokeOpacity="0.8"/>
      <text x="166" y="29" fontSize="6.5" fill="#fbbf24" fontFamily="monospace" textAnchor="middle" fontWeight="600">HITL GATE</text>
      <text x="166" y="39" fontSize="5.5" fill="#d97706" fontFamily="monospace" textAnchor="middle">approve · redirect</text>
      <line x1="198" y1="31" x2="212" y2="31" stroke={LINE} strokeWidth="0.75"/>
      <line x1="212" y1="31" x2="212" y2="20" stroke={LINE} strokeWidth="0.75"/>
      <line x1="212" y1="20" x2="226" y2="20" stroke={LINE} strokeWidth="0.75"/>
      <line x1="212" y1="31" x2="212" y2="58" stroke={LINE} strokeWidth="0.75"/>
      <line x1="212" y1="58" x2="226" y2="58" stroke={LINE} strokeWidth="0.75"/>
      <rect x="226" y="8" width="108" height="24" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="280" y="19" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">retriever</text>
      <text x="280" y="28" fontSize="5.5" fill={T3} fontFamily="monospace" textAnchor="middle">BM25 + qdrant</text>
      <rect x="226" y="46" width="108" height="24" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="280" y="57" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">search agent</text>
      <text x="280" y="66" fontSize="5.5" fill={T3} fontFamily="monospace" textAnchor="middle">tavily</text>
      <line x1="334" y1="20" x2="338" y2="20" stroke={LINE} strokeWidth="0.75"/>
      <line x1="334" y1="58" x2="338" y2="58" stroke={LINE} strokeWidth="0.75"/>
      <line x1="338" y1="20" x2="338" y2="58" stroke={LINE} strokeWidth="0.75"/>
      <line x1="338" y1="39" x2="338" y2="114" stroke={LINE} strokeWidth="0.75" strokeDasharray={DASH}/>
      <line x1="338" y1="114" x2="36" y2="114" stroke={LINE} strokeWidth="0.75" strokeDasharray={DASH}/>
      <line x1="36" y1="114" x2="36" y2="108" stroke={LINE} strokeWidth="0.75"/>
      <rect x="4" y="86" width="64" height="22" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="36" y="99" fontSize="6.5" fill={T2} fontFamily="monospace" textAnchor="middle">verifier</text>
      <line x1="68" y1="97" x2="82" y2="97" stroke={LINE} strokeWidth="0.75"/>
      <rect x="82" y="86" width="76" height="22" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="120" y="96" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">critic</text>
      <text x="120" y="105" fontSize="5.5" fill={T3} fontFamily="monospace" textAnchor="middle">ragas ≥ 0.85</text>
      <line x1="158" y1="97" x2="172" y2="97" stroke={LINE} strokeWidth="0.75"/>
      <rect x="172" y="86" width="84" height="22" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="214" y="96" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">cited answer</text>
      <text x="214" y="105" fontSize="5.5" fill={T3} fontFamily="monospace" textAnchor="middle">source-grounded</text>
      <text x="4" y="144" fontSize="5.5" fill={T3} fontFamily="monospace">↺ critic re-runs if faithfulness &lt; 0.85</text>
    </svg>
  );
}

function DiagramITSM() {
  return (
    <svg viewBox="0 0 340 130" className="w-full" aria-hidden="true">
      <rect x="4" y="46" width="64" height="30" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="36" y="59" fontSize="6.5" fill={T2} fontFamily="monospace" textAnchor="middle">jira</text>
      <text x="36" y="70" fontSize="6.5" fill={T3} fontFamily="monospace" textAnchor="middle">servicenow</text>
      <line x1="68" y1="61" x2="82" y2="61" stroke={LINE} strokeWidth="0.75"/>
      <rect x="82" y="43" width="78" height="36" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="121" y="56" fontSize="7" fill={T1} fontFamily="monospace" textAnchor="middle" fontWeight="600">evaluator</text>
      <text x="121" y="68" fontSize="5.5" fill={T3} fontFamily="monospace" textAnchor="middle">hierarchical scoring</text>
      <text x="121" y="76" fontSize="5.5" fill={T3} fontFamily="monospace" textAnchor="middle">+ explainable verdicts</text>
      <line x1="160" y1="61" x2="174" y2="61" stroke={LINE} strokeWidth="0.75"/>
      <line x1="174" y1="61" x2="174" y2="34" stroke={LINE} strokeWidth="0.75"/>
      <line x1="174" y1="61" x2="174" y2="88" stroke={LINE} strokeWidth="0.75"/>
      {[["completeness", 22], ["accuracy", 49], ["actionability", 76]].map(([name, y]) => (
        <g key={String(name)}>
          <line x1="174" y1={Number(y) + 9} x2="188" y2={Number(y) + 9} stroke={LINE} strokeWidth="0.75"/>
          <rect x="188" y={Number(y)} width="96" height="20" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
          <text x="236" y={Number(y) + 13} fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">{String(name)}</text>
        </g>
      ))}
      <line x1="284" y1="31" x2="298" y2="31" stroke={LINE} strokeWidth="0.75"/>
      <line x1="284" y1="58" x2="298" y2="58" stroke={LINE} strokeWidth="0.75"/>
      <line x1="284" y1="85" x2="298" y2="85" stroke={LINE} strokeWidth="0.75"/>
      <line x1="298" y1="31" x2="298" y2="85" stroke={LINE} strokeWidth="0.75"/>
      <line x1="298" y1="58" x2="312" y2="58" stroke={LINE} strokeWidth="0.75"/>
      <rect x="312" y="45" width="24" height="26" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="324" y="56" fontSize="5.5" fill={T2} fontFamily="monospace" textAnchor="middle">LoRA</text>
      <text x="324" y="65" fontSize="5" fill={T3} fontFamily="monospace" textAnchor="middle">ollama</text>
      <text x="4" y="115" fontSize="5.5" fill={T3} fontFamily="monospace">fine-tuned on domain itsm tickets via ollama</text>
    </svg>
  );
}

function DiagramTriage() {
  const nodes = [
    { label: "alert", sub: "incoming", x: 4 },
    { label: "detector", sub: "", x: 74 },
    { label: "classifier", sub: "", x: 144 },
    { label: "router", sub: "", x: 214 },
  ];
  return (
    <svg viewBox="0 0 340 120" className="w-full" aria-hidden="true">
      {nodes.map((n, i) => (
        <g key={n.label}>
          <rect x={n.x} y="40" width="64" height={n.sub ? 30 : 22} rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
          <text x={n.x + 32} y={n.sub ? 53 : 54} fontSize="6.5" fill={T2} fontFamily="monospace" textAnchor="middle">{n.label}</text>
          {n.sub && <text x={n.x + 32} y="66" fontSize="5.5" fill={T3} fontFamily="monospace" textAnchor="middle">{n.sub}</text>}
          {i < nodes.length - 1 && <line x1={n.x + 64} y1="52" x2={n.x + 74} y2="52" stroke={LINE} strokeWidth="0.75"/>}
        </g>
      ))}
      <line x1="278" y1="52" x2="292" y2="52" stroke={LINE} strokeWidth="0.75"/>
      <line x1="292" y1="52" x2="292" y2="36" stroke={LINE} strokeWidth="0.75"/>
      <line x1="292" y1="52" x2="292" y2="78" stroke={LINE} strokeWidth="0.75"/>
      <line x1="292" y1="36" x2="306" y2="36" stroke={LINE} strokeWidth="0.75"/>
      <line x1="292" y1="78" x2="306" y2="78" stroke={LINE} strokeWidth="0.75"/>
      <rect x="306" y="26" width="30" height="20" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="321" y="39" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">resolve</text>
      <rect x="306" y="68" width="30" height="20" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="321" y="81" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">escalate</text>
      <text x="4" y="110" fontSize="5.5" fill={T3} fontFamily="monospace">mcp tool calls · cmdb correlation · servicenow ticket</text>
    </svg>
  );
}

function DiagramOSS() {
  return (
    <svg viewBox="0 0 340 110" className="w-full" aria-hidden="true">
      <rect x="4" y="42" width="90" height="22" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="49" y="51" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">github actions</text>
      <text x="49" y="60" fontSize="5.5" fill={T3} fontFamily="monospace" textAnchor="middle">cron schedule</text>
      <line x1="94" y1="53" x2="108" y2="53" stroke={LINE} strokeWidth="0.75"/>
      <line x1="108" y1="53" x2="108" y2="32" stroke={LINE} strokeWidth="0.75"/>
      <line x1="108" y1="53" x2="108" y2="74" stroke={LINE} strokeWidth="0.75"/>
      <line x1="108" y1="32" x2="122" y2="32" stroke={LINE} strokeWidth="0.75"/>
      <line x1="108" y1="74" x2="122" y2="74" stroke={LINE} strokeWidth="0.75"/>
      <rect x="122" y="22" width="96" height="20" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="170" y="35" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">PR monitor agent</text>
      <line x1="218" y1="32" x2="232" y2="32" stroke={LINE} strokeWidth="0.75"/>
      <rect x="232" y="22" width="72" height="20" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="268" y="35" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">email report</text>
      <rect x="122" y="64" width="96" height="20" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="170" y="77" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">issue fixer agent</text>
      <line x1="218" y1="74" x2="232" y2="74" stroke={LINE} strokeWidth="0.75"/>
      <rect x="232" y="64" width="50" height="20" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="257" y="77" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">test suite</text>
      <line x1="282" y1="74" x2="296" y2="74" stroke={LINE} strokeWidth="0.75"/>
      <rect x="296" y="64" width="40" height="20" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="316" y="77" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">draft PR</text>
      <text x="4" y="100" fontSize="5.5" fill={T3} fontFamily="monospace">anthropic tool use · subprocess · zero local infra</text>
    </svg>
  );
}

function DiagramGraphRAG() {
  return (
    <svg viewBox="0 0 340 130" className="w-full" aria-hidden="true">
      <rect x="4" y="42" width="80" height="30" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="44" y="54" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">docs · images</text>
      <text x="44" y="63" fontSize="6" fill={T3} fontFamily="monospace" textAnchor="middle">urls (depth-5)</text>
      <line x1="84" y1="57" x2="98" y2="57" stroke={LINE} strokeWidth="0.75"/>
      <line x1="98" y1="57" x2="98" y2="36" stroke={LINE} strokeWidth="0.75"/>
      <line x1="98" y1="57" x2="98" y2="80" stroke={LINE} strokeWidth="0.75"/>
      <line x1="98" y1="36" x2="112" y2="36" stroke={LINE} strokeWidth="0.75"/>
      <line x1="98" y1="80" x2="112" y2="80" stroke={LINE} strokeWidth="0.75"/>
      <rect x="112" y="24" width="102" height="24" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="163" y="35" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">entity extraction</text>
      <text x="163" y="44" fontSize="5.5" fill={T3} fontFamily="monospace" textAnchor="middle">→ neo4j graph</text>
      <rect x="112" y="68" width="102" height="24" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="163" y="79" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">multimodal embeddings</text>
      <text x="163" y="88" fontSize="5.5" fill={T3} fontFamily="monospace" textAnchor="middle">→ qdrant vectors</text>
      <line x1="214" y1="36" x2="228" y2="36" stroke={LINE} strokeWidth="0.75"/>
      <line x1="214" y1="80" x2="228" y2="80" stroke={LINE} strokeWidth="0.75"/>
      <line x1="228" y1="36" x2="228" y2="80" stroke={LINE} strokeWidth="0.75"/>
      <line x1="228" y1="58" x2="242" y2="58" stroke={LINE} strokeWidth="0.75"/>
      <rect x="242" y="46" width="70" height="24" rx="2" fill={BOX} stroke={STROKE} strokeWidth="0.75"/>
      <text x="277" y="57" fontSize="6" fill={T2} fontFamily="monospace" textAnchor="middle">hybrid query</text>
      <text x="277" y="66" fontSize="5.5" fill={T3} fontFamily="monospace" textAnchor="middle">graph + vector</text>
      <line x1="312" y1="58" x2="326" y2="58" stroke={LINE} strokeWidth="0.75"/>
      <rect x="1" y="108" width="338" height="18" rx="2" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="0.75"/>
      <text x="10" y="120" fontSize="6" fill={T3} fontFamily="monospace">graphrag outperforms dense-only on entity-heavy queries · citation-traced Q&amp;A</text>
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
    type: "Agentic AI Security Platform",
    figLabel: "target llm ← 6 agents → eval gate → sse stream",
    flagship: true,
    tags: ["FastAPI","LangGraph","Next.js","OWASP LLM Top 10","SSE","PostgreSQL","Prometheus","Langfuse","OpenAI","Gemini"],
    bullets: [
      "Architected a production-grade LLM red-team platform orchestrating 6 OWASP LLM Top 10 attack agents (Prompt Injection, Insecure Output Handling, Model DoS, Sensitive Disclosure, Plugin Abuse, Excessive Agency) with a human-in-the-loop approval gate and real-time SSE event streaming to a Next.js live dashboard.",
      "Engineered a universal format-detection adapter supporting 8 endpoint schemas (JSON variants, OpenAI-compatible, form-encoded) with multi-LLM provider switching (OpenAI, Gemini Flash), enabling black-box security testing of any LLM endpoint.",
    ],
    highlight: "OWASP LLM Top 10 coverage with a human-in-the-loop approval gate and live SSE dashboard.",
    stats: [{ value: "6", label: "Attack Agents" }, { value: "8", label: "Endpoint Schemas" }, { value: "live", label: "SSE Dashboard" }],
    link: "https://github.com/manjunathgujjar",
  },
  {
    index: "02",
    title: "ARIA – Autonomous Research & Intelligence Agents",
    type: "Multi-Agent RAG Platform",
    figLabel: "planner → hitl → retrieval → verify → critic → answer",
    flagship: false,
    tags: ["LangGraph","FastAPI","BM25","Qdrant","Redis","Ragas","WebSocket","Langfuse"],
    bullets: [
      "Built a multi-agent research platform coordinating 5 specialized agents (Planner, Retriever, Search, Verifier, Critic) with a human-in-the-loop approval gate and CI-gated Ragas evaluation achieving faithfulness > 0.91 on a 50-question golden dataset.",
      "Implemented hybrid retrieval (BM25 + Qdrant) with cross-encoder reranking, citation enforcement, and semantic Redis cache at sub-10ms hit latency; Langfuse tracing covers every retrieval score and prompt across all agents.",
    ],
    highlight: "Faithfulness > 0.91 · sub-10ms Redis cache · CI-gated Ragas eval pipeline.",
    stats: [{ value: "0.91", label: "Faithfulness" }, { value: "<10ms", label: "Cache Latency" }, { value: "50", label: "Golden Q&A" }],
    link: "https://github.com/manjunathgujjar",
  },
  {
    index: "03",
    title: "Agentic ITSM Ticket Quality Evaluator",
    type: "Enterprise AI Automation",
    figLabel: "ticket ingestion → scoring → lora classifier → verdict",
    flagship: false,
    tags: ["FastAPI","LangGraph","Ollama","LoRA","PostgreSQL","Redis","Docker","Kubernetes","Jira","ServiceNow"],
    bullets: [
      "Designed and productionized an LLM-powered ITSM ticket quality evaluator scoring completeness, accuracy, and actionability with hierarchical scoring logic and explainable verdicts; fine-tuned Llama 3 via Ollama with LoRA on domain-specific ticket data.",
      "Built a modular multi-tenant backend (FastAPI, PostgreSQL, Redis, Docker/Kubernetes) with evaluation criteria co-designed with PM, SRE, and Customer Success; improved review throughput by 70% and reduced assessment variability by 55%.",
    ],
    highlight: "70% throughput · 55% less variability · LoRA fine-tuned Ollama classifier.",
    stats: [{ value: "70%", label: "Throughput Gain" }, { value: "55%", label: "Less Variability" }, { value: "LoRA", label: "Fine-tuned" }],
    link: "https://github.com/manjunathgujjar",
  },
  {
    index: "04",
    title: "Agentic Incident Triage Automation",
    type: "Cloud-Native Agentic Platform",
    figLabel: "alert → detect → classify → route → resolve or escalate",
    flagship: false,
    tags: ["Azure AI Foundry","LangGraph","FastAPI","MCP","ServiceNow","CMDB","Redis","OAuth2"],
    bullets: [
      "Built a cloud-native incident triage platform on Azure AI Foundry, deployed on-premises, where a pipeline of specialized agents (Detector, Classifier, Router, Resolver) processes incoming alerts, correlates against CMDB topology, and auto-resolves known incident patterns with full audit trails.",
      "Agents invoke enterprise tools via MCP-governed API calls to query alert history, retrieve service topology, execute runbooks, and create ServiceNow tickets autonomously, freeing L1 engineers from routine triage loops.",
    ],
    highlight: "Autonomous alert-to-ticket pipeline with CMDB correlation and runbook execution.",
    stats: [{ value: "MCP", label: "Tool Calls" }, { value: "CMDB", label: "Correlated" }, { value: "audit", label: "All Decisions" }],
    link: "https://github.com/manjunathgujjar",
  },
  {
    index: "05",
    title: "OSS Contribution Automation Agents",
    type: "Developer Tooling · Anthropic API",
    figLabel: "github actions cron → pr monitor + issue fixer agents",
    flagship: false,
    tags: ["Anthropic API","Python","GitHub Actions","Tool Use","Subprocess","CI/CD"],
    bullets: [
      "Built two agentic workers on GitHub Actions cron using the Anthropic Messages API with native tool use: a PR Monitor agent that digests CI/review activity into structured email reports, and an Issue Fixer agent that detects open bugs, writes fixes, runs the test suite, and opens a draft PR autonomously.",
      "Implemented a bare-metal agent loop (tool call → subprocess → result feed-back) with no framework overhead, demonstrating the core agentic pattern using client.messages.create() with tool definitions.",
    ],
    highlight: "Two autonomous agents on GitHub Actions: PR monitor + bug fixer.",
    stats: [{ value: "2", label: "Agents" }, { value: "0", label: "Local Infra" }, { value: "API", label: "Anthropic" }],
    link: "https://github.com/manjunathgujjar/oss-automation",
  },
  {
    index: "06",
    title: "AI-Driven Knowledge Graph & GraphRAG Platform",
    type: "Full-Stack Research Application",
    figLabel: "ingest → entity graph + embeddings → hybrid query → answer",
    flagship: false,
    tags: ["Neo4j","GraphRAG","Ollama","DeepSeek","Hybrid Retrieval","Multimodal Embeddings","Python"],
    bullets: [
      "Built an AI platform that ingests documents, images, and recursive links (depth-5), extracting entities and relationships into a Neo4j knowledge graph for structured semantic retrieval.",
      "Implemented GraphRAG with multimodal embeddings and hybrid retrieval (graph traversal + vector search); benchmarked graph-augmented retrieval against dense-only baseline, demonstrating measurable accuracy gains on entity-heavy queries.",
    ],
    highlight: "GraphRAG vs. dense-only benchmarked: graph augmentation outperforms on entity-heavy queries.",
    stats: [{ value: "depth-5", label: "Crawl" }, { value: "Neo4j", label: "Graph DB" }, { value: "hybrid", label: "Retrieval" }],
    link: "https://github.com/manjunathgujjar",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-black py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <WordsPullUpMultiStyle
            className="text-3xl sm:text-5xl font-medium tracking-tight text-left justify-start"
            segments={[{ text: "Selected Projects", className: "text-[#E1E0CC] font-medium" }]}
          />
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project, idx) => {
            const Diagram = diagrams[project.index];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group grid md:grid-cols-2 rounded-2xl overflow-hidden border border-transparent hover:border-white/15 transition-colors duration-300"
              >
                {/* Left: Diagram panel */}
                <div className="bg-[#0f0f0f] border-b md:border-b-0 md:border-r border-white/[0.06] p-8 flex flex-col">
                  <div className="font-mono mb-4">
                    <p className="text-[9px] text-gray-400 italic mb-1">
                      fig. {project.index} / {project.type.toLowerCase()}
                      {project.flagship && " · flagship"}
                    </p>
                    <p className="text-[8px] text-gray-500 leading-relaxed">{project.figLabel}</p>
                  </div>
                  <div className="flex-1 flex items-start pt-2">
                    <Diagram />
                  </div>
                </div>

                {/* Right: Content panel */}
                <div className="bg-[#141414] p-8 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <p className="text-[9px] text-gray-400 tracking-widest uppercase font-mono mb-2">
                        {project.index} · {project.type}
                        {project.flagship && " · flagship"}
                      </p>
                      <h3 className="text-[#E1E0CC] text-xl md:text-2xl font-medium leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all duration-300"
                    >
                      <ArrowUpRight className="text-gray-500 group-hover:text-[#E1E0CC] w-4 h-4 transition-colors" />
                    </a>
                  </div>

                  <p className="text-[#E1E0CC]/80 font-serif italic text-base mb-5 leading-snug">
                    {project.highlight}
                  </p>

                  <ul className="space-y-3 mb-6 flex-1">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="flex gap-7 pt-4 border-t border-white/8 mb-5">
                    {project.stats.map((s) => (
                      <div key={s.label}>
                        <p className="text-[#E1E0CC] text-2xl font-medium leading-none tracking-tight">{s.value}</p>
                        <p className="text-[9px] text-gray-400 uppercase tracking-wider font-mono mt-1.5">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-gray-400 text-xs font-mono">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
