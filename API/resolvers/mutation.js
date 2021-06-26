const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  Mutation: {
    // User mutations
    addUser: async (
      parent,
      { first_name, last_name, email, username, password },
      { models }
    ) => {
      email = email.trim().toLowerCase();

      const hashed = await bcrypt.hash(password, 10);

      const user = { first_name, last_name, email, username, password: hashed };

      const createdUser = await models.User.create(user);

      return jwt.sign({ id: createdUser.id }, process.env.JWT_SECRET);
    },
  },

  // Book mutations
  addBook: async (
    parent,
    {
      title,
      author,
      isbn,
      description,
      publicationDate,
      pages,
      averageRating,
      bookCoverImage,
    },
    { models }
  ) => {
    const book = {
      title,
      author,
      isbn,
      description,
      publicationDate,
      pages,
      averageRating,
      bookCoverImage,
    };
    console.log(book);

    const createdBook = await models.Book.create(book);

    console.log(createdBook);
    return "Created";
    // return jwt.sign({ id: createBook.id }, process.env.JWT_SECRET);
  },
};
