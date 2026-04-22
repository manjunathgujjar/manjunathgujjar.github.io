import { motion } from "framer-motion";

const experiences = [
  {
    dates: "Jul 2025 – Present",
    company: "Kochasoft Inc",
    role: "AI Engineer",
    bullets: [
      "Architected a cloud-native multi-agent orchestration platform on Azure AI Foundry, deployed on-premises, using a hierarchical supervisor architecture with MCP-governed tool calls into enterprise systems (CMDB, ticketing, monitoring) enforcing OAuth2, RBAC, and full audit trails.",
      "Designed human-in-the-loop workflows with confidence-based routing and tiered approval gates; built RAG-grounded decision pipelines with Redis semantic caching to improve accuracy and reduce latency across production agent workflows.",
      "Owned the full observability stack: Langfuse per-agent traces, Prometheus/Grafana metrics, Ragas CI evaluation gate, Redis HITL state, Qdrant Cloud vectors, and PostgreSQL eval history — with SxS testing and drift detection across all agents.",
      "Applied responsible AI throughout: red-team coverage for adversarial inputs, output guardrails at the agent boundary, and operator override controls on every automated decision.",
    ],
  },
  {
    dates: "Jul 2024 – Mar 2025",
    company: "Protechs Global",
    role: "AI Engineer",
    bullets: [
      "Designed and productionized an LLM-powered ITSM ticket quality evaluator, ingesting Jira/ServiceNow issues and scoring completeness, accuracy, and actionability with hierarchical scoring logic and explainable verdicts.",
      "Fine-tuned a Llama 3 model via Ollama using LoRA on domain-specific ITSM ticket data to improve classification accuracy for the scoring pipeline, reducing dependency on general-purpose LLM calls and lowering per-request inference cost.",
      "Built a multi-tenant FastAPI backend with PostgreSQL, Redis vector search, and Docker/Kubernetes deployments; scoring criteria co-designed with PM, SRE, and Customer Success through structured workshops.",
      "Improved ticket review throughput by 70% and reduced assessment variability by 55% across enterprise support workflows.",
    ],
  },
  {
    dates: "Aug 2023 – May 2024",
    company: "UMBC",
    role: "Graduate Teaching Assistant, Data Science",
    bullets: [
      "Mentored 100+ graduate students in Python, data wrangling, and RAG pipelines including OpenAI API integration.",
      "Led workshops on analytics, forecasting, and prototyping with Python, SQL, Power BI, and Excel for 300+ students across two semesters.",
      "Automated ETL workflows and feature engineering pipelines, improving data processing efficiency by 20% on multi-TB datasets.",
    ],
  },
  {
    dates: "Jan 2022 – Jul 2022",
    company: "State Street Corporation",
    role: "Software Engineer",
    bullets: [
      "Optimized SQL query performance for high-volume financial data retrieval and enforced access controls with query sanitization across reporting pipelines.",
      "Automated data processing workflows with Python scripts, reducing manual intervention by 20%.",
      "Built Tableau dashboards for financial analysts, improving data accessibility by 30%.",
    ],
  },
  {
    dates: "Jan 2021 – Dec 2021",
    company: "Ezerka Technology Solutions",
    role: "Software Engineer",
    bullets: [
      "Engineered a full ERP platform with Node.js, Kafka, and MongoDB, covering process automation, configuration management, and support for 1,000+ concurrent users.",
      "Implemented event-driven data synchronization across ERP modules using Apache Kafka, increasing throughput by 40% and eliminating cross-module inconsistencies.",
      "Delivered frontend interfaces and real-time Power BI dashboards with PII masking and data protection controls.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-black py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#E1E0CC] text-3xl sm:text-5xl font-medium mb-16 tracking-tight">
          Professional Timeline
        </h2>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="flex flex-col md:flex-row gap-4 md:gap-12 group"
            >
              <div className="md:w-1/4 shrink-0 pt-1">
                <span className="text-primary/60 text-sm font-medium tracking-wide">
                  {exp.dates}
                </span>
              </div>
              <div className="md:w-3/4 flex flex-col gap-3 pb-10 border-b border-white/5 group-last:border-none">
                <h3 className="text-[#E1E0CC] text-xl md:text-2xl font-medium">
                  {exp.company}
                </h3>
                <span className="text-primary/80 font-serif italic text-lg">
                  {exp.role}
                </span>
                <ul className="mt-1 space-y-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-3 text-primary/60 text-sm md:text-base leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
