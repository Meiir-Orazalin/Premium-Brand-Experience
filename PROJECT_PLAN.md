# Delivery sequence

Each row depends on the previous row passing the checkpoint gate in AGENTS.md. Create or update its execution plan before implementation.

| Phase                  | Deliverable                                                                                            | Evidence required                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 00 Discovery           | Repository audit, specification, execution framework and architectural decisions                       | Documentation review, clean staged diff and remote checkpoint                                          |
| 01 Foundation          | Next App Router, strict TS, pinned Node/pnpm, Tailwind, SCSS, next-intl, env, CI and test harness      | Three locale routes, smoke tests, formatting, lint, types, build and Actions                           |
| 02 Vertical slice      | Typed localized section, fixture and Sanity adapters, media and native navigation transition prototype | Adapter contract tests, rendered slice and documented live-service status                              |
| 03 Art direction       | Typographic identity, tokens, components and motion primitives                                         | Real desktop/mobile prototype captures, glyph and keyboard checks                                      |
| 04 Hero                | Responsive navigation and three cinematic scenes                                                       | Inspect both layouts, switch, pause, test reduced motion and missing media                             |
| 05 Homepage            | Philosophy, collection, preparation story, spaces, journal and footer                                  | All CTAs, mobile scrolling, no overflow, visual inspection                                             |
| 06 About and menu      | Brand story, catalog filters, details and category transitions                                         | Three languages, deterministic filtering, keyboard and responsive checks                               |
| 07 Locations           | List, filters, branch routes, map, synchronization and directions                                      | Test valid provider configuration and list-only fallback, record provider needs                        |
| 08 Journal and contact | Categories, articles, rich text, contacts and error states                                             | Navigation, metadata, content and layout tests                                                         |
| 09 Motion              | Scoped GSAP, coordinated Lenis loop, route and scroll refinement                                       | Rapid navigation, history, cleanup, reduced motion and performance comparison                          |
| 10 CMS and locales     | Full schemas, GROQ, Studio, published/draft workflows, visual editing and translations                 | Schema contracts, key parity, all locale routes and live checks where configured                       |
| 11 Production QA       | SEO, security, accessibility, visual and performance review                                            | Document production measurements, browser/viewport evidence, resolve critical defects                  |
| 12 Release readiness   | Live integrations, approved assets and content, operational handover                                   | Exact-commit checks, release and rollback evidence. Mark blocked or preview ready until all gates pass |
