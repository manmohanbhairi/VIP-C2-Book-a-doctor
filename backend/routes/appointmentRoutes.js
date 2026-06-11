const express = require("express");
const router = express.Router();

const {
  bookAppointment,
  getAppointments,
  cancelAppointment,
  approveAppointment
} = require("../controllers/appointmentController");

router.post("/", bookAppointment);
router.get("/", getAppointments);
router.put("/cancel/:id", cancelAppointment);
router.put(
  "/approve/:id",
  approveAppointment
);

module.exports = router;