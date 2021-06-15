module.exports = {
  Query: {
    getUsers(parent, args, { models }) {
      return models.User.find().then((data) => {
        return data;
      });
    },
  },
};
