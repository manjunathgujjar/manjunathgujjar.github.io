import { motion } from "framer-motion";

const experiences = [
  {
    dates: "Jul 2025 – Present",
    company: "Kochasoft Inc",
    role: "Software Engineer",
    bullets: [
      "Architected a production multi-agent orchestration platform on Azure AI Foundry using planner/supervisor patterns with structured tool execution.",
      "Built a secure MCP-based tool integration layer enabling agents to invoke enterprise systems (ticketing, CMDB, monitoring alerts) via governed APIs with OAuth2, RBAC, and audit logging.",
      "Designed human-in-the-loop workflows with confidence-based routing, approval gates, escalation paths, and override mechanisms for compliant AI automation.",
      "Developed RAG-grounded decision pipelines (retrieval, context assembly, caching) using Redis, reducing hallucinations and improving answer accuracy and latency.",
      "Established operational AI reliability practices: agent observability (latency, failure modes, drift), evaluation frameworks (grounding metrics, SxS/A-B testing), and continuous monitoring.",
      "Led cross-functional collaboration with frontend and product teams to define API contracts and ship React/TypeScript agent operations dashboards.",
    ],
  },
  {
    dates: "Jul 2024 – Mar 2025",
    company: "Protechs Global",
    role: "Software Engineer",
    bullets: [
      "Spearheaded design and productionization of an AI-powered ticket-quality evaluation system ingesting Jira/ServiceNow issues and applying LLM analysis to score completeness and accuracy.",
      "Built a modular backend with FastAPI, PostgreSQL, Redis vector search, and containerized deployments (Docker/Kubernetes) enabling scalable multi-tenant use across support teams.",
      "Defined evaluation criteria, hierarchical scoring logic, and explainability requirements by partnering with PM, SRE, and Customer Success through structured workshops.",
      "Improved review throughput by 70% and reduced subjective variability in ticket investigation by 55%.",
    ],
  },
  {
    dates: "Aug 2023 – May 2024",
    company: "University of Maryland",
    role: "Teaching Assistant – Data Science",
    bullets: [
      "Mentored 100+ students in Python, data wrangling, scalable analytics, and RAG pipelines including OpenAI APIs.",
      "Facilitated workshops on data analysis, forecasting, and prototyping with Python, SQL, Power BI, and Excel for 300+ students.",
      "Optimized ETL workflows and automated feature engineering pipelines, improving data processing efficiency by 20% for multi-TB datasets.",
    ],
  },
  {
    dates: "Jan 2022 – Jul 2022",
    company: "State Street Corporation",
    role: "Software Engineer",
    bullets: [
      "Optimized SQL queries for high-volume financial data retrieval and implemented data access controls with query sanitization.",
      "Designed Python automation scripts to streamline data processing workflows, reducing manual intervention by 20%.",
      "Created data-driven Tableau dashboards, increasing data accessibility by 30% for financial analysts.",
    ],
  },
  {
    dates: "Jan 2021 – Dec 2021",
    company: "Ezerka Technology Solutions",
    role: "Software Engineer",
    bullets: [
      "Engineered a comprehensive ERP system with process automation and configuration management using Node.js, Kafka, and MongoDB supporting 1000+ concurrent users.",
      "Implemented Apache Kafka event-driven architecture for seamless data synchronization across ERP modules, improving throughput by 40% and reducing data inconsistencies.",
      "Built responsive frontend interfaces and Power BI analytics dashboards with real-time business insights, including data masking and PII protection.",
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
