const express = require("express");

const router = express.Router();

const {
  addDoctor,
  getDoctors,
  deleteDoctor,
  getDoctorById,
} = require("../controllers/doctorController");

router.post("/", addDoctor);

router.get("/", getDoctors);

router.get("/:id", getDoctorById);

router.delete("/:id", deleteDoctor);

module.exports = router;