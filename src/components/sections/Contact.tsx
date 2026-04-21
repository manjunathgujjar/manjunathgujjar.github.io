import { WordsPullUp } from "../ui/WordsPullUp";

export function Contact() {
  return (
    <footer id="contact" className="bg-black py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="noise-overlay absolute inset-0 opacity-[0.2] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DEDBC8]/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        <WordsPullUp
          text="Open to AI Engineering Roles."
          showAsterisk={false}
          className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#E1E0CC] mb-4"
        />

        <p className="text-primary/45 text-sm mb-12 max-w-sm">
          Staff or senior AI engineer · multi-agent systems · production RAG · LLM evaluation
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:manjunathgujjar.147@gmail.com"
          className="bg-[#E1E0CC] text-black px-10 py-4 rounded-full font-medium text-base hover:bg-white transition-colors mb-6"
        >
          Email Me
        </a>

        {/* Secondary links */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://github.com/manjunathgujjar" target="_blank" className="text-primary/50 text-sm hover:text-primary/80 transition-colors">
            GitHub ↗
          </a>
          <span className="text-white/10">·</span>
          <a href="https://www.linkedin.com/in/manjunathgujjar/" target="_blank" className="text-primary/50 text-sm hover:text-primary/80 transition-colors">
            LinkedIn ↗
          </a>
          <span className="text-white/10">·</span>
          <a href="https://drive.google.com/file/d/1_VLW03XlzL7VpTPINhiko9yAHYRtd2Tp/view" target="_blank" className="text-primary/50 text-sm hover:text-primary/80 transition-colors">
            Resume PDF ↗
          </a>
        </div>

        <div className="mt-32 w-full flex justify-between items-end border-t border-white/10 pt-8 text-primary/40 text-xs sm:text-sm">
          <p>© 2026 Mohan Gujjar. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="font-serif italic text-primary/60">Built for pure scale.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
