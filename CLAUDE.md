# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is Vitor Venturin's personal portfolio website hosted on GitHub Pages at `vitorventurin.github.io`. It is a **Jekyll** site (Freelancer theme) — pages are generated from layouts, includes and posts, not hand-written static HTML.

## Architecture

- **Main Portfolio Site**: `index.html` is only front matter (`layout: default`). The page is assembled by `_layouts/default.html` from the partials in `_includes/`.
- **Portfolio entries**: one Markdown file per project in `_posts/`. `_includes/portfolio_grid.html` renders the grid tiles and `_includes/modals.html` renders one modal per post.
- **Site settings**: `_config.yml` (title, SEO description, social links, colors, analytics ID, contact mode).
- **Project Subdirectories** (standalone, not part of the Jekyll templates):
  - `bela/` - React application (built/compiled version)
  - `memefy/`, `sonora/`, `sopa/` - Privacy policy pages for iOS apps

## File Structure

- `_config.yml` - Jekyll configuration and site data
- `_layouts/` - `default.html` (page shell) and `style.css` (layout used by the stylesheet)
- `_includes/` - Page partials: `head.html`, `nav.html`, `header.html`, `portfolio_grid.html`, `about.html`, `footer.html`, `modals.html`, `js.html`, contact and analytics partials
- `_includes/css/` - CSS sources: `bootstrap.min.css`, `main.css`, `glitch.css`
- `style.css` - Root stylesheet; concatenates the three files in `_includes/css/` at build time. This is the only stylesheet the layout loads.
- `_posts/` - Portfolio entries (`YYYY-MM-DD-name.markdown`)
- `js/` - jQuery, Bootstrap and theme scripts; custom behaviour lives in `js/freelancer.js`
- `img/portfolio/`, `assets/img/`, `assets/vid/` - Images and media
- `_site/` - Build output, git-ignored. Never edit it.
- `css/styles.css` and `js/scripts.js` are leftovers that the layout does not load.

## Portfolio Posts

Each post's front matter drives both its grid tile and its modal. Key fields: `modal-id`, `img`, `alt`, `client`, `category`, `project-date`, `icon`, `video`, `links`, `description`, and optional `published: false` to hide an entry.

- `modal-id` must be unique. It becomes the modal's DOM id (`portfolioModal-<modal-id>`).
- Deeplinks: `https://vitorventurin.github.io/#portfolioModal-<modal-id>` opens that project's modal on load (handled in `js/freelancer.js`, together with the browser back/forward handling).

## Key Technologies

- **Site generator**: Jekyll via the `github-pages` gem (kramdown, `jekyll-feed`)
- **Frontend Framework**: Bootstrap 3 (Bootswatch v3.2.0 build, Freelancer theme)
- **JavaScript Libraries**: jQuery 1.11.0, jQuery Easing, classie, cbpAnimatedHeader
- **Icons**: Font Awesome 6 (CDN)
- **Fonts**: JetBrains Mono, Montserrat, Lato (Google Fonts)
- **Analytics**: Google Analytics, ID set in `_config.yml`

## Common Development Tasks

**Local Development**:
- Install dependencies: `bundle install`
- Serve with live rebuild: `bundle exec jekyll serve`
- One-off build into `_site/`: `bundle exec jekyll build` (or `./build.sh`)
- Opening `index.html` directly in a browser does not work — it is a template.
- Assets are linked with `{{ "/path" | prepend: site.url }}`, so a default local build loads CSS/JS from the production URL. To test local CSS/JS changes, override `url` with an extra config file, e.g. a file containing `url: "http://localhost:4000"` passed as `--config _config.yml,<override>.yml`.
- Changes to `_config.yml` require restarting `jekyll serve`.

**Deployment**:
- GitHub Pages builds the site with Jekyll on every push to `master`
- Site is accessible at `https://vitorventurin.github.io/`

## Styling Conventions

- Edit styles in `_includes/css/main.css` (theme) and `_includes/css/glitch.css` (cyberpunk/glitch look, portfolio modal styling), not in `css/styles.css`
- Theme colors are set in `_config.yml` under `color:` (`primary: 161616`, `secondary: 111111`) as hex without the leading `#`
- Bootstrap 3 classes are used throughout (e.g. modals use `.fade` / `.in`)

## Content Structure

- Page sections, in order: nav, header, portfolio grid, about, footer, then the modals
- SEO meta tags and Open Graph tags live in `_includes/head.html` and read from `_config.yml`
- Social links, address and footer text come from `_config.yml`
- Privacy policies for iOS apps follow standard mobile app privacy policy format
