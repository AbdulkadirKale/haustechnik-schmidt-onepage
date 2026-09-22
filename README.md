# Haustechnik Schmidt

Static website template for a small plumbing and heating business. Built with Astro and Tailwind CSS, with content kept in Markdown and YAML files.

Demo: https://haustechnik-schmidt-onepage.vercel.app/

## Stack

| Area | Technology |
| --- | --- |
| Framework | Astro 7, static output |
| Styling | Tailwind CSS 4, `@tailwindcss/typography` |
| Content | Astro content collections (`glob` and `file` loaders), Zod schemas |
| Hosting | Any static host, tested on Vercel |

## Requirements

Node.js 22.12 or newer.

## Getting started

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:4321.

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the production build locally |

## Project structure

| Path | Purpose |
| --- | --- |
| `src/pages/index.astro` | Landing page: hero, services slider, about, testimonials |
| `src/pages/leistungen/[slug].astro` | Service detail pages, one per Markdown file |
| `src/pages/impressum.astro`, `datenschutz.astro` | Legal pages |
| `src/layouts/Layout.astro` | Page shell with header, contact section and footer |
| `src/layouts/LegalLayout.astro` | Page shell for the legal pages |
| `src/components/` | `Header`, `Kontakt`, `Footer` |
| `src/content.config.ts` | Collection definitions and Zod schemas |
| `src/content/leistungen/*.md` | One file per service |
| `src/content/firmenprofil.yaml` | Company data: name, address, phone, e-mail, opening hours, emergency service |
| `src/content/startseite.yaml` | Landing page and form texts |
| `src/styles/global.css` | Tailwind entry point, typography plugin, `scrollbar-hide` utility |
| `public/images/leistungen/` | Service images |

## Content

Services are Markdown files in `src/content/leistungen/`. The file name becomes the URL slug.

```md
---
title: Badsanierung
order: 1
summary: Short text shown on the landing page and in the detail page header.
bilder:
  - src: /images/leistungen/badsanierung-1.jpg
    alt: Description of the image
---

Body text in Markdown.
```

| Field | Type | Description |
| --- | --- | --- |
| `title` | string | Service name |
| `order` | number | Sort order on the landing page, default `0` |
| `summary` | string | Teaser text, clamped to four lines on the landing page |
| `bilder` | list of `src` and `alt` | Images. The first image is shown on the landing page and as the detail page header background |

Company data and landing page texts are edited in `firmenprofil.yaml` and `startseite.yaml`. The emergency service bar in the header is controlled by `notdienstActive` and `notdienstNumber`.

The images in `public/images/leistungen/` are placeholders. Replace them and update the `src` paths in the Markdown files.

## Services slider

The slider on the landing page is implemented in the inline script at the end of `index.astro`. On desktop it supports mouse dragging and horizontal wheel or trackpad input with spring-based momentum and snaps to the nearest card. Touch devices use native scrolling with CSS scroll snap. `prefers-reduced-motion` disables the smoothing.

The feel is controlled by these constants at the top of the script:

| Constant | Default | Effect |
| --- | --- | --- |
| `DRAG_SPEED` | `1.5` | Scroll distance per pixel of pointer movement |
| `SMOOTH_DRAG` | `110` | Follow lag while dragging, in ms. Higher is heavier |
| `SMOOTH_SETTLE` | `380` | Glide time after release, in ms. Higher is softer and longer |
| `MOMENTUM` | `380` | Release velocity multiplier, in ms. Higher carries further |
| `FLICK_MIN` | `80` | Minimum movement in px to advance to the next card |
| `WHEEL_IDLE` | `140` | Idle time in ms after a wheel gesture before snapping |

## Deployment

`astro.config.mjs` sets `output: 'static'`, so `npm run build` produces plain files in `dist/`. Upload that folder to any static host. On Vercel, import the repository and keep the detected Astro preset.

## Before going live

- Review `impressum.astro` and `datenschutz.astro`. The legal texts are templates and have to be checked against the actual business.
- The contact form has no backend. It only shows a confirmation dialog in the browser. Connect it to a form service or an API endpoint.
- Replace the company data, placeholder images and the testimonials in `index.astro`.
