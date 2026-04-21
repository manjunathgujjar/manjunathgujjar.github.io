import { useScroll } from "framer-motion";
import { useRef } from "react";
import { WordsPullUpMultiStyle } from "../ui/WordsPullUpMultiStyle";
import { AnimatedLetter } from "../ui/AnimatedLetter";

export function About() {
  const containerRef = useRef(null);
  
  // Track scroll on the paragraph container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'end 0.4']
  });

  const paragraphText = "I have 4 years of engineering experience, with the last 2 focused entirely on production AI: autonomous cloud-native ITSM agents that cut review time by 70%, hybrid RAG pipelines with sub-10ms cache latency, and LLM evaluation frameworks with CI-gated grounding metrics. I care about the full stack: architecture, evaluation, and the reliability engineering that separates a working demo from a product people depend on.";
  const totalChars = paragraphText.length;

  return (
    <section id="about" className="bg-black py-24 px-4 sm:px-6 flex justify-center items-center">
      <div className="bg-[#101010] p-8 md:p-16 lg:p-24 rounded-3xl text-left max-w-6xl w-full">

        <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-8">
          Agentic AI · Production Systems · LLM Evaluation
        </p>

        <WordsPullUpMultiStyle
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-3xl justify-start leading-snug text-[#E1E0CC] mb-12"
          segments={[
            { text: "I build AI systems that work in production. ", className: "font-normal" },
            { text: "multi-agent platforms, RAG pipelines, ", className: "font-normal" },
            { text: "and the evaluation layer that keeps LLMs reliable at scale.", className: "font-normal" }
          ]}
        />

        <div ref={containerRef} className="max-w-2xl">
          <p className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed text-balance">
            {paragraphText.split("").map((char, index) => {
              const charProgress = index / totalChars;
              const range: [number, number] = [charProgress * 0.45, charProgress * 0.45 + 0.08];
              return (
                <AnimatedLetter 
                  key={index} 
                  progress={scrollYProgress} 
                  range={range}
                >
                  {char}
                </AnimatedLetter>
              );
            })}
          </p>
        </div>

      </div>
    </section>
  );
}
