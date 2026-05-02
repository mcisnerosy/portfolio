# Marcos Cisneros — Portfolio

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Updating Content (no component code needed)

### Add a project
Edit `data/projects.json` — copy an existing entry and fill in the fields:
- `link`: set to a URL string when ready, or `null` to show status text
- `status`: shown when `link` is null
- `caseStudy`: set to `true` to show the "In Progress" badge

### Add an experience entry
Edit `data/experience.json` — add a new object to the array. Entries render top-to-bottom, so put most recent first.

## Add Your Headshot
Replace the `MC` initials placeholder in `components/Hero.tsx`:
```tsx
// Replace the <div> placeholder with:
<Image src="/headshot.jpg" alt="Marcos Cisneros" width={192} height={192} className="rounded-full border-4" style={{ borderColor: "var(--gold)" }} />
```
Then drop `headshot.jpg` into the `public/` folder.

## Deploy to Vercel
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → import the repo
3. Vercel auto-detects Next.js — just hit Deploy

That's it. No env vars needed.
