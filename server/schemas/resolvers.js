const { User, Player } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('Player');
        },
        user: async (parent, {username}) => {
            return User.findOne({username}).populate("PLayer");
        },
        Player: async (parent, {username}) => {
            const params = username ? {username} : {};
            return Player.find(params).sort({ createdAt: -1});
        },
        Player: async (parent, { PlayerId }) => {
            return Player.findOne({_id: PlayerId});
        },
    },


Mutation: {
    addUser: async (parent, { username, email, password}) => {
        const user = await User.create({username, email, password})
        const token = signToken(user);
        return {user, token};
    },

    login: async (parent, {email, password}) => {
        const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError
      }
      const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
        throw AuthenticationError
      }
     const token = signToken(user);
      return { token, user };
    },

}

};

module.exports = resolvers;