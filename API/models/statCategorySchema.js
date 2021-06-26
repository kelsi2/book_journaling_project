const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statCategorySchema = new Schema({
  category_name: {
    type: String,
    required: true,
  },
});

const StatCategory = mongoose.model("Stat_Category", statCategorySchema);

module.exports = StatCategory;
