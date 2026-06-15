const express = require("express");
const router = express.Router();
const authMiddleware =
require("../middleware/authMiddleware");

const {
  bookAppointment,
  getAppointments,
  cancelAppointment,
  approveAppointment
} = require("../controllers/appointmentController");


router.post("/", bookAppointment);

router.get(
"/",
authMiddleware,
getAppointments
);

router.put(
"/cancel/:id",
authMiddleware,
cancelAppointment
);

router.put(
  "/approve/:id",
  approveAppointment
);


module.exports = router;