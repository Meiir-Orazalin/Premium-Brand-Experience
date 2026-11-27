# Phase 00 · Discovery and repository audit

## Objective and context

Make the approved project recoverable from Git and establish a verifiable development branch. The workspace and upstream repository were empty. No application, prior instructions, workflows, or brand media were present. Local tools reported Node 24.15.0 and pnpm 11.16.0. GitHub CLI was absent from PATH. Git HTTPS reads succeeded.

## Milestones and progress

- [x] Inspect workspace, clone origin, fetch, inspect branches, history, authentication availability and repository contents.
- [x] Record the approved routes, scope, delivery sequence, design, architecture, budgets, QA and asset inventory.
- [x] Establish fixture-first integration strategy and recovery instructions.
- [x] Publish the documentation checkpoint and verify its remote ref.

## Acceptance and validation

Review coverage against the brief and resolve internal Markdown links. Run git diff --check, git diff --cached --check and inspect the staged diff. Commit the reviewed files, push development/m-coffee, fetch and compare HEAD to git ls-remote. Application CI and browser checks are not applicable in this empty-repository documentation phase.

## Decisions, discoveries and blockers

Use the shared adapter decision in ADR 0001. Live CMS, maps, deployment and approved media remain unverified. No production action is authorized. The typed fixture path allows development before those inputs are available.

## Recovery and outcome

Documentation was published and the matching remote SHA verified. Inspect Git and the remote ref for publication status. Retry a failed push after restoring authorized access. Begin Phase 01 only after this checkpoint exists remotely.
