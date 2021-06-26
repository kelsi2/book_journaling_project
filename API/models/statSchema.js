const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statSchema = new Schema({
  stat: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  stat_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stat Category",
    required: true,
  },
});

const Stat = mongoose.model("Stat", statSchema);

module.exports = Stat;
