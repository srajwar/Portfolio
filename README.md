# Shubham Rajwar · Portfolio

A Next.js site with one page and a working contact form backend.

## Run it locally

```bash
npm install
cp .env.example .env.local   # fill in the values
npm run dev                  # http://localhost:3000
```

## Edit content

Everything visible on the site lives in `data/site.ts`: the intro, samples, traffic numbers, experience and skills.

- Numbers must come from your own tracking sheet. Set `metricsAsOf` to the month you pulled them.
- Add a sample by copying an entry in `featuredSamples` or `moreSamples`.

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
