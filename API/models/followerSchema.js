const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const followerSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  following_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Following User",
    required: true,
  },
  is_following: {
    type: Boolean,
    required: false,
  },
});

const Follower = mongoose.model("Follower", followerSchema);

module.exports = Follower;
