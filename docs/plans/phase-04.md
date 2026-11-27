# Phase 04 · Cinematic hero

## Objective and context

Extend the verified photographic cover into three interactive scenes. Phase 03 was verified on origin at f567ad4. Keep static content usable before hydration or on image failure.

## Milestones and acceptance

- [x] Implement localized scene controls, photographic cards, playback, progress, navigation and focus behavior.
- [x] Test all three scenes, pause and resume, missing media, keyboard/mobile and reduced motion.
- [x] Inspect desktop and mobile renders. Run pnpm verify, pnpm build and pnpm test:e2e.
- [ ] Review, publish the scoped checkpoint and verify exact-SHA Actions.

## Decisions, discoveries, blockers and recovery

Playback is opt-in. Suspend timers offscreen or in a hidden tab. Preserve usable content without JavaScript. Use lightweight photographic scenes while production video and brand assets are unavailable. Roll back via a corrective commit based on the Phase 03 cover if necessary.

Production Chrome screenshots at 1440 × 900 and 390 × 844 are in docs/qa/phase-04-*.webp. Both layouts fit without horizontal overflow. Independent review caught a focus issue in the rotating scene. Stop rotation on focus entry and use browser clock tests to check advance and pause.

The 320px Kazakh coffee headline exceeded the available grid track. Reduced the narrow display size, constrained the grid and added nine locale/scene width checks.
