# Research: Design decisions for Documentation Assistant (AI-guided, Sphinx, GitHub Pages)

Decision: Use an AI-assisted authoring workflow with human-in-the-loop review and explicit attribution.
Rationale: AI accelerates drafting but human review preserves accuracy, licensing correctness, and domain expertise.
Alternatives considered:
- Fully-automated generation without human review — rejected (risk to accuracy, licensing).
- Local-only model — more privacy but higher ops cost; choose hosted-by-user API by default.

Decision: Deploy final rendered documentation with Sphinx → HTML, published via GitHub Pages (GitHub Actions).
Rationale: Sphinx supports rich doc types, is common in research OSS, integrates with CI/CD and ReadTheDocs patterns.

Decision: Minimal persistent storage; retain session metadata and prompts, but do not upload source code by default.
Rationale: Minimize privacy risk; store prompts and generated outputs for reproducibility with opt-in project uploads.

Decision: Attribution and provenance metadata are mandatory for generated content (author = AI agent; human editor recorded).
Rationale: Ensures transparency and helps downstream users assess accuracy and licensing.

Decision: Default licensing guidance: encourage explicit license and citation instructions in generated docs (project must provide license).
Rationale: Research OSS often requires citation; documentation should surface recommended citation text.

Decision: Authentication & secrets: require user-provided API keys for any AI provider; never store keys in repo.
Rationale: Security best practice.

Notes / Assumptions:
- AI provider/model unspecified: system will accept user-supplied provider/API key (documented in quickstart).
- Build/run environment is GitHub Actions for pages; user must supply GH_TOKEN if necessary.