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
      if (context.user) {
        const user = await User.findById(context.user._id).populate('savedBooks');
        return user;
      }
      throw new Error('You need to be logged in!');
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Can't find this user");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new Error('Wrong password!');
      }
      const token = signToken(user);
      return { token, user };
    },
    addContactMessage: async (parent, { firstName, lastName, phoneNumber, email, message }) => {
      const contactMessage = await ContactMessage.create({ username, email, password });
      if (!user) {
        throw new Error('Something went wrong!');
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
