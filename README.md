# 624851 NB Inc. Website

Production-ready React site for **624851 NB Inc.**, an independent software company based in Moncton, New Brunswick, Canada.

The site is designed to provide a credible public business presence for company verification and general web visibility. It includes:

- A complete homepage with company positioning
- An about page describing the business and its focus
- A projects page covering product and client work areas
- A contact page with direct company contact details
- Responsive layout, semantic HTML, and SEO basics

## Stack

- React
- Vite
- React Router
- Plain CSS

## Local development

```bash
npm install
npm run dev
```

The local development server will print a URL, typically `http://localhost:5173`.

## Production build

```bash
npm run build
```

The production-ready static files will be generated in `dist/`.

## Railway deployment

This project is set up to deploy on Railway.

Railway can use the standard Node flow:

```bash
npm install
npm run build
npm start
```

Notes:

- `npm run build` generates the static site in `dist/`
- `npm start` runs `server.js`, a small Express server that serves the built files
- The server includes SPA fallback routing, so direct requests to `/about`, `/projects`, and `/contact` work correctly in production

Railway should automatically provide the `PORT` environment variable used by the server.

## Deployment

This project builds to a static site and can be deployed to:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Any standard static hosting provider

Because the site uses React Router with browser history, direct loading of non-root routes requires SPA fallback behavior on the host.

Examples:

- Netlify: add a redirect from `/*` to `/index.html`
- Vercel: configure rewrites to `/index.html`
- Static hosts with custom routing support: route unknown paths to the main HTML entry

If you want zero-config route handling on a host that does not support SPA rewrites, switch the router in `src/main.jsx` from `BrowserRouter` to `HashRouter`.

## Contact details used on the site

- Company: 624851 NB Inc.
- Email: info@624851.com
- Location: Moncton, New Brunswick, Canada
