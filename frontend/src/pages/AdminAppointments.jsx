import { useEffect, useState } from "react";
import API from "../services/api";

function AdminAppointments() {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = () => {
    API.get("/appointments")
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const approveAppointment = async (id) => {
    try {
      await API.put(
        `/appointments/approve/${id}`
      );

      alert("Appointment Approved");

      fetchAppointments();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>All Appointments</h1>

      {appointments.length === 0 ? (
        <h3>No Appointments Found</h3>
      ) : (
        appointments.map((appointment) => (
          <div
            key={appointment._id}
            className="card p-3 mb-3"
          >
            <h3>
              Doctor:{" "}
              {appointment.doctorId?.name}
            </h3>

            <p>
              Patient:{" "}
              {appointment.patientId?.name}
            </p>

            <p>
              Date:{" "}
              {new Date(
                appointment.appointmentDate
              ).toLocaleDateString()}
            </p>

            <p>
              Status:{" "}
              {appointment.status}
            </p>

            <button
              className="btn btn-success"
              onClick={() =>
                approveAppointment(
                  appointment._id
                )
              }
            >
              Approve
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminAppointments;