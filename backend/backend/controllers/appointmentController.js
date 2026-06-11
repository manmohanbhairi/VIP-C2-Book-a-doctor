const Appointment = require("../models/Appointment");

// Book Appointment
exports.bookAppointment = async (req, res) => {
  try {
const appointment = await Appointment.create({
  patientId: req.user.id,
  doctorId: req.body.doctorId,
  appointmentDate: req.body.appointmentDate,
  status: "Pending"
});
    res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Appointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("patientId")
      .populate("doctorId");

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.cancelAppointment = async (req, res) => {
  try {
    const appointment =
      await Appointment.findByIdAndUpdate(
        req.params.id,
        { status: "Cancelled" },
        { new: true }
      );

    res.json({
      message: "Appointment cancelled",
      appointment
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.approveAppointment =
  async (req, res) => {
    try {

      const appointment =
        await Appointment.findByIdAndUpdate(
          req.params.id,
          {
            status: "Approved"
          },
          {
            new: true
          }
        );

      res.json({
        message:
          "Appointment approved",
        appointment
      });

    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };