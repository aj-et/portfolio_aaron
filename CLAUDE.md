# Aaron's Portfolio — Claude Context

## Stack

- **Framework:** Next.js 16 (App Router, `'use client'` where needed)
- **Language:** TypeScript 6 (strict)
- **Styling:** Tailwind CSS 4 + inline styles (see conventions below)
- **Database:** Neon (serverless Postgres) via Drizzle ORM 0.45
- **Email:** EmailJS (`@emailjs/browser`)
- **Carousel:** Embla Carousel (tech stack auto-scroll in Techs section)
- **Timeline:** `react-vertical-timeline-component` (Experience section)
- **Animations:** GSAP, CSS keyframes
- **Deployment:** Vercel

## Commands

```bash
npm run dev       # start dev server
npm run build     # production build
npm run lint      # ESLint
npm run generate  # generate Drizzle migration from schema changes
npm run migrate   # apply migrations to the database
npm run studio    # open Drizzle Studio (DB browser)
```

## Environment Variables

```
POSTGRES_URL_NON_POOLING=   # Neon non-pooling string — server-only, used by API routes
POSTGRES_URL=               # Pooled connection string — used by drizzle-kit CLI
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
```

Local dev uses `.env.development.local`. Do NOT prefix the DB connection string with `NEXT_PUBLIC_` — it must stay server-only.

## Project Structure

```
app/
  page.tsx              # Root page — composes all sections
  layout.tsx            # Root layout (fonts, metadata)
  globals.css           # Tailwind v4 import + plugin + shared CSS classes + keyframes
  api/
    projects/route.ts   # GET /api/projects — server-side DB query
    experiences/route.ts # GET /api/experiences — server-side DB query
components/
  Header.tsx            # Sticky nav — desktop links + mobile hamburger menu
  Card_Projects.tsx     # Desktop project card (gradient border, 3D tilt on hover)
  CoverflowCarousel.tsx # Mobile project carousel (slide animation, swipe + arrow nav)
  MeshGradient.tsx      # Animated background mesh
  pages/
    About.tsx
    Experience.tsx
    Projects.tsx        # CoverflowCarousel on mobile, card grid on desktop
    Techs.tsx
    ContactMe.tsx
  const/
    index.tsx           # `technologies` array (name + image) for the Techs section
  ui/                   # Shadcn UI primitives (toast, button, card, carousel)
api/
  useExperience.ts      # `useExperiences` hook — fetches from /api/experiences
drizzle/
  schema.ts             # `projects` and `experiences` table definitions
  *.sql                 # Migration history
utils/
  queryCache.ts         # In-memory fetch cache — wraps fetch() calls, not DB directly
```

## Key Conventions

### Styling
- **Tailwind v4** — configured via `@import "tailwindcss"` + `@plugin` + `@config` in `globals.css`; JS config lives in `tailwind.config.ts`
- **Inline styles** for colors, animations, and component-specific visual properties
- Primary breakpoint for responsive changes: `md` (768px)
  - `md:hidden` — mobile only
  - `hidden md:flex` — desktop only

### Color tokens (used inline throughout)
| Token | Value |
|-------|-------|
| Background | `#0a0a0b` / `#111114` |
| Text primary | `#eae7e2` |
| Text muted | `#5a5a5e` |
| Accent green | `#4aff8b` |
| Border | `#1e1e22` |

### Data fetching
Client components call `cachedFetch<T>(key, '/api/route')` from `utils/queryCache.ts`. It caches results in a module-level `Map` (one fetch per session per key). The actual DB query runs server-side in the API route, keeping the connection string out of the browser bundle.

```
Client component → cachedFetch('/api/projects') → app/api/projects/route.ts → Neon DB
```

### Responsive layout pattern (Projects section)
```tsx
<div className='md:hidden'>           {/* mobile: slide carousel */}
  <CoverflowCarousel projects={...} />
</div>
<div className='hidden md:flex ...'>  {/* desktop: card grid */}
  {projects.map(p => <Card_Projects ... />)}
</div>
```

### Gradient border animation
Cards use a `linear-gradient` border with the `gradientBorder` keyframe defined in `globals.css`. Apply via `animation: 'gradientBorder 6s linear infinite'` + `backgroundSize: '300% 100%'`.

### Mobile carousel slide animation
`CoverflowCarousel` uses a CSS `@keyframes slideInRight` / `slideInLeft` injected via `<style>` and triggered by changing `key={animKey}` on the card wrapper. Direction is tracked with a `direction` state set before each index change.

## Database Schema

**`projects`** — `id`, `name`, `description`, `image` (URL), `html_link`, `github_link`

**`experiences`** — `id`, `positionName`, `employeeName`, `dateStarted`, `dateEnded`, `description1/2/3`, `imageUrl`

To add/edit content, run `npm run studio` to open Drizzle Studio.

## Tailwind v4 Notes

- PostCSS plugin is `@tailwindcss/postcss` (separate package from `tailwindcss`)
- `globals.css` starts with `@import "tailwindcss"; @plugin "tailwindcss-animate"; @config "../tailwind.config.ts";`
- `darkMode` in `tailwind.config.ts` must be the string `"class"`, not `["class"]`
- Content paths are auto-detected — no `content` array needed in the config
