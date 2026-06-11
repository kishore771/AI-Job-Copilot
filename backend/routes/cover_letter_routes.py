from fastapi import APIRouter
from pydantic import BaseModel

from services.cover_letter_service import (
    generate_cover_letter
)

router = APIRouter()

class CoverLetterRequest(BaseModel):
    resume_text: str
    job_description: str

@router.post("/generate-cover-letter")
def generate_letter(
    data: CoverLetterRequest
):

    letter = generate_cover_letter(
        data.resume_text,
        data.job_description
    )

    return {
        "cover_letter": letter
    }