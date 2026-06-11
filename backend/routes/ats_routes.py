from fastapi import APIRouter
from pydantic import BaseModel
from services.gemini_service import analyze_resume_and_jd
import json

router = APIRouter()

class ATSRequest(BaseModel):
    resume_text: str
    job_description: str


@router.post("/analyze-ats")
def analyze_ats(data: ATSRequest):

    result = analyze_resume_and_jd(
        data.resume_text,
        data.job_description
    )

    try:
        cleaned_result = (
            result.replace("```json", "")
                  .replace("```", "")
                  .strip()
        )

        return json.loads(cleaned_result)

    except Exception as e:
        return {
            "error": str(e),
            "raw_response": result
        }