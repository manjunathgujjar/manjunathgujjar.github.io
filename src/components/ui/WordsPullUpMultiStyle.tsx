import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface TextSegment {
  text: string;
  className: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
}

export function WordsPullUpMultiStyle({ segments, className = "" }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  let wordIndex = 0;

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {segments.map((segment, segIdx) => {
        const words = segment.text.split(" ");
        return (
          <span key={segIdx} className={segment.className}>
            {words.map((word, wIdx) => {
              const currentDelay = wordIndex * 0.08;
              wordIndex++;
              return (
                <span key={wIdx} className="inline-block overflow-hidden relative mx-[0.15em] my-[0.1em] pb-[0.18em]">
                  <motion.span
                    initial={{ y: "150%" }}
                    animate={isInView ? { y: 0 } : { y: "150%" }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: currentDelay,
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
}
