const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Admin {
    _id: ID!
    username: String
    email: String
  }

  type ContactMessage {
    _id: ID!
    firstName: String
    lastName: String
    phoneNumber: String
    email: String
    message: String
  }

  type Auth {
    token: ID!
    admin: Admin
  }

  type Query {
    admin: Admin
    contactMessages: [ContactMessage]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addAdmin(username: String!, email: String!, password: String!): Auth
    addContactMessage(firstName: String!, lastName: String!, phoneNumber: String!, email: String!, message: String!): ContactMessage
  }
`;

module.exports = typeDefs;
