import { Link } from "react-router-dom";

function History() {

  const atsHistory =
    JSON.parse(
      localStorage.getItem(
        "atsHistory"
      )
    ) || [];

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
        History
      </h1>

      <div className="space-y-4">

        {atsHistory.map(
          (item) => (

            <div
              key={item.id}
              className="
                bg-white
                shadow-md
                rounded-xl
                p-6
              "
            >

              <p>
                Date:
                {" "}
                {item.date}
              </p>

              <p>
                ATS Score:
                {" "}
                {item.score}%
              </p>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default History;