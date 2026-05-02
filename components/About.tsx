export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <p className="section-label">About</p>
            <h2 className="section-title">Who I Am</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                I&apos;m a junior Computer Engineering student at the University
                of Notre Dame (Class of 2027) and a{" "}
                <span className="font-semibold text-gray-800">
                  Questbridge Scholar
                </span>
                . I grew up in Springdale, AR and took my passion to South Bend.
              </p>
              <p>
                I&apos;m a computer engineer focused on data. My work spans data pipelines,
                statistical modeling, and building tools that surface insight from
                complex datasets. I&apos;m particularly drawn to sports analytics as a domain
                where domain expertise and technical rigor compound each other.
              </p>
              <p>
                As a{" "}
                <span className="font-semibold text-gray-800">
                  Recruiting Intern with Notre Dame Football
                </span>
                , I manage databases, coordinate operations, and evaluate film.
                But my broader focus is data science: building systems and analyses
                that help people make better decisions.
              </p>
              <p>
                Whether it&apos;s predictive models, data engineering, or analytics
                infrastructure, I care about technical depth. Not just applying tools,
                but understanding why they work.
              </p>
            </div>
          </div>

          {/* Stats / callouts */}
          <div className="space-y-6">
            {[
              {
                label: "Institution",
                value: "University of Notre Dame",
                sub: "B.S. Computer Engineering · Class of 2027",
              },
              {
                label: "Scholarships & Awards",
                value: "Questbridge Scholar, LULAC Scholar",
                sub: "Springdale High School Valedictorian",
              },
              {
                label: "Current Role",
                value: "Notre Dame Football Recruiting Intern",
                sub: "Film Evaluation and Recruiting Operations, Fall 2023–Present",
              },
              {
                label: "From",
                value: "Springdale, AR",
                sub: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border-l-4 pl-4"
                style={{ borderColor: "var(--gold)" }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                  {item.label}
                </p>
                <p
                  className="font-bold text-base"
                  style={{ color: "var(--navy)" }}
                >
                  {item.value}
                </p>
                {item.sub && (
                  <p className="text-sm text-gray-500">{item.sub}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
