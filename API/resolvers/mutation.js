module.exports = {
  Mutation: {
    addUser: async (parent, args, { models: userSchema }) => {
      console.log(userSchema);
      let { first_name, last_name, email, username, password, profileImage } =
        args;

      email = email.trim().toLowerCase();

      const user = await userSchema.createUser({
        first_name,
        last_name,
        email,
        username,
        password,
        profileImage,
      });

      return user;

      // const userObj = new User({
      //   first_name,
      //   last_name,
      //   email,
      //   username,
      //   password,
      //   profileImage,
      // });

      // // bcrypt.hash(password, 10);

      // return userObj
      //   .save()
      //   .then((result) => {
      //     // jwt.sign({ username }, process.env.JWT_SECRET);
      //     console.log(userObj);
      //     return { ...result };
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
    },
  },
};
