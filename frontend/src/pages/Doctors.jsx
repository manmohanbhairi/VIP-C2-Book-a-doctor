import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";


function Doctors(){

const [doctors,setDoctors] = useState([]);


useEffect(()=>{

API.get("/doctors")
.then(res=>setDoctors(res.data))
.catch(err=>console.log(err));

},[]);



return (

<div className="container mt-5">


<div className="hero mb-5">

<h1>
Find Your Doctor 🩺
</h1>

<p>
Book appointments with trusted doctors
</p>

</div>



<div className="row">


{
doctors.map((doctor)=>(


<div 
className="col-md-4 mb-4"
key={doctor._id}
>


<div className="doctor-card">


<div className="text-center">


<div
style={{
fontSize:"60px"
}}
>
👨‍⚕️
</div>


<h3>
{doctor.name}
</h3>


<p className="text-muted">
{doctor.specialization}
</p>


<p>
📍 {doctor.location}
</p>


<Link

to={`/doctors/${doctor._id}`}

className="btn btn-primary"

>

View Profile

</Link>


</div>


</div>


</div>


))

}


</div>


</div>

);


}


export default Doctors;