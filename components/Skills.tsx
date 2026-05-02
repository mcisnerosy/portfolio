const domainSkills = [
  "Statistical Modeling",
  "Data Pipeline Design",
  "Film Evaluation",
  "Sports Analytics",
  "Database Management",
  "Data-Driven Decision Making",
];

const technicalSkills = [
  "Python",
  "C",
  "React / Next.js",
  "SQL",
  "FastAPI",
  "Supabase",
  "scikit-learn",
  "Claude API",
  "GitHub Copilot",
  "Git",
  "Linux",
];

function SkillPill({ label }: { label: string }) {
  return (
    <span
      className="inline-block text-sm font-medium px-3 py-1.5 rounded"
      style={{
        backgroundColor: "rgba(12,35,64,0.06)",
        color: "var(--navy)",
        border: "1px solid rgba(12,35,64,0.15)",
      }}
    >
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: "#f8f9fb" }} className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">Skills</p>
        <h2 className="section-title">What I Bring</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Data & Analytics */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span
                className="w-1 h-6 rounded-full"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <h3
                className="font-bold text-base uppercase tracking-wider"
                style={{ color: "var(--navy)" }}
              >
                Data & Analytics
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {domainSkills.map((s) => (
                <SkillPill key={s} label={s} />
              ))}
            </div>
          </div>

          {/* Technical */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span
                className="w-1 h-6 rounded-full"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <h3
                className="font-bold text-base uppercase tracking-wider"
                style={{ color: "var(--navy)" }}
              >
                Technical
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((s) => (
                <SkillPill key={s} label={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
