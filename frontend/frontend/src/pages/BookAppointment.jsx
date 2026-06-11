import { useParams } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

function BookAppointment() {
  const { doctorId } = useParams(); // ✅ FIRST

  const [form, setForm] = useState({
    patientId: "",
    doctorId: doctorId, // ✅ NOW SAFE
    appointmentDate: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/appointments", form);
      alert(res.data.message);
    } catch (error) {
      alert("Booking Failed");
    }
  };

  return (
    <div>
      <h1>Book Appointment</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="date"
          onChange={(e) =>
            setForm({
              ...form,
              appointmentDate: e.target.value,
            })
          }
        />

        <button type="submit">
          Book
        </button>
      </form>
    </div>
  );
}

export default BookAppointment;