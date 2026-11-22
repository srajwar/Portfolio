# Shubham Rajwar · Portfolio

A Next.js site built on the [Nextfolio](https://github.com/3p5ilon/Nextfolio) template (MIT, see `LICENSE`), with pages for Home, Work, Experience, Contact and an optional blog, plus a working contact form backend.

## Run it locally

```bash
npm install
cp .env.example .env.local   # fill in the values
npm run dev                  # http://localhost:3000
```

## Edit content

Everything visible on the site lives in `data/site.ts`: the intro, work samples, experience and skills.

- The site shows no traffic figures, since they change month to month.
- Card images live in `public/images/work/` (1280×720, client and title baked in). The homepage photo is `public/images/hero.jpg`. Photos are from Unsplash (free licence) or made in Canva.
- Add a sample by copying an entry in `featuredSamples` or `moreSamples`.

## Blog (optional)

Drop an `.mdx` file into `content/` with `title`, `publishedAt` and `summary` in its frontmatter. The Blog link appears in the menu once there's at least one post, and RSS feeds update automatically.

## Contact form

`POST /api/contact` validates the message, drops bots (honeypot field), limits each IP to 5 messages per 10 minutes, and emails you through [Resend](https://resend.com).

| Variable | What it is |
|---|---|
| `RESEND_API_KEY` | API key from resend.com (free tier is enough) |
| `CONTACT_TO_EMAIL` | Inbox that receives messages |
| `CONTACT_FROM_EMAIL` | Sender. `onboarding@resend.dev` works for testing; use a verified domain later |
| `NEXT_PUBLIC_SITE_URL` | Live URL, used for the sitemap and link previews |

Until the first two are set, the form tells visitors to email you directly instead of silently losing messages.

## Deploy

Import this repo on [vercel.com/new](https://vercel.com/new), add the variables above under Settings → Environment Variables, and deploy. Every push to `main` redeploys.
