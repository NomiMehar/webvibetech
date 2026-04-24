# WebVibe — Next.js 14 (App Router)

This is the Next.js 14 conversion of the WebVibe HTML/CSS site. Custom SCSS modules, no Tailwind/Bootstrap.

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Copy assets into `public`**
   - Copy the contents of `assets/img` into `public/assets/img` (logo, clients, portfolio, testimonials, cta-bg.jpg, favicon, etc.).
   - Add OG images (1200×630px) in `public/og/`:
     - `og-home.jpg`, `og-services.jpg`, `og-web-development.jpg`, `og-app-development.jpg`, `og-ui-ux.jpg`, `og-speed-optimization.jpg`, `og-default.jpg`.

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/` — App Router: `layout.js`, `page.js`, `globals.scss`, `sitemap.js`, `robots.js`, and route folders.
- `src/components/` — One folder per component: `ComponentName.js` + `ComponentName.module.scss`.
- `src/styles/` — Shared SCSS: `_variables.scss`, `_mixins.scss`, `_breakpoints.scss`, `_typography.scss`.
- `src/lib/metadata.js` — Shared metadata helper for OG/Twitter/canonical.

## SEO

- Base metadata in `src/app/layout.js`.
- Per-page metadata via `generateMetadata()` and `src/lib/metadata.js`.
- JSON-LD on homepage and service pages.
- `src/app/sitemap.js` and `src/app/robots.js` for sitemap and robots.txt.

## Contact form

Uses EmailJS (same IDs as original). Configure in `src/components/Contact/Contact.js` if needed.
