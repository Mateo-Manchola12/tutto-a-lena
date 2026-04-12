# Project Guidelines

## Build And Quality Commands

- Install dependencies: npm install
- Start local dev server: npm run dev
- Production build: npm run build
- Testing build: npm run build:test
- Preview dist output: npm run preview
- Lint project: npm run lint
- Auto-fix lint issues: npm run lint:fix

## Architecture

- Framework: Astro 5 SSG with file-based routes in src/pages.
- Main app shell: src/layouts/Layout.astro composes metadata, schema, header, footer, and page content.
- Homepage sections live in src/components/index; reusable layout parts are in src/components/layout; UI primitives are in src/components/ui.
- Business content is centralized in src/constants (business, menu, events, gallery, site map).
- Shared utilities are in src/lib (SEO helpers, Firebase, DOM selectors, sorting helpers).
- Global styles and design tokens are in src/styles/global.css.

## Project Conventions

- Keep route names in Spanish and kebab-case, aligned with files in src/pages (for example donde-estamos.astro, politica-privacidad.astro).
- Prefer TypeScript path aliases from tsconfig.json (@/_, @components/_, @constants/_, @lib/_, etc.) over deep relative imports.
- In Astro components, use typed Props interfaces and keep client-side JavaScript minimal unless interactivity is truly needed.
- Reuse data/helpers from src/constants and src/lib instead of duplicating literals across pages/components.
- Keep SEO consistency by preserving usage patterns of src/components/layout/MetaTags.astro, src/components/layout/Schema.astro, and src/components/layout/Breadcrumbs.astro.

## Agent Pitfalls

- Do not run npm run astro -- check unless explicitly requested, because it may trigger interactive dependency installation.
- There is no dedicated test script in package.json; default verification should be lint plus targeted build when needed.
- Respect environment-driven behavior from astro.config.mjs and src/constants/static_paths, especially indexability and site URL behavior.

## Documentation Links

- General project overview and setup: README.md
- Fast operational setup and business data checklist: QUICK_START.md
- Product, brand, and UX direction: AGENT_CONTEXT.md
- Specialized performance workflow agent: .github/agents/lighthouse-astro-ux.agent.md
