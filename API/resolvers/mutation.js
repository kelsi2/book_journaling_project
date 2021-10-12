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

  login: async(parent, { email, password }, { models }) => {
    email = email.trim().toLowerCase();

    const user = await models.User.findOne({ email })

    if (!user) {
      throw new Error('No user found')
    }

    const valid = await bcrypt.compare(password, user.password)

    if (!valid) {
      throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)

    return {
      token,
      user
    }
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

    // Review mutations
    addReview: async (
      parent,
      { review_description, rating, book },
      { models }
    ) => {
      const review = { review_description, rating, book };

      const createdReview = await models.Review.create(review);
      console.log(createdReview.id);
      return jwt.sign({ id: createdReview.id }, process.env.JWT_SECRET);
    },
  },
};
