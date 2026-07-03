# bhavykhatri.com

Personal website of Bhavy Khatri — writing (poetry & essays) and the book
*Agents: From Theory to Production*. Built with [Astro](https://astro.build).

Live at **[www.bhavykhatri.com](https://www.bhavykhatri.com/)**.

## Develop

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
npm run build    # build the production site to ./dist
npm run preview  # preview the production build locally
```

Requires Node 18+ (no Ruby needed).

## Structure

- `src/pages/` — routes (home, writing, book, about, 404, rss).
- `src/content/writing/` — poetry & essays as Markdown (a typed content collection).
- `src/components/` — Header, Footer, PostCard, BookFeature.
- `src/layouts/Base.astro` — shared shell (SEO, fonts, theme, footer).
- `src/styles/global.css` — design system (palette, typography, light/dark).
- `public/` — static assets, `CNAME`, favicon.

## Writing a post

Add a Markdown file to `src/content/writing/`:

```yaml
---
title: "Your title"
date: 2026-01-01
kind: poetry   # or "essay"
lang: en       # or "hi" for Devanagari
tags: [ghazal]
excerpt: "Optional one-line teaser."
draft: false
---
```

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds with
`withastro/action` and publishes to GitHub Pages. In the repo **Settings → Pages**,
the source must be set to **GitHub Actions**. The custom domain is configured via
`public/CNAME` (`www.bhavykhatri.com`).
