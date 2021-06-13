const mongoose = require("mongoose");

module.exports = {
  // Connect to MongoDB
  connect: (dbHost) => {
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useUnifiedTopology", true);
    mongoose.connect(dbHost);
    mongoose.connection.on("error", (error) => {
      console.error(error);
      console.log("Mongo DB Connection error, please ensure db is running");
      process.exit();
    });
  },
  close: () => {
    mongoose.connection.close();
  },
};
