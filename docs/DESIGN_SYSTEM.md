# Art direction

Use a temporary typographic %M% mark, editorial type, warm directional light, natural texture, asymmetric spreads and photography with deliberate negative space. Use the Delta Cafés reference for composition once supplied. Develop an independent mobile crop and reading order.

Base colors are obsidian #100D0B, espresso #241914, mocha #483024, bronze #B28D67 and cream #E8D5BD. Assign semantic tokens for surfaces, foreground, accents, focus, type, spacing, grid, breakpoints, borders, elevation, motion and layers. Test foreground/surface pairings. Tailwind owns routine layout utilities. SCSS Modules own feature composition, masks and art-directed responsive geometry.

Prototype before scaling. Verify real font glyphs for Ә Ғ Қ Ң Ө Ұ Ү Һ І and Russian Cyrillic. Inspect mobile and desktop captures, reflow, focus and control sizing.

The cover pairs two cuts of Cormorant Garamond at weight 500 with the system sans. Desktop places the title opposite the espresso stream. Mobile crops to the machine, then anchors the title over the lower shadows. Reuse Masthead and EditorialLink across public routes. The central mark stays geometrically centered as the side controls change width. Shared tokens live in src/styles/tokens.css. Switch the cover layout at 640px and stack editorial spreads at 720px.
