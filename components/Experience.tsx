import experience from "@/data/experience.json";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I&apos;ve Worked</h2>

        <div className="relative pl-6 space-y-10">
          <div className="timeline-line" />

          {experience.map((item) => (
            <div key={item.id} className="relative">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <div>
                    <h3
                      className="font-bold text-lg"
                      style={{ color: "var(--navy)" }}
                    >
                      {item.role}
                    </h3>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--gold)" }}
                    >
                      {item.org}
                    </p>
                  </div>
                  <span className="text-sm text-gray-400 font-medium">
                    {item.period}
                  </span>
                </div>
                <ul className="space-y-1.5 mt-2">
                  {item.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="text-gray-600 text-sm leading-relaxed flex gap-2"
                    >
                      <span style={{ color: "var(--gold)" }} className="mt-1 flex-shrink-0">
                        ›
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
