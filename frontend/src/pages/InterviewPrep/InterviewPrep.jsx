import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import api from "../../services/api";

function InterviewPrep() {
    const [loading, setLoading] = useState(false);
  const [jobDescription, setJobDescription] =
    useState("");

  const navigate = useNavigate();

  const handleGenerate = async () => {

  const resumeText =
    localStorage.getItem("resumeText");

  if (!resumeText) {
    alert("Please upload a resume first");
    return;
  }

  if (!jobDescription.trim()) {
    alert("Please enter a job description");
    return;
  }

  try {

    setLoading(true);

    const response = await api.post(
      "/generate-interview-questions",
      {
        resume_text: resumeText,
        job_description: jobDescription,
      }
    );

   if (response.data.error) {

  if (
    response.data.error.includes("429")
  ) {

    alert(
      "Gemini API quota exceeded. Please wait a minute and try again."
    );

  } else {

    alert(
      "Something went wrong. Please try again."
    );

  }

  return;
}

    localStorage.setItem(
      "interviewQuestions",
      JSON.stringify(response.data)
    );
    const history =
  JSON.parse(
    localStorage.getItem(
      "interviewHistory"
    )
  ) || [];

history.unshift({
  id: Date.now(),
  date: new Date().toLocaleString(),
  questions: response.data,
});

localStorage.setItem(
  "interviewHistory",
  JSON.stringify(history)
);

    navigate("/interview-dashboard");

  } catch (error) {

    console.error(error);
    alert("Failed to generate questions");

  } finally {

    setLoading(false);

  }
};

  return (
    <div className="max-w-5xl mx-auto p-8">
        <BackButton />
      <h1 className="text-3xl font-bold mb-6">
        Interview Preparation
      </h1>

      <textarea
        className="w-full border p-4 h-60"
        placeholder="Paste Job Description..."
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(e.target.value)
        }
      />

      <button
  onClick={handleGenerate}
  disabled={loading}
  className="
    bg-black
    text-white
    px-6
    py-3
    rounded-lg
    mt-4
    transition-all
    duration-200
    hover:bg-gray-800
    hover:scale-105
    active:scale-95
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
>
  {loading
    ? "Generating..."
    : "Generate Questions"}
</button>

    </div>
  );
}

export default InterviewPrep;