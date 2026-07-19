const Review = require("../models/Review");
const Appointment = require("../models/Appointment");

exports.addReview = async (req, res) => {
  try {

    // Check appointment
    const appointment = await Appointment.findOne({
      doctorId: req.body.doctorId,
      patientId: req.user.id,
      status: "Approved",
    });

    if (!appointment) {
      return res.status(400).json({
        message: "You can review only after an approved appointment."
      });
    }

    // Check duplicate review
    const alreadyReviewed = await Review.findOne({
      doctorId: req.body.doctorId,
      patientId: req.user.id,
    });

    if (alreadyReviewed) {
      return res.status(400).json({
        message: "You already reviewed this doctor."
      });
    }

    const review = await Review.create({
      doctorId: req.body.doctorId,
      patientId: req.user.id,
      rating: req.body.rating,
      comment: req.body.comment,
    });

    res.status(201).json(review);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};