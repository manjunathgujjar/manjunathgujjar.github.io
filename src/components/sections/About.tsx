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

  const paragraphText = "Over the last 4 years, I have architected cognitive automation platforms at Kochasoft Inc and Protechs Global that drastically improved efficiency. My work spans from autonomous ITSM workflows utilizing Azure AI Foundry to sophisticated enterprise RAG-based systems.";
  const totalChars = paragraphText.length;

  return (
    <section id="about" className="bg-black py-24 px-4 sm:px-6 flex justify-center items-center">
      <div className="bg-[#101010] p-8 md:p-16 lg:p-24 rounded-3xl text-center max-w-6xl w-full">
        
        <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-8">
          AI Architecture & Agentic Systems
        </p>

        <WordsPullUpMultiStyle 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] text-[#E1E0CC] mb-16"
          segments={[
            { text: "I am Mohan Gujjar, ", className: "font-normal" },
            { text: "an AI Engineer. ", className: "font-normal" },
            { text: "I specialize in multi-agent orchestration, GraphRAG, and scaleable intelligence.", className: "font-normal" }
          ]}
        />

        <div ref={containerRef} className="max-w-2xl mx-auto">
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
