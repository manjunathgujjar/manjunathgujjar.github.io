import { WordsPullUp } from "../ui/WordsPullUp";

export function Contact() {
  return (
    <footer id="contact" className="bg-black py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="noise-overlay absolute inset-0 opacity-[0.2] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DEDBC8]/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        <WordsPullUp 
          text="Let's Talk" 
          showAsterisk={true}
          className="text-6xl sm:text-8xl md:text-9xl font-medium tracking-tight text-[#E1E0CC] mb-12"
        />
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="mailto:manjunathgujjar.147@gmail.com" className="bg-[#E1E0CC] text-black px-8 py-3 rounded-full font-medium hover:bg-white transition-colors">
            Email Me
          </a>
          <a href="https://github.com/manjunathgujjar" target="_blank" className="border border-white/20 text-[#E1E0CC] px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/manjunathgujjar/" target="_blank" className="border border-white/20 text-[#E1E0CC] px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-colors">
            LinkedIn
          </a>
          <a href="https://drive.google.com/file/d/1_VLW03XlzL7VpTPINhiko9yAHYRtd2Tp/view" target="_blank" className="border border-white/20 text-[#E1E0CC] px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-colors">
            Resume PDF
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
