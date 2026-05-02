export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center"
      style={{ backgroundColor: "var(--navy)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Headshot placeholder */}
          <div className="flex-shrink-0">
            <img
              src="/headshot.png"
              alt="Marcos Cisneros"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 object-cover"
              style={{ borderColor: "var(--gold)" }}
            />
          </div>

          {/* Copy */}
          <div>
            <p className="section-label mb-2" style={{ color: "var(--gold)" }}>
              Notre Dame Computer Engineering · Class of 2027
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Marcos Cisneros
            </h1>
            <p
              className="text-xl md:text-2xl font-semibold mb-2"
              style={{ color: "var(--gold)" }}
            >
              Computer Scientist, Data Enthusiast
            </p>
            <p className="text-gray-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              I build data pipelines, models, and tools that turn raw information
              into actionable insight. Interested in sports analytics, data science,
              and solving complex problems with clean code.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="https://github.com/mcisnerosy" target="_blank" rel="noopener noreferrer" className="btn-outline">
                GitHub
              </a>
              <a href="/resume.pdf" download className="btn-outline">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
