import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-6 p-4 shadow">

      <Link to="/">
        Home
      </Link>

      <Link to="/upload">
        Upload Resume
      </Link>

      <Link to="/analyze">
        ATS Analysis
      </Link>

      <Link to="/cover-letter">
        Cover Letter
      </Link>

      <Link to="/dashboard">
        Dashboard
      </Link>


    </nav>
  );
}

export default Navbar;