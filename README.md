# Aaron Julius Tumbokon — Portfolio

Personal portfolio built with Next.js, showcasing projects, work experience, and technical skills.

## Tech Stack

- **Next.js 16** — App Router, server + client components
- **React 19** — latest with concurrent features
- **TypeScript 6** — strict mode
- **Tailwind CSS 4** — utility-first styling (CSS-first config)
- **Neon + Drizzle ORM** — serverless Postgres for projects and experience data
- **EmailJS** — contact form without a backend
- **Vercel** — hosting and deployment

## Getting Started

**1. Install dependencies**
```bash
npm install
```

**2. Set up environment variables**

Create `.env.development.local` at the project root:
```env
POSTGRES_URL_NON_POOLING=your_neon_non_pooling_connection_string
POSTGRES_URL=your_neon_pooled_connection_string
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

**3. Run the dev server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Database

Projects and experience entries are stored in a Neon Postgres database managed with Drizzle ORM.

```bash
npm run generate   # generate a migration after schema changes
npm run migrate    # apply pending migrations
npm run studio     # open Drizzle Studio to browse/edit data
```

## Sections

| Section | Description |
|---------|-------------|
| About | Intro, social links, tech stack carousel |
| Experience | Work history rendered as a vertical timeline |
| Projects | Card grid (desktop) / swipeable slide carousel (mobile) |
| Contact | EmailJS contact form with reCAPTCHA |

## Attribution

Icon assets sourced from [Flaticon](https://www.flaticon.com) — Pixel perfect.
