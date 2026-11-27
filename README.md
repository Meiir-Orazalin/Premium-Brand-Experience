# %M% Coffee

A Russian-first, trilingual editorial website for the %M% coffee chain. Development happens on `development/m-coffee`. Start with [development status](docs/DEVELOPMENT_STATUS.md) for the active checkpoint and available commands.

- [Product requirements](PROJECT_SPEC.md)
- [Ordered delivery gates](PROJECT_PLAN.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Contributor and recovery instructions](AGENTS.md)

## Local development

Use the Node version in .nvmrc and the pnpm version in package.json. Install with `pnpm install --frozen-lockfile`, then start `pnpm dev` and open /ru, /kk or /en. Optional environment settings are listed in .env.example.

Run `pnpm verify` for formatting, ESLint, route types and Vitest. Run `pnpm build`, then `pnpm exec playwright install chromium` and `pnpm test:e2e` for production-mode navigation and axe checks. On a machine with Google Chrome installed, `PLAYWRIGHT_CHANNEL=chrome pnpm test:e2e` uses the system browser.
