import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await API.get("/doctors");
        setDoctors(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDoctors();
  }, []);

  const navigate = useNavigate();
  return (
  <div className="container mt-4">
    <h1 className="mb-4">
      Doctors List
    </h1>

    <div className="row">
      {doctors.map((doctor) => (
        <div
          className="col-md-4"
          key={doctor._id}
        >
          <div className="card mb-3">

            <div className="card-body">

              <h4>{doctor.name}</h4>

              <p>
                {doctor.specialization}
              </p>

              <p>
                {doctor.experience} Years
              </p>

              <p>
                ₹{doctor.fees}
              </p>

              <button
                className="btn btn-primary"
                onClick={() =>
                  navigate(
                    `/book/${doctor._id}`
                  )
                }
              >
                Book Appointment
              </button>
              <Link
  className="btn btn-secondary ms-2"
  to={`/doctors/${doctor._id}`}
>
  View Details
</Link>

            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}
export default Doctors;