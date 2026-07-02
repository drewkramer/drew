# drewkramer.co

A minimal personal site — plain HTML + CSS, no build step, no framework.

## Structure

```
index.html      The single landing page
styles.css      All styles (Editorial ink theme, auto light/dark)
images/         Portrait photo and any other assets
netlify.toml    Deploy config (publishes the repo root, no build)
archive/        The previous Hugo + Webpack site, preserved
```

## Editing

Everything lives in `index.html` and `styles.css` — open and edit directly.
No install or build needed.

To preview locally, just open the file:

```sh
open index.html
```

…or serve it (nicer for relative paths):

```sh
npx serve .
```

## Deploying

Hosted on Netlify. Pushing to `master` triggers a deploy; there is no build
command — Netlify publishes the repo root as static files. The custom domain
`drewkramer.co` is managed in the Netlify dashboard.

## The old site

The previous Hugo + Webpack site lives in [`archive/`](./archive/) and is still
fully runnable:

```sh
cd archive
npm install
npm start      # local dev (Hugo + webpack)
npm run build  # outputs to archive/dist
```
