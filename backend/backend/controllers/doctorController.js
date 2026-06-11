const Doctor = require("../models/Doctor");

// Add Doctor
exports.addDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);

    res.status(201).json({
      message: "Doctor added successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Doctor deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};