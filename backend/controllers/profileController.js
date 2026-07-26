const User = require("../models/User");

// =============================
// Get Profile
// =============================
exports.getProfile = async (req, res) => {

  try {

    const user = await User.findById(req.user.id).select("-password");

    res.json(user);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};

// =============================
// Update Profile
// =============================
exports.updateProfile = async (req, res) => {

  try {

    const updatedUser = await User.findByIdAndUpdate(

      req.user.id,

      {
        name: req.body.name,
        phone: req.body.phone,
        age: req.body.age,
        gender: req.body.gender,
        address: req.body.address,
        profileImage: req.body.profileImage,
      },

      {
        new: true,
      }

    ).select("-password");

    res.json(updatedUser);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};