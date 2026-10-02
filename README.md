# Vitor Venturin Portfolio

Personal portfolio website hosted on GitHub Pages at [vitorventurin.github.io](https://vitorventurin.github.io).

## Stack

- Jekyll (via `github-pages` gem), Freelancer theme
- Bootstrap 3 (Bootswatch 3.2.0) / jQuery 1.11.0
- Font Awesome 6 (CDN)

## Structure

- `_config.yml` — site settings (SEO, social links, colors, analytics)
- `_layouts/`, `_includes/` — page shell and partials
- `_includes/css/` — stylesheets, concatenated into `style.css` at build time
- `_posts/` — one Markdown file per portfolio project
- `js/freelancer.js` — custom behaviour (scrolling, portfolio modals)
- `bela/`, `memefy/`, `sonora/`, `sopa/` — standalone project pages

## Portfolio Entries

Add a project by creating `_posts/YYYY-MM-DD-name.markdown`. Its front matter drives both the grid tile and the modal. `modal-id` must be unique.

Each project has a deeplink that opens its modal directly:

```
https://vitorventurin.github.io/#portfolioModal-<modal-id>
```

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` in your browser.

CSS and JS are linked through `site.url`, so a default local build loads them from the production site. To test local CSS/JS changes, override the URL:

```bash
echo 'url: "http://localhost:4000"' > _config.local.yml
bundle exec jekyll serve --config _config.yml,_config.local.yml
```

## Deployment

Push to `master` — GitHub Pages builds and deploys automatically.
