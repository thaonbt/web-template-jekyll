---
title: "Building This Site: A GitHub Pages Portfolio + Blog"
date: 2026-09-21
categories:
  - notes
tags:
  - jekyll
  - github-pages
  - minimal-mistakes
toc: true
toc_sticky: true
excerpt: "How this site came together — the theme choice, structure decisions, and what I customized along the way."
---

This post is a step back to summarize how this site itself was built — partly as documentation for future-me, partly because the process surfaced a handful of decisions worth writing down.

## The goal

I wanted one site that could do two things: work as a personal portfolio, and host technical notes as they come up. That combination ruled out a bare static page — I needed post archives, categories, and a table of contents for longer write-ups, without wanting to build all of that from scratch.

## Why Jekyll + Minimal Mistakes

GitHub Pages supports two build paths: native Jekyll (zero config, GitHub builds it server-side) or any static site generator via GitHub Actions. I went with native Jekyll using the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme, loaded via `remote_theme` rather than forking the whole theme repo — this keeps my repo limited to just my content and config, while theme updates stay one version bump away.

The trade-off: less low-level control than hand-rolling a static site generator setup, in exchange for not having to build category archives, TOC generation, or responsive navigation myself.

## Structure decisions

A few choices shaped how the site is organized:

- **Collections for portfolio items** — projects live in a custom `_projects` collection rendered as a grid, kept separate from blog posts in `_posts`
- **Category-based blog archive** — posts are grouped and browsable at `/categories/`, rather than a flat chronological list
- **`_pages/` for static content** — About, Projects, and the category archive page all live outside the root, which needed one explicit config line (`include: - _pages`) since Jekyll ignores underscore-prefixed folders by default unless told otherwise

## Customizations beyond the default theme

A few things needed going past the out-of-the-box theme config:

- **Light/dark toggle** — the theme ships fixed color skins chosen at build time, not a runtime switch. Adding an actual toggle meant a small custom script (storing the choice in `localStorage`) plus a CSS layer keyed off a `data-theme` attribute, sitting on top of the theme's own skin system
- **Header and sidebar typography** — tuning the muted gray used for navigation and the author sidebar so it stayed visually secondary to the actual page content, rather than competing with it
- **Table of contents styling** — a lightweight bordered card for the sticky TOC, matching the rest of the site's visual weight instead of the theme's plainer default

## What I'd flag for anyone doing the same

The rough edges weren't really about Jekyll or the theme being fragile — they were mostly about a few non-obvious defaults:

- `remote_theme` doesn't pull in every plugin a theme depends on automatically; each one needs listing explicitly under `plugins:`
- The GitHub Pages "Source" folder setting (root vs. `/docs`) can silently reset, and a wrong value fails quietly rather than with a clear error
- Anything under an underscore-prefixed folder (`_pages`, or an accidentally-named `_assets`) gets excluded from the build unless explicitly included — this one cost the most debugging time
- The browser tab favicon isn't auto-detected from any file dropped at the repo root; it needs an explicit `<link rel="icon">` tag, which for this theme goes in `_includes/head/custom.html`

I wrote up a couple of these in more depth in an [earlier post]({{ '/notes/2026/09/21/jekyll-github-pages-lessons.html' | relative_url }}) if you want the specific error messages and fixes.

## What's next

The scaffolding is in place — portfolio grid, category-based blog, dark mode. From here it's mostly about filling in actual project write-ups and posting technical notes as they come up.