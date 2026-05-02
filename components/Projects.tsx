import projects from "@/data/projects.json";

export default function Projects() {
  return (
    <section id="projects" style={{ backgroundColor: "#f8f9fb" }} className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">Projects</p>
        <h2 className="section-title">What I&apos;ve Built</h2>
        <p className="text-gray-500 mb-10 max-w-xl">
          Independent work at the intersection of football and data. More coming
          as case studies are written up.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const isInternal = project.link?.startsWith("/");
            return (
              <div key={project.id} className="card flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <h3
                      className="font-bold text-lg leading-snug"
                      style={{ color: "var(--navy)" }}
                    >
                      {project.title}
                    </h3>
                    {project.caseStudy && (
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0"
                        style={{
                          backgroundColor: "rgba(174,145,66,0.12)",
                          color: "var(--gold)",
                          border: "1px solid var(--gold)",
                        }}
                      >
                        Case Study
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      {...(!isInternal && { target: "_blank", rel: "noopener noreferrer" })}
                      className="text-sm font-semibold"
                      style={{ color: "var(--gold)" }}
                    >
                      {project.caseStudy ? "Read Case Study →" : "View Project →"}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-400">
                      {project.status ?? "Link coming soon"}
                    </span>
                  )}
                  {"demo" in project && project.demo && (
                    <a
                      href={project.demo as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {"github" in project && project.github && (
                    <a
                      href={project.github as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
