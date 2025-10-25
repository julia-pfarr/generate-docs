from fastapi import FastAPI
from fastapi.responses import JSONResponse
from .middleware.provenance import ProvenanceMiddleware
import os

app = FastAPI(title="Documentation Assistant API (MVP)")

# mount provenance middleware
app.add_middleware(ProvenanceMiddleware)


@app.get("/api/health")
async def health():
    return {"status": "ok"}


# lightweight project/session endpoints (minimal MVP hooks)
@app.post("/api/projects")
async def create_project(payload: dict):
    # placeholder: return payload back with an id if the storage layer is wired
    payload.setdefault("id", "todo-id")
    return JSONResponse(status_code=201, content=payload)


@app.get("/api/projects")
async def list_projects():
    return JSONResponse(status_code=200, content=[])


# Note: full endpoints for sessions/prompts/outputs are implemented in later tasks (T011-T014).
# This file provides the FastAPI scaffold and middleware wiring for Phase 2.
#
# Run locally:
# uvicorn backend.app.main:app --reload --port 8000