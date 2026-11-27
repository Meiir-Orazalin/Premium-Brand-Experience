# Phase 02 · Architecture vertical slice

## Objective and context

Render one localized story from an interchangeable fixture or published Sanity dataset. Phase 01 passed locally and in Actions at 710414a. No live CMS configuration was supplied.

## Milestones and acceptance

- [x] Define and test the story data contract, translation fallback and adapter selection.
- [x] Render all locales through a server component, responsive media and localized links.
- [x] Validate a CSS route-entry transition with native links, history, static and reduced-motion behavior.
- [x] Inspect desktop/mobile output, run pnpm verify, pnpm build and pnpm test:e2e, push the reviewed checkpoint and check exact-SHA CI.

## Decisions and recovery

Use an explicit source setting and a read-only, parameter-free GROQ query for the singleton. Keep optional credentials server-side. Use the fixture when developing offline. Report malformed live data through the route error boundary. Revert animation in isolation if it interferes with navigation. Live service evidence requires a configured development dataset.

## Discoveries, blockers and outcomes

Production assets and live services remain pending. Record local and remote evidence independently.

The fixture renders end to end. Desktop and mobile Chrome captures are in docs/qa/phase-02-*.webp. Both showed zero horizontal overflow. Inspection found a missing page title, corrected before publication. Sanity transport is tested with a mocked client. Live integration is unverified.

Published ca44088. [Exact-SHA CI passed](https://github.com/Meiir-Orazalin/Premium-Brand-Experience/actions/runs/45951168964).
