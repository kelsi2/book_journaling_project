const { gql } = require("apollo-server-express");

module.exports = gql`
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

  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    username: String!
    profileImage: String
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    isbn: Int!
    description: String!
    publicationDate: String
    pages: Int
    averageRating: Int
    bookCoverImage: String
  }

  type Genre {
    id: ID!
    genre_name: String!
  }

  type Review {
    id: ID!
    review: String!
    rating: Int!
  }

  type StatCategory {
    id: ID!
    category_name: String!
  }
`;
