import { useState } from "react";
import BackButton from "../../components/BackButton/BackButton";
import api from "../../services/api";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [resumeText, setResumeText] = useState("");

  const handleUpload = async () => {
    console.log("Upload clicked");
    console.log("Current file:", file);

    if (!file) {
      alert("Please select a resume first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post(
        "/upload-resume",
        formData
      );

      console.log("API Response:", response.data);

      setResumeText(response.data.resume_text);

      alert("Resume uploaded successfully!");
    } catch (error) {
      console.error("Upload Error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);
      }

      alert("Upload failed. Check console.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6">
        Upload Resume
      </h1>

      <div className="flex items-center gap-4 mb-6">
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => {
            const selectedFile = e.target.files[0];

            console.log("Selected File:", selectedFile);

            setFile(selectedFile);
          }}
        />

        <button
          onClick={handleUpload}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Upload
        </button>
      </div>

      {file && (
        <p className="mb-4 text-green-600">
          Selected: {file.name}
        </p>
      )}

      {resumeText && (
        <div className="mt-6">
          <h2 className="font-bold mb-2 text-xl">
            Extracted Resume Text
          </h2>

          <textarea
            className="w-full border p-4 h-80 rounded"
            value={resumeText}
            readOnly
          />
        </div>
      )}
    </div>
  );
}

export default UploadResume;