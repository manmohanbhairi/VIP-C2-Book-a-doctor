import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Doctors from "./pages/Doctors";
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import DoctorDetails from "./pages/DoctorDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";
import AddDoctor from "./pages/AddDoctor";
import AdminDoctors from "./pages/AdminDoctors";
import AdminAppointments from "./pages/AdminAppointments";

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
  path="/doctors"
  element={
    <ProtectedRoute>
      <Doctors />
    </ProtectedRoute>
  }
/>
<Route
  path="/book/:doctorId"
  element={
    <ProtectedRoute>
      <BookAppointment />
    </ProtectedRoute>
  }
/>
<Route
  path="/appointments"
  element={
    <ProtectedRoute>
      <Appointments />
    </ProtectedRoute>
  }
/>
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/doctors/:id"
  element={<DoctorDetails />}
/>
<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin/add-doctor"
  element={
    <ProtectedRoute>
      <AddDoctor />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/doctors"
  element={
    <ProtectedRoute>
      <AdminDoctors />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/appointments"
  element={
    <ProtectedRoute>
      <AdminAppointments />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;