const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const CommentCategory = mongoose.model(
  "Comment Category",
  commentCategorySchema
);

module.exports = CommentCategory;
