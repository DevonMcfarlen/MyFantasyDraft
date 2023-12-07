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
        jersey: String
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

    type Mutation{
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addPlayer(name: String!, jersey: String!, stats: String!, username: String!): User
    }
`

module.exports = typeDefs;
