import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";


function Doctors(){

const [doctors,setDoctors]=useState([]);

const [loading,setLoading]=useState(true);

const [error,setError]=useState("");


useEffect(()=>{

API.get("/doctors")

.then(res=>{

setDoctors(res.data);

setLoading(false);

})

.catch(err=>{

console.log(err);

setError("Failed to load doctors");

setLoading(false);

});


},[]);



return(

<div className="container mt-4">


<h1 className="mb-4">
Available Doctors
</h1>

{
loading &&
<h3>
Loading doctors...
</h3>
}


{
error &&
<h3 className="text-danger">
{error}
</h3>
}
<div className="row">


{
doctors.map((doctor)=>(

<div
className="col-md-4 mb-4"
key={doctor._id}
>


<div className="card shadow p-3">


<h3>
{doctor.name}
</h3>


<p>
Specialization:
<br/>
<b>{doctor.specialization}</b>
</p>


<p>
Experience:
<br/>
<b>{doctor.experience} years</b>
</p>



<Link

className="btn btn-primary"

to={`/book/${doctor._id}`}

>

Book Appointment

</Link>



</div>


</div>


))

}


</div>


</div>


);


}


export default Doctors;