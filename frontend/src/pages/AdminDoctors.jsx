import { useEffect, useState } from "react";
import API from "../services/api";

function AdminDoctors() {

  const [doctors, setDoctors] =
    useState([]);

  const fetchDoctors = () => {
    API.get("/doctors")
  .then((res) => {
    console.log(res.data);
    setDoctors(res.data);
  })
  .catch(console.log);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const deleteDoctor = async (id) => {
    try {
      await API.delete(
        `/doctors/${id}`
      );

      alert(
        "Doctor deleted successfully"
      );

      fetchDoctors();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Manage Doctors</h1>

      {doctors.map((doctor) => (
        <div
          key={doctor._id}
          className="card p-3 mb-3"
        >
          <h3>{doctor.name}</h3>

          <p>
            {doctor.specialization}
          </p>

          <button
            className="btn btn-danger"
            onClick={() =>
              deleteDoctor(
                doctor._id
              )
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminDoctors;