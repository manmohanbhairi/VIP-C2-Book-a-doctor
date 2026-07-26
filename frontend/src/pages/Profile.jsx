import { useEffect, useState } from "react";
import API from "../services/api";

function Profile() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    address: "",
    profileImage: "",
  });

  useEffect(() => {

    API.get("/profile")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));

  }, []);

  const handleChange = (e) => {

    setUser({

      ...user,

      [e.target.name]: e.target.value,

    });

  };

  const saveProfile = async () => {

    try {

      await API.put("/profile", user);

      alert("✅ Profile Updated Successfully");

    } catch (err) {

      alert("❌ Update Failed");

    }

  };

  return (

    <div className="container mt-5">

      <div className="profile-card">

        <h2 className="profile-title text-center">

          👤 Patient Profile

        </h2>

        <div className="text-center mb-4">

          <img

            src={
              user.profileImage
                ? user.profileImage
                : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }

            alt="Profile"

            className="profile-image"

          />

        </div>

        <input
          type="text"
          className="form-control"
          name="profileImage"
          placeholder="Profile Image URL"
          value={user.profileImage}
          onChange={handleChange}
        />

        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />

        <input
          type="email"
          className="form-control"
          value={user.email}
          disabled
        />

        <input
          type="text"
          className="form-control"
          name="phone"
          placeholder="Phone Number"
          value={user.phone}
          onChange={handleChange}
        />

        <input
          type="number"
          className="form-control"
          name="age"
          placeholder="Age"
          value={user.age}
          onChange={handleChange}
        />

        <select
          className="form-select"
          name="gender"
          value={user.gender}
          onChange={handleChange}
        >

          <option value="">Select Gender</option>

          <option value="Male">Male</option>

          <option value="Female">Female</option>

          <option value="Other">Other</option>

        </select>

        <textarea
          className="form-control"
          rows="4"
          name="address"
          placeholder="Address"
          value={user.address}
          onChange={handleChange}
        />

        <button
          className="btn btn-primary save-btn"
          onClick={saveProfile}
        >

          💾 Save Profile

        </button>

      </div>

    </div>

  );

}

export default Profile;