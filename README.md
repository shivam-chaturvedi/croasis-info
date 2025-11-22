# CROASIS Research Group Web App

Community-first site for CROASIS Research Group (CRG), highlighting conservation, agroecology, climate resilience, and capacity-building work in Meghalaya.

## Tech stack
- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui components
- React Router, React Query

## Getting started
```sh
git clone <REPO_URL>
cd croasis-info
npm install
npm run dev
```

## Useful scripts
- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — run lint checks

## Content and branding
- Update site metadata in `index.html` (title, description, social preview).
- Images for Open Graph/Twitter live in `public/`; page imagery is under `src/assets/`.
- Page content lives in `src/pages/` and shared UI in `src/components/`.

## Deployment
Build with `npm run build` and serve the `dist/` folder on your hosting platform of choice (e.g., Netlify, Vercel, or any static host).
