import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="container mt-4">
      <h1>Admin Dashboard</h1>

      <div className="row mt-4">

        <div className="col-md-4">
          <div className="card p-3">
            <h3>Add Doctor</h3>

            <Link
              className="btn btn-primary"
              to="/admin/add-doctor"
            >
              Add Doctor
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h3>Manage Doctors</h3>

            <Link
              className="btn btn-success"
              to="/admin/doctors"
            >
              View Doctors
            </Link>
          </div>
        </div>


<div className="col-md-4">
  <div className="card p-3">
    <h3>Appointments</h3>

    <Link
      className="btn btn-warning"
      to="/admin/appointments"
    >
      View Appointments
    </Link>
  </div>
</div>


      </div>
    </div>
  );
}

export default Admin;