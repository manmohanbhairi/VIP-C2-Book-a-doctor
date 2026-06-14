import { Link } from "react-router-dom";


function Admin(){

return (

<div className="container mt-5">


<div className="hero">


<h1>
Admin Dashboard 🩺
</h1>


<p>
Manage doctors and appointments
</p>



<div className="row mt-4">


<div className="col-md-4">


<div className="card p-4">


<h3>➕ Add Doctor</h3>

<p>
Create new doctor profile
</p>


<Link
to="/admin/add-doctor"
className="btn btn-primary"
>

Add Doctor

</Link>


</div>

</div>





<div className="col-md-4">


<div className="card p-4">


<h3>👨‍⚕️ Doctors</h3>


<p>
View all doctors
</p>


<Link
to="/admin/doctors"
className="btn btn-success"
>

Doctors

</Link>


</div>

</div>





<div className="col-md-4">


<div className="card p-4">


<h3>📅 Appointments</h3>


<p>
Manage bookings
</p>


<Link
to="/admin/appointments"
className="btn btn-warning"
>

Appointments

</Link>


</div>


</div>



</div>


</div>


</div>

)

}


export default Admin;