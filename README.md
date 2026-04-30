# Naughyfication Landing Page

Premium developer-first landing page for **Naughyfication**: notification infrastructure for teams that care about retries, tracking, DLQs, webhooks, metrics, and reliability.

## Tech Stack

- Next.js 15 App Router
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide Icons
- shadcn-style reusable UI primitives

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run type-check
npm run lint
npm run build
```

## Deploy

### Vercel

Import the repository into Vercel and deploy with the default Next.js settings.

### Netlify

Use the Next.js runtime on Netlify. Build command:

```bash
npm run build
```

Publish directory:

```bash
.next
```

## Project Structure

```txt
app/          App Router pages, metadata, sitemap, robots
components/   Reusable landing page sections and UI primitives
lib/          Shared utilities
public/       Favicon and OpenGraph assets
styles/       Global Tailwind styles
```

## Brand Direction

Dark premium SaaS aesthetic with black surfaces, neon pink gradients, soft glassmorphism, subtle motion, developer-oriented code visuals, and a responsive layout inspired by modern products like Linear, Resend, and Astroverse.
