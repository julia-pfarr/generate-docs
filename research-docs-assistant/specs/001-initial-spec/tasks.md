# Tasks for 001-setup — Documentation Assistant (AI-guided, Sphinx, GH Pages)

Phase 1: Setup (project initialization)
- [ ] T001 Create repository directories and scaffold: /Users/julia/Desktop/docs/backend/, /Users/julia/Desktop/docs/frontend/, /Users/julia/Desktop/docs/tests/, /Users/julia/Desktop/docs/docs/
- [ ] T002 Initialize Python venv and base files: create /Users/julia/Desktop/docs/pyproject.toml, /Users/julia/Desktop/docs/requirements.txt, /Users/julia/Desktop/docs/.venv/ (instructions in README)
- [ ] T003 Add project README and CODE_OF_CONDUCT: /Users/julia/Desktop/docs/README.md
- [ ] T004 Initialize Sphinx docs skeleton: run sphinx-quickstart and commit resulting files under /Users/julia/Desktop/docs/docs/ (conf.py at /Users/julia/Desktop/docs/docs/conf.py)

Phase 2: Foundational (blocking prerequisites - MUST complete before user stories)
- [ ] T005 Create OpenAPI contract copy for runtime validation: copy /Users/julia/Desktop/docs/specs/001-setup/contracts/openapi.yaml → /Users/julia/Desktop/docs/backend/openapi.yaml
- [ ] T006 Implement file-based storage adapter (MVP) at /Users/julia/Desktop/docs/backend/storage/file_store.py
- [ ] T007 Implement models (Pydantic) for Project, DocSession, Prompt, GeneratedOutput at /Users/julia/Desktop/docs/backend/app/models.py
- [ ] T008 Implement API server scaffold (FastAPI) at /Users/julia/Desktop/docs/backend/app/main.py with routing to /api/
- [ ] T009 Add OpenAPI validation/contract loader at /Users/julia/Desktop/docs/backend/app/openapi_loader.py
- [ ] T010 Add provenance validation middleware to reject outputs missing required provenance headers: /Users/julia/Desktop/docs/backend/app/middleware/provenance.py

Phase 3 (US1) — P1: Core authoring flow: create session, submit prompt, receive generated output (API)
- [ ] T011 [US1] Implement Projects endpoints (POST /projects, GET /projects) at /Users/julia/Desktop/docs/backend/app/api/projects.py
- [ ] T012 [US1] Implement Sessions endpoints (POST /sessions, GET /sessions/{id}) at /Users/julia/Desktop/docs/backend/app/api/sessions.py
- [ ] T013 [US1] Implement Prompts endpoint (POST /sessions/{id}/prompts) at /Users/julia/Desktop/docs/backend/app/api/prompts.py
- [ ] T014 [US1] Implement Outputs endpoint (GET /sessions/{id}/outputs) at /Users/julia/Desktop/docs/backend/app/api/outputs.py
- [ ] T015 [US1] Add integration test for end-to-end session → prompt → output flow at /Users/julia/Desktop/docs/tests/test_api_sessions.py

Phase 4 (US2) — P1: Provenance & human-review enforcement
- [ ] T016 [US2] Implement generation service that attaches provenance metadata (agent, model?, prompt_summary, human_reviewer) at /Users/julia/Desktop/docs/backend/app/services/generation.py
- [ ] T017 [US2] Ensure generated outputs persisted include provenance in storage schema at /Users/julia/Desktop/docs/backend/storage/file_store.py (update storage format)
- [ ] T018 [US2] Add automated validator test that fails outputs without provenance at /Users/julia/Desktop/docs/tests/test_provenance_validator.py

Phase 5 (US3) — P2: Storage opt-in, retention policy & privacy docs
- [ ] T019 [US3] Add opt-in flag for persistence to SessionCreate schema and UI/CLI surfaces at /Users/julia/Desktop/docs/backend/app/models.py and /Users/julia/Desktop/docs/backend/app/api/sessions.py
- [ ] T020 [US3] Implement retention policy enforcement job/script at /Users/julia/Desktop/docs/backend/scripts/enforce_retention.py
- [ ] T021 [US3] Add privacy & retention documentation at /Users/julia/Desktop/docs/docs/privacy.md

Phase 6 (US4) — P2: Sphinx templates & template generator for required doc styles
- [ ] T022 [US4] Create Sphinx-friendly templates for landing, tutorial, how-to, explanation, reference, faq at /Users/julia/Desktop/docs/docs/templates/ (files: landing.rst, tutorial.rst, howto.rst, explanation.rst, reference.rst, faq.rst)
- [ ] T023 [US4] Implement template generator that produces pages with provenance header and citation insertion at /Users/julia/Desktop/docs/backend/app/templates/generator.py
- [ ] T024 [US4] Add example generated pages to /Users/julia/Desktop/docs/docs/examples/ demonstrating provenance header and citation on landing

Phase 7 (US5) — P2: CLI & developer UX
- [ ] T025 [US5] Implement CLI scaffold with commands: init-session, send-prompt, list-outputs, export-output at /Users/julia/Desktop/docs/backend/cli.py
- [ ] T026 [US5] Add CLI docs and usage examples in /Users/julia/Desktop/docs/docs/cli.md
- [ ] T027 [US5] Add tests for CLI commands at /Users/julia/Desktop/docs/tests/test_cli.py

Phase 8 (US6) — P3: CI/CD & Pages deployment
- [ ] T028 [US6] Add GitHub Actions workflow to build Sphinx and deploy to gh-pages at /Users/julia/Desktop/docs/.github/workflows/pages.yml
- [ ] T029 [US6] Add integration test / smoke test script for CI that builds docs: /Users/julia/Desktop/docs/scripts/ci_build_docs.sh

Final Phase: Polish & cross-cutting concerns
- [ ] T030 Create automated provenance check that runs before publishing (pre-merge or CI) at /Users/julia/Desktop/docs/backend/app/validators/prepublish.py
- [ ] T031 Add contributor guide and documentation-review checklist requiring human reviewer sign-off at /Users/julia/Desktop/docs/docs/CONTRIBUTING.md
- [ ] T032 Update agent context files and templates to reflect final governance text at /Users/julia/Desktop/docs/.specify/agents/copilot-context.md and /Users/julia/Desktop/docs/.github/copilot-instructions.md

Dependencies
- Foundational tasks T005–T010 must complete before implementing any API endpoints (T011–T014).
- Provenance middleware T010 must be available before generation service (T016) and outputs tests (T018).
- Templates generation (T023) depends on templates files created in T022.
- CLI (T025) depends on API endpoints (T011–T014) and generation service (T016).
- CI workflow (T028) should be added after docs build works locally (T022–T024) and tests are passing.

Parallel execution examples
- [P] Tasks that can run in parallel by different engineers:
  - Backend model & storage work: T006, T007, T005 (parallelizable implementation & review) — mark T006 and T007 with [P] if executing.
  - Sphinx template creation and example pages: T022 and T024 are parallelizable.
  - CLI docs (T026) can be written while CLI implementation (T025) is in progress.
  - Tests (T015, T018, T027) can be authored in parallel to implementation once endpoints and modules are defined.

Implementation strategy (MVP first, incremental delivery)
- MVP scope: Implement Foundational tasks (T005–T010) + Core authoring flow (T011–T015) + Provenance enforcement (T016–T018) and basic Sphinx landing template (T022 minimal) so docs can be generated locally with provenance and reviewed.
- Iterative rollout: After MVP, add opt-in persistence & retention (T019–T021), full templates (T022–T024), CLI (T025–T027), then CI/CD (T028–T029).
- Keep tests minimal for MVP (smoke tests + provenance validator) and expand coverage in polish phase.

Format validation
- All tasks follow the required checklist format: "- [ ] T### [P]? [US#]? Description with file path"

Generated artifact
- /Users/julia/Desktop/docs/specs/001-setup/tasks.md (this file)

Summary
- Total tasks: 32
- Task count per user story:
  - US1 (Core API flow): 5 tasks (T011–T015)
  - US2 (Provenance): 3 tasks (T016–T018)
  - US3 (Privacy & retention): 3 tasks (T019–T021)
  - US4 (Sphinx templates): 3 tasks (T022–T024)
  - US5 (CLI): 3 tasks (T025–T027)
  - US6 (CI/CD): 2 tasks (T028–T029)
  - Setup/Foundational/Polish (non-story): 13 tasks (T001–T010, T030–T032)
- Parallel opportunities identified: storage/model implementation, template creation, tests authoring, CLI docs
- Independent test criteria (per story):
  - US1: Session create → submit prompt → receive output with HTTP 201/202 and output stored (test: /Users/julia/Desktop/docs/tests/test_api_sessions.py)
  - US2: Every generated output contains provenance object; validator rejects publish if missing (test: /Users/julia/Desktop/docs/tests/test_provenance_validator.py)
  - US3: Persistence occurs only when session.opt_in_persistence == true; retention job removes old outputs per policy (test: /Users/julia/Desktop/docs/tests/test_retention.py)
  - US4: Templates render into docs/_build/html with provenance header visible (manual/CI smoke test: /Users/julia/Desktop/docs/scripts/ci_build_docs.sh)
  - US5: CLI commands run locally to create session and fetch outputs (test: /Users/julia/Desktop/docs/tests/test_cli.py)
- Suggested MVP scope: Foundational tasks (T005–T010) + US1 + US2 + minimal template (T022 minimal) — implement tasks T005–T018 and T022 (landing.rst) first.

Notes
- If you prefer a DB-backed storage instead of file-based storage, replace T006 with DB adapter tasks and add migration tasks before T011.
- If tests-first is desired, convert implementation tasks to include corresponding test tasks immediately before each implementation task.
