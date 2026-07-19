const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  addReview,
  getReviews,
  deleteReview,
} = require("../controllers/reviewController");

router.post("/", authMiddleware, addReview);

router.get("/:doctorId", getReviews);

router.delete("/:id", authMiddleware, deleteReview);

module.exports = router;