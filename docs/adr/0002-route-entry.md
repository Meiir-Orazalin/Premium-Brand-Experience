# 0002 · Route entry with native links

Keep Next Link and browser history in charge of navigation. A locale-level App Router template animates incoming content with a bounded opacity/transform effect under prefers-reduced-motion: no-preference. Direct loads remain readable from the first frame. No overlay or timer holds a click, so an interrupted transition can unmount immediately.

An exit-first router wrapper would require interception, cancellation, focus restoration and special handling for back/forward. Native view transitions would add browser-specific behavior at this stage. The chosen approach gives up coordinated outgoing frames. Reassess in Phase 09 with real route layouts and motion measurements.
