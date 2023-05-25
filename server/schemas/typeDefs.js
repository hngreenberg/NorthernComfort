const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Admin {
    _id: ID!
    username: String
    email: String
  }

  type ContactMessage {
    contactMessageId: ID!
    firstName: String
    lastName: String
    phoneNumber: String
    email: String
    message: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }

  type Query {
    admin: Admin
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addAdmin(username: String!, email: String!, password: String!): Auth
    addContactMessage(firstName: String!, lastName: String!, phoneNumber: String!, email: String!, message: String!): Auth
  }
`;

module.exports = typeDefs;
