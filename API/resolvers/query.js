/* 
/* Needed queries:
/*     - User followers
/*     - User books
*/

module.exports = {
  Query: {
    // User queries
    getUsers(parent, args, { models }) {
      return models.User.find();
    },
    getUser(parent, { id }, { models }) {
      return models.User.findById(id).exec();
    },

    // Book queries
    getBooks(parent, args, { models }) {
      return models.Book.find();
    },

    getBook(parent, { id }, { models }) {
      return models.Book.findById(id).exec();
    },

    // Genre queries
    getGenres(parent, args, { models }) {
      return models.Genre.find();
    },

    getGenre(parent, { id }, { models }) {
      return models.Genre.findById(id).exec();
    },

    // Review queries
    getReviews(parent, args, { models }) {
      return models.Review.find().populate('book').exec();
    },

    getReview(parent, { id }, { models }) {
      return models.Review.findById(id).populate('book').exec();
    },
  },
};
