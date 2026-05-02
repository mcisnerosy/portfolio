# Marcos Cisneros — Portfolio

Personal portfolio site for Marcos Cisneros, junior Computer Engineering student at Notre Dame (Class of 2027), data scientist, and Notre Dame Football Recruiting Intern. Built to showcase projects, experience, and case studies at the intersection of sports analytics and software engineering.

**Live site:** https://portfolio-rosy-seven-71.vercel.app

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Deployed on [Vercel](https://vercel.com)

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Project Structure

```
app/
  page.tsx                          # Home page (all main sections)
  projects/recruiting-model/        # Case study — recruiting model
components/
  Nav.tsx                           # Fixed top nav
  Hero.tsx                          # Landing section
  About.tsx                         # Bio and callouts
  Projects.tsx                      # Project cards grid
  Experience.tsx                    # Work history timeline
  Skills.tsx                        # Skill pills
  Activities.tsx                    # Community involvement
  Connect.tsx                       # Contact links
data/
  projects.json                     # Project card content
  experience.json                   # Work experience entries
public/
  headshot.png                      # Profile photo
  resume.pdf                        # Downloadable resume
  recruiting-model.pdf              # Case study PDF
  recruiting-model-chart.png        # Case study figure
```

## Updating Content

**Add or edit a project** — update `data/projects.json`:
- `link`: internal path (`/projects/...`) or external URL, or `null` for status text
- `github`: GitHub repo URL (shown as a secondary link on the card)
- `demo`: live demo URL (shown alongside the primary link)
- `caseStudy`: `true` to show the "Case Study" badge

**Add or edit experience** — update `data/experience.json`. Entries render top-to-bottom, so keep the most recent first.

**Add a new case study page** — create `app/projects/<slug>/page.tsx`. Follow the recruiting model page as a template.
