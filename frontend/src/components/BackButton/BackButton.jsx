import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link
      to="/"
      className="
        inline-block
        mb-6
        px-4
        py-2
        border
        rounded-lg
        hover:bg-gray-100
        transition
      "
    >
      ← Back to Home
    </Link>
  );
}

export default BackButton;