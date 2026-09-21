---
title: "Lessons from Setting Up a Jekyll Site on GitHub Pages"
date: 2026-09-21
categories:
  - notes
tags:
  - jekyll
  - github-pages
  - ci-cd
toc: true
toc_sticky: true
excerpt: "A few non-obvious gotchas I hit while setting up this site with GitHub Pages and the Minimal Mistakes theme."
---

Setting up a Jekyll site on GitHub Pages sounds simple on paper — push a `_config.yml`, done. In practice I hit a few gotchas worth documenting for next time.

## Remote themes don't auto-load all their plugins

When using `remote_theme` instead of installing a theme as a gem, GitHub Pages does **not** automatically require every plugin the theme depends on. Minimal Mistakes uses the {% raw %}`{% include_cached %}`{% endraw %} Liquid tag from the `jekyll-include-cache` plugin, and without explicitly listing it under `plugins:` in `_config.yml`, the build fails with:

> Liquid syntax error (line 10): Unknown tag 'include_cached'

The fix is to declare it explicitly:

```yaml
plugins:
  - jekyll-remote-theme
  - jekyll-include-cache
  - jekyll-feed
  - jekyll-sitemap
```

## The "Source" folder setting matters more than it looks

GitHub Pages lets you build from `/ (root)` or `/docs` under **Settings → Pages**. If this silently resets (for example, after recreating the `github-pages` environment), Jekyll builds from the wrong directory entirely — it won't find your `_config.yml`, and falls back to the default `jekyll-theme-primer` theme without any error explaining why your custom config didn't apply.

Always double check this setting matches where your actual `_config.yml` lives.

## Stuck deployments happen, and cancel doesn't always work

Occasionally a Pages deployment gets stuck in "Queued" indefinitely, and the usual "Cancel workflow" button fails with `Cannot cancel a workflow run that is not in progress`. This is a known, currently unresolved GitHub issue affecting multiple users.

What actually worked for me: deleting the `github-pages` environment under **Settings → Environments**, then reconfiguring the Pages source from scratch. This resets the internal deployment lock without needing to wait it out.

## Takeaway

None of these issues were caused by bad Jekyll config — they were all environment/platform quirks specific to how GitHub Pages builds remote themes and manages deployment state. Worth checking the Actions build log line by line before assuming the theme itself is broken.
