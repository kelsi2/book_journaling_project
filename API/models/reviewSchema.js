const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: Int32Array,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
