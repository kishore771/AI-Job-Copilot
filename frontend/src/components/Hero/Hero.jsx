import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">

      <h1 className="text-6xl font-bold mb-6">
        AI Job Copilot
      </h1>

      <p className="text-xl max-w-2xl mb-8">
        Upload your resume, analyze job descriptions,
        generate ATS scores, create cover letters,
        and track applications with AI.
      </p>

      <div className="flex gap-4">

        <Link
          to="/upload"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Get Started
        </Link>

        <Link
          to="/cover-letter"
          className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Generate Cover Letter
        </Link>

      </div>

    </section>
  );
}

export default Hero;