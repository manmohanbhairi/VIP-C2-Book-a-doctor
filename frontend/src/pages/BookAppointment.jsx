import { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";


function BookAppointment(){

  const { doctorId } = useParams();

const user = JSON.parse(
  localStorage.getItem("user")
);

const patientId = user?._id || user?.id;


  const [date,setDate] = useState("");


  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{

      await API.post(
"/appointments",
{
 patientId: patientId,
 doctorId: doctorId,
 appointmentDate: date
}
);


      alert("Appointment booked successfully");


    }
    catch(error){

      console.log(error.response);

      alert(
        error.response?.data?.message ||
        "Booking Failed"
      );

    }

  };


  return(

    <div>

      <h1>Book Appointment</h1>


      <form onSubmit={handleSubmit}>


        <input
          type="date"
          onChange={
            (e)=>setDate(e.target.value)
          }
        />


        <button>
          Book
        </button>


      </form>


    </div>

  );

}


export default BookAppointment;