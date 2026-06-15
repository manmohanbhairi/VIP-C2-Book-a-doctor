import { useEffect, useState } from "react";
import API from "../services/api";


function AdminAppointments(){


const [appointments,setAppointments]=useState([]);



useEffect(()=>{

loadAppointments();

},[]);




const loadAppointments = async()=>{

try{

const res =
await API.get("/appointments");


setAppointments(res.data);


}

catch(error){

console.log(error);

}

};





const updateStatus = async(id,status)=>{


try{


if(status==="Approved"){


await API.put(
`/appointments/approve/${id}`
);


}
else{


await API.put(
`/appointments/cancel/${id}`
);


}



alert(
`Appointment ${status}`
);



loadAppointments();



}

catch(error){

console.log(error);

alert("Update failed");

}


};






return (

<div className="container mt-5">


<h1>
Appointment Management 📅
</h1>




<div className="card p-4 mt-4 shadow-sm">


<div className="table-responsive">



<table className="table align-middle">



<thead>

<tr>

<th>
Patient
</th>


<th>
Doctor
</th>


<th>
Date
</th>


<th>
Status
</th>


<th>
Action
</th>


</tr>

</thead>





<tbody>



{

appointments.length===0 ?


<tr>

<td colSpan="5"
className="text-center">

No appointments found

</td>

</tr>


:

appointments.map((app)=>(



<tr key={app._id}>


<td>

👤 {app.patientId?.name || "Unknown"}

</td>





<td>


👨‍⚕️ {app.doctorId?.name || "Unknown"}

<br/>


<small>

{app.doctorId?.specialization}

</small>


</td>





<td>

📅 {app.appointmentDate}

</td>






<td>


<span


className={

app.status==="Approved"

?

"badge bg-success"


:

app.status==="Cancelled"

?

"badge bg-danger"


:

"badge bg-warning"

}


>


{app.status}


</span>


</td>







<td>


{

app.status !== "Approved" &&
app.status !== "Cancelled" &&



<>


<button


className="btn btn-success btn-sm me-2"


onClick={()=>updateStatus(
app._id,
"Approved"
)}


>


Approve

</button>





<button


className="btn btn-danger btn-sm"


onClick={()=>updateStatus(
app._id,
"Cancelled"
)}


>


Reject

</button>


</>


}



{


app.status==="Approved" &&


<span className="text-success">

Completed

</span>


}



{


app.status==="Cancelled" &&


<span className="text-danger">

Closed

</span>


}



</td>





</tr>



))


}



</tbody>



</table>


</div>


</div>


</div>


)

}



export default AdminAppointments;