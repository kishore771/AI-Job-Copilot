import { Link } from "react-router-dom";

function InterviewDashboard() {

  const questions = JSON.parse(
    localStorage.getItem(
      "interviewQuestions"
    )
  );

  if (!questions) {
    return (
      <div className="p-8">
        No interview questions found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">

      <Link
        to="/"
        className="
          border
          px-4
          py-2
          rounded-lg
        "
      >
        ← Home
      </Link>

      <h1 className="
        text-4xl
        font-bold
        my-8
      ">
        Interview Dashboard
      </h1>

      <div className="grid gap-6">

        <div className="
          bg-white
          shadow-md
          rounded-xl
          p-6
        ">
          <h2 className="
            text-2xl
            font-bold
            mb-4
          ">
            Technical Questions
          </h2>

          {questions.technical?.map(
            (q, i) => (
              <p key={i}>
                {i + 1}. {q}
              </p>
            )
          )}
        </div>

        <div className="
          bg-white
          shadow-md
          rounded-xl
          p-6
        ">
          <h2 className="
            text-2xl
            font-bold
            mb-4
          ">
            Behavioral Questions
          </h2>

          {questions.behavioral?.map(
            (q, i) => (
              <p key={i}>
                {i + 1}. {q}
              </p>
            )
          )}
        </div>

        <div className="
          bg-white
          shadow-md
          rounded-xl
          p-6
        ">
          <h2 className="
            text-2xl
            font-bold
            mb-4
          ">
            Project Questions
          </h2>

          {questions.project_based?.map(
            (q, i) => (
              <p key={i}>
                {i + 1}. {q}
              </p>
            )
          )}
        </div>

      </div>

    </div>
  );
}

export default InterviewDashboard;