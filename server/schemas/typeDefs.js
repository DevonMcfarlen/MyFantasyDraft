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
        playerName: String
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
    }

    type Mutation{
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addPlayer(username: String!, playerName: String!, jersey: String!, stats: String!): User
        removePlayer(username:String!, removePlayerId:String!):User 
    }
`

module.exports = typeDefs;
