import { useEffect, useState } from "react";
import API from "../services/api";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    API.get("/appointments")
      .then((res) => setAppointments(res.data))
      .catch((err) => console.log(err));
  }, []);

  const cancelAppointment = async (id) => {
    try {
      await API.put(
        `/appointments/cancel/${id}`
      );

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>My Appointments</h1>

      {appointments.map((appointment) => (
        <div key={appointment._id}>
          <h3>
            Doctor: {appointment.doctorId?.name}
          </h3>

          <p>
            Patient: {appointment.patientId?.name}
          </p>

          <p>
            Date: {new Date(
              appointment.appointmentDate
            ).toLocaleDateString()}
          </p>

          <p>
            Status: {appointment.status}
          </p>

          <button
            onClick={() =>
              cancelAppointment(
                appointment._id
              )
            }
          >
            Cancel
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Appointments;