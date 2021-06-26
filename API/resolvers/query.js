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
      return models.Books.find();
    },
  },
};
