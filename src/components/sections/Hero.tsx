import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WordsPullUp } from "../ui/WordsPullUp";

export function Hero() {
  return (
    <section className="h-screen w-full relative p-4 md:p-6 bg-black">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#0a0a0a]">
        
        {/* Background Video - loaded lazily to avoid blocking */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />
        
        {/* Noise Overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none z-10" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-8 px-4 sm:px-8 md:pb-12 md:px-12 w-full">
          <div className="grid grid-cols-12 gap-4 items-end">
            
            {/* Left 8 columns: Heading */}
            <div className="col-span-12 md:col-span-8 relative">
              <WordsPullUp 
                text="Mohan Gujjar" 
                showAsterisk={true}
                className="text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[11vw] 2xl:text-[11vw] font-medium leading-[0.85] tracking-[-0.05em]"
                style={{ color: "#E1E0CC" }}
              />
            </div>

            {/* Right 4 columns: Text + Button */}
            <div className="col-span-12 md:col-span-4 flex flex-col items-start md:items-end justify-end mb-[2vw]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-white font-medium text-xs sm:text-sm md:text-base leading-[1.2] max-w-sm text-left md:text-right mb-6"
              >
                AI Engineer with 5 years of engineering experience and 2+ years in production agentic systems: multi-agent orchestration, RAG pipelines, and LLM evaluation at enterprise scale.
              </motion.p>
              
              <motion.a
                href="https://drive.google.com/file/d/1_VLW03XlzL7VpTPINhiko9yAHYRtd2Tp/view"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center bg-primary rounded-full pl-6 pr-2 py-2 gap-4 hover:gap-3 transition-all duration-300"
              >
                <span className="text-black font-medium text-sm sm:text-base">Download Resume</span>
                <div className="flex items-center justify-center bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="text-[#E1E0CC] w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </motion.a>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
