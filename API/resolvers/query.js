module.exports = {
  Query: {
    getUsers(parent, args, context, info) {
      // return users.find((user) => user.id === args.id);
      return context.db
        .collection("users")
        .findOne()
        .then((data) => {
          return data.users;
        });
    },
  },
};
