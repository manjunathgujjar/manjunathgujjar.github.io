export function Contact() {
  return (
    <>
      {/* ── Contact section ── */}
      <section
        id="contact"
        className="relative overflow-hidden py-36 px-4 sm:px-10 md:px-14"
        style={{ background: "linear-gradient(180deg, #0a0a08 0%, #060604 100%)" }}
      >
        {/* Amber radial glow — matches reference ::before */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse at 50% 80%, rgba(217,119,6,0.12) 0%, transparent 60%)" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className="grid items-end"
            style={{ gridTemplateColumns: "1.4fr 1fr", gap: "80px" }}
          >
            {/* Left — big heading */}
            <h2
              className="font-fraunces font-light text-[#ede6d3] tracking-[-0.03em]"
              style={{ fontSize: "clamp(54px, 7vw, 108px)", lineHeight: 0.95, maxWidth: "14ch" }}
            >
              Open to AI<br />
              <em className="italic text-amber-500">Engineering Roles.</em>
            </h2>

            {/* Right — status + email + links */}
            <div className="flex flex-col gap-8 pb-3">

              {/* Pulse status */}
              <div className="flex items-center gap-2.5 font-mono text-xs text-[#c7c0ae]">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                open to AI Engineering roles · multi-agent systems · production RAG · LLM evaluation
              </div>

              {/* Email link */}
              <a
                href="mailto:manjunathgujjar.147@gmail.com"
                className="font-fraunces border-b border-[#2a2822] pb-[18px] flex items-center justify-between hover:text-amber-500 hover:border-amber-600 transition-colors duration-200 group"
                style={{ fontSize: "clamp(16px, 2vw, 34px)", color: "#ede6d3" }}
              >
                <span>manjunathgujjar.147@gmail.com</span>
                <span className="font-mono text-sm text-amber-500 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>

              {/* Secondary links */}
              <div className="flex gap-6 font-mono text-sm tracking-[0.06em] text-[#c7c0ae]">
                <a href="https://github.com/manjunathgujjar" target="_blank" rel="noopener noreferrer" className="hover:text-[#ede6d3] transition-colors">
                  github
                </a>
                <a href="https://www.linkedin.com/in/manjunathgujjar/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ede6d3] transition-colors">
                  linkedin
                </a>
                <a href="https://drive.google.com/file/d/1_VLW03XlzL7VpTPINhiko9yAHYRtd2Tp/view" target="_blank" rel="noopener noreferrer" className="hover:text-[#ede6d3] transition-colors">
                  résumé.pdf
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <footer
        className="border-t border-[#2a2822] px-4 sm:px-10 md:px-14 py-8"
        style={{ background: "#060604" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-mono text-[11px] text-[#8a8477] tracking-[0.06em]">
            © 2026 Mohan Gujjar · Baltimore, MD
          </span>
          <span className="font-fraunces italic text-sm text-[#c7c0ae]">
            built for pure scale.
          </span>
        </div>
      </footer>
    </>
  );
}
