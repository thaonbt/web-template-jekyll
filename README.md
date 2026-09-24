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

## Run locally on your machine

This site builds natively on GitHub Pages, so the easiest way to preview locally is to use the same Jekyll/GitHub Pages stack.

```bash
cd /path/to/web-template-jekyll
bundle install
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

Then open:

- `http://localhost:4000`

For a quick one-liner:

```bash
bundle exec jekyll serve
```

> **Note:** the `Gemfile` uses the `github-pages` gem so the local environment matches GitHub Pages more closely than a generic Jekyll install.

## Run in Codespace

When you open this repo in GitHub Codespaces:

```bash
cd /workspaces/web-template-jekyll
bundle install
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

Then:

1. Open the VS Code Ports panel
2. Find port `4000`
3. Click **Open in Browser** or **Open Preview**

You can also visit directly in the browser via the forwarded URL, typically:

- `http://localhost:4000`

This is useful for previewing changes in the same environment as the repo without needing a separate local Ruby setup.

## Deploy on GitHub Pages

This project is already set up for GitHub Pages with `remote_theme` and a native GitHub Pages build flow.

### Recommended flow

1. Push all changes to the main branch of your repository
2. In GitHub, open **Settings > Pages**
3. Set the source to **GitHub Actions** or the appropriate Pages branch depending on your repo configuration
4. Save the settings

If you use the standard Jekyll GitHub Pages setup, the site will build automatically from the repository content and publish at:

- `https://<username>.github.io/<repo-name>/`

### Important notes

- No CI pipeline is required for the simplest setup
- The project uses `remote_theme: "mmistakes/minimal-mistakes@4.28.1"`
- The `Gemfile` is pinned to `github-pages` to reduce version mismatch between local preview and production

## Credits

Built on [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) by Michael Rose, licensed under MIT.