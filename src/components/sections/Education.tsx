import { motion } from "framer-motion";

const education = [
  {
    type: "Master's Degree",
    school: "University of Maryland",
    degree: "MS in Computer Science (STEM)",
    gpa: "GPA 3.4",
    desc: "Data Structures & Algorithms, Machine Learning, Cybersecurity, Active Cyber Defense.",
  },
  {
    type: "Bachelor's Degree",
    school: "Jawaharlal Nehru Institute of Technology",
    degree: "BS in Computer Science",
    gpa: "GPA 3.7",
    desc: "Core fundamentals of operating systems, databases, algorithms, and software engineering.",
  },
];

const certifications = [
  {
    name: "Microsoft Azure AI Engineer",
    issuer: "Microsoft",
    link: "https://learn.microsoft.com/en-us/users/manjunathgujjar-0821/credentials/7d88aada73be0a00",
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    link: "https://learn.microsoft.com/en-us/users/mohanmanjunathgujjar-5503/credentials/5a07f9ea6966ddfa",
  },
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/bac0704301c24aaea028b61d20eb903c",
  },
  { name: "Infosys Certified Software Programmer", issuer: "Infosys", link: "https://drive.google.com/file/d/1i-yVJNU5zDGl2iXiQcCCo5sit77AZ-2K/view" },
  { name: "Agentforce Innovator", issuer: "Salesforce", link: "https://www.salesforce.com/trailblazer/mgujjar3" },
  { name: "Claude Code in Action", issuer: "Anthropic", link: "https://verify.skilljar.com/c/vbvkfeqdahfg" },
];

export function Education() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-4 sm:px-10 md:px-14 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">

          {/* Heading col */}
          <div className="md:col-span-1 pt-2">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#8a8477] mb-5">
              § 05 <span className="text-amber-500 mx-1.5">·</span> Education
            </p>
            <h2 className="font-fraunces font-light text-[#ede6d3] leading-[1.1] tracking-tight" style={{ fontSize: "clamp(28px,2.8vw,48px)" }}>
              Education &amp; <em className="italic text-amber-500">Credentials</em>.
            </h2>
          </div>

          {/* Content col */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Degrees */}
              <div className="flex flex-col gap-4">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="bg-[#151515] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <span className="text-primary/50 text-xs tracking-widest uppercase mb-2 block">
                      {edu.type}
                    </span>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-[#E1E0CC] text-xl font-medium">
                        {edu.school}
                      </h3>
                      <span className="text-primary/50 text-xs border border-white/10 rounded-full px-2 py-0.5">
                        {edu.gpa}
                      </span>
                    </div>
                    <p className="text-primary/80 font-serif italic text-base mb-3">
                      {edu.degree}
                    </p>
                    <p className="text-primary/45 text-sm leading-relaxed">
                      {edu.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-[#151515] p-8 rounded-2xl border border-white/5"
              >
                <h4 className="text-[#E1E0CC] font-medium mb-6 text-lg">Certifications</h4>
                <div className="flex flex-col gap-4">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-start gap-3 pb-4 border-b border-white/5 last:border-none last:pb-0">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                      <div>
                        {cert.link ? (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E1E0CC] text-sm font-medium hover:text-primary transition-colors inline-flex items-center gap-1"
                          >
                            {cert.name}
                            <span className="text-primary/40 text-xs">↗</span>
                          </a>
                        ) : (
                          <p className="text-[#E1E0CC] text-sm font-medium">{cert.name}</p>
                        )}
                        <p className="text-primary/45 text-xs mt-0.5">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
