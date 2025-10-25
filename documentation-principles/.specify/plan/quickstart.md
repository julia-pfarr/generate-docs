# Quickstart — Generate docs with the Documentation Assistant (Sphinx + GitHub Pages)

Prereqs
- Python 3.8+ and pip
- Git installed; repository cloned locally
- (Optional) GitHub repository + Actions enabled for Pages

1. Initialize Sphinx
   - From repo root:
     python -m venv .venv && source .venv/bin/activate
     pip install -U sphinx
     sphinx-quickstart docs

2. Add project metadata
   - Edit docs/conf.py:
     - project = "Your Project"
     - html_title, author
     - Include license and recommended citation_text in conf or a dedicated landing page.

3. Configure AI provider
   - Set environment variable for provider API key (do NOT commit keys):
     export AI_API_KEY="..."
   - For CI (GitHub Actions), add as repository secret (Settings -> Secrets).

4. Create a DocSession and generate drafts
   - Use the CLI/web assistant to start a session and answer guided questions:
     - Primary audience
     - Minimal reproducible example (small dataset or snippet)
     - Typical user tasks
   - The agent will emit Sphinx-friendly Markdown/reST with a provenance header.

5. Review and attribution
   - Every generated page MUST include a provenance block near top:
     - agent, model (if known), prompt summary, human reviewer name.
   - Verify licensing/citation text on landing page.

6. Build locally
   - From docs/:
     make html
   - Preview build at docs/_build/html/index.html

7. Publish via GitHub Pages (recommended using Actions)
   - Example minimal workflow (.github/workflows/pages.yml):
     - name: Build and deploy docs
       on: [push]
       jobs:
         build:
           runs-on: ubuntu-latest
           steps:
             - uses: actions/checkout@v4
             - name: Setup Python
               uses: actions/setup-python@v4
               with:
                 python-version: '3.10'
             - name: Install deps
               run: |
                 python -m pip install --upgrade pip
                 pip install sphinx
             - name: Build docs
               run: make -C docs html
             - name: Deploy to GitHub Pages
               uses: peaceiris/actions-gh-pages@v4
               with:
                 publish_dir: docs/_build/html
                 publish_branch: gh-pages
                 github_token: ${{ secrets.GITHUB_TOKEN }}

8. Retention & privacy
   - Do not persist user code/data unless explicitly opted-in.
   - If storing prompts/outputs, document retention policy in docs and expose opt-out.

Notes
- Mandatory human review step required before merging generated docs.
- Ensure landing page prominently shows license and citation guidance.