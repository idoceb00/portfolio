# AGENTS.md

## Stack

- **Framework**: Astro 7 + Svelte 5 (islands)
- **CSS**: UnoCSS (`presetWind3`) — NOT Tailwind. No `tailwind.config` exists.
- **Icons**: `astro-icon` + Remix Icons (`ri:` prefix from `@iconify-json/ri`)
- **Fonts**: Fontshare via `presetWebFonts` (Cabinet Grotesk, Satoshi)
- **Data**: Astro Content Collections (`src/content.config.ts`) with Markdown files in `src/content/`
- **Theme**: Dark mode only. Color tokens in `src/style.css` (`--darkslate-*`, `--primary-*`). Unused `.yellow-theme`, `.green-theme`, etc. classes exist for optional theme switching.

## Commands

```bash
pnpm dev          # Astro dev server (http://localhost:4321)
pnpm build        # Static build to dist/
pnpm astro build  # Same as above
```

No test runner, linter, or formatter is configured. No CI workflows exist.

## Architecture

```
src/
  site-config.ts          # Author info, links, stack — edit here for profile changes
  content.config.ts       # Z schema for projects collection
  style.css               # CSS variables, background patterns
  lib/constants.ts        # Exports LINKS from site-config
  lib/experience.ts       # Job entries (type Job[])
  pages/
    index.astro           # Bento grid homepage
    proyectos.astro       # Projects listing with ProjectFilter
    experiencia.astro     # Experience page
  components/
    Card/index.astro      # Reusable card with colSpan/rowSpan/height props
    ProjectFilter.svelte  # Svelte 5 island — category filter + project grid
    Projects.astro        # Project count card (links to /proyectos)
    AboutMe.astro, IntroCard.astro, etc.
  content/projects/       # Markdown files — one per project
  layouts/
    Layout.astro          # Base HTML layout
```

## Conventions

- **Projects data**: Each `.md` file in `src/content/projects/` is a project. Schema in `content.config.ts`. Frontmatter fields: `title`, `description`, `tags`, `category`, `type` (`personal`|`academico`), `repoUrl`, `demoUrl`, `featured`, `date`.
- **`type: "personal"`** = professional/personal projects (shown under "Personales")
- **`type: "academico"`** = academic projects (shown under "Académicos")
- **`category`** is free-form string — must match existing values for filter to work (e.g. "API REST", "Aplicación de escritorio")
- **Sorting**: Featured first, then by date descending (in `proyectos.astro`)
- **Icons**: Only use Remix Icons (`ri:` prefix). Check existing usage in `IntroCard.astro`, `Card/index.astro` before inventing new icon names.
- **UnoCSS classes**: Use `presetWind3` syntax (Tailwind-compatible). Custom theme colors: `darkslate-*`, `primary-*`. Custom classes: `stripes-diagonal`, `squares-pattern`.
- **Bento grid**: Homepage uses CSS Grid with `col-start`/`row-start` spans on cards. Modifying one card's rowSpan may require adjusting siblings.
- **No light mode**: Body is dark. Don't add light mode logic.
- **Experience data**: Edit `src/lib/experience.ts` — simple `Job[]` array, not a content collection.
