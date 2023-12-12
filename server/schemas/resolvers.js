const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('players');
        },
        user: async (parent, {username}) => {
            return User.findOne({username}).populate("players");
        }
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
        addPlayer: async (parent, {username, playerName, jersey, stats}) => {
            return User.findOneAndUpdate(
                {username: username},
                { $addToSet: { players: { 
                    playerName: playerName,
                    jersey: jersey,
                    stats: stats
                } } },
                { new: true }
            );
        },
        removePlayer: async (parent, {username, removePlayerId}) => {
            return User.findOneAndUpdate(
                {username: username},
                { $pull: { players: {_id: removePlayerId } } },
                { new: true }
            );
        }
    
    }

};

module.exports = resolvers;