import {Link} from "react-router-dom";

function Navbar(){

return (

<nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">

<Link 
className="navbar-brand fw-bold text-primary"
to="/dashboard">

🩺 Book Doctor

</Link>


<div>

<Link 
className="btn btn-outline-primary mx-2"
to="/doctors">

Doctors

</Link>


<Link
className="btn btn-outline-success"
to="/appointments">

Appointments

</Link>


</div>


</nav>

)

}


export default Navbar;