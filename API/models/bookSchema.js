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
    type: Int32Array,
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
    type: Int32Array,
    required: false,
  },
  averageRating: {
    type: Int32Array,
    required: false,
  },
  bookCoverImage: {
    type: String,
    required: false,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
