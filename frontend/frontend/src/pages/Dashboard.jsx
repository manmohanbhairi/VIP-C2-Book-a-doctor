import { Link } from "react-router-dom";

function Dashboard() {
  const userData = localStorage.getItem("user");

  const user = userData
    ? JSON.parse(userData)
    : null;

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center">
        <h1>
          Welcome {user?.name}
        </h1>

        <button
          className="btn btn-danger"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="row mt-4">

        <div className="col-md-4">
          <div className="card p-3">
            <h3>Doctors</h3>

            <p>
              View available doctors
            </p>

            <Link
              className="btn btn-primary"
              to="/doctors"
            >
              View Doctors
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h3>Appointments</h3>

            <p>
              Manage your appointments
            </p>

            <Link
              className="btn btn-success"
              to="/appointments"
            >
              View Appointments
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;