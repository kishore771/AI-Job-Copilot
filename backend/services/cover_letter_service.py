from services.gemini_service import model

def generate_cover_letter(
    resume_text,
    job_description
):

    prompt = f"""
Generate a professional cover letter.

Candidate Resume:
{resume_text}

Job Description:
{job_description}

Requirements:

1. Professional tone
2. Fresher-friendly
3. Maximum 350 words
4. Do not invent experience
5. Highlight matching skills
6. Return only the cover letter
"""

    response = model.generate_content(
        prompt
    )

    return response.text