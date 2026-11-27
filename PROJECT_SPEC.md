# %M% brand experience

## Audience and purpose

Visitors discover the brand, explore drinks, find a café and read the journal. RU is the default. KK and EN must support the same journeys. Use “More than coffee.” as provisional copy. Demonstrations must be identified in the interface. Withhold unverified prices, ingredients, allergens, hours, addresses and business claims. Exclude accounts, loyalty, reservations, commerce, payments and a separate backend.

## Routes and acceptance

| Route                      | Visitor outcome                                                                                                  |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| /                          | Enter the Russian experience                                                                                     |
| /[locale]                  | Navigate seven coordinated sections described below                                                              |
| /[locale]/about            | Read the brand story in an editorial layout                                                                      |
| /[locale]/menu             | Switch categories, inspect featured products, availability and accessible details. Format verified prices in KZT |
| /[locale]/locations        | Filter a usable list, synchronize selected cards and map markers                                                 |
| /[locale]/locations/[slug] | Inspect branch photography, verified hours and directions                                                        |
| /[locale]/journal          | Browse featured articles and filter by category                                                                  |
| /[locale]/journal/[slug]   | Read localized rich text, date and metadata                                                                      |
| /[locale]/contact          | Find verified contact channels                                                                                   |
| /studio                    | Manage content through Sanity Studio                                                                             |

Homepage sequence: fullscreen photographic hero with floating navigation, central wordmark, frame, headline, CTA, interactive editorial cards, scene progress and pause; asymmetric philosophy spread; filterable signature collection; scroll-driven preparation story; spaces and branch links; featured journal and grid; footer with large wordmark, navigation, contacts and language switcher. Hero scenes cover the brand, the coffee and the space. Provide independent mobile composition and navigation.

## Editorial responsibilities

Sanity models cover siteSettings, homepage, heroSlide, aboutPage, menuCategory, menuItem, location, journalPost, journalCategory, navigation, socialLink, seo and localized fields. Validate input, provide editor previews, stable slugs and references. Share language-independent prices and coordinates. Detect missing translations. Keep UI strings separate from editorial fields. Secure draft access, validate preview requests and webhooks, and keep write credentials server-side. Isolate fixture/development data. Test published and preview modes separately.

## Experience and release criteria

Follow the design, motion, assets and performance contracts under docs/. Maintain working direct URLs, keyboard navigation, focus, responsive reflow, visible server content and static media fallbacks. Supply loading, empty, error and missing-page states. Use localized metadata, canonicals, hreflang, sitemap and robots. Structured data must reflect approved facts. Keep internal development pages unavailable in production. Target WCAG 2.2 AA across all public routes.

Validate on production builds with unit/contract tests, Playwright journeys, screenshot review, axe, keyboard testing and Lighthouse CI. Cover 320–1920px, reduced motion, browser history, failed media, unavailable maps, and Chromium, Firefox and WebKit where available. Release requires approved multilingual content and media, verified live integrations, exact-commit CI, deployment configuration and rollback documentation. Deployment, release tagging and protected branch merges require authorization.

CI runs on development pushes and pull requests with least-privilege permissions, trusted actions pinned to verified commit SHAs where practical, and bounded retention for reports and failure artifacts. Review dependency advisories, validate environment-specific configuration and document security headers including the CSP.
