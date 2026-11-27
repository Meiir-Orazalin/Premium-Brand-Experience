# Application architecture

Next.js App Router owns HTTP routing and server rendering on Vercel. Localized server pages call a typed content repository, which adapts fixtures or validated GROQ results into the same domain shapes. Use next-intl for static labels and locale formatting. Localized editorial fields fall back to RU with missing-field diagnostics. Preserve the active detail slug on locale changes.

Public home, about, menu, locations, journal, contact and detail routes use cached published content with revalidation after content changes. Draft requests read uncached server-side data behind verified preview endpoints. Studio has an isolated route and dependency boundary. Lazy-load MapLibre on the locations view. Keep the HTML list available throughout. Use Cloudinary responsive video when configured.

Organize features by home, menu, locations and journal. Share UI, layout, motion, localization and integration code only where a second consumer exists. Keep interactions local to their feature. Record route-specific cache tags and invalidation tests as queries are introduced.
