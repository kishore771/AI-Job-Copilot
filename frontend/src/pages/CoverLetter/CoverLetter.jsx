import { useState } from "react";
import api from "../../services/api";
import BackButton from "../../components/BackButton/BackButton";

function CoverLetter() {

  const [jobDescription, setJobDescription] =
    useState("");

  const [coverLetter, setCoverLetter] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleGenerate = async () => {

    const resumeText =
      localStorage.getItem("resumeText");

    if (!resumeText) {
      alert("Upload resume first");
      return;
    }

    try {

      setLoading(true);

      const response =
        await api.post(
          "/generate-cover-letter",
          {
            resume_text: resumeText,
            job_description: jobDescription,
          }
        );

      setCoverLetter(
        response.data.cover_letter
      );
      const history =
  JSON.parse(
    localStorage.getItem(
      "coverLetterHistory"
    )
  ) || [];

history.unshift({
  id: Date.now(),
  date: new Date().toLocaleString(),
  coverLetter:
    response.data.cover_letter,
});

localStorage.setItem(
  "coverLetterHistory",
  JSON.stringify(history)
);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  const handleCopy = () => {

    navigator.clipboard.writeText(
      coverLetter
    );

    alert("Copied!");

  };

  return (
    <div className="max-w-5xl mx-auto p-8">

        <BackButton />

      <h1 className="text-3xl font-bold mb-6">
        Cover Letter Generator
      </h1>

      <textarea
        className="w-full border rounded p-4 h-60"
        placeholder="Paste Job Description..."
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(e.target.value)
        }
      />

      <button
        onClick={handleGenerate}
        className="bg-black text-white px-6 py-3 rounded mt-4"
      >
        {
          loading
            ? "Generating..."
            : "Generate Cover Letter"
        }
      </button>

      {coverLetter && (
        <div className="mt-8">

          <button
            onClick={handleCopy}
            className="border px-4 py-2 rounded mb-4"
          >
            Copy
          </button>

          <textarea
            className="w-full border rounded p-4 h-96"
            value={coverLetter}
            readOnly
          />

        </div>
      )}

    </div>
  );
}

export default CoverLetter;