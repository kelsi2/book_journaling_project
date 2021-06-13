const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: false,
  },
});
userSchema.pre("save", () => {
  const hashedPassword = bcrypt.hashSync(this.password, 12);
  this.password = hashedPassword;

  jwt.sign({ username }, process.env.JWT_SECRET);
});

const user = mongoose.model("user", userSchema);

module.exports = user;
