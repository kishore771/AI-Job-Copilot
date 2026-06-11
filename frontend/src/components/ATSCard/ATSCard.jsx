function ATSCard({
  atsScore,
  matchedSkills,
  missingSkills,
  recommendations
}) {

  const scoreColor =
    atsScore >= 80
      ? "text-green-600"
      : atsScore >= 60
      ? "text-yellow-500"
      : "text-red-500";

  const matchStatus =
    atsScore >= 80
      ? "🟢 Excellent Match"
      : atsScore >= 60
      ? "🟡 Good Match"
      : "🔴 Needs Improvement";

  return (
    <div className="space-y-6">

      {/* ATS Score Card */}
      <div
        className="
          bg-white
          rounded-xl
          shadow-md
          p-8
          text-center
        "
      >
        <h2 className="text-2xl font-bold">
          ATS Score
        </h2>

        <p
          className={`
            text-7xl
            font-bold
            mt-4
            ${scoreColor}
          `}
        >
          {atsScore}%
        </p>

        <p className="mt-3 text-lg font-medium">
          {matchStatus}
        </p>
      </div>

      {/* Skills Section */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Matched Skills */}
        <div
          className="
            bg-white
            rounded-xl
            shadow-md
            p-6
            hover:shadow-lg
            transition
          "
        >
          <h3 className="text-xl font-bold mb-4">
            ✅ Matched Skills
          </h3>

          <div className="space-y-2">
            {matchedSkills?.length > 0 ? (
              matchedSkills.map((skill, index) => (
                <p key={index}>
                  {skill}
                </p>
              ))
            ) : (
              <p>No matched skills found.</p>
            )}
          </div>
        </div>

        {/* Missing Skills */}
        <div
          className="
            bg-white
            rounded-xl
            shadow-md
            p-6
            hover:shadow-lg
            transition
          "
        >
          <h3 className="text-xl font-bold mb-4">
            ❌ Missing Skills
          </h3>

          <div className="space-y-2">
            {missingSkills?.length > 0 ? (
              missingSkills.map((skill, index) => (
                <p key={index}>
                  {skill}
                </p>
              ))
            ) : (
              <p>No missing skills.</p>
            )}
          </div>
        </div>

      </div>

      {/* Recommendations */}
      <div
        className="
          bg-white
          rounded-xl
          shadow-md
          p-6
          hover:shadow-lg
          transition
        "
      >
        <h3 className="text-xl font-bold mb-4">
          💡 Recommendations
        </h3>

        <div className="space-y-3">
          {recommendations?.length > 0 ? (
            recommendations.map(
              (item, index) => (
                <p key={index}>
                  • {item}
                </p>
              )
            )
          ) : (
            <p>No recommendations available.</p>
          )}
        </div>
      </div>

    </div>
  );
}

export default ATSCard;