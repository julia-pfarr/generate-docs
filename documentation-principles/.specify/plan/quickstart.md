# Quickstart — Build & publish docs (Sphinx + GitHub Pages)

1. Install Sphinx in your environment and initialize docs/ via `sphinx-quickstart`.
2. Configure the project to use the assistant:
   - Provide an AI provider API key via environment variable or CI secret (not in repo).
   - Add project metadata (name, license, citation) in docs/_config.yml or conf.py.
3. Use the web or CLI assistant to create a DocSession and generate drafts.
4. Review generated drafts, add attribution block near top of pages, and confirm licensing/citation text.
5. Commit docs/ and push to the repository.
6. GitHub Actions workflow builds Sphinx and publishes HTML to GitHub Pages.

Notes:
- Ensure GH Actions secrets are configured (if using private resources).
- Do not commit API keys to repo.