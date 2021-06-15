const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

module.exports = {
  Mutation: {
    addUser: async (
      parent,
      { first_name, last_name, email, username, password },
      { models }
    ) => {
      email = email.trim().toLowerCase();

      const hashed = await bcrypt.hash(password, 10);

      const user = { first_name, last_name, email, username, password: hashed };

      const createdUser = await models.User.create(user);

      console.log(createdUser);

      return jwt.sign({ id: createdUser.id }, process.env.JWT_SECRET);
    },
  },
};
