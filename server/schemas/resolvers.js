//TODO
const { User, Player } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
    }
};

module.exports = resolvers;