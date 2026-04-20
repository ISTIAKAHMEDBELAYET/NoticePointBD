# AGENTS.md — AI Coding Agent Instructions for NoticePointBD

Welcome to the NoticePointBD project! This file provides essential guidance for AI coding agents and contributors to be productive and consistent in this codebase. Please read carefully before making changes or automations.

## Project Overview
- **Type:** Static information portal (Job Circulars, Admissions, Results, Blog)
- **Tech Stack:** Astro (SSG), Tailwind CSS, Fuse.js
- **Hosting:** GitHub + Cloudflare Pages
- **Content:** Markdown files in `/src/content/` (one post per file, filename = slug)
- **Languages:** Bangla + English mixed

## Key Conventions
- **Flat URLs:** All posts/pages use flat slugs (no `/job/` or `/post/` prefix). Example: `/bangladesh-navy-job-circular-2026/`
- **Content Structure:**
  - Markdown files in `/src/content/` with frontmatter (see below)
  - Images in `/public/images/`
  - Pages in `/src/pages/` (Astro files)
  - Components in `/src/components/`
- **Frontmatter:** Each Markdown file must include all required fields for its type (see below).
- **SEO:** Use the `SEOHead.astro` component to auto-generate meta tags, OG tags, and schema from frontmatter.
- **No CMS:** All content is managed via Markdown and Git.

## Build & Development
- **Install:** `npm install`
- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Preview:** `npm run preview`
- **Deploy:** Push to GitHub; Cloudflare Pages auto-builds from `main` branch.

## Folder Structure (Key Paths)
- `/public/robots.txt` — robots rules
- `/public/images/` — all post images
- `/src/content/` — all Markdown posts (filename = slug)
- `/src/pages/` — Astro pages (homepage, category, search, etc.)
- `/src/components/` — Astro components (Header, Footer, PostCard, etc.)
- `/src/layouts/` — Astro layout wrappers

## Markdown Frontmatter Templates
### Job Post
```
---
title: "..."
slug: "..."
type: "job"
categories: [ ... ]
date: "YYYY-MM-DD"
deadline: "YYYY-MM-DD"
vacancies: "..."
organization: "..."
applyLink: "..."
applyType: "..."
hot: true/false
image: "/images/....jpg"
imageAlt: "..."
description: "..."
---
```
### Admission Post
```
---
title: "..."
slug: "..."
type: "admission"
categories: [ ... ]
date: "YYYY-MM-DD"
deadline: "YYYY-MM-DD"
organization: "..."
applyLink: "..."
hot: true/false
image: "/images/....jpg"
imageAlt: "..."
description: "..."
---
```
### Result Post
```
---
title: "..."
slug: "..."
type: "result"
categories: [ ... ]
date: "YYYY-MM-DD"
resultDate: "..."
organization: "..."
image: "/images/....jpg"
imageAlt: "..."
description: "..."
---
```
### Blog Post
```
---
title: "..."
slug: "..."
type: "blog"
categories: [ ... ]
date: "YYYY-MM-DD"
image: "/images/....jpg"
imageAlt: "..."
description: "..."
---
```

## Coding Guidelines
- Use Astro and Tailwind CSS best practices.
- Keep all URLs flat and clean.
- Use provided components for layout and SEO.
- Do not introduce a CMS or database.
- All new content must be Markdown in `/src/content/`.
- All images must be placed in `/public/images/` and referenced by relative path.


## Automatic SEO Implementation Plan

All SEO is handled automatically using the `SEOHead.astro` component and Astro’s static generation features. Follow these conventions to ensure full SEO automation:

- **Meta Tags & Open Graph:**
  - All meta tags, Open Graph, and Twitter Card tags are auto-generated from the Markdown frontmatter fields (title, description, image, etc.) via `SEOHead.astro`.
  - No manual meta tag editing is needed in page files.

- **Schema Markup:**
  - Job posts use [JobPosting](https://schema.org/JobPosting) schema, auto-filled from frontmatter.
  - Blog, Admission, and Result posts use [Article](https://schema.org/Article) schema, also auto-filled.

- **Canonical URLs:**
  - Canonical links are generated for every post/page using the slug and site domain.

- **Technical SEO:**
  - Sitemap is auto-generated via `@astrojs/sitemap` plugin.
  - `robots.txt` is static in `/public` and points to the sitemap.
  - All images must have `imageAlt` in frontmatter for alt tags.
  - H1 = post title, one per page. Use H2/H3 for content structure.
  - Pagination uses rel="next" and rel="prev".
  - Breadcrumbs include schema markup.
  - No dynamic server code—site is fully static for speed and SEO.

- **Cloudflare SEO Extras:**
  - Free SSL, Brotli, HTTP/2/3, and global CDN are automatic.

**How to ensure SEO works:**
- Always fill all required frontmatter fields in Markdown posts.
- Use the provided components and layouts—do not bypass `SEOHead.astro`.
- Test with Lighthouse and social sharing previews.

For full details, see the [SEO section in the planning document](../website-full-plan-1.txt).

---
## Build/Deploy Pitfalls
- Ensure all Markdown frontmatter fields are present and valid.
- Do not use dynamic server-side code; site must remain static.
- Test locally with `npm run dev` and `npm run build` before pushing.
- If adding new categories, update navigation and filter components.

## Links
- [Full Planning Document](../website-full-plan-1.txt)

---
For more details, see the planning document above. If you add new conventions, update this file!
