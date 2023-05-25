const { Tech, Matchup, Reviewmodel, Admin, ContactMessage } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  // Query: {
  //   tech: async () => {
  //     return Tech.find({});
  //   },
  //   matchups: async (parent, { _id }) => {
  //     const params = _id ? { _id } : {};
  //     return Matchup.find(params);
  //   },
  // },
  Query: {
    admin: async (parent, args, context) => {
      if (context.admin) {
        const admin = await Admin.findById(context.admin._id);
        return admin;
      }
      throw new Error('You need to be logged in!');
    },
    contactMessages: async (parent, args, context) => {
      if (context.admin) {
        const contactMessages = await ContactMessage.find();
        return contactMessages;
      }
      throw new Error('You need to be logged in!');
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const admin = await Admin.findOne({ email });
      if (!admin) {
        throw new Error("Can't find this user");
      }
      const correctPw = await admin.isCorrectPassword(password);
      if (!correctPw) {
        throw new Error('Wrong password!');
      }
      const token = signToken(admin);
      return { token, admin };
    },
    addAdmin: async (parent, { username, email, password }) => {
      const admin = await Admin.create({ username, email, password });
      if (!admin) {
        throw new Error('Something went wrong!');
      }
      const token = signToken(admin);
      return { token, admin };
    },
    addContactMessage: async (parent, { firstName, lastName, phoneNumber, email, message }) => {
      const contactMessage = await ContactMessage.create({ firstName, lastName, phoneNumber, email, message });
      if (!contactMessage) {
        throw new Error('Something went wrong!');
      }
      return contactMessage;
    },
  },
};

module.exports = resolvers;
