# Phase 03 · Art direction and design system

## Objective and context

Develop the homepage as a photographic typographic cover with separate desktop and mobile crops. Phase 02 passed remote CI at ca44088. Use the original espresso illustration, label demo material and keep the wordmark typographic.

## Milestones and acceptance

- [x] Apply semantic design tokens, reusable navigation and link treatment, fluid editorial typography and independent mobile composition.
- [x] Check actual font coverage for Russian and Kazakh, including extended characters.
- [x] Inspect production desktop/mobile screenshots and refine any clipping, contrast or spacing issues.
- [ ] Run pnpm verify, pnpm build and browser journeys. Review and push the checkpoint and verify CI.

## Decisions, discoveries, blockers and recovery

Self-host a licensed display face with a serif fallback. Static content must remain legible while fonts load. The Delta reference asset is pending. Use the written brief until supplied. Recover the prior vertical slice from the preceding verified checkpoint. Outcomes pending.

The 1440 × 900 and 390 × 844 renders were inspected in Chrome. Both fit viewport width, with readable cream headlines and separate mobile image placement. The masthead and tokens are shared with the story page. Both final WOFF2 cmaps passed the Russian/Kazakh/English glyph check. See the two Phase 03 captures under docs/qa.

Published f567ad4 to development/m-coffee and verified its successful [CI workflow](https://github.com/Meiir-Orazalin/Premium-Brand-Experience/actions/runs/45951721753).
