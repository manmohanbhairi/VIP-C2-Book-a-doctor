import { useState } from "react";
import API from "../services/api";

function AddDoctor() {
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    experience: "",
    fees: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/doctors",
        form
      );

      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Add Doctor</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          className="form-control mb-2"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Specialization"
          className="form-control mb-2"
          onChange={(e) =>
            setForm({
              ...form,
              specialization: e.target.value,
            })
          }
        />

        <input
          placeholder="Experience"
          className="form-control mb-2"
          onChange={(e) =>
            setForm({
              ...form,
              experience: e.target.value,
            })
          }
        />

        <input
          placeholder="Fees"
          className="form-control mb-2"
          onChange={(e) =>
            setForm({
              ...form,
              fees: e.target.value,
            })
          }
        />

        <button
          className="btn btn-primary"
          type="submit"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
}

export default AddDoctor;