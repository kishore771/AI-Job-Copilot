import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")

def analyze_resume_and_jd(
    resume_text,
    job_description
):
    prompt = f"""
You are an ATS Resume Analyzer.

Analyze the resume against the job description.

Resume:
{resume_text}

Job Description:
{job_description}

Return ONLY valid JSON.

Format:

{{
    "ats_score": 0,
    "matched_skills": [],
    "missing_skills": [],
    "recommendations": []
}}
"""

    response = model.generate_content(prompt)

    return response.text