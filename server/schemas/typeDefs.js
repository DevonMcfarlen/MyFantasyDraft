const typeDefs = `
    type User {
        username: String
        email: String
        password: String
    }

    type Query {
        users: [User]
        user(username: String!): User
      }
      type Auth {
        token: ID!
        user:User
    }
    type mutation {
        login(email: String!, password: String!); Auth
    }
`;

module.exports = typeDefs;
