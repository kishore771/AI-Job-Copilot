from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.resume_routes import router as resume_router
from routes.ats_routes import router as ats_router
from routes.cover_letter_routes import router as cover_letter_router
from routes.interview_routes import (
    router as interview_router
)

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routes
app.include_router(resume_router)
app.include_router(ats_router)
app.include_router(cover_letter_router)
app.include_router(interview_router)
@app.get("/")
def home():
    return {
        "message": "AI Job Copilot Backend Running"
    }