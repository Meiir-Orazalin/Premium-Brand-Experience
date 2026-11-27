# Phase 01 · Engineering foundation

## Objective and current context

Build the smallest production-mode localized application and run it through GitHub Actions. Phase 00 was verified remotely at e51a185. No application dependencies are inherited.

## Milestones and acceptance

- [x] Pin the runtime and package manager, lock dependencies and validate configuration.
- [x] Serve RU, KK and EN using strict TypeScript, Next App Router, next-intl, Tailwind and SCSS.
- [x] Pass formatting, lint, types, unit tests, production build and browser smoke tests.
- [ ] Measure the production baseline. Review changes, commit, push and verify exact-SHA CI.

## Validation and recovery

Run pnpm install --frozen-lockfile, pnpm verify, pnpm build and pnpm test:e2e. Inspect CI reports for the checkpoint on development/m-coffee. Retry failed infrastructure after diagnosing it and keep the phase open until green.

## Decisions, discoveries, blockers and outcomes

Use the observed Node 24 LTS runtime. Keep locale routing explicit and support direct static paths. Service credentials are unnecessary for this milestone. Local gates passed. See [baseline evidence](../qa/phase-01.md). Verify the pushed checkpoint and workflow before continuing.
