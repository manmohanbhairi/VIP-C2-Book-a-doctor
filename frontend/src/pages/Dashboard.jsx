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

<div className="container mt-5">


<div className="p-5 rounded-4 bg-white shadow-sm">

<h1>
Welcome {user?.name} 👋
</h1>

<p>
Manage your healthcare appointments easily
</p>


<div className="row mt-4">


<div className="col-md-6">


<div className="card p-4">


<h3>👨‍⚕️ Doctors</h3>

<p>
Find and book appointments
</p>


<Link 
className="btn btn-primary"
to="/doctors">

View Doctors

</Link>


</div>

</div>




<div className="col-md-6">


<div className="card p-4">


<h3>📅 Appointments</h3>

<p>
Track your bookings
</p>


<Link
className="btn btn-success"
to="/appointments">

My Appointments

</Link>


</div>

</div>


</div>


</div>


</div>

);
}

export default Dashboard;