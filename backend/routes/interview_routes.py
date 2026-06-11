from fastapi import APIRouter
from pydantic import BaseModel
from services.interview_service import generate_interview_questions
import json

router = APIRouter()

class InterviewRequest(BaseModel):
    resume_text: str
    job_description: str

@router.post("/generate-interview-questions")
def generate_questions(data: InterviewRequest):

    try:

        result = generate_interview_questions(
            data.resume_text,
            data.job_description
        )

        cleaned_result = (
            result.replace("```json", "")
                  .replace("```", "")
                  .strip()
        )

        return json.loads(cleaned_result)

    except Exception as e:

        return {
            "error": str(e)
        }