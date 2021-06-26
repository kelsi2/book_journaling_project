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

    // Follower mutations
    // addFollower: async (
    //   parent,
    //   { user, following_user, is_following },
    //   { models }
    // ) => {
    //   const follower = { user, following_user, is_following };

    //   const createdFollower = await models.Follower.create(follower);

    //   return jwt.sign({ id: createdFollower.id }, process.env.JWT_SECRET);
    // },

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
        genre,
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
        genre,
      };

      const createdBook = await models.Book.create(book);
      return jwt.sign({ id: createdBook.id }, process.env.JWT_SECRET);
    },

    // Genre mutations
    addGenre: async (parent, { genre_name }, { models }) => {
      const genre = { genre_name };

      const createdGenre = await models.Genre.create(genre);
      return jwt.sign({ id: createdGenre.id }, process.env.JWT_SECRET);
    },
  },
};
