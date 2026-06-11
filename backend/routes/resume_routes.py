from fastapi import APIRouter, UploadFile, File
from services.resume_parser import extract_text
import os

router = APIRouter()

UPLOAD_DIR = "uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):

    file_path = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    resume_text = extract_text(file_path)

    return {
        "message": "Resume uploaded successfully",
        "filename": file.filename,
        "resume_text": resume_text
    }