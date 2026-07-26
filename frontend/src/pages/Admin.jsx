import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

import { Pie, Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function Admin() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    API.get("/admin/dashboard")
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!stats) {
    return (
      <div className="container mt-5 text-center">
        <h2>Loading Dashboard...</h2>
      </div>
    );
  }

  const pieData = {
    labels: stats.appointmentStats.map((item) => item._id),
    datasets: [
      {
        data: stats.appointmentStats.map((item) => item.count),
        backgroundColor: [
          "#36A2EB",
          "#4BC0C0",
          "#FF6384",
          "#FFCE56",
        ],
      },
    ],
  };

  const barData = {
    labels: stats.specializationStats.map((item) => item._id),
    datasets: [
      {
        label: "Doctors",
        data: stats.specializationStats.map((item) => item.count),
        backgroundColor: "#36A2EB",
      },
    ],
  };

  return (
    <div className="container mt-5">

      {/* Hero */}
      <div className="hero text-center mb-5">
        <h1>🩺 Admin Dashboard</h1>
        <p>Monitor doctors, patients and appointments</p>
      </div>

      {/* Statistics */}
      <div className="row mb-5">

        <div className="col-md-4 mb-4">
          <div className="stats-card text-center">
            <h1>👨‍⚕️</h1>
            <h2>{stats.doctors}</h2>
            <p>Total Doctors</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="stats-card text-center">
            <h1>👥</h1>
            <h2>{stats.patients}</h2>
            <p>Total Patients</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="stats-card text-center">
            <h1>📅</h1>
            <h2>{stats.appointments}</h2>
            <p>Total Appointments</p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="stats-card text-center">
            <h1>⭐</h1>
            <h2>{stats.reviews}</h2>
            <p>Doctor Reviews</p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="stats-card text-center">
            <h1>❤️</h1>
            <h2>{stats.favorites}</h2>
            <p>Favorite Doctors</p>
          </div>
        </div>

      </div>

      {/* Charts */}

      <div className="row mb-5">

        <div className="col-md-6 mb-4">
          <div className="card p-4 shadow-sm">
            <h4 className="text-center mb-4">
              📊 Appointment Status
            </h4>

            <Pie data={pieData} />
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card p-4 shadow-sm">
            <h4 className="text-center mb-4">
              👨‍⚕️ Doctors by Specialization
            </h4>

            <Bar data={barData} />
          </div>
        </div>

      </div>

      {/* Management */}

      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card p-4 text-center shadow-sm">

            <h3>➕ Add Doctor</h3>

            <p>Create new doctor profile</p>

            <Link
              to="/admin/add-doctor"
              className="btn btn-primary"
            >
              Add Doctor
            </Link>

          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card p-4 text-center shadow-sm">

            <h3>👨‍⚕️ Manage Doctors</h3>

            <p>View and update doctors</p>

            <Link
              to="/admin/doctors"
              className="btn btn-success"
            >
              Doctors
            </Link>

          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card p-4 text-center shadow-sm">

            <h3>📅 Appointments</h3>

            <p>Approve or cancel appointments</p>

            <Link
              to="/admin/appointments"
              className="btn btn-warning"
            >
              Appointments
            </Link>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Admin;