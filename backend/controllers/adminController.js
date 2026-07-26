const Doctor = require("../models/Doctor");
const User = require("../models/User");
const Appointment = require("../models/Appointment");
const Review = require("../models/Review");
const Favorite = require("../models/Favorite");

exports.getDashboard = async (req, res) => {
  try {
    const doctors = await Doctor.countDocuments();

    const patients = await User.countDocuments({
      role: "user",
    });

    const appointments = await Appointment.countDocuments();

    const reviews = await Review.countDocuments();

    const favorites = await Favorite.countDocuments();

    // Appointment Status Statistics
    const appointmentStats = await Appointment.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    // Doctor Specialization Statistics
    const specializationStats = await Doctor.aggregate([
      {
        $group: {
          _id: "$specialization",
          count: { $sum: 1 },
        },
      },
    ]);

    res.json({
      doctors,
      patients,
      appointments,
      reviews,
      favorites,
      appointmentStats,
      specializationStats,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};