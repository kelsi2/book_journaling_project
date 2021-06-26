const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: String,
    required: false,
  },
  pages: {
    type: Number,
    required: false,
  },
  averageRating: {
    type: Number,
    required: false,
  },
  bookCoverImage: {
    type: String,
    required: false,
  },
  genre: {
    type: String,
    required: false,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
