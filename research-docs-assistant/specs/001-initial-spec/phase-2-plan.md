# Phase 2 Implementation Plan — Documentation Assistant (001-setup)

## Goal
Implement core features to enable AI-guided documentation authoring, Sphinx rendering, and GitHub Pages deployment with mandatory provenance and opt-in retention.

## Milestones
1. M1 — API & data layer (2w)
   - Implement API endpoints per contracts/openapi.yaml (projects, sessions, prompts, outputs).
   - Persist minimal entities (Project, DocSession, Prompt, GeneratedOutput).
   - Acceptance: CRUD endpoints pass integration tests; provenance stored with outputs.

2. M2 — Agent integration & CLI (1.5w)
   - Implement CLI to create DocSessions and submit prompts to agent.
   - Wire agent using environment-provided API key; include provenance header in outputs.
   - Acceptance: CLI can create session, send prompt, and receive/stash output with provenance.

3. M3 — Templates & Sphinx output (1.5w)
   - Add Sphinx templates for landing, tutorial, how-to, explanation, reference, FAQ.
   - Ensure generated pages include provenance block and citation/license visibility.
   - Acceptance: Local build produces pages with provenance and landing citation.

4. M4 — CI/CD & Pages (1w)
   - Add GitHub Actions workflow to build Sphinx and publish to gh-pages.
   - Acceptance: Push to main/gh-pages branch triggers build and publishes HTML.

5. M5 — Privacy & retention controls (1w)
   - Add opt-in UI/flag for storing prompts/outputs and documented retention policy.
   - Acceptance: Data persisted only when opt-in; retention policy documented in docs.

## Tasks (by priority)
- Implement API server scaffold and models (Project, DocSession, Prompt, GeneratedOutput).
- Add OpenAPI-driven validation for incoming requests.
- Implement storage adapter (file-based or DB per copilot-instructions; start with file-based for MVP).
- Implement CLI commands: init-session, send-prompt, list-outputs, export-output.
- Implement agent adapter layer: accepts provider config via env vars; ensures keys not persisted.
- Create Sphinx templates and template-generation code to emit provenance header.
- Add example docs and sample generated pages in docs/examples/.
- Add integration tests for API and CLI flows.
- Add GitHub Actions workflow (pages.yml) in .github/workflows/.
- Document retention and opt-in flow in docs/privacy.md and quickstart.

## Risks & Mitigations
- Risk: Sensitive data leakage via prompts/outputs.
  - Mitigation: Default no-persistence; opt-in only; document retention; encrypt persisted data if needed.
- Risk: Incorrect or missing provenance metadata.
  - Mitigation: Validator that rejects generated output lacking provenance before publish.
- Risk: CI publishing secrets misconfiguration.
  - Mitigation: Document secrets usage and test with a dedicated test repo/branch.

## Owners & Estimates
- Backend (API + storage + tests): 2 dev-weeks — Owner: backend
- Agent integration + CLI: 1.5 dev-weeks — Owner: frontend/backend cross
- Sphinx templates + examples: 1.5 dev-weeks — Owner: docs
- CI + privacy features: 2 dev-weeks — Owner: infra/docs

## Acceptance Criteria (Project-level)
- All API endpoints defined in contracts/openapi.yaml are implemented and tested.
- Generated documents include a provenance header and visible citation/license on landing.
- Default behavior does not persist user code/data; opt-in flow documented and working.
- GitHub Actions build publishes docs to gh-pages on push.
- Agent context file updated and reviewed (copilot context contains new principles).

## Next Commands (local)
- Run agent-context updater (done; repeat if you edit agent files):
  ./.specify/scripts/bash/update-agent-context.sh copilot

- Run local dev server / tests (example):
  # adapt to your implementation
  python -m venv .venv && source .venv/bin/activate
  pip install -r requirements.txt
  pytest tests/

- Build docs locally:
  make -C docs html

## Next Commands (repo)
- Commit and push branch 001-setup:
  git add specs/001-setup
  git commit -m "chore(001-setup): phase-2 implementation plan"
  git push origin 001-setup

## Follow-ups
- Decide persistent storage (file vs DB). If DB chosen, add migrations and secrets handling.
- Update .specify/templates/spec-template.md and tasks-template.md to require provenance metadata and review tasks.