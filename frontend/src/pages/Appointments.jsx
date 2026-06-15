import { useEffect, useState, useCallback } from "react";
import API from "../services/api";


function Appointments() {


const [appointments, setAppointments] = useState([]);



const user =
JSON.parse(localStorage.getItem("user"));





const loadAppointments = useCallback(async()=>{

try{

const res =
await API.get("/appointments");


console.log("LOGIN USER:", user);

console.log(
"ALL APPOINTMENTS:",
res.data
);



setAppointments(res.data);


}

catch(error){

console.log(error);

}


},[user]);






useEffect(()=>{


loadAppointments();


},[loadAppointments]);







const cancelAppointment = async(id)=>{


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


console.log(error);

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

appointments.length === 0 ?



<div className="text-center">


<h4>

No appointments found

</h4>


</div>





:



appointments.map((app)=>(




<div

className="col-md-6 mb-4"

key={app._id}

>




<div className="card p-4 appointment-card">





<h3>

👨‍⚕️ {app.doctorId?.name}

</h3>





<p>

Specialization:

<b>

{app.doctorId?.specialization}

</b>

</p>





<p>

📅

{

new Date(
app.appointmentDate
).toLocaleDateString()

}

</p>








<span


className={

app.status === "Approved"

?

"badge bg-success"


:

app.status === "Cancelled"

?

"badge bg-danger"


:

"badge bg-warning"


}


>


{app.status}



</span>








{

app.status !== "Cancelled" &&


<button


className="btn btn-outline-danger mt-3"


onClick={()=>
cancelAppointment(app._id)
}


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