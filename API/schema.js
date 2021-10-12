const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    getUsers: [User]!
    getUser(id: ID!): User!
    getBooks: [Book]!
    getBook(id: ID!): Book!
    getGenres: [Genre]!
    getGenre(id: ID!): Genre!
    getReviews: [Review]!
    getReview(id: ID!): Review!
  }

  type Mutation {
    addUser(
      first_name: String!
      last_name: String!
      email: String!
      username: String!
      password: String!
      profileImage: String
    ): AuthPayload

    login(email: String!, password: String!): AuthPayload

    addBook(
      title: String!
      author: String!
      isbn: String!
      description: String!
      publicationDate: String
      pages: Int
      averageRating: Float
      bookCoverImage: String
      genre: String
    ): String!

    addGenre(genre_name: String!): String!

    addReview(book: ID!, review_description: String!, rating: Float!): String!
  }

  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    username: String!
    profileImage: String
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Follower {
    id: ID!
    user: User!
    following_user: User!
    is_following: Boolean
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    isbn: String!
    description: String!
    genre: Genre
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
    book: Book!
    review_description: String!
    rating: Float!
  }

  type Comment {
    id: ID!
    title: String!
    content: String!
    user: User!
    book: Book!
    comment_category: CommentCategory!
  }

  type CommentCategory {
    id: ID!
    name: String!
  }

  type List {
    id: ID!
    title: String!
    description: String
    book: Book
  }

  type Stat {
    id: ID!
    stat: Int!
    stat_category: StatCategory!
    user: User!
  }

  type StatCategory {
    id: ID!
    category_name: String!
  }
`;
