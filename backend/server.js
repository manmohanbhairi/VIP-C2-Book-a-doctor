require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Book A Doctor API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

const authMiddleware = require("./middleware/authMiddleware");

app.get(
  "/api/profile",
  authMiddleware,
  (req, res) => {
    res.json({
      message: "Protected Route Accessed",
      user: req.user
    });
  }
);



app.use("/api/doctors", doctorRoutes);

app.use("/api/appointments", appointmentRoutes);