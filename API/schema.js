const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    username: String!
    profileImage: String
  }

  type Query {
    getUsers: [User]!
    getUser(id: ID!): User!
  }

  type Mutation {
    addUser(
      first_name: String!
      last_name: String!
      email: String!
      username: String!
      password: String!
      profileImage: String
    ): String!
  }
`;
