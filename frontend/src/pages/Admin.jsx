import {Link} from "react-router-dom";


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


<div className="col-md-6">


<div className="card p-4">


<h3>
👨‍⚕️ Doctors
</h3>


<p>
Add and manage doctors
</p>


<Link
className="btn btn-primary"
to="/admin/doctors"
>

Manage Doctors

</Link>


</div>

</div>



<div className="col-md-6">


<div className="card p-4">


<h3>
📅 Appointments
</h3>


<p>
Approve patient appointments
</p>


<Link
className="btn btn-success"
to="/admin/appointments"
>

Manage Appointments

</Link>


</div>


</div>


</div>


</div>


</div>

)

}


export default Admin;