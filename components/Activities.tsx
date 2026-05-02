const activities = [
  {
    org: "ColorStack",
    role: "Member",
    period: "2025 – Present",
    description: "Community supporting Black software engineers through scholarships, mentorship, and career development.",
  },
  {
    org: "Society of Hispanic Professional Engineers (SHPE)",
    role: "Member",
    period: "2023 – Present",
    description: "Professional organization advancing Hispanic representation in STEM and engineering fields.",
  },
];

export default function Activities() {
  return (
    <section id="activities" style={{ backgroundColor: "#f8f9fb" }} className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">Involvement</p>
        <h2 className="section-title">Communities</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.org}
              className="p-6 rounded-lg bg-white border"
              style={{ borderColor: "rgba(12,35,64,0.1)" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: "var(--gold)" }}
              >
                {activity.period}
              </p>
              <p
                className="font-bold text-lg mb-1"
                style={{ color: "var(--navy)" }}
              >
                {activity.org}
              </p>
              <p className="text-sm text-gray-500 mb-3">{activity.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
