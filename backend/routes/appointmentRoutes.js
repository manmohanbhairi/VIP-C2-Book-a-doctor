const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const appointmentController = require("../controllers/appointmentController");


router.post(
"/",
authMiddleware,
appointmentController.bookAppointment
);


router.get(
"/",
authMiddleware,
appointmentController.getAppointments
);


router.put(
"/cancel/:id",
authMiddleware,
appointmentController.cancelAppointment
);


router.put(
"/approve/:id",
authMiddleware,
appointmentController.approveAppointment
);



module.exports = router;