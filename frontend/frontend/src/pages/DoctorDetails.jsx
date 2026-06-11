import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function DoctorDetails() {
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    API.get("/doctors")
      .then((res) => {
        const foundDoctor = res.data.find(
          (d) => d._id === id
        );

        setDoctor(foundDoctor);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!doctor) return <h2>Loading...</h2>;

  return (
    <div className="container mt-4">
      <h1>{doctor.name}</h1>

      <p>
        Specialization:
        {doctor.specialization}
      </p>

      <p>
        Experience:
        {doctor.experience} Years
      </p>

      <p>
        Fees:
        ₹{doctor.fees}
      </p>
    </div>
  );
}

export default DoctorDetails;