import Nav from "@/components/Nav";

const results = [
  {
    model: "Season Win % — All FBS",
    features: "Recruiting rank + lags",
    metric: "R²",
    score: "0.03",
  },
  {
    model: "Season Win % — Power 4",
    features: "Recruiting rank + lags",
    metric: "R²",
    score: "0.18",
  },
  {
    model: "Game Outcome — Recruiting only",
    features: "4yr avg rank differential",
    metric: "AUC-ROC",
    score: "0.69",
  },
  {
    model: "Game Outcome — Full model",
    features: "Recruiting + returning production",
    metric: "AUC-ROC",
    score: "0.70",
  },
  {
    model: "Vegas Benchmark — Model",
    features: "2021–2023 test set",
    metric: "Accuracy",
    score: "64.1%",
  },
  {
    model: "Vegas Benchmark — Vegas",
    features: "2021–2023 test set",
    metric: "Accuracy",
    score: "71.0%",
  },
  {
    model: "Model on disagreements",
    features: "Games where model ≠ Vegas",
    metric: "Accuracy",
    score: "37.5%",
  },
];

function MilestoneBadge({ label }: { label: string }) {
  return (
    <span
      className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded"
      style={{
        backgroundColor: "rgba(174,145,66,0.12)",
        color: "var(--gold)",
        border: "1px solid var(--gold)",
      }}
    >
      {label}
    </span>
  );
}

function StatCallout({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="border-l-4 pl-4" style={{ borderColor: "var(--gold)" }}>
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
        {label}
      </p>
      <p className="text-2xl font-extrabold" style={{ color: "var(--navy)" }}>
        {value}
      </p>
      <p className="text-sm text-gray-500">{sub}</p>
    </div>
  );
}

export default function RecruitingModelPage() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* Page Header */}
        <section
          style={{ backgroundColor: "var(--navy)" }}
          className="py-16 md:py-24"
        >
          <div className="max-w-5xl mx-auto px-6">
            <a
              href="/#projects"
              className="text-sm font-semibold uppercase tracking-wider transition-colors"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              ← Back to Projects
            </a>
            <p className="section-label mt-6" style={{ color: "var(--gold)" }}>
              Case Study · College Football Analytics
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mt-2 mb-4">
              Can Blue-Chip Talent Carry the Boat?
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              A College Football Recruiting vs. Wins Predictive Modeling Project
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://recruiting-class-analyzer-lkeemy72oemz9iusy36uax.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Live Demo →
              </a>
              <a href="/recruiting-model.pdf" download className="btn-outline">
                Download PDF
              </a>
              <a
                href="https://github.com/mcisnerosy/recruiting-class-analyzer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* Intro sections + Milestones 1–3 */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-3xl space-y-16">

              {/* Background and Motivation */}
              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--navy)" }}
                >
                  Background and Motivation
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    One thing I learned working with Notre Dame&apos;s Football
                    Recruiting Department is how much recruiting contributes to a
                    program. From landing a 5-star athlete in the 2026 class to
                    picking up a breakout transfer from Ohio State, the impact
                    recruiting has on what happens on the field is real and
                    significant.
                  </p>
                  <p>
                    I built this project to answer a baseline question: how much
                    does recruiting actually contribute to on-field success?
                    Coaching, player development, and scheme all matter too, but I
                    wanted to put a number specifically on recruiting. What is it
                    actually worth?
                  </p>
                </div>
              </div>

              {/* The Data */}
              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--navy)" }}
                >
                  The Data
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  I pulled 14 years of recruiting class rankings and win/loss
                  records from the College Football Data API, covering 255 FBS
                  programs from 2010 to 2023. The final merged dataset contained
                  2,765 team-season rows with each program&apos;s national
                  recruiting rank, composite recruiting points, wins, and losses
                  for that year.
                </p>
              </div>

              {/* Milestone 1 */}
              <div>
                <div className="mb-4">
                  <MilestoneBadge label="Milestone 1" />
                </div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--navy)" }}
                >
                  Does Recruiting Predict Wins at the Season Level?
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The first question I wanted to answer was whether a
                    team&apos;s recruiting class rank predicts how many games they
                    win that season. From the results, not really. But I needed to
                    understand from what point of view this was.
                  </p>
                  <p>
                    Within college football there are various conferences with
                    teams assigned to each one, excluding Notre Dame as an
                    independent. Power 4 conferences consist of teams that are
                    well funded, meaning they have the facilities, equipment,
                    staff, nutrition, and talent acquisition to function as a
                    powerhouse program. The problem with how I initially collected
                    my data was that FBS teams were also included. While FBS
                    programs are still considered Division 1 and sometimes compete
                    head to head with Power 4 teams, the funding and playing level
                    they are at differs drastically.
                  </p>
                  <p>
                    Take Arkansas State and the University of Arkansas as an
                    example. Arkansas State is a Sun Belt team competing with other
                    programs that get roughly identical funding and have similar
                    facilities. The University of Arkansas is an SEC program with
                    newly upgraded facilities and a large budget. On top of that,
                    being in the SEC means competing with teams that are either in
                    the same boat or even better. A comparison between the two is
                    not fair or reasonable. The funding is off, the player
                    development differs drastically, and any head to head matchup
                    would be heavily one-sided.
                  </p>
                  <p>
                    The takeaway is that with only a 3% win variance, it makes
                    sense that the relationship between recruiting rank and
                    on-field success is weak across all of FBS. The team
                    comparison between FBS schools and Power 4 teams is not
                    reasonable. Once the dataset was filtered to Power 4 programs
                    only, where the competition levels and resources are more
                    comparable, the win variance jumped to 18%. Recruiting now
                    explains roughly 1 in 5 wins. That is a real and meaningful
                    signal.
                  </p>
                </div>
                <div className="mt-6 flex gap-8">
                  <StatCallout
                    label="All FBS"
                    value="R² = 0.03"
                    sub="3% win variance"
                  />
                  <StatCallout
                    label="Power 4 Only"
                    value="R² = 0.18"
                    sub="18% win variance"
                  />
                </div>
              </div>

              {/* Milestone 2 */}
              <div>
                <div className="mb-4">
                  <MilestoneBadge label="Milestone 2" />
                </div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--navy)" }}
                >
                  A Cleaner Question: Game-Level Head to Head
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Along with filtering out FBS schools, I also had to consider
                    that schedules differ across Power 4 teams, which adds noise
                    to any season-level comparison. So instead I asked a more
                    precise question: which team would have the edge in a specific
                    matchup based on recruiting history?
                  </p>
                  <p>
                    What I did was calculate each team&apos;s 4-year rolling
                    average recruiting rank to approximate current roster talent
                    built from recent classes, then compare that differential head
                    to head to predict a winner. This is a better approach because
                    rather than predicting outcomes across an entire schedule, you
                    are predicting the winner of a specific matchup based on
                    recruiting talent.
                  </p>
                  <p>
                    The recruiting-only model achieved 62.7% accuracy with an
                    AUC-ROC of 0.69. AUC-ROC measures how well a model ranks
                    outcomes. In terms of football matchups, it tells you how
                    often the model correctly assigns a higher probability to the
                    actual winner. A coin flip sits at 0.50. Vegas sportsbooks
                    operate around 0.70 to 0.72. Getting to 0.69 with recruiting
                    rank as the only signal is a significant result.
                  </p>
                </div>
                <div className="mt-6 flex gap-8">
                  <StatCallout
                    label="Accuracy"
                    value="62.7%"
                    sub="Recruiting-only model"
                  />
                  <StatCallout
                    label="AUC-ROC"
                    value="0.69"
                    sub="Vegas sits at 0.70–0.72"
                  />
                </div>
              </div>

              {/* Milestone 3 */}
              <div>
                <div className="mb-4">
                  <MilestoneBadge label="Milestone 3" />
                </div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--navy)" }}
                >
                  Adding Returning Production
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    While recruiting is a good measure of a football
                    program&apos;s potential, one thing I had to keep in mind was
                    how a player develops from their redshirt year to their junior
                    year. That is where returning production comes in.
                  </p>
                  <p>
                    Returning production measures how much of a player&apos;s
                    previous season statistical contribution will be returning for
                    the upcoming season. It captures experience, development, and
                    continuity. The 5-star redshirt who only got 6 in-game reps
                    will probably not have the advantage over a 2-star player
                    entering their third year who started all 12 games the
                    previous season.
                  </p>
                  <p>
                    When returning production was added to the model, it was the
                    clear winner over recruiting rank. The feature coefficient was
                    1.23 compared to nearly zero for recruiting rank, which proves
                    that a developed player will outperform a first-time starter
                    in terms of predictive value. AUC improved to 0.70 with an
                    accuracy of 64.2%, meaning 12 additional games out of 877
                    were correctly identified.
                  </p>
                </div>
                <div className="mt-6 flex gap-8">
                  <StatCallout
                    label="Accuracy"
                    value="64.2%"
                    sub="Full model"
                  />
                  <StatCallout
                    label="AUC-ROC"
                    value="0.70"
                    sub="+12 correct predictions"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Summary of Results Table */}
        <section
          style={{ backgroundColor: "#f8f9fb" }}
          className="py-16 md:py-24"
        >
          <div className="max-w-5xl mx-auto px-6">
            <p className="section-label">Results</p>
            <h2 className="section-title">Summary of Results</h2>

            {/* Chart */}
            <figure className="mb-10">
              <img
                src="/recruiting-model-chart.png"
                alt="ROC Curve comparison between recruiting-only and recruiting + returning production models (left). Home win rate by returning production differential (right)."
                className="w-full rounded-md border border-gray-200"
              />
              <figcaption className="mt-3 text-xs text-center text-gray-400 italic">
                Figure 1: ROC Curve comparison between recruiting-only and recruiting + returning production models (left). Home win rate by returning production differential (right).
              </figcaption>
            </figure>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-md overflow-hidden">
                <thead>
                  <tr style={{ backgroundColor: "var(--navy)" }}>
                    <th className="text-left px-4 py-3 font-bold text-white">
                      Model
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-white">
                      Features
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-white">
                      Metric
                    </th>
                    <th
                      className="text-left px-4 py-3 font-bold"
                      style={{ color: "var(--gold)" }}
                    >
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3 font-medium text-gray-800">
                        {row.model}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {row.features}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{row.metric}</td>
                      <td
                        className="px-4 py-3 font-bold"
                        style={{ color: "var(--navy)" }}
                      >
                        {row.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Milestone 4 + Learnings */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-3xl space-y-16">

              {/* Milestone 4 */}
              <div>
                <div className="mb-4">
                  <MilestoneBadge label="Milestone 4" />
                </div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--navy)" }}
                >
                  The Vegas Benchmark
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The final comparison was against Vegas point spreads. Vegas
                    lines are constructed through a market process where various
                    bettors, analysts, and insiders place money on games, which
                    means that whenever a player is injured the bets move within
                    minutes.
                  </p>
                  <p>
                    Within the 2021-2023 test set, Vegas predicted the winner 71%
                    of the time while the model hit 64%. That gap makes sense
                    because Vegas considers injuries, coaching patterns, past game
                    performances, weather, home field advantage, and years of
                    market refinement. On top of that, there were 243 games where
                    the model and Vegas disagreed, with the model being right on
                    only 37.5% of them.
                  </p>
                  <p>
                    Reflecting on this, recruiting and returning production are
                    not the complete predictors of college football outcomes. Vegas
                    already prices in the smaller factors that contribute to those
                    outcomes. The only way to build a model that approaches Vegas
                    accuracy would be to incorporate efficiency ratings, recent
                    performance trends, injury data, and live updating as new
                    information comes in before kickoff.
                  </p>
                </div>
                <div className="mt-6 flex gap-8">
                  <StatCallout
                    label="Model"
                    value="64.1%"
                    sub="2021–2023 test set"
                  />
                  <StatCallout
                    label="Vegas"
                    value="71.0%"
                    sub="Market benchmark"
                  />
                </div>
              </div>

              {/* What I Learned */}
              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--navy)" }}
                >
                  What I Learned
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The biggest thing I learned was that experience beats
                    potential in the short term. Recruiting rank tells us what a
                    program wants their roster to look like in the next 2 to 3
                    years. Returning production is the construction of the roster
                    the recruiting department envisioned.
                  </p>
                  <p>
                    I also learned a lot about how to filter data properly. The
                    comparison between FBS schools and Power 4 schools shows
                    clearly in the win variance of 0.03: weak and not relevant.
                    The right schools need to be compared to get accurate results.
                    When the comparison is fair, the data tells a much cleaner
                    story.
                  </p>
                </div>
              </div>

              {/* What Comes Next */}
              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--navy)" }}
                >
                  What Comes Next
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  This project opens up a larger question I want to explore: how
                  much do different departments within a college football program
                  contribute to on-field success? Coaching efficiency, strength
                  and conditioning, NIL investment, portal strategy — there are a
                  lot of variables left to evaluate. I am curious to see what
                  other questions come up as I dig deeper into what actually
                  separates good programs from elite ones.
                </p>
              </div>

              {/* Bottom links */}
              <div
                className="flex flex-wrap gap-4 pt-6"
                style={{ borderTop: "1px solid #e5e7eb" }}
              >
                <a
                  href="https://recruiting-class-analyzer-lkeemy72oemz9iusy36uax.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live Demo →
                </a>
                <a
                  href="/recruiting-model.pdf"
                  download
                  className="btn-outline"
                >
                  Download PDF
                </a>
                <a
                  href="https://github.com/mcisnerosy/recruiting-class-analyzer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  GitHub →
                </a>
                <a href="/#projects" className="btn-outline">
                  ← Back to Projects
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer
        className="text-center py-6 text-xs"
        style={{
          backgroundColor: "var(--navy)",
          color: "rgba(255,255,255,0.3)",
        }}
      >
        © {new Date().getFullYear()} Marcos Cisneros · Notre Dame &apos;27
      </footer>
    </>
  );
}
