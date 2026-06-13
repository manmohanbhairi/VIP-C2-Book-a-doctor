import { Link } from "react-router-dom";

function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );


  const logout = () => {

    localStorage.clear();

    window.location.href="/";

  };


  return (

    <nav className="navbar navbar-dark bg-dark px-4">

      <Link
        className="navbar-brand"
        to="/dashboard"
      >
        Book A Doctor
      </Link>


      <div>


        <Link
          className="btn btn-light me-2"
          to="/doctors"
        >
          Doctors
        </Link>



        <Link
          className="btn btn-light me-2"
          to="/appointments"
        >
          Appointments
        </Link>



        {
          user?.role === "admin" &&

          <Link
            className="btn btn-warning me-2"
            to="/admin"
          >
            Admin
          </Link>

        }



        {
          user &&

          <button
            className="btn btn-danger"
            onClick={logout}
          >
            Logout
          </button>

        }


      </div>


    </nav>

  );

}


export default Navbar;