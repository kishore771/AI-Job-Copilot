import { Link } from "react-router-dom";

function Features() {

  const features = [
    {
      title: "📄 Resume Upload",
      description:
        "Upload PDF resumes and extract content automatically using AI.",
      path: "/upload"
    },
    {
      title: "📊 ATS Analysis",
      description:
        "Compare your resume against job descriptions and get ATS scores.",
      path: "/analyze"
    },
    {
      title: "📈 ATS Dashboard",
      description:
        "View ATS score, matched skills, missing skills and recommendations.",
      path: "/dashboard"
    },
    {
      title: "✉️ Cover Letter Generator",
      description:
        "Generate personalized cover letters tailored to each job.",
      path: "/cover-letter"
    },
    {
      title: "🎯 Interview Preparation",
      description:
        "Generate technical, behavioral and project-based interview questions.",
      path: "/interview-prep"
    },
    {
      title: "🧠 Interview Dashboard",
      description:
        "Review AI-generated interview questions and prepare effectively.",
      path: "/interview-dashboard"
    },
    {
  title: "📋 Application Tracker",
  description:
    "Track job applications and interview progress.",
  path: "/application-tracker"
},
{
  title: "📚 History",
  description:
    "View previous ATS analyses, cover letters and interview questions.",
  path: "/history"
}
  ];

  return (
    <section className="py-20 px-8 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Powerful AI Features
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Everything you need to land your next job.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature) => (
            <Link
              key={feature.title}
              to={feature.path}
              className="
                bg-white
                rounded-xl
                p-6
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                block
              "
            >
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>

              <div className="
                flex
                justify-between
                items-center
                mt-6
              ">
                <span className="
                  text-blue-600
                  font-medium
                ">
                  Open Feature
                </span>

                <span className="text-xl">
                  →
                </span>
              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;