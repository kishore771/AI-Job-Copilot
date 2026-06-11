import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ApplicationTracker() {

  const [applications, setApplications] =
    useState([]);

  const [formData, setFormData] =
    useState({
      company: "",
      role: "",
      status: "Applied",
    });

  useEffect(() => {

    const savedApplications =
      localStorage.getItem("applications");

    if (savedApplications) {

      setApplications(
        JSON.parse(savedApplications)
      );

    }

  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleAddApplication = () => {

    if (
      !formData.company ||
      !formData.role
    ) {
      alert(
        "Please fill all fields"
      );
      return;
    }

    const newApplication = {
      id: Date.now(),
      ...formData,
    };

    const updatedApplications = [
      ...applications,
      newApplication,
    ];

    setApplications(
      updatedApplications
    );

    localStorage.setItem(
      "applications",
      JSON.stringify(
        updatedApplications
      )
    );

    setFormData({
      company: "",
      role: "",
      status: "Applied",
    });

  };

  const handleDelete = (id) => {

    const updatedApplications =
      applications.filter(
        (app) => app.id !== id
      );

    setApplications(
      updatedApplications
    );

    localStorage.setItem(
      "applications",
      JSON.stringify(
        updatedApplications
      )
    );

  };

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
        Application Tracker
      </h1>

      {/* Form */}

      <div className="
        bg-white
        shadow-md
        rounded-xl
        p-6
        mb-8
      ">

        <div className="
          grid
          md:grid-cols-3
          gap-4
        ">

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="
              border
              p-3
              rounded-lg
            "
          />

          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
            className="
              border
              p-3
              rounded-lg
            "
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="
              border
              p-3
              rounded-lg
            "
          >
            <option>
              Applied
            </option>

            <option>
              Interview
            </option>

            <option>
              Rejected
            </option>

            <option>
              Offer
            </option>

          </select>

        </div>

        <button
          onClick={
            handleAddApplication
          }
          className="
            bg-black
            text-white
            px-6
            py-3
            rounded-lg
            mt-4
          "
        >
          Add Application
        </button>

      </div>

      {/* Table */}

      <div className="
        bg-white
        shadow-md
        rounded-xl
        overflow-hidden
      ">

        <table className="w-full">

          <thead>

            <tr className="
              bg-gray-100
            ">

              <th className="p-4">
                Company
              </th>

              <th className="p-4">
                Role
              </th>

              <th className="p-4">
                Status
              </th>

              <th className="p-4">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {applications.map(
              (app) => (

                <tr
                  key={app.id}
                  className="
                    border-t
                  "
                >

                  <td className="p-4">
                    {app.company}
                  </td>

                  <td className="p-4">
                    {app.role}
                  </td>

                  <td className="p-4">
                    {app.status}
                  </td>

                  <td className="p-4">

                    <button
                      onClick={() =>
                        handleDelete(
                          app.id
                        )
                      }
                      className="
                        text-red-600
                      "
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ApplicationTracker;