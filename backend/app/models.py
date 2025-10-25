from typing import Optional, List
from pydantic import BaseModel, Field
from datetime import datetime


def now_iso() -> str:
    return datetime.utcnow().isoformat() + "Z"


class ProjectCreate(BaseModel):
    name: str
    repository_url: str
    license: Optional[str] = None
    citation_text: Optional[str] = None
    target_audience: Optional[str] = None


class Project(ProjectCreate):
    id: str
    created_at: str = Field(default_factory=now_iso)
    updated_at: str = Field(default_factory=now_iso)


class SessionCreate(BaseModel):
    project_id: str
    template_type: str  # enum validated in runtime/openapi/schema
    target_audience: Optional[str] = None
    opt_in_persistence: Optional[bool] = False


class DocSession(BaseModel):
    id: str
    project_id: str
    user_id: Optional[str] = None
    template_type: str
    prompts: List[str] = []
    generated_outputs: List[str] = []
    status: str = "draft"
    created_at: str = Field(default_factory=now_iso)


class PromptCreate(BaseModel):
    role: str
    content: str


class Prompt(BaseModel):
    id: str
    session_id: str
    role: str
    content: str
    timestamp: str = Field(default_factory=now_iso)


class Provenance(BaseModel):
    agent: str
    model: Optional[str] = None
    prompt_summary: Optional[str] = None
    human_reviewer: Optional[str] = None


class GeneratedOutput(BaseModel):
    id: str
    session_id: str
    content: str
    provenance: Provenance
    human_edits: Optional[str] = None
    created_at: str = Field(default_factory=now_iso)