const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: false,
  },
});

const List = mongoose.model("List", listSchema);

module.exports = List;
