const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  review_description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
