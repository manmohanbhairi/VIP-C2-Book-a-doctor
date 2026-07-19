const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    specialization: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      default: "Hyderabad",
    },

    qualification: {
      type: String,
      default: "MBBS, MD",
    },

    hospital: {
      type: String,
      default: "Apollo Hospital",
    },

    phone: {
      type: String,
      default: "+91 9876543210",
    },

    about: {
      type: String,
      default:
        "Experienced doctor dedicated to providing quality healthcare.",
    },

    experience: {
      type: String,
      default: "5 Years",
    },

    fee: {
      type: Number,
      default: 500,
    },

    rating: {
      type: Number,
      default: 4.8,
    },

    image: {
      type: String,
      default:
        "https://cdn-icons-png.flaticon.com/512/2785/2785482.png",
    },

    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);