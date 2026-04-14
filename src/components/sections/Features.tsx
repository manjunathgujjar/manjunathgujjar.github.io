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
      "Prompt & Context Engineering",
      "Hallucination Mitigation",
    ],
  },
  {
    label: "RAG & Retrieval",
    number: "02",
    items: [
      "Production RAG Pipelines",
      "GraphRAG / Neo4j",
      "Hybrid Retrieval (Vector + Lexical)",
      "Embedding Pipelines",
      "Chroma · Pinecone · Weaviate",
      "FAISS · Qdrant · Redis",
      "Semantic & Dense Retrieval",
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
      "FastAPI / GraphQL / REST",
      "Kafka / Event-Driven",
      "PostgreSQL · Redis · MySQL",
    ],
  },
  {
    label: "Observability & MLOps",
    number: "04",
    items: [
      "Prometheus / Grafana",
      "Structured Logging & Telemetry",
      "Evaluation Frameworks",
      "A/B & SxS Testing",
      "Latency Tracking",
      "Experiment Tracking",
      "CI/CD for ML Systems",
      "OAuth2 · JWT · RBAC",
    ],
  },
];

const impacts = [
  { stat: "70%", label: "Review throughput improvement" },
  { stat: "55%", label: "Reduction in ticket variability" },
  { stat: "40%", label: "System throughput increase" },
  { stat: "4+",  label: "Years in production AI" },
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
              { text: "Technical expertise across the full AI stack. ", className: "text-[#E1E0CC] font-normal block mb-2" },
              { text: "From agentic systems to production infrastructure.", className: "text-gray-500 font-normal block" },
            ]}
          />
        </div>

        {/* Bento grid: 3 cols, 2 rows + full-width footer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
        >
          {/* Impact card — spans 2 rows in col 1 */}
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

          {/* 4 skill cards — fill the 2×2 right side */}
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

          {/* Languages strip — full width */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-3 bg-[#1a1a1a] rounded-2xl px-6 py-5 flex flex-wrap gap-2 items-center"
          >
            <span className="text-gray-500 text-[10px] tracking-widest uppercase mr-3 shrink-0">
              Languages &amp; Frameworks
            </span>
            {[
              "Python", "TypeScript", "JavaScript", "Java", "React",
              "FastAPI", "Node.js", "SQL", "PyTorch", "TensorFlow",
              "Scikit-learn", "Kafka", "Docker", "Kubernetes",
            ].map((lang) => (
              <span
                key={lang}
                className="bg-white/5 border border-white/8 text-[#E1E0CC] text-xs px-3 py-1.5 rounded-full"
              >
                {lang}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
