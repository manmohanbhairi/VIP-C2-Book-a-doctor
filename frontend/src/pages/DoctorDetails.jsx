import { useEffect,useState } from "react";
import { useParams,Link } from "react-router-dom";
import API from "../services/api";


function DoctorDetails(){

const {id}=useParams();

const [doctor,setDoctor]=useState(null);



useEffect(()=>{

API.get(`/doctors/${id}`)
.then(res=>setDoctor(res.data))
.catch(err=>console.log(err));

},[id]);



if(!doctor)
return <h3 className="text-center mt-5">
Loading...
</h3>



return (

<div className="container mt-5">


<div className="card p-5">


<div className="text-center">


<div style={{fontSize:"80px"}}>
👨‍⚕️
</div>


<h1>
{doctor.name}
</h1>


<h4>
{doctor.specialization}
</h4>


<p>
{doctor.description}
</p>


<Link

className="btn btn-success"

to={`/book/${doctor._id}`}

>

Book Appointment

</Link>


</div>


</div>


</div>

)

}


export default DoctorDetails;