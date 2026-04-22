import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import { AnimatedLetter } from "../ui/AnimatedLetter";

export function About() {
  const headRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(headRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'end 0.4'],
  });

  const paragraphText = "4 years of engineering experience, with the last 2 focused entirely on production AI: autonomous cloud-native ITSM agents that cut review time by 70%, hybrid RAG pipelines with sub-10ms cache latency, and LLM evaluation frameworks with CI-gated grounding metrics. I care about architecture, evaluation, and the reliability engineering that separates a working demo from a product people depend on.";
  const totalChars = paragraphText.length;

  return (
    <section id="about" className="bg-black border-t border-white/[0.06] py-28 md:py-36 px-4 sm:px-10 md:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">

          {/* Eyebrow */}
          <div className="md:col-span-1 pt-2">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#8a8477]">
              § 01 <span className="text-amber-500 mx-1.5">·</span> What I Do
            </p>
          </div>

          {/* Content */}
          <div className="md:col-span-3" ref={headRef}>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-fraunces font-light leading-[1.08] tracking-[-0.02em] text-[#ede6d3] mb-14 max-w-[22ch]"
              style={{ fontSize: "clamp(36px, 4.2vw, 64px)" }}
            >
              I build AI systems that work in production.{" "}
              <em className="italic text-amber-500/90" style={{ fontWeight: 300 }}>
                multi-agent platforms, RAG pipelines,
              </em>
              {" "}and the evaluation layer that keeps LLMs reliable at scale.
            </motion.h2>

            <div ref={containerRef} className="max-w-2xl">
              <p className="text-[#c7c0ae] text-sm md:text-base leading-relaxed">
                {paragraphText.split("").map((char, index) => {
                  const charProgress = index / totalChars;
                  const range: [number, number] = [charProgress * 0.45, charProgress * 0.45 + 0.08];
                  return (
                    <AnimatedLetter key={index} progress={scrollYProgress} range={range}>
                      {char}
                    </AnimatedLetter>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
