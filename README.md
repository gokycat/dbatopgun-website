# DBA TopGun Website

Modern consulting site for [dbatopgun.com](https://dbatopgun.com) — IBM Gold Consultant positioning for enterprise Db2, migrations, HA/DR, and AI governance.

Built with **Next.js** (static export) + **Tailwind CSS**, ready for **Cloudflare Pages**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Static output lands in `out/`.

## Deploy to Cloudflare Pages

### Option A — Dashboard

1. Push this repo to GitHub.
2. In Cloudflare Pages → **Create project** → connect the repo.
3. Build settings:
   - **Framework preset:** Next.js (Static HTML Export) or None
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Deploy.

### Option B — Wrangler CLI

```bash
npm run build
npx wrangler pages deploy out --project-name=dbatopgun
```

## Point dbatopgun.com off GoDaddy Airo

1. Confirm the Cloudflare Pages project is live on the `*.pages.dev` URL.
2. In Cloudflare Pages → **Custom domains** → add `dbatopgun.com` and `www.dbatopgun.com`.
3. In GoDaddy DNS for `dbatopgun.com`:
   - Remove / stop the GoDaddy Website Builder / Airo site publishing.
   - Add the CNAME/A records Cloudflare shows for the Pages custom domain
     (typically CNAME `www` → your Pages hostname, and either CNAME flattening
     or the Cloudflare A/AAAA targets for apex — follow Cloudflare’s exact values).
4. Wait for DNS propagation, then verify HTTPS on https://dbatopgun.com.
5. Retire the GoDaddy Airo site once the new site resolves cleanly.

Keep the domain registered at GoDaddy if you prefer; only DNS needs to point at Cloudflare Pages (or move DNS to Cloudflare entirely for simpler management).

## Content sources

Copy and outcomes are drawn from Robert Proffitt’s IBM Gold Consultant resume (May 2026) and related positioning for DataSentinel / watsonx work.

## Contact form

The contact form opens a pre-filled `mailto:` draft to `Robert.Proffitt@DbaTopgun.com`. Swap to Formspree, Resend, or a Cloudflare Worker later if you want server-side delivery without a mail client.
