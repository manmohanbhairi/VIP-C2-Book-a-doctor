const Favorite = require("../models/Favorite");

// Add Favorite
exports.addFavorite = async (req, res) => {

  try {

    const already = await Favorite.findOne({
      patientId: req.user.id,
      doctorId: req.body.doctorId,
    });

    if (already) {
      return res.status(400).json({
        message: "Already in favorites",
      });
    }

    const favorite = await Favorite.create({
      patientId: req.user.id,
      doctorId: req.body.doctorId,
    });

    res.status(201).json(favorite);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};

// Get Favorites
exports.getFavorites = async (req, res) => {

  try {

    const favorites = await Favorite.find({
      patientId: req.user.id,
    }).populate("doctorId");

    res.json(favorites);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};

// Remove Favorite
exports.removeFavorite = async (req, res) => {

  try {

    await Favorite.findByIdAndDelete(req.params.id);

    res.json({
      message: "Removed from favorites",
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};