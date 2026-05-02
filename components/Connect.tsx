const links = [
  {
    label: "Email",
    href: "mailto:mcisneros0805@gmail.com",
    icon: "@",
    desc: "mcisneros0805@gmail.com",
  },
  {
    label: "Phone",
    href: "tel:+14793187455",
    icon: "📞",
    desc: "479-318-7455",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marcos-cisneros-33b836257/",
    icon: "in",
    desc: "Connect on LinkedIn",
  },
  {
    label: "GitHub",
    href: "https://github.com/mcisnerosy",
    icon: "gh",
    desc: "mcisnerosy",
  },
];

export default function Connect() {
  return (
    <section
      id="connect"
      className="py-24"
      style={{ backgroundColor: "var(--navy)" }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="section-label" style={{ color: "var(--gold)" }}>
          Connect
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Let&apos;s Talk
        </h2>
        <p className="text-gray-300 text-lg max-w-lg mx-auto mb-12">
          Always open to conversations about football, analytics, and building
          things.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="connect-card flex flex-col items-center gap-3 p-6 rounded-lg border"
            >
              <span className="connect-icon w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold">
                {l.icon}
              </span>
              <div>
                <p className="font-bold text-white text-sm">{l.label}</p>
                <p className="text-gray-400 text-xs">{l.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
