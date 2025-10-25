from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse
from fastapi import Request
import json


class ProvenanceMiddleware(BaseHTTPMiddleware):
    """
    Middleware that enforces incoming POST /sessions/{id}/outputs requests include a
    'provenance' object in the JSON body. This is a lightweight guard for MVP.
    """

    async def dispatch(self, request: Request, call_next):
        try:
            if request.method == "POST" and "/outputs" in request.url.path:
                # safe-guard: only inspect JSON bodies
                try:
                    body = await request.json()
                except Exception:
                    return JSONResponse(status_code=400, content={"detail": "invalid or missing json body"})
                if not isinstance(body, dict) or "provenance" not in body:
                    return JSONResponse(status_code=400, content={"detail": "missing required 'provenance' object"})
        except Exception:
            # If anything goes wrong here, do not block the request processing stack
            pass
        response = await call_next(request)
        return response