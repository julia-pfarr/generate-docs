import os
import json
import uuid
from datetime import datetime
from typing import List, Dict, Any

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "data"))


def _ensure_data_dir():
    os.makedirs(BASE_DIR, exist_ok=True)


def _write_json(path: str, obj: Any):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(obj, f, indent=2, ensure_ascii=False)


def _read_json(path: str):
    if not os.path.exists(path):
        return None
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def _id_filename(prefix: str, id_: str):
    return os.path.join(BASE_DIR, f"{prefix}-{id_}.json")


# Projects
def save_project(project: Dict[str, Any]) -> Dict[str, Any]:
    _ensure_data_dir()
    if "id" not in project or not project["id"]:
        project["id"] = str(uuid.uuid4())
    now = datetime.utcnow().isoformat() + "Z"
    project.setdefault("created_at", now)
    project["updated_at"] = now
    path = _id_filename("project", project["id"])
    _write_json(path, project)
    return project


def list_projects() -> List[Dict[str, Any]]:
    _ensure_data_dir()
    out = []
    for fn in os.listdir(BASE_DIR):
        if fn.startswith("project-") and fn.endswith(".json"):
            obj = _read_json(os.path.join(BASE_DIR, fn))
            if obj:
                out.append(obj)
    return out


# Sessions
def save_session(session: Dict[str, Any]) -> Dict[str, Any]:
    _ensure_data_dir()
    if "id" not in session or not session["id"]:
        session["id"] = str(uuid.uuid4())
    now = datetime.utcnow().isoformat() + "Z"
    session.setdefault("created_at", now)
    session["updated_at"] = now
    path = _id_filename("session", session["id"])
    _write_json(path, session)
    return session


def get_session(session_id: str) -> Dict[str, Any]:
    _ensure_data_dir()
    return _read_json(_id_filename("session", session_id))


# Prompts
def save_prompt(prompt: Dict[str, Any]) -> Dict[str, Any]:
    _ensure_data_dir()
    if "id" not in prompt or not prompt["id"]:
        prompt["id"] = str(uuid.uuid4())
    if "timestamp" not in prompt:
        prompt["timestamp"] = datetime.utcnow().isoformat() + "Z"
    path = _id_filename("prompt", prompt["id"])
    _write_json(path, prompt)
    return prompt


def list_prompts_for_session(session_id: str) -> List[Dict[str, Any]]:
    _ensure_data_dir()
    out = []
    for fn in os.listdir(BASE_DIR):
        if fn.startswith("prompt-") and fn.endswith(".json"):
            obj = _read_json(os.path.join(BASE_DIR, fn))
            if obj and obj.get("session_id") == session_id:
                out.append(obj)
    return out


# Outputs
def save_output(output: Dict[str, Any]) -> Dict[str, Any]:
    _ensure_data_dir()
    if "id" not in output or not output["id"]:
        output["id"] = str(uuid.uuid4())
    if "created_at" not in output:
        output["created_at"] = datetime.utcnow().isoformat() + "Z"
    path = _id_filename("output", output["id"])
    _write_json(path, output)
    return output


def list_outputs_for_session(session_id: str) -> List[Dict[str, Any]]:
    _ensure_data_dir()
    out = []
    for fn in os.listdir(BASE_DIR):
        if fn.startswith("output-") and fn.endswith(".json"):
            obj = _read_json(os.path.join(BASE_DIR, fn))
            if obj and obj.get("session_id") == session_id:
                out.append(obj)
    return out