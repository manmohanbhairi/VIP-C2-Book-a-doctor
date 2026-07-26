const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");
// ===============================
// Book Appointment
// ===============================
exports.bookAppointment = async (req, res) => {
  try {

    const {
      patientId,
      doctorId,
      appointmentDate,
    } = req.body;

    // Prevent duplicate booking
    const existing = await Appointment.findOne({
      doctorId,
      appointmentDate,
    });

    if (existing) {
      return res.status(400).json({
        message: "This time slot is already booked.",
      });
    }

    const appointment = await Appointment.create({
      patientId,
      doctorId,
      appointmentDate,
      status: "Pending",
    });

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};

// ===============================
// User Appointments
// ===============================
exports.getAppointments = async (req, res) => {

  try {

    const appointments = await Appointment.find({
      patientId: req.user.id,
    }).populate("doctorId");

    res.json(appointments);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};

// ===============================
// Admin - All Appointments
// ===============================
exports.getAllAppointments = async (req, res) => {

  try {

    const appointments = await Appointment.find()
      .populate("doctorId")
      .populate("patientId");

    res.json(appointments);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};

// ===============================
// Approve Appointment
// ===============================
exports.approveAppointment = async (req, res) => {

  try {

    const appointment =
      await Appointment.findByIdAndUpdate(

        req.params.id,

        {
          status: "Approved",
        },

        {
          new: true,
        }

      );

    res.json(appointment);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};

// ===============================
// Cancel Appointment
// ===============================
exports.cancelAppointment = async (req, res) => {

  try {

    const appointment =
      await Appointment.findByIdAndUpdate(

        req.params.id,

        {
          status: "Cancelled",
        },

        {
          new: true,
        }

      );

    res.json(appointment);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};

// ===============================
// Get Booked Time Slots
// ===============================
exports.getBookedSlots = async (req, res) => {

  try {

    const { doctorId, date } = req.params;

    const appointments = await Appointment.find({

      doctorId,

      appointmentDate: {
        $regex: `^${date}`,
      },

      status: {
        $ne: "Cancelled",
      },

    });

    const bookedSlots = appointments.map((item) => {

      const parts = item.appointmentDate.split(" ");

      return `${parts[1]} ${parts[2]}`;

    });

    res.json(bookedSlots);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }


  exports.getAvailableSlots = async (req, res) => {
  try {
    const { doctorId, date } = req.query;

    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    // Get selected day name
    const dayName = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
    });

    // Check if doctor works on this day
    if (!doctor.availableDays.includes(dayName)) {
      return res.json({
        available: false,
        message: `Doctor is not available on ${dayName}`,
        slots: [],
      });
    }

    // Start with doctor's own slots
    let availableSlots = [...doctor.availableSlots];

    // Remove booked slots
    const booked = await Appointment.find({
      doctorId,
      appointmentDate: date,
      status: { $ne: "Cancelled" },
    });

    const bookedSlots = booked.map((a) => a.appointmentTime);

    availableSlots = availableSlots.filter(
      (slot) => !bookedSlots.includes(slot)
    );

    // Remove expired slots if date is today
    const today = new Date();
    const selectedDate = new Date(date);

    if (today.toDateString() === selectedDate.toDateString()) {

      const currentMinutes =
        today.getHours() * 60 + today.getMinutes();

      availableSlots = availableSlots.filter((slot) => {

        const [time, modifier] = slot.split(" ");

        let [hours, minutes] = time.split(":").map(Number);

        if (modifier === "PM" && hours !== 12) {
          hours += 12;
        }

        if (modifier === "AM" && hours === 12) {
          hours = 0;
        }

        const slotMinutes = hours * 60 + minutes;

        return slotMinutes > currentMinutes;
      });
    }

    res.json({
      available: true,
      slots: availableSlots,
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};
};