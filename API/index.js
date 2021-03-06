const dotenv = require("dotenv");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");

const db = require("./db");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const models = require("./models");

dotenv.config();

const PORT = process.env.PORT || 8080;
const dbHost = process.env.CONNECTION_STRING;

db.connect(dbHost);

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      models,
    };
  },
});

server.applyMiddleware({
  app,
  path: "/api",
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  // mongoose.connect("mongodb://localhost:27017/graphql");
  console.log(
    `🚀 GraphQL server is running at http://localhost:${PORT}${server.graphqlPath}`
  );
});

module.exports = app;
