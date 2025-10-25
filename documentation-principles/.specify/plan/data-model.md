# data-model.md — Key entities

Entities:

1. Project
   - id: UUID
   - name: string
   - repository_url: string
   - license: string (optional)
   - target_audience: string
   - created_at, updated_at

2. User
   - id: UUID
   - display_name: string
   - email: string (optional, opt-in)
   - role: enum (owner, maintainer, contributor)

3. DocSession
   - id: UUID
   - project_id: UUID
   - user_id: UUID (creator)
   - templates_used: list(template_id)
   - prompts: list(prompt_id)
   - generated_outputs: list(output_id)
   - status: enum (draft, reviewed, published)
   - created_at, updated_at

4. Template
   - id: UUID
   - type: enum (tutorial, howto, explanation, reference, faq, landing)
   - schema: JSON schema describing required sections
   - created_at

5. Prompt
   - id: UUID
   - session_id: UUID
   - role: enum (system, user, assistant)
   - content: text
   - timestamp

6. GeneratedOutput
   - id: UUID
   - session_id: UUID
   - content: markdown/html
   - provenance: { model: string, provider: string, prompt_ids: [] }
   - human_edits: text summary
   - attribution: text
   - created_at

Relationships:
- Project 1..* DocSession
- DocSession 1..* Prompt
- DocSession 1..* GeneratedOutput
- Template referenced by DocSession