import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";


function AdminDoctors(){


const [doctors,setDoctors]=useState([]);



useEffect(()=>{

loadDoctors();

},[]);



const loadDoctors=async()=>{

try{


const res =
await API.get("/doctors");


setDoctors(res.data);


}
catch(error){

console.log(error);

}

};



const deleteDoctor=async(id)=>{


const confirmDelete =
window.confirm(
"Delete this doctor?"
);


if(!confirmDelete)
return;



try{


await API.delete(
`/doctors/${id}`
);



alert(
"Doctor deleted"
);



loadDoctors();


}
catch(error){

alert(
"Delete failed"
);

}


};





return (

<div className="container mt-5">


<div className="d-flex justify-content-between align-items-center">


<h1>
Doctors Management 👨‍⚕️
</h1>


<Link

to="/admin/add-doctor"

className="btn btn-primary"

>

➕ Add Doctor

</Link>


</div>




<div className="row mt-4">


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
fontSize:"70px"
}}
>

👨‍⚕️

</div>



<h3>

{doctor.name}

</h3>



<p>

{doctor.specialization}

</p>



<p>

📍 {doctor.location}

</p>



<div className="d-flex gap-2 justify-content-center">



<Link

to={`/doctors/${doctor._id}`}

className="btn btn-success"

>

View

</Link>




<button

className="btn btn-danger"

onClick={
()=>deleteDoctor(doctor._id)
}

>

Delete

</button>



</div>



</div>


</div>


</div>


))

}


</div>


</div>

)

}


export default AdminDoctors;