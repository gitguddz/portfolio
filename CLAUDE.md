# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build for production (output: dist/)
npm run preview  # Preview production build locally
```

No test runner is configured.

## Architecture

This is an **Astro 6 static portfolio site** styled with Tailwind CSS 4 (via Vite plugin — no `tailwind.config.*` file; configuration lives in CSS or `astro.config.mjs`).

### Key conventions

- **Layouts** (`src/layouts/`) wrap pages and provide the HTML shell. Pages slot into layouts via `<slot />`.
- **Pages** (`src/pages/`) map directly to routes by filename (Astro file-based routing).
- **Components** (`src/components/`) are reusable `.astro` fragments with scoped `<style>` blocks.
- **Global styles** live in `src/styles/global.css`, which currently just `@import "tailwindcss"`.

TypeScript strict mode is enabled (`astro/tsconfigs/strict`); keep `.astro` frontmatter typed.
