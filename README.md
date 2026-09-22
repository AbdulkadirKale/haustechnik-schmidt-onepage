# ⚡ Haustechnik Schmidt — Modern Static One-Page Boilerplate

A production-ready, ultra-fast, and CMS-free static one-page website boilerplate designed for local service businesses (Handwerker, HVAC, plumbing, and SMBs). Built with **Astro**, **Tailwind CSS v4**, and native **Astro Content Collections**.

---

## 🚀 Live Demo

Check out the live deployment on Vercel:  
🔗 **https://haustechnik-schmidt-onepage.vercel.app/** 

---

## ✨ Key Features

* **⚡ Blazing Fast & Pure Static:** Built on Astro 4+ with `output: 'static'`, achieving 100/100 Lighthouse performance, zero server-side latency, and minimal client-side JavaScript.
* **🎯 Cinematic Peek Slider:** Modern interactive services section featuring a "peek effect" where adjacent cards naturally guide the user.
* **🖱️ Smooth Physics-Based Drag-to-Scroll:** Custom-tuned `SmoothDamp` spring physics with friction and momentum easing for desktop dragging and trackpad interaction—fully preserving native mobile touch gestures.
* **🎨 Modern UI/UX:** Styled with Tailwind CSS v4, subtle hover scale effects, glassmorphic touches, and clean typography.
* **📂 Markdown Content Collections:** Services and metadata are managed cleanly through typed Markdown files (`src/content/leistungen/`), making CMS setup unnecessary while keeping data easy to update.
* **⚖️ DSGVO/GDPR Compliant:** Includes accessible and structured legal routes (`/impressum` and `/datenschutz`) tailored for the DACH market.
* **🛡️ Rock-Solid Layout:** Engineered with dynamically calculated headers, zero visual clipping on hover states, and bulletproof responsive grids.

---

## 🛠️ Tech Stack

* **Core Framework:** [Astro](https://astro.build/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Typography:** `@tailwindcss/typography`
* **Data Management:** Astro Content Collections (Markdown + Zod schemas)
* **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
├── public/
│   └── images/
│       └── leistungen/         # Optimized project & service assets
├── src/
│   ├── components/             # Reusable UI components (Header, Footer, etc.)
│   ├── content/
│   │   ├── config.ts           # Schema validation with Zod
│   │   └── leistungen/         # Service data (.md files)
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML scaffold
│   ├── pages/
│   │   ├── datenschutz.astro   # Privacy Policy (DSGVO)
│   │   ├── impressum.astro     # Impressum (Legal notice)
│   │   ├── leistungen/         # Dynamic service detail pages
│   │   └── index.astro         # Main one-page landing & slider
│   └── styles/
│       └── global.css          # Tailwind CSS directives
└── astro.config.mjs            # Static build configuration