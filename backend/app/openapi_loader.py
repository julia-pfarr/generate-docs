import os
import yaml
from typing import Any, Dict

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))


def load_openapi_spec() -> Dict[str, Any]:
    path = os.path.join(ROOT, "backend", "openapi.yaml")
    if not os.path.exists(path):
        raise FileNotFoundError(f"OpenAPI spec not found at {path}")
    with open(path, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)