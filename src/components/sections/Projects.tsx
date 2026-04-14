import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "../ui/WordsPullUpMultiStyle";

const projects = [
  {
    index: "01",
    title: "AI-Driven Knowledge Graph & RAG Platform",
    type: "Full-Stack Application",
    tags: ["Neo4j", "RAG", "GraphRAG", "Ollama", "DeepSeek", "Multimodal Embeddings", "Hybrid Retrieval"],
    bullets: [
      "Built an AI-powered platform that ingests documents, images, and recursive links (depth-5), extracting concepts and relationships into a Neo4j knowledge graph for semantic retrieval.",
      "Implemented RAG with multimodal embeddings and hybrid retrieval (graph + vector search), enabling data flow tracing using LLM backends (Ollama, DeepSeek) to deliver accurate, context-rich Q&A with citations.",
    ],
    highlight: "Graph + Vector hybrid retrieval with citation tracing.",
  },
  {
    index: "02",
    title: "Explainable AI Platform",
    type: "Research Project",
    tags: ["LIME", "TensorFlow", "PyTorch", "Keras", "Spark ML", "Anomaly Detection", "Healthcare AI"],
    bullets: [
      "Implemented Spark ML explainability techniques using LIME for predictive model interpretation in healthcare applications, achieving 92% accuracy in diagnostic predictions.",
      "Leveraged TensorFlow, PyTorch, and Keras with anomaly detection techniques to support statistical analysis and model evaluation ensuring reliable classification for clinical insights.",
    ],
    highlight: "92% diagnostic accuracy with LIME-based model explainability.",
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
              className="group bg-[#0f0f0f] hover:bg-[#141414] border border-white/5 hover:border-white/10 rounded-2xl p-8 transition-colors duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary/40 text-xs tracking-widest uppercase font-medium">
                      {project.type}
                    </span>
                    <span className="text-gray-600 text-xs">({project.index})</span>
                  </div>
                  <h3 className="text-[#E1E0CC] text-xl md:text-2xl font-medium leading-snug">
                    {project.title}
                  </h3>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300">
                  <ArrowUpRight className="text-primary/40 group-hover:text-primary w-4 h-4 transition-colors duration-300" />
                </div>
              </div>

              {/* Highlight callout */}
              <div className="bg-white/3 border border-white/6 rounded-xl px-4 py-3 mb-5">
                <p className="text-primary/70 text-sm font-serif italic">{project.highlight}</p>
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
