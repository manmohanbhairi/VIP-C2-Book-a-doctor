import { Link } from "react-router-dom";

function Navbar() {
    const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.href = "/";
};
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          Book A Doctor
        </Link>

        <div className="navbar-nav">

          <Link
            className="nav-link"
            to="/doctors"
          >
            Doctors
          </Link>

          <Link
            className="nav-link"
            to="/appointments"
          >
            Appointments
          </Link>

          <Link
            className="nav-link"
            to="/register"
          >
            Register
          </Link>

          <Link
            className="nav-link"
            to="/"
          >
            Login
          </Link>

        </div>
      </div>
      <button
  className="btn btn-danger ms-3"
  onClick={handleLogout}
>
  Logout
</button>
    </nav>
  );
}

export default Navbar;