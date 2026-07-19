import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";
import DoctorReviews from "../components/DoctorReviews";

function DoctorProfile() {
  const { doctorId } = useParams();

  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    API.get(`/doctors/${doctorId}`)
      .then((res) => setDoctor(res.data))
      .catch((err) => console.log(err));
  }, [doctorId]);

  if (!doctor) {
    return (
      <div className="loading">
        Loading Doctor...
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <div className="doctor-profile-card">

        <div className="row">

          <div className="col-md-4 text-center">

            <img
              src={doctor.image}
              alt={doctor.name}
              className="doctor-profile-image"
            />

            <span
              className={
                doctor.available
                  ? "badge bg-success mt-3"
                  : "badge bg-danger mt-3"
              }
            >
              {doctor.available
                ? "🟢 Available Today"
                : "🔴 Not Available"}
            </span>

          </div>

          <div className="col-md-8">

            <h2>
              {doctor.name}
            </h2>

            <h5 className="text-primary">
              {doctor.specialization}
            </h5>

            <p>
              ⭐ {doctor.rating} / 5
            </p>

            <hr />

            <p>
              🎓 <b>Qualification:</b> {doctor.qualification}
            </p>

            <p>
              🏥 <b>Hospital:</b> {doctor.hospital}
            </p>

            <p>
              📍 <b>Location:</b> {doctor.location}
            </p>

            <p>
              ⏳ <b>Experience:</b> {doctor.experience} Years
            </p>

            <p>
              💰 <b>Consultation Fee:</b> ₹{doctor.fee}
            </p>

            <p>
              📞 <b>Phone:</b> {doctor.phone}
            </p>

          </div>

        </div>

        <hr />

        <h4>About Doctor</h4>

        <p>
          {doctor.about}
        </p>

        <div className="text-center mt-4">

          <Link
            to={`/book/${doctor._id}`}
            className="btn btn-primary btn-lg"
          >
            📅 Book Appointment
          </Link>

        </div>

      </div>
<DoctorReviews doctorId={doctor._id} />
    </div>
  );
}

export default DoctorProfile;