import { useState } from "react";
import BackButton from "../../components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function AnalyzeJob() {
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAnalyze = async () => {
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
        "/analyze-ats",
        {
          resume_text: resumeText,
          job_description: jobDescription,
        }
      );

      setResult(response.data);
      localStorage.setItem(
  "atsResult",
  JSON.stringify(response.data)
);

const history =
  JSON.parse(
    localStorage.getItem("atsHistory")
  ) || [];

history.unshift({
  id: Date.now(),
  date: new Date().toLocaleString(),
  score: response.data.ats_score,
  result: response.data,
});

localStorage.setItem(
  "atsHistory",
  JSON.stringify(history)
);
navigate("/dashboard");

    } catch (error) {
      console.error(error);
      alert("Analysis failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">

      <BackButton />
      <h1 className="text-3xl font-bold mb-6">
        ATS Analysis
      </h1>

      <textarea
        className="w-full border rounded p-4 h-60"
        placeholder="Paste Job Description Here..."
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(e.target.value)
        }
      />

      <button
        onClick={handleAnalyze}
        className="bg-black text-white px-6 py-3 rounded mt-4"
      >
        {loading ? "Analyzing..." : "Analyze ATS"}
      </button>

      {result && (
        <div className="mt-10">

          <div className="border rounded p-6 mb-6">
            <h2 className="text-2xl font-bold">
              ATS Score
            </h2>

            <p className="text-5xl font-bold mt-4">
              {result.ats_score}%
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border rounded p-6">
              <h2 className="font-bold text-xl mb-3">
                Matched Skills
              </h2>

              {result.matched_skills?.map(
                (skill, index) => (
                  <p key={index}>
                    ✅ {skill}
                  </p>
                )
              )}
            </div>

            <div className="border rounded p-6">
              <h2 className="font-bold text-xl mb-3">
                Missing Skills
              </h2>

              {result.missing_skills?.map(
                (skill, index) => (
                  <p key={index}>
                    ❌ {skill}
                  </p>
                )
              )}
            </div>

          </div>

          <div className="border rounded p-6 mt-6">
            <h2 className="font-bold text-xl mb-3">
              Recommendations
            </h2>

            {result.recommendations?.map(
              (item, index) => (
                <p key={index}>
                  • {item}
                </p>
              )
            )}
          </div>

        </div>
      )}
    </div>
  );
}

export default AnalyzeJob;