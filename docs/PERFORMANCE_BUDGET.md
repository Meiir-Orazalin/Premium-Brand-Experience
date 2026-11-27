# Performance acceptance

For production builds, record URL, commit, browser/Lighthouse versions, mobile CPU/network emulation, cache state and repeated-run median. Target mobile Lighthouse performance ≥90, accessibility and SEO ≥95, LCP ≤2.5 s and CLS ≤0.1. Assess field INP ≤200 ms when sufficient real visits exist.

Provisional homepage transfer limits: 250 KiB compressed initial JavaScript, 300 KiB mobile poster, 1 MiB critical transfer and 200 KiB initial fonts. Establish the framework baseline in Phase 01. Report budget changes in an ADR. Load the LCP photograph eagerly and defer optional maps, video and heavier motion. Review main-thread long tasks during scrolling.
