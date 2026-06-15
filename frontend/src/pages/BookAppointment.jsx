import { useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import API from "../services/api";


function BookAppointment(){

const {doctorId}=useParams();


const [date,setDate]=useState(null);

const [time,setTime]=useState("");



const times=[

"09:00 AM",
"10:00 AM",
"11:00 AM",
"02:00 PM",
"03:00 PM",
"05:00 PM"

];



const bookAppointment = async()=>{


try{


const user =
JSON.parse(
localStorage.getItem("user")
);



await API.post("/appointments",{


patientId:user.id || user._id,

doctorId,

appointmentDate:
`${date.toISOString().split("T")[0]} ${time}`


});



alert("Appointment booked successfully");


}

catch(error){

console.log(error);

alert(
"Booking failed"
);

}


};



return (

<div className="container mt-5">


<div className="row justify-content-center">


<div className="col-md-7">


<div className="card p-5">


<h2 className="text-center mb-4">

📅 Book Appointment

</h2>



<h5>
Select Appointment Date
</h5>


<DatePicker

className="form-control"

selected={date}

onChange={(d)=>setDate(d)}

minDate={new Date()}

placeholderText="Choose date"

/>



<br/>



<h5>
Select Time
</h5>



<div className="row">


{
times.map((t)=>(


<div className="col-4 mb-3" key={t}>


<button

className={
time===t
?
"btn btn-success w-100"
:
"btn btn-outline-primary w-100"
}


onClick={()=>setTime(t)}

>

{t}

</button>


</div>


))

}


</div>



<button

className="btn btn-primary w-100 mt-4"

disabled={!date || !time}

onClick={bookAppointment}

>

Confirm Appointment

</button>




</div>


</div>


</div>


</div>


)

}


export default BookAppointment;