const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const appointmentController = require("../controllers/appointmentController");

const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Admin access required",
    });
  }

  next();
};

// =======================
// Book Appointment
// =======================
router.post(
  "/",
  authMiddleware,
  appointmentController.bookAppointment
);

// =======================
// User Appointments
// =======================
router.get(
  "/",
  authMiddleware,
  appointmentController.getAppointments
);

// =======================
// Admin - All Appointments
// =======================
router.get(
  "/all",
  authMiddleware,
  adminOnly,
  appointmentController.getAllAppointments
);

// =======================
// Approve Appointment
// =======================
router.put(
  "/approve/:id",
  authMiddleware,
  appointmentController.approveAppointment
);

// =======================
// Cancel Appointment
// =======================
router.put(
  "/cancel/:id",
  authMiddleware,
  appointmentController.cancelAppointment
);

// =======================
// Get Booked Slots
// =======================
router.get(
  "/booked/:doctorId/:date",
  appointmentController.getBookedSlots
);

module.exports = router;