# Vaccine Safety Site (React + Vite + Tailwind)

### Quick start
1) Install Node.js (LTS) from https://nodejs.org/
2) Open a terminal inside this folder.
3) Run:
```bash
npm install
npm run dev
```
4) Open the URL it prints (e.g., http://localhost:5173).

### Build for production
```bash
npm run build
```
The optimized site appears in the `dist` folder.

### Deploy (Netlify - manual drag & drop)
1) Create a Netlify account at https://www.netlify.com/
2) Run `npm run build`
3) In Netlify, create a new **Manual deploy** and drag the `dist` folder onto the page.

### Deploy (GitHub Pages)
You can deploy the `dist` folder using GitHub Pages (via a `gh-pages` branch or an Action). See:
https://vitejs.dev/guide/static-deploy.html#github-pages
