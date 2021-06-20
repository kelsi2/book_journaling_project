const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statCategorySchema = new Schema({
  category_name: {
    type: String,
    required: true,
  },
});

const StatCategory = mongoose.model("Stat Category", statCategorySchema);

module.exports = StatCategory;
