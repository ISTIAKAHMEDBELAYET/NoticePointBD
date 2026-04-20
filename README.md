# NoticePointBD

A static information portal for job circulars, admissions, results, and blog articles. Built with Astro, Tailwind CSS, and Fuse.js. Hosted on Cloudflare Pages.

## Quick Start

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`
4. Preview build: `npm run preview`

## Folder Structure

- `public/images/` - All images (including logo)
- `src/content/` - Markdown posts (one per file)
- `src/pages/` - Astro pages
- `src/components/` - Astro components
- `src/layouts/` - Astro layout wrappers

## AdSense Setup

1. Set environment variable `PUBLIC_ADSENSE_CLIENT` to your publisher value (example: `ca-pub-1234567890123456`).
2. Replace the publisher ID in `public/ads.txt`.
3. Deploy and verify `https://your-domain/ads.txt` is publicly accessible.
4. Keep policy pages available: `/privacy-policy/`, `/terms-conditions/`, `/disclaimer/`, `/about/`, `/contact/`.

See `AGENTS.md` for coding conventions and SEO automation.
