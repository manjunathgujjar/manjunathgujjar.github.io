import { motion } from "framer-motion";
import type { Easing } from "framer-motion";

const easeCustom: Easing = [0.22, 1, 0.36, 1] as Easing;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: easeCustom } },
};

const skillGroups = [
  {
    label: "Agentic & LLM Systems",
    number: "01",
    items: [
      "Multi-Agent Orchestration",
      "Azure AI Foundry",
      "LangChain / LangGraph",
      "LlamaIndex / Ollama",
      "MCP Tool Integration",
      "Human-in-the-Loop",
      "LoRA / QLoRA Fine-tuning",
      "Responsible AI & Guardrails",
    ],
  },
  {
    label: "RAG & Retrieval",
    number: "02",
    items: [
      "Production RAG Pipelines",
      "GraphRAG / Neo4j",
      "Hybrid Retrieval (Vector + Lexical)",
      "Cross-Encoder Reranking",
      "Qdrant · FAISS · Pinecone",
      "Redis Semantic Cache",
      "Embedding Pipelines",
      "Query Understanding",
    ],
  },
  {
    label: "Cloud & Infrastructure",
    number: "03",
    items: [
      "AWS (EC2, S3, EKS, Lambda)",
      "Microsoft Azure",
      "Docker / Kubernetes",
      "Terraform / IaC",
      "GitHub Actions / CI/CD",
      "FastAPI / REST / GraphQL",
      "Kafka / Event-Driven",
      "PostgreSQL · Redis · MySQL",
    ],
  },
  {
    label: "Observability & Evals",
    number: "04",
    items: [
      "Langfuse (per-agent tracing)",
      "Prometheus / Grafana",
      "Ragas CI Evaluation Gate",
      "SxS & A/B Testing",
      "Grounding Metrics",
      "Drift Detection",
      "Redis HITL State",
      "OAuth2 · JWT · RBAC",
    ],
  },
  {
    label: "Languages & Engineering",
    number: "05",
    items: [
      "Python",
      "TypeScript / JavaScript",
      "Node.js / React",
      "SQL · Bash · Git",
      "REST / GraphQL",
      "FastAPI / Express",
      "Kafka / Event-Driven",
      "Subprocess · CLI tooling",
    ],
  },
  {
    label: "Security & Compliance",
    number: "06",
    items: [
      "OWASP LLM Top 10",
      "Red-team / Blue-team",
      "Prompt Injection Defense",
      "Adversarial Input Testing",
      "Output Guardrails",
      "Audit Trails",
      "Responsible AI",
      "Human-in-the-Loop Gates",
    ],
  },
];

const impacts = [
  { stat: "70%", label: "Review throughput improvement" },
  { stat: "55%", label: "Reduction in ticket variability" },
  { stat: "40%", label: "System throughput increase" },
  { stat: "2+",  label: "Years in production agentic AI" },
];

export function Features() {
  return (
    <section id="skills" className="bg-black relative py-20 px-4 sm:px-10 md:px-14">
      <div className="bg-noise absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">

          {/* Heading col */}
          <div className="md:col-span-1 pt-2">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#8a8477] mb-5">
              § 03 <span className="text-amber-500 mx-1.5">·</span> Stack
            </p>
            <h2 className="font-fraunces font-light text-[#ede6d3] leading-[1.1] tracking-tight" style={{ fontSize: "clamp(28px,2.8vw,48px)" }}>
              The full AI engineering <em className="italic text-amber-500">stack</em>.
            </h2>
          </div>

          {/* Skills grid col */}
          <div className="md:col-span-3">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-3"
            >
              {/* Impact card — tall left column */}
              <motion.div
                variants={cardVariants}
                className="md:row-span-3 bg-[#0f0f0f] border border-white/5 rounded-2xl p-7 flex flex-col"
              >
                <p className="text-primary/50 text-[10px] tracking-widest uppercase mb-6">
                  Impact at a glance
                </p>
                <div className="flex flex-col gap-0 flex-1 justify-around">
                  {impacts.map(({ stat, label }) => (
                    <div key={stat} className="border-b border-white/5 py-5 first:pt-0 last:border-none last:pb-0">
                      <p className="text-amber-500 text-5xl font-medium tracking-tight leading-none mb-1">
                        {stat}
                      </p>
                      <p className="text-primary/45 text-xs leading-snug">{label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 6 skill cards */}
              {skillGroups.map((group) => (
                <motion.div
                  key={group.label}
                  variants={cardVariants}
                  className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-[#E1E0CC] font-medium text-sm">{group.label}</h3>
                    <span className="text-gray-600 text-xs shrink-0 ml-2">({group.number})</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white/5 border border-white/8 text-gray-300 text-xs px-3 py-1.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
