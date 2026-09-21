Personal portfolio and technical blog, built with [Jekyll](https://jekyllrb.com/) and the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme, hosted on [GitHub Pages](https://pages.github.com/).

🔗 **Live site:** [https://thaonbt.github.io](https://thaonbt.github.io)

## Stack

- **Static site generator:** Jekyll (native GitHub Pages build, no CI pipeline required)
- **Theme:** Minimal Mistakes, loaded via `remote_theme`
- **Hosting:** GitHub Pages

## Structure

```md

.
├── _config.yml # site config, theme, plugins, collections
├── _data/
│ └── navigation.yml # main nav menu
├── _includes/
│ └── head/
│ └── custom.html # favicon <link> tags
├── _pages/ # static pages (About, Projects, category archive)
├── _posts/ # blog posts
├── _projects/ # portfolio items (custom collection)
├── assets/
│ ├── css/main.scss # theme overrides + custom dark mode
│ ├── js/theme-toggle.js
│ └── images/
└── index.md # homepage

```

## Features

- Portfolio grid via a custom `projects` collection
- Blog with category-based archive (`/categories/`)
- Sticky table of contents on long-form posts
- Light/dark mode toggle (custom, layered on top of the theme's skin system)

## Content conventions

Categories are fixed to 5 buckets. Each post gets exactly one category — use tags for anything more specific (frameworks, tools, languages).

| Category | Scope | Example posts |
|---|---|---|
| `dev` | Software development, architecture, clean code, languages | Refactoring patterns, API design |
| `devops` | CI/CD, infrastructure, cloud, K8s, SRE, observability | Pipeline setup, container orchestration |
| `security` | AppSec, Zero Trust, IAM, compliance | OWASP reviews, auth flows |
| `fintech` | Trading, crypto, on-chain analysis | Backtest strategies, on-chain data analysis |
| `notes` | General notes that don't fit the buckets above — including posts about this site itself | "Building

## Local development

This site builds natively on GitHub Pages — no CI required. To preview changes locally before pushing:

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

> **Note:** the `Gemfile` pins the `github-pages` gem to match GitHub's build environment exactly, avoiding version-mismatch surprises between local preview and production build.

## Credits

Built on [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) by Michael Rose, licensed under MIT.