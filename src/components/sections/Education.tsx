import { motion } from "framer-motion";

const education = [
  {
    type: "Master's Degree",
    school: "University of Maryland",
    degree: "MS in Computer Science (STEM)",
    desc: "Data Structures & Algorithms, Machine Learning, Cybersecurity, Active Cyber Defense.",
  },
  {
    type: "Bachelor's Degree",
    school: "Jawaharlal Nehru Technological University",
    degree: "BS in Computer Science",
    desc: "Core fundamentals of operating systems, databases, algorithms, and software engineering.",
  },
];

const certifications = [
  { name: "Microsoft Azure AI Engineer", issuer: "Microsoft" },
  { name: "Microsoft Azure Fundamentals", issuer: "Microsoft" },
  { name: "AWS Solutions Architect", issuer: "Amazon Web Services" },
  { name: "Infosys Certified Software Programmer", issuer: "Infosys" },
  { name: "Agentforce Trailblazer", issuer: "Salesforce" },
  { name: "Claude Code in Action", issuer: "Anthropic" },
];

const achievements = [
  { title: "Smart India Hackathon", detail: "7th place out of 500+ teams — alumni tracking platform." },
  { title: "CTF at UMBC", detail: "Ranked Top 10 in university-wide Capture the Flag competition." },
  { title: "Cognizant Coding Contest", detail: "Ranked 1,432 out of 200,000+ participants." },
];

export function Education() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 rounded-t-[3rem]">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h2 className="text-[#E1E0CC] text-3xl sm:text-5xl font-medium mb-16 tracking-tight">
          Education &<br />Credentials
        </h2>

        {/* Top grid: degrees + certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

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
                <h3 className="text-[#E1E0CC] text-xl font-medium mb-1">
                  {edu.school}
                </h3>
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
                    <p className="text-[#E1E0CC] text-sm font-medium">{cert.name}</p>
                    <p className="text-primary/45 text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#151515] p-8 rounded-2xl border border-white/5"
        >
          <h4 className="text-[#E1E0CC] font-medium mb-6 text-lg">Achievements</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {achievements.map((ach, idx) => (
              <div key={idx}>
                <p className="text-[#E1E0CC] text-sm font-medium mb-1">{ach.title}</p>
                <p className="text-primary/55 text-sm leading-relaxed">{ach.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
