import ATSCard from "../../components/ATSCard/ATSCard";
import { Link } from "react-router-dom";

function Dashboard() {

  const result = JSON.parse(
    localStorage.getItem("atsResult")
  );

  if (!result) {
    return (
      <div className="max-w-5xl mx-auto p-8">

        <Link
          to="/"
          className="border px-4 py-2 rounded-lg"
        >
          ← Home
        </Link>

        <h2 className="text-3xl font-bold mt-8">
          No ATS Analysis Found
        </h2>

        <p className="mt-4 text-gray-600">
          Please analyze a job description first.
        </p>

      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">

      <Link
        to="/"
        className="
          inline-block
          mb-6
          border
          px-4
          py-2
          rounded-lg
          hover:bg-gray-100
        "
      >
        ← Home
      </Link>

      <h1 className="text-4xl font-bold mb-8">
        ATS Dashboard
      </h1>

      <ATSCard
        atsScore={result.ats_score}
        matchedSkills={result.matched_skills}
        missingSkills={result.missing_skills}
        recommendations={result.recommendations}
      />

    </div>
  );
}

export default Dashboard;