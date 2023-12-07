const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        players: [Player]!
    }

    type Player {
        _id: ID
        name: String
        jersey: Number
        stats: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]!
        user(username: String!): User
        players(username: String): [Player]
        player(playerId: ID!): Player
    }

    type mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;
