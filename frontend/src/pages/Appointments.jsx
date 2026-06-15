import { useEffect, useState } from "react";
import API from "../services/api";


function Appointments(){

const [appointments,setAppointments]=useState([]);



const user =
JSON.parse(
localStorage.getItem("user")
);



useEffect(()=>{

loadAppointments();

},[]);



const loadAppointments=async()=>{

try{

const res =
await API.get("/appointments");


const myAppointments =
res.data.filter(
(a)=>
a.patientId?._id === user.id ||
a.patientId?._id === user._id
);


setAppointments(myAppointments);


}
catch(error){

console.log(error);

}

};



const cancelAppointment=async(id)=>{


try{


await API.put(
`/appointments/cancel/${id}`
);


alert(
"Appointment cancelled"
);


loadAppointments();


}
catch(error){

alert(
"Cancel failed"
);

}

};



return (

<div className="container mt-5">


<h1>
My Appointments 📅
</h1>



<div className="row mt-4">


{
appointments.length===0 ?

<div className="text-center">

<h4>
No appointments found
</h4>

</div>


:

appointments.map((item)=>(


<div 
className="col-md-6 mb-4"
key={item._id}
>


<div className="card p-4 appointment-card">


<h3>

👨‍⚕️ {item.doctorId?.name}

</h3>


<p>

Specialization:
<b>
{item.doctorId?.specialization}
</b>

</p>



<p>

📅 {item.appointmentDate}

</p>




<span

className={

item.status==="Approved"

?
"badge bg-success"

:

item.status==="Cancelled"

?
"badge bg-danger"

:

"badge bg-warning"

}

>

{item.status}

</span>




{
item.status!=="Cancelled" &&

<button

className="btn btn-outline-danger mt-3"

onClick={()=>cancelAppointment(item._id)}

>

Cancel Appointment

</button>

}



</div>


</div>


))

}


</div>


</div>

)

}


export default Appointments;