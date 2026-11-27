# Working on %M%

Build the trilingual coffee brand experience in PROJECT_SPEC.md. Follow user-approved requirements, these instructions, the specification, approved ADRs, PROJECT_PLAN.md, the active execution plan, then existing code and tests.

- Resume by reading docs/DEVELOPMENT_STATUS.md and the active plan, checking git status/history, fetching origin and verifying the prior checkpoint and its CI.
- Use strict TypeScript, server-rendered content, small interactive client boundaries and typed fixture/CMS models. Follow docs/ARCHITECTURE.md. Keep public bundles independent of Studio.
- Foundation command contract: pnpm install --frozen-lockfile, pnpm dev, pnpm verify, pnpm build, pnpm test:e2e and pnpm perf. Check package.json for availability as infrastructure lands.
- Test critical logic with Vitest, browser journeys with Playwright, accessibility with axe and keyboard checks. Review real mobile and desktop screenshots after visual changes.
- Keep secrets out of client bundles, fixtures, logs and Git. Validate external input. Preserve production data and branch protections.
- Work on development/m-coffee. Preserve unrelated changes. Review and stage scoped files, check diffs, update the plan, status and changelog, then commit with the approved phase message.
- Push, fetch and check the remote ref or ancestry. Verify required workflows for the checkpoint SHA. Remain in the phase until all applicable checks pass. Use corrective commits. Never force-push. Production deployment and release tagging require authorization.
