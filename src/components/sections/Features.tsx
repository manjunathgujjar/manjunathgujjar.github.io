import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import { WordsPullUpMultiStyle } from "../ui/WordsPullUpMultiStyle";

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
];

const impacts = [
  { stat: "70%", label: "Review throughput improvement" },
  { stat: "55%", label: "Reduction in ticket variability" },
  { stat: "40%", label: "System throughput increase" },
  { stat: "2+",  label: "Years in production agentic AI" },
];

export function Features() {
  return (
    <section id="skills" className="bg-black relative py-20 px-4 sm:px-6">
      <div className="bg-noise absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <WordsPullUpMultiStyle
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left justify-start"
            segments={[
              { text: "The full AI engineering stack. ", className: "text-[#E1E0CC] font-normal block mb-2" },
              { text: "From agent design to production reliability.", className: "text-gray-500 font-normal block" },
            ]}
          />
        </div>

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
            className="md:row-span-2 bg-[#0f0f0f] border border-white/5 rounded-2xl p-7 flex flex-col"
          >
            <p className="text-primary/50 text-[10px] tracking-widest uppercase mb-6">
              Impact at a glance
            </p>
            <div className="flex flex-col gap-0 flex-1 justify-around">
              {impacts.map(({ stat, label }) => (
                <div key={stat} className="border-b border-white/5 py-5 first:pt-0 last:border-none last:pb-0">
                  <p className="text-[#E1E0CC] text-5xl font-medium tracking-tight leading-none mb-1">
                    {stat}
                  </p>
                  <p className="text-primary/45 text-xs leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4 skill cards — 2×2 in cols 2–3 */}
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

          {/* Tech stack — full width */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-3 bg-[#1a1a1a] rounded-2xl px-7 py-6 flex flex-col gap-5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-500 text-[10px] tracking-widest uppercase shrink-0 w-24">Languages</span>
              {["Python", "TypeScript", "JavaScript", "Java", "SQL", "PyTorch", "TensorFlow", "Scikit-learn"].map((t) => (
                <span key={t} className="bg-white/5 border border-white/8 text-[#E1E0CC] text-xs px-3 py-1.5 rounded-full">{t}</span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-500 text-[10px] tracking-widest uppercase shrink-0 w-24">Frameworks</span>
              {["FastAPI", "React", "Node.js", "LangGraph", "LangChain", "LlamaIndex", "Docker", "Kubernetes", "Kafka", "Redis", "PostgreSQL", "Neo4j", "Terraform", "GitHub Actions"].map((t) => (
                <span key={t} className="bg-white/5 border border-white/8 text-[#E1E0CC] text-xs px-3 py-1.5 rounded-full">{t}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
