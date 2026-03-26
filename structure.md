# Project Structure

Personal portfolio website built with **Astro 6** and **Tailwind CSS 4**.

## Directory Tree

```
portfolio/
├── public/                  # Static assets served as-is
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/              # Imported assets (processed by Astro/Vite)
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/          # Reusable .astro fragments
│   │   └── Welcome.astro    # Placeholder landing component (replace with portfolio content)
│   ├── layouts/             # HTML shell wrappers
│   │   └── Layout.astro     # Base layout — wraps every page via <slot />
│   ├── pages/               # File-based routes (filename = URL path)
│   │   └── index.astro      # → / (homepage)
│   └── styles/
│       └── global.css       # Global styles — currently just @import "tailwindcss"
├── .vscode/
│   ├── extensions.json      # Recommends Astro VS Code extension
│   └── launch.json          # Dev server launch config for VS Code debugger
├── astro.config.mjs         # Astro config — registers Tailwind as a Vite plugin
├── tsconfig.json            # Strict TypeScript config (extends astro/tsconfigs/strict)
├── package.json             # Scripts and dependencies
├── CLAUDE.md                # Guidance for Claude Code
└── structure.md             # This file
```

## Key Files

| File | Purpose |
|------|---------|
| `src/layouts/Layout.astro` | Base HTML shell. Add `<head>` meta, fonts, nav, footer here. |
| `src/pages/index.astro` | Homepage (`/`). Add new pages as `src/pages/about.astro` → `/about`, etc. |
| `src/components/` | Drop reusable UI pieces here (Hero, ProjectCard, ContactForm, …). |
| `src/styles/global.css` | Tailwind entry point. Add custom CSS variables or `@layer` rules here. |
| `astro.config.mjs` | Astro + Vite config. Add integrations (MDX, sitemap, …) here. |

## Commands

```bash
npm run dev      # Start dev server at http://localhost:4321
npm run build    # Build for production → dist/
npm run preview  # Preview the production build locally
```

## Tech Stack

- **Astro 6** — static site generation, file-based routing
- **Tailwind CSS 4** — utility-first CSS, loaded as a Vite plugin (no `tailwind.config.*` file; customise via CSS or `astro.config.mjs`)
- **TypeScript** — strict mode enabled; type frontmatter in `.astro` files

## Routing Convention

Pages map 1-to-1 with routes:

```
src/pages/index.astro        →  /
src/pages/about.astro        →  /about
src/pages/projects/index.astro  →  /projects
```

## Notes

- No test runner is configured.
- `.private/` is git-ignored — safe to store local notes there.
- `src/assets/` files are imported in components and processed by Vite (hashed, optimised). Files that should be served unchanged belong in `public/`.
