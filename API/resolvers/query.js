module.exports = {
  Query: {
    getUsers(parent, args, { models }) {
      return models.User.find();
    },
    getUser(parent, { id }, { models }) {
      return models.User.findById(id).exec();
    },
  },
};
