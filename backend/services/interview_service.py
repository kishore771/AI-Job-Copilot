from services.gemini_service import model

def generate_interview_questions(
    resume_text,
    job_description
):

    prompt = f"""
You are an expert interviewer.

Resume:
{resume_text}

Job Description:
{job_description}

Generate interview questions.

Return ONLY valid JSON.

Format:

{{
  "technical": [],
  "behavioral": [],
  "project_based": []
}}

Generate 5 questions per category.
"""

    response = model.generate_content(
        prompt
    )

    return response.text